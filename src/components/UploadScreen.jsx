import { useRef, useState } from 'react'
import { parseFilename } from '../utils/parseFilename'
import { loadImagesAsDataUrls } from '../utils/imageLoader'
import './UploadScreen.css'

export default function UploadScreen({ onUpload }) {
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef(null)

  function processFiles(files) {
    setError('')
    loadImagesAsDataUrls(files).then(loaded => {
      const parsed = loaded.map(({ name, dataUrl }) => {
        const info = parseFilename(name)
        return info ? { ...info, dataUrl } : null
      }).filter(Boolean)

      if (parsed.length === 0) {
        setError('Keine gültigen QuestSnap-Dateien gefunden.')
        return
      }

      const uniqueGroups = [...new Set(parsed.map(p => p.group))]
      const ids = parsed.map(p => p.id).sort()
      const minId = ids[0]
      const maxId = ids[ids.length - 1]
      const allIds = []
      for (let i = parseInt(minId, 10); i <= parseInt(maxId, 10); i++) {
        allIds.push(String(i).padStart(3, '0'))
      }

      const imagesById = {}
      const promptById = {}
      parsed.forEach(({ id, group, prompt, dataUrl }) => {
        if (!imagesById[id]) imagesById[id] = {}
        imagesById[id][group] = dataUrl
        promptById[id] = prompt
      })

      onUpload({ uniqueGroups, allIds, imagesById, promptById, minId, maxId })
    })
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    processFiles(e.dataTransfer.files)
  }

  function handleChange(e) {
    processFiles(e.target.files)
  }

  return (
    <div className="upload-screen">
      <div
        className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => inputRef.current.click()}
      >
        <p>📷 Bilder hierher ziehen</p>
        <p className="hint">Nur .jpg / .jpeg – Format: QuestSnap-XXX-GRUPPE-PROMPT.jpg</p>
        <button className="btn-select" onClick={e => { e.stopPropagation(); inputRef.current.click() }}>
          Dateien auswählen
        </button>
        <input ref={inputRef} type="file" accept=".jpg,.jpeg" multiple className="file-input" onChange={handleChange} />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
