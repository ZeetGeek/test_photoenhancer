// * slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/scss/global.scss";

// * fonts
import localFont from "next/font/local";
import { Gabarito } from "next/font/google";

//  * gabarito
const gabarito = Gabarito({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-secondary",
});

// * clash display
const myFont = localFont({
    src: [
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Extralight.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Semibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/clash-display/ClashDisplay-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-primary",
});

// * components import

//* header
import Header from "@/component/Common/Header";

//* footer
import Footer from "@/component/Common/Footer";

//* scroll to top
import ScrollToTop from "@/component/Common/ScrollToTop";

// *Meta
import Meta from "@/data/meta";
import Script from "next/script";

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en" className={`${gabarito.variable} ${myFont.variable}`}>
                <head>
                    <Meta />

                    <Script
                        id="schema_ios"
                        dangerouslySetInnerHTML={{
                            __html: `{
                "@context": "https://schema.org",
                "@type": "MobileApplication",
                "name": "AI Photo Enhancer",
                "url": "https://apps.apple.com/us/app/hd-photo-enhancer-unblur-clear/id1608349830",
                "description": "AI Photo can restore old photos, remove backgrounds, colorize black & white photos, denoise, remove unwanted objects from photos, & much more with just a click.",
                "operatingSystem": "iOS",
                "applicationCategory": "Photo & Video",
                "releaseDate": "2023-10-04",
                "version": "3.3",
                "price": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": 39.99
                },
                "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": 4.99
                },
                "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "169"
                },
                "potentialAction": [
                {
                "@type": "InstallAction",
                "target": {
                "@type": "EntryPoint",
                "url": "https://apps.apple.com/us/app/hd-photo-enhancer-unblur-clear/id1608349830"
                }
                },
                {
                "@type": "ViewAction",
                "target": {
                "@type": "EntryPoint",
                "url": "https://apps.apple.com/us/app/hd-photo-enhancer-unblur-clear/id1608349830"
                }
                }
                ]
                }`,
                        }}
                    ></Script>

                    <Script
                        id="schema_android"
                        dangerouslySetInnerHTML={{
                            __html: `{
"@context": "https://schema.org",
"@type": "MobileApplication",
"name": "AI Photo Enhancer",
"url": "https://play.google.com/store/apps/details?id=com.manufacturingbiss.photoAI",
"description": "AI Photo can restore old photos, remove backgrounds, colorize black & white photos, denoise, remove unwanted objects from photos, & much more with just a click..",
"operatingSystem": "Android",
"applicationCategory": "Photo & Video",
"releaseDate": "2023-10-04",
"version": "3.3",
"price": {
"@type": "Offer",
"priceCurrency": "USD",
"price": 39.99
},
"offers": {
"@type": "Offer",
"priceCurrency": "USD",
"price": 4.99
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.2",
"ratingCount": "120"
},
"potentialAction": [
{
"@type": "InstallAction",
"target": {
"@type": "EntryPoint",
"url": "https://play.google.com/store/apps/details?id=com.manufacturingbiss.photoAI"
}
},
{
"@type": "ViewAction",
"target": {
"@type": "EntryPoint",
"url": "https://play.google.com/store/apps/details?id=com.manufacturingbiss.photoAI"
}
}
]
}`,
                        }}
                    ></Script>
                </head>
                <body>
                    <div className="d-none d-lg-block"></div>
                    <Header homeNavigation={"/"} />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </body>
            </html>
        </>
    );
}
