import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta name="description" content="Redirecting to the appropriate page" />
      </Head>
      <div>Loading...</div>
    </>
  );
}
