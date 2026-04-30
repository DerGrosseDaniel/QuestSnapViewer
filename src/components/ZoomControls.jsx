import './ZoomControls.css'

export default function ZoomControls({ groupsPerRow, onIncrease, onDecrease }) {
  return (
    <div className="zoom-controls">
      <button onClick={onDecrease} title="Weniger Gruppen pro Zeile">−</button>
      <span className="label">{groupsPerRow}</span>
      <button onClick={onIncrease} title="Mehr Gruppen pro Zeile">+</button>
    </div>
  )
}
