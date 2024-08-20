// generated by diplomat-tool
import { CodePointSetBuilder } from "./CodePointSetBuilder.mjs"
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `CaseMapCloser`](https://docs.rs/icu/latest/icu/casemap/struct.CaseMapCloser.html) for more information.
*/
const CaseMapCloser_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CaseMapCloser_destroy_mv1(ptr);
});

export class CaseMapCloser {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("CaseMapCloser is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            CaseMapCloser_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static create(provider) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_CaseMapCloser_create_mv1(diplomatReceive.buffer, provider.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new CaseMapCloser(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    addCaseClosureTo(c, builder) {
        wasm.icu4x_CaseMapCloser_add_case_closure_to_mv1(this.ffiValue, c, builder.ffiValue);
    
        try {}
        
        finally {}
    }

    addStringCaseClosureTo(s, builder) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        const result = wasm.icu4x_CaseMapCloser_add_string_case_closure_to_mv1(this.ffiValue, sSlice.ptr, sSlice.size, builder.ffiValue);
    
        try {
            return result;
        }
        
        finally {
            sSlice.free();
        }
    }
}