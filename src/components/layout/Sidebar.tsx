import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Database, 
  Brain, 
  FolderOpen, 
  Shield, 
  BarChart3, 
  Upload, 
  ChevronLeft, 
  ChevronRight,
  Train,
  Settings,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
  { name: 'Multi-Source Ingestion', href: '/ingestion', icon: Upload },
  { name: 'AI Processing', href: '/ai-processing', icon: Brain },
  { name: 'Central Repository', href: '/repository', icon: FolderOpen },
  { name: 'Security Layer', href: '/security', icon: Shield },
  { name: 'Outputs', href: '/outputs', icon: BarChart3 },
];

const bottomItems = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Filter navigation items based on user role
  const getFilteredNavigationItems = () => {
    if (user?.role === 'vendor') {
      // Remove multi-source ingestion for vendors
      return navigationItems.filter(item => item.href !== '/ingestion');
    }
    return navigationItems;
  };

  return (
    <div className={cn(
      "h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
          <Train className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-sidebar-foreground truncate">
              Metro Rail DMS
            </h1>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              Document Management
            </p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors flex-shrink-0"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-sidebar-foreground" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {getFilteredNavigationItems().map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              isActive(item.href)
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
            title={collapsed ? item.name : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-2 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              isActive(item.href)
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
            title={collapsed ? item.name : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.name}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
};