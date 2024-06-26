import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Footer from "@/components/Footer";
import LettestWorkButton from "@/components/LettestWorkButton";
import ProjectSection from "@/components/ProjectSection";
import Testomonial from "@/components/Testomonial";
import HomeBanner from "@/components/homepage/HomeBanner";
import { IoLogoWhatsapp } from "react-icons/io";
import PopupModal from "@/components/PopupModal";

export default function Home() {
  return (
    <div className="relative">
      <PopupModal />
      <HomeBanner />
      <LettestWorkButton item={"Latest Works"} />
      <ProjectSection />
      <LettestWorkButton item={"What my clients are saying?"} border />
      <Testomonial />
      <ContactForm />
      <Footer />
      <div className="sticky bottom-4 md:bottom-12 flex justify-end pr-4 md:pr-6">
        <Link
          href="https://wa.me/918544098398"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp
            size={50}
            className="text-[#26c943] animate-bounce md:w-15 md:h-15 "
          />
        </Link>
      </div>
    </div>
  );
}
