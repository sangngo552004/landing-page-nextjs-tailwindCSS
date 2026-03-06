import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "./TestimonialCard"; // Nhớ import đúng đường dẫn

const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Isabella G.",
        role: "Technical Director",
        content: "IPRoyal Residential proxies provide stable and efficient support for my app and account management. With the reliable proxy network, I can smoothly handle account operations across different regions.",
        avatar: "/imgs/testimonials/avatar.png",
        rating: 5
    },
    {
        id: 2,
        name: "Isabella G.",
        role: "Technical Director",
        content: "IPRoyal Residential proxies provide stable and efficient support for my app and account management. With the reliable proxy network, I can smoothly handle account operations across different regions.",
        avatar: "/imgs/testimonials/avatar.png",
        rating: 5
    },
    {
        id: 3,
        name: "Isabella G.",
        role: "Technical Director",
        content: "IPRoyal Residential proxies provide stable and efficient support for my app and account management. With the reliable proxy network, I can smoothly handle account operations across different regions.",
        avatar: "/imgs/testimonials/avatar.png",
        rating: 5
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 px-4 bg-linear-to-b from-brand-start to-brand-end">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    titleGradient="Khách hàng"
                    titleMain="của chúng tôi nói gì"
                    description="Đọc những trải nghiệm thực tế về cách dịch vụ proxy của chúng tôi đã giúp ích cho khách hàng."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                    {TESTIMONIALS_DATA.map((item) => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}