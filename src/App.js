import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "./components/Layout";
import Navbar from "./components/navbar/Navbar";
import { Menu } from "./components/side-menu/Menu";
import { useRef, useState } from "react";
import { ScrollTopButton } from "./components/scroll-top-button/ScrollTopButton";

const anchors = ["about", "skills", "experience", "contact"];

function App() {
  const fullpageApiRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <ReactFullpage
        anchors={anchors}
        render={({ state, fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;
          return <Layout />;
        }}
      />
        <Navbar fullpageApiRef={fullpageApiRef} />
        <Menu
            fullpageApiRef={fullpageApiRef}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
        />
        <ScrollTopButton fullpageApiRef={fullpageApiRef} />
    </>
  );
}

export default App;
