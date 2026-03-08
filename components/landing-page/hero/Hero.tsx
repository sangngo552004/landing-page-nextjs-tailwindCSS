import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading";
import HeroFeatures from "./HeroFeatures"; // Import component mới

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 bg-linear-to-b from-brand-start to-brand-end">
            <div className="flex flex-col items-center text-center z-10 max-w-7xl mx-auto gap-6">

                <SectionHeading
                    titleGradient="Proxy đáng tin cậy"
                    titleMain="cho mọi nhu cầu doanh nghiệp"
                />

                {/* Phần Features đã được tách ra */}
                <HeroFeatures />

                <Button variant="primary">
                    Mua hàng ngay
                </Button>

            </div>

            <div className="mt-10 max-w-7xl mx-auto">
                <Image
                    src="/imgs/hero/hero.svg"
                    alt="Proxy Dashboard Mockup"
                    width={1200}
                    height={720}
                    className="w-full"
                    priority
                />
            </div>
        </section>
    );
}