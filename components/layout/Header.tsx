"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-white border-b">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/imgs/header/logo.svg"
                        alt="Logo"
                        width={216}
                        height={56}
                        className="w-32 md:w-40 h-auto"
                    />
                </Link>

                {/* Desktop buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="outline">
                        Đăng ký
                    </Button>

                    <Button variant="primary">
                        Đăng nhập
                    </Button>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} className="text-gray-800"/> : <Menu size={28} className="text-gray-800"/>}
                </button>

            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3">
                    <Button variant="outline">
                        Đăng ký tài khoản
                    </Button>

                    <Button variant="primary">
                        Đăng nhập
                    </Button>
                </div>
            )}
        </header>
    )
}