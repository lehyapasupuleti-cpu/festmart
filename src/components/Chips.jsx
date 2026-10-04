// Reusable chip row used by the festival, category and shop filters
export default function Chips({ options, value, onChange, small, label = x => x }) {
  return (
    <div className="tabs">
      {options.map(o => (
        <button key={o} className={"chip" + (small ? " sm" : "") + (o === value ? " on" : "")} onClick={() => onChange(o)}>{label(o)}</button>
      ))}
    </div>
  );
}
