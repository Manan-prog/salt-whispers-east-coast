import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, AlertTriangle } from "lucide-react";

export const EastCoastImpact = () => {
  const researchFindings = [
    {
      metric: "Study Area",
      value: ">15,000 km²",
      description: "Comprehensive coverage across 14 coastal counties in the Delmarva Peninsula"
    },
    {
      metric: "Spatial Resolution",
      value: "10 meters",
      description: "High-resolution Sentinel-2 imagery for precise salt patch detection"
    },
    {
      metric: "Temporal Resolution",
      value: "5 days",
      description: "Frequent monitoring capabilities using satellite technology"
    },
    {
      metric: "Research Focus",
      value: "DE, MD, VA",
      description: "Delaware, Maryland, and Virginia coastal counties analysis"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Delmarva Peninsula Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive study spans 14 coastal counties across Delaware, Maryland, and Virginia, 
              using cutting-edge satellite technology to map saltwater intrusion impacts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {researchFindings.map((finding, index) => (
              <Card key={index} className="hover:shadow-ocean transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-ocean-medium" size={20} />
                    <CardTitle className="text-lg">{finding.metric}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-coral" size={16} />
                    <span className="text-sm font-medium text-coral">{finding.value}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{finding.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-ocean-deep/10 to-ocean-medium/10 border-ocean-light/30">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Research Methodology</h3>
                  <p className="text-muted-foreground mb-6">
                    Our study employs spectral unmixing of Sentinel-2 imagery with Random Forest 
                    classification to map salt patches and marshes without relying on 
                    field-derived soil salinity values.
                  </p>
                  
                   <div className="space-y-4">
                     <div className="flex items-center gap-3">
                       <TrendingUp className="text-coral" size={20} />
                       <span className="text-sm">
                         <strong>Spectral Unmixing:</strong> Advanced technique to address mixed pixel limitations
                       </span>
                     </div>
                     <div className="flex items-center gap-3">
                       <TrendingUp className="text-coral" size={20} />
                       <span className="text-sm">
                         <strong>Novel Indices:</strong> Two new salinity indices developed for enhanced detection
                       </span>
                     </div>
                     <div className="flex items-center gap-3">
                       <TrendingUp className="text-coral" size={20} />
                       <span className="text-sm">
                         <strong>Random Forest:</strong> Machine learning classifier for accurate mapping
                       </span>
                     </div>
                   </div>
                </div>
                
{/*                 <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold mb-4 text-center">Study Region Coverage</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Delaware Counties</span>
                      <div className="bg-ocean-medium w-16 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maryland Counties</span>
                      <div className="bg-coral w-14 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Virginia Counties</span>
                      <div className="bg-destructive w-12 h-2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Area</span>
                      <div className="bg-ocean-deep w-18 h-2 rounded-full"></div>
                    </div>
                  </div>
                </div> */}
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold mb-4 text-center">Spectral Unmixing Concept</h4>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/assets/Spectral-Unmixing-Graphic.jpg" 
                      alt="Spectral Unmixing Diagram"
                      className="rounded-lg shadow-md mb-3 w-full max-w-md"
                    />
                    <p className="text-sm text-center text-muted-foreground">
                      Spectral unmixing of a mixed pixel with randomly arranged multiple endmembers (land cover classes) 
                      reveals individual pure endmembers' reflectance, deconvoluted based on their fractions α₁, α₂, α₃, α₄ within the pixel area.
                    </p>
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
