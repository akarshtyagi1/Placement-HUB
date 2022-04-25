import QuesPanel from "../components/QuesPanel";
import { getSession } from "next-auth/react";
import Header from "../components/common/Header"
import { getCompanyQuestions } from "./api/data";

export default function questions({companyQues}){
    // const [data, setData] = useState([]);
    // const [isLoading, setLoading] = useState(false);

    // useEffect(()=>{
    //     async function fetchData(){
    //         const data = await getCompanyQuestions('5UXKyUoZPpW8Bi5WvA3o');
    //         setData(data);
    //         setLoading(true);
    //         console.log(data)
    //     }

    //     fetchData();
    // },[])


    // if(!isLoading){
    //     return(
    //         <>
    //             <Header title='Questions 2'/>
    //             <h1>...Loading</h1>
    //         </>
    //     )
    // }
    // console.log(data);
    return(
        <>  
            <Header title='Questions'/>
            <QuesPanel companyQues={companyQues}/>
        </>
    );
}

export async function getServerSideProps(context){
    const {req, res, query} = context;
    const session = await getSession({req});
    const companyQues = await getCompanyQuestions(query.id)

    if(session){
        const user = JSON.stringify(session.user)
        return {
            props:{
                user,
                companyQues
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