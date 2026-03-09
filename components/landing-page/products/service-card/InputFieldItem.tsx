import SpecItem from "./SpecItem";

const InputFieldItem = ({ label }: { label: string }) => (
    <SpecItem icon="/imgs/products/checkIcon.svg">
        <div className="w-full flex justify-between items-center gap-1.5">
            <span className="text-gray-900">{label}</span>
            <input
                type="number"
                placeholder="Nhập số ngày"
                className="w-[120px] bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-orange-400 transition-all text-center placeholder:text-gray-300"
            />
        </div>
    </SpecItem>
);
export default InputFieldItem;