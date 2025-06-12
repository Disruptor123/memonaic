
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, FileText, Coins, Users, Upload, Download, Wallet, TrendingUp, ShoppingCart } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalEarnings: "2,485.67",
    datasetsUploaded: 23,
    totalDownloads: 1247,
    stakedAmount: "1,250.00",
    yieldEarned: "156.25"
  });

  useEffect(() => {
    // Update earnings from localStorage
    const totalEarnings = localStorage.getItem('totalEarnings');
    if (totalEarnings) {
      setStats(prev => ({ ...prev, totalEarnings }));
    }
  }, []);

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked");
  };

  const handleBuyTokens = () => {
    console.log("Buy tokens clicked");
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
              <Button 
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalEarnings} MEMO</div>
              <p className="text-green-400 text-sm">+12.5% this month</p>
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
              <p className="text-green-400 text-sm">+3 this week</p>
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
              <p className="text-green-400 text-sm">+89 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 border-purple-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Staked MEMO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.stakedAmount}</div>
              <p className="text-purple-400 text-sm">12% APY</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-800/60 to-green-900/60 border-green-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Yield Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.yieldEarned}</div>
              <p className="text-green-400 text-sm">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Stake & Yield Section */}
        <Card className="bg-gradient-to-br from-purple-900/80 to-purple-800/80 border-purple-500/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Stake & Yield
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stats.stakedAmount}</div>
                <p className="text-gray-300">Total Staked</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">12%</div>
                <p className="text-gray-300">Current APY</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.yieldEarned}</div>
                <p className="text-gray-300">Rewards Earned</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Stake Tokens
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
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
