import Link from "next/link";

function Header() {
  
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
    { href: "/addBlog", label: "Add Blog" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-20">
        <h1 className="text-2xl font-bold md:mr-10">Blog World</h1>
        <nav className="space-x-10">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg text-gray-800 hover:text-blue-400">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
