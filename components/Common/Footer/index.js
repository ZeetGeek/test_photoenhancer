"use client";

import { useRef, useEffect } from "react";

//* style css
import style from "./footer.module.scss";

//* dependency
import Image from "next/image";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { AppStoreButton, PlayStoreButton } from "@/components/Common/Button";

//* images
import cameraImage from "@/images/footer/camera.png";
import footerLogo from "@/images/logo/logo.png";
import emailIcon from "@/images/footer/icons/email.svg";

//* data
import { footer_links, privacy_links } from "@/data/Common/footer_data.js";

function Footer() {
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
            <footer className={`${style.footer} footer_global`} id="footer">
                <div className={`${style.footer_background_box}`}>
                    <Container>
                        <div className={`${style.footer_top} footer_top_global`}>
                            <Row>
                                <Col lg={4} sm={6}>
                                    <div
                                        className={`${style.footer_one} text-center text-sm-start`}
                                    >
                                        <Image
                                            src={footerLogo}
                                            height={40}
                                            width={117}
                                            alt="Footer Logo"
                                        />
                                        <div
                                            className={`${style.footer_text} paragraph_text-small`}
                                        >
                                            <p className="color-gray-light">
                                                Whether you&apos;re an experienced photographer or
                                                simply enjoy capturing moments, our app is designed
                                                to enhance your photos and improve their quality to
                                                new levels.
                                            </p>
                                        </div>

                                        <div
                                            className={`${style.email_wrapper} d-flex justify-content-sm-start justify-content-center`}
                                        >
                                            <Link
                                                href="mailto:manufacturingbiss@gmail.com"
                                                title="Email Address"
                                                className="d-row-center gap-2"
                                            >
                                                <Image
                                                    src={emailIcon}
                                                    height={35}
                                                    width={35}
                                                    alt="Email Address Icon"
                                                />
                                                manufacturingbiss@gmail.com
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    lg={3}
                                    sm={6}
                                    className="d-lg-block d-flex justify-content-sm-end justify-content-center"
                                >
                                    <div
                                        className={`${style.footer_two} text-center text-sm-start`}
                                    >
                                        <h6
                                            className={`${style.footer_title}  uppercase text_very_large color-yellow-gray primary-fonts weight-600`}
                                        >
                                            Social Media
                                        </h6>
                                        <ul
                                            className={`${style.footer_links} d-flex flex-column align-items-center align-items-sm-start`}
                                        >
                                            {footer_links.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link
                                                            href={item.navigate}
                                                            className="text-small capitalize d-row-center gap-2"
                                                            title={item.label}
                                                            target={item.target}
                                                        >
                                                            <Image
                                                                src={item.img.src}
                                                                height={item.img.height}
                                                                width={item.img.width}
                                                                alt={item.img.alt}
                                                            />
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    lg={5}
                                    className="d-flex justify-content-lg-end justify-content-sm-start justify-content-center"
                                >
                                    <div className={`${style.footer_three}`}>
                                        <h6
                                            className={`${style.footer_title} text-center text-sm-start uppercase text_very_large color-yellow-gray primary-fonts weight-600`}
                                        >
                                            Download Now
                                        </h6>
                                        <div className={`${style.footer_buttons} d-row-start`}>
                                            <PlayStoreButton />
                                            <AppStoreButton />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={`${style.footer_bottom} footer_bottom_global`}>
                            <Row>
                                <Col md={6} className="d-flex d-md-block justify-content-center">
                                    <span className="text-small color-gray-light text-center text-md-start">
                                        © 2023 PhotoAI, All Rights Reserved.
                                    </span>
                                </Col>
                                <Col
                                    md={6}
                                    className="d-flex justify-content-center justify-content-md-end"
                                >
                                    <ul className={`${style.privacy_links} d-row-center`}>
                                        {privacy_links.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        href={item.navigate}
                                                        className="text-small capitalize"
                                                        title={item.label}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <div ref={imageRef} className={`${style.footer_camera_image}`}>
                        <Image src={cameraImage} height={150} width={150} alt="Camera Image" />
                    </div>
                </div>
                {/* Background Shapes */}
                <div className="body_bottom_shapes">
                    <div className="body_bottom_shapes_wrapper">
                        <div className="shape_1"></div>
                        <div className="shape_2"></div>
                        <div className="shape_3"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
