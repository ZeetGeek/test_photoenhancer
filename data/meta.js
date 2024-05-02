"use client";

import { MY_SEO } from "@/config";
import { usePathname } from "next/navigation";

const Meta = () => {
    const router = usePathname();

    return (
        <>
            <title key="title">{MY_SEO?.title}</title>
            <meta name="description" content={MY_SEO?.description} />
            <link rel="canonical" href={`${MY_SEO?.openGraph.url}${router}`} />
            <meta property="og:type" content={MY_SEO?.openGraph.type} />
            <meta property="og:title" content={MY_SEO?.openGraph.title} />
            <meta property="og:description" content={MY_SEO?.openGraph.description} />
            <meta property="og:url" content={`${MY_SEO?.openGraph.url}${router}`} />
            <meta property="og:site_name" content={MY_SEO?.title} />
            <meta property="og:image" content={MY_SEO?.openGraph.image} />
            <meta name="apple-itunes-app" content="app-id=id1608349830" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:title" content={MY_SEO?.title} />
            <meta name="twitter:description" content={MY_SEO?.description} />
            <meta name="twitter:image" content={MY_SEO?.openGraph.image} />
        </>
    );
};

export default Meta;
