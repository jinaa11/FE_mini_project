import React from "react";
import HeaderBottomMenu from "../ui/header/HeaderBottomMenu";
import HeaderTopMenu from "../ui/header/HeaderTopMenu";

function Header() {
   return(
      <header>
         <HeaderTopMenu />
         <HeaderBottomMenu />
      </header>
   );
}

export default Header;