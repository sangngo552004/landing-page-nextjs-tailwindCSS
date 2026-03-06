import React from 'react';
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function UptimeTab() {
    return (
        <div className="grid md:grid-cols-[580px_1fr] gap-6 items-center">

            <Image
                src="/imgs/services/activeTime.svg"
                alt="Thời gian hoạt động"
                width={700}
                height={274}
                className="object-contain"
            />

            <div className="text-left">
                <span className="text-text-product text-xs font-bold tracking-wider">Thời gian hoạt động</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Kết nối đáng tin cậy</h3>
                <p className="text-white leading-relaxed mb-4">
                    Hãy tin tưởng vào dịch vụ ổn định và liên tục của chúng tôi. Với tỷ lệ hoạt động nhất quán, công việc trực tuyến của bạn sẽ:
                </p>
                <ul className="space-y-2 text-white mb-4">
                    <li className="flex items-center">
                        <span className="mr-2 text-cyan-400">✔</span> Diễn ra suôn sẻ, không bị gián đoạn.
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 text-cyan-400">✔</span> Đảm bảo năng suất duy trì 24/7.
                    </li>
                </ul>
                <Button variant="primary">
                    Bắt đầu ngay
                </Button>
            </div>
        </div>
    );
}