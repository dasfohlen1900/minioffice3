import { supabase } from './supabase.js';

export async function loginWithMagicLink(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  const { data, error } = await supabase.auth.signInWithOtp({ email });

  if (error) alert(error.message);
  else alert('Check your email for the Aeropus login link!');
}

export async function logout() {
  await supabase.auth.signOut();
  window.location.href = '/login.html';
}
