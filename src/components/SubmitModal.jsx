import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { scoreState } from "../recoil";

const SubmitModal = ({ score, toggleModal, qid, handlePlayAgain }) => {
  const setScore = useSetRecoilState(scoreState);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-red-100 bg-opacity-60">
      <div className="border-2 border-slate-600 w-1/4 p-3 rounded-md bg-red-100">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p></p>
            <MdClose
              className="text-xl text-gray-600 cursor-pointer ml-3 text-right"
              onClick={() => toggleModal(false)}
            />
          </div>

          <h1 className="text-lg font-bold text-center">
            Your score for the quiz is {score}
          </h1>
        </div>
        <div className="flex mt-5 gap-2 justify-center">
          <Link to={`/quest/${qid}`}>
            <button
              type="submit"
              className="text-white text-center w-full py-1.5 px-2 bg-red-400 rounded font-semibold"
              onClick={() => handlePlayAgain()}
            >
              Play again
            </button>
          </Link>
          <Link to={`/`}>
            <button
              type="button"
              className="text-black text-center w-full py-1 px-2 border-2 border-black rounded"
              onClick={() => setScore(0)}
            >
              Go to Home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SubmitModal };
