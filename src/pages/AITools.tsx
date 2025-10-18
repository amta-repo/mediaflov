import { useState } from "react";
import { Sparkles, Wand2, Image, Video, Maximize, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";
import { WaitlistModal } from "@/components/WaitlistModal";

const AITools = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const aiTools = [
    {
      title: "AI Image Generator",
      description: "Generate stunning images from text prompts using advanced AI",
      icon: Wand2,
      href: "/tools/ai-image-generator",
      badge: "HOT",
    },
    {
      title: "AI Portrait Generator",
      description: "Create impressive portraits using AI technology",
      icon: Users,
      href: "/tools/ai-portrait-generator",
    },
    {
      title: "AI Story Generator",
      description: "Turn stories into videos with AI-generated visuals and narration",
      icon: Video,
      href: "/tools/ai-story-generator",
      badge: "NEW",
    },
    {
      title: "AI Image Enhancer",
      description: "Enhance images with AI for improved quality and detail",
      icon: Sparkles,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "AI Image Upscaler",
      description: "Upscale images with AI for better resolution and clarity",
      icon: Maximize,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "AI Image Restorer",
      description: "Restore old or damaged images using AI",
      icon: Image,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "AI Colorizer",
      description: "Add color to black and white photos with AI",
      icon: Palette,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "AI Text to Video",
      description: "Create videos from text prompts using AI",
      icon: Video,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onGetStarted={() => setWaitlistOpen(true)} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered Tools</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Advanced <span className="gradient-text">AI</span> Creative Tools
              </h1>
              <p className="text-xl text-muted-foreground">
                Harness the power of artificial intelligence to create, enhance, and transform your media.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 mb-12">
          <AdSpace slot="ai-tools-top" height="120px" />
        </div>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad Space */}
        <div className="container mx-auto px-4 my-12">
          <AdSpace slot="ai-tools-bottom" />
        </div>
      </main>

      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default AITools;
