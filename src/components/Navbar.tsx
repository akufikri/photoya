"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  // Tampilkan icon "with flash" otomatis setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(true), 1000); // delay 2 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-20 bg-fuchsia-50">
      <div className="flex items-center justify-between w-full h-full max-w-[1080px] mx-auto px-4">
        {/* Logo + Desktop Menu */}
        <div className="flex items-center gap-6">
          {/* Kamera Logo */}
          <Link href={"/"} className="relative w-10 h-10 block flex-shrink-0">
            <AnimatePresence>
              {!showFlash && (
                <motion.div
                  key="camera"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }} // tampil lebih lama
                  className="absolute top-0 left-0 w-10 h-10"
                >
                  <Image
                    src={"/assets/icons/ic-camera.svg"}
                    width={100}
                    height={100}
                    alt="Logo"
                    className="w-10 h-10"
                  />
                </motion.div>
              )}
              {showFlash && (
                <motion.div
                  key="camera-flash"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-10 h-10 -rotate-3"
                >
                  <Image
                    src={"/assets/icons/ic-camera-with-flash.svg"}
                    width={100}
                    height={100}
                    alt="Logo with flash"
                    className="w-10 h-10"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-6 mt-1 font-bold h-full">
            <li className="flex items-center text-fuchsia-400 transition-all">
              <Link href={"/"}>Beranda</Link>
            </li>
            <li className="flex items-center text-fuchsia-400 transition-all">
              <Link href={"/"}>Photo</Link>
            </li>
            <li className="flex items-center text-fuchsia-400 transition-all">
              <Link href={"/"}>Template</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Button / Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            size={"lg"}
            className="hidden sm:inline-block bg-gradient-to-r from-primary to-fuchsia-300 shadow font-semibold rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Masuk
          </Button>

          {/* Hamburger Icon */}
          <button
            className="sm:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-fuchsia-400 cursor-pointer" />
            ) : (
              <Menu size={24} className="text-fuchsia-400 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu dengan Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-fuchsia-50 shadow-md rounded-lg px-4 py-3 z-50 relative"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col gap-3 font-bold text-center">
              <li className="text-fuchsia-400">
                <Link href={"/"} onClick={() => setIsOpen(false)}>
                  Beranda
                </Link>
              </li>
              <li className="text-fuchsia-400">
                <Link href={"/"} onClick={() => setIsOpen(false)}>
                  Photo
                </Link>
              </li>
              <li className="text-fuchsia-400">
                <Link href={"/"} onClick={() => setIsOpen(false)}>
                  Template
                </Link>
              </li>
              <li>
                <Button
                  size={"lg"}
                  className="w-full bg-gradient-to-r from-primary to-fuchsia-300 shadow font-semibold rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  Masuk
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
