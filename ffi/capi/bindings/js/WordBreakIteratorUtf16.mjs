// generated by diplomat-tool
import { SegmenterWordType } from "./SegmenterWordType.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `WordBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html) for more information.
*/
const WordBreakIteratorUtf16_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_WordBreakIteratorUtf16_destroy_mv1(ptr);
});

export class WordBreakIteratorUtf16 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    #aEdge = [];
    
    constructor(symbol, ptr, selfEdge, aEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("WordBreakIteratorUtf16 is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            WordBreakIteratorUtf16_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    next() {
        const result = wasm.icu4x_WordBreakIteratorUtf16_next_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get wordType() {
        const result = wasm.icu4x_WordBreakIteratorUtf16_word_type_mv1(this.ffiValue);
    
        try {
            return SegmenterWordType[Array.from(SegmenterWordType.values.keys())[result]];
        }
        
        finally {}
    }

    get isWordLike() {
        const result = wasm.icu4x_WordBreakIteratorUtf16_is_word_like_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }
}