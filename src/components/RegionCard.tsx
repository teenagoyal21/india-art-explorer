
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Region } from "@/lib/data";
import { cn } from "@/lib/utils";

interface RegionCardProps {
  region: Region;
  className?: string;
}

export function RegionCard({ region, className }: RegionCardProps) {
  return (
    <Link to={`/region/${region.name}`}>
      <Card className={cn("hover:shadow-lg transition-all", className)}>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{region.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {region.states.slice(0, 3).join(", ")}
            {region.states.length > 3 && ` and ${region.states.length - 3} more`}
          </p>
          <p className="mt-2 text-sm line-clamp-3">
            {region.description.substring(0, 120)}...
          </p>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-muted/30 flex flex-wrap gap-2">
          {region.artForms.slice(0, 3).map((art) => (
            <Badge key={art} variant="outline" className="bg-india-saffron/10 text-india-saffron border-india-saffron">
              {art}
            </Badge>
          ))}
          {region.artForms.length > 3 && (
            <Badge variant="outline" className="bg-muted/50">
              +{region.artForms.length - 3} more
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
