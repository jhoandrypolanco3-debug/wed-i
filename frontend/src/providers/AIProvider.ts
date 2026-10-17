// Interfaz intercambiable para proveedores de IA (modo local)
export type AIRequest = {
  language: 'FTC-Java' | 'FRC-Java' | 'FRC-C++' | 'Generic'
  prompt: string
  files?: { path: string; content: string }[]
}

export type AISuggestion = {
  title: string
  content: string
  lineByLine?: { line: number; explanation: string }[]
  assumptions?: string[]
  dependencies?: string[]
}

export interface AIProvider {
  name: string
  explainCode(filePath: string, content: string): Promise<AISuggestion>
  generateCode(req: AIRequest): Promise<AISuggestion>
  suggestChanges(original: { path: string; content: string }, patchReq: string): Promise<AISuggestion>
}
