import { Card, CardContent } from "@/components/ui/card";
import { Waves, ArrowRight, Droplets } from "lucide-react";
import intrusionDiagram from "@/assets/swi-intrusion.jpg";

export const WhatIsSaltwaterIntrusion = () => {
  return (
    <section id="what-is-saltwater-intrusion" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What is Saltwater Intrusion?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A combined effect of sea level rise, coastal storm surges, land subsidence, drought, and 
              excessive groundwater pumping. Climate change is intensifying these drivers, posing a critical 
              threat to coastal ecosystems and agricultural production.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src={intrusionDiagram} 
                alt="Saltwater intrusion diagram showing underground aquifer contamination"
                className="w-full rounded-xl shadow-ocean"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-medium/20 p-3 rounded-lg">
                  <Waves className="text-ocean-medium" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Natural Process Accelerated</h3>
                  <p className="text-muted-foreground">
                    While saltwater intrusion occurs naturally at the interface between 
                    fresh and saltwater, climate change and human activities have dramatically 
                    accelerated this process.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coral/20 p-3 rounded-lg">
                  <ArrowRight className="text-coral" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Pathways</h3>
                  <p className="text-muted-foreground">
                    Saltwater can intrude through groundwater aquifers, surface water channels, 
                    and even through soil during storm surges and high tides.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-seafoam/20 p-3 rounded-lg">
                  <Droplets className="text-ocean-deep" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agricultural & Ecosystem Impact</h3>
                  <p className="text-muted-foreground">
                    Leads to farmland degradation, reduced crop yields, ghost forest expansion, 
                    and conversion of productive farmlands into marshes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-none shadow-ocean">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-gradient-ocean text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3x
                  </div>
                  <h4 className="font-semibold mb-2">Acceleration Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    Climate change has tripled the rate of saltwater intrusion in many coastal areas
                  </p>
                </div>
                
                <div>
                  <div className="bg-gradient-warning text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    40%
                  </div>
                  <h4 className="font-semibold mb-2">Population at Risk</h4>
                  <p className="text-sm text-muted-foreground">
                    Of the US population lives in coastal counties vulnerable to saltwater intrusion
                  </p>
                </div>
                
                <div>
                  <div className="bg-ocean-light text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    $
                  </div>
                  <h4 className="font-semibold mb-2">Economic Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Billions in damages to agriculture, infrastructure, and ecosystem services
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
