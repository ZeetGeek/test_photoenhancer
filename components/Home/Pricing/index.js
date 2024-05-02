"use client";

//* style css
import style from "./pricing.module.scss";

//* dependency
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineMax, Power2 } from "gsap";

// component
import BeforeAfter from "@/component/Common/ImageCompare";

//* images
import detailsIcon1 from "@/images/pricing/icons/1.svg";
import detailsIcon2 from "@/images/pricing/icons/2.svg";
import detailsIcon3 from "@/images/pricing/icons/3.svg";
import detailsIcon4 from "@/images/pricing/icons/4.svg";
import saleBadgeImage from "@/images/pricing/sale_badge.svg";
import leftImage from "@/images/pricing/left-image.png";
import rightImage from "@/images/pricing/right-image.png";
import arrowImage from "@/images/pricing/arrow.png";

function Pricing() {
    const badgeRef = useRef(null);

    useEffect(() => {
        const scaleAnimation = () => {
            const tl = new TimelineMax();
            tl.to(badgeRef.current, 1, { scale: 1.2, ease: Power2.easeInOut }).to(
                badgeRef.current,
                1,
                {
                    scale: 1.05,
                    ease: Power2.easeInOut,
                }
            );
        };

        // Initial animation
        scaleAnimation();

        // Set interval for continuous animation
        const intervalId = setInterval(() => {
            scaleAnimation();
        }, 2000);
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className={`${style.pricing} pricing_global`} id="pricing">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={`${style.pricing_wrapper}`}>
                                <div className={`${style.pricing_title}`}>
                                    <h2
                                        className={`h2_title primary-fonts text-center color-yellow-gray`}
                                    >
                                        We Got a Plan For You!
                                    </h2>
                                    <div
                                        className={`${style.pricing_text} paragraph_text_small mx-auto`}
                                    >
                                        <p className="text-center text-white">
                                            Pay yearly and enjoy a 3 day free trial. Unlock the full
                                            potential of AI Photo. Cancel whenever you feel like.
                                        </p>
                                    </div>
                                </div>
                                <div className={`${style.pricing_content}`}>
                                    <Row>
                                        <Col lg={12}>
                                            {/* Pro Plan */}
                                            <div
                                                className={`${style.pricing_box_wrapper} ${style.pro}`}
                                            >
                                                <Row className="align-items-center">
                                                    <Col lg={6} className="d-none d-lg-block">
                                                        <div
                                                            className={`${style.pricing_image_wrapper} pricing-before-after-global`}
                                                        >
                                                            <BeforeAfter
                                                                beforeImage={leftImage.src}
                                                                afterImage={rightImage.src}
                                                                alt={`Pricing Image`}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} className="ps-lg-5">
                                                        <h2 className="mb-2 mb-lg-4 primary-fonts h2-title">
                                                            Pricing
                                                        </h2>
                                                        <div
                                                            className={`${style.pricing_name_price} d-flex flex-sm-row align-items-start align-items-sm-center gap-3 gap-sm-4`}
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <h3
                                                                    className={`${style.pricing_plan_price} primary-fonts`}
                                                                >
                                                                    $4.99
                                                                </h3>
                                                                <span
                                                                    className={`${style.pricing_plan_name} primary-fonts`}
                                                                >
                                                                    &nbsp; / weekly
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={`d-flex align-items-center`}
                                                            >
                                                                <h3
                                                                    className={`${style.pricing_plan_price} primary-fonts`}
                                                                >
                                                                    $39.99
                                                                </h3>
                                                                <span
                                                                    className={`${style.pricing_plan_name} primary-fonts`}
                                                                >
                                                                    &nbsp; / yearly
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`${style.pricing_plan_details}`}
                                                        >
                                                            <ul className="d-column-start">
                                                                <li className="d-row-start">
                                                                    <Image
                                                                        src={detailsIcon1}
                                                                        height={21}
                                                                        width={25}
                                                                        alt="Pricing Details Icon"
                                                                        className={`${style.priceIcon}`}
                                                                    />
                                                                    <div className="plan_details_icon"></div>
                                                                    <span
                                                                        className={`${style.pricing_details_text}`}
                                                                    >
                                                                        Download Multiple Photos in
                                                                        One tap
                                                                    </span>
                                                                </li>

                                                                <li className="d-row-start">
                                                                    <Image
                                                                        src={detailsIcon2}
                                                                        height={21}
                                                                        width={25}
                                                                        alt="Pricing Details Icon"
                                                                        className={`${style.priceIcon}`}
                                                                    />
                                                                    <div className="plan_details_icon"></div>
                                                                    <span
                                                                        className={`${style.pricing_details_text}`}
                                                                    >
                                                                        Save Time by Faster
                                                                        Processing
                                                                    </span>
                                                                </li>

                                                                <li className="d-row-start">
                                                                    <Image
                                                                        src={detailsIcon3}
                                                                        height={28}
                                                                        width={25}
                                                                        alt="Pricing Details Icon"
                                                                        className={`${style.priceIcon}`}
                                                                    />
                                                                    <div className="plan_details_icon"></div>
                                                                    <span
                                                                        className={`${style.pricing_details_text}`}
                                                                    >
                                                                        Enjoy App Without Annoying
                                                                        Ads
                                                                    </span>
                                                                </li>

                                                                <li className="d-row-start">
                                                                    <Image
                                                                        src={detailsIcon4}
                                                                        height={26}
                                                                        width={30}
                                                                        alt="Pricing Details Icon"
                                                                        className={`${style.priceIcon}`}
                                                                    />
                                                                    <div className="plan_details_icon"></div>
                                                                    <span
                                                                        className={`${style.pricing_details_text}`}
                                                                    >
                                                                        3 days free trial
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div
                                                    ref={badgeRef}
                                                    className={`${style.saleBadge}`}
                                                >
                                                    <div className={`${style.saleBadgeWrapper}`}>
                                                        <Image
                                                            src={saleBadgeImage}
                                                            height={84}
                                                            width={84}
                                                            alt="Sale badge image"
                                                        />
                                                        <span className="text-large text-bg weight-700 primary-fonts">
                                                            -84%
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={style.arrowWrapper}>
                                                    <Image
                                                        src={arrowImage}
                                                        height={44}
                                                        width={113}
                                                        alt={"Pricing Image"}
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${style.subscription_manage} `}>
                                <div className={`${style.wrapper} d-row-center`}>
                                    <div
                                        className={`${style.content} text-center d-column-center gap-2`}
                                    >
                                        <p>
                                            Your subscription will automatically renew unless turned
                                            off in your iTunes Account Settings at least 24 hours
                                            before the current period ends. Manage your subscription
                                            and disable auto-renewal by accessing your iTunes
                                            Account settings. Your iTunes Account will be charged
                                            upon purchase confirmation.
                                        </p>
                                        <p>
                                            Please carefully review our comprehensive{" "}
                                            <Link href="/terms-of-service" title="Terms of Service">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy-policy" title="Privacy Policy">
                                                Privacy Policy.
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Pricing;
