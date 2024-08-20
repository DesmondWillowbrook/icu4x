// generated by diplomat-tool
import type { LineBreakStrictness } from "./LineBreakStrictness"
import type { LineBreakWordOption } from "./LineBreakWordOption"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** See the [Rust documentation for `LineBreakOptions`](https://docs.rs/icu/latest/icu/segmenter/struct.LineBreakOptions.html) for more information.
*/
export class LineBreakOptions {

    get strictness() : LineBreakStrictness;
    set strictness(value: LineBreakStrictness); 

    get wordOption() : LineBreakWordOption;
    set wordOption(value: LineBreakWordOption); 

    get jaZh() : boolean;
    set jaZh(value: boolean); 
    constructor(strictness: LineBreakStrictness, wordOption: LineBreakWordOption, jaZh: boolean);
}