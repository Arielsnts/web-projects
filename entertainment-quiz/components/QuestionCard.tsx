type Props = {
  question: Question;
  index: number;
  onAnswer: (correct: boolean) => void;
};

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export default function QuestionCard({ question, index, onAnswer }: Props) {
  function handleAnswer(answer: string) {
    const isCorrect = answer == question.correct_answer ? true : false
    onAnswer(isCorrect)
  }

  return (

    <div className="h-full flex flex-col justify-between items-center py-8 px-4">
      <h1 className="text-4xl mb-4 text-gray-800">Question {index + 1}</h1>

      <div className="flex flex-col justify-center w-full max-w-md mx-auto flex-1">
        <p className="text-2xl text-center text-gray-600 mb-2">{question.question}</p>
      </div>

      <div className="flex gap-4">
        <button
          className="w-[150px] cursor-pointer bg-gray-600 text-white p-3 rounded-[10px] hover:bg-gray-800 transition duration-700"
          onClick={() => handleAnswer("True")}
        >
          TRUE
        </button>

        <button
          className="w-[150px] cursor-pointer bg-gray-600 text-white p-3 rounded-[10px] hover:bg-gray-800 transition duration-700"
          onClick={() => handleAnswer("False")}
        >
          FALSE
        </button>

      </div>
    </div>

  );
}
