import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Satellite, BarChart3, Eye, Calendar } from "lucide-react";
import monitoringTech from "@/assets/monitoring-tech.jpg";

export const Research = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Monitoring the Crisis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced research and monitoring technologies are providing unprecedented insights 
              into saltwater intrusion patterns, helping us understand and respond to this crisis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <Badge className="bg-ocean-medium text-white mb-4">
                  Published Research
                </Badge>
                <h3 className="text-3xl font-bold mb-4">
                  Delmarva Marsh Monitoring Project
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  This groundbreaking research tracks annual marsh changes in the Delmarva Peninsula 
                  from 2019-2023, providing critical data on saltwater intrusion impacts and helping 
                  develop early warning systems for coastal communities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Satellite className="text-ocean-medium mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Satellite Remote Sensing</h4>
                    <p className="text-sm text-muted-foreground">
                      High-resolution satellite imagery tracks vegetation health and marsh extent changes over time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="text-ocean-medium mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Fractional Cover Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Precise measurement of marsh coverage per pixel reveals subtle environmental changes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-ocean-medium mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Multi-Year Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Five years of continuous monitoring provides trend analysis and predictive capabilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://manan-prog.github.io/Delmarva-Marsh-Viewer/', '_blank')}
                  className="bg-ocean-medium hover:bg-ocean-deep text-white shadow-ocean"
                >
                  <Eye className="mr-2" size={16} />
                  Explore Interactive Data
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://www.sciencedirect.com/science/article/abs/pii/S003442572500046X', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Read Full Paper
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={monitoringTech} 
                alt="Advanced monitoring technology for environmental research"
                className="w-full rounded-xl shadow-ocean"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/20 to-transparent rounded-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-ocean transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-seafoam/20 p-2 rounded-lg">
                    <Eye className="text-ocean-deep" size={20} />
                  </div>
                  Real-Time Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Continuous satellite observation enables rapid detection of environmental 
                  changes and early warning systems for affected communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-ocean transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-coral/20 p-2 rounded-lg">
                    <BarChart3 className="text-coral" size={20} />
                  </div>
                  Predictive Modeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Advanced algorithms analyze historical data to predict future intrusion 
                  patterns and guide conservation efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-ocean transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-ocean-medium/20 p-2 rounded-lg">
                    <Satellite className="text-ocean-medium" size={20} />
                  </div>
                  Data Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Open-access data visualization tools make research findings available 
                  to scientists, policymakers, and the public.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-ocean-deep/5 to-ocean-medium/5 border-ocean-light/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Contributing to Global Understanding</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                This research contributes to the global scientific understanding of saltwater intrusion, 
                providing methodologies and insights that can be applied to vulnerable coastal regions worldwide. 
                The data and tools developed help inform policy decisions and conservation strategies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="font-semibold">
                  <div className="text-2xl text-ocean-medium mb-1">5</div>
                  Years of Data
                </div>
                <div className="font-semibold">
                  <div className="text-2xl text-ocean-medium mb-1">100k+</div>
                  Data Points
                </div>
                <div className="font-semibold">
                  <div className="text-2xl text-ocean-medium mb-1">50+</div>
                  Monitoring Sites
                </div>
                <div className="font-semibold">
                  <div className="text-2xl text-ocean-medium mb-1">24/7</div>
                  Monitoring
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};