import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const TopBar = () => {
  let [storeName, setStoreName] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/store/info", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setStoreName(data.data[0].name);
        console.log(storeName);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="topbar-section">
      <div className="logo-block">
        <img className="logo" src="../assets/image.png" alt="logo img" />
        <h1 className="text-bold h4">{storeName}</h1>
        <NavLink to={"/"}>Sales</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </div>
    </div>
  );
};
