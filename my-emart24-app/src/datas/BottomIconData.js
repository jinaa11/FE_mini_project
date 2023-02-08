import CartIcon from '../../assets/icons/cart.png';
// import WalletIcon from '../../assets/icons/wallet.png';
// import QRIcon from '../../assets/icons/qr.png';
import SearchIcon from '../../assets/icons/search.png';
import HomeIcon from '../../assets/icons/house.png';

// components import
import Home from '../screens/Home';
import Cart from '../screens/Cart';
// import Wallet from '../screens/Wallet';
import Search from '../screens/Search';
// import QR from '../screens/QR';

export const BottomIconData = [
  {
    id: 1,
    name: 'Home',
    icon: HomeIcon,
    url: 'Home',
    component: Home,
  },
  // {
  //   id: 2,
  //   name: 'Wallet',
  //   icon: WalletIcon,
  //   url: 'Wallet',
  //   component: Wallet,
  //   // cnt : 10,
  // },
  // {
  //   id: 3,
  //   name: 'QR',
  //   icon: QRIcon,
  //   url: 'QR',
  //   component: QR,
  //   cnt : 3,
  // },
  {
    id: 2,
    name: 'Search',
    icon: SearchIcon,
    url: 'Search',
    component: Search,
  },
  {
    id: 3,
    name: 'Cart',
    icon: CartIcon,
    url: 'Cart',
    component: Cart,
  }
];