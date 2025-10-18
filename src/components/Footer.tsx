import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t glass-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">MediaFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional multimedia tools for everyone. Free, secure, and browser-based.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold">Image Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/remove-background" className="text-muted-foreground hover:text-primary transition-colors">Background Removal</Link></li>
              <li><Link to="/tools/compress-image" className="text-muted-foreground hover:text-primary transition-colors">Compress Image</Link></li>
              <li><Link to="/tools/resize-image" className="text-muted-foreground hover:text-primary transition-colors">Resize Image</Link></li>
              <li><Link to="/tools/convert-image" className="text-muted-foreground hover:text-primary transition-colors">Convert Format</Link></li>
            </ul>
          </div>

          {/* Video Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold">Video Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/trim-video" className="text-muted-foreground hover:text-primary transition-colors">Trim Video</Link></li>
              <li><Link to="/tools/compress-video" className="text-muted-foreground hover:text-primary transition-colors">Compress Video</Link></li>
              <li><Link to="/tools/merge-video" className="text-muted-foreground hover:text-primary transition-colors">Merge Videos</Link></li>
              <li><Link to="/tools/video-to-audio" className="text-muted-foreground hover:text-primary transition-colors">Video to Audio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MediaFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
