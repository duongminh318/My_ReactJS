import { useContext } from "react";
import CartContext from "./CartContext";
export default function CartButton({addToCart}) {
  const{cartCount, handleCart} = useContext(CartContext)
  return (
    <div>
      <button onClick={handleCart}>Thêm vào giỏ hàng</button>
      <p> Hiển thị số sản phẩm trong CartButton : {cartCount}</p>
    </div>
  );
}
