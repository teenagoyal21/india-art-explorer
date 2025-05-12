
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArtForm, getArtFormById, getArtFormsByRegion } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

const ArtDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const art = getArtFormById(id || "");
  
  if (!art) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Art Form Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the art form you're looking for.</p>
          <Button asChild>
            <Link to="/explore">Back to Explore</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Get related art forms from the same region
  const relatedArt = getArtFormsByRegion(art.region)
    .filter(item => item.id !== art.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Image */}
          <div 
            className={cn(
              "lg:col-span-2 aspect-square rounded-lg overflow-hidden",
              "bg-cover bg-center border-pattern border-2"
            )}
            style={{ 
              backgroundImage: `url(${art.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover" 
            }}
          />
          
          {/* Details */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold mr-4">{art.name}</h1>
              {art.unesco && (
                <Badge className="bg-india-blue/10 text-india-blue border-india-blue">
                  UNESCO Recognized
                </Badge>
              )}
              <Badge variant="outline">
                {art.category}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin size={16} />
              <span>{art.region}, {art.state}</span>
            </div>
            
            <p className="mb-6 text-lg">{art.description}</p>
            
            {/* Visit Info */}
            {art.bestTimeToVisit && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-medium mb-2">
                  <Calendar size={18} />
                  Best Time to Visit
                </h3>
                <div className="flex flex-wrap gap-2">
                  {art.bestTimeToVisit.map(month => (
                    <Badge key={month} variant="outline" className="bg-india-green/10 text-india-green">
                      {month}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Video Link */}
            {art.videoUrl && (
              <Button asChild className="bg-india-red hover:bg-india-red/90">
                <a href={art.videoUrl} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Cultural Significance */}
        <Card className="mb-8 border-pattern">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Cultural Significance</h3>
            <p>{art.culturalSignificance}</p>
          </CardContent>
        </Card>
        
        {/* Related Art Forms */}
        {relatedArt.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">More Art Forms from {art.region}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedArt.map(item => (
                <Link 
                  key={item.id} 
                  to={`/art/${item.id}`}
                  className="block p-4 border rounded-md hover:border-india-saffron transition-colors"
                >
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArtDetailPage;
