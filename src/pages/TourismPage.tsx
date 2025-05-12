
import React from "react";
import { Layout } from "@/components/Layout";
import { TourismChart } from "@/components/TourismChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockTourismTrends, artForms } from "@/lib/data";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const TourismPage = () => {
  // Prepare data for pie charts
  const categoryData = artForms.reduce((acc: {name: string; value: number}[], art) => {
    const existingCategory = acc.find(item => item.name === art.category);
    if (existingCategory) {
      existingCategory.value += 1;
    } else {
      acc.push({ name: art.category, value: 1 });
    }
    return acc;
  }, []);
  
  const regionData = artForms.reduce((acc: {name: string; value: number}[], art) => {
    const existingRegion = acc.find(item => item.name === art.region);
    if (existingRegion) {
      existingRegion.value += 1;
    } else {
      acc.push({ name: art.region, value: 1 });
    }
    return acc;
  }, []);
  
  const popularityData = [
    { name: "High (8-10)", value: artForms.filter(art => art.popularity >= 8).length },
    { name: "Medium (5-7)", value: artForms.filter(art => art.popularity >= 5 && art.popularity < 8).length },
    { name: "Low (1-4)", value: artForms.filter(art => art.popularity < 5).length }
  ];
  
  const COLORS = ["#FF9933", "#138808", "#000080", "#FF0000", "#800080"];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Tourism Insights</h1>
          <p className="text-muted-foreground mt-2">
            Explore data on cultural tourism trends and patterns across India
          </p>
        </header>
        
        {/* Tourism Trends Chart */}
        <TourismChart data={mockTourismTrends} className="mb-8" />
        
        {/* Distribution Charts */}
        <Tabs defaultValue="category" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="region">By Region</TabsTrigger>
            <TabsTrigger value="popularity">By Popularity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="category">
            <Card>
              <CardHeader>
                <CardTitle>Distribution of Art Forms by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} art forms`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="region">
            <Card>
              <CardHeader>
                <CardTitle>Distribution of Art Forms by Region</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={regionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {regionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} art forms`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="popularity">
            <Card>
              <CardHeader>
                <CardTitle>Distribution of Art Forms by Popularity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={popularityData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {popularityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} art forms`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 list-disc list-inside">
                <li>
                  <span className="font-medium">Peak Season (Oct-Feb):</span>{" "}
                  <span className="text-muted-foreground">Winter months see the highest tourist influx as weather conditions are optimal for most cultural destinations.</span>
                </li>
                <li>
                  <span className="font-medium">Summer Decline (Apr-Jun):</span>{" "}
                  <span className="text-muted-foreground">Extreme heat in many regions leads to reduced tourism, especially in North and Central India.</span>
                </li>
                <li>
                  <span className="font-medium">Monsoon Impact (Jul-Sep):</span>{" "}
                  <span className="text-muted-foreground">Heavy rains affect accessibility to many cultural sites, particularly in coastal and eastern regions.</span>
                </li>
                <li>
                  <span className="font-medium">Festival Correlation:</span>{" "}
                  <span className="text-muted-foreground">Visitor numbers peak during major cultural festivals, creating opportunities for experiencing living traditions.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Underexplored Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 list-disc list-inside">
                <li>
                  <span className="font-medium">Northeast Region:</span>{" "}
                  <span className="text-muted-foreground">Despite rich tribal art traditions, the Northeast sees relatively few cultural tourists due to accessibility challenges and limited awareness.</span>
                </li>
                <li>
                  <span className="font-medium">Rural Artisan Communities:</span>{" "}
                  <span className="text-muted-foreground">Village-based traditions often receive less attention than urban centers despite preserving more authentic practices.</span>
                </li>
                <li>
                  <span className="font-medium">Textile Heritage:</span>{" "}
                  <span className="text-muted-foreground">India's diverse textile traditions remain underappreciated compared to visual and performing arts.</span>
                </li>
                <li>
                  <span className="font-medium">Off-Season Experiences:</span>{" "}
                  <span className="text-muted-foreground">Many cultural sites offer unique experiences during off-peak seasons with fewer crowds and more intimate engagement with local communities.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TourismPage;
