import { useState } from 'react';
import { 
  Brain, 
  FileText, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Tag,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const extractedData = [
  {
    id: 1,
    document: 'Contract_Railway_Maintenance_2024.pdf',
    type: 'deadline',
    content: 'Contract renewal due by March 15, 2025',
    confidence: 94,
    category: 'Legal',
    priority: 'high',
    date: '2024-12-15'
  },
  {
    id: 2,
    document: 'Budget_Allocation_Q4.xlsx',
    type: 'kpi',
    content: 'Budget utilization at 87% with ₹2.3M remaining',
    confidence: 98,
    category: 'Finance',
    priority: 'medium',
    date: '2024-12-14'
  },
  {
    id: 3,
    document: 'Safety_Inspection_Report.pdf',
    type: 'compliance',
    content: 'Monthly safety inspection completed - 3 minor issues identified',
    confidence: 91,
    category: 'Operations',
    priority: 'high',
    date: '2024-12-13'
  },
  {
    id: 4,
    document: 'Vendor_Performance_Nov2024.docx',
    type: 'insight',
    content: 'Vendor ABC showing 15% improvement in delivery times',
    confidence: 89,
    category: 'Operations',
    priority: 'low',
    date: '2024-12-12'
  }
];

const summaries = [
  {
    id: 1,
    title: 'Q4 Financial Summary',
    document: 'Financial_Report_Q4_2024.pdf',
    summary: 'Revenue targets exceeded by 12% with strong performance in passenger services. Operating costs reduced by 8% through efficiency improvements.',
    tags: ['Finance', 'Q4', 'Revenue'],
    confidence: 95,
    createdAt: '2024-12-15'
  },
  {
    id: 2,
    title: 'Safety Compliance Review',
    document: 'Safety_Audit_December2024.pdf',
    summary: 'Overall safety compliance at 96%. Recommended improvements in emergency response protocols and staff training programs.',
    tags: ['Safety', 'Compliance', 'Training'],
    confidence: 92,
    createdAt: '2024-12-14'
  },
  {
    id: 3,
    title: 'Infrastructure Maintenance Plan',
    document: 'Maintenance_Schedule_2025.docx',
    summary: 'Preventive maintenance scheduled for 45 stations. Critical repairs identified for 3 major junctions requiring immediate attention.',
    tags: ['Infrastructure', 'Maintenance', '2025'],
    confidence: 88,
    createdAt: '2024-12-13'
  }
];

export const AIProcessing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'deadline': return <Calendar className="w-4 h-4" />;
      case 'kpi': return <TrendingUp className="w-4 h-4" />;
      case 'compliance': return <CheckCircle className="w-4 h-4" />;
      case 'insight': return <Brain className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Finance': return 'bg-primary/10 text-primary border-primary/20';
      case 'Legal': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'Operations': return 'bg-success/10 text-success border-success/20';
      case 'HR': return 'bg-warning/10 text-warning border-warning/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const filteredData = extractedData.filter(item => {
    const matchesSearch = item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.document.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPriority = selectedPriority === 'all' || item.priority === selectedPriority;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Processing</h1>
        <p className="text-muted-foreground">
          View extracted information, summaries, and AI-generated insights
        </p>
      </div>

      <Tabs defaultValue="extracted" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="extracted">Extracted Information</TabsTrigger>
          <TabsTrigger value="summaries">Auto-Generated Summaries</TabsTrigger>
          <TabsTrigger value="categories">Category Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="extracted" className="space-y-6">
          {/* Filters */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle className="text-lg">Filter Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="metro-outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Extracted Information */}
          <div className="space-y-4">
            {filteredData.map((item) => (
              <Card key={item.id} className="metro-card">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between space-x-4">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {getTypeIcon(item.type)}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                          <Badge variant="outline" className={getPriorityColor(item.priority)}>
                            {item.priority}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.confidence}% confidence
                          </span>
                        </div>
                        <p className="font-medium">{item.content}</p>
                        <p className="text-sm text-muted-foreground">
                          From: {item.document}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="summaries" className="space-y-6">
          {/* Auto-Generated Summaries */}
          <div className="space-y-4">
            {summaries.map((summary) => (
              <Card key={summary.id} className="metro-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{summary.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {summary.confidence}% confidence
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {summary.createdAt}
                      </span>
                    </div>
                  </div>
                  <CardDescription>Source: {summary.document}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{summary.summary}</p>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-3 h-3 text-muted-foreground" />
                    <div className="flex space-x-1">
                      {summary.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          {/* Category Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Finance Documents</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Legal Documents</CardTitle>
                <FileText className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">456</div>
                <p className="text-xs text-muted-foreground">
                  +3% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Operations</CardTitle>
                <CheckCircle className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,891</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HR Documents</CardTitle>
                <Clock className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">789</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Processing Stats */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Processing Statistics</CardTitle>
              <CardDescription>AI processing performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">96.8%</div>
                  <p className="text-sm text-muted-foreground">Processing Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2.4s</div>
                  <p className="text-sm text-muted-foreground">Average Processing Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning mb-2">15,234</div>
                  <p className="text-sm text-muted-foreground">Documents Processed Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};