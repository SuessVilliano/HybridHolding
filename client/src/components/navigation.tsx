import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoPath from "@assets/IMG_5165.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Mission", id: "mission" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Investors", id: "investors" },
    { label: "Leadership", id: "leadership" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoPath} 
                alt="Trade Hybrid Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div className="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                Hybrid Holdings
              </div>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent-blue hover:bg-accent-blue/80 text-white"
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background border-l border-white/10">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 bg-accent-blue hover:bg-accent-blue/80 text-white"
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
