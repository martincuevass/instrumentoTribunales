import users from './users.json';

// La función ahora devuelve el objeto del usuario o null
export function login(email, password) {
  // Busca al usuario por su email
  const user = users.find(u => u.email === email);

  // Verifica si el usuario existe y la contraseña es correcta
  if (user && user.password === password) {
    // Si es correcto, devuelve el objeto del usuario SIN la contraseña
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  // Si algo falla, devuelve null
  return null;
}