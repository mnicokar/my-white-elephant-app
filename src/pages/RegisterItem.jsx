import React, { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./RegisterItem.css";
import AuthContext from "../context/AuthContext";

function RegisterItem() {
  const [itemName, setItemName] = useState("");
  const [amazonLink, setAmazonLink] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "gifts"), {
        name: itemName,
        link: amazonLink,
        description: description,
        userId: user.uid,
      });

      // Clear the form or show a success message
      setItemName("");
      setAmazonLink("");
      setDescription("");
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  return (
    <div className="register-item-page">
      <form className="register-item-form" onSubmit={handleSubmit}>
        <h2>Register an Item</h2>

        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amazonLink">Amazon Link:</label>
          <input
            type="text"
            id="amazonLink"
            value={amazonLink}
            onChange={(e) => setAmazonLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register Item</button>
      </form>
    </div>
  );
}

export default RegisterItem;
