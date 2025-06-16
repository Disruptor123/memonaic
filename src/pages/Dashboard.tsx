
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, FileText, Coins, Users, Upload, Download, Wallet, ShoppingCart } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ConnectButton} from '@avalabs/builderkit';


const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalEarnings: "0",
    datasetsUploaded: 0,
    totalDownloads: 0
  });

  useEffect(() => {
    // Load live data from localStorage
    const totalEarnings = localStorage.getItem('totalEarnings') || '0';
    const datasetsUploaded = parseInt(localStorage.getItem('datasetsUploaded') || '0');
    const totalDownloads = parseInt(localStorage.getItem('totalDownloads') || '0');
    
    setStats({
      totalEarnings,
      datasetsUploaded,
      totalDownloads
    });
  }, []);
  const handleBuyTokens = () => {
    // Simulate buying 100 MEMO tokens
    const currentEarnings = parseFloat(localStorage.getItem('totalEarnings') || '0');
    const newEarnings = currentEarnings + 100;
    localStorage.setItem('totalEarnings', newEarnings.toString());
    
    setStats(prev => ({ 
      ...prev, 
      totalEarnings: newEarnings.toString() 
    }));
    
    toast({
      title: "Tokens Purchased!",
      description: "Successfully purchased 100 MEMO tokens.",
    });
  };

  const handleStakeTokens = () => {
    toast({
      title: "Stake Tokens",
      description: "Token staking feature will be available soon.",
    });
  };

  const handleUnstakeTokens = () => {
    toast({
      title: "Unstake Tokens",
      description: "Token unstaking feature will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                Memonaic Dashboard
              </h1>
              <p className="text-gray-300">Manage your AI datasets, research papers, and earnings</p>
            </div>
            <div className="flex gap-4">
             <ConnectButton 
                showConnectedWallet={true}
                checkWrongNetwork={true}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
              />
              <Button 
                onClick={handleBuyTokens}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy MEMO
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalEarnings} MEMO</div>
              <p className="text-gray-400 text-sm">Live balance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Datasets Uploaded
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.datasetsUploaded}</div>
              <p className="text-gray-400 text-sm">Your contributions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Download className="h-5 w-5" />
                Total Downloads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalDownloads}</div>
              <p className="text-gray-400 text-sm">Your dataset downloads</p>
            </CardContent>
          </Card>
        </div>

        {/* Stake & Token Management */}
        <Card className="bg-gradient-to-br from-purple-900/80 to-purple-800/80 border-purple-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Token Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleStakeTokens}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Stake Tokens
              </Button>
              <Button 
                onClick={handleUnstakeTokens}
                variant="outline" 
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                Unstake
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/data-submission')}
          >
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Upload Dataset</h3>
              <p className="text-gray-300 text-sm">Contribute AI training data</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/marketplace')}
          >
            <CardContent className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Browse Marketplace</h3>
              <p className="text-gray-300 text-sm">Discover verified datasets</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/data-submission')}
          >
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Publish Research</h3>
              <p className="text-gray-300 text-sm">Submit scientific papers</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/governance')}
          >
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">DAO Governance</h3>
              <p className="text-gray-300 text-sm">Participate in voting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
