import React from 'react';
import Button from "@/components/ui/Button"
import Image from "next/image";

export default function SpeedTab() {
    return (
        <div className="grid md:grid-cols-[580px_1fr] gap-6 items-center">

            <Image
                src="/imgs/services/speed.svg"
                alt="Tốc độ"
                width={700}
                height={274}
                className="object-contain"
            />

            {/* Nội dung Text */}
            <div className="text-left">
                <span className="text-text-product  text-sm font-bold tracking-wider">Tốc độ</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Hiệu suất tối ưu</h3>
                <p className="text-white leading-relaxed mb-4">
                    Tăng tốc các hoạt động trực tuyến của bạn với dịch vụ proxy tốc độ cao.
                </p>
                <p className="text-white leading-relaxed mb-4">
                    Được thiết kế để xử lý dữ liệu nhanh, duyệt web mượt mà, giúp bạn hoàn thành nhiều hơn trong thời gian ngắn hơn.
                </p>
                <Button variant="primary">
                    Bắt đầu ngay
                </Button>
            </div>
        </div>
    );
}