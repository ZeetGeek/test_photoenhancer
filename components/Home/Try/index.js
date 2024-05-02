//* style css
import style from "./try.module.scss";

//* dependencies
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

//* data
import { try_data } from "@/data/Home/try_data.js";

function Try() {
     const data = try_data;

     return (
          <>
               <section className={`${style.try} try-global`} id="try">
                    <Container>
                         <div className={`${style.try_wrapper}`}>
                              <div className={`${style.try_title}`}>
                                   <h2 className={`h2_title primary-fonts text-center color-yellow-gray`}>
                                        AI-Powered Features
                                   </h2>
                                   <div className={`${style.try_text} paragraph_text_small mx-auto`}>
                                        <p className="text-center text-white">
                                             Transform your photos, enhance them and bring them back to life with AI
                                             Photo&apos;s advanced AI tools.
                                        </p>
                                   </div>
                              </div>
                              <div className={`${style.try_content}`}>
                                   <Row>
                                        {data.map((item, index) => (
                                             <Col key={index} lg={4} sm={6}>
                                                  <div className={`${style.try_box}`}>
                                                       <div className={`${style.try_box_inner} d-column-star`}>
                                                            <div className={`${style.try_box_image_wrapper}`}>
                                                                 <Image
                                                                      className="image-fit"
                                                                      src={item.image.src}
                                                                      alt={item.image.alt}
                                                                      width={323}
                                                                      height={215}
                                                                 />
                                                            </div>
                                                            <h6 className="text_large primary-fonts weight-600">
                                                                 {item.title}
                                                            </h6>
                                                            <div
                                                                 className={`${style.feature_description} paragraph_text_small`}
                                                            >
                                                                 <p className="color-gray-light weight-400 pe-2 pe-sm-3">
                                                                      {item.text}
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Col>
                                        ))}
                                   </Row>
                              </div>
                         </div>
                    </Container>
               </section>
          </>
     );
}

export default Try;
