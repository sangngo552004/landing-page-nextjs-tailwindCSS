"use client";
import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import ProductList, { TabType } from "./ProductList"; // Import TabType từ file ProductList

// Định nghĩa danh sách Tab với ID tiếng Anh và Label tiếng Việt
const CATEGORIES: { id: TabType; label: string }[] = [
    { id: "static", label: "Proxy tĩnh" },
    { id: "rotating_proxy", label: "Proxy xoay" },
    { id: "rotating_key", label: "Key xoay" },
];

export default function Products() {
    // Khởi tạo state với kiểu TabType để đồng nhất
    const [activeTab, setActiveTab] = useState<TabType>("static");

    return (
        <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-2 text-center">
                <SectionHeading
                    titleGradient="Sản phẩm"
                    titleMain="của chúng tôi"
                    mainColorClass="text-black"
                    description="Bạn còn chần chừ gì nữa mà không cùng hợp tác với chúng tôi, một trong những nhà cung cấp proxy uy tín và giá rẻ."
                />

                {/* Tab Switcher */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="inline-flex bg-white p-1.5 md:p-2 rounded-full shadow-sm border border-gray-100 overflow-x-auto">

                        {CATEGORIES.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 md:px-6 lg:px-10 py-2 md:py-3 rounded-full text-sm md:text-base font-extrabold whitespace-nowrap transition-all duration-500 ${
                                    activeTab === tab.id
                                        ? "bg-linear-to-r from-[#6A00FF] to-[#009EAC] text-white shadow-lg shadow-purple-200 scale-105"
                                        : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}

                    </div>
                </div>

                {/* Danh sách */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Bây giờ activeTab truyền vào sẽ không còn báo đỏ vì đã cùng kiểu TabType */}
                    <ProductList activeTab={activeTab} />
                </div>
            </div>
        </section>
    );
}