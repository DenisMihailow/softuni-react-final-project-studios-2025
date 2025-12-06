import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
// import request from "../../utils/request";

const baseUrl = `http://localhost:3030/jsonstore/reservations`;

export default function Details() {
     const navigate = useNavigate();
    const { reservationId } = useParams();
    const [reservation, setReservation] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/reservations/${reservationId}`)
        .then(response => response.json())
        .then(result => setReservation(result))
        .catch(err => alert(err.message));
    },[reservationId]);


        const deleteReservationHandler =  async () =>{
       const isConfirmed = confirm(`Are you sure you want to delete reservation?`);

       if(!isConfirmed){
        return;
       }
        try{
            await fetch(`${baseUrl}/${reservationId}`,{
        method:'DELETE',
        });
        navigate('/reservations');
       }catch(err){
        alert('Unable to delete reservation',err.message)
       }
       
    };
    // useEffect(() => {
    //     request(`/reservations/${reservationId}`)
    //         .then(setReservation)
    //         .catch(err => console.log(err));
    // }, [reservationId]);

    // if (!reservation) return <h2 className="loading">Loading...</h2>;

    return (
        <section id="details-page">
            <h1 className="details-header">Reservation Details</h1>

            <div className="details-wrapper">

                {/* LEFT SIDE IMAGE */}
                <div className="details-image-box">
                    <img className="reservation-img" src={reservation.imageUrl} alt="procedure" />
                </div>

                {/* RIGHT SIDE INFO */}
                <div className="details-info-box">
                    <h2 className="details-name">
                        {reservation.firstName} {reservation.lastName}
                    </h2>

                    <p><strong>Procedure:</strong> {reservation.procedure}</p>
                    <p><strong>Phone:</strong> {reservation.phone}</p>
                    <p><strong>Email:</strong> {reservation.email}</p>
                    <p><strong>Date:</strong> {new Date(reservation.date).toLocaleDateString()}</p>

                    <div className="details-buttons">
                        <Link className="btn-edit" to={`/reservations/${reservationId}/edit`}> Edit </Link>
                        <button className="button" onClick={deleteReservationHandler}>Delete</button>
                        {/* <button
                            className="btn-delete"
                            onClick={async () => {
                                if (confirm("Are you sure you want to delete this reservation?")) {
                                    await request(`/reservations/${reservationId}`, "DELETE");
                                    window.location.href = "/reservations";
                                }
                            }}
                        >
                            Delete
                        </button> */}
                    </div>
                </div>

            </div>
        </section>
    );
}
