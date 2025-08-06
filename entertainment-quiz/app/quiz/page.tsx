'use client'

import { Suspense } from 'react';
import QuizContent from '@/components/QuizContent'; // ajuste o path se necessário

export default function QuizPage() {
  return (
    <Suspense fallback={<p className="h-full m-10 text-2xl text-center text-gray-600 mb-2">Loading questions...</p>}>
      <QuizContent />
    </Suspense>
  );
}
