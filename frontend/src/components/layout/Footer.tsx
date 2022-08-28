// eslint-disable-next-line import/extensions
import styles from "@components/layout/footer.module.scss"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href={"/"}>Home</Link> -{" "}
      <a
        target="_blank"
        href="https://thejourneyof.me/welcome-showup-club/"
        rel="noreferrer"
      >
        About
      </a>{" "}
      -{" "}
      <a target="_blank" href="https://docs.theshowup.club" rel="noreferrer">
        Help
      </a>{" "}
      - <Link href={"/create"}>Start your own journey</Link> -{" "}
      <a
        target="_blank"
        href="https://docs.theshowup.club/contact"
        rel="noreferrer"
      >
        Contact
      </a>
    </footer>
  )
}
