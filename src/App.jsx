import { useState } from 'react'
import UploadScreen from './components/UploadScreen'
import EvaluationScreen from './components/EvaluationScreen'
import './styles/global.css'

export default function App() {
  const [uploadData, setUploadData] = useState(null)

  function handleUpload(data) {
    setUploadData(data)
  }

  function handleReset() {
    setUploadData(null)
  }

  if (!uploadData) return <UploadScreen onUpload={handleUpload} />
  return <EvaluationScreen {...uploadData} onReset={handleReset} />
}
