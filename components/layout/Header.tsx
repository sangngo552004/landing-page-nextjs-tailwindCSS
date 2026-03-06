import Link from "next/link"
import Button from "@/components/ui/Button"
import Image from "next/image";

export default function Header() {
    return (
        <header className="h-20 w-full border-b bg-white">
            <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">

                <Image
                    src="/imgs/header/logo.svg"
                    alt="Logo"
                    width={216}
                    height={56}
                />

                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        Đăng ký tài khoản
                    </Button>

                    <Button variant="primary">
                        Đăng nhập
                    </Button>
                </div>

            </div>
        </header>
    )
}