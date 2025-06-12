
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, TrendingUp, Download, Eye, Calendar } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";

const Earnings = () => {
  const [timeframe, setTimeframe] = useState("month");
  const [earningsData, setEarningsData] = useState({
    total: "2485.67",
    monthly: "324.89",
    weekly: "78.45"
  });

  useEffect(() => {
    // Update earnings from localStorage
    const totalEarnings = localStorage.getItem('totalEarnings');
    if (totalEarnings) {
      setEarningsData(prev => ({ 
        ...prev, 
        total: totalEarnings,
        monthly: (parseFloat(totalEarnings) * 0.13).toFixed(2),
        weekly: (parseFloat(totalEarnings) * 0.032).toFixed(2)
      }));
    }
  }, []);

  const recentEarnings = [
    {
      id: 1,
      type: "Dataset Upload Reward",
      dataset: "AI Training Dataset",
      amount: "1560.00",
      date: new Date().toISOString().split('T')[0],
      status: "completed"
    },
    {
      id: 2,
      type: "Dataset Download",
      dataset: "Climate Research Data",
      amount: "25.50",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 3,
      type: "Verification Reward",
      dataset: "Medical Images Dataset",
      amount: "15.00",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: 4,
      type: "Royalty Payment",
      dataset: "NLP Training Data",
      amount: "45.75",
      date: "2024-01-13",
      status: "completed"
    }
  ];

  const topDatasets = [
    {
      name: "Large Language Model Dataset",
      earnings: "1560.00",
      downloads: 1,
      growth: "+100%"
    },
    {
      name: "Computer Vision Training Data",
      earnings: "234.56",
      downloads: 45,
      growth: "+8%"
    },
    {
      name: "Scientific Research Papers",
      earnings: "189.34",
      downloads: 67,
      growth: "+15%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Earnings Dashboard
          </h1>
          <p className="text-gray-300">Track your MEMO token earnings and performance metrics</p>
        </div>

        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{earningsData.total}</div>
              <p className="text-green-400 text-sm">MEMO tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{earningsData.monthly}</div>
              <p className="text-green-400 text-sm">+18% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{earningsData.weekly}</div>
              <p className="text-green-400 text-sm">+25% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Earnings */}
          <Card className="bg-black/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white">Recent Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEarnings.map((earning) => (
                  <div key={earning.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{earning.type}</span>
                        <Badge 
                          variant="default"
                          className="bg-green-500/20 text-green-400"
                        >
                          {earning.status}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm">{earning.dataset}</p>
                      <p className="text-gray-400 text-xs">{earning.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">+{earning.amount}</div>
                      <p className="text-gray-400 text-xs">MEMO</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performing Datasets */}
          <Card className="bg-black/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Datasets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topDatasets.map((dataset, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{dataset.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-sm">{dataset.growth}</span>
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{dataset.downloads} downloads</span>
                      <span className="text-green-400 font-bold">{dataset.earnings} MEMO</span>
                    </div>
                    <Progress 
                      value={(parseFloat(dataset.earnings) / 2000) * 100} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Withdrawal Section */}
        <Card className="bg-red-900/80 border-red-500/30 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Withdraw Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 mb-2">Available for withdrawal</p>
                <div className="text-2xl font-bold text-white">{earningsData.total} MEMO</div>
                <p className="text-gray-400 text-sm">≈ ${(parseFloat(earningsData.total) * 2).toFixed(2)} USD</p>
              </div>
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Withdraw Tokens
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Earnings;
