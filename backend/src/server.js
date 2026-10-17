const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ ok: true, env: 'mvp/initial-app' }))

// Endpoint mínimo para solicitar una explicación de código (usa proveedor local en frontend)
app.post('/api/explain', (req, res) => {
  const { filePath, content } = req.body || {}
  if (!filePath || !content) return res.status(400).json({ error: 'filePath and content required' })
  // No ejecutar análisis pesado aquí en el MVP; devolver instructivo
  return res.json({ message: 'Explainer not implemented on server in MVP. Use frontend local provider.' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`))
