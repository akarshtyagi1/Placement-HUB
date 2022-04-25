import Home from '../components/Home';
import { getSession } from "next-auth/react"
import Header from '../components/common/Header';
import { getCompanyNames, getExperiences } from './api/data';

export default function home({companyNames, experiences}){
    return( 
        <>
          <Header title={"Home"}/>
          <Home companyNames={companyNames} experiences={experiences}/>
        </>
    ); 
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});
    const companyNames = await getCompanyNames();
    const experiences = await getExperiences();

    if (session) { 
       const user = JSON.stringify(session.user)
      return {
        props: {
          user: user,
          companyNames,
          experiences
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




















