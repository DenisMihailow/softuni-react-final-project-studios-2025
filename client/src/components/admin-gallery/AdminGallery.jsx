import { useEffect, useState } from "react";
import request from "../../utils/request";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    description: ""
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const res = await request("/gallery");
    setImages(Object.values(res));
  };

  const changeHandler = (e) => {
    setForm(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (editId) {
      await request(`/gallery/${editId}`, "PUT", form);
    } else {
      await request("/gallery", "POST", form);
    }

    setForm({ title: "", imageUrl: "", description: "" });
    setEditId(null);
    loadImages();
  };

  const editHandler = (image) => {
    setEditId(image._id);
    setForm({
      title: image.title,
      imageUrl: image.imageUrl,
      description: image.description
    });
  };

 const deleteHandler = async (id) => {
  const confirmed = confirm("Сигурен ли си?");
  if (!confirmed) return;

  await request(`/gallery/${id}`, "DELETE");

  setImages(state => state.filter(img => img._id !== id));
};


  return (
    <section className="admin-gallery">
      <h1>Admin Gallery</h1>

      <form className="admin-form" onSubmit={submitHandler}>
        <input
          name="title"
          value={form.title}
          onChange={changeHandler}
          placeholder="Title"
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={changeHandler}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={changeHandler}
          placeholder="Description"
        />
        <button>{editId ? "Update" : "Add"}</button>
      </form>

      <div className="admin-grid">
        {images.map(img => (
          <div className="admin-card" key={img._id}>
            <img src={img.imageUrl} />
            <div>
              <h3>{img.title}</h3>
              <p>{img.description}</p>

              <div className="admin-actions">
                <button onClick={() => editHandler(img)}>Edit</button>
                <button onClick={() => deleteHandler(img._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
