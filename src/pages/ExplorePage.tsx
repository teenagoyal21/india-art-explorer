
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { ArtCard } from "@/components/ArtCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArtForm, artForms } from "@/lib/data";
import { Search } from "lucide-react";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories: ArtForm["category"][] = ["Visual", "Performing", "Crafts", "Textiles"];
  
  const filterArtForms = (category: string, search: string) => {
    return artForms.filter(art => 
      (category === "all" || art.category === category) && 
      (search === "" || 
        art.name.toLowerCase().includes(search.toLowerCase()) || 
        art.description.toLowerCase().includes(search.toLowerCase()) ||
        art.state.toLowerCase().includes(search.toLowerCase()) ||
        art.region.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Explore Art Forms</h1>
          <p className="text-muted-foreground mt-2">
            Discover the rich diversity of India's traditional art forms across regions and categories.
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search art forms by name, region, or state..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <Button 
              variant="ghost" 
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </Button>
          )}
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterArtForms("all", searchTerm).map(art => (
                <ArtCard key={art.id} art={art} />
              ))}
              {filterArtForms("all", searchTerm).length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No art forms found matching your search.</p>
                </div>
              )}
            </div>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterArtForms(category, searchTerm).map(art => (
                  <ArtCard key={art.id} art={art} />
                ))}
                {filterArtForms(category, searchTerm).length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">No {category.toLowerCase()} art forms found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default ExplorePage;
