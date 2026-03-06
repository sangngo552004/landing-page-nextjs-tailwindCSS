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
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <SectionHeading
                    titleGradient="Sản phẩm"
                    titleMain="của chúng tôi"
                    mainColorClass="text-black"
                    description="Bạn còn chần chừ gì nữa mà không cùng hợp tác với chúng tôi, một trong những nhà cung cấp proxy uy tín và giá rẻ."
                />

                {/* Tab Switcher */}
                <div className="inline-flex bg-white p-2 rounded-full shadow-sm border border-gray-100 mt-12 mb-16">
                    {CATEGORIES.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)} // Set giá trị theo ID (tiếng Anh)
                            className={`px-10 py-3 rounded-full text-sm font-extrabold transition-all duration-500 ${
                                activeTab === tab.id
                                    ? "bg-linear-to-r from-[#6A00FF] to-[#009EAC] text-white shadow-lg shadow-purple-200 scale-105"
                                    : "text-gray-400 hover:text-gray-600"
                            }`}
                        >
                            {tab.label} {/* Hiển thị tên tiếng Việt */}
                        </button>
                    ))}
                </div>

                {/* Danh sách */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Bây giờ activeTab truyền vào sẽ không còn báo đỏ vì đã cùng kiểu TabType */}
                    <ProductList activeTab={activeTab} />
                </div>
            </div>
        </section>
    );
}