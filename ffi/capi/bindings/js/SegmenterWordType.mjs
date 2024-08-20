// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** See the [Rust documentation for `WordType`](https://docs.rs/icu/latest/icu/segmenter/enum.WordType.html) for more information.
*/
export class SegmenterWordType {
    #value = undefined;

    static values = new Map([
        ["None", 0],
        ["Number", 1],
        ["Letter", 2]
    ]);

    constructor(value) {
        if (value instanceof SegmenterWordType) {
            this.#value = value.value;
            return;
        }

        if (SegmenterWordType.values.has(value)) {
            this.#value = value;
            return;
        }

        throw TypeError(value + " is not a SegmenterWordType and does not correspond to any of its enumerator values.");
    }

    get value() {
        return this.#value;
    }

    get ffiValue() {
        return SegmenterWordType.values.get(this.#value);
    }

    static None = new SegmenterWordType("None");
    static Number = new SegmenterWordType("Number");
    static Letter = new SegmenterWordType("Letter");

    get isWordLike() {
        const result = wasm.icu4x_SegmenterWordType_is_word_like_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }
}