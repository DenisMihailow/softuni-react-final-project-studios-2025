export default function Home() {
  return (
    <div className="nails">
      <h1 className="title"></h1>

      <div className="full-sections">

        <section className="full-section">
          <div className="content-row">
            <img src="../images/nail.png" alt="" className="full-image" />

            <div className="full-text">
              <h2>Gel Nails</h2>
              <p>Изискан маникюр за перфектен стил.</p>
            </div>
          </div>
        </section>

        <section className="full-section">
          <div className="content-row">
            <img src="../images/pedicure.jpg" alt="" className="full-image" />

            <div className="full-text">
              <h2>Pedicure</h2>
              <p>Грижа, комфорт и красота за твоите стъпала.</p>
            </div>
          </div>
        </section>

        <section className="full-section">
          <div className="content-row">
            <img src="../images/terapy.jpg" alt="" className="full-image" />

            <div className="full-text">
              <h2>Терапия</h2>
              <p>Релакс и възстановяване за тялото и ума.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
