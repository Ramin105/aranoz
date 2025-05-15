import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducer/productSlice";
import axios from "axios";
import styles from "./Admin.module.css";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    img: "",
  });

  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", formData);
      alert("Məhsul əlavə olundu!");
      setFormData({ title: "", price: "", img: "" });
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Xəta:", error);
      alert("Xəta baş verdi!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      dispatch(fetchProducts());
      alert("Məhsul silindi!");
    } catch (error) {
      console.error("Xəta:", error);
      alert("Xəta baş verdi!");
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredAndSortedItems = [...items]
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.price - b.price
        : b.price - a.price;
    });

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
        <h1>ADMIN PANEL</h1>
      <div><h2>Yeni məhsul əlavə et</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
          required
        />
        <button type="submit">Əlavə et</button>
      </form>

      <h2>Məhsullar</h2>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <label htmlFor="sort">Qiymətə görə sırala:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Artan</option>
          <option value="desc">Azalan</option>
        </select>
      </div>

      <div className={styles.productList}>
        {filteredAndSortedItems.map((product) => (
          <div key={product._id} className={styles.productItem}>
        
            <img
              src={product.img}
              alt={product.title}
              className={styles.productImg}
            />    <h3>{product.title}</h3>
            <p>{product.price} AZN</p>
           <div> <button
              onClick={() => handleDelete(product._id)}
              className={styles.deleteButton}
            >
              Sil
            </button></div>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default AdminPanel;