import { 
  Shield, 
  Users, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Key,
  Server,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';

const securityFeatures = [
  {
    id: 1,
    title: 'Role-Based Access Control (RBAC)',
    description: 'Granular permissions based on user roles and responsibilities',
    icon: Users,
    status: 'active',
    details: 'Controls access to documents and features based on user roles: Executive, Staff, and Vendor levels.'
  },
  {
    id: 2,
    title: 'Advanced Firewall Protection',
    description: 'Multi-layer network security with intrusion detection',
    icon: Shield,
    status: 'active',
    details: 'Real-time monitoring and blocking of malicious traffic with automated threat response.'
  },
  {
    id: 3,
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption for data at rest and in transit',
    icon: Lock,
    status: 'active',
    details: 'All documents and communications are encrypted using industry-standard AES-256 encryption.'
  },
  {
    id: 4,
    title: 'Real-time Monitoring',
    description: '24/7 system monitoring and anomaly detection',
    icon: Eye,
    status: 'active',
    details: 'Continuous monitoring of system activities with automated alerts for suspicious behavior.'
  }
];

const rolePermissions = [
  {
    role: 'Executive',
    color: 'bg-warning/10 text-warning border-warning/20',
    permissions: [
      'View all dashboards and KPIs',
      'Access financial and strategic reports',
      'Approve high-level documents',
      'View system-wide analytics',
      'Manage executive-level settings'
    ]
  },
  {
    role: 'Staff',
    color: 'bg-primary/10 text-primary border-primary/20',
    permissions: [
      'Process and manage documents',
      'Access audit trails and logs',
      'Monitor system status',
      'Manage document workflows',
      'View operational reports'
    ]
  },
  {
    role: 'Vendor',
    color: 'bg-success/10 text-success border-success/20',
    permissions: [
      'Upload vendor-specific documents',
      'Track processing status',
      'View approved documents',
      'Access vendor portal only',
      'Download approved contracts'
    ]
  }
];

const securityMetrics = [
  { label: 'Security Score', value: '98.5%', status: 'excellent' },
  { label: 'Failed Login Attempts', value: '23', status: 'normal' },
  { label: 'Active Sessions', value: '1,234', status: 'normal' },
  { label: 'Threats Blocked', value: '45', status: 'normal' },
  { label: 'Last Security Scan', value: '2 hours ago', status: 'normal' },
  { label: 'Compliance Score', value: '96.2%', status: 'excellent' }
];

const recentSecurityEvents = [
  {
    id: 1,
    type: 'authentication',
    message: 'Multiple failed login attempts detected',
    severity: 'medium',
    timestamp: '2024-12-15 14:23:12',
    resolved: true
  },
  {
    id: 2,
    type: 'access',
    message: 'Unusual document access pattern detected',
    severity: 'low',
    timestamp: '2024-12-15 13:45:33',
    resolved: true
  },
  {
    id: 3,
    type: 'system',
    message: 'Security patch applied successfully',
    severity: 'info',
    timestamp: '2024-12-15 12:30:45',
    resolved: true
  },
  {
    id: 4,
    type: 'network',
    message: 'Firewall rule updated for vendor access',
    severity: 'info',
    timestamp: '2024-12-15 11:15:22',
    resolved: true
  }
];

export const SecurityLayer = () => {
  const { user } = useAuth();
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/10 text-success border-success/20';
      case 'warning': return 'bg-warning/10 text-warning border-warning/20';
      case 'inactive': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-primary/10 text-primary border-primary/20';
      case 'info': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case 'authentication': return <Key className="w-4 h-4" />;
      case 'access': return <Eye className="w-4 h-4" />;
      case 'system': return <Server className="w-4 h-4" />;
      case 'network': return <Globe className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Security Layer</h1>
        <p className="text-muted-foreground">
          Monitor and manage system security, access controls, and compliance
        </p>
      </div>

      <Tabs defaultValue={user?.role === 'executive' ? 'overview' : 'monitoring'} className="space-y-6">
        <TabsList className={`grid w-full ${user?.role === 'executive' ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {user?.role === 'executive' && (
            <>
              <TabsTrigger value="overview">Security Overview</TabsTrigger>
              <TabsTrigger value="access">Access Control</TabsTrigger>
            </>
          )}
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        {user?.role === 'executive' && (
          <TabsContent value="overview" className="space-y-6">
            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature) => (
              <Card key={feature.id} className="metro-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className={getStatusColor(feature.status)}>
                    {feature.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{feature.details}</p>
                  <Button variant="metro-outline" size="sm">
                    Configure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Metrics */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Security Metrics</CardTitle>
              <CardDescription>Real-time security status indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {securityMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {user?.role === 'executive' && (
          <TabsContent value="access" className="space-y-6">
          {/* Role-Based Access Control */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Role-Based Access Control</CardTitle>
              <CardDescription>Manage permissions and access levels for different user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rolePermissions.map((roleData) => (
                  <div key={roleData.role} className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">{roleData.role} Role</h3>
                      <Badge variant="outline" className={roleData.color}>
                        {roleData.role.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {roleData.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="monitoring" className="space-y-6">
          {/* Security Events */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
              <CardDescription>Latest security alerts and system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSecurityEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getSeverityIcon(event.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.message}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getSeverityColor(event.severity)}>
                            {event.severity}
                          </Badge>
                          {event.resolved && (
                            <CheckCircle className="w-4 h-4 text-success" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.timestamp} • {event.type.charAt(0).toUpperCase() + event.type.slice(1)} Event
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Monitoring */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
                <AlertTriangle className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">3</div>
                <p className="text-xs text-muted-foreground">2 blocked, 1 investigating</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Status</CardTitle>
                <Activity className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">99.9%</div>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Level</CardTitle>
                <Shield className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">High</div>
                <p className="text-xs text-muted-foreground">All protections active</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          {/* Compliance Status */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Regulatory compliance and audit readiness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                    <span className="font-medium">ISO 27001</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Compliant
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                    <span className="font-medium">GDPR</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Compliant
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10">
                    <span className="font-medium">SOC 2 Type II</span>
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                      In Progress
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-6 rounded-lg bg-primary/5">
                    <div className="text-4xl font-bold text-primary mb-2">96.2%</div>
                    <p className="text-sm text-muted-foreground">Overall Compliance Score</p>
                  </div>
                  <Button variant="metro" className="w-full">
                    Generate Compliance Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audit Trail Summary */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Audit Trail Summary</CardTitle>
              <CardDescription>Security-related audit activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Security Events Logged</span>
                  <Badge variant="outline" className="text-xs">15,234 events</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Failed Access Attempts</span>
                  <Badge variant="outline" className="text-xs">89 attempts</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Policy Violations</span>
                  <Badge variant="outline" className="text-xs">3 violations</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Security Scans Completed</span>
                  <Badge variant="outline" className="text-xs">24 scans</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};