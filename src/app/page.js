// import { AboutModal } from "@/components/AboutModal";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LettestWorkButton from "@/components/LettestWorkButton";
import ProjectSection from "@/components/ProjectSection";
import Testomonial from "@/components/Testomonial";
// import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import HomeBanner from "@/components/homepage/HomeBanner";

export default function Home() {
  return (
    <>
      {/* <TypewriterEffectSmoothDemo /> */}
      <HomeBanner />
      {/* <LettestWorkButton item={"Latest Works"} /> */}
      <ProjectSection />
      {/* <LettestWorkButton item={"What my clients are saying?"} border /> */}
      {/* <Testomonial /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </>
  );
}
