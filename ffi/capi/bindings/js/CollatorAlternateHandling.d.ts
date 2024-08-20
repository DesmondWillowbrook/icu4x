// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

// Base enumerator definition
/** See the [Rust documentation for `AlternateHandling`](https://docs.rs/icu/latest/icu/collator/enum.AlternateHandling.html) for more information.
*/
export class CollatorAlternateHandling {
    constructor(value : CollatorAlternateHandling | string);

    get value() : string;

    get ffiValue() : number;

    static Auto : CollatorAlternateHandling;
    static NonIgnorable : CollatorAlternateHandling;
    static Shifted : CollatorAlternateHandling;
}