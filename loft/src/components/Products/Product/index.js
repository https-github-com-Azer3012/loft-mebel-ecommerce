import React from 'react'

function Product({product}) {
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
            <button>Səbətə əlavə et</button>

            </div>

            
        </div>
    )
}

export default Product
