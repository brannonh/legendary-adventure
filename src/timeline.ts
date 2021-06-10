import { TimelineOptions } from './interfaces';
import { DateFormat } from './util';

export class Timeline {
  dateFormat: DateFormat;

  constructor(options: TimelineOptions) {
    this.dateFormat = options.dateFormat ?? 'dateTime';
  }
}
