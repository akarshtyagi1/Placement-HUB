import { signIn, getSession, getProviders, signOut} from "next-auth/react"
import {db} from "../utils/firebase";
import Header from "../components/common/Header";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
import Login from "../components/Login";

export default function Component({providers}) {
  var googleId;
   
  Object.values(providers).map((provider) => {
    if(provider.name === "Google"){
      googleId = provider.id;
    }
  })

  return <>
    <Header title={"LOGIN: placements-snu"}/>
    <Login providerId={googleId} />
  </>
}

export async function getServerSideProps(context){
  const {req, res} = context;
  const session = await getSession({req});
  const providers = await getProviders();
  const userCollectionRef = collection(db, "users");

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