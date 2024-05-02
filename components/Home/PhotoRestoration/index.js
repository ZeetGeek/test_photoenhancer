"use client";

//* style css
import style from "./photo-restoration.module.scss";

//* dependencies
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import BeforeAfter from "@/component/Common/ImageCompare";
import gsap from "gsap";

//* slick slider
import Slider from "react-slick";

//* data
import { photo_restoration } from "@/data/Home/photo_restoration_data.js";

//* image
import arrow from "@/images/photo_restoration/icons/arrow.svg";
import bgShape1 from "@/images/photo_restoration/icons/1.svg";
import bgShape2 from "@/images/photo_restoration/icons/2.svg";
import bgShape3 from "@/images/photo_restoration/icons/3.svg";

function CustomPrevArrow(props) {
     const { onClick } = props;
     return (
          <div onClick={onClick} className="slick_arrow previous d-flex align-items-center justify-content-center">
               <Image src={arrow} alt={`arrow previous icon`} height={14} width={8} />
          </div>
     );
}

function CustomNextArrow(props) {
     const { onClick } = props;
     return (
          <div onClick={onClick} className="slick_arrow next d-flex align-items-center justify-content-center">
               <Image src={arrow} alt={`arrow next icon`} height={14} width={8} />
          </div>
     );
}

function PhotoRestoration() {
     const data = photo_restoration;

     //* slick slider
     const [nav1, setNav1] = useState();
     const [nav2, setNav2] = useState();
     const slider1 = useRef(null);
     const slider2 = useRef(null);

     useEffect(() => {
          setNav1(slider1.current);
          setNav2(slider2.current);
     }, []);

     //* start animation

     const starsRef = useRef([]);

     useEffect(() => {
          const stars = starsRef.current;

          gsap.set(stars, { scale: 0, opacity: 0 });

          gsap.to(stars, {
               opacity: 1,
               scale: 1,
               duration: 1,
               ease: "elastic.out(1, 0.3)",
               stagger: {
                    amount: 0.5,
                    grid: "auto",
                    from: "center",
               },
               repeat: -1,
               yoyo: true,
          });
     }, []);

     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 1,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
          autoplay: false,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          cssEase: "linear",
          asNavFor: nav1,
          ref: slider2,
          focusOnSelect: true,

          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 7,
                    },
               },
               {
                    breakpoint: 990,
                    settings: {
                         slidesToShow: 6,
                    },
               },
               {
                    breakpoint: 766,
                    settings: {
                         slidesToShow: 4,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 3,
                    },
               },
               {
                    breakpoint: 330,
                    settings: {
                         slidesToShow: 2,
                    },
               },
          ],
     };

     const mainSliderSetting = {
          swipe: false,
          pauseOnHover: true,
     };

     return (
          <>
               <section className={`${style.photo_restoration} photo_restoration_global section-padding-x`} id="photo_restoration">
                    <div className={`${style.photo_restoration_box} blur-bg`}>
                         <Container>
                              <Row>
                                   <Col lg={12}>
                                        <div className={`${style.photo_restoration_wrapper}`}>
                                             <div className={`${style.photo_restoration_title}`}>
                                                  <h2 className={`h2_title primary-fonts text-center text-white`}>
                                                       Experience the magic
                                                  </h2>
                                                  <div
                                                       className={`${style.photo_restoration_text} paragraph_text_small mx-auto`}
                                                  >
                                                       <p className="text-center">
                                                            Try our collection of powerf&apos;ul AI tools to turn your
                                                            photos into stunning artworks. Make your photos look
                                                            magical.
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className={`${style.photo_restoration_widget}`}>
                                                  <div
                                                       className={`${style.main_slider} photo_restoration_mail_slider_global`}
                                                  >
                                                       <Slider {...mainSliderSetting} asNavFor={nav2} ref={slider1}>
                                                            {data.features.map((item, index) => {
                                                                 return (
                                                                      <BeforeAfter key={index}
                                                                           beforeImage={item.before.src}
                                                                           afterImage={item.after.src}
                                                                           alt={`${item.title} Image`}
                                                                      />
                                                                 );
                                                            })}
                                                       </Slider>
                                                  </div>
                                                  <div className="photo_restoration_slider">
                                                       <div
                                                            className={`${style.features_slider} photo_restoration_slider`}
                                                       >
                                                            <Slider {...settings}>
                                                                 {data.features.map((item, index) => {
                                                                      return (
                                                                           <div
                                                                                key={index}
                                                                                className={`${style.feature_box}`}
                                                                           >
                                                                                <div
                                                                                     className={`${style.feature_image}`}
                                                                                >
                                                                                     <Image
                                                                                          src={item.Image}
                                                                                          alt={`${item.title} feature image`}
                                                                                          height={80}
                                                                                          width={124}
                                                                                     />
                                                                                </div>
                                                                                <h6
                                                                                     className={`${style.feature_name} text-center primary-fonts`}
                                                                                >
                                                                                     {item.title}
                                                                                </h6>
                                                                           </div>
                                                                      );
                                                                 })}
                                                            </Slider>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                         <div className={`${style.photo_restoration_bg_shapes}`}>
                              <Image
                                   src={bgShape1}
                                   height={114}
                                   width={93}
                                   alt="Background Shape"
                                   className={`${style.shape_1}`}
                                   ref={(el) => (starsRef.current[0] = el)}
                              />
                              <Image
                                   src={bgShape2}
                                   height={136}
                                   width={106}
                                   alt="Background Shape"
                                   className={`${style.shape_2}`}
                                   ref={(el) => (starsRef.current[1] = el)}
                              />
                              <Image
                                   src={bgShape3}
                                   height={114}
                                   width={87}
                                   alt="Background Shape"
                                   className={`${style.shape_3}`}
                                   ref={(el) => (starsRef.current[2] = el)}
                              />
                         </div>
                    </div>
               </section>
          </>
     );
}

export default PhotoRestoration;
