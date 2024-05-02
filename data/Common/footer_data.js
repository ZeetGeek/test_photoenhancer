import facebookIcon from "@/images/footer/icons/1.svg";
import instagramIcon from "@/images/footer/icons/3.svg";

export const footer_links = [
    {
        img: {
            src: facebookIcon,
            height: 24,
            width: 24,
            alt: "facebook icon",
        },
        label: "Facebook",
        navigate: "https://www.facebook.com/AiPhotoEnhanceApp",
        target: "_blank",
    },
    {
        img: {
            src: instagramIcon,
            height: 24,
            width: 24,
            alt: "instagram icon",
        },
        label: "Instagram",
        navigate:
            "https://www.instagram.com/ai_photo_enhance_app/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
        target: "_blank",
    },
];

export const privacy_links = [
    {
        label: "Privacy Policy",
        navigate: "/privacy-policy",
    },
    {
        label: "Terms Of Service",
        navigate: "/terms-of-service",
    },
    {
        label: "Cookie",
        navigate: "/cookie",
    },
];
