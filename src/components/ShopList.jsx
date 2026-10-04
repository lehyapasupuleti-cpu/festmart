import { SHOPS } from "../data/products";

export default function ShopList({ onOpen }) {
  return (
    <div className="grid">
      {SHOPS.map(s => (
        <div className="card" key={s.name}>
          <div className="pic">{s.emoji}</div>
          <b>{s.name}</b>
          <p className="mut">{s.about}<br />🎁 {s.deal}</p>
          <button className="add" onClick={() => onOpen(s.name)}>Open shop</button>
        </div>
      ))}
    </div>
  );
}
