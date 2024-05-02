"use client";
//* dependency
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import style from "./faq.module.scss";
import { faq_data } from "@/data/Home/faq_data.js";
import { NavArrowDown } from "iconoir-react";
import faqImage from "@/images/faq/faq.png";

function FAQ() {
     const data = faq_data;

     const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
     const toggleAccordion = (index) => {
          setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
     };

     // * image animation ------- //
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

     return (
          <>
               <section className={`${style.faq}  faq_global`} id="faq">
                    <Container>
                         <div className={`${style.faq_wrapper}`}>
                              <div className={`${style.faq_title}`}>
                                   <h2 className={`h2_title primary-fonts text-center color-yellow-gray`}>FAQ</h2>
                              </div>
                              <div className={`${style.faq_content}`}>
                                   <Row className="align-items-start justify-content-center">
                                        <Col lg={6}>
                                             {data.map(
                                                  (item, index) =>
                                                       item.number <= 4 && (
                                                            <div
                                                                 key={index}
                                                                 onClick={() => {
                                                                      toggleAccordion(index);
                                                                 }}
                                                                 className={`${style.howToUseAccordionBox} ${
                                                                      index === openAccordionIndex
                                                                           ? "accordion_active"
                                                                           : ""
                                                                 } cursor-pointer accordion-box`}
                                                            >
                                                                 <div
                                                                      className={`${style.accordionHeader} d-flex justify-content-between align-items-center accordion-header`}
                                                                 >
                                                                      <h6
                                                                           className={`${style.accordionName} h6_title weight-600 primary-fonts color-white accordion-name`}
                                                                      >
                                                                           {item.title}
                                                                      </h6>

                                                                      <div className="accordion_icon">
                                                                           <NavArrowDown
                                                                                height={24}
                                                                                width={24}
                                                                                strokeWidth={4}
                                                                           />
                                                                      </div>
                                                                 </div>

                                                                 <div className="accordion-description paragraph-text-small">
                                                                      <div>
                                                                           <div className="accordion_description_wrapper">
                                                                                <p className="weight-400">
                                                                                     {item.description}
                                                                                </p>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       )
                                             )}
                                        </Col>
                                        <Col lg={6}>
                                             {data.map(
                                                  (item, index) =>
                                                       item.number >= 5 && (
                                                            <div
                                                                 key={index}
                                                                 onClick={() => {
                                                                      toggleAccordion(index);
                                                                 }}
                                                                 className={`${style.howToUseAccordionBox} ${
                                                                      index === openAccordionIndex
                                                                           ? "accordion_active"
                                                                           : ""
                                                                 } cursor-pointer accordion-box`}
                                                            >
                                                                 <div
                                                                      className={`${style.accordionHeader} d-flex justify-content-between align-items-center accordion-header`}
                                                                 >
                                                                      <h6
                                                                           className={`${style.accordionName} h6_title weight-600 primary-fonts color-white accordion-name`}
                                                                      >
                                                                           {item.title}
                                                                      </h6>

                                                                      <div className="accordion_icon">
                                                                           <NavArrowDown
                                                                                height={24}
                                                                                width={24}
                                                                                strokeWidth={4}
                                                                           />
                                                                      </div>
                                                                 </div>

                                                                 <div className="accordion-description paragraph-text-small">
                                                                      <div>
                                                                           <div className="accordion_description_wrapper">
                                                                                <p className="weight-400">
                                                                                     {item.description}
                                                                                </p>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       )
                                             )}
                                        </Col>
                                   </Row>
                              </div>
                              <div className={style.sectionImage}>
                                   <Image
                                        ref={imageRef}
                                        src={faqImage}
                                        height={134}
                                        width={94}
                                        alt="FAQ Section Image"
                                   ></Image>
                              </div>
                         </div>
                    </Container>
               </section>
          </>
     );
}

export default FAQ;
