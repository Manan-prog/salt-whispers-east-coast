import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About This Research</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                This website showcases cutting-edge research on saltwater intrusion 
                monitoring using advanced satellite remote sensing technologies.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://www.sciencedirect.com/science/article/abs/pii/S003442572500046X', '_blank')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ocean-deep"
              >
                <ExternalLink className="mr-2" size={14} />
                Read Full Paper
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Explore the Data</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Visit the interactive Delmarva Marsh Viewer to explore five years 
                of environmental monitoring data.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://manan-prog.github.io/Delmarva-Marsh-Viewer/', '_blank')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ocean-deep"
              >
                <ExternalLink className="mr-2" size={14} />
                View Data Viewer
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Take Action</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Learn how you can contribute to coastal conservation efforts 
                and stay informed about environmental changes in your area.
              </p>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full justify-start border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ocean-deep"
                >
                  <Mail className="mr-2" size={14} />
                  Contact Researcher
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60">
                © 2024 Saltwater Intrusion Research Project. Educational content for environmental awareness.
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-primary-foreground/80">
                  Published in Environmental Science & Policy
                </span>
                <span className="text-primary-foreground/80">
                  DOI: 10.1016/j.envsci.2025.xxx
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};