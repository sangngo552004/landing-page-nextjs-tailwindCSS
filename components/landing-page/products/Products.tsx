"use client";
import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import ProductList, { TabType } from "./ProductList";
import CategoryTabs from "./CategoryTabs"; // Import component vừa tách

const CATEGORIES: { id: TabType; label: string }[] = [
    { id: "static", label: "Proxy tĩnh" },
    { id: "rotating_proxy", label: "Proxy xoay" },
    { id: "rotating_key", label: "Key xoay" },
];

export default function Products() {
    const [activeTab, setActiveTab] = useState<TabType>("static");

    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <SectionHeading
                    titleGradient="Sản phẩm"
                    titleMain="của chúng tôi"
                    mainColorClass="text-black"
                    description="Bạn còn chần chừ gì nữa mà không cùng hợp tác với chúng tôi..."
                />

                {/* Sử dụng component đã tách */}
                <CategoryTabs
                    categories={CATEGORIES}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ProductList activeTab={activeTab} />
                </div>
            </div>
        </section>
    );
}