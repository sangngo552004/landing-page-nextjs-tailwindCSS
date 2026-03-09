'use client';

import React, { useState } from 'react';
import SpeedTab from '@/components/landing-page/services/SpeedTab';
import UptimeTab from '@/components/landing-page/services/UptimeTab';
import CoverageTab from '@/components/landing-page/services/CoverageTab';
import SectionHeading from "@/components/common/SectionHeading";
import ServiceTabs, { TabType } from './ServiceTabs'; // Import component mới

import { motion } from 'framer-motion';

export default function Services() {
    const [activeTab, setActiveTab] = useState<TabType>('speed');

    const tabs: { id: TabType; label: string }[] = [
        { id: 'speed', label: 'Tốc độ' },
        { id: 'uptime', label: 'Thời gian hoạt động' },
        { id: 'coverage', label: 'Phạm vi phủ sóng' },
    ];

    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">

                <SectionHeading
                    titleGradient="Proxy cao cấp"
                    titleMain="Trải nghiệm dịch vụ"
                    mainColorClass="text-black"
                    isReverse={true}
                    description="Tối ưu hóa hoạt động trực tuyến của bạn với tốc độ vượt trội, độ tin cậy vững chắc và phạm vi toàn cầu."
                />


                <ServiceTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />


                <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-brand-start to-brand-end p-8 md:p-12 text-white min-h-[450px] flex items-center shadow-xl">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        {activeTab === 'speed' && <SpeedTab />}
                        {activeTab === 'uptime' && <UptimeTab />}
                        {activeTab === 'coverage' && <CoverageTab />}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}