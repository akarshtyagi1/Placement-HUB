import Home from '../components/Home';
import { signOut, getSession } from "next-auth/react"
import Header from '../components/common/Header';

export default function home(props){
    return( 
        <>
          <Header title={"Home"}/>
          <Home />
        </>
    ); 
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});
    
    if (session) { 
       const user = JSON.stringify(session.user)
      return {
        props: {
          user: user,
        },
      };
    }

    res.writeHead(302, { Location: "/" }); 
    res.end();

    return {
      props: {
        session:[],
      },
    };
  }




















