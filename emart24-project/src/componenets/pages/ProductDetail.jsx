import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import style from './ProductDetail.module.css';
import { CartCountState } from '../state/CartCountState'

function ProductDetail() {
   // 객체 안의 key값에 해당하는 value를 가져옴
   const { id } = useParams();
   const [product, setProduct] = useState();

   const userId = 1;
   const navigate = useNavigate();

   const [cartCount, setCartCount] = useRecoilState(CartCountState);


   // id 별로 products 값 get
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

   // add cart
   const handleAddCart = () => {
      console.log("button click!");
      axios.post('http://localhost:3001/carts', {
            productId: product.id,
            userId: userId,
            qty: 1
      })
         .then(res => {
            setCartCount(cartCount + 1);
            console.log(cartCount);
            window.alert("상품을 장바구니에 담았습니다. ");
            //navigate('/cart');
         })
         .catch(err => console.log(err))
   }
  
   // decrease qty
   const handleQtyDecre = () => {

   }

   // increase qty

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
                     <p className={style.price}>{product.price}원</p>
                     <div className={style.cartBox}>
                        <p className={style.title}>{product.name}</p>
                        <p onClick={handleQtyDecre}><span>-</span></p>
                        <p><span>1</span></p>
                        <p><span>+</span></p>
                     </div>
                     <p className={style.cartBtn}
                        onClick={handleAddCart}
                     >장바구니 담기</p>
                  </div>
               </div>
            )
         }


      </div>

   );
}

export default ProductDetail;