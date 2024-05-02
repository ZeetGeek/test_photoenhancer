"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import arrowUp from "@/images/scroll_to_top/arrow_up.svg";
import "./scroll-to-top.scss";

const ScrollToTop = () => {
     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     const buttonRef = useRef(null);

     useEffect(() => {
          const image = buttonRef.current;
          const tl = gsap.timeline({ repeat: -1, yoyo: true });

          tl.to(image, { duration: 1, y: 10, ease: "power1.inOut" }).to(image, {
               duration: 1,
               y: 0,
               ease: "power1.inOut",
          });

          tl.play();
     }, []);

     const handleScroll = () => {
          const button = buttonRef.current;

          gsap.to(button, {
               duration: 0.3,
               opacity: window.scrollY > 100 ? 1 : 0,
               display: window.scrollY > 100 ? "flex" : "none",
          });
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth",
          });
     };

     return (
          <button ref={buttonRef} className="scroll-to-top-button" name="scroll to top button" onClick={scrollToTop}>
               <Image src={arrowUp} height={35} width={35} alt="scroll to top arrow" />
          </button>
     );
};

export default ScrollToTop;
