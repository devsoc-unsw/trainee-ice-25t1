import { Tooltip } from "@mui/material";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav>
                {/* Clicking on the logo leads to the landing page */}
                <Tooltip title="Hi! Pls save meee" arrow>
                    <img src="/funny_lil_pokemon.png" alt="logo" className="logo" onClick={() => navigate(`/`)}/>
                </Tooltip>
                <h1 className="logo-title" onClick={() => navigate(`/`)}>Bubbles</h1>
                <ul>
                    {/* <li><a href="/">Landing🛬</a></li> */}
                    <li><a href="/home">Home🏠</a></li>
                    <li><a href="/course-info">Course Info🤔</a></li>
                    <li><a href="/course-compare">Course Compare📖</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;