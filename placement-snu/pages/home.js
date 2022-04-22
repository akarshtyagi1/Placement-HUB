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
          canRender: true,
          user: user,
          message: 'You have logged in to secure content',
        },
      };
    }

    res.writeHead(302, { Location: "/" }); 
    res.end();

    return {
      props: {
        canRender: false,
        session:[],
        message: 'please sign in to view secure content'
      },
    };
  }




















