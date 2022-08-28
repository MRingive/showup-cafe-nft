import { getLog } from "@lib/getLog"
import toast from "react-hot-toast"
import { SWRConfig } from "swr"

export default function SWRErrorConfig({ children }) {
  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            toast.error(error.message, {
              position: "bottom-right",
            })
            getLog().error(error.message)
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  )
}
