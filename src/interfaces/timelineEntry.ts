import { StyleTypes } from "../util";

export interface TimelineEntry {
  when: Date,
  data: EntryLine[],
}

export interface EntryLine {
  fields: EntryField[],
  style: StyleTypes;
}

export type EntryField = string;
