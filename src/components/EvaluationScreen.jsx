import { useState, useMemo, useEffect } from 'react'
import GroupColumn from './GroupColumn'
import ZoomControls from './ZoomControls'
import { loadRatings, saveRatings, loadBonus, saveBonus } from '../utils/storage'
import './EvaluationScreen.css'

export default function EvaluationScreen({ uniqueGroups, allIds, imagesById, promptById, onReset }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [groupsPerRow, setGroupsPerRow] = useState(() => {
    const stored = localStorage.getItem('questsnap_groupsPerRow')
    return stored ? parseInt(stored, 10) : 4
  })
  const [ratings, setRatings] = useState(() => {
    const saved = loadRatings()
    const merged = JSON.parse(JSON.stringify(saved))
    let changed = false
    allIds.forEach(id => {
      if (!merged[id]) merged[id] = {}
      uniqueGroups.forEach(g => {
        if (imagesById[id]?.[g] && merged[id][g] !== 'green') {
          merged[id][g] = 'green'
          changed = true
        }
      })
    })
    if (changed) saveRatings(merged)
    return merged
  })
  const [bonus, setBonus] = useState(() => loadBonus())

  const currentId = allIds[currentIndex]
  const prompt = promptById[currentId] || ''
  const total = allIds.length

  const accumulatedPoints = useMemo(() => {
    const points = {}
    uniqueGroups.forEach(g => { points[g] = 0 })
    for (let i = 0; i <= currentIndex; i++) {
      const id = allIds[i]
      const idRatings = ratings[id] || {}
      const idBonus = bonus[id] || {}
      uniqueGroups.forEach(g => {
        if (idRatings[g] === 'green') points[g]++
        points[g] += (idBonus[g] || 0)
      })
    }
    return points
  }, [currentIndex, ratings, bonus, uniqueGroups, allIds])

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

  function handleBonus(group, delta) {
    const newBonus = { ...bonus }
    if (!newBonus[currentId]) newBonus[currentId] = {}
    const current = newBonus[currentId][group] || 0
    newBonus[currentId][group] = current + delta
    setBonus(newBonus)
    saveBonus(newBonus)
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex(i => Math.max(0, i - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(i => Math.min(allIds.length - 1, i + 1))
      } else if (/^[1-9]$/.test(e.key)) {
        const idx = parseInt(e.key, 10) - 1
        if (idx < uniqueGroups.length) {
          const group = uniqueGroups[idx]
          setRatings(prev => {
            const currentVal = prev[currentId]?.[group]
            const newVal = currentVal === 'green' ? 'red' : 'green'
            const updated = { ...prev }
            if (!updated[currentId]) updated[currentId] = {}
            updated[currentId][group] = newVal
            saveRatings(updated)
            return updated
          })
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentId, uniqueGroups, allIds.length])

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
            const currentBonus = bonus[currentId]?.[group] || 0
            return (
              <GroupColumn
                key={group}
                group={group}
                imageUrl={imageUrl}
                hasImage={hasImage}
                rating={rating}
                points={points}
                currentBonus={currentBonus}
                onRate={(val) => handleRate(group, val)}
                onBonus={(delta) => handleBonus(group, delta)}
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
