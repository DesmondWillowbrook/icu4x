// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** See the [Rust documentation for `LineBreakStrictness`](https://docs.rs/icu/latest/icu/segmenter/enum.LineBreakStrictness.html) for more information.
*/
export class LineBreakStrictness {
    #value = undefined;

    static values = new Map([
        ["Loose", 0],
        ["Normal", 1],
        ["Strict", 2],
        ["Anywhere", 3]
    ]);

    constructor(value) {
        if (value instanceof LineBreakStrictness) {
            this.#value = value.value;
            return;
        }

        if (LineBreakStrictness.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a LineBreakStrictness and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return LineBreakStrictness.values.get(this.#value);
    }

    static Loose = new LineBreakStrictness("Loose");
    static Normal = new LineBreakStrictness("Normal");
    static Strict = new LineBreakStrictness("Strict");
    static Anywhere = new LineBreakStrictness("Anywhere");
}