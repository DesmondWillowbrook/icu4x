// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** See the [Rust documentation for `Fallback`](https://docs.rs/icu/latest/icu/displaynames/options/enum.Fallback.html) for more information.
*/
export class DisplayNamesFallback {
    #value = undefined;

    static values = new Map([
        ["Code", 0],
        ["None", 1]
    ]);

    constructor(value) {
        if (value instanceof DisplayNamesFallback) {
            this.#value = value.value;
            return;
        }

        if (DisplayNamesFallback.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a DisplayNamesFallback and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return DisplayNamesFallback.values.get(this.#value);
    }

    static Code = new DisplayNamesFallback("Code");
    static None = new DisplayNamesFallback("None");
}