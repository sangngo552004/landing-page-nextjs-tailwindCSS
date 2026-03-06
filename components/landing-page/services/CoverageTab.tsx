import React from 'react';
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function CoverageTab() {
    return (
        <div className="grid md:grid-cols-[320px_1fr] gap-6 items-center">

            {/* Image */}

            <Image
                src="/imgs/services/range.svg"
                alt="Độ phủ sóng"
                width={307}
                height={347}
                className="object-contain"
            />


            {/* Content */}
            <div className={"text-left"}>
                <span className="text-text-product text-sm font-bold tracking-wider">
                    Phạm vi phủ sóng
                </span>

                <h3 className="text-3xl font-bold mt-2 mb-4">
                    Phủ sóng mọi tỉnh thành
                </h3>

                <p className="text-white leading-relaxed mb-4 max-w-3xl">
                    Kết nối dễ dàng trên khắp Việt Nam.<br />
                    Mạng lưới rộng khắp của chúng tôi
                    bao phủ nhiều khu vực trong nước, giúp bạn truy cập nhanh chóng,
                    ổn định và thu thập dữ liệu hiệu quả ở mọi tỉnh thành.
                </p>

                <Button variant="primary">
                    Bắt đầu ngay
                </Button>
            </div>
        </div>
    );
}