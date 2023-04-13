import { Link } from "react-router-dom";
import { notifyQuizStart } from "../utils";

const QuizCard = ({ title, content, qdata }) => {
  return (
    <div className="border border-2 rounded w-72 p-2">
      <h2 className="font-semibold underline underline-offset-4 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500 drop-shadow-lg text-xl">
        {title}
      </h2>
      <p className="font-base text-sm h-20 mt-2">{content}</p>
      <Link to={`/quest/${qdata.qid}`}>
        <button
          className="px-6 py-1 bg-red-400 rounded text-white font-bold"
          onClick={() => notifyQuizStart()}
        >
          Play
        </button>
      </Link>
    </div>
  );
};

export { QuizCard };
