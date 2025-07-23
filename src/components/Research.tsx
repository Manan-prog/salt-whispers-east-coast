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
               🛰️ Cutting-Edge Satellite Technology
             </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Revolutionary satellite monitoring combines free Sentinel-2 imagery, machine learning algorithms, 
               and innovative spectral indices to detect salt-affected areas with unprecedented precision and speed.
             </p>
           </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <Badge className="bg-ocean-medium text-white mb-4">
                  Published Research
                </Badge>
                 <h3 className="text-3xl font-bold mb-4">
                   Precise Mapping & Real-Time Tracking
                 </h3>
                 <p className="text-muted-foreground text-lg mb-6">
                   Using free Sentinel-2 satellite data updated every 5 days at 10-meter resolution, combined with 
                   Random Forest machine learning algorithms and two newly developed spectral indices, we achieve 
                   near-perfect accuracy in mapping salt patches and tracking their expansion over time.
                 </p>
              </div>

              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <Satellite className="text-ocean-medium mt-1" size={20} />
                   <div>
                     <h4 className="font-semibold">Smart Indices for Salt Detection</h4>
                     <p className="text-sm text-muted-foreground">
                       Two newly developed spectral indices precisely identify salt patches from space, uncovering hidden salt-affected areas
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start gap-3">
                   <BarChart3 className="text-ocean-medium mt-1" size={20} />
                   <div>
                     <h4 className="font-semibold">Machine Learning Power</h4>
                     <p className="text-sm text-muted-foreground">
                       Random Forest algorithms analyze complex spectral data to reveal patterns invisible to traditional methods
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start gap-3">
                   <Calendar className="text-ocean-medium mt-1" size={20} />
                   <div>
                     <h4 className="font-semibold">Dynamic Monitoring</h4>
                     <p className="text-sm text-muted-foreground">
                       Detect and monitor land salinity shifts quickly with 5-day update cycles, enabling rapid response
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
                   Every 5-day satellite updates at 10-meter resolution provide real-time insights 
                   for farmers, land managers, and policymakers to make informed decisions.
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
                   Machine learning models trained on diverse datasets can predict salt intrusion 
                   patterns and guide sustainable land-use planning worldwide.
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
                   Combines open satellite data and machine learning to provide accessible, 
                   high-frequency land health reports for communities worldwide.
                 </p>
               </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-ocean-deep/5 to-ocean-medium/5 border-ocean-light/30">
            <CardContent className="p-8 text-center">
               <h3 className="text-2xl font-bold mb-4"> A New Era in Coastal Landscape Monitoring</h3>
               <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                 This innovative approach combines open satellite data and machine learning to provide detailed, 
                 high-frequency land health reports. It empowers local decision-makers with vital, timely information 
                 to safeguard agriculture, ecosystems, and livelihoods amid climate challenges.
               </p>
{/*               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
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
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
