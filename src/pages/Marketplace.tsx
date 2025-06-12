
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Star, Eye, Filter, Brain, FileText, Database } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Marketplace = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDataset, setSelectedDataset] = useState<any>(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [userBalance, setUserBalance] = useState(5000); // Default MEMO balance

  const defaultDatasets = [
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
      icon: Brain,
      downloadUrl: "#"
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
      icon: FileText,
      downloadUrl: "#"
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
      icon: Brain,
      downloadUrl: "#"
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
      icon: Database,
      downloadUrl: "#"
    }
  ];

  const [datasets, setDatasets] = useState(defaultDatasets);
  const [purchasedDatasets, setPurchasedDatasets] = useState<number[]>([]);

  useEffect(() => {
    // Load user uploaded datasets
    const userDatasets = JSON.parse(localStorage.getItem('userDatasets') || '[]');
    if (userDatasets.length > 0) {
      setDatasets([...defaultDatasets, ...userDatasets]);
    }

    // Load purchased datasets
    const purchased = JSON.parse(localStorage.getItem('purchasedDatasets') || '[]');
    setPurchasedDatasets(purchased);
  }, []);

  const handlePurchase = (dataset: any) => {
    const price = parseInt(dataset.price.replace(' MEMO', ''));
    
    if (userBalance >= price) {
      // Update balance
      setUserBalance(prev => prev - price);
      
      // Add to purchased datasets
      const newPurchased = [...purchasedDatasets, dataset.id];
      setPurchasedDatasets(newPurchased);
      localStorage.setItem('purchasedDatasets', JSON.stringify(newPurchased));
      
      // Simulate download
      const blob = new Blob(['Dataset content would be here...'], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${dataset.title}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Dataset Purchased & Downloaded!",
        description: `${dataset.title} has been purchased and downloaded automatically.`,
      });
    } else {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough MEMO tokens to purchase this dataset.",
        variant: "destructive"
      });
    }
  };

  const handleDownload = (dataset: any) => {
    if (purchasedDatasets.includes(dataset.id)) {
      // Simulate download
      const blob = new Blob(['Dataset content would be here...'], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${dataset.title}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download Started",
        description: `Downloading ${dataset.title}...`,
      });
    } else {
      handlePurchase(dataset);
    }
  };

  const handlePreview = (dataset: any) => {
    setSelectedDataset(dataset);
    setShowPreviewDialog(true);
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                Data Marketplace
              </h1>
              <p className="text-gray-300">Discover and purchase verified datasets, research papers, and knowledge structures</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">Your Balance</p>
              <p className="text-2xl font-bold text-green-400">{userBalance} MEMO</p>
            </div>
          </div>
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
              <div className="text-2xl font-bold text-red-400">{datasets.length}</div>
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
            const isPurchased = purchasedDatasets.includes(dataset.id);
            return (
              <Card key={dataset.id} className="bg-black/20 border-red-500/30 hover:bg-black/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-6 w-6 text-red-400" />
                      <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                        {dataset.category}
                      </Badge>
                      {isPurchased && (
                        <Badge className="bg-green-500/20 text-green-400">Owned</Badge>
                      )}
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
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-600 text-gray-300"
                        onClick={() => handlePreview(dataset)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                        onClick={() => handleDownload(dataset)}
                      >
                        {isPurchased ? 'Download' : 'Purchase'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Preview Dialog */}
        <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
          <DialogContent className="bg-black/90 border-red-500/30 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Dataset Preview
              </DialogTitle>
            </DialogHeader>
            
            {selectedDataset && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{selectedDataset.title}</h3>
                  <Badge className="bg-red-500/20 text-red-300">{selectedDataset.category}</Badge>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Description:</h4>
                  <p className="text-gray-300">{selectedDataset.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Author:</h4>
                    <p className="text-white">{selectedDataset.author}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Price:</h4>
                    <p className="text-red-400 font-bold">{selectedDataset.price}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedDataset.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Sample Data Preview:</h4>
                  <pre className="text-xs text-gray-400">
{`{
  "sample_data": {
    "records": 50000,
    "features": ["text", "label", "metadata"],
    "format": "JSON/CSV",
    "size": "250MB"
  }
}`}
                  </pre>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                    onClick={() => {
                      handleDownload(selectedDataset);
                      setShowPreviewDialog(false);
                    }}
                  >
                    {purchasedDatasets.includes(selectedDataset.id) ? 'Download Now' : 'Purchase & Download'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-500 text-red-300 hover:bg-red-500/10"
                    onClick={() => setShowPreviewDialog(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Marketplace;
