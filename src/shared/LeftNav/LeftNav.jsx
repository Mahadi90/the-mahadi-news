import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="border p-3">
      <h3>All Category</h3>
      <div className="ms-4">
        {
            categories.map(category => <p
            key={category.id}
            >
     <Link className="text-decoration-none">{category.name}</Link>
            </p>)
        }
      </div>
    </div>
  );
};

export default LeftNav;
