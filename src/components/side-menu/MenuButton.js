import {FullpageContext} from "@ap.cx/react-fullpage";

export const MenuButton = (props) => {
    const {label, pageNumber, setMenuOpened} = props;
    return (
        <FullpageContext.Consumer>
            {
                ctx => (
                    <button className={`list-none text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors select-none ${pageNumber === ctx.number ? 'text-indigo-600' : ''}`}
                        onClick={() => {
                        ctx.goto(ctx.slides[pageNumber], true)
                        setMenuOpened(false)
                    }}>{label}</button>
                )
            }
        </FullpageContext.Consumer>
    )
}
