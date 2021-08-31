import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import "./styles.scss";
function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get(
        "https://loftmebel-ec909-default-rtdb.firebaseio.com/Categories.json"
      )
      .then((res) => setCategories(res.data));
  }, []);

 
  return (
    <div className="category-section">
      <ul className="categories">
        {categories &&
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
      </ul>
    </div>
  );
}

export default Categories;
