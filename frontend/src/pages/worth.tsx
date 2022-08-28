import Link from "next/link"
import MastheadLayout from "@components/layout/MastheadLayout"

export default function Home() {
  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">Invest in yourself</h1>

      <div className="mx-auto w-full max-w-xl">
        <p>
          Visiting showup.cafe isn't free. It isn't expensive either. But before
          I reveal the price I want to ask you something:
        </p>

        <p>
          <strong>What is your goal worth?</strong>
        </p>

        <p>
          How much are you willing to invest in your journey towards this goal?
          If the goal truly matters to you (it should) then I'm sure you are
          ready to invest in it.
        </p>

        <p>
          If you don't feel like this I suggest you reconsider your goal. Are
          you working on something that matters to you?
        </p>

        <p>
          I can't guarantee success. Only you can reach your goal. But I know
          showup.cafe can help support you.
        </p>

        <p>Here is why showup.cafe has a price:</p>

        <ol>
          <li>
            <p>
              <strong>This is a business.</strong> No need to hide it. I'm here
              to provide a service and get paid in return. If I did not charge
              for this service I would not be able to provide the same level of
              quality and support.
            </p>

            <p>It is in both our interests that this is not a free service.</p>
          </li>

          <li>
            <p>
              <strong>You are more likely to show up </strong> when you pay for
              something. You are committed and more likely to follow through on
              your commitment.
            </p>
          </li>
        </ol>

        <p>
          Have you every tried receiving a free ebook or online course? If so,
          you know how unlikely it is that you will go through it. When we get
          something for free we devalue it.
        </p>
        <p>
          But when we pay for something we tell our brains this is something
          worth our energy, time, and money. We tell ourselves this is
          important.
        </p>

        <p>
          <Link href="/visit">
            <a>I know the value of my goal. Let's do this</a>
          </Link>
        </p>
      </div>
    </MastheadLayout>
  )
}
