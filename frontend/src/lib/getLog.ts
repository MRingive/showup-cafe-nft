import { Logtail } from "@logtail/browser"

export function getLog() {
  return new Logtail(process.env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN)
}
