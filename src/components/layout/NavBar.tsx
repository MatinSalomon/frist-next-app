import Link from "next/link";


const NavBar = () => {
    return (
        <header className="w-full">
          <nav className="w-full bg-blue-500 text-white p-2 mb-2">
            <div className="px-4 py-1">
              <Link href="/explore">LOGO</Link>
            </div>
          </nav>
        </header>
    )
}

export default NavBar 