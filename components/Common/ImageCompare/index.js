"use client";
import Image from "next/image";
import { useReducer } from "react";
import { ArrowSeparate } from "iconoir-react";

const reducer = (state, action) => {
     switch (action.type) {
          case "change":
               return {
                    rangeValue: action.payload,
               };
          case "move":
               return {
                    rangeValue: Math.round(action.payload),
               };
          default:
               return state;
     }
};

function BeforeAfter({
     beforeImage,
     afterImage,
     onChange,
     onPointerMove,
     onPointerEnter,
     onPointerLeave,
     pointerMove = false,
     className = "before-after-slider",
     beforeClassName = "before",
     afterClassName = "after",
     buttonClassName = "resize-button",
     style,
     beforeStyle,
     afterStyle,
     buttonStyle,
     alt
}) {
     const [{ rangeValue }, dispatch] = useReducer(reducer, {
          rangeValue: 50,
     });

     const handleChange = (event) => {
          dispatch({ type: "change", payload: Number(event.target.value) });

          if (onChange) onChange(event);
     };

     const handlePointerMove = (event) => {
          const { clientX, currentTarget } = event;
          const { left, width } = currentTarget.getBoundingClientRect();
          const positionX = clientX - left;

          if (positionX >= 0) dispatch({ type: "move", payload: (positionX / width) * 100 });

          if (onPointerMove) onPointerMove(event);
     };

     const handlePointerEnter = (event) => {
          if (onPointerEnter) onPointerEnter(event);
     };

     const handlePointerLeave = (event) => {
          if (onPointerLeave) onPointerLeave(event);
     };

     return (
          <div
               className={className}
               style={{
                    position: `relative`,
                    overflow: `hidden`,
                    width: "fit-content",
                    cursor: "e-resize",
                    userSelect: "none",
                    ...style,
               }}
               onPointerMove={pointerMove ? handlePointerMove : undefined}
               onPointerEnter={handlePointerEnter}
               onPointerLeave={handlePointerLeave}
          >
               <div
                    className={beforeClassName}
                    style={{
                         position: "absolute",
                         overflow: "hidden",
                         width: `${rangeValue}%`,
                         height: "100%",
                         top: 0,
                         left: 0,
                         borderRight: "2px solid #eee",
                         ...beforeStyle,
                    }}
               >
                    <Image src={beforeImage} height={757} width={1140} alt={alt} style={{ height: "100%" }} />
               </div>

               <div className={afterClassName} style={afterStyle}>
                    <Image
                         src={afterImage}
                         height={757}
                         width={1140}
                         alt={alt}
                         style={{ maxWidth: "100%", width: "100%", display: "block" }}
                    />
               </div>

               <label htmlFor="#slider-range" className="d-none" >Range Slider</label>

               {!pointerMove && (
                    <>
                         <input
                              type="range"
                              min={0}
                              max={100}
                              value={rangeValue}
                              name="slider"
                              onChange={handleChange}
                              id="slider-range"
                              style={{
                                   appearance: "none",
                                   backgroundColor: "transparent",
                                   width: "100%",
                                   height: " 100%",
                                   position: "absolute",
                                   top: "50%",
                                   left: "50%",
                                   transform: "translate(-50%, -50%)",
                                   cursor: "inherit",
                              }}
                         />

                         <div
                              className={buttonClassName}
                              style={{
                                   backgroundColor: "#fff",
                                   pointerEvents: "none",
                                   position: "absolute",
                                   top: "50%",
                                   left: `${rangeValue}%`,
                                   transform: `translate(-50%,-50%)`,
                                   borderRadius: "50%",
                                   width: 50,
                                   height: 50,
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   ...buttonStyle,
                              }}
                         >
                              <ArrowSeparate color="black" height={36} width={36} strokeWidth={2} />
                         </div>
                    </>
               )}
          </div>
     );
}

export default BeforeAfter;
