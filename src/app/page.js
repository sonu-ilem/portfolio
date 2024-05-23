import LettestWorkButton from "@/components/LettestWorkButton";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <>
      <LettestWorkButton item={"Latest Works"} />
      <ProjectSection /> 
      <LettestWorkButton item={"What my clients are saying?"} border />
    </>
  );
}
