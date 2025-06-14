
import { Church } from "lucide-react";

const Header = () => (
  <header className="w-full px-8 py-4 bg-white shadow-sm border-b flex items-center justify-between">
    <div className="flex items-center gap-2 font-bold text-2xl text-primary tracking-wide">
      <Church className="h-7 w-7 text-green-700" strokeWidth={2.3} />
      <span>Ritually</span>
    </div>
    {/* Placeholder for nav/links; expand if more pages */}
    <nav className="flex items-center gap-6">
      <a className="text-sm font-medium text-primary hover:text-green-700 transition" href="#howitworks">
        How it works
      </a>
      {/* Future: user auth or dashboard */}
    </nav>
  </header>
);

export default Header;
