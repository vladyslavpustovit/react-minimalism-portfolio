import './App.css';
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import {useState} from "react";
import {Menu} from "./components/side-menu/Menu";

function App() {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
    <>
        <Navbar/>
        <Layout/>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default App;
