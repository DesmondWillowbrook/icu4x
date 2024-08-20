// generated by diplomat-tool
import type { CodePointRangeIterator } from "./CodePointRangeIterator"
import type { CodePointSetData } from "./CodePointSetData"
import type { DataError } from "./DataError"
import type { DataProvider } from "./DataProvider"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** An ICU4X Unicode Map Property object, capable of querying whether a code point (key) to obtain the Unicode property value, for a specific Unicode property.
*
*For properties whose values fit into 8 bits.
*
*See the [Rust documentation for `properties`](https://docs.rs/icu/latest/icu/properties/index.html) for more information.
*
*See the [Rust documentation for `CodePointMapData`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapData.html) for more information.
*
*See the [Rust documentation for `CodePointMapDataBorrowed`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html) for more information.
*/
export class CodePointMapData8 {
    

    get ffiValue(): pointer;

    get(cp: codepoint): number;

    static generalCategoryToMask(gc: number): number;

    iterRangesForValue(value: number): CodePointRangeIterator;

    iterRangesForValueComplemented(value: number): CodePointRangeIterator;

    iterRangesForMask(mask: number): CodePointRangeIterator;

    getSetForValue(value: number): CodePointSetData;

    static loadGeneralCategory(provider: DataProvider): CodePointMapData8;

    static loadBidiClass(provider: DataProvider): CodePointMapData8;

    static loadEastAsianWidth(provider: DataProvider): CodePointMapData8;

    static loadHangulSyllableType(provider: DataProvider): CodePointMapData8;

    static loadIndicSyllabicCategory(provider: DataProvider): CodePointMapData8;

    static loadLineBreak(provider: DataProvider): CodePointMapData8;

    static tryGraphemeClusterBreak(provider: DataProvider): CodePointMapData8;

    static loadWordBreak(provider: DataProvider): CodePointMapData8;

    static loadSentenceBreak(provider: DataProvider): CodePointMapData8;

    static loadJoiningType(provider: DataProvider): CodePointMapData8;
}