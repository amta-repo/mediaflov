import { ImageIcon, Video, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToolCategories = () => {
  const categories = [
    {
      title: "Image Tools",
      description: "Comprehensive editing tools for images and GIFs",
      icon: ImageIcon,
      count: "15+ Tools",
      href: "/image-tools",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Video Tools",
      description: "Robust tools for editing and processing videos",
      icon: Video,
      count: "12+ Tools",
      href: "/video-tools",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Audio Tools",
      description: "Professional audio editing and conversion tools",
      icon: Music,
      count: "8+ Tools",
      href: "/audio-tools",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Tools",
      description: "Advanced AI-powered creative tools",
      icon: Sparkles,
      count: "10+ Tools",
      href: "/ai-tools",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">All Tools by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete suite of multimedia tools organized by type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.title} to={category.href}>
              <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300 group hover:scale-105 cursor-pointer h-full">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:animate-glow`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="text-sm font-medium text-primary">{category.count}</p>
                  </div>

                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Explore {category.title}
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCategories;
