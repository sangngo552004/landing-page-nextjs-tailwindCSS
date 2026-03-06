import Image from "next/image";

interface TestimonialItem {
    id?: number;
    name: string;
    role: string;
    content: string;
    avatar?: string;
    rating?: number;
}

interface TestimonialCardProps {
    item: TestimonialItem;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-50">
            {/* Header: Avatar & Thông tin */}
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                    {item.avatar ? (
                        <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <span className="text-xl">👤</span>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 ">{item.name}</h4>
                    <p className="text-xs text-gray-500  mt-1">{item.role}</p>
                </div>
            </div>

            {/* Đánh giá sao động */}
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={i < (item.rating || 5) ? "text-[#FF8A00]" : "text-gray-200"}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Nội dung đánh giá */}
            <div className="relative mt-2">
                <span className="text-7xl text-gray-100 absolute -top-8 -left-4 font-serif select-none pointer-events-none">“</span>
                <p className="text-black leading-relaxed relative z-10 text-justify">
                    {item.content}
                </p>
            </div>
        </div>
    );
}