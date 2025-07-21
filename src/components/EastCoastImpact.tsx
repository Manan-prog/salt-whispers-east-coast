import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, AlertTriangle } from "lucide-react";

export const EastCoastImpact = () => {
  const affectedAreas = [
    {
      region: "Delmarva Peninsula",
      impact: "Severe marsh loss",
      description: "Extensive saltwater intrusion affecting critical bird habitats and coastal protection"
    },
    {
      region: "Chesapeake Bay",
      impact: "Agricultural damage",
      description: "Farmland contamination threatening food security and rural economies"
    },
    {
      region: "North Carolina Outer Banks",
      impact: "Infrastructure threats",
      description: "Road systems and freshwater supplies at risk from rising seas"
    },
    {
      region: "South Florida Everglades",
      impact: "Ecosystem collapse risk",
      description: "Unique wetland habitats facing unprecedented salinity levels"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Impact on the East Coast
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The U.S. East Coast is particularly vulnerable to saltwater intrusion due to 
              its low-lying topography, dense population, and extensive coastal development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {affectedAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-ocean transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-ocean-medium" size={20} />
                    <CardTitle className="text-lg">{area.region}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-coral" size={16} />
                    <span className="text-sm font-medium text-coral">{area.impact}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-ocean-deep/10 to-ocean-medium/10 border-ocean-light/30">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Rising Threat Levels</h3>
                  <p className="text-muted-foreground mb-6">
                    Sea level rise along the East Coast is accelerating, with some areas 
                    experiencing rates twice the global average. This creates a perfect 
                    storm for saltwater intrusion.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-coral" size={20} />
                      <span className="text-sm">
                        <strong>12 inches:</strong> Average sea level rise expected by 2050
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-coral" size={20} />
                      <span className="text-sm">
                        <strong>2-3 feet:</strong> Projected rise by 2100 in vulnerable areas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-coral" size={20} />
                      <span className="text-sm">
                        <strong>Accelerating:</strong> Rate of intrusion increasing each decade
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold mb-4 text-center">Most Vulnerable Coastlines</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Delaware Bay</span>
                      <div className="bg-destructive w-16 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chesapeake Bay</span>
                      <div className="bg-coral w-14 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">North Carolina</span>
                      <div className="bg-coral w-12 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">South Carolina</span>
                      <div className="bg-ocean-medium w-10 h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};