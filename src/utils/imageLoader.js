export function loadImagesAsDataUrls(files) {
  return Promise.all(
    Array.from(files)
      .filter(f => /\.(jpg|jpeg)$/i.test(f.name))
      .map(file => new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve({ name: file.name, dataUrl: e.target.result })
        reader.readAsDataURL(file)
      }))
  )
}
