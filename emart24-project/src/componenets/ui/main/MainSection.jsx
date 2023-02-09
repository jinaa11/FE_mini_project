import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './MainSection.module.css';
import ProductCard from "./ProductCard";

function MainSection() {
   const [productData, setProductData] = useState();

   useEffect(() => {
      try {
         axios.get('http://localhost:3001/products')
            .then(res => {
               console.log(res.data)
               setProductData(res.data)
            })
      } catch (err) {
         console.log(err)
      }
   }, [])

   return (
      <sesction className={style.mainSectionWrap}>
         <p>상품 보기</p>
         {
            productData && productData.map(product => (
               <ProductCard key={product.id}
                  product={product}
               />
            ))
         }
      </sesction>
   );
}

export default MainSection;