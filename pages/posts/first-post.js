import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FistPost(){
    return( 
    <>
        <Head>
            <title>First Post</title>
        </Head>
        {/* strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time */}
        {/* onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly */}
        <Script
            src=""
            strategy="lazyOnload"
            onLoad={()=>
                console.log('Script loaded correctly')
            }
        />
        <h1>First Post</h1>
        <h2>
            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </h2>
    </>

    )

}