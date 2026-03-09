import Image from "next/image";

const SpecItem = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <div className="flex items-center gap-2.5 text-[13px] h-6">
        <Image src={icon} alt="check icon" width={18} height={18} className="flex-shrink-0" />
        <div className="text-gray-900 font-medium leading-tight flex-1 flex items-center">
            {children}
        </div>
    </div>
);

export default SpecItem;