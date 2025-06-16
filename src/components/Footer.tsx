
const Footer = () => (
  <footer className="w-full border-t bg-gradient-to-r from-yellow-50 to-amber-50 py-6 mt-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-muted-foreground">
      <div>© {new Date().getFullYear()} Ritually. All rights reserved.</div>
      <div className="mt-3 md:mt-0">Made with ❤️ for every path to the divine</div>
    </div>
  </footer>
);

export default Footer;
