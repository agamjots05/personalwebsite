"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="pt-10">
        <div className=" bg-white rounded-lg navbar relative">
        <div className="navbar-start md:flex hidden">
            <Link href="/" className="btn btn-ghost text-xl">Agamjot Singh</Link>
        </div>
        {/* This code below will be hidden on larger screens, once screen becomes small enough it will be shown */}
        <div className="navbar-center md:hidden absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="btn btn-ghost text-xl">Agamjot Singh</Link>
        </div>

        <div className="navbar-start md:hidden">
            <div className="dropdown">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </div>
            {isOpen && (
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                <li><Link href="/about" onClick={closeDropdown}>About</Link></li>
                <li><Link href="/experience" onClick={closeDropdown}>Experience</Link></li>
                </ul>
            )}
            </div>
        </div>
        <div className="navbar-end hidden md:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            </ul>
        </div>
        </div>
    </div>
  );
}
