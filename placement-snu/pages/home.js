import Home from '../components/Home';

export default function home(props){
    return(
        <>
          <Home />
        </>
    ); 
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const session = await getSession({req});

    if (!session) {
      return {
        props: {
          canRender: true,
        },
      };
    }
    res.writeHead(302, { Location: "/" });
    res.end();
    return {
      props: {
        canRender: false,
      },
    };
  }