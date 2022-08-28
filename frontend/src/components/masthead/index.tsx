// eslint-disable-next-line import/extensions
import styles from "@components/masthead/masthead.module.scss"
import Link from "next/link"

export default function MastHead() {
  return (
    <header className={styles.masthead}>
      <h5 className={styles.mastheadTitle}>
        <Link href="/">
          <a title="Home">showup</a>
        </Link>{" "}
        <small>cafe</small>
      </h5>
    </header>
  )
}
