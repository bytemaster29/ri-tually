
import React from "react";
const LANGUAGES = ["English", "Hindi", "Tamil", "Urdu", "Marathi", "Bengali", "Gujarati"];

const LanguageSelect = ({ value, onChange }:{
  value: string, onChange: (lang: string) => void
}) => (
  <div className="flex items-center gap-2">
    <label className="font-medium text-sm text-muted-foreground" htmlFor="lang">Language:</label>
    <select
      id="lang"
      className="border border-input rounded px-3 py-1 bg-white focus:ring-2 focus:ring-primary"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {LANGUAGES.map(l => <option value={l} key={l}>{l}</option>)}
    </select>
  </div>
);
export default LanguageSelect;
