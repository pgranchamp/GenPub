// Page de login avec lien magique Supabase
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage("Erreur : " + error.message);
    } else {
      setMessage("Vérifie ta boîte mail pour te connecter.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Ton email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Envoyer lien magique</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
