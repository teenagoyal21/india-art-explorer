
import React from "react";
import { Layout } from "@/components/Layout";
import { ArtCard } from "@/components/ArtCard";
import { RegionCard } from "@/components/RegionCard";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { Link } from "react-router-dom";
import { artForms, regions } from "@/lib/data";
import { Map, PaintBucket, Book, Image } from "lucide-react";

const Index = () => {
  // Get featured art forms (with UNESCO recognition or high popularity)
  const featuredArt = artForms
    .filter(art => art.unesco || art.popularity >= 8)
    .slice(0, 3);

  return (
    <Layout className="pattern-bg">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-india-blue animate-fade-in">
            Discover India's Artistic Heritage
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Explore the rich tapestry of traditional art forms, cultural practices, and responsible tourism opportunities across India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-india-saffron hover:bg-india-saffron/90">
              <Link to="/explore">Explore Art Forms</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/map">View Regional Map</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Cultural Heritage at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Traditional Art Forms" 
              value="100+" 
              description="Documented across India"
              icon={<PaintBucket size={24} />}
            />
            <StatsCard 
              title="UNESCO Recognized" 
              value="13"
              description="Cultural art practices"
              icon={<Image size={24} />}
            />
            <StatsCard 
              title="Cultural Tourism Sites" 
              value="3,600+"
              description="Across the country"
              icon={<Map size={24} />}
            />
            <StatsCard 
              title="Living Traditions" 
              value="Centuries"
              description="Of continuous practice"
              icon={<Book size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Featured Art Forms */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Art Forms</h2>
            <Button asChild variant="ghost">
              <Link to="/explore">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArt.map(art => (
              <ArtCard key={art.id} art={art} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Region */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Explore by Region</h2>
            <Button asChild variant="ghost">
              <Link to="/map">View Map</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.slice(0, 3).map(region => (
              <RegionCard key={region.name} region={region} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-india-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Experience India's Living Heritage</h2>
          <p className="mt-4">
            Discover the stories, traditions, and artistic expressions that have shaped Indian culture for centuries.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-india-blue hover:bg-white/90">
            <Link to="/responsible">Learn About Responsible Tourism</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
