"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const LOCATIONS = [
  {
    name: "Tbilisi",
    nameKa: "თბილისი",
    count: "120+ venues",
    countKa: "120+ სივრცე",
    bgImage: "/images/tbilisi.webp", 
  },
  {
    name: "Batumi",
    nameKa: "ბათუმი",
    count: "80+ venues",
    countKa: "80+ სივრცე",
    bgImage: "/images/batumi.webp",
  },
  {
    name: "Rustavi",
    nameKa: "რუსთავი",
    count: "25+ venues",
    countKa: "25+ სივრცე",
    bgImage: "/images/rustavi.png",
  },
  {
    name: "Kutaisi",
    nameKa: "ქუთაისი",
    count: "40+ venues",
    countKa: "40+ სივრცე",
    bgImage: "/images/kutaisi.png",
  },
]

export function PopularLocations() {
  const { language } = useLanguage()
  const isGeorgian = language === "ka"
  
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8 section-atmosphere section-atmosphere-locations relative z-[1]">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-[#1a1a1c] text-2xl md:text-3xl font-bold tracking-tight">
          {isGeorgian ? "პოპულარული ლოკაციები" : "Popular locations"}
        </h2>
        <Link 
          href="/browse" 
          className="group flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1c] hover:opacity-70 transition-opacity"
        >
          {isGeorgian ? "ყველა ლოკაცია" : "View all locations"}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {LOCATIONS.map((loc, i) => (
          <Link 
            key={i}
            href={`/browse?location=${loc.name.toLowerCase()}`}
            className="group relative w-full aspect-[4/3] rounded-md md:rounded-lg overflow-hidden flex flex-col justify-end p-5 cursor-pointer isolate block shadow-[0_4px_16px_rgba(107,122,144,0.07),_0_1px_3px_rgba(107,122,144,0.04)] hover:shadow-[0_12px_36px_rgba(107,122,144,0.12),_0_4px_10px_rgba(107,122,144,0.06)] transition-shadow duration-500"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.05]" 
              style={{ backgroundImage: `url(${loc.bgImage})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-1">
                {isGeorgian ? loc.nameKa : loc.name}
              </h3>
              <p className="text-white/80 font-medium text-[11px] uppercase tracking-wide">
                {isGeorgian ? loc.countKa : loc.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
