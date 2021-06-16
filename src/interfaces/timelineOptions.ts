import { Styles } from "../util";
import { DateFormat } from "../util";
import { EntryLine } from "./timelineEntry";

export interface TimelineOptions {
  dateFormat?: DateFormat,
  defaultSort?: 'asc' | 'desc',
  header?: EntryLine,
  styles?: Styles,
}
