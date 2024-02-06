import './App.css';
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import {useState} from "react";
import {Menu} from "./components/side-menu/Menu";
import {ScrollTopButton} from "./components/scroll-top-button/ScrollTopButton";
import Fullpage from "@ap.cx/react-fullpage";

function App() {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <Fullpage>
            <Navbar/>
            <Layout/>
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
            <ScrollTopButton/>
        </Fullpage>
    );
}

export default App;
