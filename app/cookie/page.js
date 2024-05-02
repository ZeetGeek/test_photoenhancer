// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define the main functional component
export const Cookie = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`terms-of-service-gl`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h1 className="text-center h1_title main-title">Cookie Policy</h1>
                            </div>
                            <div>
                                <p>
                                    This is the Cookie Policy for Photo Enhancer, accessible from{" "}
                                    <a href="https://photoenhancer.app/">
                                        https://photoenhancer.app/
                                    </a>
                                </p>

                                <h2 className="title">What Are Cookies</h2>

                                <p>
                                    As is common practice with almost all professional websites,
                                    this site uses cookies, which are tiny files that are downloaded
                                    to your computer, to improve your experience. This page
                                    describes what information they gather, how we use it, and why
                                    we sometimes need to store these cookies. We will also share how
                                    you can prevent these cookies from being stored; however, this
                                    may downgrade or &apos;break&apos; certain elements of the
                                    site&apos;s functionality.
                                </p>

                                <h2 className="title">How We Use Cookies</h2>

                                <p>
                                    We use cookies for a variety of reasons detailed below.
                                    Unfortunately, in most cases, there are no industry standard
                                    options for disabling cookies without completely disabling the
                                    functionality and features they add to this site. It is
                                    recommended that you leave on all cookies if you are not sure
                                    whether you need them or not in case they are used to provide a
                                    service that you use.
                                </p>

                                <h2 className="title">Disabling Cookies</h2>

                                <p>
                                    You can prevent the setting of cookies by adjusting the settings
                                    on your browser (see your browser Help for how to do this). Be
                                    aware that disabling cookies will affect the functionality of
                                    this and many other websites that you visit. Disabling cookies
                                    will usually result in also disabling certain functionality and
                                    features of this site. Therefore, it is recommended that you do
                                    not disable cookies.
                                </p>

                                <h2 className="title">The Cookies We Set</h2>

                                <p>
                                    <strong>Account related cookies:</strong> If you create an
                                    account with us, then we will use cookies for the management of
                                    the signup process and general administration. These cookies
                                    will usually be deleted when you log out; however, in some
                                    cases, they may remain afterwards to remember your site
                                    preferences when logged out.
                                </p>

                                <h2 className="title">Third Party Cookies</h2>

                                <p>
                                    In some special cases, we also use cookies provided by trusted
                                    third parties. The following section details which third party
                                    cookies you might encounter through this site.
                                </p>

                                <p>
                                    This site uses Google Analytics, which is one of the most
                                    widespread and trusted analytics solutions on the web for
                                    helping us to understand how you use the site and ways that we
                                    can improve your experience. These cookies may track things such
                                    as how long you spend on the site and the pages that you visit
                                    so we can continue to produce engaging content.
                                </p>

                                <p>
                                    For more information on Google Analytics cookies, see the
                                    official{" "}
                                    <a href="https://analytics.google.com/analytics/web/provision/?authuser=0#/provision">
                                        Google Analytics page
                                    </a>
                                    .
                                </p>

                                <p>
                                    Third party analytics are used to track and measure usage of
                                    this site so that we can continue to produce engaging content.
                                    These cookies may track things such as how long you spend on the
                                    site or pages you visit which helps us to understand how we can
                                    improve the site for you.
                                </p>

                                <p>
                                    The Google AdSense service we use to serve advertising uses a
                                    DoubleClick cookie to serve more relevant ads across the web and
                                    limit the number of times that a given ad is shown to you.
                                </p>

                                <p>
                                    For more information on Google AdSense see the official{" "}
                                    <a href="https://support.google.com/adsense/answer/3394713?hl=en">
                                        Google AdSense privacy FAQ
                                    </a>
                                    .
                                </p>

                                <h2 className="title">More Information</h2>

                                <p>
                                    Hopefully that has clarified things for you, and as was
                                    previously mentioned if there is something that you aren&apos;t
                                    sure whether you need or not it&apos;s usually safer to leave
                                    cookies enabled in case it does interact with one of the
                                    features you use on our site.
                                </p>

                                <p>
                                    However, if you are still looking for more information then you
                                    can contact us through one of our preferred contact methods:
                                </p>

                                <p>
                                    Email:{" "}
                                    <a href="mailto:photoenhancer@gmail.com">
                                        photoenhancer@gmail.com
                                    </a>
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
export default Cookie;
