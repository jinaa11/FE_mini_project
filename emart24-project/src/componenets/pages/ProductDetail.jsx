import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './ProductDetail.module.css';

function ProductDetail() {
   // 객체 안의 key값에 해당하는 value를 가져옴
   const { id } = useParams();
   const [product, setProduct] = useState();

   useEffect(() => {
      console.log(id);
      try {
         axios.get(`http://localhost:3001/products/${id}`)
            .then(res => {
               console.log(res.data)
               setProduct(res.data)
            })
      } catch (err) {
         console.log(err)
      }
   }, [id])

   return (
      <div>
         {
            product && (
               <div className={style.productWrap}>
                  <img src={product.thumbnail} alt={product.description} />
                  <div className={style.script}>
                     <h2>{product.name}</h2>
                     <p>★ {product.rating}</p>
                     <p>{product.description}</p>
                     <p>{product.price}원</p>
                     
                  </div>
               </div>
            )
         }

      </div>

   );
}

export default ProductDetail;