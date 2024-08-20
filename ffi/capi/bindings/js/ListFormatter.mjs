// generated by diplomat-tool
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import { ListLength } from "./ListLength.mjs"
import { Locale } from "./Locale.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `ListFormatter`](https://docs.rs/icu/latest/icu/list/struct.ListFormatter.html) for more information.
*/
const ListFormatter_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_ListFormatter_destroy_mv1(ptr);
});

export class ListFormatter {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("ListFormatter is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            ListFormatter_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static createAndWithLength(provider, locale, length) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_ListFormatter_create_and_with_length_mv1(diplomatReceive.buffer, provider.ffiValue, locale.ffiValue, length.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new ListFormatter(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static createOrWithLength(provider, locale, length) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_ListFormatter_create_or_with_length_mv1(diplomatReceive.buffer, provider.ffiValue, locale.ffiValue, length.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new ListFormatter(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static createUnitWithLength(provider, locale, length) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_ListFormatter_create_unit_with_length_mv1(diplomatReceive.buffer, provider.ffiValue, locale.ffiValue, length.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('DataError: ' + cause.value, { cause });
            }
            return new ListFormatter(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    format(list) {
        
        const listSlice = diplomatRuntime.DiplomatBuf.strs(wasm, list, "string16");
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.icu4x_ListFormatter_format_utf16_mv1(this.ffiValue, listSlice.ptr, listSlice.size, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            listSlice.free();
        
            write.free();
        }
    }
}