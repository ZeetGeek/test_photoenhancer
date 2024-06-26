// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define the main functional component
export const TermsOfService = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`terms-of-service-gl`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h1 className="text-center h1_title main-title">
                                    Terms Of Service
                                </h1>
                            </div>
                            <div>
                                <h2 className="title">
                                    <strong>1. Terms</strong>
                                </h2>
                                <p>
                                    By accessing this Website, accessible from{" "}
                                    <a href="https://photoenhancer.app/">
                                        https://photoenhancer.app/
                                    </a>
                                    , you are agreeing to be bound by these Website Terms and
                                    Conditions of Use and agree that you are responsible for the
                                    agreement with any applicable local laws. If you disagree with
                                    any of these terms, you are prohibited from accessing this site.
                                    The materials contained in this Website are protected by
                                    copyright and trademark law.
                                </p>
                                <h2 className="title">
                                    <strong>2. Use License</strong>
                                </h2>
                                <p>
                                    Permission is granted to temporarily download one copy of the
                                    materials on photoenhancer&apos;s Website for personal,
                                    non-commercial transitory viewing only. This is the grant of a
                                    license, not a transfer of title, and under this license you may
                                    not:
                                    <ul>
                                        <li>modify or copy the materials;</li>
                                        <li>
                                            use the materials for any commercial purpose or for any
                                            public display;
                                        </li>
                                        <li>
                                            attempt to reverse engineer any software contained on
                                            photoenhancer&apos;s Website;
                                        </li>
                                        <li>
                                            remove any copyright or other proprietary notations from
                                            the materials; or
                                        </li>
                                        <li>
                                            transferring the materials to another person or
                                            &quote;mirror&quote; the materials on any other server.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    This will let photo enhancer terminate upon violations of any of
                                    these restrictions. Upon termination, your viewing right will
                                    also be terminated, and you should destroy any downloaded
                                    materials in your possession whether it is printed or electronic
                                    format.
                                </p>

                                <h2 className="title">
                                    <strong>3. Disclaimer</strong>
                                </h2>
                                <p>
                                    All the materials on photoenhancer&apos;s Website are provided
                                    &quote;as is&quote;. photoenhancer makes no warranties, may it
                                    be expressed or implied, therefore negates all other warranties.
                                    Furthermore, photoenhancer does not make any representations
                                    concerning the accuracy or reliability of the use of the
                                    materials on its Website or otherwise relating to such materials
                                    or any sites linked to this Website.
                                </p>

                                <h2 className="title">
                                    <strong>4. Limitations</strong>
                                </h2>
                                <p>
                                    photoenhancer or its suppliers will not be hold accountable for
                                    any damages that will arise with the use or inability to use the
                                    materials on photoenhancer&apos;s Website, even if photoenhancer
                                    or an authorize representative of this Website has been
                                    notified, orally or written, of the possibility of such damage.
                                    Some jurisdiction does not allow limitations on implied
                                    warranties or limitations of liability for incidental damages,
                                    these limitations may not apply to you.
                                </p>

                                <h2 className="title">
                                    <strong>5. Revisions and Errata</strong>
                                </h2>
                                <p>
                                    The materials appearing on photoenhancer&apos;s Website may
                                    include technical, typographical, or photographic errors.
                                    photoenhancer will not promise that any of the materials in this
                                    Website are accurate, complete, or current. photoenhancer may
                                    change the materials contained on its Website at any time
                                    without notice. photoenhancer does not make any commitment to
                                    update the materials.
                                </p>

                                <h2 className="title">
                                    <strong>6. Links</strong>
                                </h2>
                                <p>
                                    photoenhancer has not reviewed all of the sites linked to its
                                    Website and is not responsible for the contents of any such
                                    linked site. The presence of any link does not imply endorsement
                                    by photoenhancer of the site. The use of any linked website is
                                    at the user&apos;s own risk.
                                </p>

                                <h2 className="title">
                                    <strong>7. Site Terms of Use Modifications</strong>
                                </h2>
                                <p>
                                    photoenhancer may revise these Terms of Use for its Website at
                                    any time without prior notice. By using this Website, you are
                                    agreeing to be bound by the current version of these Terms and
                                    Conditions of Use.
                                </p>

                                <h2 className="title">
                                    <strong>8. Your Privacy</strong>
                                </h2>
                                <p>Please read our Privacy Policy.</p>
                                <h2 className="title">
                                    <strong>9. Governing Law</strong>
                                </h2>
                                <p>
                                    Any claim related to photoenhancer&apos;s Website shall be
                                    governed by the laws of without regards to its conflict of law
                                    provisions.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default TermsOfService;
