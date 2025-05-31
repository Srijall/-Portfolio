"use client";

import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';
import { TerminalLoader } from '@/components/ui/terminal-loader';

interface LoadingContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const showLoader = () => {
    setIsLoading(true);
    startTimeRef.current = Date.now();
    // Clear any previous hide timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const hideLoader = () => {
    if (startTimeRef.current === null) {
      setIsLoading(false);
      return;
    }
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950/70 z-50">
          <TerminalLoader />
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 