"use client";

import { useState } from "react";
import { Phone, Facebook, Send, ChevronUp } from "lucide-react";

export default function FloatingContacts() {
    const [open, setOpen] = useState(true);

    return (
        <div className="fixed right-6 bottom-24 z-50 flex flex-col items-center">

            <div
                className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                    open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
                <a
                    href="tel:0123456789"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500
          text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]
          hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]
          transition"
                >
                    <Phone size={20} className="text-white" />
                </a>

                <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600
          text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]
          hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]
          transition"
                >
                    <Facebook size={20} className="text-white" />
                </a>

                <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500
          text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]
          hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]
          transition"
                >
                    <Send size={20} className="text-white" />
                </a>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="mt-3 w-12 h-12 flex items-center justify-center rounded-full
        bg-gradient-to-b from-blue-400 to-blue-700
        shadow-[0_0_15px_rgba(59,130,246,0.7)]
        hover:shadow-[0_0_30px_rgba(59,130,246,1)]
        hover:scale-110
        transition"
            >
                <ChevronUp
                    size={22}
                    className={`text-white transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>
        </div>
    );
}