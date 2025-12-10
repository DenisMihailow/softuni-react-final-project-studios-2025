import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function Catalog() {

    const {isAuthenticated} = useUserContext();
    return (
        <div className="catalog-wrapper">

    <div className="catalog-item">
        <img src="../images/nail.png" alt="" className="catalog-image" />
        <h3 className="catalog-title">Gel Nails</h3>
        <p className="catalog-text">Изискан маникюр за перфектен стил.</p>
         {isAuthenticated && (<Link to="/nails/book">
          <button className="catalog-btn">View More</button>
        </Link>)}
    </div>

    <div className="catalog-item">
        <img src="../images/pedicure.jpg" alt="" className="catalog-image" />
        <h3 className="catalog-title">Pedicure</h3>
        <p className="catalog-text">Грижа, комфорт и красота за твоите стъпала.</p>
        {isAuthenticated && (<Link to="/nails/book">
          <button className="catalog-btn">View More</button>
        </Link>)}
    </div>

    <div className="catalog-item">
        <img src="../images/terapy.jpg" alt="" className="catalog-image" />
        <h3 className="catalog-title">Терапия</h3>
        <p className="catalog-text">Релакс и възстановяване за тялото и ума.</p>
       {isAuthenticated && (<Link to="/nails/book">
          <button className="catalog-btn">View More</button>
        </Link>)}
    </div>

</div>


    );
}