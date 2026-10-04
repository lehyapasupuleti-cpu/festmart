import { finalPrice } from "../data/products";
import OrderForm from "./OrderForm";

export default function Cart({ lines, cart, change, ...formProps }) {
  return (
    <div className="cartwrap">
      <h2>🛒 Your Cart</h2>
      {!lines.length && <p className="mut">Your cart is empty. Add some festive items!</p>}
      {lines.map(p => (
        <div className="card list row" key={p.id}>
          <span>{p.emoji} <b>{p.name}</b><br /><span className="mut">🏪 {p.shop} · ₹{finalPrice(p)} each</span></span>
          <span><button className="chip" onClick={() => change(p.id, -1)}>−</button> {cart[p.id]} <button className="chip" onClick={() => change(p.id, 1)}>+</button></span>
        </div>
      ))}
      {!!lines.length && <OrderForm {...formProps} />}
    </div>
  );
}
