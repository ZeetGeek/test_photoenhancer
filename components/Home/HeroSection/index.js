//* style css
import style from "./hero.module.scss";

//* dependencies

import { Container, Row, Col } from "react-bootstrap";
import { AppStoreButton, PlayStoreButton } from "@/components/Common/Button";

function HeroSection() {
     return (
          <>
               <section className={`${style.hero_section}`} id="hero_section">
                    <Container>
                         <Row>
                              <Col xs={12} className="p-lg-0">
                                   <div className={`${style.hero_content} text-center`}>
                                        <h1 className="h1_title primary-fonts text-center text-capitalize weight-600">
                                             The New Generation of &nbsp;
                                             <span
                                                  className={`${style.highlight} primary-fonts capitalize text-center d-inline-block`}
                                             >
                                                  AI-driven
                                             </span>
                                             &nbsp; Photo enhancement Tool
                                        </h1>
                                        <div className={`${style.hero_paragraph} paragraph_text_very_large mx-auto`}>
                                             <p className="text-center color-gray">
                                                  Upscale images, remove unwanted objects, improve image quality and do
                                                  much more with AI photo enhancer.
                                             </p>
                                        </div>
                                        <div
                                             className={`${style.hero_buttons} d-flex align-items-center justify-content-center`}
                                        >
                                             <PlayStoreButton />
                                             <AppStoreButton />
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     );
}

export default HeroSection;
