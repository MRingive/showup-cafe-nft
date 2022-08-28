import MastheadLayout from "@components/layout/MastheadLayout"
import { toHumanTime } from "@lib/toHumanTime"
import Link from "next/link"

export default function Since() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">Time since I...</h1>

      <div className="mx-auto w-full max-w-xl">
        <p>Went on an adventure: {toHumanTime(new Date(2022, 5, 18))}</p>

        <p>
          <Link href="https://www.youtube.com/channel/UCrBFVisOKEWPqgsKzNxDAqw">
            Published a video:
          </Link>{" "}
          {toHumanTime(new Date(2022, 5, 18))}
        </p>

        <p>
          <Link href="https://thejourneyof.me">Wrote something:</Link>{" "}
          {toHumanTime(new Date(2022, 5, 4))}
        </p>

        <p>Got wasted alone: {toHumanTime(new Date(2022, 6, 16))}</p>
      </div>
    </MastheadLayout>
  )
}
