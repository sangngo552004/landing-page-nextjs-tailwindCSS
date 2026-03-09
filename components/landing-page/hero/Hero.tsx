"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading";
import HeroFeatures from "./HeroFeatures"; // Import component mới

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center pt-20 bg-linear-to-b from-brand-start to-brand-end">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-6">

                <SectionHeading
                    titleGradient="Proxy đáng tin cậy"
                    titleMain="cho mọi nhu cầu doanh nghiệp"
                />

                <HeroFeatures />

                <Button
                    variant="primary"
                    onClick={() => {
                        document.getElementById("products")?.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }}
                >
                    Mua hàng ngay
                </Button>

                <div className="mt-10">
                    <Image
                        src="/imgs/hero/hero.svg"
                        alt="Proxy Dashboard Mockup"
                        width={1200}
                        height={720}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}