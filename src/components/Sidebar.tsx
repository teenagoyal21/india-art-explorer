import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Map, PaintBucket, Image, Book, Menu, X } from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    {
      name: "Overview",
      path: "/",
      icon: <Image className="w-5 h-5" />
    },
    {
      name: "Explore Art Forms",
      path: "/explore",
      icon: <PaintBucket className="w-5 h-5" />
    },
    {
      name: "Regional Map",
      path: "/map",
      icon: <Map className="w-5 h-5" />
    },
    {
      name: "Tourism Insights",
      path: "/tourism",
      icon: <Image className="w-5 h-5" />
    },
    {
      name: "Responsible Tourism",
      path: "/responsible",
      icon: <Book className="w-5 h-5" />
    }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed left-0 top-0 bottom-0 z-40 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h1 className="text-xl font-bold text-sidebar-foreground">
              <span className="text-india-saffron">India</span>{" "}
              <span className="text-white">Art</span>{" "}
              <span className="text-india-green">Explorer</span>
            </h1>
          </div>
          
          <nav className="px-2 flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={cn(
                      "nav-link",
                      location.pathname === item.path ? "active" : ""
                    )}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-6 text-xs text-sidebar-foreground/70">
            <p>© 2025 India Art Explorer</p>
            <p className="mt-1">Exploring India's Cultural Heritage</p>
          </div>
        </div>
      </div>
      
      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
