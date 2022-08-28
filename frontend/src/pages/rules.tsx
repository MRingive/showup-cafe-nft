import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">Rules</h1>

      <div className="mx-auto w-full max-w-xl">
        <h3>1) You have a goal with milestones</h3>

        <p>
          <em>“Write 3000 words this week.”</em>
        </p>

        <p>
          <em>“Run 100 km this month.”</em>
        </p>

        <p>
          <em>“Publish a 750+ word blog post by Monday.”</em>
        </p>

        <p>
          <em>“Work on my project 1 hour every day for the next 7 days.”</em>
        </p>

        <p>... are all good goals.</p>

        <p>
          <em>“Make more money”</em>
        </p>

        <p>
          <em>“Lose fat”</em>
        </p>

        <p>
          <em>“Work out”</em>
        </p>

        <p>
          ... are <strong>not.</strong>
        </p>

        <p>
          Consider checking out the{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/SMART_criteria"
            rel="noreferrer"
          >
            S.M.A.R.T criteria
          </a>{" "}
          if you are unsure what makes a good goal.
        </p>

        <h3>2) You are on a deadline</h3>

        <p>Your journey starts now. When does it end?</p>
        <p>
          Preferably something in the range of a few days to a few weeks. But
          exceptions can be made.
        </p>

        <p>
          <Link href="/worth">
            <a>Got it. I have a goal and a deadline</a>
          </Link>
        </p>
      </div>
    </MastheadLayout>
  )
}
