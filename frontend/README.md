# Instructions para ejecutar la base del MVP (mvp/initial-app)

Sigue estos pasos en tu máquina (están pensados para un entorno sin costes):

Requisitos mínimos
- Node.js 18+ (https://nodejs.org)
- Git

Pasos
1. Clona el repositorio:
   git clone https://github.com/jhoandrypolanco3-debug/wed-i.git
2. Mueve al repo y la rama del MVP:
   cd wed-i
   git fetch origin
   git checkout mvp/initial-app
3. Instala dependencias (en el root, usa npm que soporta workspaces):
   npm install
4. Ejecuta el frontend (Vite):
   npm run start:frontend
   - Abre http://localhost:5173 en tu navegador
5. Ejecuta el backend:
   npm run start:backend
   - Backend por defecto en http://localhost:4000

Qué hay implementado ahora (MVP básico)
- Frontend: React + Vite con un componente AIAssistant que usa el proveedor local (LocalTemplateProvider) para generar plantillas y explicaciones simples.
- Backend: servicio Express mínimo con endpoint /api/health.
- Analizador FTC: regla de ejemplo (hardwareMap.get) y test Jest simple.

Limitaciones importantes
- No hay integración con modelos de IA externos en este branch. El proveedor es local, basado en plantillas y heurísticas.
- No se ejecutan compilaciones reales en el backend. El build service devuelve un mensaje que indica que la compilación no está disponible en este entorno.
- Trata este código como ejemplo y no lo subas a servicios externos con credenciales o secretos.

Siguientes pasos sugeridos
- Abrir el frontend y probar instrucciones en el asistente.
- Mejorar reglas del analizador y añadir más tests.
- Si quieres soporte de compilación, instalar Gradle/GradleRIO y configurar un sandbox Docker (opcional).
