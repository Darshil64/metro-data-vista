import { useState } from 'react';
import { 
  Upload, 
  File, 
  CheckCircle, 
  AlertCircle, 
  Share, 
  Database, 
  Mail, 
  Settings,
  Plus,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const connectors = [
  {
    id: 'sharepoint',
    name: 'SharePoint',
    icon: Share,
    status: 'connected',
    lastSync: '2 minutes ago',
    documents: 15420,
    description: 'Microsoft SharePoint document library'
  },
  {
    id: 'maximo',
    name: 'Maximo',
    icon: Settings,
    status: 'connected',
    lastSync: '5 minutes ago',
    documents: 8934,
    description: 'IBM Maximo Asset Management'
  },
  {
    id: 'erp',
    name: 'ERP System',
    icon: Database,
    status: 'warning',
    lastSync: '2 hours ago',
    documents: 12456,
    description: 'Enterprise Resource Planning system'
  },
  {
    id: 'email',
    name: 'Email Integration',
    icon: Mail,
    status: 'disconnected',
    lastSync: 'Never',
    documents: 0,
    description: 'Email attachment processing'
  }
];

const recentUploads = [
  { name: 'Project_Proposal_2024.pdf', size: '2.4 MB', status: 'processing', progress: 45 },
  { name: 'Safety_Manual_v3.docx', size: '1.8 MB', status: 'completed', progress: 100 },
  { name: 'Budget_Report_Q4.xlsx', size: '856 KB', status: 'completed', progress: 100 },
  { name: 'Contract_Amendment.pdf', size: '1.2 MB', status: 'failed', progress: 0 },
  { name: 'Technical_Specs.pdf', size: '3.1 MB', status: 'processing', progress: 78 }
];

export const MultiSourceIngestion = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-success/10 text-success border-success/20';
      case 'warning': return 'bg-warning/10 text-warning border-warning/20';
      case 'disconnected': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getFileStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-destructive" />;
      case 'processing': return <RefreshCw className="w-4 h-4 text-warning animate-spin" />;
      default: return <File className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Multi-Source Ingestion</h1>
        <p className="text-muted-foreground">
          Manage document sources and upload files to the system
        </p>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">File Upload</TabsTrigger>
          <TabsTrigger value="connectors">Data Connectors</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          {/* File Upload Area */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Upload Documents</CardTitle>
              <CardDescription>Drag and drop files or click to browse</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-16 text-center transition-colors cursor-pointer ${
                  dragActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-medium mb-4">Drop your files here</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Support for PDF, DOC, DOCX, XLS, XLSX files up to 10MB
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="metro-outline" size="lg" className="cursor-pointer">
                    <Plus className="w-5 h-5 mr-2" />
                    Choose Files
                  </Button>
                </label>
                
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">Selected Files:</h4>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted/30 p-2 rounded">
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                    <Button variant="metro" className="w-full mt-4">
                      Upload {files.length} File{files.length > 1 ? 's' : ''}
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connectors" className="space-y-6">
          {/* Data Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {connectors.map((connector) => (
              <Card key={connector.id} className="metro-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <connector.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{connector.name}</CardTitle>
                    <CardDescription>{connector.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className={getStatusColor(connector.status)}>
                    {connector.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Last Sync:</span>
                    <span className="text-muted-foreground">{connector.lastSync}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Documents:</span>
                    <span className="font-medium">{connector.documents.toLocaleString()}</span>
                  </div>
                  <Button 
                    variant={connector.status === 'connected' ? 'ghost' : 'metro-outline'} 
                    className="w-full"
                  >
                    {connector.status === 'connected' ? 'Manage' : 'Connect'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          {/* Recent Activity */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Latest file processing activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                    {getFileStatusIcon(upload.status)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{upload.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">{upload.size}</span>
                        {upload.status === 'processing' && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <Progress value={upload.progress} className="w-20 h-1" />
                            <span className="text-xs text-muted-foreground">{upload.progress}%</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(upload.status)}>
                      {upload.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};