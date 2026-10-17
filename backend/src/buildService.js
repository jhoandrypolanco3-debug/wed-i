const fs = require('fs')

/**
 * Build service simulado: valida la ruta y devuelve mensaje cuando no hay herramientas.
 * En un deployment real, este módulo debe ejecutar en un sandbox (Docker) y usar una lista blanca de comandos.
 */

function performBuild(projectPath, buildType){
  if (!fs.existsSync(projectPath)) return { ok:false, reason: 'project-not-found' }
  // No hay comandos permitidos en este MVP
  return { ok: false, reason: 'no-tools', stderr: 'Compilación no disponible en este entorno. Instala Gradle/GradleRIO localmente.' }
}

module.exports = { performBuild }
