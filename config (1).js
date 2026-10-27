// Configuración de la muestra de proyectos.
// Mientras "firebase.projectId" esté vacío, la página funciona en modo de prueba (datos solo en este navegador).
// Para compartir los proyectos entre todos, completá los datos de Firebase (ver README, paso 2).
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyA82z55dPKP9YslZGfC0DcCuaIF0fzxaSo",
    authDomain: "repositorio-2-e6082.firebaseapp.com",
    projectId: "repositorio-2-e6082",
    storageBucket: "repositorio-2-e6082.firebasestorage.app",
    messagingSenderId: "1095114679282",
    appId: "1:1095114679282:web:82b28680dfc8c350af416b"
  },
  // Clave del "modo docente": permite editar/borrar cualquier proyecto y cambiar los colores. ¡Cambiala!
  adminPin: "cambiame",
  // Colores iniciales (después se pueden cambiar desde la página en modo docente).
  colors: { c1: "#d4a017", c2: "#6f4e37" },
  // Sectores: clave interna -> nombre visible
  courses: { "1ra": "5to 1ra", "2da": "5to 2da" }
};
