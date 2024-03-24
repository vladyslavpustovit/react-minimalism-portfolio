import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "./components/Layout";
import {useEffect, useRef, useState} from "react";
import {debounce} from "./utils/debouncer";
import HUD from "./components/HUD";

const anchors = ["about", "skills", "works", "experience", "contact"];

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
      <HUD fullpageApiRef={fullpageApiRef} windowSize={windowSize} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default App;
