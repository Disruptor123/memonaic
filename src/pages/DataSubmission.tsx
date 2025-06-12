
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DataSubmission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    license: "",
    file: null as File | null,
    price: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.file) {
      toast({
        title: "Error",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setShowVerificationDialog(true);
    
    // Simulate 1-minute verification process
    setTimeout(() => {
      setIsSubmitting(false);
      setVerificationComplete(true);
      
      // Add to marketplace
      const existingDatasets = JSON.parse(localStorage.getItem('userDatasets') || '[]');
      const newDataset = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()),
        license: formData.license,
        fileName: formData.file?.name,
        fileSize: formData.file?.size,
        price: formData.price || "Free",
        uploadDate: new Date().toISOString(),
        downloads: 0,
        uploader: "You"
      };
      
      existingDatasets.push(newDataset);
      localStorage.setItem('userDatasets', JSON.stringify(existingDatasets));
      
      // Update earnings
      const currentEarnings = parseFloat(localStorage.getItem('totalEarnings') || '0');
      const newEarnings = currentEarnings + 1560;
      localStorage.setItem('totalEarnings', newEarnings.toString());
      
      // Update datasets uploaded count
      const currentDatasets = parseInt(localStorage.getItem('datasetsUploaded') || '0');
      localStorage.setItem('datasetsUploaded', (currentDatasets + 1).toString());
      
      toast({
        title: "Dataset Verified Successfully!",
        description: "Your dataset has been added to the marketplace and you've earned 1,560 MEMO tokens!",
      });
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        tags: "",
        license: "",
        file: null,
        price: ""
      });
    }, 60000); // 1 minute
  };

  const closeDialog = () => {
    setShowVerificationDialog(false);
    setVerificationComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Data Submission
          </h1>
          <p className="text-gray-300">Upload your datasets and research papers to earn MEMO tokens</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Submit Your Dataset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-300">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter dataset title"
                    className="bg-black/20 border-red-500/30 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-300">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your dataset"
                    className="bg-black/20 border-red-500/30 text-white min-h-24"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-300">Category</Label>
                  <Select onValueChange={(value) => handleInputChange("category", value)} required>
                    <SelectTrigger className="bg-black/20 border-red-500/30 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-training">AI Training Data</SelectItem>
                      <SelectItem value="research">Research Data</SelectItem>
                      <SelectItem value="medical">Medical Data</SelectItem>
                      <SelectItem value="financial">Financial Data</SelectItem>
                      <SelectItem value="climate">Climate Data</SelectItem>
                      <SelectItem value="nlp">NLP Data</SelectItem>
                      <SelectItem value="computer-vision">Computer Vision</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-gray-300">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                    placeholder="Enter tags separated by commas"
                    className="bg-black/20 border-red-500/30 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license" className="text-gray-300">License</Label>
                  <Select onValueChange={(value) => handleInputChange("license", value)} required>
                    <SelectTrigger className="bg-black/20 border-red-500/30 text-white">
                      <SelectValue placeholder="Select license" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mit">MIT License</SelectItem>
                      <SelectItem value="apache">Apache 2.0</SelectItem>
                      <SelectItem value="gpl">GPL v3</SelectItem>
                      <SelectItem value="cc0">CC0 (Public Domain)</SelectItem>
                      <SelectItem value="cc-by">CC BY 4.0</SelectItem>
                      <SelectItem value="proprietary">Proprietary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-gray-300">Price (Optional - MEMO tokens)</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="Enter price in MEMO tokens (leave empty for free)"
                    className="bg-black/20 border-red-500/30 text-white"
                    type="number"
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file" className="text-gray-300">Upload File</Label>
                  <div className="border-2 border-dashed border-red-500/30 rounded-lg p-6 text-center">
                    <input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".csv,.json,.txt,.pdf,.zip,.tar.gz"
                      required
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <FileText className="h-12 w-12 text-red-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">
                        {formData.file ? formData.file.name : "Click to upload your dataset"}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Supports: CSV, JSON, TXT, PDF, ZIP, TAR.GZ (Max 100MB)
                      </p>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Verifying Dataset...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Submit Dataset
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Verification Dialog */}
        <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
          <DialogContent className="bg-black/90 border-red-500/30 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Blockchain Verification
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    Verification Complete
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            
            {isSubmitting ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Upload className="h-4 w-4" />
                  <span>Verifying dataset on blockchain...</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Your dataset is being verified through our smart contract system. This process ensures data integrity and authenticity.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-xs text-gray-400">Verification Hash:</p>
                  <p className="text-xs font-mono text-green-400">0x{Math.random().toString(16).substr(2, 40)}</p>
                </div>
              </div>
            ) : verificationComplete ? (
              <div className="space-y-4">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Dataset Verified!</h3>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">Dataset:</p>
                    <p className="text-white font-medium">{formData.title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Category:</p>
                    <p className="text-white">{formData.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Reward Earned:</p>
                    <p className="text-lg font-bold text-green-400">+1,560 MEMO</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Status:</p>
                    <p className="text-green-400">✓ Listed on Marketplace</p>
                  </div>
                </div>
                
                <Button 
                  onClick={closeDialog}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  Continue
                </Button>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DataSubmission;
