import Head from 'next/head'

export async function getStaticProps(){
  return {
    props:{
      products:[
        {
          "name":"Resin Keychain",
          "id":1
        },
        {
          "name":"Spotify Resin Keychain",
          "id":2
        }
      ]
    }
  }
}

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Auth w/ Supabase</title>
      </Head>
      <main>
        <h1 className='bg-red-300'>Hello World</h1>
        <p>{JSON.stringify(products)}</p>
      </main>
    </div>
  )
}
