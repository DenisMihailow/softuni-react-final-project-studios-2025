import { Link } from "react-router";
import { useUserContext } from "../contexts/UserContext";
export default function Header() {
    const { isAuthenticated, isAdmin } = useUserContext();
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/">
                    <img src="./images/logo.jpg" alt="logo" />
                </Link>

                <Link to="/nails/catalog">Catalog</Link>
                {
                    isAuthenticated
                        ? (
                            <div id="user">
                                 {isAdmin && <Link to="/admin/gallery">Admin Gallery</Link>}
                                <Link to="/gallery">Gallery</Link>                                 
                                <Link to="/nails/book">Book Now</Link>
                                <Link to="/logout">Logout</Link>
                                <Link to="/reservations">My reservations</Link>
                            </div>
                        )
                        : (
                            <div id="guest">
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        )
                }
            </nav>
        </header>
    );
}