import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-brand-start to-brand-end text-white px-4">
            <div className="max-w-5xl mx-auto py-10">

                <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/20 pb-6 gap-6">

                    <Image
                        src="/imgs/footer/logo-w-bg.svg"
                        alt="Home Proxy"
                        width={150}
                        height={54}
                        className="h-auto w-auto"
                    />

                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <Image src="/imgs/footer/mastercard.png" alt="mastercard" width={36} height={36} />
                        <Image src="/imgs/footer/visa.png" alt="visa" width={36} height={36} />
                        <Image src="/imgs/footer/paypal.png" alt="paypal" width={36} height={36} />
                        <Image src="/imgs/footer/jcb.png" alt="jcb" width={36} height={36} />
                        <Image src="/imgs/footer/unionpay.png" alt="unionpay" width={36} height={36} />
                        <Image src="/imgs/footer/americanexpress.png" alt="amex" width={36} height={36} />
                    </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-4">

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Service Agreement</Link>
                        <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>

                    <p className="text-center md:text-right">
                        © Data Intelligence Technology Lab Co. Limited. All Rights Reserved
                    </p>

                </div>
            </div>
        </footer>
    )
}