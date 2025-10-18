import { Video, Scissors, FileVideo, Sparkles, Merge, SplitSquareVertical, Music, Zap, Eraser } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";

const VideoTools = () => {
  const videoTools = [
    {
      title: "AI Story Generator",
      description: "Turn your stories into stunning videos with AI-generated visuals and narration",
      icon: Sparkles,
      href: "/tools/ai-story-generator",
      badge: "NEW",
    },
    {
      title: "Video Background Removal",
      description: "Remove backgrounds from videos with precision",
      icon: Eraser,
      href: "/tools/video-remove-background",
    },
    {
      title: "Compress Video/GIF",
      description: "Compress videos and GIFs without losing quality",
      icon: FileVideo,
      href: "/tools/compress-video",
    },
    {
      title: "Trim Video",
      description: "Shorten videos to your preferred length",
      icon: Scissors,
      href: "/tools/trim-video",
    },
    {
      title: "Resize Video",
      description: "Change video dimensions as required",
      icon: Video,
      href: "/tools/resize-video",
    },
    {
      title: "Merge Video",
      description: "Combine several videos into one file",
      icon: Merge,
      href: "/tools/merge-video",
    },
    {
      title: "Split Video",
      description: "Divide videos into multiple segments",
      icon: SplitSquareVertical,
      href: "/tools/split-video",
    },
    {
      title: "Video to Audio",
      description: "Extract audio from video files",
      icon: Music,
      href: "/tools/video-to-audio",
    },
    {
      title: "Video Audio Mixer",
      description: "Add or mix audio tracks with your videos",
      icon: Music,
      href: "/tools/audio-mixer",
    },
    {
      title: "Speed Up Video",
      description: "Increase video playback speed",
      icon: Zap,
      href: "/tools/speed-video",
    },
    {
      title: "Blur Video",
      description: "Apply blur effects to videos",
      icon: Video,
      href: "/tools/blur-video",
    },
    {
      title: "Watermark Remover",
      description: "Remove watermarks from videos",
      icon: Eraser,
      href: "/tools/video-watermark-remover",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Video className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Video Tools</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Professional <span className="gradient-text">Video</span> Editing
              </h1>
              <p className="text-xl text-muted-foreground">
                Robust tools for editing and processing videos and GIFs. All in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 mb-12">
          <AdSpace slot="video-tools-top" height="120px" />
        </div>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad Space */}
        <div className="container mx-auto px-4 my-12">
          <AdSpace slot="video-tools-bottom" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideoTools;
