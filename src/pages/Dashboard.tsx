import { 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Upload,
  Brain,
  Database
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';

const ExecutiveDashboard = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45,231</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+8% from last month</p>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Processing Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94.2%</div>
          <p className="text-xs text-muted-foreground">+2.1% from last month</p>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹2.4M</div>
          <p className="text-xs text-muted-foreground">23 invoices pending</p>
        </CardContent>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Recent KPIs</CardTitle>
          <CardDescription>Key performance indicators overview</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Document Processing Speed</span>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">98.5%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Compliance Rate</span>
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">87.2%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Data Quality Score</span>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">94.8%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Recent Insights</CardTitle>
          <CardDescription>AI-generated business insights</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm font-medium">Contract Renewal Alert</p>
            <p className="text-xs text-muted-foreground">15 vendor contracts expire within 30 days</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Cost Optimization</p>
            <p className="text-xs text-muted-foreground">Potential savings of ₹45K identified in Q4 operations</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Compliance Update</p>
            <p className="text-xs text-muted-foreground">New safety regulations require 12 documents to be updated</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const StaffDashboard = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Documents Processed Today</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">1,247</div>
          <p className="text-xs text-muted-foreground">Target: 1,200</p>
        </CardContent>
      </Card>
      
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          <AlertTriangle className="h-4 w-4 text-warning" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-warning">23</div>
          <p className="text-xs text-muted-foreground">5 high priority</p>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Status</CardTitle>
          <Database className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">99.8%</div>
          <p className="text-xs text-muted-foreground">All systems operational</p>
        </CardContent>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest system activities and events</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-success rounded-full mt-2" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Batch processing completed</p>
              <p className="text-xs text-muted-foreground">2,456 documents processed successfully</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-warning rounded-full mt-2" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Security scan initiated</p>
              <p className="text-xs text-muted-foreground">Quarterly security compliance check</p>
              <p className="text-xs text-muted-foreground">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">New documents ingested</p>
              <p className="text-xs text-muted-foreground">SharePoint connector added 156 files</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Audit Trail Summary</CardTitle>
          <CardDescription>Recent audit activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Document Access</span>
            <Badge variant="outline" className="text-xs">1,234 events</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">File Modifications</span>
            <Badge variant="outline" className="text-xs">89 events</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Security Events</span>
            <Badge variant="outline" className="text-xs">12 events</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">System Changes</span>
            <Badge variant="outline" className="text-xs">3 events</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const VendorDashboard = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Documents Uploaded</CardTitle>
          <Upload className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">342</div>
          <p className="text-xs text-muted-foreground">This month</p>
        </CardContent>
      </Card>
      
      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Processing Status</CardTitle>
          <Brain className="h-4 w-4 text-warning" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-warning">23</div>
          <p className="text-xs text-muted-foreground">Pending review</p>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Approved Documents</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">319</div>
          <p className="text-xs text-muted-foreground">93.3% approval rate</p>
        </CardContent>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your latest document submissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Invoice_Q4_2024.pdf</p>
              <p className="text-xs text-muted-foreground">Uploaded 2 hours ago</p>
            </div>
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Processing</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Contract_Amendment_v2.docx</p>
              <p className="text-xs text-muted-foreground">Uploaded 1 day ago</p>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">Approved</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Safety_Report_Dec2024.pdf</p>
              <p className="text-xs text-muted-foreground">Uploaded 3 days ago</p>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">Approved</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="metro-card">
        <CardHeader>
          <CardTitle>Processing Status</CardTitle>
          <CardDescription>Track your document processing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Upload Queue</span>
              <span>2 documents</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>AI Processing</span>
              <span>23 documents</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-warning h-2 rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Review & Approval</span>
              <span>8 documents</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'executive':
        return <ExecutiveDashboard />;
      case 'staff':
        return <StaffDashboard />;
      case 'vendor':
        return <VendorDashboard />;
      default:
        return <StaffDashboard />;
    }
  };

  const getRoleTitle = () => {
    switch (user?.role) {
      case 'executive':
        return 'Executive Dashboard';
      case 'staff':
        return 'Staff Dashboard';
      case 'vendor':
        return 'Vendor Portal';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{getRoleTitle()}</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.name}. Here's what's happening with your documents.
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {user?.role?.toUpperCase()} ACCESS
        </Badge>
      </div>
      
      {renderDashboard()}
    </div>
  );
};