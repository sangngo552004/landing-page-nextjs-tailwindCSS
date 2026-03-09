"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import InputFieldItem from "./InputFieldItem";
import SpecItem from "./SpecItem";
import CarrierLogos from "./CarrierLogos";


interface ServiceItem {
    title: string;
    price: string | number;
    unit: string;
}

interface ServiceCardProps {
    item: ServiceItem;
    type: "key" | "proxy";
}

export default function ServiceCard({ item, type }: ServiceCardProps) {
    const isKey = type === "key";

    const carrierLogos = [
        "/imgs/partners/viettel.png",
        "/imgs/partners/fpt.png",
        "/imgs/partners/vnpt.png",
    ];

    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 flex flex-col relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

            <header className="text-center mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image src="/imgs/products/icon.svg" alt="icon" width={44} height={44} className="object-contain" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm tracking-widest uppercase">{item.title}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-orange-500">{item.price}</span>
                    <span className="text-gray-500 text-xs font-bold uppercase">{item.unit}</span>
                </div>
            </header>

            <div className="space-y-3.5 mb-8 flex-1">

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    Kiểu mạng: <span className="font-medium text-gray-900 ml-1">Cáp quang</span>
                </SpecItem>

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    IPv4 sạch - Unlimited Bandwidth
                </SpecItem>

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    Nhà mạng: <CarrierLogos logoUrls={carrierLogos} />
                </SpecItem>

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    {isKey ? "Thời gian đổi IP tối đa" : "Thời gian đổi IP tối đa"}:
                    <span className="text-orange-600 font-bold ml-1.5">240 giây / lần</span>
                </SpecItem>

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    {isKey ? "Giữ IP tối đa 30 phút" : "Giữ IP / Xoay IP"}
                </SpecItem>

                <SpecItem icon="/imgs/products/checkIcon.svg">
                    Vị trí: <span className="text-[#2563EB] font-bold ml-1.5">Ngẫu nhiên</span>
                </SpecItem>

                <hr className="border-dashed border-gray-100 my-2" />

                <InputFieldItem label="Ngày sử dụng" />
                <InputFieldItem label="Số lượng key" />
            </div>

            <footer className="pt-5 border-t border-dashed border-gray-200">
                <div className="flex justify-between items-center mb-5">
                    <span className="text-sm font-bold text-gray-900">Thành tiền:</span>
                    <span className="text-[22px] font-black text-[#F97316]">180.000đ</span>
                </div>

                <Button
                    variant="primary"
                    fullWidth
                    className="rounded-full text-[17px] py-[12px] font-bold bg-[#F97316] hover:bg-[#EA580C] shadow-none"
                >
                    Mua ngay
                </Button>
            </footer>
        </div>
    );
}