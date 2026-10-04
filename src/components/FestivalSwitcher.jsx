import Chips from "./Chips";
import { FESTIVALS, daysLeft } from "../data/products";

export default function FestivalSwitcher({ fest, onChange }) {
  const F = FESTIVALS[fest];
  return (
    <>
      <div className="hero">
        <div className="big">{F.emoji}</div>
        <h1>Happy {fest}!</h1>
        <div>{F.line}</div>
        <div className="cd">⏳ {daysLeft(F.date)} days to go</div>
      </div>
      <Chips options={Object.keys(FESTIVALS)} value={fest} onChange={onChange} label={f => `${FESTIVALS[f].emoji} ${f}`} />
    </>
  );
}
