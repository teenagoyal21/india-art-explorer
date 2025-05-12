
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArtForm } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ArtCardProps {
  art: ArtForm;
  className?: string;
}

export function ArtCard({ art, className }: ArtCardProps) {
  return (
    <Link to={`/art/${art.id}`}>
      <Card className={cn("art-card h-full flex flex-col", className)}>
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${art.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <CardContent className="p-4 flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{art.name}</h3>
            {art.unesco && (
              <Badge variant="outline" className="bg-india-blue/10 text-india-blue border-india-blue">
                UNESCO
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{art.region}, {art.state}</p>
          <p className="mt-2 text-sm line-clamp-3">
            {art.description.substring(0, 120)}...
          </p>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-muted/30 flex justify-between">
          <Badge variant="secondary" className="bg-india-saffron/10 text-india-saffron border-india-saffron">
            {art.category}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
