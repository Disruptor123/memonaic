
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Users, Database, Zap } from "lucide-react";

const TokenomicsSection = () => {
  const tokenomicsFeatures = [
    {
      icon: Database,
      title: "Data Contribution",
      description: "Earn tokens by uploading AI training datasets, research papers, mnemonics, and experiment logs.",
      rewards: "Based on data uniqueness and usage potential"
    },
    {
      icon: Users,
      title: "Verification Mining",
      description: "Participate in data verification, paper reviews, and dataset tagging to earn rewards.",
      rewards: "On-chain reputation and token incentives"
    },
    {
      icon: Zap,
      title: "DApp Development",
      description: "Build applications using Memonaic's knowledge base and earn ongoing royalties.",
      rewards: "Revenue sharing with data contributors"
    },
    {
      icon: Coins,
      title: "Knowledge Marketplace",
      description: "License datasets, memory objects, and verified research with token-gated access.",
      rewards: "Stream or license your data for tokens"
    }
  ];

  return (
    <section id="tokenomics" className="relative z-10 py-20 px-6 bg-gradient-to-br from-slate-900/50 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Earning in Memonaic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Token incentives for data contribution and verification. Create value, earn rewards, and participate in the knowledge economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tokenomicsFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300 mb-3">{feature.description}</p>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <p className="text-green-400 text-sm font-medium">{feature.rewards}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Data-as-a-Utility Marketplace</h3>
          <p className="text-lg text-gray-300 mb-6">
            A open market where datasets, memory objects, model checkpoints, and verified research can be licensed or streamed with token-gated access rules. Contributors earn ongoing royalties when their data powers new applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-green-400 font-bold text-lg">AI Training Data</div>
              <div className="text-gray-300">ML-ready datasets with provenance</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-green-400 font-bold text-lg">Research Papers</div>
              <div className="text-gray-300">Peer-reviewed scientific content</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-green-400 font-bold text-lg">Memory Graphs</div>
              <div className="text-gray-300">Semantic learning structures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
