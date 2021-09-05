import React from "react";

function Category({ category }) {
  return (
    <li className="category">
      
      <img src={category.image} alt={category.image} />
      {category.subName}
    </li>
  );
}

export default Category;
