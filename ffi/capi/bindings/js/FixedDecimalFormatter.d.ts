// generated by diplomat-tool
import type { DataError } from "./DataError"
import type { DataProvider } from "./DataProvider"
import type { FixedDecimal } from "./FixedDecimal"
import type { FixedDecimalGroupingStrategy } from "./FixedDecimalGroupingStrategy"
import type { Locale } from "./Locale"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** An ICU4X Fixed Decimal Format object, capable of formatting a [`FixedDecimal`] as a string.
*
*See the [Rust documentation for `FixedDecimalFormatter`](https://docs.rs/icu/latest/icu/decimal/struct.FixedDecimalFormatter.html) for more information.
*/
export class FixedDecimalFormatter {
    

    get ffiValue(): pointer;

    static createWithGroupingStrategy(provider: DataProvider, locale: Locale, groupingStrategy: FixedDecimalGroupingStrategy): FixedDecimalFormatter;

    static createWithManualData(plusSignPrefix: string, plusSignSuffix: string, minusSignPrefix: string, minusSignSuffix: string, decimalSeparator: string, groupingSeparator: string, primaryGroupSize: number, secondaryGroupSize: number, minGroupSize: number, digits: Array<char>, groupingStrategy: FixedDecimalGroupingStrategy): FixedDecimalFormatter;

    format(value: FixedDecimal): string;
}