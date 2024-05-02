//* common components

//* section components
import HeroSection from "@/component/Home/HeroSection";

//* page restoration
import PhotoRestoration from "@/component/Home/PhotoRestoration";

//* award
import AboutUs from "@/components/Home/AboutUs";

//* features
import Features from "@/component/Home/AwesomeFeatures";

//* how to use
import HowToUse from "@/component/Home/HowToUse";

//* testimonial
import Testimonial from "@/component/Home/Testimonials";

//* try
import Try from "@/component/Home/Try";

//* cta
import CTA from "@/component/Home/CTA";

//* pricing
import Pricing from "@/component/Home/Pricing";

//* faq
import FAQ from "@/component/Home/FAQ";

export default function Home() {
     return (
          <>
               <HeroSection />
               <PhotoRestoration />
               <AboutUs />
               <Features />
               <HowToUse />
               <Testimonial />
               <Try />
               <CTA />
               <Pricing />
               <FAQ />
          </>
     );
}
