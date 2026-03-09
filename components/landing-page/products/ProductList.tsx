import StaticProxyCard from "./StaticProxyCard";
import ServiceCard from "./service-card/ServiceCard";

export type TabType = 'static' | 'rotating_proxy' | 'rotating_key';

interface ProductListProps {
    activeTab: TabType;
}

export default function ProductList({ activeTab }: ProductListProps) {

    const tinhData = [
        { id: 1, name: "FPT", logo: "/imgs/partners/fpt.png", price: "180.000" },
        { id: 2, name: "Viettel", logo: "/imgs/partners/viettel.png", price: "180.000" },
        { id: 3, name: "VNPT", logo: "/imgs/partners/vnpt.png", price: "180.000" },
    ];


    const xoayData = [
        { id: 1, title: "1 NGÀY", price: "3.000", unit: "VNĐ/ngày" },
        { id: 2, title: "1 TUẦN", price: "22.000", unit: "VNĐ/tuần" },
        { id: 3, title: "1 THÁNG", price: "90.000", unit: "VNĐ/tháng" },
    ];


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