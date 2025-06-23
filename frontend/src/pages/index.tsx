import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>Hepsiİş</title>
      </Head>
      <h1 className="text-5xl font-bold mb-4 text-primary">Hepsiİş</h1>
      <Link href="/auth" className="text-secondary underline">
        Giriş Yap
      </Link>
    </div>
  )
}
