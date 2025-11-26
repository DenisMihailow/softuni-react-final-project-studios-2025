export default function SaveYourTime() {
    return (
        <section id="add-page">
            <form id="save-time-form">
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
                    <div className="form-group-full">
                        <label htmlFor="procedure">Procedure Type:</label>
                        <select id="procedure" name="procedure">
                            <option value="">Select procedure...</option>
                            <option value="manicure">Manicure</option>
                            <option value="gel-nails">Gel Nails</option>
                            <option value="nail-art">Nail Art</option>
                            <option value="pedicure">Pedicure</option>
                            <option value="spa">Spa Treatment</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <input className="btn submit" type="submit" value="Save" />

                </div>
            </form>
        </section>
    );
}