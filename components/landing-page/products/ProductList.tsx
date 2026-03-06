import StaticProxyCard from "./StaticProxyCard";
import ServiceCard from "./ServiceCard";

// 1. Định nghĩa các loại Tab bằng tiếng Anh
// static: Proxy tĩnh, rotating_proxy: Proxy xoay, rotating_key: Key xoay
export type TabType = 'static' | 'rotating_proxy' | 'rotating_key';

// 2. Định nghĩa Interface cho Props
interface ProductListProps {
    activeTab: TabType;
}

export default function ProductList({ activeTab }: ProductListProps) {
    // Data cho Proxy tĩnh
    const tinhData = [
        { id: 1, name: "FPT", logo: "/partners/fpt.png", price: "180.000" },
        { id: 2, name: "Viettel", logo: "/partners/viettel.png", price: "180.000" },
        { id: 3, name: "VNPT", logo: "/partners/vnpt.png", price: "180.000" },
    ];

    // Data chung cho Xoay (Proxy & Key)
    const xoayData = [
        { id: 1, title: "1 NGÀY", price: "3.000", unit: "VNĐ/ngày" },
        { id: 2, title: "1 TUẦN", price: "22.000", unit: "VNĐ/tuần" },
        { id: 3, title: "1 THÁNG", price: "90.000", unit: "VNĐ/tháng" },
    ];

    // 3. Sử dụng switch-case hoặc if dựa trên kiểu dữ liệu mới
    if (activeTab === "static") {
        return (
            <>
                {tinhData.map(item => <StaticProxyCard key={item.id} item={item} />)}
            </>
        );
    }

    if (activeTab === "rotating_proxy") {
        return (
            <>
                {xoayData.map(item => (
                    <ServiceCard
                        key={item.id}
                        item={{...item, title: `PROXY XOAY ${item.title}`}}
                        type="proxy"
                    />
                ))}
            </>
        );
    }

    return (
        <>
            {xoayData.map(item => (
                <ServiceCard
                    key={item.id}
                    item={{...item, title: `KEY XOAY ${item.title}`}}
                    type="key"
                />
            ))}
        </>
    );
}