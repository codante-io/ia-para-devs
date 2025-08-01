'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Button
      variant="outline"
      className="border-brand text-brand hover:bg-brand hover:text-white px-6 py-3"
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Página Anterior
    </Button>
  );
}