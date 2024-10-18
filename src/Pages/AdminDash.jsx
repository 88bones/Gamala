import React, { useState } from "react";
import AddProduct from "../Admin/AddProduct";
import Users from "../Admin/Users";
import Orders from "../Admin/Orders";

const AdminDash = () => {
  const [activeSection, setActiveSection] = useState("");

  const AdminItems = [
    { name: "Users", section: "Users" },
    { name: "Orders", section: "Orders" },
    { name: "Products", section: "Products" },
  ];

  return (
    <div className="admin-dash-container">
      <aside className="admin-aside">
        <h2>Admin Dashboard</h2>
        <ul style={{ listStyleType: "none" }}>
          {AdminItems.map((item, index) => (
            <li key={index}>
              <button
                className="aside-button"
                onClick={() => setActiveSection(item.section)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="admin-main">
        {activeSection === "Users" && <Users />}
        {activeSection === "Orders" && <Orders />}
        {activeSection === "Products" && <AddProduct />}
      </main>
    </div>
  );
};

export default AdminDash;
