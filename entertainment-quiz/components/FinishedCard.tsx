type Props = {
    score: number,
    onRestart: () => void,
    onHome: () => void
}

export default function FinishedCard({ score, onRestart, onHome }: Props) {
    return (

            <div className="h-full flex flex-col justify-between items-center py-8">
                <h1 className="text-4xl mb-4 text-gray-800">Finished!</h1>
                <div className="flex flex-col justify-center w-full max-w-md mx-auto flex-1">
                    <p className="text-2xl text-center text-gray-600 mb-2">{`Your score: ${score}`}</p>
                </div>
                <div className="flex gap-4">
                    <button className="w-[150px] cursor-pointer bg-gray-600 text-white p-3 rounded-[10px] hover:bg-gray-800 transition duration-700" onClick={onRestart}>AGAIN</button>
                    <button className="w-[150px] cursor-pointer bg-gray-600 text-white p-3 rounded-[10px] hover:bg-gray-800 transition duration-700" onClick={onHome}>HOME</button>
                </div>
            </div>

    )
}