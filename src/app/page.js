import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LettestWorkButton from "@/components/LettestWorkButton";
import ProjectSection from "@/components/ProjectSection";
import Testomonial from "@/components/Testomonial";

export default function Home() {
  return (
    <>
      <LettestWorkButton item={"Latest Works"} />
      <ProjectSection />
      <LettestWorkButton item={"What my clients are saying?"} border />
      <Testomonial />
      <ContactForm />
      <Footer />
    </>
  );
}
