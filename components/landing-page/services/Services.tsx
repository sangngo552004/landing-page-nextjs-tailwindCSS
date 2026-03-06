'use client';

import React, { useState } from 'react';
import SpeedTab from '@/components/landing-page/services/SpeedTab';
import UptimeTab from '@/components/landing-page/services/UptimeTab';
import CoverageTab from '@/components/landing-page/services/CoverageTab';
import SectionHeading from "@/components/common/SectionHeading";
// Định nghĩa type cho các tab để tránh lỗi typo
type TabType = 'speed' | 'uptime' | 'coverage';

export default function Services() {
    const [activeTab, setActiveTab] = useState<TabType>('speed');

    const tabs: { id: TabType; label: string }[] = [
        { id: 'speed', label: 'Tốc độ' },
        { id: 'uptime', label: 'Thời gian hoạt động' },
        { id: 'coverage', label: 'Phạm vi phủ sóng' },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">

                <SectionHeading
                    titleGradient="Proxy cao cấp"
                    titleMain="Trải nghiệm dịch vụ"
                    mainColorClass="text-black"
                    isReverse={true}
                    description="Tối ưu hóa hoạt động trực tuyến của bạn với tốc độ vượt trội, độ tin cậy vững chắc và phạm vi toàn cầu."
                />

                {/* Tab Controls */}
                <div className="inline-flex p-1 bg-cyan-50/50 border border-cyan-100 rounded-xl mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-[#A8F0F0] text-[#00334e] shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-cyan-50'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content Container */}
                <div className="relative overflow-hidden rounded-[32px] bg-linear-to-b from-brand-start to-brand-end p-8 md:p-12 text-white min-h-[450px] flex items-center shadow-xl">
                    {activeTab === 'speed' && <SpeedTab />}
                    {activeTab === 'uptime' && <UptimeTab />}
                    {activeTab === 'coverage' && <CoverageTab />}
                </div>
            </div>
        </section>
    );
}