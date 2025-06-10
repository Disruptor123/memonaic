
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Star, Eye, Filter, Brain, FileText, Database } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const datasets = [
    {
      id: 1,
      title: "Large Language Model Training Dataset",
      description: "Comprehensive dataset for training large language models with 50M+ tokens",
      category: "AI Training",
      price: "250 MEMO",
      rating: 4.8,
      downloads: 1247,
      author: "AI Research Lab",
      tags: ["NLP", "LLM", "Training"],
      icon: Brain
    },
    {
      id: 2,
      title: "Climate Science Research Papers",
      description: "Peer-reviewed climate research papers with metadata and citations",
      category: "Research",
      price: "150 MEMO",
      rating: 4.9,
      downloads: 892,
      author: "Climate Institute",
      tags: ["Climate", "Research", "Papers"],
      icon: FileText
    },
    {
      id: 3,
      title: "Medical Image Classification Dataset",
      description: "Annotated medical images for computer vision training",
      category: "AI Training",
      price: "500 MEMO",
      rating: 4.7,
      downloads: 634,
      author: "Medical AI Group",
      tags: ["Medical", "Computer Vision", "Classification"],
      icon: Brain
    },
    {
      id: 4,
      title: "Knowledge Graph: Scientific Concepts",
      description: "Structured knowledge graph connecting scientific concepts and relationships",
      category: "Memory Structures",
      price: "200 MEMO",
      rating: 4.6,
      downloads: 423,
      author: "Knowledge Systems",
      tags: ["Knowledge Graph", "Science", "Concepts"],
      icon: Database
    }
  ];

  const handlePurchase = (dataset: any) => {
    toast({
      title: "Dataset Purchased!",
      description: `${dataset.title} has been added to your collection.`,
    });
  };

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || dataset.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Data Marketplace
          </h1>
          <p className="text-gray-300">Discover and purchase verified datasets, research papers, and knowledge structures</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search datasets, papers, or memory structures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-black/30 border-gray-600 text-white"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-black/30 border-gray-600 text-white">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="ai">AI Training</SelectItem>
              <SelectItem value="research">Research Papers</SelectItem>
              <SelectItem value="memory">Memory Structures</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-black/20 border-red-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-400">2,847</div>
              <p className="text-gray-300 text-sm">Total Datasets</p>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-red-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">1,234</div>
              <p className="text-gray-300 text-sm">Research Papers</p>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-red-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-400">567</div>
              <p className="text-gray-300 text-sm">Memory Structures</p>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-red-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">89,234</div>
              <p className="text-gray-300 text-sm">Total Downloads</p>
            </CardContent>
          </Card>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.map((dataset) => {
            const Icon = dataset.icon;
            return (
              <Card key={dataset.id} className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-6 w-6 text-red-400" />
                      <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                        {dataset.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{dataset.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{dataset.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{dataset.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {dataset.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>by {dataset.author}</span>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{dataset.downloads}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-red-400">{dataset.price}</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                        onClick={() => handlePurchase(dataset)}
                      >
                        Purchase
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
