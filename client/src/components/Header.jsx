import { Link } from "react-router";
export default function Header() {
    return (
         <header>
        {/* <!-- Navigation --> */}
        <nav>
                <Link className="home" to="/"> 
                    <img src="./images/logo.jpg" alt="logo" /> 
                </Link>

                <Link to="/">Catalog</Link>

                <div id="user">
                    <Link to="//create">Save your time</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
    </header>
    );
}