// generated by diplomat-tool
import { LocaleFallbackPriority } from "./LocaleFallbackPriority.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** Collection of configurations for the ICU4X fallback algorithm.
*
*See the [Rust documentation for `LocaleFallbackConfig`](https://docs.rs/icu/latest/icu/locale/fallback/struct.LocaleFallbackConfig.html) for more information.
*/
export class LocaleFallbackConfig {

    #priority;
    get priority()  {
        return this.#priority;
    }
    set priority(value) {
        this.#priority = value;
    }
    constructor() {
        if (arguments.length > 0 && arguments[0] === diplomatRuntime.internalConstructor) {
            this.#fromFFI(...Array.prototype.slice.call(arguments, 1));
        } else {
            
            this.#priority = arguments[0];
        }
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [this.#priority.ffiValue]
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    #fromFFI(ptr) {
        const priorityDeref = diplomatRuntime.enumDiscriminant(wasm, ptr);
        this.#priority = LocaleFallbackPriority[Array.from(LocaleFallbackPriority.values.keys())[priorityDeref]];
    }
}