
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { artForms, regions } from "@/lib/data";
import { Link } from "react-router-dom";

interface Slide {
  title: string;
  content: React.ReactNode;
  bgColor: string;
}

const PresentationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get featured art forms (with UNESCO recognition or high popularity)
  const featuredArt = artForms
    .filter(art => art.unesco || art.popularity >= 8)
    .slice(0, 3);
  
  const slides: Slide[] = [
    // Slide 1: Title
    {
      title: "India's Artistic Heritage",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-india-blue">Discover India's Cultural Treasures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-24 h-24 bg-india-saffron rounded-full mx-auto flex items-center justify-center text-white">
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="mt-2">Art Forms</p>
            </div>
            <div>
              <div className="w-24 h-24 bg-india-blue rounded-full mx-auto flex items-center justify-center text-white">
                <span className="text-3xl font-bold">5</span>
              </div>
              <p className="mt-2">Regions</p>
            </div>
            <div>
              <div className="w-24 h-24 bg-india-green rounded-full mx-auto flex items-center justify-center text-white">
                <span className="text-3xl font-bold">13</span>
              </div>
              <p className="mt-2">UNESCO Recognized</p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-white",
    },
    
    // Slide 2: About
    {
      title: "Project Overview",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Interactive platform showcasing India's artistic traditions</li>
            <li>Categorized by region and art form types</li>
            <li>Focus on cultural preservation and responsible tourism</li>
            <li>Educational resource for traditional art forms</li>
            <li>Highlighting UNESCO recognized heritage elements</li>
          </ul>
        </div>
      ),
      bgColor: "bg-slate-50",
    },
    
    // Slide 3: Features
    {
      title: "Key Features",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Website Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Art Exploration</h3>
                <p>Interactive gallery of traditional art forms across India</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Regional Maps</h3>
                <p>Geographic visualization of art forms by region</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tourism Statistics</h3>
                <p>Detailed charts on cultural tourism trends</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Responsible Tourism</h3>
                <p>Guidelines for ethical cultural tourism</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
      bgColor: "bg-white",
    },
    
    // Slide 4: Art Highlights
    {
      title: "Featured Art Forms",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Highlighted Art Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArt.map((art) => (
              <Card key={art.id}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{art.name}</h3>
                  <p className="mb-2">Region: {art.region}</p>
                  <p className="mb-2">Category: {art.category}</p>
                  {art.unesco && (
                    <div className="text-india-blue font-semibold">
                      UNESCO Recognized
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
      bgColor: "bg-slate-50",
    },
    
    // Slide 5: Technology Stack
    {
      title: "Technology Stack",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Built With Modern Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">React</h3>
              <p className="text-sm">Frontend Framework</p>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">TypeScript</h3>
              <p className="text-sm">Type Safety</p>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">Tailwind CSS</h3>
              <p className="text-sm">Styling</p>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">React Router</h3>
              <p className="text-sm">Navigation</p>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">Recharts</h3>
              <p className="text-sm">Data Visualization</p>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <h3 className="font-bold">Shadcn UI</h3>
              <p className="text-sm">UI Components</p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-white",
    },
    
    // Slide 6: Future Roadmap
    {
      title: "Future Development",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Roadmap for the Future</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Interactive 3D models of artifacts</li>
            <li>Artist profiles and interviews</li>
            <li>Virtual workshops for traditional crafts</li>
            <li>Mobile application development</li>
            <li>Community forum for cultural exchange</li>
            <li>Integration with cultural tourism booking platforms</li>
          </ul>
        </div>
      ),
      bgColor: "bg-slate-50",
    },
    
    // Slide 7: Call to Action
    {
      title: "Thank You",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Explore India's Living Heritage</h2>
          <p className="text-lg mb-8">
            Thank you for exploring our presentation on India's Artistic Heritage.
          </p>
          <Button asChild size="lg" className="mx-auto">
            <Link to="/">Visit the Website</Link>
          </Button>
        </div>
      ),
      bgColor: "bg-india-blue text-white",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Layout className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Presentation: India's Artistic Heritage</h1>
          <p className="text-gray-600">A visual journey through India's cultural treasures</p>
        </header>

        <div className="relative">
          <Card className={`min-h-[60vh] ${slides[currentSlide].bgColor}`}>
            <CardContent className="p-8">
              <div className="text-right mb-4">
                <span className="text-sm text-gray-500">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
              </div>
              
              <div className="slide-content h-full">
                {slides[currentSlide].content}
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              onClick={prevSlide}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            
            <Button
              onClick={nextSlide}
              className="flex items-center"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PresentationPage;
