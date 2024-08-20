// generated by diplomat-tool
import type { SegmenterWordType } from "./SegmenterWordType"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** See the [Rust documentation for `WordBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html) for more information.
*/
export class WordBreakIteratorLatin1 {
    

    get ffiValue(): pointer;

    next(): number;

    get wordType(): SegmenterWordType;

    get isWordLike(): boolean;
}