import { signIn, getSession, getProviders} from "next-auth/react"
import {db} from "../utils/firebase";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
// import { compileStringAsync } from "sass";

export default function Component({providers}) {
  var googleId;
   

  Object.values(providers).map((provider) => {
    if(provider.name === "Google"){
      googleId = provider.id;
    }
  })

  return <>
    Not signed in -
    <button onClick={ () => signIn(googleId) }>Sign in</button>
  </>
}

export async function getServerSideProps(context){
  const {req, res} = context;
  const session = await getSession({req});
  const providers = await getProviders();

  const userCollectionRef = collection(db, "users");

  // const q = query(userCollectionRef, where('email', '==', 'at269@snu.edu.in'))
  // const user = await getDocs(q);
  // if(user.size == 0){
  //   console.log(false)
  // }else{
  //   console.log(user.docs[0].data().email);
  // }

  if(session){
    const userEmail = session.user.email;
    if(userEmail.includes('@snu.edu.in')){
      const q = query(userCollectionRef, where('email', '==', userEmail))
      const user = await getDocs(q);
      
      if(user.size == 0){
        await addDoc(userCollectionRef, session.user);
      }
      
      res.writeHead(302, {Location: "/home"})
      res.end()
      return { props: {} };
    }
    else{
      console.log('this email does not belong to Shiv Nadar University')
      return {
        props:{
          session: null,
          providers,
        }
      }
    }
  }

  return {
    props: {
      session: null,
      providers,
    }
  };  
}