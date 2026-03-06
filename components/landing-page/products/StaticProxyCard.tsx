import Image from "next/image";
// Giả định Button của bạn có prop className hoặc dùng mặc định
import Button from "@/components/ui/Button";

interface ProxyItem {
    name: string;
    logo: string;
    price: string | number;
}

interface StaticProxyCardProps {
    item: ProxyItem;
}

export default function StaticProxyCard({ item }: StaticProxyCardProps) {
    const fields = [
        { label: "Địa điểm", value: "Random", type: "select" },
        { label: "Ngày sử dụng", value: "1", unit: "Ngày" },
        { label: "Số lượng", value: "1" },
        { label: "Giao thức", value: "HTTP", type: "select" },
        { label: "Đầu IP", value: "Random" },
        { label: "Tài khoản", value: "Random" },
        { label: "Mật khẩu", value: "Random" },
    ];

    return (
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-[400px] border border-gray-100">
            {/* Logo Section */}
            <div className="flex justify-center pb-8 mb-8 border-b border-gray-100">
                <div className="relative h-12 w-32">
                    <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-5 border-b-2 border-gray-100 pb-4">
                {fields.map((f, i) => (
                    <div key={i} className="relative">
                        {/* Label đè lên border */}
                        <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[13px] font-medium text-gray-400 z-10">
                            {f.label}
                        </label>

                        <div className="relative">
                            <input
                                readOnly
                                defaultValue={f.value}
                                className="w-full rounded-xl px-4 py-3.5 text-base font-semibold border border-gray-200 text-gray-800 focus:border-orange-500 outline-none transition-all"
                            />

                            {/* Unit (Ngày) */}
                            {f.unit && (
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                                    {f.unit}
                                </span>
                            )}

                            {/* Icon mũi tên cho Select */}
                            {f.type === "select" && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="mt-4">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-black">Thành tiền:</span>
                    <span className="text-2xl font-bold text-orange-500">
                        {item.price.toLocaleString('vi-VN')}đ
                    </span>
                </div>

                <Button variant="primary" fullWidth={true}>
                    Mua hàng
                </Button>
            </div>
        </div>
    );
}