"use client";

import { useRef, useEffect } from "react";

//* style css
import style from "./testimonial.module.scss";

//* dependencies
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";

//* slick slider
import Slider from "react-slick";

//* data
import { testimonial_data } from "@/data/Home/testimonial_data.js";

//* image
import quoteImage from "@/images/testimonial/icons/quote.svg";

function Testimonial() {
     const data = testimonial_data;

     // * image animation ------- //
     const imageRef = useRef(null);

     useEffect(() => {
          const image = imageRef.current;
          const tl = gsap.timeline({ repeat: -1, yoyo: true });

          tl.to(image, { duration: 1, y: 10, ease: "power1.inOut" }).to(image, {
               duration: 1,
               y: 0,
               ease: "power1.inOut",
          });

          tl.play();
     }, []);

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          cssEase: "linear",
          responsive: [
               {
                    breakpoint: 991,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };

     return (
          <>
               <section className={`${style.testimonial} testimonial-global`} id="testimonial">
                    <Container>
                         <div className={`${style.testimonial_wrapper}`}>
                              <div className={`${style.testimonial_title}`}>
                                   <h2 className={`h2_title primary-fonts text-center color-yellow-gray`}>
                                        People love us
                                   </h2>
                                   <div className={`${style.testimonial_text} paragraph_text_small mx-auto`}>
                                        <p className="text-center text-white">
                                             18000+ people love using AI photo, check what they have to say about us!
                                        </p>
                                   </div>
                              </div>
                              <div className={`${style.testimonial_content}`}>
                                   <div className={`${style.testimonial_slider}`}>
                                        <Row>
                                             <Slider {...settings}>
                                                  {data.map((item, index) => {
                                                       return (
                                                            <Col lg={4} md={6} key={index}>
                                                                 <div
                                                                      className={`${style.testimonial_box_wrapper} d-row-star`}
                                                                 >
                                                                      <div className={`${style.review_starts} d-flex`}>
                                                                           <Image
                                                                                src={item.star.src}
                                                                                height={item.star.height}
                                                                                width={item.star.width}
                                                                                alt={item.star.alt}
                                                                           />
                                                                           <Image
                                                                                src={item.star.src}
                                                                                height={item.star.height}
                                                                                width={item.star.width}
                                                                                alt={item.star.alt}
                                                                           />
                                                                           <Image
                                                                                src={item.star.src}
                                                                                height={item.star.height}
                                                                                width={item.star.width}
                                                                                alt={item.star.alt}
                                                                           />
                                                                           <Image
                                                                                src={item.star.src}
                                                                                height={item.star.height}
                                                                                width={item.star.width}
                                                                                alt={item.star.alt}
                                                                           />
                                                                           <Image
                                                                                src={item.star.src}
                                                                                height={item.star.height}
                                                                                width={item.star.width}
                                                                                alt={item.star.alt}
                                                                           />
                                                                      </div>

                                                                      <h5 className="h5_title weight-600 primary-fonts">
                                                                           {item.name}
                                                                      </h5>
                                                                      <span className="text-small d-block weight-400">
                                                                           {item.profession}
                                                                      </span>
                                                                      <div
                                                                           className={` ${style.testimonial_text} paragraph-text-small`}
                                                                      >
                                                                           <p className="weight-400">
                                                                                {item.description}
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </Col>
                                                       );
                                                  })}
                                             </Slider>
                                        </Row>
                                        <div ref={imageRef} className={`${style.quoteImage}`}>
                                             <Image src={quoteImage} alt="quote image" height={47} width={78} />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </section>
          </>
     );
}

export default Testimonial;
