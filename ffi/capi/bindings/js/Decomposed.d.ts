// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** The outcome of non-recursive canonical decomposition of a character.
*`second` will be NUL when the decomposition expands to a single character
*(which may or may not be the original one)
*
*See the [Rust documentation for `Decomposed`](https://docs.rs/icu/latest/icu/normalizer/properties/enum.Decomposed.html) for more information.
*/
export class Decomposed {

    get first() : codepoint;
    

    get second() : codepoint;
    
}