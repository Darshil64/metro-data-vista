import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  MoreHorizontal,
  Calendar,
  FileText,
  User,
  Tag,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const documents = [
  {
    id: 1,
    name: 'Annual_Financial_Report_2024.pdf',
    category: 'Finance',
    size: '2.4 MB',
    version: '1.2',
    lastModified: '2024-12-15',
    modifiedBy: 'Sarah Johnson',
    tags: ['Annual', 'Finance', 'Report'],
    status: 'approved'
  },
  {
    id: 2,
    name: 'Safety_Protocol_Update_v3.docx',
    category: 'Operations',
    size: '856 KB',
    version: '3.0',
    lastModified: '2024-12-14',
    modifiedBy: 'Mike Chen',
    tags: ['Safety', 'Protocol', 'Operations'],
    status: 'draft'
  },
  {
    id: 3,
    name: 'Vendor_Contract_ABC_Corp.pdf',
    category: 'Legal',
    size: '1.8 MB',
    version: '2.1',
    lastModified: '2024-12-13',
    modifiedBy: 'Alice Kumar',
    tags: ['Contract', 'Vendor', 'Legal'],
    status: 'approved'
  },
  {
    id: 4,
    name: 'Employee_Handbook_2025.pdf',
    category: 'HR',
    size: '3.2 MB',
    version: '4.0',
    lastModified: '2024-12-12',
    modifiedBy: 'David Smith',
    tags: ['HR', 'Handbook', 'Policy'],
    status: 'review'
  },
  {
    id: 5,
    name: 'Maintenance_Schedule_Q1_2025.xlsx',
    category: 'Operations',
    size: '645 KB',
    version: '1.0',
    lastModified: '2024-12-11',
    modifiedBy: 'Emma Wilson',
    tags: ['Maintenance', 'Schedule', 'Q1'],
    status: 'approved'
  }
];

const auditTrail = [
  {
    id: 1,
    action: 'Document Approved',
    document: 'Annual_Financial_Report_2024.pdf',
    user: 'Sarah Johnson',
    timestamp: '2024-12-15 14:30:25',
    details: 'Document approved after financial review'
  },
  {
    id: 2,
    action: 'Version Updated',
    document: 'Safety_Protocol_Update_v3.docx',
    user: 'Mike Chen',
    timestamp: '2024-12-14 09:15:43',
    details: 'Updated safety protocols based on new regulations'
  },
  {
    id: 3,
    action: 'Document Accessed',
    document: 'Vendor_Contract_ABC_Corp.pdf',
    user: 'Legal Team',
    timestamp: '2024-12-13 16:22:17',
    details: 'Document accessed for contract review'
  },
  {
    id: 4,
    action: 'Document Created',
    document: 'Employee_Handbook_2025.pdf',
    user: 'David Smith',
    timestamp: '2024-12-12 11:45:32',
    details: 'New version of employee handbook created'
  },
  {
    id: 5,
    action: 'Tags Modified',
    document: 'Maintenance_Schedule_Q1_2025.xlsx',
    user: 'Emma Wilson',
    timestamp: '2024-12-11 13:28:56',
    details: 'Added Q1 and Schedule tags for better categorization'
  }
];

export const CentralRepository = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-success/10 text-success border-success/20';
      case 'draft': return 'bg-warning/10 text-warning border-warning/20';
      case 'review': return 'bg-primary/10 text-primary border-primary/20';
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

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || doc.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Central Repository</h1>
        <p className="text-muted-foreground">
          Search, manage, and track all your documents in one place
        </p>
      </div>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Document Library</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="stats">Repository Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          {/* Search and Filters */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle className="text-lg">Search & Filter Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents, tags, or content..."
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
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="metro-outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documents Table */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Documents ({filteredDocuments.length})</CardTitle>
              <CardDescription>Manage your document library</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-medium">{doc.name}</p>
                          <div className="flex space-x-1">
                            {doc.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getCategoryColor(doc.category)}>
                          {doc.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>v{doc.version}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm">{doc.lastModified}</p>
                          <p className="text-xs text-muted-foreground">by {doc.modifiedBy}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          {/* Audit Trail */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Track all document activities and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditTrail.map((entry) => (
                  <div key={entry.id} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{entry.action}</p>
                        <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Document: <span className="font-medium">{entry.document}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        By: <span className="font-medium">{entry.user}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{entry.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          {/* Repository Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">+1,234 this month</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 TB</div>
                <p className="text-xs text-muted-foreground">68% of total capacity</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Document Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156,789</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+56 new this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Breakdown */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Documents by Category</CardTitle>
              <CardDescription>Distribution of documents across categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-sm">Finance</span>
                  </div>
                  <div className="text-sm font-medium">12,456 (27.5%)</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span className="text-sm">Operations</span>
                  </div>
                  <div className="text-sm font-medium">18,923 (41.8%)</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-destructive rounded-full" />
                    <span className="text-sm">Legal</span>
                  </div>
                  <div className="text-sm font-medium">8,745 (19.3%)</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <span className="text-sm">HR</span>
                  </div>
                  <div className="text-sm font-medium">5,107 (11.3%)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};