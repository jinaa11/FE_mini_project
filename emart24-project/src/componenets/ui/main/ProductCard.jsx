import React from "react";
import { Link } from "react-router-dom";
import style from './ProductCard.module.css';

function ProductCard({ product }) {


   return (
      <div className={style.productCard}>
         <Link to={`/product-detail/${product.id}`}>
            <img src={product.thumbnail} alt={product.description} />
         </Link>
         <p>{product.name}</p>
         <p className={style.price}>{product.price}원</p>
      </div>

   );
}

export default ProductCard;