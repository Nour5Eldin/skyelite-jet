import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ'] as const;

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Subtle wash so nav/text stay legible over any footage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

        <div className="relative h-full flex flex-col">
          {/* Navigation */}
          <nav className="max-w-7xl mx-auto w-full px-8 py-6">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-900">SkyElite</span>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="md:hidden text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 rounded"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 flex flex-col gap-4 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </nav>

          {/* Hero content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="-mt-80 px-4 text-center">
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-600">
                PRIVATE JETS
              </p>

              <h1 className="leading-none tracking-tighter">
                <span className="block text-6xl font-normal text-gray-500 md:text-7xl lg:text-8xl">
                  Premium.
                </span>
                <span className="-mt-3 block text-6xl font-normal text-[#202A36] md:text-7xl lg:text-8xl">
                  Accessible.
                </span>
              </h1>

              <p className="mx-auto mb-6 mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                >
                  Discover
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
