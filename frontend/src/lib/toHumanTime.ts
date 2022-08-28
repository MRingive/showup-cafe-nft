//import formatDistance from "date-fns/formatDistance"
import * as timeago from "timeago.js"

export function toHumanTime(date: Date) {
  //return formatDistance(date, Date.now(), { addSuffix: true })
  return timeago.format(date)
}
