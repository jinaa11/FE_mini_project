import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "../state/tokenState";
import style from './ProductDetail.module.css';

function ProductDetail() {
   // 객체 안의 key값에 해당하는 value를 가져옴
   const { id } = useParams();
   const [product, setProduct] = useState();
   const token = useRecoilValue(tokenState);

   const userId = token.id;
   const navigate = useNavigate();

   const [cartCount, setCartCount] = useState(1);


   // id 별로 products data get
   useEffect(() => {
      try {
         axios.get(`http://localhost:3001/products/${id}`)
            .then(res => {
               setProduct(res.data)
            })
      } catch (err) {
         console.log(err)
      }
   }, [id])

   // 같은 상품 아이디의 id와 qty get
   const getCartIdAsExistSameProduct = async () => {
      let result = false;
      await axios.get(`http://localhost:3001/carts?userId=${userId}}&productId=${id}`)
         .then(res => {
            if (res.data.length !== 0) {
               result = { id: res.data[0].id, qty: res.data[0].qty }
               console.log(result);
            }
         }).catch(err => console.log(err))
      return result;
   }

   // add cart
   const handleAddCart = () => {
      getCartIdAsExistSameProduct().then(result => {
         // add한 상품의 productId와 같은게 기존에 있으면 qty를 patch
         if (result) {
            axios.patch(`http://localhost:3001/carts/${result.id}`, {
               userId: userId,
               productId: product.id,
               qty: result.qty + cartCount
            })
               .then(res => {
                  setCartCount(cartCount)
                  console.log(cartCount, res.data)
                  alert("상품을 장바구니에 담았습니다.")
                  navigate('/cart');
               })
               .catch(err => console.log(err));
         } else {
            // add한 상품과 같은 productId가 기존에 없으면 새로 post 
            axios.post('http://localhost:3001/carts', {
               productId: product.id,
               userId: userId,
               qty: cartCount
            })
               .then(res => {
                  setCartCount(cartCount);
                  console.log(cartCount, res.data);
                  window.alert("상품을 장바구니에 담았습니다.");
                  navigate('/cart');
               })
               .catch(err => console.log(err))
         }
      })
   }

   // decrease qty
   const handleQtyDecre = () => {
      if (cartCount === 1) {
         return alert("최소 수량은 1개 입니다.");
      }
      setCartCount(cartCount - 1)
   }

   // increase qty
   const handleQtyIncre = () => {
      setCartCount(cartCount + 1)
      console.log("increase", cartCount);
   }

   return (
      <div>
         {
            product && (
               <div className={style.productWrap}>
                  <img src={product.thumbnail} alt={product.description} />
                  <div className={style.script}>
                     <h2>{product.name}</h2>
                     <p>{product.rating}</p>
                     <p>{product.description}</p>
                     <p className={style.price}>{product.price}원</p>
                     {/* 컴포넌트로 따로 만들기 */}
                     <div className={style.cartBox}>
                        <p className={style.title}>{product.name}</p>
                        <p onClick={handleQtyDecre}><span>-</span></p>
                        <p><span>{cartCount}</span></p>
                        <p onClick={handleQtyIncre}><span>+</span></p>
                        <p className={style.total}>
                           {cartCount * product.price}원</p>
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