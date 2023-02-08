import Main from "../screens/Main";
import Products from "../screens/Products";
import ProductDetail from "../screens/ProductDetail";

export const stackMainData = [
   {
      id: 1,
      name: 'Main',
      component: Main,
   },
   {
      id: 2,
      name: 'Products',
      component: Products,
   },
   {
      id: 3,
      name: 'ProductDetail',
      component: ProductDetail,
   },
]

export const stackMainCenterData = [
   {
      id: 1,
      data: [
         {
            id: 1,
            name: 'Main',
            source: require('../../assets/icons/logo.png'),
         }
      ]
   }
]

const stackMainLeftData = [

]

const stackMainRightData = [

]