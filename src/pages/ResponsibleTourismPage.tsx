
import React from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { responsibleTourismTips } from "@/lib/data";
import { Book, Image, Map, PaintBucket, Palette, Ticket } from "lucide-react";

const ResponsibleTourismPage = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "palette": return <Palette size={24} />;
      case "book": return <Book size={24} />;
      case "ticket": return <Ticket size={24} />;
      case "calendar": return <Image size={24} />;
      case "leaf": return <Map size={24} />;
      default: return <PaintBucket size={24} />;
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Responsible Cultural Tourism</h1>
          <p className="text-muted-foreground mt-2">
            Guidelines for experiencing India's cultural heritage responsibly and sustainably
          </p>
        </header>
        
        <Tabs defaultValue="guidelines" className="mb-12">
          <TabsList className="mb-4">
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            <TabsTrigger value="impact">Cultural Impact</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guidelines">
            <div className="space-y-6">
              {responsibleTourismTips.map((tip, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-india-saffron">
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-2 rounded-full bg-india-saffron/10 text-india-saffron h-fit">
                      {getIcon(tip.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="impact">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cultural Preservation</h3>
                <p className="mb-4">
                  Cultural tourism can play a vital role in preserving India's artistic heritage when done thoughtfully. By generating interest and economic value for traditional art forms, tourism creates incentives for new generations to learn and continue these practices.
                </p>
                <p>
                  However, without proper guidance, tourism can also lead to the commercialization and simplification of complex traditions, reducing sacred or meaningful practices to mere tourist spectacles. Finding the balance is key to ensuring that cultural tourism supports rather than undermines these living traditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                <p className="mb-4">
                  The most successful cultural tourism initiatives are those that meaningfully involve local communities in decision-making and benefit-sharing. When artisans and cultural practitioners have agency in how their traditions are presented and marketed, the experience becomes more authentic for visitors and more sustainable for communities.
                </p>
                <p>
                  Look for experiences that are community-led or that have clear benefit-sharing mechanisms in place, where proceeds directly support artists, education programs, or cultural preservation efforts.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cultural Exchange</h3>
                <p className="mb-4">
                  At its best, cultural tourism facilitates meaningful exchange between visitors and local communities. Rather than viewing cultural experiences as one-way observations, approach them as opportunities for dialogue and mutual learning.
                </p>
                <p>
                  Many artisans and performers appreciate visitors who show genuine interest in understanding the deeper significance of their work. Taking the time to learn about cultural contexts and asking respectful questions can transform a tourist experience into a meaningful cultural exchange.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sustainability">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Environmental Considerations</h3>
                <p className="mb-4">
                  Many traditional art forms rely on natural materials and resources that are becoming increasingly scarce. Sustainable tourism practices should consider the environmental impact on these resources and support conservation efforts.
                </p>
                <p>
                  Additionally, cultural sites often face challenges from overtourism, pollution, and climate change. Responsible visitors can help mitigate these impacts by following designated paths, properly disposing of waste, and supporting sites that implement sustainable practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Economic Sustainability</h3>
                <p className="mb-4">
                  For cultural practices to survive, they must be economically viable for practitioners. Fair trade principles should apply to cultural tourism, ensuring that artisans and performers receive appropriate compensation for their skills and time.
                </p>
                <p>
                  Be willing to pay fair prices for authentic crafts and experiences, recognizing that quality traditional items often require extensive skill and time to create. Avoid haggling excessively, especially with individual artisans, as this can undervalue their work and expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Long-term Vision</h3>
                <p className="mb-4">
                  Sustainable cultural tourism requires looking beyond immediate experiences to consider long-term impacts. This includes supporting education and apprenticeship programs that ensure traditional knowledge is passed to future generations.
                </p>
                <p>
                  Consider following up on your travels by sharing accurate information about the cultural traditions you experienced, supporting relevant cultural organizations, or maintaining connections with the communities you visited. These actions help build ongoing support for cultural preservation.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Call to Action */}
        <div className="bg-india-saffron/10 border border-india-saffron/20 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Become a Responsible Cultural Traveler</h3>
          <p className="mb-4 max-w-2xl mx-auto">
            By following these principles, you can help ensure that India's rich artistic traditions continue to thrive for generations to come while enjoying more meaningful travel experiences.
          </p>
          <div className="inline-flex items-center gap-2 text-india-blue">
            <Book size={18} />
            <span className="font-medium">Learn. Respect. Preserve.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResponsibleTourismPage;
