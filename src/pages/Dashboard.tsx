
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, FileText, Coins, Users, TrendingUp, Upload, Download } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";

const Dashboard = () => {
  const [stats] = useState({
    totalEarnings: "2,485.67",
    datasetsUploaded: 23,
    verificationScore: 96,
    totalDownloads: 1247
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Memonaic Dashboard
          </h1>
          <p className="text-gray-300">Manage your AI datasets, research papers, and earnings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-black/40 to-gray-900/40 border-red-500/30">
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

          <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-500/30">
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

          <Card className="bg-gradient-to-br from-yellow-600/20 to-amber-600/20 border-yellow-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Verification Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.verificationScore}%</div>
              <p className="text-green-400 text-sm">Excellent rating</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
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
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Upload Dataset</h3>
              <p className="text-gray-300 text-sm">Contribute AI training data</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Database className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Browse Marketplace</h3>
              <p className="text-gray-300 text-sm">Discover verified datasets</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Publish Research</h3>
              <p className="text-gray-300 text-sm">Submit scientific papers</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300 cursor-pointer">
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
