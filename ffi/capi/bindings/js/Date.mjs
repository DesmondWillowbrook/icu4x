// generated by diplomat-tool
import { Calendar } from "./Calendar.mjs"
import { CalendarError } from "./CalendarError.mjs"
import { CalendarParseError } from "./CalendarParseError.mjs"
import { IsoDate } from "./IsoDate.mjs"
import { IsoWeekday } from "./IsoWeekday.mjs"
import { WeekCalculator } from "./WeekCalculator.mjs"
import { WeekOf } from "./WeekOf.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Date object capable of containing a date and time for any calendar.
*
*See the [Rust documentation for `Date`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html) for more information.
*/
const Date_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_Date_destroy_mv1(ptr);
});

export class Date {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(symbol, ptr, selfEdge) {
        if (symbol !== diplomatRuntime.internalConstructor) {
            console.error("Date is an Opaque type. You cannot call its constructor.");
            return;
        }
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        
        // Are we being borrowed? If not, we can register.
        if (this.#selfEdge.length === 0) {
            Date_box_destroy_registry.register(this, this.#ptr);
        }
    }

    get ffiValue() {
        return this.#ptr;
    }

    static fromIsoInCalendar(year, month, day, calendar) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_Date_from_iso_in_calendar_mv1(diplomatReceive.buffer, year, month, day, calendar.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    static fromCodesInCalendar(eraCode, year, monthCode, day, calendar) {
        
        const eraCodeSlice = diplomatRuntime.DiplomatBuf.str8(wasm, eraCode);
        
        const monthCodeSlice = diplomatRuntime.DiplomatBuf.str8(wasm, monthCode);
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_Date_from_codes_in_calendar_mv1(diplomatReceive.buffer, eraCodeSlice.ptr, eraCodeSlice.size, year, monthCodeSlice.ptr, monthCodeSlice.size, day, calendar.ffiValue);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            eraCodeSlice.free();
        
            monthCodeSlice.free();
        
            diplomatReceive.free();
        }
    }

    static fromString(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.str8(wasm, v);
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        const result = wasm.icu4x_Date_from_string_mv1(diplomatReceive.buffer, vSlice.ptr, vSlice.size);
    
        try {
            if (!diplomatReceive.resultFlag) {
                const cause = CalendarParseError[Array.from(CalendarParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer)]];
                throw new globalThis.Error('CalendarParseError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.internalConstructor, diplomatRuntime.ptrRead(wasm, diplomatReceive.buffer), []);
        }
        
        finally {
            vSlice.free();
        
            diplomatReceive.free();
        }
    }

    toCalendar(calendar) {
        const result = wasm.icu4x_Date_to_calendar_mv1(this.ffiValue, calendar.ffiValue);
    
        try {
            return new Date(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    toIso() {
        const result = wasm.icu4x_Date_to_iso_mv1(this.ffiValue);
    
        try {
            return new IsoDate(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }

    get dayOfYear() {
        const result = wasm.icu4x_Date_day_of_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfMonth() {
        const result = wasm.icu4x_Date_day_of_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get dayOfWeek() {
        const result = wasm.icu4x_Date_day_of_week_mv1(this.ffiValue);
    
        try {
            return (() => {for (let i of IsoWeekday.values) { if(i[1] === result) return IsoWeekday[i[0]]; } return null;})();
        }
        
        finally {}
    }

    weekOfMonth(firstWeekday) {
        const result = wasm.icu4x_Date_week_of_month_mv1(this.ffiValue, firstWeekday.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    weekOfYear(calculator) {
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 8, 4, false);
        const result = wasm.icu4x_Date_week_of_year_mv1(diplomatReceive.buffer, this.ffiValue, calculator.ffiValue);
    
        try {
            return new WeekOf(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    get ordinalMonth() {
        const result = wasm.icu4x_Date_ordinal_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get monthCode() {
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.icu4x_Date_month_code_mv1(this.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }

    get yearInEra() {
        const result = wasm.icu4x_Date_year_in_era_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get era() {
        
        const write = new diplomatRuntime.DiplomatWriteBuf(wasm);
        wasm.icu4x_Date_era_mv1(this.ffiValue, write.buffer);
    
        try {
            return write.readString8();
        }
        
        finally {
            write.free();
        }
    }

    get monthsInYear() {
        const result = wasm.icu4x_Date_months_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInMonth() {
        const result = wasm.icu4x_Date_days_in_month_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get daysInYear() {
        const result = wasm.icu4x_Date_days_in_year_mv1(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get calendar() {
        const result = wasm.icu4x_Date_calendar_mv1(this.ffiValue);
    
        try {
            return new Calendar(diplomatRuntime.internalConstructor, result, []);
        }
        
        finally {}
    }
}