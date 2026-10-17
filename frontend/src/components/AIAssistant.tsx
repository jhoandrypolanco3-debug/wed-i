import React, { useState } from 'react'
import { LocalTemplateProvider } from '../providers/LocalTemplateProvider'
import type { AIProvider } from '../providers/AIProvider'

export const AIAssistant: React.FC = () => {
  const [provider] = useState<AIProvider>(new LocalTemplateProvider())
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState<string>('')

  const run = async () => {
    const res = await provider.generateCode({ language: 'FTC-Java', prompt })
    setResult(res.content)
  }

  return (
    <div>
      <h2>AI Code Assistant (modo local)</h2>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escribe tu instrucción..." />
      <br />
      <button onClick={run}>Generar</button>
      <h3>Resultado</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    </div>
  )
}
