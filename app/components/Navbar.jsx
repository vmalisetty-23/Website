import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pt-4 pb-4 font-mono">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
