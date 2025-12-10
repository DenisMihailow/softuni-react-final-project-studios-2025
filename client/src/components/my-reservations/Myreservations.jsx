import { useEffect, useState } from "react";
import request from  "../../utils/request.js"
// import ReservationsCard from "../reservations-card/ReservationsCard";
import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

const BASE_URL = 'http://localhost:3030/jsonstore/reservations';

export default function Myreservations() {
    const [reservations, setReservations] = useState([]);
    const {user} = useUserContext();

   useEffect(() => {
  if (!user?._id) return;

  request("/reservations")
    .then(res => {
      const myReservations = Object.values(res)
        .filter(r => r._ownerId === user._id);

      setReservations(myReservations);
    })
    .catch(err => console.log(err));

}, [user?._id]);


    return (
            <section id="my-reservations">
      <h1 className="reserv-title">My Reservations</h1>

      <div className="reservations-grid">
        {reservations.map(r => (
          <div className="reservation-card" key={r._id}>
            <div className="reservation-left">
              <img src={r.imageUrl} alt="procedure" className="reservation-avatar" />
            </div>

            <div className="reservation-right">
              <h3>{r.firstName} {r.lastName}</h3>
              <p><strong>Procedure:</strong> {r.procedure}</p>
              <p><strong>Date:</strong> {new Date(r.date).toLocaleDateString()}</p>

              <Link className="btn-details" to={`/reservations/${r._id}/details`}>View Details </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}