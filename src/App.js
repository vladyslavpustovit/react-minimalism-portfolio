import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import { Menu } from "./components/side-menu/Menu";
import {useEffect, useRef, useState} from "react";
import { ScrollTopButton } from "./components/scroll-top-button/ScrollTopButton";
import {debounce} from "./utils/debouncer";

const anchors = ["about", "skills", "experience", "contact"];

function App() {
  const fullpageApiRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 30);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <ReactFullpage
        anchors={anchors}
        render={({ fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;
          return <Layout windowSize={windowSize}/>;
        }}
      />
        <Navbar fullpageApiRef={fullpageApiRef} windowSize={windowSize} />
        <Menu
            fullpageApiRef={fullpageApiRef}
            windowSize={windowSize}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
        />
        <ScrollTopButton fullpageApiRef={fullpageApiRef} />
    </>
  );
}

export default App;
