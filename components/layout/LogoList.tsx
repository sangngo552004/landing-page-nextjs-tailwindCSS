'use client'; // Quan trọng: Vì có dùng hàm xử lý sự kiện click

import Image from 'next/image';
import Link from 'next/link';

const FloatingSidebar = () => {
    const menuItems = [
        { id: 1, icon: '/logos/phone.png', alt: 'Gọi điện', href: 'tel:0123456789', color: 'bg-green-500' },
        { id: 2, icon: '/logos/facebook.png', alt: 'Facebook', href: 'https://facebook.com', color: 'bg-blue-600' },
        { id: 3, icon: '/logos/telegram.svg', alt: 'Telegram', href: 'https://t.me/username', color: 'bg-sky-500' },
        { id: 4, icon: '/logos/arrow-up.svg', alt: 'Lên đầu trang', href: '#', color: 'bg-gradient-to-b from-blue-400 to-indigo-600', isScroll: true },
    ];

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed right-5 bottom-10 z-50 flex flex-col gap-4 p-2 border border-blue-100 rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl">
            {menuItems.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    onClick={item.isScroll ? scrollToTop : undefined}
                    aria-label={item.alt}
                    className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${item.color} shadow-lg`}
                >
                    {/* Hiệu ứng sóng (Pulse) - Chỉ chạy khi không hover */}
                    <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-40 group-hover:hidden" />

                    <div className="relative z-10 w-6 h-6">
                        <Image
                            src={item.icon}
                            alt={item.alt}
                            fill
                            // Chỉ dùng filter nếu bạn chắc chắn muốn tất cả icon biến thành màu trắng
                            className="object-contain brightness-0 invert"
                        />
                    </div>

                    {/* Tooltip nhỏ khi hover (Tùy chọn) */}
                    <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap shadow-md">
                        {item.alt}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default FloatingSidebar;