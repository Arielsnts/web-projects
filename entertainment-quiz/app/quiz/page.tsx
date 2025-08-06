'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import QuestionCard from '@/components/QuestionCard';
import FinishedCard from '@/components/FinishedCard';
import { useRouter } from 'next/navigation';
import { sourceMapsEnabled } from 'process';

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}


export default function QuizPage() {
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  useEffect(() => {
    async function fetchParams() {
      const amount = searchParams.get('amount')
      const category = searchParams.get('category')
      const difficulty = searchParams.get('difficulty')

      const res = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=boolean`
      )
      const data = await res.json()

      if (!data.results) {
        setQuestions([]);
        return;
      }

      const cleanedQuestions = data.results.map((q: Question) => ({
        ...q,
        question: decodeHtml(q.question),
      }));

      setQuestions(cleanedQuestions);
    }

    fetchParams()
  }, [searchParams])

  function onAnswer(correct: boolean) {
    const sound = new Audio(correct ? '/sounds/correct.mp3' : '/sounds/wrong.mp3');
    sound.play();

    setBgColor(correct ? "bg-green-500" : "bg-red-500");

    setTimeout(() => {
      if (correct) {
        setScore((prev) => prev + 1);
      }

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setBgColor("bg-white");
      } else {
        setFinished(true);
      }
    }, 1000);
  }


  const router = useRouter()

  function onHome() {
    router.push("/")
  }

  function onRestart() {
    window.location.reload();
  }

  if (questions.length === 0) {
    return <p className="h-full m-10 text-2xl text-center text-gray-600 mb-2">Loading questions...</p>;
  }

  if (finished) {
    const sound = new Audio('/sounds/finished.mp3')
    sound.play()

    return <FinishedCard
      score={score}
      onHome={onHome}
      onRestart={onRestart}
    />
  }

  return (
    <div className={`w-full h-full ${bgColor} rounded-[20px] transition-colors duration-500`}>
      <QuestionCard

        question={questions[currentIndex]}
        index={currentIndex}
        onAnswer={onAnswer}
      />
    </div>
  );
}
