import { compareAsc, compareDesc } from 'date-fns';
import { EntryLine, TimelineEntry, TimelineOptions } from './interfaces';
import { DateFormat, Theme } from './util';

export class Timeline {
  dateFormat: DateFormat;
  defaultSortDir: string;
  header: EntryLine | undefined;
  entries: TimelineEntry[] = [];
  theme: Theme;

  constructor(options: TimelineOptions | undefined) {
    this.dateFormat = options?.dateFormat ?? 'dateTime';
    this.defaultSortDir = options?.defaultSort ?? 'asc';
    this.header = options?.header;
    this.theme = new Theme(options?.styles ?? {});
  }

  addEntry(entry: TimelineEntry): number {
    this.entries.push(entry);
    return this.entries.length - 1;
  }

  deleteEntry(index: number) {
    this.entries.splice(index, 1);
  }

  sort(sorter: (a: TimelineEntry, b: TimelineEntry) => number = this.defaultSort) {
    return this.entries.sort(sorter);
  }

  private defaultSort(a: TimelineEntry, b: TimelineEntry) {
    return this.defaultSortDir === 'desc' ? compareDesc(a.when, b.when) : compareAsc(a.when, b.when);
  }
}
