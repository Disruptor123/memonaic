
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Database, Coins, Users, Code, Brain, BookOpen, Network } from "lucide-react";
import { Link } from "react-router-dom";
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
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "AI Training Provenance",
      description: "Verify ethical AI development with immutable storage of datasets, hyperparameters, and model lineage.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "DeSci Paper Ledger",
      description: "Publish research papers and peer reviews on-chain with transparent contribution tracking.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Database,
      title: "Modular Data Availability",
      description: "Blazing-fast L1 blockchain for decentralized data analytics with integrated data warehousing.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Code,
      title: "Immutable Research OS",
      description: "Full-stack tool for scientific reproducibility with semantic versioning and experiment metadata.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Network,
      title: "Open Knowledge Market",
      description: "Marketplace for datasets, memory objects, and verified research with token-gated access.",
      gradient: "from-teal-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Memonaic
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
            <a href="#tokenomics" className="hover:text-red-400 transition-colors">Tokenomics</a>
            <a href="#ecosystem" className="hover:text-red-400 transition-colors">Ecosystem</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30">
              Layer 1 Blockchain Infrastructure
            </Badge>
            <AnimatedText 
              text="The Future of AI-Enhanced Learning on Blockchain"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent"
            />
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Built on Avalanche, Memonaic stores encrypted memories, knowledge graphs, and semantic data on-chain while powering the next generation of AI training and scientific research.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Launch App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-red-500 text-red-300 hover:bg-red-500/10 py-4 px-8 rounded-full">
                Learn More
              </Button>
            </div>

            {/* Avalanche and Chainlink Logos */}
            <div className={`mt-12 flex flex-col items-center space-y-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-sm text-gray-400 mb-2">Powered by</p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <span className="text-white font-semibold">Avalanche</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">C</span>
                  </div>
                  <span className="text-white font-semibold">Chainlink</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
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
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/30 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AI/LLM Applications</h3>
                <p className="text-white/90">
                  Build AI applications that consume verified training data with provenance guarantees.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/30 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AR Learning Tools</h3>
                <p className="text-white/90">
                  Create immersive AR experiences powered by mnemonic memory graphs and semantic data.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/30 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">IoT & Blockchain DApps</h3>
                <p className="text-white/90">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Memonaic ecosystem and start earning tokens by contributing valuable data to the on-chain knowledge base.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-red-700 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Memonaic. Built on Avalanche for the future of AI-enhanced learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
