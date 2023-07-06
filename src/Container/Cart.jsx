import { useContext } from "react";
import { Cartcontext } from "../context/Context";
import Navbar from "../Component/Navbar";


const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return (
    <>
    <Navbar />
    <div style={{marginTop:"4rem"}}>
    {state.length===0? <h1>Cart is empty</h1>:""}
      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.price}</p>

              <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>X</h2>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total">
            <h2>${total}</h2>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Cart;