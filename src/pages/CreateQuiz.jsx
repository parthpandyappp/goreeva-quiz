import { useState } from "react";
import { createQuizlet } from "../utils";
import { v4 as uuidv4 } from "uuid";

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState({
    qid: uuidv4(),
    title: "",
    description: "",
    time: "",
    add_pts: 0,
    ded_pts: 0,
    questions: [
      {
        id: 1,
        question: "",
        answer: "",
        options: [],
      },
    ],
  });

  console.log("FORM DATA: ", quiz);

  function handleOptionChange(e, questionId, optionIndex) {
    const value = e.target.value;

    setQuiz((prevState) => {
      const questionsCopy = [...prevState.questions];
      const questionIndex = questionsCopy.findIndex((q) => q.id === questionId);
      const questionCopy = { ...questionsCopy[questionIndex] };
      const optionsCopy = [...questionCopy.options];
      optionsCopy[optionIndex] = value;
      questionCopy.options = optionsCopy;
      questionsCopy[questionIndex] = questionCopy;

      return {
        ...prevState,
        questions: questionsCopy,
      };
    });
  }

  function handleQuestionChange(e, questionId) {
    const value = e.target.value;

    setQuiz((prevState) => {
      const questionsCopy = [...prevState.questions];
      const questionIndex = questionsCopy.findIndex((q) => q.id === questionId);
      const questionCopy = { ...questionsCopy[questionIndex] };
      questionCopy.question = value;
      questionsCopy[questionIndex] = questionCopy;

      return {
        ...prevState,
        questions: questionsCopy,
      };
    });
  }

  function handleAnswerChange(e, questionId) {
    const value = e.target.value;

    setQuiz((prevState) => {
      const questionsCopy = [...prevState.questions];
      const questionIndex = questionsCopy.findIndex((q) => q.id === questionId);
      const questionCopy = { ...questionsCopy[questionIndex] };
      questionCopy.answer = value;
      questionsCopy[questionIndex] = questionCopy;

      return {
        ...prevState,
        questions: questionsCopy,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuizlet(quiz);
    setQuiz({
      qid: uuidv4(),
      title: "",
      description: "",
      time: "",
      add_pts: 0,
      ded_pts: 0,
      questions: [
        {
          id: 1,
          question: "",
          answer: "",
          options: [],
        },
      ],
    });
  };

  return (
    <div className="flex flex-col grow mt-2 w-full justify-center items-center">
      <section className="w-2/4 mx-auto  border-2 px-4 py-2 rounded-lg">
        <h1 className="text-xl text-center font-bold tracking-wider underline underline-offset-4 decoration-dashed">
          Create quiz
        </h1>
        <form
          className="flex flex-col justify-center py-2 mt-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-1 justify-center mx-auto">
            <section className="w-1/2">
              <label htmlFor="title" className="font-medium">
                Quiz name
              </label>
              <input
                placeholder='"Famous Quotes from Literature"'
                type="text"
                name="title"
                value={quiz.title}
                className="border w-full rounded-sm py-1 px-1"
                onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
              />
            </section>
            <section className="w-1/2">
              <label htmlFor="time" className="font-medium">
                Time limit (in mins)
              </label>
              <input
                placeholder="15"
                type="number"
                name="time"
                value={quiz.time}
                className="border w-full rounded-sm py-1 px-1"
                onChange={(e) => setQuiz({ ...quiz, time: e.target.value })}
              />
            </section>
          </div>
          <div className="flex gap-1 justify-center mx-auto mt-4">
            <section className="w-1/2">
              <label htmlFor="add_pts" className="font-medium">
                Credit points per correct answer
              </label>
              <input
                placeholder="5"
                type="number"
                name="add_pts"
                value={quiz.add_pts}
                className="border w-full rounded-sm py-1 px-1"
                onChange={(e) => setQuiz({ ...quiz, add_pts: e.target.value })}
              />
            </section>
            <section className="w-1/2">
              <label htmlFor="ded_pts" className="font-medium">
                Debit points per incorrect answer
              </label>
              <input
                placeholder="1"
                type="number"
                name="ded_pts"
                value={quiz.ded_pts}
                className="border w-full rounded-sm py-1 px-1"
                onChange={(e) => setQuiz({ ...quiz, ded_pts: e.target.value })}
              />
            </section>
          </div>
          <div className="flex gap-1 mt-4">
            <section className="w-full">
              <label htmlFor="description" className="font-medium">
                Quiz description
              </label>
              <textarea
                placeholder="This quiz will present you with famous quotes from literature and ask you to identify the author and the work from which the quote is taken."
                name="description"
                value={quiz.description}
                className="border w-full rounded-sm h-3/4 px-1 py-1"
                onChange={(e) =>
                  setQuiz({ ...quiz, description: e.target.value })
                }
              />
            </section>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            {quiz.questions.map((q) => {
              return (
                <section className="w-full">
                  <label htmlFor={`ques-${q.id}`} className="font-medium">
                    Question {q.id}
                  </label>
                  <input
                    type="text"
                    name={`ques-${q.id}`}
                    placeholder={`Question ${q.id} goes here`}
                    className="border w-full rounded-sm py-1 px-1"
                    value={
                      quiz.questions.find((que) => que.id === q.id).question
                    }
                    onChange={(e) => handleQuestionChange(e, q.id)}
                  />
                  <div className="mt-2">
                    <p className="font-medium">Options</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {Array.from({ length: 4 }).map((_, index) => {
                        return (
                          <input
                            type="text"
                            className="border w-1/3 rounded-sm py-1 px-1"
                            value={
                              quiz.questions.find((que) => que.id === q.id)
                                .options[index]
                            }
                            onChange={(e) => handleOptionChange(e, q.id, index)}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Correct answer</p>
                    <input
                      type="text"
                      className="border w-full rounded-sm py-1 px-1  mt-1"
                      onChange={(e) => handleAnswerChange(e, q.id)}
                    />
                  </div>
                  <hr className="m-3" />
                </section>
              );
            })}
          </div>

          <div className="flex gap-1">
            <button
              type="button"
              className="border border-red-400 bg-none text-center text-white w-1/2 text-red-400 mx-auto mt-4 rounded py-1 px-4"
              onClick={() => {
                setQuiz({
                  ...quiz,
                  questions: [
                    ...quiz.questions,
                    {
                      id: quiz.questions.length + 1,
                      question: "",
                      answer: "",
                      options: [],
                    },
                  ],
                });
              }}
            >
              Add another question
            </button>
            <button
              type="sumit"
              className="bg-red-400 text-center text-white w-1/2 mx-auto mt-4 rounded py-1 px-4"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export { CreateQuiz };
