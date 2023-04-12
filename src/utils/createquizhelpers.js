import { app } from "../firebase"
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const db = getFirestore(app);

const createQuizlet = async (createData) => {
    try {
        console.log(createData)
        const { qid } = createData;
        const qRef = collection(db, "quizes");

        await setDoc(doc(qRef, qid), createData);
        return createData;
    } catch (error) {
        console.log(error)
    }
}

export { createQuizlet }