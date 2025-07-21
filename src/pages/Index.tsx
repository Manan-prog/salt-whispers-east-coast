import { Hero } from "@/components/Hero";
import { WhatIsSaltwaterIntrusion } from "@/components/WhatIsSaltwaterIntrusion";
import { EastCoastImpact } from "@/components/EastCoastImpact";
import { Consequences } from "@/components/Consequences";
import { Research } from "@/components/Research";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsSaltwaterIntrusion />
      <EastCoastImpact />
      <Consequences />
      <Research />
      <Footer />
    </div>
  );
};

export default Index;
