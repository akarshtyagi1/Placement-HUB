import { getSession } from "next-auth/react";
import Header from "../components/common/Header"
import Experiences from "../components/Experiences";
import {db} from "../utils/firebase";
import {collection, getDocs} from "firebase/firestore";


export default function experiences({data}){
    return(
        <>  
            <Header title='Experiences'/>
            <Experiences experiences={data}/>
        </>
    );
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});

    const experienceCollectionRef = collection(db, "Experience");

    
    if(session){
        const user = JSON.stringify(session.user);
        const experiences = await getDocs(experienceCollectionRef);

        const data = []
        experiences.docs.map((doc)=>{
            const tmp = doc.data()
            tmp["id"] = doc.id;
            data.push(tmp);
        })

        return {
            props:{
                user,
                data
            }
        }
    }
    res.writeHead(302, {Location: "/"})
    res.end();

    return{
        props: {
            user: null
        }
    }
}