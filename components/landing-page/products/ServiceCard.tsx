import Image from "next/image";

interface ServiceItem {
    title: string;
    price: string | number;
    unit: string;
}

// 2. Định nghĩa kiểu cho các dòng thông số (specs)
interface SpecLine {
    label: string;
    value?: string;
    color?: string;
    isLogos?: boolean;
    highlight?: boolean;
}

// 3. Props của Component
interface ServiceCardProps {
    item: ServiceItem;
    type: "key" | "proxy"; // Rõ ràng hơn là string chung chung
}

export default function ServiceCard({ item, type } : ServiceCardProps) {
    // Cấu hình đặc điểm dựa trên loại (Proxy hoặc Key)
    const isKey = type === "key";

    const specs = [
        { label: "Kiểu mạng:", value: "Cáp quang", color: "text-red-500" },
        { label: "IPv4 sạch-Unlimited Bandwidth" },
        { label: "Nhà mạng:", isLogos: true },
        {
            label: "Thời gian đổi IP tối đa",
            value: isKey ? "60 giây / lần" : "240 giây / lần",
            highlight: true
        },
        { label: isKey ? "Giữ IP tối đa 30 phút" : "Giữ IP/ Xoay IP" },
        { label: "Vị trí:", value: "Ngẫu nhiên", color: "text-blue-600" },
        { label: "HTTP" },
        { label: "Kết nối qua username/password" },
    ];

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-50 flex flex-col relative transition-all duration-300 hover:shadow-2xl">
            {/* Icon & Title */}
            <div className="text-center mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                        src="/imgs/products/icon.svg"
                        alt="..."
                        width={44}
                        height={44}
                        className="object-contain"
                    />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm tracking-widest uppercase">
                    {item.title}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-orange-500">{item.price}</span>
                    <span className="text-gray-500 text-xs font-bold uppercase">{item.unit}</span>
                </div>
            </div>

            {/* Checklist Specs */}
            <div className="space-y-3 mb-8 flex-1">
                {specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px]">
                        <Image
                            src="/imgs/products/checkIcon.svg"
                            alt="Logo"
                            width={26}
                            height={26}
                        />
                        <div className="text-gray-700 font-medium leading-tight">
                            {spec.label} {spec.value && <span className={spec.color || "text-red-500"}>{spec.value}</span>}
                            {spec.isLogos && (
                                <span className="inline-flex gap-2 ml-2 grayscale opacity-80">
                   {/* Giả lập logo nhỏ */}
                                    <span className="text-[10px] font-bold text-red-600">viettel</span>
                   <span className="text-[10px] font-bold text-blue-600">fpt</span>
                </span>
                            )}
                        </div>
                    </div>
                ))}
                <div className="flex items-start gap-2.5 text-[13px]">
                    <Image
                        src="/imgs/products/checkIcon.svg"
                        alt="Logo"
                        width={26}
                        height={26}
                    />
                    <div className="text-gray-700 font-medium leading-tight"> Ngày sử dụng</div>
                    <input
                        type="number"
                        placeholder="Ngày sử dụng"
                        className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-xs outline-none focus:border-orange-400 transition-all"
                    />
                </div>
                <div className="flex items-start gap-2.5 text-[13px]">
                    <Image
                        src="/imgs/products/checkIcon.svg"
                        alt="Logo"
                        width={26}
                        height={26}
                    />
                    <div className="text-gray-700 font-medium leading-tight"> Số lượng key</div>
                    <input
                        type="number"
                        placeholder="Số lượng key"
                        className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-xs outline-none focus:border-orange-400 transition-all"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-dashed border-gray-200">
                <div className="flex justify-between items-center mb-5">
                    <span className="text-sm font-bold text-gray-900">Thành tiền:</span>
                    <span className="text-xl font-black text-orange-500">180.000đ</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-200 active:scale-95">
                    Mua hàng
                </button>
            </div>
        </div>
    );
}