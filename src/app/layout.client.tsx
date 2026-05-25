'use client';

import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { PointerAura } from '@/components/PointerAura';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <PointerAura />
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
