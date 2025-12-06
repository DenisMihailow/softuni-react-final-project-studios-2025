import { useNavigate } from "react-router";
import request from "../utils/request";
// import { useState } from "react";

export default function SaveYourTime() {
    const navigate = useNavigate();
    // const [procedures, setProcedures] = useState("");
    const createReservationHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        data.createdOn = Date.now();

        const result = await request('/reservations', 'POST', data)
        console.log(result);
        navigate('/reservations');
    }


    return (
        <section id="add-page">
            <form id="save-time-form" onSubmit={createReservationHandler}>
                <div className="container">

                    <h1>Save Your Time</h1>

                    {/* First Name */}
                    <div className="form-group-half">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name..." />
                    </div>

                    {/* Last Name */}
                    <div className="form-group-half">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name..." />
                    </div>

                    {/* Phone */}
                    <div className="form-group-half">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number..." />
                    </div>

                    {/* Email */}
                    <div className="form-group-half">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email Address..." />
                    </div>

                    {/* Procedure ComboBox */}
                    <div className="form-group-half">
                        <label htmlFor="procedure">Procedure Type:</label>
                        <select id="procedure" name="procedure" >
                            <option value="">Select procedure...</option>
                            <option value="manicure">Manicure</option>
                            <option value="gel-nails">Gel Nails</option>
                            <option value="nail-art">Nail Art</option>
                            <option value="pedicure">Pedicure</option>
                            <option value="spa">Spa Treatment</option>
                        </select>
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" />
                    </div>
                    
                    <div className="form-group-full">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..."/>
                </div>

                    {/* Submit */}
                    <input className="btn submit" type="submit" value="Save Reservation" />

                </div>
            </form>
        </section>
    );
}
//
                        // onChange={(e) => setProcedures(e.target.value)}
                        {/* {procedures === "gel-nails" && (
                            <img
                                src="/images/nail.png"
                                // alt="Gel Nails"
                                className="procedure-image"
                            />
                        )} */}