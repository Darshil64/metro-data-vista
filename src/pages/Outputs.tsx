import { 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  Brain, 
  BarChart3, 
  PieChart,
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const deadlines = [
  {
    id: 1,
    title: 'Contract Renewal - ABC Corp',
    date: '2025-01-15',
    daysLeft: 30,
    priority: 'high',
    category: 'Legal',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Q4 Financial Report Submission',
    date: '2024-12-31',
    daysLeft: 16,
    priority: 'high',
    category: 'Finance',
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Safety Audit Completion',
    date: '2025-02-28',
    daysLeft: 74,
    priority: 'medium',
    category: 'Operations',
    status: 'pending'
  },
  {
    id: 4,
    title: 'Employee Training Certification',
    date: '2025-03-15',
    daysLeft: 89,
    priority: 'medium',
    category: 'HR',
    status: 'pending'
  }
];

const kpiData = [
  { name: 'Document Processing Rate', value: 94.2, target: 90, trend: '+2.1%' },
  { name: 'Compliance Score', value: 87.5, target: 85, trend: '+1.8%' },
  { name: 'System Uptime', value: 99.8, target: 99.5, trend: '+0.1%' },
  { name: 'User Satisfaction', value: 4.6, target: 4.0, trend: '+0.3%' },
];

const paymentData = [
  {
    id: 1,
    vendor: 'ABC Construction Ltd',
    amount: '₹2,450,000',
    dueDate: '2024-12-20',
    status: 'pending',
    category: 'Infrastructure'
  },
  {
    id: 2,
    vendor: 'Tech Solutions Inc',
    amount: '₹890,000',
    dueDate: '2024-12-25',
    status: 'approved',
    category: 'IT Services'
  },
  {
    id: 3,
    vendor: 'Safety Equipment Co',
    amount: '₹1,200,000',
    dueDate: '2024-12-30',
    status: 'pending',
    category: 'Safety Equipment'
  },
  {
    id: 4,
    vendor: 'Maintenance Corp',
    amount: '₹675,000',
    dueDate: '2025-01-05',
    status: 'processing',
    category: 'Maintenance'
  }
];

const insights = [
  {
    id: 1,
    title: 'Contract Optimization Opportunity',
    description: 'Analysis shows potential savings of ₹4.5M through vendor consolidation',
    impact: 'high',
    category: 'Finance',
    confidence: 89
  },
  {
    id: 2,
    title: 'Maintenance Schedule Efficiency',
    description: 'Predictive analysis suggests optimizing maintenance schedules can reduce downtime by 15%',
    impact: 'medium',
    category: 'Operations',
    confidence: 92
  },
  {
    id: 3,
    title: 'Compliance Gap Identified',
    description: '12 documents require updates to meet new safety regulations',
    impact: 'high',
    category: 'Compliance',
    confidence: 96
  },
  {
    id: 4,
    title: 'Staff Training Recommendation',
    description: 'AI processing efficiency can be improved by 8% with additional staff training',
    impact: 'medium',
    category: 'HR',
    confidence: 85
  }
];

const trendData = [
  { month: 'Jul', documents: 3200, processing: 94.2 },
  { month: 'Aug', documents: 3450, processing: 95.1 },
  { month: 'Sep', documents: 3800, processing: 93.8 },
  { month: 'Oct', documents: 4100, processing: 96.2 },
  { month: 'Nov', documents: 4350, processing: 94.9 },
  { month: 'Dec', documents: 4600, processing: 97.1 },
];

export const Outputs = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-success/10 text-success border-success/20';
      case 'pending': return 'bg-warning/10 text-warning border-warning/20';
      case 'processing': return 'bg-primary/10 text-primary border-primary/20';
      case 'in-progress': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const getDaysLeftColor = (days: number) => {
    if (days <= 15) return 'text-destructive';
    if (days <= 30) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Outputs & Analytics</h1>
        <p className="text-muted-foreground">
          View deadlines, KPIs, payments, insights, and trends
        </p>
      </div>

      <Tabs defaultValue="deadlines" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="deadlines" className="space-y-6">
          {/* Deadlines Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Deadlines</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Tracked deadlines</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Due This Week</CardTitle>
                <Clock className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">3</div>
                <p className="text-xs text-muted-foreground">Urgent attention</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">1</div>
                <p className="text-xs text-muted-foreground">Requires action</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">156</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Deadlines List */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Critical dates and deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{deadline.title}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getPriorityColor(deadline.priority)}>
                          {deadline.priority}
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(deadline.status)}>
                          {deadline.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{deadline.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{deadline.date}</p>
                      <p className={`text-xs ${getDaysLeftColor(deadline.daysLeft)}`}>
                        {deadline.daysLeft} days left
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kpis" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kpiData.map((kpi, index) => (
              <Card key={index} className="metro-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
                  <TrendingUp className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-end space-x-2">
                    <div className="text-2xl font-bold">{kpi.value}%</div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      {kpi.trend}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Target: {kpi.target}%</span>
                      <span>Current: {kpi.value}%</span>
                    </div>
                    <Progress value={(kpi.value / 100) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart Placeholder */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>KPI performance over time</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Chart visualization would be here</p>
                <p className="text-xs text-muted-foreground">Using Recharts or Chart.js</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          {/* Payment Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pending</CardTitle>
                <DollarSign className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5.2M</div>
                <p className="text-xs text-muted-foreground">8 pending payments</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹12.8M</div>
                <p className="text-xs text-muted-foreground">34 payments processed</p>
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">₹890K</div>
                <p className="text-xs text-muted-foreground">2 overdue payments</p>
              </CardContent>
            </Card>
          </div>

          {/* Payment List */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Payment Schedule</CardTitle>
              <CardDescription>Upcoming vendor payments and invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentData.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{payment.vendor}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getStatusColor(payment.status)}>
                          {payment.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{payment.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{payment.amount}</p>
                      <p className="text-xs text-muted-foreground">Due: {payment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          {/* AI Insights */}
          <div className="space-y-4">
            {insights.map((insight) => (
              <Card key={insight.id} className="metro-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                    <CardDescription>{insight.description}</CardDescription>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant="outline" className={getImpactColor(insight.impact)}>
                      {insight.impact} impact
                    </Badge>
                    <p className="text-xs text-muted-foreground">{insight.confidence}% confidence</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {insight.category}
                    </Badge>
                    <Button variant="metro-outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          {/* Trend Analysis */}
          <Card className="metro-card">
            <CardHeader>
              <CardTitle>Document Processing Trends</CardTitle>
              <CardDescription>6-month processing volume and efficiency trends</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Trend charts would be displayed here</p>
                <p className="text-xs text-muted-foreground">Line and bar charts showing trends</p>
              </div>
            </CardContent>
          </Card>

          {/* Trend Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="metro-card">
              <CardHeader>
                <CardTitle>Volume Trends</CardTitle>
                <CardDescription>Document processing volume changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendData.slice(-3).map((data, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{data.month}</span>
                    <div className="text-right">
                      <span className="font-medium">{data.documents.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-2">docs</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="metro-card">
              <CardHeader>
                <CardTitle>Efficiency Trends</CardTitle>
                <CardDescription>Processing efficiency changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendData.slice(-3).map((data, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{data.month}</span>
                    <div className="text-right">
                      <span className="font-medium">{data.processing}%</span>
                      <span className="text-xs text-muted-foreground ml-2">efficiency</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};