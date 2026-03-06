import Image from "next/image";
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/common/SectionHeading"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 overflow-hidden bg-linear-to-b from-brand-start to-brand-end">
            <div className="flex flex-col items-center text-center z-10 max-w-7xl mx-auto gap-6">

                <SectionHeading
                    titleGradient="Proxy đáng tin cậy"
                    titleMain="cho mọi nhu cầu doanh nghiệp"
                />

                <div className="flex flex-wrap justify-center gap-6 text-white text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/imgs/hero/notBlockIcon.svg"
                            alt="Không bị chặn"
                            width={16}
                            height={16}
                        />
                        Không bị chặn
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/imgs/hero/integrateIcon.svg"
                            alt="Tích hợp nhanh"
                            width={16}
                            height={16}
                        />
                        Tích hợp nhanh
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/imgs/hero/optimizeIcon.svg"
                            alt="Tối ưu chi phí"
                            width={16}
                            height={16}
                        />
                        Tối ưu chi phí
                    </div>

                </div>

                <Button variant="primary">
                    Mua hàng ngay
                </Button>

            </div>

            <div className="relative mt-16 w-full max-w-6xl mx-auto">
                <div className="relative z-20 flex justify-center">
                    <Image
                        src="/imgs/hero/hero.svg"
                        alt="Proxy Dashboard Mockup"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

            </div>

        </section>
    );
}