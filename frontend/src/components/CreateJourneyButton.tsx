import Link from "next/link"

export default function CreateJourneyButton({ text, link }) {
  return (
    <div className="simple-css">
      <Link href={link}>
        <a>
          <button className="create-journey-btn w-full">
            <strong>{text}</strong>
          </button>
        </a>
      </Link>

      <style jsx>{`
        .create-journey-btn {
          color: var(--btn-color);
        }
      `}</style>
    </div>
  )
}
