import { finalPrice } from "../data/products";

export default function TodayDeal({ deal, timer, onBuy }) {
  if (!deal) return null;
  return (
    <div className="deal">
      <div className="row"><b>🔥 Today's Deal</b><span className="tm">⏱ {timer}</span></div>
      <div className="row">
        <span style={{ fontSize: 40 }}>{deal.emoji}</span>
        <span style={{ flex: 1 }}><b>{deal.name}</b><br /><span style={{ fontSize: 13 }}>🏪 {deal.shop}</span></span>
        <span style={{ textAlign: "right" }}><b style={{ fontSize: 20 }}>₹{finalPrice(deal)}</b><br /><s style={{ opacity: .8 }}>₹{deal.price}</s> · {deal.off}% OFF</span>
      </div>
      <button onClick={onBuy}>Buy Now →</button>
    </div>
  );
}
