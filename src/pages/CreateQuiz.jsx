const CreateQuiz = () => {
  return (
    <div className="flex flex-col grow h-full w-full justify-center items-center">
      <section className="w-2/4 mx-auto h-3/4 border-2 px-4 py-2 rounded-lg">
        <h1 className="text-xl text-center font-bold tracking-wider underline underline-offset-4 decoration-dashed">
          Create quiz
        </h1>
        <form className="flex flex-col justify-center py-2 mt-4 mx-auto">
          <div className="flex gap-1 justify-center mx-auto">
            <section className="w-1/2">
              <label htmlFor="quiz-name" className="font-medium">
                Quiz name
              </label>
              <input
                placeholder='"Famous Quotes from Literature"'
                type="text"
                name="quiz-name"
                className="border w-full rounded-sm py-1 px-1"
              />
            </section>
            <section className="w-1/2">
              <label htmlFor="total-time" className="font-medium">
                Time limit (in mins)
              </label>
              <input
                placeholder="15"
                type="number"
                name="total-time"
                className="border w-full rounded-sm py-1 px-1"
              />
            </section>
          </div>
          <div className="flex gap-1 justify-center mx-auto mt-4">
            <section className="w-1/2">
              <label htmlFor="add-pts" className="font-medium">
                Credit points per correct answer
              </label>
              <input
                placeholder="5"
                type="number"
                name="add-pts"
                className="border w-full rounded-sm py-1 px-1"
              />
            </section>
            <section className="w-1/2">
              <label htmlFor="ded-pts" className="font-medium">
                Debit points per incorrect answer
              </label>
              <input
                placeholder="1"
                type="number"
                name="ded-pts"
                className="border w-full rounded-sm py-1 px-1"
              />
            </section>
          </div>
          <div className="flex gap-1 mt-4">
            <section className="w-full">
              <label htmlFor="ded-pts" className="font-medium">
                Quiz description
              </label>
              <textarea
                placeholder="This quiz will present you with famous quotes from literature and ask you to identify the author and the work from which the quote is taken."
                name="ded-pts"
                className="border w-full rounded-sm h-3/4 px-1 py-1"
              />
            </section>
          </div>
          <button className="bg-red-400 text-center text-white w-1/4 mx-auto mt-4 rounded py-1 px-4">
            Create
          </button>
        </form>
      </section>
    </div>
  );
};

export { CreateQuiz };
