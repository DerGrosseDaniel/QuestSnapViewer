const RATINGS_KEY = 'questsnap_ratings'
const GROUPS_PER_ROW_KEY = 'questsnap_groupsPerRow'

export function loadRatings() {
  try { return JSON.parse(localStorage.getItem(RATINGS_KEY)) || {} }
  catch { return {} }
}

export function saveRatings(ratings) {
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings))
}

export function loadGroupsPerRow(defaultValue = 4) {
  const stored = localStorage.getItem(GROUPS_PER_ROW_KEY)
  return stored ? parseInt(stored, 10) : defaultValue
}

export function saveGroupsPerRow(value) {
  localStorage.setItem(GROUPS_PER_ROW_KEY, value.toString())
}
