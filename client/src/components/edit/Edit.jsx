import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import request from "../../utils/request";
const initialValues = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        procedure: "",
        date: "",
        imageUrl: "",
}

export default function Edit() {
    const { reservationId } = useParams();
    const [reservation, setReservation] = useState(initialValues);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        console.log(e);
        
        setReservation(state => ({
            ...state,
            [e.target.name]:e.target.value,
        }));
    };
        useEffect(() => {
            request(`/reservations/${reservationId}`)
            .then(result => {
                setReservation(result);
            })
            .catch(err => {
                console.log(1234)
                alert (err.message);
            })
    },[reservationId]);

    const editReservationHandler = async () => {

        try{
            await request(`/reservations/${reservationId}`, 'PUT', reservation);
           
        }catch(err){
            alert (err.message);
        }
                // Navigation
                 navigate(`/reservations/${reservationId}/details`)
    }
    // useEffect(() => {
    //     request(`/reservations/${reservationId}`).then(setReservation);
    // }, [reservationId]);

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const data = Object.fromEntries(new FormData(e.target));
    //     console.log(reservationId);
        
    //     await request(`/reservations/${reservationId}`, "PUT", data);
    //     navigate(`/reservations/${reservationId}/details`);
    // };

    // if (!reservation) return <h2>Loading...</h2>;

    return (
        <section id="add-page">
            <form id="save-time-form" action={editReservationHandler}>
                <div className="container">

                    <h1>Edit Reservation</h1>

                    <div className="form-group-half">
                        <label>First Name:</label>
                        <input type="text" name="firstName" onChange={changeHandler}
                            value={reservation.firstName}/>
                    </div>

                    <div className="form-group-half">
                        <label>Last Name:</label>
                        <input type="text" name="lastName"  onChange={changeHandler}
                            value={reservation.lastName}/>
                    </div>

                    <div className="form-group-half">
                        <label>Phone:</label>
                        <input type="text" name="phone" onChange={changeHandler}
                            value={reservation.phone}/>
                    </div>

                    <div className="form-group-half">
                        <label>Email:</label>
                        <input type="email" name="email"
                            onChange={changeHandler}
                            value={reservation.email}/>
                    </div>

                    <div className="form-group-half">
                        <label>Procedure:</label>
                        <select name="procedure"
                            onChange={changeHandler}
                            value={reservation.procedure}>
                            <option value="">Select…</option>
                            <option value="manicure">Manicure</option>
                            <option value="gel-nails">Gel Nails</option>
                            <option value="nail-art">Nail Art</option>
                            <option value="pedicure">Pedicure</option>
                            <option value="spa">Spa Treatment</option>
                        </select>
                    </div>

                    <div className="form-group-half">
                        <label>Date:</label>
                        <input type="date" name="date"  onChange={changeHandler}
                            value={reservation.date}/>
                    </div>

                    <div className="form-group-full">
                        <label>Image URL:</label>
                        <input type="text" name="imageUrl" onChange={changeHandler}
                            value={reservation.imageUrl}/>
                    </div>

                    <input className="btn submit" type="submit" value="Save Changes"/>
                </div>
            </form>
        </section>
    );
}
