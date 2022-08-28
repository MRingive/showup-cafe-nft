import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"
import CreateJourneyButton from "@components/CreateJourneyButton"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">It is time to beat procrastination.</h1>
      <p className="text-center">
        Welcome to <strong>showup.cafe</strong>
      </p>

      <div className="mx-auto w-full max-w-xl">
        <CreateJourneyButton
          text="Start showing up"
          link="/goals-and-accountability"
        />
        <p>
          Showing up every day is hard. Putting on your running shoes, opening
          the study book, writing those words, being that person...
        </p>
        <p>
          <em>Showing up.</em>
        </p>
        <p>It's what we all want. Yet too often we fall short.</p>

        <p>It should be this straightforward:</p>

        <p className="indent-8">1) Set a goal.</p>
        <p className="indent-8">2) Progress towards that goal every day.</p>
        <p>
          ... and that's it. Simple. But not easy. Which is why I have created
          this website.
        </p>
        <p>
          <Link href="/goals-and-accountability">
            <a>Start showing up now</a>
          </Link>
        </p>
      </div>
    </MastheadLayout>
  )
}
