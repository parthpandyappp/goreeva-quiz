
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
} from "firebase/firestore";
import { notifyUserLogin } from "./toasthelpers";

const auth = getAuth(app);
const db = getFirestore(app);

const getUserDataFromFireStore = async () => {
    try {
        const res = await getDocs(collection(db, "users"));
        return res;
    } catch (error) {
        console.log(error);
    }
};

const doesExist = async (currentUser) => {
    try {
        const querySnapshot = await getUserDataFromFireStore();
        const data = querySnapshot.docs.map((snap) => snap.data());
        console.log(
            "check user existence: ",
            data.find((user) => user.uid === currentUser.uid)
        );
        return data.find((user) => user.uid === currentUser.uid);
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (uid) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.log(error);
    }
};

const signInWithGoogle = async (setBufferData) => {
    try {
        const googleProvider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, googleProvider);
        setBufferData(res.user);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const saveUserAndValidate = async (bufferData) => {
    const userExist = await doesExist(bufferData);
    if (!userExist) {
        const userRef = collection(db, "users");
        const userData = {
            uid: bufferData.uid,
            name: bufferData.displayName,
            authProvider: "google",
            email: bufferData.email,
            pic: bufferData.photoURL,
        };
        await setDoc(doc(userRef, bufferData.uid), userData);
        notifyUserLogin();
        return userData;
    } else {
        notifyUserLogin();
        return await getUser(bufferData.uid);
    }
};

const handleLogout = (setAuthUser) => {
    localStorage.setItem("user", null)
    localStorage.setItem("isLoggedIn", false)
    setAuthUser({ authUser: null, isLoggedIn: false })
}


export { doesExist, getUserDataFromFireStore, getUser, signInWithGoogle, saveUserAndValidate, handleLogout }