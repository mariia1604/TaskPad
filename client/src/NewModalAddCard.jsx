import { useState } from "react";
import axios from "axios";

const NewModalAddCard = () => {
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/add_workspace",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ЗБС!");
    } catch (error) {
      console.error("не збс:", error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Workspace Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Workspace</button>
      </form>
    </div>
  );
};

export default NewModalAddCard;
