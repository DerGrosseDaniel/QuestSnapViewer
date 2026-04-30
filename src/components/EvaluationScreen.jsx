import { useState, useMemo } from 'react'
import GroupColumn from './GroupColumn'
import ZoomControls from './ZoomControls'
import { loadRatings, saveRatings } from '../utils/storage'
import './EvaluationScreen.css'

export default function EvaluationScreen({ uniqueGroups, allIds, imagesById, promptById, onReset }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [groupsPerRow, setGroupsPerRow] = useState(() => {
    const stored = localStorage.getItem('questsnap_groupsPerRow')
    return stored ? parseInt(stored, 10) : 4
  })
  const [ratings, setRatings] = useState(() => loadRatings())

  const currentId = allIds[currentIndex]
  const prompt = promptById[currentId] || ''
  const total = allIds.length

  const accumulatedPoints = useMemo(() => {
    const points = {}
    uniqueGroups.forEach(g => { points[g] = 0 })
    for (let i = 0; i <= currentIndex; i++) {
      const id = allIds[i]
      const idRatings = ratings[id] || {}
      uniqueGroups.forEach(g => {
        if (idRatings[g] === 'green') points[g]++
      })
    }
    return points
  }, [currentIndex, ratings, uniqueGroups, allIds])

  function handleRate(group, value) {
    const newRatings = { ...ratings }
    if (!newRatings[currentId]) newRatings[currentId] = {}
    newRatings[currentId][group] = value
    setRatings(newRatings)
    saveRatings(newRatings)
  }

  function handleAllGreen() {
    const newRatings = { ...ratings }
    if (!newRatings[currentId]) newRatings[currentId] = {}
    uniqueGroups.forEach(g => {
      if (imagesById[currentId]?.[g]) newRatings[currentId][g] = 'green'
    })
    setRatings(newRatings)
    saveRatings(newRatings)
  }

  function handleAllRed() {
    const newRatings = { ...ratings }
    if (!newRatings[currentId]) newRatings[currentId] = {}
    uniqueGroups.forEach(g => { newRatings[currentId][g] = 'red' })
    setRatings(newRatings)
    saveRatings(newRatings)
  }

  function goNext() {
    if (currentIndex < allIds.length - 1) setCurrentIndex(currentIndex + 1)
  }

  function goPrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  function handleIncrease() {
    const next = groupsPerRow + 1
    setGroupsPerRow(next)
    localStorage.setItem('questsnap_groupsPerRow', next.toString())
  }

  function handleDecrease() {
    if (groupsPerRow <= 1) return
    const next = groupsPerRow - 1
    setGroupsPerRow(next)
    localStorage.setItem('questsnap_groupsPerRow', next.toString())
  }

  return (
    <div className="evaluation-screen">
      <div className="evaluation-header">
        <h1 className="prompt-heading">{prompt}</h1>
        <div className="header-right">
          <span className="id-display">ID: {currentId}/{total}</span>
          <ZoomControls
            groupsPerRow={groupsPerRow}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      </div>

      <div className="images-section">
        <div className="groups-container">
          {uniqueGroups.map(group => {
            const hasImage = !!imagesById[currentId]?.[group]
            const imageUrl = imagesById[currentId]?.[group]
            const rating = ratings[currentId]?.[group]
            const points = accumulatedPoints[group] || 0
            return (
              <GroupColumn
                key={group}
                group={group}
                imageUrl={imageUrl}
                hasImage={hasImage}
                rating={rating}
                points={points}
                onRate={(val) => handleRate(group, val)}
                style={{
                  width: `calc((100% - ${(groupsPerRow - 1) * 1.5}rem) / ${groupsPerRow})`,
                  minWidth: '150px'
                }}
              />
            )
          })}
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-left">
          <button className="btn btn-back" onClick={goPrev} disabled={currentIndex === 0}>
            Zurück
          </button>
        </div>
        <div className="nav-right">
          <button className="btn btn-green" onClick={handleAllGreen}>Alle Grün</button>
          <button className="btn btn-red" onClick={handleAllRed}>Alle Rot</button>
          <button className="btn btn-next" onClick={goNext} disabled={currentIndex === allIds.length - 1}>
            Weiter →
          </button>
        </div>
      </div>
    </div>
  )
}
