import { AIProvider, AIRequest, AISuggestion } from './AIProvider'

export class LocalTemplateProvider implements AIProvider {
  name = 'local-templates'

  async explainCode(filePath: string, content: string): Promise<AISuggestion> {
    const lines = content.split(/\r?\n/)
    const lineByLine = lines.map((l, i) => ({ line: i + 1, explanation: this.simpleExplain(l) }))
    return {
      title: `Explicación de ${filePath}`,
      content: 'Explicación generada localmente por reglas simples.',
      lineByLine,
      assumptions: ['No se ejecutó compilación. Explicación basada en patrones heurísticos.'],
      dependencies: [],
    }
  }

  async generateCode(req: AIRequest): Promise<AISuggestion> {
    if (req.language === 'FTC-Java') {
      const code = `// TeleOp FTC básico de ejemplo\nimport com.qualcomm.robotcore.eventloop.opmode.TeleOp;\n@TeleOp(name=\"TeleOp ejemplo\")\npublic class TeleOpEjemplo extends com.qualcomm.robotcore.eventloop.opmode.LinearOpMode {\n  @Override public void runOpMode() throws InterruptedException {\n    // TODO: inicializar hardware\n  }\n}`
      return {
        title: 'Plantilla TeleOp FTC (ejemplo)',
        content: code,
        assumptions: ['Plantilla mínima. Requiere SDK FTC y hardware map real.'],
        dependencies: ['FTC SDK (Gradle)'],
      }
    }
    return {
      title: 'Generación no soportada en modo local',
      content: 'Este modo solo tiene plantillas básicas.',
      assumptions: [],
      dependencies: [],
    }
  }

  async suggestChanges(original: { path: string; content: string }, patchReq: string): Promise<AISuggestion> {
    const newContent = original.content + '\n// Sugerencia: revisar inicialización del motor shooter'
    return {
      title: 'Sugerencia heurística',
      content: newContent,
      assumptions: ['Cambio heurístico, verificar manualmente'],
      dependencies: [],
    }
  }

  private simpleExplain(line: string): string {
    if (/motor/i.test(line)) return 'Línea relacionada con motor (heurística)'
    if (/import /.test(line)) return 'Declaración de import'
    if (/class /.test(line)) return 'Declaración de clase'
    return 'No se detecta un patrón conocido en esta línea'
  }
}
