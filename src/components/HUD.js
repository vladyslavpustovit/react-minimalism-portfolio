import Navbar from "./navbar/Navbar";
import {Menu} from "./side-menu/Menu";
import {ScrollTopButton} from "./scroll-top-button/ScrollTopButton";

const HUD = (props) => {
    const {fullpageApiRef, windowSize, menuOpened, setMenuOpened} = props;
    return (
        <div className="h-full w-full fixed pointer-events-none top-0 z-10">
            <div className="container h-full relative mx-auto">
                <Navbar fullpageApiRef={fullpageApiRef} windowSize={windowSize} />
                <Menu
                    fullpageApiRef={fullpageApiRef}
                    windowSize={windowSize}
                    menuOpened={menuOpened}
                    setMenuOpened={setMenuOpened}
                />
                <ScrollTopButton fullpageApiRef={fullpageApiRef} />
            </div>
        </div>
    )
}

export default HUD;