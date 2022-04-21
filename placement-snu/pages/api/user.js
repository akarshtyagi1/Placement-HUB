import {db} from "../../utils/firebase"
import { collection, getDoc } from "firebase/firestore";

export default async function handler(req, res){
    if(req.method === 'POST'){
        const userColRef = collection(db,'users');
        const data = await getDoc(userColRef)

        const userData = data.map

    }else{
        res.status(405).send('This HTTP method is not allowed');
    }
}    