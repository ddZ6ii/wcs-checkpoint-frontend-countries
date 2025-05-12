import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-accent-500 text-white p-4 grid gap-2 justify-items-center">
      <h1 className="text-2xl font-bold">Checkpoint : frontend</h1>
      <Link to="/">Countries</Link>
    </header>
  )
}
