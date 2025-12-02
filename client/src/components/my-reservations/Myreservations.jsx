import { useEffect, useState } from "react";
import ReservationsCard from "../reservations-card/ReservationsCard";

const BASE_URL = 'http://localhost:3030/jsonstore/reservations';

export default function Myreservations() {
    const[reservations, setReservations] = useState([]);

    useEffect(()=> {
        (async () => {
        try{
        const response = await fetch(BASE_URL)
        const result = await response.json();
        setReservations(Object.values(result));
        }catch (err){
            alert(err.message);
        }
    })();
    },[]);
    return (
            <section id="reservations-page">
            <h1>My Reservations</h1>

            {reservations.length === 0 && <h3 className="no-articles">No Added Reservations</h3>}
            <div className="catalog-container">
                    {reservations.map(reservation => <ReservationsCard key={reservation._id} {...reservation} />)}
            </div>
        </section>
    );
}