"use client";
import { useRef, useEffect, useState } from "react";
import style from "./how-to-use.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import pictureImage from "@/images/how_to_use/picture.png";
import howToUseImage1 from "@/images/how_to_use/1.png";
import howToUseImage2 from "@/images/how_to_use/2.png";
import howToUseImage3 from "@/images/how_to_use/3.png";
import { how_to_use } from "@/data/Home/how_to-use_data.js";

function HowToUse() {
     const data = how_to_use;

     // Image animation
     const imageRef = useRef(null);

     useEffect(() => {
          const image = imageRef.current;
          const tl = gsap.timeline({ repeat: -1, yoyo: true });

          tl.to(image, { duration: 1, y: 20, ease: "power1.inOut" }).to(image, {
               duration: 1,
               y: 0,
               ease: "power1.inOut",
          });

          tl.play();
     }, []);

     // Accordion state
     const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
     const [howToUseImage, setHowToUseImage] = useState(1);

     const toggleAccordion = (index) => {
          setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
          setHowToUseImage(data[index].number);
     };

     return (
          <>
               <section className={`${style.how_to_use} how_to_use_global section-padding-x`} id="how_to_use">
                    <div className={`${style.how_to_us_box} blur-bg`}>
                         <Container>
                              <div className={`${style.how_to_us_wrapper}`}>
                                   <div className={`${style.how_to_use_title}`}>
                                        <h2 className="h2_title text-white text-center primary-fonts">How to use ?</h2>
                                   </div>
                                   <div className={`${style.how_to_use_content}`}>
                                        <Row className="align-items-center">
                                             <Col lg={6} >
                                                  <div
                                                       className={`${style.howToUseImageWrapper} d-flex justify-content-lg-end justify-content-center align-items-center`}
                                                  >
                                                       <Image
                                                            src={
                                                                 howToUseImage === 1
                                                                      ? howToUseImage1
                                                                      : howToUseImage === 2
                                                                      ? howToUseImage2
                                                                      : howToUseImage === 3
                                                                      ? howToUseImage3
                                                                      : null
                                                            }
                                                            height={577}
                                                            width={284}
                                                            alt="how to use image"
                                                       />
                                                  </div>
                                             </Col>
                                             <Col lg={6}>
                                                  <div className={`${style.howToUseContentWrapper}`}>
                                                       {data.map((item, index) => (
                                                            <div
                                                                 key={index}
                                                                 onClick={() => {
                                                                      toggleAccordion(index);
                                                                      setHowToUseImage(item.number);
                                                                 }}
                                                                 className={`${style.howToUseAccordionBox} ${
                                                                      index === openAccordionIndex
                                                                           ? "accordion_active"
                                                                           : ""
                                                                 }  accordion-box`}
                                                            >
                                                                 <div
                                                                      className={`${style.accordionHeader} d-flex justify-content-between align-items-center accordion-header`}
                                                                 >
                                                                      <h5
                                                                           className={`${style.accordionName} cursor-pointer h5_title weight-600 primary-fonts color-white accordion-name`}
                                                                      >
                                                                           {item.number}&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;
                                                                           {item.title}
                                                                      </h5>
                                                                 </div>

                                                                 <div className="accordion-description paragraph-text-small">
                                                                      <div>
                                                                           <div className="accordion_description_wrapper">
                                                                                <p className="weight-400">
                                                                                     {item.text}
                                                                                </p>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       ))}
                                                  </div>
                                             </Col>
                                        </Row>
                                   </div>
                              </div>
                         </Container>

                         <div ref={imageRef} className={`${style.pictureImage}`}>
                              <Image src={pictureImage} alt="picture image" height={149} width={150} />
                         </div>
                    </div>
               </section>
          </>
     );
}

export default HowToUse;
