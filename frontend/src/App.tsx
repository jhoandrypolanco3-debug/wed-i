import React from 'react'
import { AIAssistant } from './components/AIAssistant'

export default function App(){
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', padding: 20}}>
      <h1>LaunchPilot AI — MVP (modo local)</h1>
      <p>Interfaz mínima: AI Assistant local, editor simple y panel de análisis.</p>
      <AIAssistant />
    </div>
  )
}
