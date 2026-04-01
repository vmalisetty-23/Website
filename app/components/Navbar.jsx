import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black py-4 font-mono">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold text-black dark:text-white">
          Vasishta&apos;s Portfolio
        </Link>
        <ul className="flex text-lg">
          <li><Link href="/" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Home</Link></li>
          <li><Link href="/projects" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Projects</Link></li>
          <li><Link href="/contact" className="text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white p-4 rounded-xl">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
