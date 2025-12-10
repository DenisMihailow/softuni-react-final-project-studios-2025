import { useEffect, useState } from "react";
import request from "../../utils/request";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    request("/gallery").then(res => {
      setImages(Object.values(res)); //
    });
  }, []);

  return (
   <section className="gallery">
      {images.length > 0 ? (
        <h1 className="gallery-title">Gallery</h1>
      ) : (
        <h1 className="gallery-title">No photos added to the gallery!</h1>
      )}

      <div className="gallery-grid">
        {images.map(img => (
          <div className="gallery-card" key={img._id}>
            <img src={img.imageUrl} alt={img.title} />

            <div className="gallery-info">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
