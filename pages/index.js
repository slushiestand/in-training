import Nav from '../components/Nav'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function Home() {
  return (
    <body className='flex flex-col min-h-screen'>
      <header>
        <Nav />
      </header>

      <main className="flex-grow">
        <div className="scale-75">
          <YoutubeEmbed embedId="XqZsoesa55w" />
        </div>

      </main>
    </body>
  )
}
