import QuesPanel from "../components/QuesPanel";
import { getSession } from "next-auth/react";
import Header from "../components/common/Header"

export default function questions(){
    return(
        <>  
            <Header title='Questions'/>
            <QuesPanel />
        </>
    );
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});
    
    if(session){
        const user = JSON.stringify(session.user)
        return {
            props:{
                user
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