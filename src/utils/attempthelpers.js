import { useRecoilValue } from "recoil";
import { app } from "../firebase"
import { getFirestore, doc, setDoc, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

const getQuizData = async (uid) => {
    try {
        const querySnapshot = await getDocs(collection(db, "quizes"))
        const data = querySnapshot.docs.map((snap) => snap.data());
        return data.filter((d) => d.createdBy === uid)
    } catch (error) {
        console.log(error)
    }
}

export { getQuizData }