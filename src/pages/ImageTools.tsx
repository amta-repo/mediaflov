import { useState } from "react";
import { ImageIcon, Wand2, Crop, Scissors, FileImage, ScanText, Eraser, Sparkles, Maximize, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";
import { WaitlistModal } from "@/components/WaitlistModal";

const ImageTools = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const imageTools = [
    {
      title: "Background Removal",
      description: "Effortlessly remove or replace backgrounds from images and GIFs",
      icon: Eraser,
      href: "/tools/remove-background",
    },
    {
      title: "AI Image Generator",
      description: "Generate stunning images or enhance existing ones using AI",
      icon: Wand2,
      href: "/tools/ai-image-generator",
    },
    {
      title: "AI Portrait Generator",
      description: "Create impressive portraits using AI technology",
      icon: Sparkles,
      href: "/tools/ai-portrait-generator",
    },
    {
      title: "Compress Image",
      description: "Minimize image and GIF file sizes while preserving quality",
      icon: FileImage,
      href: "/tools/compress-image",
    },
    {
      title: "Resize Image",
      description: "Adjust image and GIF dimensions as needed",
      icon: Maximize,
      href: "/tools/resize-image",
    },
    {
      title: "Crop Image",
      description: "Precisely crop images and GIFs",
      icon: Crop,
      href: "/tools/crop-image",
    },
    {
      title: "Convert Image Format",
      description: "Change image and GIF formats effortlessly",
      icon: Image,
      href: "/tools/convert-image",
    },
    {
      title: "Image to Text",
      description: "Extract text content from images using OCR",
      icon: ScanText,
      href: "/tools/image-to-text",
    },
    {
      title: "Blur Image",
      description: "Apply blur effects to images and GIFs",
      icon: ImageIcon,
      href: "/tools/blur-image",
    },
    {
      title: "Watermark Remover",
      description: "Remove watermarks from images and GIFs",
      icon: Eraser,
      href: "/tools/watermark-remover",
    },
    {
      title: "AI Image Upscaler",
      description: "Upscale images with AI for better resolution and clarity",
      icon: Maximize,
      href: "/tools/ai-upscaler",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "AI Image Enhancer",
      description: "Enhance images with AI for improved quality and detail",
      icon: Sparkles,
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
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <ImageIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Image Tools</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Powerful <span className="gradient-text">Image</span> Editing Tools
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive editing tools for images and GIFs. All processing happens in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 mb-12">
          <AdSpace slot="image-tools-top" height="120px" />
        </div>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad Space */}
        <div className="container mx-auto px-4 my-12">
          <AdSpace slot="image-tools-bottom" />
        </div>
      </main>

      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default ImageTools;
