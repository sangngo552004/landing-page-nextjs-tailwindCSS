import Image from "next/image";

const CarrierLogos = ({ logoUrls }: { logoUrls: string[] }) => (
    <div className="flex gap-1.5 ml-2.5 items-center">
        {logoUrls.map((url, index) => (
            <div key={index} className="w-[18px] h-[18px] flex items-center justify-center">
                <Image
                    src={url}
                    alt={`Carrier Logo ${index}`}
                    width={18}
                    height={18}
                    className="object-contain"
                />
            </div>
        ))}
    </div>
);

export default CarrierLogos;