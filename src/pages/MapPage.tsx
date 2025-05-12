
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Region, regions, getArtFormsByRegion } from "@/lib/data";
import { cn } from "@/lib/utils";

const MapPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  
  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Regional Map</h1>
          <p className="text-muted-foreground mt-2">
            Explore India's art and cultural heritage by region
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="bg-white overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="aspect-[4/5] md:aspect-[16/10] relative">
                  <svg
                    viewBox="0 0 600 600"
                    className="w-full h-full"
                    style={{ maxHeight: "600px" }}
                  >
                    {/* Simplified India Map with Regions */}
                    {/* North India */}
                    <path
                      d="M200,100 L400,100 L450,200 L350,300 L250,300 L150,200 Z"
                      fill={selectedRegion?.name === "North India" ? "#FF9933" : "#FFD700"}
                      opacity={selectedRegion?.name === "North India" ? "0.8" : "0.5"}
                      stroke="#333"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleRegionClick(regions[0])}
                    />
                    <text x="300" y="200" textAnchor="middle" fill="#000" fontSize="16">North</text>
                    
                    {/* South India */}
                    <path
                      d="M250,400 L350,400 L400,500 L200,500 Z"
                      fill={selectedRegion?.name === "South India" ? "#138808" : "#90EE90"}
                      opacity={selectedRegion?.name === "South India" ? "0.8" : "0.5"}
                      stroke="#333"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleRegionClick(regions[1])}
                    />
                    <text x="300" y="450" textAnchor="middle" fill="#000" fontSize="16">South</text>
                    
                    {/* East India */}
                    <path
                      d="M400,200 L500,250 L450,400 L350,350 Z"
                      fill={selectedRegion?.name === "East India" ? "#000080" : "#ADD8E6"}
                      opacity={selectedRegion?.name === "East India" ? "0.8" : "0.5"}
                      stroke="#333"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleRegionClick(regions[2])}
                    />
                    <text x="425" y="300" textAnchor="middle" fill="#000" fontSize="16">East</text>
                    
                    {/* West India */}
                    <path
                      d="M100,250 L250,350 L200,450 L100,400 Z"
                      fill={selectedRegion?.name === "West India" ? "#FF0000" : "#FFA07A"}
                      opacity={selectedRegion?.name === "West India" ? "0.8" : "0.5"}
                      stroke="#333"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleRegionClick(regions[3])}
                    />
                    <text x="175" y="350" textAnchor="middle" fill="#000" fontSize="16">West</text>
                    
                    {/* Central India */}
                    <path
                      d="M250,300 L350,300 L350,400 L250,400 Z"
                      fill={selectedRegion?.name === "Central India" ? "#800080" : "#DDA0DD"}
                      opacity={selectedRegion?.name === "Central India" ? "0.8" : "0.5"}
                      stroke="#333"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleRegionClick(regions[4])}
                    />
                    <text x="300" y="350" textAnchor="middle" fill="#000" fontSize="16">Central</text>
                  </svg>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md shadow-md">
                  <p className="text-sm font-medium">Click on a region to explore</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Region Info */}
          <div className="order-1 lg:order-2">
            <Card className={cn(
              "h-full", 
              selectedRegion ? "border-india-saffron" : ""
            )}>
              <CardContent className="p-6">
                {selectedRegion ? (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-2">{selectedRegion.name}</h2>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">States:</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedRegion.states.join(", ")}
                      </p>
                    </div>
                    
                    <p className="mb-6">{selectedRegion.description}</p>
                    
                    <h4 className="font-medium mb-2">Notable Art Forms:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-6">
                      {selectedRegion.artForms.map(art => (
                        <li key={art} className="text-sm">{art}</li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full">
                      <Link to={`/region/${selectedRegion.name}`}>
                        Explore {selectedRegion.name}
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-medium mb-4">Select a Region</h3>
                    <p className="text-muted-foreground mb-6">
                      Click on any region in the map to view details about its cultural heritage.
                    </p>
                    
                    <div className="space-y-2">
                      {regions.map(region => (
                        <Button 
                          key={region.name}
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => handleRegionClick(region)}
                        >
                          {region.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
