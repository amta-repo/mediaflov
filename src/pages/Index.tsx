import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedTools from "@/components/FeaturedTools";
import ToolCategories from "@/components/ToolCategories";
import AdSpace from "@/components/AdSpace";
import Footer from "@/components/Footer";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock } from "lucide-react";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={() => setWaitlistOpen(true)} />
      <Hero onGetStarted={() => setWaitlistOpen(true)} />
      
      {/* Top Ad Space */}
      <div className="container mx-auto px-4 my-12">
        <AdSpace slot="home-top" height="120px" />
      </div>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 glass-card text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                All processing happens directly in your browser for instant results
              </p>
            </Card>

            <Card className="p-8 glass-card text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">100% Secure</h3>
              <p className="text-muted-foreground">
                Your files never leave your device. Complete privacy guaranteed
              </p>
            </Card>

            <Card className="p-8 glass-card text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">No Account Needed</h3>
              <p className="text-muted-foreground">
                Start using our tools immediately without any registration
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FeaturedTools />
      
      {/* Middle Ad Space */}
      <div className="container mx-auto px-4 my-12">
        <AdSpace slot="home-middle" />
      </div>

      <ToolCategories />

      {/* Bottom Ad Space */}
      <div className="container mx-auto px-4 my-12">
        <AdSpace slot="home-bottom" />
      </div>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full gradient-primary opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <Card className="p-12 glass-card text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to transform your media?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of creators using MediaFlow to edit and enhance their content
            </p>
            <button 
              onClick={() => setWaitlistOpen(true)}
              className="px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 animate-glow"
            >
              Get Started for Free
            </button>
          </Card>
        </div>
      </section>

      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
