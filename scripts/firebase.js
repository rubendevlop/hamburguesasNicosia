// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Configuración de Firebase (copiada desde tu consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDIe2myw9wvbwmgx8_XHXE6aaOfYRYD7ZY",
  authDomain: "hamburguesasnicosia.firebaseapp.com",
  projectId: "hamburguesasnicosia",
  storageBucket: "hamburguesasnicosia.appspot.com", // ✅ corregido
  messagingSenderId: "1058666823872",
  appId: "1:1058666823872:web:fb8afae0810f8723cbed25"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y exportar funciones necesarias
export const db = getFirestore(app);
export { collection, addDoc, onSnapshot };
