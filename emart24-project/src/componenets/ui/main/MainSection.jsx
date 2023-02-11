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
      <section>
         <p>전체 상품</p>
         <div className={style.productList}>
         {
            productData && productData.map(product => (
               <ProductCard key={product.id}
                  product={product}
               />
            ))
         }
         </div>
      </section>
   );
}

export default MainSection;