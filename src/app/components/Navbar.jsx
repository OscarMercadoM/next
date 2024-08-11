import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-slate-700 flex flex-row p-5 justify-between">
      <div>
        <Link href="/">Inicio</Link>
      </div>
      <ul>
        <li className="flex flex-row gap-x-3">
          <Link href="/new">Nuevo</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
