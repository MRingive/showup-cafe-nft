import MastHead from "@components/masthead"

export default function MastheadLayout({ children }) {
  return (
    <div>
      <MastHead />
      {children}
    </div>
  )
}
