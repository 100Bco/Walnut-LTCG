export default function Footer() {
  return (
    <footer className="bg-lt-onyx-deep text-lt-white/60 pt-20 pb-8 overflow-hidden">
      <div className="lt-container">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-5 pr-4">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/ltcg-icon-light.png"
                alt="LT Commercial Group"
                className="h-12 w-auto"
                width={125}
                height={173}
              />
              <div className="flex flex-col justify-center">
                <span className="text-lt-white font-title text-xl leading-tight font-extrabold tracking-tight">LT COMMERCIAL GROUP</span>
                <span className="text-lt-auburn text-[9px] font-bold tracking-[0.2em] uppercase mt-1">Commercial Real Estate</span>
              </div>
            </div>
            
            <address className="not-italic text-[13px] leading-relaxed mb-6 font-medium text-lt-white/80">
              12516 Walnut Park Crossing, Ste. 200<br/>
              Austin, TX 78753
            </address>
            
            <a href="tel:5124906666" className="inline-flex items-center text-[13px] font-bold tracking-widest uppercase hover:text-lt-white transition-colors text-lt-auburn">
              (512) 490-6666
            </a>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-lt-white/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Spaces</h5>
            <ul className="space-y-4 text-[13px]">
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Executive Suites</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Team Offices</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Meeting Rooms</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Day Offices</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Virtual Mail</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-lt-white/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Property</h5>
            <ul className="space-y-4 text-[13px]">
              <li><a href="#amenities" className="hover:text-lt-white transition-colors font-medium">Amenities</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Gallery</a></li>
              <li><a href="#" className="hover:text-lt-white transition-colors font-medium">Location</a></li>
              <li><a href="#faq" className="hover:text-lt-white transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-lt-white/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Get in Touch</h5>
            <ul className="space-y-4 text-[13px]">
              <li><a href="#contact" className="hover:text-lt-white transition-colors font-medium">Schedule a Tour</a></li>
              <li><a href="#book" className="hover:text-lt-white transition-colors font-medium">Reserve a Room</a></li>
              <li><a href="#contact" className="hover:text-lt-white transition-colors font-medium">Request Pricing</a></li>
              <li><a href="#contact" className="hover:text-lt-white transition-colors font-medium">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Large watermark text */}
        <div className="border-t border-lt-white/10 pt-16 pb-8 text-center select-none">
          <h2 className="font-title font-extrabold text-[12vw] leading-none text-lt-white/5 tracking-tighter">WALNUT PARK</h2>
        </div>

        <div className="pt-8 border-t border-lt-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium tracking-widest uppercase">
          <span>&copy; {new Date().getFullYear()} LT Commercial Group</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-lt-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-lt-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
