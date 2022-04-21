import "../styles/global.css";
import { SessionProvider } from "next-auth/react"
import Navbar from "../components/common/Navbar";

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Navbar></Navbar>
      <Component {...pageProps}/>
    </SessionProvider>
  )
} 