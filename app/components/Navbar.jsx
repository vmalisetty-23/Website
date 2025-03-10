import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pt-4 pb-4 font-mono">
      <div className="container mx-auto flex justify-center">
        <ul className="flex text-lg">
          <li><Link href="/" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Home</Link></li>
          <li><Link href="/projects" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Projects</Link></li>
          <li><Link href="/contact" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
