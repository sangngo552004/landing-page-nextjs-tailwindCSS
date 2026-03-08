"use client";
import { TabType } from "./ProductList";

interface Category {
    id: TabType;
    label: string;
}

interface CategoryTabsProps {
    categories: Category[];
    activeTab: TabType;
    onTabChange: (id: TabType) => void;
}

export default function CategoryTabs({ categories, activeTab, onTabChange }: CategoryTabsProps) {
    return (
        <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex bg-white p-1.5 md:p-2 rounded-full shadow-sm border border-gray-100 overflow-x-auto no-scrollbar">
                {categories.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
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
    );
}