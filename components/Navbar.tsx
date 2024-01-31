import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Props",
      path: "/1-props-example",
    },
    {
      title: "Children Props",
      path: "/2-children-props-example",
    },
    {
      title: "event",
      path: "/3-event-example",
    },
    {
      title: "useState",
      path: "/4-usestate-example",
    },
    {
      title: "use Context",
      path: "/5-context-example",
    },
    {
      title: "useRef",
      path: "/6-useref-example",
    },
    {
      title: "useeffect",
      path: "/7-useeffect-example",
    },
  ];
  return (
    <header className="text-gray-600 body-font bg-slate-200">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex text-xl font-medium items-center text-gray-900"
        >
          Next-TS{" "}
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 capitalize">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
