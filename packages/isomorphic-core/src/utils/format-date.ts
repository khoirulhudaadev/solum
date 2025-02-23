import dayjs from 'dayjs';
import 'dayjs/locale/id'; // import locale bahasa Indonesia

dayjs.locale('id');
export function formatDate(
  date?: Date,
  format: string = 'DD MMM, YYYY'
): string {
  if (!date) return '';
  return dayjs(date).format(format);
}
