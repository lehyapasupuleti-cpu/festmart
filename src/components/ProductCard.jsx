import { finalPrice } from "../data/products";

export default function ProductCard({ product, qty, fav, onAdd, onFav, onShop }) {
  return (
    <div className="card">
      <span className="off">{product.off}% OFF</span>
      <button className="heart" onClick={onFav} aria-label="favorite">{fav ? "❤️" : "🤍"}</button>
      <div className="pic">{product.emoji}</div>
      <b>{product.name}</b>
      <div><button className="link" onClick={() => onShop(product.shop)}>🏪 {product.shop}</button></div>
      <div><b>₹{finalPrice(product)}</b> <span className="old">₹{product.price}</span></div>
      <button className="add" onClick={onAdd}>{qty ? `Added (${qty}) +` : "Add to cart"}</button>
    </div>
  );
}
