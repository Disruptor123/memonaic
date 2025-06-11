
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Home, Upload, ShoppingCart, Coins, Users, LogOut, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/data-submission", label: "Data Submission", icon: Upload },
    { path: "/marketplace", label: "Marketplace", icon: ShoppingCart },
    { path: "/earnings", label: "Earnings", icon: Coins },
    { path: "/governance", label: "DAO Governance", icon: Users },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const handleLogout = () => {
    // Clear any stored user data (if any)
    localStorage.clear();
    sessionStorage.clear();
    
    // Show logout success message
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of Memonaic.",
    });
    
    // Redirect to home page
    navigate("/");
  };

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-red-500/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Memonaic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-red-500/20 text-red-400"
                      : "text-gray-300 hover:text-red-400 hover:bg-red-500/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-red-500 text-red-300 hover:bg-red-500/10"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500/30">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors mb-2 ${
                    isActive
                      ? "bg-red-500/20 text-red-400"
                      : "text-gray-300 hover:text-red-400 hover:bg-red-500/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Button 
              variant="outline" 
              size="sm" 
              className="border-red-500 text-red-300 hover:bg-red-500/10 mt-4"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
