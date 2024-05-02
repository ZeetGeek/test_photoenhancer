//* style css
import style from "./feature.module.scss";

//* dependencies
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

//* header data
import { features_data } from "@/data/Home/features_data";

function Features() {
     const data = features_data;
     return (
          <>
               <section className={`${style.feature} feature_global`} id="why_us">
                    <Container>
                         <div className={`${style.feature_wrapper}`}>
                              <div className={`${style.feature_title}`}>
                                   <h2 className="text-center h2_title color-white weight-500 primary-fonts mx-auto">
                                        Why Us?
                                   </h2>
                              </div>
                              <div className={`${style.feature_content}`}>
                                   <Row>
                                        {data.map((item, index) => (
                                             <Col lg={3} md={4} sm={6} key={index} className="mx-auto">
                                                  <div className={`${style.feature_box_wrapper} d-column-center`}>
                                                       <div className={`${style.feature_icon}`}>
                                                            <Image
                                                                 src={item.icon.src}
                                                                 alt={item.icon.alt}
                                                                 height={item.icon.height}
                                                                 width={item.icon.width}
                                                            />
                                                       </div>
                                                       <h5 className="h5_title primary-fonts color-accent text-center weight-600">
                                                            {item.title}
                                                       </h5>
                                                       <p className="text-center text-small text-white weight-400">
                                                            {item.text}
                                                       </p>
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

export default Features;
