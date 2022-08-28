import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">The Cafe</h1>

      <div className="mx-auto w-full max-w-xl">
        <p>
          Welcome to the online cafe for procrastinators. By procrastinators.
        </p>
        <p>Here is how it works:</p>
        <ol>
          <li>
            When you enter the cafe you write down your <strong>goal</strong>{" "}
            and <strong>deadline</strong>. Say you want to write three blog
            posts in the next 30 days. Then your goal may be 2250 (3 x 750)
            words and the deadline in 30 days.
          </li>
          <li className="mt-4">
            Every day, the cafe manager (
            <a
              target="_blank"
              href="https://twitter.com/mat_tjo"
              rel="noreferrer"
            >
              hey that's me
            </a>
            ) will ask you about your progress. Or you will report it yourself.
            You decide.
          </li>
          <li className="mt-4">
            You progress will be recorded and you will get a{" "}
            <a target="_blank" href="#" rel="noreferrer">
              nice chart
            </a>{" "}
            that shows your status.
          </li>
          <li className="mt-4">
            You will complete your goal and enjoy life ♥️
          </li>
        </ol>

        <p>
          The goal is to foster a productive environment with a healthy dose of
          social accountability.
        </p>

        <p>
          <Link href="/rules">
            <a>I want this</a>
          </Link>
        </p>
      </div>
    </MastheadLayout>
  )
}
