import toast from "react-hot-toast";

const toastStyle = {
    backgroundColor: "white",
    border: "2px solid #3DA9FC",
    padding: "16px",
    color: "black",
};

const toastError = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "16px",
    color: "black",
};

const notifyUserLogin = () =>
    toast(
        (t) => (
            <span>
                <b>User logged in successfully</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyUserLogout = () =>
    toast(
        (t) => (
            <span>
                <b>User logged out successfully</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyQuitQuiz = () =>
    toast(
        (t) => (
            <span>
                <b>You've succesfully quit the quiz</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyQuizStart = () =>
    toast(
        (t) => (
            <span>
                <b>Quiz started, keep your eyes on the countdown</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyQuizSubmit = () =>
    toast(
        (t) => (
            <span>
                <b>You've submitted the quiz succesfully</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyQuizCreation = () =>
    toast(
        (t) => (
            <span>
                <b>You've created the quiz succesfully</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyPlayAgain = () =>
    toast(
        (t) => (
            <span>
                <b>You're playing the quiz again</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyUserToLogin = () =>
    toast(
        (t) => (
            <span>
                <b>Login to create/attempt quiz</b>
            </span>
        ),
        {
            style: toastStyle,
        }
    );

const notifyError = () =>
    toast(
        (t) => (
            <span>
                <b>Oops! Some error occurred.</b>
            </span>
        ),
        {
            style: toastError,
        }
    );

export {
    notifyUserLogin,
    notifyUserLogout,
    notifyError,
    notifyQuizCreation,
    notifyQuizStart,
    notifyQuizSubmit,
    notifyQuitQuiz,
    notifyPlayAgain,
    notifyUserToLogin
};
