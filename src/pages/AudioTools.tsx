import { useState } from "react";
import { Music, Volume2, FileAudio, Mic, Podcast } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdSpace from "@/components/AdSpace";
import { WaitlistModal } from "@/components/WaitlistModal";

const AudioTools = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const audioTools = [
    {
      title: "Text to Speech",
      description: "Convert text into natural-sounding speech",
      icon: Volume2,
      href: "/tools/text-to-speech",
    },
    {
      title: "Video to Audio",
      description: "Extract audio from video files",
      icon: Music,
      href: "/tools/video-to-audio",
    },
    {
      title: "Compress Audio",
      description: "Reduce audio file size while maintaining quality",
      icon: FileAudio,
      href: "/tools/compress-audio",
    },
    {
      title: "Audio Converter",
      description: "Convert between different audio formats",
      icon: FileAudio,
      href: "/tools/convert-audio",
    },
    {
      title: "Audio Trimmer",
      description: "Cut and trim audio files with precision",
      icon: Music,
      href: "/tools/trim-audio",
    },
    {
      title: "Audio to Text",
      description: "Transcribe audio files to text using AI",
      icon: Mic,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "Voice Changer",
      description: "Modify your voice with various effects",
      icon: Podcast,
      href: "#",
      comingSoon: true,
      badge: "Coming Soon",
    },
    {
      title: "Audio Merger",
      description: "Combine multiple audio files into one",
      icon: Music,
      href: "/tools/merge-audio",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onGetStarted={() => setWaitlistOpen(true)} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <Music className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Audio Tools</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Professional <span className="gradient-text">Audio</span> Tools
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete suite of audio editing and conversion tools. Fast and secure.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 mb-12">
          <AdSpace slot="audio-tools-top" height="120px" />
        </div>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad Space */}
        <div className="container mx-auto px-4 my-12">
          <AdSpace slot="audio-tools-bottom" />
        </div>
      </main>

      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default AudioTools;
