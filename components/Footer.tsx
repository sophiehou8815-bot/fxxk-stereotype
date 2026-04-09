import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black tracking-[0.28em] text-white/72">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-md text-[11px] uppercase tracking-[0.24em] text-white/26">
            Asian electronic movement / Europe 2026 / dark luxury and club
            pressure
          </p>
        </div>

        <p className="text-[10px] uppercase tracking-[0.24em] text-white/20">
          © {new Date().getFullYear()} FXXK STEREOTYPE
        </p>
      </div>
    </footer>
  );
}
