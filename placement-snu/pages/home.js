import Home from '../components/Home';
import { useSession, signIn, signOut, getSession } from "next-auth/react"

export default function home(props){
    return(
        <>
          <Home />
          <p>{props.message}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
    ); 
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});

    if (session) { 
      return {
        props: {
          canRender: true,
          session: session,
          message: 'You have logged in to secure content'
        },
      };
    }

    res.writeHead(302, { Location: "/" }); 
    res.end();

    return {
      props: {
        canRender: false,
        message: 'please sign in to view secure content'
      },
    };
  }




















