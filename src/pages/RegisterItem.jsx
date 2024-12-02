// RegisterItem.jsx
import React, { useState, useContext, useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./RegisterItem.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterItem() {
  const [itemName, setItemName] = useState("");
  const [amazonLink, setAmazonLink] = useState("");
  const [description, setDescription] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [existingItem, setExistingItem] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExistingItem = async () => {
      if (user) {
        const q = query(
          collection(db, "gifts"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          // Get the document ID from the query snapshot
          const existingItemId = querySnapshot.docs[0].id; 
          setExistingItem({ id: existingItemId, ...querySnapshot.docs[0].data() }); // Include the ID in the object
        }
      }
    };

    fetchExistingItem();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (existingItem) {
        // Update the existing item using the ID
        const itemRef = doc(db, "gifts", existingItem.id); 
        await updateDoc(itemRef, { 
          name: itemName,
          link: amazonLink,
          description: description,
          timestamp: serverTimestamp(),
        });
      } else {
        // Create a new item
        await addDoc(collection(db, "gifts"), {
          name: itemName,
          link: amazonLink,
          description: description,
          userId: user.uid,
          timestamp: serverTimestamp(),
        });
      }

      // Clear the form and show success message
      setItemName("");
      setAmazonLink("");
      setDescription("");
      setShowSuccess(true);

      // Redirect to homepage after a delay
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error("Error adding/updating item: ", error);
      // You might want to show an error message to the user here
    }
  };

  // Pre-fill form fields if an existing item is found
  useEffect(() => {
    if (existingItem) {
      setItemName(existingItem.name);
      setAmazonLink(existingItem.link);
      setDescription(existingItem.description);
    }
  }, [existingItem]);

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

        <button type="submit">
          {existingItem ? "Update Item" : "Register Item"}
        </button>

        {showSuccess && (
          <div className="success-message">
            Item {existingItem ? "updated" : "registered"} successfully!
          </div>
        )}
      </form>

    </div>
  );
}

export default RegisterItem;