import { useState } from 'react'
import './GroupColumn.css'

export default function GroupColumn({ group, imageUrl, rating, hasImage, onRate, points, style }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  function handleImageClick() {
    if (hasImage) {
      setLightboxOpen(true)
    } else {
      onRate(rating === 'green' ? 'red' : 'green')
    }
  }

  return (
    <div className="group-column" style={style}>
      <div className="image-section">
        <div
          className={`image-wrapper ${hasImage ? 'has-image ' + (rating || '') : 'no-image ' + (rating || 'red')}`}
          onClick={handleImageClick}
          style={!hasImage ? { cursor: 'pointer' } : { cursor: 'pointer' }}
        >
          {hasImage ? (
            <>
              <img src={imageUrl} alt={group} />
              <div className="hover-buttons">
                <button className="btn-rate green" onClick={(e) => { e.stopPropagation(); onRate('green') }}>✓</button>
                <button className="btn-rate red" onClick={(e) => { e.stopPropagation(); onRate('red') }}>✗</button>
              </div>
              {lightboxOpen && (
                <div className="lightbox-overlay" onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}>
                  <img src={imageUrl} alt={group} className="lightbox-image" onClick={(e) => e.stopPropagation()} />
                </div>
              )}
            </>
          ) : (
            <div className="no-image-placeholder">
              [NO IMAGE]<br/>
              <small>{rating === 'green' ? '✓ Grün' : '✗ Rot'}</small>
            </div>
          )}
        </div>
      </div>
      <div className="team-section">
        <div className="team-name">{group}</div>
        <div className="team-points">({points})</div>
      </div>
    </div>
  )
}
