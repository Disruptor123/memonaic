import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Brain, Database, CheckCircle, Clock, Loader2 } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const DataSubmission = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const [submittedDataset, setSubmittedDataset] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    license: "",
    file: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Start verification process
    setIsVerifying(true);
    setShowVerificationDialog(true);
    
    // Simulate smart contract verification (1 minute)
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
      
      // Create dataset object
      const newDataset = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: "150 MEMO",
        rating: 0,
        downloads: 0,
        author: "You",
        tags: formData.tags.split(",").map(tag => tag.trim()),
        icon: formData.category.includes("AI") ? Brain : formData.category.includes("Research") ? FileText : Database,
        verificationHash: `0x${Math.random().toString(16).substr(2, 40)}`,
        timestamp: new Date().toISOString()
      };
      
      setSubmittedDataset(newDataset);
      
      // Update localStorage for marketplace and earnings
      const existingDatasets = JSON.parse(localStorage.getItem('userDatasets') || '[]');
      const existingEarnings = parseFloat(localStorage.getItem('totalEarnings') || '2485.67');
      
      localStorage.setItem('userDatasets', JSON.stringify([...existingDatasets, newDataset]));
      localStorage.setItem('totalEarnings', (existingEarnings + 1560).toString());
      
      toast({
        title: "Dataset Verified and Listed!",
        description: "Your dataset has been verified and added to the marketplace. You've earned 1,560 MEMO tokens!",
      });
    }, 60000); // 1 minute verification
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const closeDialog = () => {
    setShowVerificationDialog(false);
    setVerificationComplete(false);
    setSubmittedDataset(null);
    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      tags: "",
      license: "",
      file: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Data Submission
          </h1>
          <p className="text-gray-300">Contribute to the decentralized knowledge base and earn MEMO tokens</p>
        </div>

        {/* Submission Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Training Data</h3>
              <p className="text-gray-300 text-sm">Upload datasets for machine learning and AI training</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Research Papers</h3>
              <p className="text-gray-300 text-sm">Publish scientific research with provenance tracking</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardContent className="p-6 text-center">
              <Database className="h-12 w-12 text-violet-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Memory Structures</h3>
              <p className="text-gray-300 text-sm">Share mnemonics and knowledge graphs</p>
            </CardContent>
          </Card>
        </div>

        {/* Submission Form */}
        <Card className="bg-black/20 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Submit Your Dataset
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title" className="text-white">Dataset Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-black/30 border-gray-600 text-white"
                    placeholder="Enter dataset title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-white">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="bg-black/30 border-gray-600 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-training">AI Training Data</SelectItem>
                      <SelectItem value="research">Research Papers</SelectItem>
                      <SelectItem value="memory">Memory Structures</SelectItem>
                      <SelectItem value="models">Model Metadata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-black/30 border-gray-600 text-white"
                  placeholder="Describe your dataset, its use cases, and methodology..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="tags" className="text-white">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="bg-black/30 border-gray-600 text-white"
                    placeholder="machine-learning, nlp, computer-vision"
                  />
                </div>

                <div>
                  <Label htmlFor="license" className="text-white">License</Label>
                  <Select value={formData.license} onValueChange={(value) => setFormData({ ...formData, license: value })}>
                    <SelectTrigger className="bg-black/30 border-gray-600 text-white">
                      <SelectValue placeholder="Select license" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mit">MIT License</SelectItem>
                      <SelectItem value="apache">Apache 2.0</SelectItem>
                      <SelectItem value="cc0">CC0 Public Domain</SelectItem>
                      <SelectItem value="custom">Custom License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="file" className="text-white">Upload File *</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="bg-black/30 border-gray-600 text-white file:bg-red-500 file:text-white file:border-0 file:rounded-md"
                  accept=".csv,.json,.txt,.pdf,.zip"
                  required
                />
                <p className="text-gray-400 text-sm mt-1">Supported formats: CSV, JSON, TXT, PDF, ZIP (Max: 100MB)</p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Submit Dataset
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-red-500 text-red-300 hover:bg-red-500/10"
                >
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Verification Dialog */}
        <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
          <DialogContent className="bg-black/90 border-red-500/30 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {isVerifying ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Smart Contract Verification
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    Verification Complete
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            
            {isVerifying ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Clock className="h-4 w-4" />
                  <span>Verifying dataset integrity...</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Your dataset is being verified on the blockchain. This process takes approximately 1 minute to ensure data integrity and authenticity.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-xs text-gray-400">Transaction Hash:</p>
                  <p className="text-xs font-mono text-green-400">0x{Math.random().toString(16).substr(2, 40)}</p>
                </div>
              </div>
            ) : verificationComplete && submittedDataset ? (
              <div className="space-y-4">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Dataset Verified Successfully!</h3>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">Dataset Title:</p>
                    <p className="text-white font-medium">{submittedDataset.title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Verification Hash:</p>
                    <p className="text-xs font-mono text-green-400">{submittedDataset.verificationHash}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Reward Earned:</p>
                    <p className="text-lg font-bold text-green-400">+1,560 MEMO</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Status:</p>
                    <Badge className="bg-green-500/20 text-green-400">Listed on Marketplace</Badge>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => navigate('/marketplace')}
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  >
                    View in Marketplace
                  </Button>
                  <Button 
                    onClick={closeDialog}
                    variant="outline" 
                    className="flex-1 border-red-500 text-red-300 hover:bg-red-500/10"
                  >
                    Close
                  </Button>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DataSubmission;
