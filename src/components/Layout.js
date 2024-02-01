import Welcome from "./sections/welcome-section/Welcome";
import {SkillsSection} from "./sections/skills-section/skills-section";
import {ExperienceSection} from "./sections/experience-section/ExperienceSection";
import {ContactSection} from "./sections/contact-section/ContactSection";
import {FullPageSections} from '@ap.cx/react-fullpage'


const Layout = () => {
    return(
            <FullPageSections>
                <Welcome/>
                <SkillsSection/>
                <ExperienceSection/>
                <ContactSection/>
            </FullPageSections>
    )
}

export default Layout;