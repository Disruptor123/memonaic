
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, gradient, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`bg-gradient-to-br ${gradient} border-0 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 transform animate-pulse hover:animate-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} group`}>
      <CardContent className="p-8 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
          <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/15 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
        </div>

        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-r from-white/30 to-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">{title}</h3>
          <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
