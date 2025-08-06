'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [numQuestions, setNumQuestions] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [theme, setTheme] = useState("")

  const router = useRouter()

  function changeTheme(theme: string) {
    switch (theme) {
      case "films":
        setTheme("11")
        break
      case "books":
        setTheme("10")
        break
      case "music":
        setTheme("12")
        break
      case "videogame":
        setTheme("15")
        break
      case "anime":
        setTheme("31")
        break
      case "cartoon":
        setTheme("32")
        break
      default:
        setTheme("")
    }
  }

  function handleClick() {
    if (!theme || !difficulty || !numQuestions) {
      return
    }

    const params = new URLSearchParams({
      amount: numQuestions,
      difficulty,
      category: theme,
    });

    router.push(`/quiz?${params.toString()}`);
  }

  return (
    <>
      <h1 className="text-4xl mb-4 mt-6 text-gray-800">Entertainment Quiz</h1>
      <div className="flex flex-col justify-start w-full max-w-md mx-auto px-4">
        <label className="text-2xl text-gray-600 mb-2" htmlFor="numQuestions">
          Number of questions (1-10):
        </label>
        <input
          className="block w-full border p-2 rounded text-gray-600 mb-4"
          min="1"
          max="10"
          placeholder="Choose a number between 1 and 10"
          type="number"
          name="numQuestions"
          id="numQuestions"
          onChange={(e) => setNumQuestions(e.target.value)}
        />

        <label className="text-2xl text-gray-600 mb-2" htmlFor="difficulty">
          Difficulty:
        </label>
        <select
          className="block w-full border p-2 rounded text-gray-600 mb-4"
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select a difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>

        <label className="text-2xl text-gray-600 mb-2" htmlFor="theme">
          Theme:
        </label>
        <select
          className="block w-full border p-2 rounded text-gray-600 mb-4"
          name="theme"
          id="theme"
          onChange={(e) => changeTheme(e.target.value)}
        >
          <option value="">Select a theme</option>
          <option value="films">Films</option>
          <option value="books">Books</option>
          <option value="music">Music</option>
          <option value="videogame">Video Games</option>
          <option value="anime">Anime</option>
          <option value="cartoon">Cartoon</option>
        </select>

        <button
          onClick={handleClick}
          className="cursor-pointer bg-gray-600 text-white p-3 rounded-[10px] hover:bg-gray-800 transition duration-700">
          PLAY
        </button>
      </div>
    </>
  );
}
