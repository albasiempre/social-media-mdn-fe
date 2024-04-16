import { useAuth } from "@/context/auth";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-indigo-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">
          <Link href="/" className="text-2xl font-medium">
            Healsyn
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <Link
                  href={`/profile/${user.id}`}
                  className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                  Profil
                </Link>
                <button
                  onClick={logout}
                  className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                  logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                  login
                </Link>
                <Link
                  href="/signup"
                  className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                >
                  signup
                </Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
