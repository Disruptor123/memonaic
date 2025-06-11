
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Users, Vote, Clock, CheckCircle, XCircle, MessageSquare } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import { useToast } from "@/hooks/use-toast";

const Governance = () => {
  const { toast } = useToast();
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  const proposals = [
    {
      id: 1,
      title: "Increase Data Verification Rewards",
      description: "Proposal to increase verification rewards from 10 MEMO to 15 MEMO tokens to incentivize more community participation in data validation.",
      author: "AI Research Collective",
      status: "active",
      votesFor: 1247,
      votesAgainst: 342,
      totalVotes: 1589,
      timeLeft: "5 days",
      category: "Economics",
      details: "This proposal aims to increase participation in data verification by offering higher rewards. Current verification rates are below optimal levels."
    },
    {
      id: 2,
      title: "Implement New Dataset Categories",
      description: "Add support for quantum computing datasets and bioinformatics research data categories to expand the platform's scope.",
      author: "Quantum Research Lab",
      status: "active",
      votesFor: 892,
      votesAgainst: 156,
      totalVotes: 1048,
      timeLeft: "12 days",
      category: "Platform",
      details: "Expanding dataset categories will attract researchers from emerging fields and increase platform diversity."
    },
    {
      id: 3,
      title: "Reduce Transaction Fees",
      description: "Lower the platform transaction fees from 2% to 1.5% for all marketplace transactions to encourage more trading activity.",
      author: "DeFi Alliance",
      status: "passed",
      votesFor: 2156,
      votesAgainst: 234,
      totalVotes: 2390,
      timeLeft: "Passed",
      category: "Economics",
      details: "This proposal successfully passed and will be implemented in the next platform update."
    },
    {
      id: 4,
      title: "Enhanced Privacy Features",
      description: "Implement zero-knowledge proofs for sensitive research data while maintaining verification capabilities.",
      author: "Privacy Research Group",
      status: "failed",
      votesFor: 456,
      votesAgainst: 1234,
      totalVotes: 1690,
      timeLeft: "Failed",
      category: "Technology",
      details: "This proposal did not receive sufficient support from the community due to implementation complexity concerns."
    }
  ];

  const userStats = {
    votingPower: "1,250",
    proposalsVoted: 15,
    reputation: 94
  };

  const handleVote = (proposalId: number, vote: 'for' | 'against') => {
    toast({
      title: "Vote Submitted!",
      description: `Your vote ${vote === 'for' ? 'in favor' : 'against'} the proposal has been recorded.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500/20 text-blue-400';
      case 'passed': return 'bg-green-500/20 text-green-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return Clock;
      case 'passed': return CheckCircle;
      case 'failed': return XCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <DashboardNav />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
            DAO Governance
          </h1>
          <p className="text-gray-300">Participate in Memonaic's decentralized governance and shape the future of the platform</p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Vote className="h-5 w-5" />
                Voting Power
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{userStats.votingPower}</div>
              <p className="text-purple-400 text-sm">MEMO tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <Users className="h-5 w-5" />
                Proposals Voted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{userStats.proposalsVoted}</div>
              <p className="text-blue-400 text-sm">This quarter</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-800/60 to-red-900/60 border-red-600/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Reputation Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{userStats.reputation}%</div>
              <p className="text-green-400 text-sm">Excellent standing</p>
            </CardContent>
          </Card>
        </div>

        {/* Proposals List */}
        <div className="space-y-6">
          {proposals.map((proposal) => {
            const StatusIcon = getStatusIcon(proposal.status);
            const votePercentage = (proposal.votesFor / proposal.totalVotes) * 100;
            
            return (
              <Card key={proposal.id} className="bg-black/20 border-red-500/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getStatusColor(proposal.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {proposal.status.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {proposal.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-xl mb-2">{proposal.title}</CardTitle>
                      <p className="text-gray-300">{proposal.description}</p>
                      <p className="text-gray-400 text-sm mt-2">Proposed by {proposal.author}</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      {proposal.timeLeft}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Voting Results */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Support: {proposal.votesFor} votes</span>
                        <span className="text-gray-300">Against: {proposal.votesAgainst} votes</span>
                      </div>
                      <Progress value={votePercentage} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{votePercentage.toFixed(1)}% in favor</span>
                        <span>{proposal.totalVotes} total votes</span>
                      </div>
                    </div>

                    {/* Voting Buttons */}
                    {proposal.status === 'active' && (
                      <div className="flex gap-4">
                        <Button
                          onClick={() => handleVote(proposal.id, 'for')}
                          className="bg-green-600 hover:bg-green-700 text-white flex-1"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Vote For
                        </Button>
                        <Button
                          onClick={() => handleVote(proposal.id, 'against')}
                          variant="outline"
                          className="border-red-500 text-red-300 hover:bg-red-500/10 flex-1"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Vote Against
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-600 text-gray-300"
                          onClick={() => setSelectedProposal(selectedProposal === proposal.id ? null : proposal.id)}
                        >
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    )}

                    {/* Discussion Section */}
                    {selectedProposal === proposal.id && (
                      <div className="mt-4 p-4 bg-black/30 rounded-lg">
                        <h4 className="text-white font-medium mb-2">Discussion</h4>
                        <p className="text-gray-300 text-sm mb-4">{proposal.details}</p>
                        <Textarea
                          placeholder="Share your thoughts on this proposal..."
                          className="bg-black/30 border-gray-600 text-white mb-3"
                        />
                        <Button size="sm" className="bg-gradient-to-r from-red-600 to-orange-600">
                          Post Comment
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Create Proposal */}
        <Card className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Create New Proposal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Have an idea to improve Memonaic? Submit a proposal to the community for voting.
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Create Proposal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Governance;
