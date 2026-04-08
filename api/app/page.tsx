export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Aqua Asset API</h1>
      <p>
        API em <code>/api/contact</code>. O app em <code>web/</code> usa proxy em dev ou <code>VITE_API_URL</code> em
        produção.
      </p>
    </main>
  );
}
