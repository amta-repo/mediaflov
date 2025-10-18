import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  comingSoon?: boolean;
}

const ToolCard = ({ title, description, icon: Icon, href, badge, comingSoon }: ToolCardProps) => {
  const content = (
    <Card className={`p-6 glass-card hover:shadow-lg transition-all duration-300 group ${comingSoon ? 'opacity-60' : 'hover:scale-105 cursor-pointer'}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:animate-glow">
            <Icon className="w-6 h-6 text-white" />
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
              {badge}
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );

  if (comingSoon) {
    return content;
  }

  return <Link to={href}>{content}</Link>;
};

export default ToolCard;
