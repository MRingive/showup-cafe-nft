import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">Goals and accountability</h1>

      <div className="mx-auto w-full max-w-xl">
        <p>
          Imagine you could beat procrastination. What would your life look
          like?
        </p>
        <p>
          A lot would be different I imagine. Me too. And that is why I decided
          to start this "online cafe".
        </p>

        <p>
          Beating procrastination and resistance is hard. Sadly, nobody has
          found a way to completely rid themselves of these negative forces. But
          we know of two tools that give us a fighting chance:{" "}
          <strong>goals</strong> and <strong>accountability</strong>.
        </p>

        <p>
          These two have stood the test of time. They are not new or exciting.
          But they work. And they work well.
        </p>

        <p>
          TODO: something to back up the claim that goals and accountability
          will help?
        </p>

        <p>
          Unfortunately, creating good goals and accountability is difficult 😞.
        </p>

        <p>
          For goals you can follow something like the{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/SMART_criteria"
            rel="noreferrer"
          >
            S.M.A.R.T criteria.
          </a>{" "}
          But accountability is trickier.
        </p>

        <p>
          Most guides simply instruct you to tell everybody about your goal.
          Announce it to your friends, family, and colleagues. Shout it from the
          rooftops and tweet it on social media.
        </p>

        <p>
          For some goals this is a good strategy. You should apply it if you
          can.
        </p>

        <p>
          But what if you don't want to share your goal with everybody? Or
          bother your friends with that 750 word blog post due in 3 days?
        </p>

        <p>
          Even if you do share it, most people are busy living their own lives.
          They may not have time to hold you accountable. It isn't their job
          after all.
        </p>

        {/*
        <p>
          I guess you'll have to fight procrastination with your bare hands.
          Best of luck.
        </p>
        */}

        <p>
          <Link href="/cafe">
            <a>There should be a better way...</a>
          </Link>
        </p>
      </div>
    </MastheadLayout>
  )
}
