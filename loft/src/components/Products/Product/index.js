import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/actions";

function Product({ product }) {
  const basketProducts = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  
  const sendToBasket = (value) => {
    if (basketProducts.indexOf(value) === -1) {
      dispatch(addToBasket(value));
    }
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>
      <div className="info">
        <p className="name">{product.name}</p>
        <span className="subname">{product.subCategoryName}</span>
        <p className="price">{product.price} &#10969;</p>
      </div>

      <div className="product-btn">
        <button onClick={() => sendToBasket(product)}>Səbətə əlavə et</button>
      </div>
    </div>
  );
}

export default Product;
