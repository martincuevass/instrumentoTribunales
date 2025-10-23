import { useState } from 'react';

/**
 * Función auxiliar para leer el usuario del localStorage de forma síncrona.
 */
function getUserFromStorage() {
  try {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error al parsear el usuario del localStorage:", error);
    return null;
  }
}

/**
 * Hook personalizado para gestionar la autenticación y roles del usuario.
 */
export const useAuth = () => {
  // Inicializamos el estado 'user' leyendo directamente del localStorage.
  const [user, setUser] = useState(() => getUserFromStorage());

  // Función de logout centralizada
  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    // Nota: La redirección (con 'navigate') debe hacerse en el 
    // componente que llame a logout (ej. la Navbar).
  };

  return {
    // 1. El objeto de usuario completo
    user,
    
    // 2. Buleanos de roles listos para usar
    isAdmin: user?.role === "administrador del sistema",
    isManager: user?.role === "gerente",
    isInterviewer: user?.role === "entrevistador",

    // 3. Función de logout
    logout,
  };
};