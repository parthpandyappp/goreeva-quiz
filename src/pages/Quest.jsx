import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { quizState, scoreState } from "../recoil";
import { CountDownTimer, SubmitModal } from "../components";
import { notifyPlayAgain, notifyQuitQuiz, notifyQuizSubmit } from "../utils";

const Quest = () => {
  const { qid } = useParams();
  const quizData = useRecoilValue(quizState);
  const navigate = useNavigate();
  const [score, setScore] = useRecoilState(scoreState);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { title, questions, ded_pts, add_pts, time } = quizData.find(
    (q) => q.qid === qid
  );
  const [timer, setTimer] = useState(time);

  const [index, setIndex] = useState(0);
  const [activeOptIndex, setActiveOptIndex] = useState(null);
  const quest = questions[index];

  const nextQuest = () => {
    responseValidation(selectedOption);
    let ind = index + 1;

    if (ind > 5) {
      setIndex(5);
    }

    setIndex(ind);
    setActiveOptIndex(null);
    setSelectedOption("");
  };

  const responseValidation = (option) => {
    let flag = false;

    questions.forEach((quest) => {
      if (option === quest.answer) {
        setScore(() => parseInt(score) + parseInt(add_pts));
        flag = true;
      }
    });

    if (flag === false) {
      setScore(() => parseInt(score) - parseInt(ded_pts));
    }
  };

  const handlePlayAgain = () => {
    setIndex(0);
    setScore(0);
    setShowModal(false);
    setTimer(time);
    setSelectedOption("");
    setActiveOptIndex(null);
    notifyPlayAgain();
  };

  return (
    <div className="flex flex-col grow mt-2 h-full w-full justify-center items-center">
      <section className="w-2/4 mx-auto border-2 px-4 py-2 rounded-lg">
        <h1 className="text-xl font-bold text-red-400 text-center">{title}</h1>
        <div className="flex justify-between">
          <p>
            Question: {index + 1}/{questions.length}
          </p>
          <div className="flex justify-between w-28">
            <p>Score: {score}</p>
            <CountDownTimer time={timer} toggleModal={setShowModal} />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-lg font-semibold text-center">{quest.question}</p>
          <div className="flex flex-col w-2/3 mx-auto gap-1">
            {quest.options.map((opt, index) => {
              return (
                <p
                  className={`text-center  py-1 rounded cursor-pointer ${
                    activeOptIndex === index
                      ? `bg-red-400 text-white`
                      : `border border-red-400`
                  }`}
                  onClick={() => {
                    setActiveOptIndex(index);
                    setSelectedOption(opt);
                  }}
                >
                  {opt}
                </p>
              );
            })}
          </div>
          <div className="flex gap-1 justify-center mt-2">
            <button
              className="py-1 px-6 border border-red-400 text-red-400 rounded"
              onClick={() => {
                setScore(0);
                notifyQuitQuiz();
                navigate("/");
              }}
            >
              Quit
            </button>
            {index === 4 ? (
              <button
                className="py-1 px-6 border bg-red-400 text-white rounded"
                onClick={() => {
                  setShowModal(true);
                  notifyQuizSubmit();
                }}
              >
                Submit
              </button>
            ) : (
              <button
                className={`py-1 px-6 border  text-white rounded ${
                  selectedOption.length ? "bg-red-400" : "bg-red-100"
                }`}
                onClick={() =>
                  selectedOption.length > 0 ? nextQuest() : undefined
                }
              >
                Next
              </button>
            )}
          </div>
          {showModal && (
            <SubmitModal
              score={score}
              toggleModal={setShowModal}
              handlePlayAgain={handlePlayAgain}
              qid={qid}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export { Quest };
