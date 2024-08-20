// generated by diplomat-tool
import type { LeadingAdjustment } from "./LeadingAdjustment"
import type { TrailingCase } from "./TrailingCase"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** See the [Rust documentation for `TitlecaseOptions`](https://docs.rs/icu/latest/icu/casemap/titlecase/struct.TitlecaseOptions.html) for more information.
*/
export class TitlecaseOptions {

    get leadingAdjustment() : LeadingAdjustment;
    set leadingAdjustment(value: LeadingAdjustment); 

    get trailingCase() : TrailingCase;
    set trailingCase(value: TrailingCase); 
    constructor(leadingAdjustment: LeadingAdjustment, trailingCase: TrailingCase);

    static defaultOptions(): TitlecaseOptions;
}