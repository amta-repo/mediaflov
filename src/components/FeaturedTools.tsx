import { Wand2, Video, ImageIcon, Sparkles, Scissors, FileImage } from "lucide-react";
import ToolCard from "./ToolCard";

const FeaturedTools = () => {
  const featuredTools = [
    {
      title: "AI Image Generator",
      description: "Create stunning images from text prompts using advanced AI technology",
      icon: Wand2,
      href: "/tools/ai-image-generator",
      badge: "HOT",
    },
    {
      title: "Background Removal",
      description: "Effortlessly remove or replace backgrounds from images and GIFs",
      icon: ImageIcon,
      href: "/tools/remove-background",
      badge: "POPULAR",
    },
    {
      title: "AI Story Generator",
      description: "Turn your stories into stunning videos with AI-generated visuals and narration",
      icon: Video,
      href: "/tools/ai-story-generator",
      badge: "NEW",
    },
    {
      title: "Video Background Removal",
      description: "Remove backgrounds from videos with precision and ease",
      icon: Video,
      href: "/tools/video-remove-background",
    },
    {
      title: "Compress Image",
      description: "Minimize image file sizes while preserving quality",
      icon: FileImage,
      href: "/tools/compress-image",
    },
    {
      title: "Trim Video",
      description: "Shorten videos to your preferred length with precision",
      icon: Scissors,
      href: "/tools/trim-video",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Most Popular</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful multimedia tools at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
