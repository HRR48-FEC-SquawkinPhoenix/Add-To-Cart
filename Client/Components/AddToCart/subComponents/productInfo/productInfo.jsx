import React from 'react';
import './productInfo.css';


var ProductInfo = ({store, sales, title, price}) => {
  return (
    <div>
      <h4>{store}</h4>
      <p className="storeTotals">
        {sales} sales <span className="divider">|</span> *****
      </p>
      <h6>{title}</h6>
      <p className="price">
        ${price}<span>In stock</span>
      </p>
    </div>
  )
}


export default ProductInfo;