import { AboutSection, ContactSection, EducationDownloads, ExperienceSection, Hero, Navbar, ProjectsSection, ScrollProgress, SupportSection, TechnologySection } from "@/components/portfolio-sections";
import { CICDBackground } from "@/components/ui/CICDBackground";

export default function Home() {
  return <><ScrollProgress /><Navbar /><main><Hero /><div className="cicd-sections"><CICDBackground /><div className="cicd-sections__content"><TechnologySection /><AboutSection /><ExperienceSection /><ProjectsSection /><SupportSection /><EducationDownloads /><ContactSection /></div></div></main></>;
}
