import { signIn, useSession, getSession, getProviders} from "next-auth/react"

export default function Component({providers}) {
  var googleId;

  Object.values(providers).map((provider) => {
    if(provider.name === "Google"){
      googleId = provider.id;
    }
  })


  const { data: session } = useSession()
  return <>
    Not signed in -
    <button onClick={ () => signIn(googleId) }>Sign in</button>
  </>
}

export async function getServerSideProps(context){
  const {req, res} = context;
  const session = await getSession({req});
  const providers = await getProviders();

  if(session){
    const userEmail = session.user.email;
    if(userEmail.includes('@snu.edu.in')){
      res.writeHead(302, {Location: "/home"})
      res.end()
      return { props: {} };
    }
    else{
      console.log('this email does not belong to Shiv Nadar University')
      return {
        props:{
          session: null,
          providers
        }
      }
    }
  }

  return {
    props: {
      session: null,
      providers
    }
  };  
}