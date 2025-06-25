
import { Church } from "lucide-react";
import LanguageSelect from "./LanguageSelect";
import React from "react";

const Header = ({
  language,
  onLanguageChange,
}: {
  language: string;
  onLanguageChange: (l: string) => void;
}) => (
  <header className="w-full px-8 py-4 bg-background shadow-sm border-b flex items-center justify-between">
    <div className="flex items-center gap-2 font-bold text-2xl text-foreground tracking-wide">
      <Church className="h-7 w-7 text-primary" strokeWidth={2.3} />
      <span>Ritually</span>
    </div>
    <nav className="flex flex-wrap items-center gap-6">
      <a className="text-sm font-medium text-foreground hover:text-primary transition" href="#howitworks">
        How it works
      </a>
      <a className="rounded-lg py-2 px-4 bg-primary text-primary-foreground font-semibold hover:bg-accent transition" href="#booking">
        Start Booking
      </a>
      <LanguageSelect value={language} onChange={onLanguageChange} />
    </nav>
  </header>
);

export default Header;
