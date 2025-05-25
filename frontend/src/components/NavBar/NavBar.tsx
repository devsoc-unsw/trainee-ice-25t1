import { Tooltip } from "@mui/material";
import "./NavBar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <Tooltip title="Hi! Pls save meee">
                    <img src="/funny_lil_pokemon.png" alt="logo" className="logo"/>
                </Tooltip>
                <ul>
                    <li><a href="/">Landing🛬</a></li>
                    <li><a href="/home">Home🏠</a></li>
                    <li><a href="/course-info">Course Info🤔</a></li>
                    <li><a href="/course-compare">Course Compare📖</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;