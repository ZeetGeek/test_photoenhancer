"use client";

//* style css
import style from "./about_us.module.scss";

//* dependencies
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

//* images
import AboutImage from "@/images/about_us/1.png";
import HandIcon from "@/images/about_us/icons/1.png";
import LikeIcon from "@/images/about_us/icons/2.png";

//* data
import { about_us_data } from "@/data/Home/about_us_data.js";

function AboutUs() {
    const data = about_us_data;

    // Image animation

    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);

    useEffect(() => {
        // Function to create a timeline for a given image element
        const createTimeline = (image) => {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            tl.to(image, { duration: 1, y: 20, ease: "power1.inOut" }).to(image, {
                duration: 1,
                y: 0,
                ease: "power1.inOut",
            });

            tl.play();
        };

        // Use the function to create timelines for both image elements
        if (imageRef1.current) {
            createTimeline(imageRef1.current);
        }

        if (imageRef2.current) {
            createTimeline(imageRef2.current);
        }
    }, []);

    return (
        <>
            <section className={`${style.about_us} about_us_global`} id="about_us">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={`${style.title_image_and_description} d-column-center`}>
                                <div className={`${style.title} `}>
                                    <h2 className="text-center h2_title color-white weight-500 primary-fonts mx-auto">About Us</h2>
                                </div>

                                <div className={`${style.image}`}>
                                    <Image src={AboutImage} height={579} width={916} alt="About Us Image" />

                                    <div className={`${style.animated_icons}`}>
                                        <div ref={imageRef1} className={`${style.hand_icon} ${style.icon}`}>
                                            <Image src={HandIcon} height={150} width={150} alt="Hand icon" />
                                        </div>
                                        <div ref={imageRef2} className={`${style.like_icon} ${style.icon}`}>
                                            <Image src={LikeIcon} height={120} width={120} alt="Like Icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.description}`}>
                                    <p className="text-center text-medium text-white weight-400">
                                        Introducing our extraordinary photo restoration app, a truly magical photo editing application designed to empower users in managing and
                                        recovering their treasured old photographs. Immerse yourself in a world of fascinating possibilities and explore a myriad of captivating
                                        features.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${style.about_us_content_wrapper} about_us_content_wrapper_global`}>
                                <div className={style.about_us_content}>
                                    <Row>
                                        {data.features.map((item, index) => (
                                            <Col lg={4} sm={6} key={index} className="mx-auto">
                                                <div className={`${style.about_us_box_wrapper} award_box_${index + 1} d-flex align-items-center justify-content-center`}>
                                                    <div className={`${style.award_box} d-flex flex-column justify-content-center align-items-center`}>
                                                        <h4 className={`${style.award_name} h1_title primary-fonts color-white weight-600`}>{item.number}</h4>

                                                        <span className={`${style.award_desc} h5_title text-white primary-fonts color-accent weight-600`}>{item.title}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AboutUs;
