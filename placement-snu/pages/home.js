import Home from '../components/Home';
import { getSession } from "next-auth/react"
import Header from '../components/common/Header';
import { getCompanyNames, getCompanyQuestions } from './api/data';

export default function home({user, companyNames}){
    return( 
        <>
          <Header title={"Home"}/>
          <Home companyNames={companyNames}/>
        </>
    ); 
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});
    const companyNames = await getCompanyNames();

    if (session) { 
       const user = JSON.stringify(session.user)
      return {
        props: {
          user: user,
          companyNames
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




















