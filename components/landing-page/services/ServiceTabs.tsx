'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type TabType = 'speed' | 'uptime' | 'coverage';

interface Tab {
    id: TabType;
    label: string;
}

interface ServiceTabsProps {
    tabs: Tab[];
    activeTab: TabType;
    onChange: (id: TabType) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ tabs, activeTab, onChange }) => {
    return (
        <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex p-1 bg-white/50 backdrop-blur-sm border border-cyan-100 rounded-xl overflow-x-auto relative">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onChange(tab.id)}
                            className={`relative px-4 md:px-6 lg:px-8 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg whitespace-nowrap transition-colors duration-300 z-10 ${
                                isActive ? "text-[#00334e]" : "text-gray-500 hover:text-gray-900"
                            }`}
                        >
                            {/* Chữ của Tab */}
                            <span className="relative z-20">{tab.label}</span>

                            {/* Lớp nền chạy trượt (Chỉ render khi tab active) */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-[#A8F0F0] rounded-lg shadow-sm z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceTabs;