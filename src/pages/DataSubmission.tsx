
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Brain, Database, Zap } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";

const DataSubmission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    license: "",
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Dataset Submitted Successfully!",
      description: "Your dataset is being processed and will be available in the marketplace soon.",
    });
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
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
          <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Training Data</h3>
              <p className="text-gray-300 text-sm">Upload datasets for machine learning and AI training</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Research Papers</h3>
              <p className="text-gray-300 text-sm">Publish scientific research with provenance tracking</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <Database className="h-12 w-12 text-purple-400 mx-auto mb-4" />
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

        {/* Reward Information */}
        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30 mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Earning Potential</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">50-500</div>
                <p className="text-gray-300">MEMO tokens per dataset</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">10%</div>
                <p className="text-gray-300">Royalties on usage</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">2x</div>
                <p className="text-gray-300">Bonus for verified data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataSubmission;
