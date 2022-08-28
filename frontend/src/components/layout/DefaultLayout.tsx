import Footer from "./Footer"

export default function DefaultLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
      <Footer />
    </div>
  )
}
