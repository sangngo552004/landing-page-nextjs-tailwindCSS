import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-brand-start to-brand-end text-white">
            <div className="max-w-5xl mx-auto py-10">

                <div className="flex items-center justify-between border-b border-white/20 pb-6">

                    <Image
                        src="/imgs/footer/logo-w-bg.svg"
                        alt="Home Proxy"
                        width={150}
                        height={54}
                    />

                    <div className="flex items-center gap-3">
                        <Image src="/mastercard.png" alt="mastercard" width={36} height={36} />
                        <Image src="/visa.png" alt="visa" width={36} height={36} />
                        <Image src="/paypal.png" alt="paypal" width={36} height={36} />
                        <Image src="/jcb.png" alt="amex" width={36} height={36} />
                        <Image src="/unionpay.png" alt="amex" width={36} height={36} />
                        <Image src="/americanexpress.png" alt="amex" width={36} height={36} />
                        <Image src="/unionpay.png" alt="amex" width={36} height={36} />
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between text-sm text-white/80">

                    <div className="flex gap-6">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Service Agreement</Link>
                        <Link href="#">Refund Policy</Link>
                    </div>

                    <p>
                        © Data Intelligence Technology Lab Co. Limited. All Rights Reserved
                    </p>

                </div>
            </div>
        </footer>
    )
}