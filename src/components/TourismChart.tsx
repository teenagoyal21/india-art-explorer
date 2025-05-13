
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TourismData {
  region: string;
  domestic: number;
  international: number;
  growth: number;
}

interface TourismTrend {
  month: string;
  domestic: number;
  international: number;
  year: number;
}

interface TourismChartProps {
  data: TourismData[] | TourismTrend[];
  type?: "visitors" | "growth";
  title?: string;
  className?: string;
}

export function TourismChart({ 
  data, 
  type = "visitors", 
  title = "Tourism Trends", 
  className 
}: TourismChartProps) {
  // Format large numbers with abbreviations (K for thousands, M for millions)
  const formatYAxis = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  // Format for tooltip
  const formatNumber = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };
  
  // Check if data is TourismTrend type by looking for month property
  const isTrendData = data.length > 0 && 'month' in data[0];

  // Get the right data to display based on the type and data structure
  const getChartData = () => {
    if (type === "visitors") {
      return (
        <>
          <Bar
            dataKey="domestic"
            fill="#FF9933" // India Saffron
            name="Domestic Visitors"
          />
          <Bar
            dataKey="international"
            fill="#138808" // India Green
            name="International Visitors"
          />
        </>
      );
    } else {
      return (
        <Bar
          dataKey="growth"
          fill="#000080" // Navy Blue
          name="Annual Growth (%)"
        />
      );
    }
  };

  return (
    <Card className={`w-full ${className || ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={isTrendData ? "month" : "region"} />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip
                formatter={(value: number) => [formatNumber(value)]}
              />
              <Legend />
              {getChartData()}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
