import { useEffect, useState } from "react";
import request from "../../utils/request";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    description: ""
  });

  useEffect(() => {
    request("/gallery").then(res => {
      setImages(Object.values(res)); 
    });
  }, []);

  const changeHandler = (e) => {
    setForm(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await request("/gallery", "POST", form);
    const updated = await request("/gallery");
    setImages(Object.values(updated));
    setForm({ title: "", imageUrl: "", description: "" });
  };

  const deleteHandler = async (id) => {
  const confirmed = confirm("Сигурен ли си, че искаш да изтриеш?");
  if (!confirmed) return;

  await request(`/gallery/${id}`, "DELETE");

  setImages(state => state.filter(img => img._id !== id));
};

  return (
    <section className="admin-gallery">
      <h1>Admin Gallery</h1>

      <form className="admin-form" onSubmit={submitHandler}>
        <input name="title" value={form.title} onChange={changeHandler} placeholder="Title" />
        <input name="imageUrl" value={form.imageUrl} onChange={changeHandler} placeholder="Image URL" />
        <textarea name="description" value={form.description} onChange={changeHandler} placeholder="Description" />
        <button>Add</button>
      </form>

      <div className="admin-gallery-grid">
        {images.map(img => (
          <div className="admin-card" key={img._id}>
  <img src={img.imageUrl} />

  <div className="admin-card-content">
    <h3>{img.title}</h3>
    <p>{img.description}</p>

    <div className="admin-actions">
      <button onClick={() => deleteHandler(img._id)}>Delete</button>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}
