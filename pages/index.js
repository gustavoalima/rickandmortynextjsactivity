import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bem-vindo ao Rick and Morty App</h1>
      <p>Explore os personagens da série!</p>
      <Link href="/characters">Ir para listagem de personagens</Link>
    </div>
  );
}
