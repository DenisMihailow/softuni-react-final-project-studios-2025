import { Link } from "react-router";

export default function ReservationsCard({
        _id,
        date,
        email,
        firstName,
        lastName,
        phone,
        procedure,
        imageUrl,
}) {
    return (
         <div className="reservations">
            <img src={imageUrl} alt={procedure} />
                <div className="details-overlay">
                    <p className="name">{date}</p>
                    <p className="email">{email}</p>
                    <p className="firstName">{firstName}</p>
                    <p className="lastName">{lastName}</p>
                    <p className="lastName">{phone}</p>
                    <p className="lastName">{procedure}</p>
                    <Link to={`/reservations/${_id}/details`} className="details-button">Details</Link>
                </div>
         </div>
       
    );
}