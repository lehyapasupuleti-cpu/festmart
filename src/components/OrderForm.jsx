export default function OrderForm({ info, setInfo, total, onPlace, waLink }) {
  const needInfo = e => { if (!info.name || !info.phone) { e.preventDefault(); alert("Please enter your name and phone."); } };
  return (
    <>
      <div className="card row"><b>Total</b><b>₹{total}</b></div>
      <input placeholder="Your name" value={info.name} onChange={e => setInfo({ ...info, name: e.target.value })} />
      <input placeholder="Phone number" inputMode="tel" value={info.phone} onChange={e => setInfo({ ...info, phone: e.target.value })} />
      <button className="add" onClick={onPlace}>Place Order</button>
      <a className="wa" href={waLink} target="_blank" rel="noreferrer" onClick={needInfo}>💬 Order on WhatsApp</a>
    </>
  );
}
