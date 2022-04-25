import Header from "../components/common/Header";
import { getSession } from "next-auth/react";
import Share from "../components/Share";

export default function share({user}){
    return(
        <>
            <Header title={'Share you Interview Experience'}/>
            <Share user={user}/>
        </>
    )
}

export async function getServerSideProps(context){
    const {req, res, query} = context;
    const session = await getSession({req});

    if(session){
        const user = JSON.stringify(session.user)
        return {
            props:{
                user,
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