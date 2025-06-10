
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Database, Coins, Users, Code, Brain, BookOpen, Network } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedText from "@/components/AnimatedText";
import FeatureCard from "@/components/FeatureCard";
import TokenomicsSection from "@/components/TokenomicsSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Encrypted Memory Storage",
      description: "Store mnemonics, knowledge graphs, and semantic memories on-chain with enterprise-grade encryption.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "AI Training Provenance",
      description: "Verify ethical AI development with immutable storage of datasets, hyperparameters, and model lineage.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "DeSci Paper Ledger",
      description: "Publish research papers and peer reviews on-chain with transparent contribution tracking.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Modular Data Availability",
      description: "Blazing-fast L1 blockchain for decentralized data analytics with integrated data warehousing.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Immutable Research OS",
      description: "Full-stack tool for scientific reproducibility with semantic versioning and experiment metadata.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Network,
      title: "Open Knowledge Market",
      description: "Marketplace for datasets, memory objects, and verified research with token-gated access.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Memonaic
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#tokenomics" className="hover:text-purple-400 transition-colors">Tokenomics</a>
            <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Layer 1 Blockchain Infrastructure
            </Badge>
            <AnimatedText 
              text="The Future of AI-Enhanced Learning on Blockchain"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            />
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Built on Avalanche, Memonaic stores encrypted memories, knowledge graphs, and semantic data on-chain while powering the next generation of AI training and scientific research.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Launch App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 py-4 px-8 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Memonaic provides a comprehensive blockchain infrastructure for AI training, scientific research, and knowledge management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Ecosystem Section */}
      <section id="ecosystem" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DApp Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build the next generation of AI-powered applications using Memonaic's rich on-chain knowledge base.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AI/LLM Applications</h3>
                <p className="text-gray-300">
                  Build AI applications that consume verified training data with provenance guarantees.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AR Learning Tools</h3>
                <p className="text-gray-300">
                  Create immersive AR experiences powered by mnemonic memory graphs and semantic data.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">IoT & Blockchain DApps</h3>
                <p className="text-gray-300">
                  Develop blockchain and IoT applications with access to verified scientific data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Memonaic ecosystem and start earning tokens by contributing valuable data to the on-chain knowledge base.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Launch App
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Memonaic. Built on Avalanche for the future of AI-enhanced learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
