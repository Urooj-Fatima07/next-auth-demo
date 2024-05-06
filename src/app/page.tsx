"use client"
import { useSession, signIn, signOut } from "next-auth/react"

// Your component code
export default function Component() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br/>
      <button className="custom" onClick={() => signIn("github")}>Sign in using Github</button>
      <button className="custom" onClick={() => signIn("google")}>Sign in using Google</button> 
    </>
  );
}
