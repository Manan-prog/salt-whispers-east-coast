import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/saltwater-intrusion-hero.jpg";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('what-is-saltwater-intrusion')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-medium/60 to-background/90" />
      </div>
      
      {/* Animated wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-seafoam/20 animate-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Revolutionizing Saltwater Intrusion Monitoring in Coastal Landscapes
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up delay-200">
          🌊 Why Saltwater Intrusion Threatens Us All
        </p>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-400">
          Rising sea levels and climate change are accelerating coastal saltwater intrusion, damaging farms, 
          wetlands, and communities. Traditional soil testing is time-intensive and costly—discover our revolutionary 
          satellite-based solution offering instant, high-resolution insights.
        </p>
        
{/*         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
          <Button 
            size="lg" 
            onClick={scrollToContent}
            className="bg-coral hover:bg-coral/90 text-white shadow-coral px-8 py-3 text-lg"
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://manan-prog.github.io/Delmarva-Marsh-Viewer/', '_blank')}
            className="border-primary-foreground text-primary-foreground text-black hover:bg-primary-foreground hover:text-ocean-deep px-8 py-3 text-lg"
          >
            Visualize Research Data
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://zenodo.org/records/15866496', '_blank')}
            className="border-primary-foreground text-primary-foreground text-black hover:bg-primary-foreground hover:text-ocean-deep px-8 py-3 text-lg"
          >
            Download Research Data
          </Button>
        </div> */}
        <div className="flex flex-col items-center animate-fade-in-up delay-600">
  {/* First row: Learn More button */}
        <div className="mb-4">
          <Button 
            size="lg" 
            onClick={scrollToContent}
            className="bg-coral hover:bg-coral/90 text-white shadow-coral px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>
      
        {/* Second row: Visualize and Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://manan-prog.github.io/Delmarva-Marsh-Viewer/', '_blank')}
            className="border-primary-foreground text-primary-foreground text-black hover:bg-primary-foreground hover:text-ocean-deep px-8 py-3 text-lg"
          >
            Visualize Research Data
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://zenodo.org/records/15866496', '_blank')}
            className="border-primary-foreground text-primary-foreground text-black hover:bg-primary-foreground hover:text-ocean-deep px-8 py-3 text-lg"
          >
            Download Research Data
          </Button>
        </div>

      </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={scrollToContent}
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
