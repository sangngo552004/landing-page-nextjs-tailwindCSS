import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

const PARTNERS_DATA = [
    { id: 1, name: "Mobifone", logo: "/partners/mobifone.png" },
    { id: 2, name: "FPT", logo: "/partners/fpt.png" },
    { id: 3, name: "EVN SPC", logo: "/partners/evn.png" },
    { id: 4, name: "Viettel", logo: "/partners/viettel.png" },
    { id: 5, name: "VNPT", logo: "/partners/vnpt.png" },
    { id: 6, name: "Apollo", logo: "/partners/apollo.png" },
];

export default function Partners() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">

                {/* Tái sử dụng SectionHeading */}
                <SectionHeading
                    titleGradient="Đối tác"
                    titleMain="của chúng tôi"
                    mainColorClass="text-black"
                    description="Bạn còn chần chừ gì nữa mà không cùng hợp tác với chúng tôi, một trong những nhà cung cấp proxy uy tín và giá rẻ."
                />

                {/* Danh sách Logo Đối tác */}
                <div className="mt-12 flex flex-wrap items-center justify-center ">
                    {PARTNERS_DATA.map((partner) => (
                        <div
                            key={partner.id}
                            className="relative w-32 h-12 md:w-40 md:h-16 "
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}