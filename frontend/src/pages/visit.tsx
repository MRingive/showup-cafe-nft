import MastheadLayout from "@components/layout/MastheadLayout"
import { useInput } from "@hooks/useInput"
import CreateJourneyButton from "@components/CreateJourneyButton"

export default function Home() {
  const [days, setDays] = useInput(7)

  return (
    <MastheadLayout>
      <h1 className="mt-0 text-center">Change your life. Visit now.</h1>

      <div className="mx-auto w-full max-w-xl">
        {/*
        <div className="my-0 mx-auto w-full max-w-sm">
          <form>
            <div className="my-6 flex items-center gap-2">
              <label className="flex-none" htmlFor="days">
                I want to visit
              </label>
              <input
                className="m-0 grow"
                id="days"
                name="days"
                type="number"
                onChange={setDays}
                value={days}
                required
              />
              <span className="flex-none">days.</span>
            </div>
          </form>
        </div>
        

        <p>
          The price for a cafe visit is currently $1/day. Your stay will be $
          {days}.
        </p>
        */}

        <p>
          Showup.cafe is a monthly membership. For $19/month you can visit the
          cafe as much as you want.
        </p>
        <p>
          You can start with a small goal today and set another one as soon as
          the first one is done. Or you can go big right away. You decide your
          journey.
        </p>

        <p>Here is what you get:</p>

        <ul>
          <li>
            <p>
              <strong>Social accountability</strong> to help you reach your
              goal. As soon as you join you will experience it.
            </p>
            <p>
              We have a social contract at showup.cafe: when you visit you do
              your very best to reach your goal. If you do that, we'll support
              you the best we can.
            </p>
          </li>

          <li>
            <p>
              <strong>Regular check-ins</strong> if you want. You will get
              emails to check in on your progress. We won't judge or coach you.
              But we will nudge you on your way to progress.
            </p>
          </li>

          <li>
            <p>
              <strong>Your own progress chart</strong> that shows your journey.{" "}
              <a href="#">Like this.</a> Simply report your progress to us via
              email and we will maintain your chart.
            </p>

            <p>
              Your chart will be public with unique link so you can share it
              with the world if you want to.
            </p>
          </li>

          <li>
            <p>
              <strong>Full money-back guarantee.</strong> If you are not 100%
              satisfied with your visit we'll refund you in full. No questions
              asked. The guarantee lasts for your entire stay.
            </p>
          </li>
        </ul>

        <CreateJourneyButton
          text="Visit now"
          link="/goals-and-accountability"
        />

        {/* TODO: make component for this */}
        <p className="text-center text-sm">
          <a
            className="image-source"
            target="_blank"
            href="https://grapee.jp/en/199026"
            rel="noreferrer"
          >
            I'm not ready yet. Please tell me more.
          </a>
          <style jsx>{`
            .image-source {
              color: var(--text-light) !important;
            }
          `}</style>
        </p>
      </div>
    </MastheadLayout>
  )
}
