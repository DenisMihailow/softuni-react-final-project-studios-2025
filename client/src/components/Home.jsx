// import "../styles/Home.css";
//Nails Salon Services
export default function Home() {
    return (
         <div className="nails">
      <h1 className="title"></h1>

      <div className="nails-cards">
        <div className="nails-card">
          <img src="./styles/nails1.jpg" alt="" />
          <div className="nails-info">
            <h3>Manicure</h3>
            <button>Details</button>
          </div>
        </div>

        <div className="nails-card">
          <img src="./styles/nails2.jpg" alt="" />
          <div className="nails-info">
            <h3>Gel Nails</h3>
            <button>Details</button>
          </div>
        </div>

        <div className="nails-card">
          <img src="./styles/nails3.jpg" alt="" />
          <div className="nails-info">
            <h3>Nail Art</h3>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
    );
}