import { useNavigate } from "react-router";
import request from "../utils/request";
import { useUserContext } from "../contexts/UserContext";
import { useState } from "react";

export default function SaveYourTime() {
    const navigate = useNavigate();
    const { user } = useUserContext();

    const [errors, setErrors] = useState({});
    const createReservationHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const newErrors = {};

        if (!data.firstName.trim()) {
            newErrors.firstName = 'First name is required!';
        }

        if (!data.lastName.trim()) {
            newErrors.lastName = 'Last name is required!';
        }
        if (!data.phone) {
            newErrors.phone = 'Phone is required!';
        }

        if (!data.procedure) {
            newErrors.procedure = 'Procedure is required!';
        }

        if (!data.date) {
            newErrors.date = 'Date is required!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // изчистване на грешките

        data.createdOn = Date.now();
        data._ownerId = user._id;

        await request('/reservations', 'POST', data);
        navigate('/reservations');
    };




    return (
        <section id="add-page">
            <form id="save-time-form" onSubmit={createReservationHandler}>
                <div className="container">

                    <h1>Save Your Time</h1>

                    {/* First Name */}
                    <div className="form-group-half">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="form-group-half">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>

                    {/* Phone */}
                    <div className="form-group-half">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="form-group-half">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email Address..." />
                    </div>

                    {/* Procedure ComboBox */}
                    <div className="form-group-half">
                        <label htmlFor="procedure">Procedure Type:</label>
                        <select name="procedure">
                            <option value="">Select procedure...</option>
                            <option value="gel-nails">Gel Nails</option>
                            <option value="pedicure">Pedicure</option>
                            <option value="spa">Spa Treatment</option>
                        </select>
                        {errors.procedure && <p className="error">{errors.procedure}</p>}
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" name="date" />
                        {errors.date && <p className="error">{errors.date}</p>}
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." />
                    </div>

                    {/* Submit */}
                    <input className="btn submit" type="submit" value="Save Reservation" />

                </div>
            </form>
        </section>
    );
}