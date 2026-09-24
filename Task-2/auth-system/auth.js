// =========================================================
// AUTH UTILS - SHA-256 hashing + localStorage helpers
// =========================================================

// SHA-256 hash using Web Crypto API (secure, no external libs)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Get all registered users
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

// Save users array
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Check if user is logged in
function isLoggedIn() {
  return !!localStorage.getItem("currentUser");
}

// Get current logged-in username
function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

// Set session
function setSession(username) {
  localStorage.setItem("currentUser", username);
}

// Clear session (logout)
function clearSession() {
  localStorage.removeItem("currentUser");
}

// Password strength check: min 8 chars + at least 1 number
function isValidPassword(password) {
  return password.length >= 8 && /\d/.test(password);
}

// Show message helper
function showMessage(elementId, text, type = "error") {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = text;
  el.className = `message ${type}`;
  el.style.display = "block";
}

// Hide message
function hideMessage(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.style.display = "none";
    el.textContent = "";
  }
}