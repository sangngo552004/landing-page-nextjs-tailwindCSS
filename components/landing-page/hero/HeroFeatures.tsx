import Image from "next/image";

const FEATURES = [
    {
        icon: "/imgs/hero/notBlockIcon.svg",
        label: "Không bị chặn",
    },
    {
        icon: "/imgs/hero/integrateIcon.svg",
        label: "Tích hợp nhanh",
    },
    {
        icon: "/imgs/hero/optimizeIcon.svg",
        label: "Tối ưu chi phí",
    },
];

export default function HeroFeatures() {
    return (
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm md:text-base">
            {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                    <Image
                        src={feature.icon}
                        alt={feature.label}
                        width={16}
                        height={16}
                    />
                    <span>{feature.label}</span>
                </div>
            ))}
        </div>
    );
}