import { StyleTypes } from "../util";

export interface TimelineEntry {
  when: Date;
  data: EntryLine[];
  style?: StyleTypes;
}

export interface EntryLine {
  fields: EntryField[];
  style?: StyleTypes;
}

export interface EntryField {
  value: string;
  style?: StyleTypes;
}
