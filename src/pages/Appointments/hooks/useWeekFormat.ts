import { useMemo } from 'react';
import { CustomFormats } from '../types/types';

export const useWeekFormat = () => {
  const formats = useMemo<CustomFormats>(
    () => ({
      //   dateFormat: 'dd',
      timeGutterFormat: 'h a',
      dayFormat: (date, _, localizer) => localizer?.format(date, 'dd') || '',
      //   monthHeaderFormat: (date, _, localizer) => {
      //     if (!localizer) return '';
      //     return localizer.format(date, 'MMMM yyyy', 'en-US');
      //   },
      //   dayRangeHeaderFormat: ({ start, end }, _, localizer) => {
      //     if (!localizer) return '';

      //     const formattedStart = localizer.format(start, 'short');
      //     const formattedEnd = localizer.format(end, 'short');
      //     return `${formattedStart} — ${formattedEnd}`;
      //   },
    }),
    [],
  );

  return { formats };
};
