import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, MapPin, Calendar, Edit3, Camera, Award, TrendingUp, Wallet } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Dr. Sarah Chen",
    email: "sarah.chen@research.edu",
    bio: "AI researcher specializing in machine learning and neural networks. Contributing to the decentralized knowledge ecosystem.",
    location: "San Francisco, CA",
    joinDate: "2024-01-15",
    specialization: "Machine Learning"
  });

  const stats = {
    totalContributions: 47,
    citationCount: 234,
    reputation: "Expert"
  };

  const recentActivity = [
    { type: "Dataset Upload", item: "Neural Network Training Data", date: "2024-01-15" },
    { type: "Paper Review", item: "Quantum ML Research", date: "2024-01-14" },
    { type: "Verification", item: "Computer Vision Dataset", date: "2024-01-13" },
    { type: "Citation", item: "AI Ethics Framework", date: "2024-01-12" }
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleConnectWallet = () => {
    toast({
      title: "Connect Wallet",
      description: "Wallet connection feature to be configured.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Profile
          </h1>
          <p className="text-gray-300">Manage your Memonaic profile and track your contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 border-red-500/30 mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Profile Information</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="border-red-500 text-red-300 hover:bg-red-500/10"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-red-500 text-white text-xl">SC</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                    <p className="text-red-400">{profileData.specialization}</p>
                    <Badge className="bg-green-500/20 text-green-400 mt-1">{stats.reputation}</Badge>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Name</Label>
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="bg-black/30 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Bio</Label>
                      <Textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        className="bg-black/30 border-gray-600 text-white"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label className="text-white">Location</Label>
                      <Input
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="bg-black/30 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Specialization</Label>
                      <Input
                        value={profileData.specialization}
                        onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                        className="bg-black/30 border-gray-600 text-white"
                      />
                    </div>
                    <Button onClick={handleSave} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail className="h-4 w-4" />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {profileData.joinDate}</span>
                    </div>
                    <p className="text-gray-300">{profileData.bio}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Connect Wallet Button */}
            <Card className="bg-black/20 border-red-500/30 mb-6">
              <CardContent className="p-6">
                <Button 
                  onClick={handleConnectWallet}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  <Wallet className="h-5 w-5 mr-2" />
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-black/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{activity.type}</p>
                        <p className="text-gray-300 text-sm">{activity.item}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-900/80 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{stats.totalContributions}</div>
                    <p className="text-red-400 text-sm">Total Contributions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{stats.citationCount}</div>
                    <p className="text-red-400 text-sm">Citations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="bg-gold-500/20 text-yellow-400 w-full justify-center py-1">
                    Top Contributor
                  </Badge>
                  <Badge className="bg-silver-500/20 text-gray-300 w-full justify-center py-1">
                    Data Verifier
                  </Badge>
                  <Badge className="bg-bronze-500/20 text-orange-400 w-full justify-center py-1">
                    Early Adopter
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
