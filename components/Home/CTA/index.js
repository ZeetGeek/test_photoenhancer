"use client";

import { useRef, useEffect } from "react";

//* style css
import style from "./cta.module.scss";

//* dependencies
import Image from "next/image";
import { AppStoreButton, PlayStoreButton } from "@/components/Common/Button";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";

//* Images
import mockupImage from "@/images/cta/mobile_mockup.png";

function CTA() {
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

    return (
        <>
            <section className={`${style.cta}`} id="cta">
                <Container>
                    <div className={`${style.cta_wrapper}`}>
                        <Row>
                            <Col xl={6}>
                                <div className={`${style.cta_content_wrapper} text-center text-md-start d-flex d-md-block flex-column align-items-center`}>
                                    <h3 className="h3_title text-white weight-700 primary-fonts">Download For Free</h3>
                                    <div className={` ${style.cta_text} paragraph-text-small`}>
                                        <p className="text-white">
                                            What are you waiting for? Transform your photos from ordinary to extraordinary like never before.Get AI Photo enhancer today!
                                        </p>
                                    </div>
                                    <div className={`${style.cta_buttons} d-row-start`}>
                                        <PlayStoreButton />
                                        <AppStoreButton />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div ref={imageRef} className={`${style.cta_mobile_mockup}`}>
                            <Image src={mockupImage} alt="mockup" width={284} height={578} />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default CTA;
