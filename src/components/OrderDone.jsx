export default function OrderDone({ order, onContinue }) {
  return (
    <div className="card cartwrap" style={{ textAlign: "center" }}>
      <div className="big">🎉</div><h2>Order placed!</h2>
      <p>Order ID: <b>{order.id}</b></p>
      <p className="mut">Total to pay on delivery: ₹{order.total}</p>
      <button className="add" onClick={onContinue}>Continue shopping</button>
    </div>
  );
}
