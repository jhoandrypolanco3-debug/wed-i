// Analizador FTC: regla de ejemplo para detectar hardwareMap.get

exports.checkHardwareMapConsistency = function(filePath, content){
  const findings = []
  const re = /hardwareMap\.get\([^)]*\)/g
  let m
  while ((m = re.exec(content)) !== null) {
    const before = content.substring(0, m.index)
    const line = before.split('\n').length
    findings.push({
      id: 'FTC-HW-001',
      severity: 'warning',
      file: filePath,
      line,
      evidence: m[0],
      explanation: 'Se detecta acceso a hardwareMap. Verifica que el nombre coincida con la configuración real del robot.',
      suggestion: 'Comprueba los nombres en la app del Control Hub / configuración del robot y sincronízalos con este código.'
    })
  }
  return findings
}
