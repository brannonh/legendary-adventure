import { format } from 'date-fns';

export type DateFormat = 'date' | 'dateShort' | 'dateTime' | 'dateTimeShort';

export const DateFormats = {
  date: 'yyyy/MM/dd',
  dateShort: 'yy/MM/dd',
  dateTime: 'yyyy/MM/dd kk:mm:ss',
  dateTimeShort: 'yy/MM/dd kk:mm',
}

export function formatDate(dateObject: Date, dateFormat: DateFormat = 'dateTime') : string {
  dateFormat ??= 'dateTime';
  return format(dateObject, DateFormats[dateFormat]);
}
