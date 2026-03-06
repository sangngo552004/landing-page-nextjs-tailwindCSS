import Image from "next/image";

interface ProxyItem {
    name: string;
    logo: string;
    price: string | number;
}

// Định nghĩa kiểu dữ liệu cho các trường trong form
interface FormField {
    label: string;
    value: string;
    unit?: string;
    type?: "select" | "text"; // Bạn có thể mở rộng thêm các type khác
    disabled?: boolean;
}

interface StaticProxyCardProps {
    item: ProxyItem;
}
export default function StaticProxyCard({ item } : StaticProxyCardProps) {
    const fields = [
        { label: "Địa điểm", value: "Random", type: "select" },
        { label: "Ngày sử dụng", value: "1", unit: "Ngày" },
        { label: "Số lượng", value: "1" },
        { label: "Giao thức", value: "HTTP", type: "select" },
        { label: "Đầu IP", value: "Random", disabled: true },
        { label: "Tài khoản", value: "Random", disabled: true },
        { label: "Mật khẩu", value: "Random", disabled: true },
    ];

    return (
        <div className="bg-white rounded-3xl p-7 shadow-xl border border-gray-50">
            <div className="h-14 relative mb-8 flex justify-center">
                <Image src={item.logo} alt={item.name} width={120} height={50} className="object-contain" />
            </div>

            <div className="space-y-3">
                {fields.map((f, i) => (
                    <div key={i} className="group">
                        <label className="text-[11px] font-bold text-gray-400 ml-1 uppercase">{f.label}</label>
                        <div className="relative mt-1">
                            <input
                                disabled={f.disabled}
                                defaultValue={f.value}
                                className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium border transition-all outline-none
                  ${f.disabled ? 'bg-gray-50 text-gray-300 border-gray-100' : 'bg-white border-gray-200 focus:border-orange-400'}`}
                            />
                            {f.unit && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-bold">{f.unit}</span>}
                            {f.type === "select" && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">▼</span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-5 border-t border-dashed">
                <div className="flex justify-between items-center mb-4 text-sm font-bold">
                    <span className="text-gray-900 uppercase">Thành tiền:</span>
                    <span className="text-xl text-orange-500">{item.price}đ</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-100">
                    Mua hàng
                </button>
            </div>
        </div>
    );
}