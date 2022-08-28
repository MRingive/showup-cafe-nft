import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"
import Image from "next/image"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">A different way</h1>

      <div className="mx-auto w-full max-w-xl">
        <p>Showup.cafe is inspired by the Manuscript Writing Cafe in Tokyo:</p>

        <Image
          src="/images/manuscript-writing-cafe.png"
          width="1354"
          height="226"
          alt="Tokyo's Manuscript Writing Cafe only allows writers on a deadline, and won't let them leave until finished."
        ></Image>

        <p>
          It's a cafe with <strong>social accountability</strong>.
        </p>

        <p>
          When you enter the Manuscript Writing Cafe you are asked how many
          words you need to write and your deadline. The social contract is that
          you can't leave the cafe until you have hit your target.
        </p>

        <Image
          src="/images/cafe.jpeg"
          width="2048"
          height="1536"
          alt="The Manuscript Writing Cafe"
        ></Image>

        <p>Showup.cafe is the internet version of this cafe.</p>

        <p>
          Not just for writing. For any goal you can imagine. If you have a goal
          you want to reach, this is the place to go.
        </p>

        {/*}

        <p>
          <strong>Social accountability powered by the internet.</strong>
        </p>

        <p>
          Showup.cafe is <strong>social accountability</strong> powered by the
          internet.
        </p>

        <p>
          We know you are much more likely to follow through when you commit to.
        </p>
        <p>
          And we know that you are even more likely to do it when someone
          regularly checks in with you. So that is why you should visit the
          cafe. To become the best version of yourself and to help others do the
          same.
        </p>
        */}

        <p>
          <Link href="/welcome">
            <a>I invite you to visit right now.</a>
          </Link>
        </p>
        <ImageSource />
      </div>
    </MastheadLayout>
  )
}

function ImageSource() {
  return (
    <p className="mt-10 text-center text-xs">
      <a
        className="image-source"
        target="_blank"
        href="https://grapee.jp/en/199026"
        rel="noreferrer"
      >
        Image Source
      </a>
      <style jsx>{`
        .image-source {
          color: var(--text-light) !important;
        }
      `}</style>
    </p>
  )
}
