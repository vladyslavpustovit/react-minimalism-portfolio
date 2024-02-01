import './App.css';
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import {useEffect, useState} from "react";
import {Menu} from "./components/side-menu/Menu";
import {ScrollTopButton} from "./components/scroll-top-button/ScrollTopButton";

function App() {
    const [activeSection, setActiveSection] = useState('welcome');
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const sections = ['welcome', 'skills', 'experience', 'contact'];
            const distances = sections.map(section => {
                const sectionTop = document.getElementById(section).offsetTop;
                return Math.abs(sectionTop - scrollPosition);
            });

            const minDistanceIndex = distances.indexOf(Math.min(...distances));
            setActiveSection(sections[minDistanceIndex]);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar/>
            <Layout/>
            <Menu activeSection={activeSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
            {activeSection !== 'welcome' && <ScrollTopButton/>}
        </>
    );
}

export default App;
