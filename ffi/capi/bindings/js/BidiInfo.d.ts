// generated by diplomat-tool
import type { BidiParagraph } from "./BidiParagraph"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** An object containing bidi information for a given string, produced by `for_text()` on `Bidi`
*
*See the [Rust documentation for `BidiInfo`](https://docs.rs/unicode_bidi/latest/unicode_bidi/struct.BidiInfo.html) for more information.
*/
export class BidiInfo {
    

    get ffiValue(): pointer;

    get paragraphCount(): number;

    paragraphAt(n: number): BidiParagraph | null;

    get size(): number;

    levelAt(pos: number): number;
}