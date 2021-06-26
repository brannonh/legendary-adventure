import { compareAsc, compareDesc } from 'date-fns';
import Table from 'cli-table3';
import { EntryLine, TimelineEntry, TimelineOptions } from './interfaces';
import { DateFormat, Theme } from './util';

export default class Timeline {
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

  render() {
    const table = new Table({
      head: this.header?.fields.map((ef) => this.theme.stylize(ef.value, 'secondary')),
      chars: {
        top: this.theme.stylize('─', 'fade'),
        'top-mid': this.theme.stylize('┬', 'fade'),
        'top-left': this.theme.stylize('┌', 'fade'),
        'top-right': this.theme.stylize('┐', 'fade'),
        bottom: this.theme.stylize('─', 'fade'),
        'bottom-mid': this.theme.stylize('┴', 'fade'),
        'bottom-left': this.theme.stylize('└', 'fade'),
        'bottom-right': this.theme.stylize('┘', 'fade'),
        left: this.theme.stylize('│', 'fade'),
        'left-mid': this.theme.stylize('├', 'fade'),
        mid: this.theme.stylize('─', 'fade'),
        'mid-mid': this.theme.stylize('┼', 'fade'),
        right: this.theme.stylize('│', 'fade'),
        'right-mid': this.theme.stylize('┤', 'fade'),
        middle: this.theme.stylize('│', 'fade'),
      },
      style: {
        border: [],
      }
    });

    console.log(table.toString());
  }

  sort(sorter: (a: TimelineEntry, b: TimelineEntry) => number = this.defaultSort) {
    return this.entries.sort(sorter);
  }

  private defaultSort(a: TimelineEntry, b: TimelineEntry) {
    return this.defaultSortDir === 'desc' ? compareDesc(a.when, b.when) : compareAsc(a.when, b.when);
  }
}
