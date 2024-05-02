"use client";

import { useState } from "react";

//* style css
import style from "./header.module.scss";

//* dependencies
import Link from "next/link";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

//* images
import logo from "@/images/logo/logo.png";

//* header data
import { header_data } from "@/data/Common/header_data.js";

function Header({ homeNavigation }) {
    const data = header_data;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={`${style.header}`} id="header">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className={`${style.header_wrapper} d-flex justify-content-between align-items-center`}>
                                <div className={`${style.header_logo}`}>
                                    <Link href="/" title="Photo AI">
                                        <Image src={logo} alt="Photo AI Logo" width={117} height={40} />
                                    </Link>
                                </div>
                                <div className={`${style.header_links} ${isOpen ? style.open : ""}`}>
                                    <ul className="d-flex align-items-center">
                                        <ul className="d-flex align-items-center">
                                            {data.links.map((item, index) => (
                                                <li key={index} className="d-inline-block">
                                                    <Link className={`${style.links} capitalize`} href={`${homeNavigation}${item.url}`} title={item.label} onClick={() => setIsOpen(!isOpen)}>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </ul>
                                </div>
                                <div className={`${style.hamburger_menu} d-block d-lg-none`}>
                                    <button name="hamburger menu" type="button" className={` ${isOpen ? style.open : ""} btn_clear ${style.nav_icon}`} onClick={handleClick} id="nav-icon2">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;
