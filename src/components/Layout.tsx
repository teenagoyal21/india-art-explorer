
import React from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className={cn("flex-1 md:ml-64 transition-all duration-300 px-4 md:px-6 py-8 overflow-auto", className)}>
        {children}
      </main>
    </div>
  );
}
