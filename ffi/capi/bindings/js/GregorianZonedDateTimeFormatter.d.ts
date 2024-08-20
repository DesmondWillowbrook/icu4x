// generated by diplomat-tool
import type { CustomTimeZone } from "./CustomTimeZone"
import type { DataProvider } from "./DataProvider"
import type { DateLength } from "./DateLength"
import type { Error } from "./Error"
import type { IsoDateTime } from "./IsoDateTime"
import type { IsoTimeZoneOptions } from "./IsoTimeZoneOptions"
import type { Locale } from "./Locale"
import type { TimeLength } from "./TimeLength"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** An object capable of formatting a date time with time zone to a string.
*
*See the [Rust documentation for `TypedZonedDateTimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html) for more information.
*/
export class GregorianZonedDateTimeFormatter {
    

    get ffiValue(): pointer;

    static createWithLengths(provider: DataProvider, locale: Locale, dateLength: DateLength, timeLength: TimeLength): GregorianZonedDateTimeFormatter;

    static createWithLengthsAndIso8601TimeZoneFallback(provider: DataProvider, locale: Locale, dateLength: DateLength, timeLength: TimeLength, zoneOptions: IsoTimeZoneOptions): GregorianZonedDateTimeFormatter;

    formatIsoDatetimeWithCustomTimeZone(datetime: IsoDateTime, timeZone: CustomTimeZone): string;
}