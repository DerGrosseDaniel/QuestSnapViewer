export function parseFilename(filename) {
  const name = filename.replace(/\.(jpg|jpeg)$/i, '')
  if (!name.startsWith('QuestSnap-')) return null
  const rest = name.substring('QuestSnap-'.length)
  const id = rest.substring(0, 3)
  if (!/^\d{3}$/.test(id)) return null
  const afterId = rest.substring(4)
  const lastHyphen = afterId.lastIndexOf('-')
  if (lastHyphen === -1) return null
  const group = afterId.substring(0, lastHyphen)
  const prompt = afterId.substring(lastHyphen + 1)
  return { id, group, prompt }
}
