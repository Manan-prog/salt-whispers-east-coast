import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skull, DollarSign, Home, Sprout } from "lucide-react";
import healthyMarsh from "@/assets/healthy-marsh.jpg";
import damagedMarsh from "@/assets/damaged-marsh.jpg";

export const Consequences = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Devastating Consequences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Saltwater intrusion creates a cascade of environmental, economic, and social impacts 
              that affect entire coastal communities and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={healthyMarsh} 
                  alt="Healthy coastal marsh ecosystem"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-seafoam text-ocean-deep">
                  Healthy Ecosystem
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Before Saltwater Intrusion</h3>
                <p className="text-sm text-muted-foreground">
                  Thriving marsh ecosystems with diverse vegetation, wildlife habitats, 
                  and natural storm protection capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={damagedMarsh} 
                  alt="Damaged marsh affected by saltwater intrusion"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  Salt-Damaged
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">After Saltwater Intrusion</h3>
                <p className="text-sm text-muted-foreground">
                  Dead and dying vegetation, soil degradation, and loss of critical 
                  ecosystem services that protect coastal communities.
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="environmental" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
              <TabsTrigger value="economic">Economic</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="agricultural">Agricultural</TabsTrigger>
            </TabsList>
            
            <TabsContent value="environmental" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Skull className="text-destructive" size={28} />
                    <h3 className="text-2xl font-bold">Environmental Devastation</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Ecosystem Collapse</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Complete die-off of salt-sensitive vegetation</li>
                        <li>• Loss of critical wildlife habitats</li>
                        <li>• Disruption of food chains and migration patterns</li>
                        <li>• Soil acidification and nutrient depletion</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Long-term Damage</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Permanent changes to soil chemistry</li>
                        <li>• Increased coastal erosion vulnerability</li>
                        <li>• Loss of natural storm barriers</li>
                        <li>• Reduced carbon sequestration capacity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="economic" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <DollarSign className="text-coral" size={28} />
                    <h3 className="text-2xl font-bold">Economic Losses</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-warning text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                        $27B+
                      </div>
                      <h4 className="font-semibold mb-2">Annual Agricultural Losses</h4>
                      <p className="text-sm text-muted-foreground">
                        Crop damage and farmland abandonment due to soil salinization globally
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-ocean-medium text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                        $20-40B/year
                      </div>
                      <h4 className="font-semibold mb-2">Infrastructure Costs</h4>
                      <p className="text-sm text-muted-foreground">
                        Projected annual spending on seawalls, relocation, and flood protection in vulnerable regions
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-destructive text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                        $23B/year
                      </div>
                      <h4 className="font-semibold mb-2">Ecosystem Services Lost</h4>
                      <p className="text-sm text-muted-foreground">
                        Value of lost coastal flood protection from wetlands and mangroves in the U.S. alone
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Home className="text-ocean-medium" size={28} />
                    <h3 className="text-2xl font-bold">Community Impact</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Immediate Effects</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Contaminated drinking water supplies
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Increased flooding and storm damage
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Loss of recreational areas and tourism
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Health impacts from poor water quality
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Long-term Displacement</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Forced migration from coastal areas
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Loss of cultural heritage sites
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Economic hardship for fishing communities
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          Environmental justice concerns
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="agricultural" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Sprout className="text-seafoam" size={28} />
                    <h3 className="text-2xl font-bold">Agricultural Devastation</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Crop Failure</h4>
                        <p className="text-sm text-muted-foreground">
                          Most crops cannot tolerate even low levels of soil salinity, 
                          leading to reduced yields or complete crop failure.
                        </p>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Soil Degradation</h4>
                        <p className="text-sm text-muted-foreground">
                          Salt accumulation destroys soil structure and reduces 
                          water infiltration, making land unsuitable for farming.
                        </p>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Economic Ruin</h4>
                        <p className="text-sm text-muted-foreground">
                          Farmers face bankruptcy as productive farmland becomes 
                          worthless, affecting food security and rural economies.
                        </p>
                      </div>
                    </div>
                    
{/*                     <div className="bg-gradient-to-r from-destructive/10 to-coral/10 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Critical Agriculture Zones at Risk</h4>
                      <p className="text-muted-foreground mb-4">
                        Major agricultural regions along the East Coast are experiencing unprecedented 
                        levels of saltwater intrusion, threatening food production for millions.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Delaware:</span>
                          <br />Soybean farms
                        </div>
                        <div>
                          <span className="font-medium">Maryland:</span>
                          <br />Corn production
                        </div>
                        <div>
                          <span className="font-medium">Virginia:</span>
                          <br />Vegetable crops
                        </div>
                        <div>
                          <span className="font-medium">N. Carolina:</span>
                          <br />Sweet potatoes
                        </div>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
