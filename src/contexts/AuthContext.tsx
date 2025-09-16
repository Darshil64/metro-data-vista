import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: Record<string, { password: string; user: User }> = {
  'executive@metrorail.com': {
    password: 'exec123',
    user: { id: '1', name: 'Sarah Johnson', email: 'executive@metrorail.com', role: 'executive' }
  },
  'staff@metrorail.com': {
    password: 'staff123',
    user: { id: '2', name: 'Mike Chen', email: 'staff@metrorail.com', role: 'staff' }
  },
  'vendor@metrorail.com': {
    password: 'vendor123',
    user: { id: '3', name: 'Alice Kumar', email: 'vendor@metrorail.com', role: 'vendor' }
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    const mockUser = mockUsers[email];
    if (mockUser && mockUser.password === password && mockUser.user.role === role) {
      setUser(mockUser.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};