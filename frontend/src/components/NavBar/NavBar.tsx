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
                    <li className="link-style" onClick={() => navigate(`/home`)}>Home🏠</li>
                    <li className="link-style" onClick={() => navigate(`/course-info`)}>Course Info🤔</li>
                    <li className="link-style" onClick={() => navigate(`/course-compare`)}>Course Compare📖</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;