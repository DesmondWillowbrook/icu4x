// generated by diplomat-tool

part of 'lib.g.dart';

/// An ICU4X Date object capable of containing a date and time for any calendar.
///
/// See the [Rust documentation for `Date`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html) for more information.
final class Date implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  Date._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_Date_destroy_mv1));

  /// Creates a new [`Date`] representing the ISO date and time
  /// given but in a given calendar
  ///
  /// See the [Rust documentation for `new_from_iso`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.new_from_iso) for more information.
  ///
  /// Throws [CalendarError] on failure.
  factory Date.fromIsoInCalendar(int year, int month, int day, Calendar calendar) {
    final result = _icu4x_Date_from_iso_in_calendar_mv1(year, month, day, calendar._ffi);
    if (!result.isOk) {
      throw CalendarError.values[result.union.err];
    }
    return Date._fromFfi(result.union.ok, []);
  }

  /// Creates a new [`Date`] from the given codes, which are interpreted in the given calendar system
  ///
  /// See the [Rust documentation for `try_new_from_codes`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.try_new_from_codes) for more information.
  ///
  /// Throws [CalendarError] on failure.
  factory Date.fromCodesInCalendar(String eraCode, int year, String monthCode, int day, Calendar calendar) {
    final temp = _FinalizedArena();
    final result = _icu4x_Date_from_codes_in_calendar_mv1(eraCode._utf8AllocIn(temp.arena), year, monthCode._utf8AllocIn(temp.arena), day, calendar._ffi);
    if (!result.isOk) {
      throw CalendarError.values[result.union.err];
    }
    return Date._fromFfi(result.union.ok, []);
  }

  /// Creates a new [`Date`] from an IXDTF string.
  ///
  /// See the [Rust documentation for `try_from_str`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.try_from_str) for more information.
  ///
  /// Throws [CalendarParseError] on failure.
  factory Date.fromString(String v) {
    final temp = _FinalizedArena();
    final result = _icu4x_Date_from_string_mv1(v._utf8AllocIn(temp.arena));
    if (!result.isOk) {
      throw CalendarParseError.values[result.union.err];
    }
    return Date._fromFfi(result.union.ok, []);
  }

  /// Convert this date to one in a different calendar
  ///
  /// See the [Rust documentation for `to_calendar`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.to_calendar) for more information.
  Date toCalendar(Calendar calendar) {
    final result = _icu4x_Date_to_calendar_mv1(_ffi, calendar._ffi);
    return Date._fromFfi(result, []);
  }

  /// Converts this date to ISO
  ///
  /// See the [Rust documentation for `to_iso`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.to_iso) for more information.
  IsoDate toIso() {
    final result = _icu4x_Date_to_iso_mv1(_ffi);
    return IsoDate._fromFfi(result, []);
  }

  /// Returns the 1-indexed day in the year for this date
  ///
  /// See the [Rust documentation for `day_of_year_info`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.day_of_year_info) for more information.
  int get dayOfYear {
    final result = _icu4x_Date_day_of_year_mv1(_ffi);
    return result;
  }

  /// Returns the 1-indexed day in the month for this date
  ///
  /// See the [Rust documentation for `day_of_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.day_of_month) for more information.
  int get dayOfMonth {
    final result = _icu4x_Date_day_of_month_mv1(_ffi);
    return result;
  }

  /// Returns the day in the week for this day
  ///
  /// See the [Rust documentation for `day_of_week`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.day_of_week) for more information.
  IsoWeekday get dayOfWeek {
    final result = _icu4x_Date_day_of_week_mv1(_ffi);
    return IsoWeekday.values.firstWhere((v) => v._ffi == result);
  }

  /// Returns the week number in this month, 1-indexed, based on what
  /// is considered the first day of the week (often a locale preference).
  ///
  /// `first_weekday` can be obtained via `first_weekday()` on [`WeekCalculator`]
  ///
  /// See the [Rust documentation for `week_of_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.week_of_month) for more information.
  int weekOfMonth(IsoWeekday firstWeekday) {
    final result = _icu4x_Date_week_of_month_mv1(_ffi, firstWeekday._ffi);
    return result;
  }

  /// Returns the week number in this year, using week data
  ///
  /// See the [Rust documentation for `week_of_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.week_of_year) for more information.
  WeekOf weekOfYear(WeekCalculator calculator) {
    final result = _icu4x_Date_week_of_year_mv1(_ffi, calculator._ffi);
    return WeekOf._fromFfi(result);
  }

  /// Returns 1-indexed number of the month of this date in its year
  ///
  /// Note that for lunar calendars this may not lead to the same month
  /// having the same ordinal month across years; use month_code if you care
  /// about month identity.
  ///
  /// See the [Rust documentation for `month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.month) for more information.
  int get ordinalMonth {
    final result = _icu4x_Date_ordinal_month_mv1(_ffi);
    return result;
  }

  /// Returns the month code for this date. Typically something
  /// like "M01", "M02", but can be more complicated for lunar calendars.
  ///
  /// See the [Rust documentation for `month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.month) for more information.
  String get monthCode {
    final write = _Write();
    _icu4x_Date_month_code_mv1(_ffi, write._ffi);
    return write.finalize();
  }

  /// Returns the year number in the current era for this date
  ///
  /// See the [Rust documentation for `year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.year) for more information.
  int get yearInEra {
    final result = _icu4x_Date_year_in_era_mv1(_ffi);
    return result;
  }

  /// Returns the era for this date,
  ///
  /// See the [Rust documentation for `year`](https://docs.rs/icu/latest/icu/struct.Date.html#method.year) for more information.
  ///
  /// Additional information: [1](https://docs.rs/icu/latest/icu/types/struct.Era.html)
  String get era {
    final write = _Write();
    _icu4x_Date_era_mv1(_ffi, write._ffi);
    return write.finalize();
  }

  /// Returns the number of months in the year represented by this date
  ///
  /// See the [Rust documentation for `months_in_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.months_in_year) for more information.
  int get monthsInYear {
    final result = _icu4x_Date_months_in_year_mv1(_ffi);
    return result;
  }

  /// Returns the number of days in the month represented by this date
  ///
  /// See the [Rust documentation for `days_in_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.days_in_month) for more information.
  int get daysInMonth {
    final result = _icu4x_Date_days_in_month_mv1(_ffi);
    return result;
  }

  /// Returns the number of days in the year represented by this date
  ///
  /// See the [Rust documentation for `days_in_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.days_in_year) for more information.
  int get daysInYear {
    final result = _icu4x_Date_days_in_year_mv1(_ffi);
    return result;
  }

  /// Returns the [`Calendar`] object backing this date
  ///
  /// See the [Rust documentation for `calendar`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.calendar) for more information.
  Calendar get calendar {
    final result = _icu4x_Date_calendar_mv1(_ffi);
    return Calendar._fromFfi(result, []);
  }
}

@meta.ResourceIdentifier('icu4x_Date_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_Date_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_Date_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_Date_from_iso_in_calendar_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Int32, ffi.Uint8, ffi.Uint8, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_from_iso_in_calendar_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_Date_from_iso_in_calendar_mv1(int year, int month, int day, ffi.Pointer<ffi.Opaque> calendar);

@meta.ResourceIdentifier('icu4x_Date_from_codes_in_calendar_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(_SliceUtf8, ffi.Int32, _SliceUtf8, ffi.Uint8, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_from_codes_in_calendar_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_Date_from_codes_in_calendar_mv1(_SliceUtf8 eraCode, int year, _SliceUtf8 monthCode, int day, ffi.Pointer<ffi.Opaque> calendar);

@meta.ResourceIdentifier('icu4x_Date_from_string_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(_SliceUtf8)>(isLeaf: true, symbol: 'icu4x_Date_from_string_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_Date_from_string_mv1(_SliceUtf8 v);

@meta.ResourceIdentifier('icu4x_Date_to_calendar_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_to_calendar_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_Date_to_calendar_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> calendar);

@meta.ResourceIdentifier('icu4x_Date_to_iso_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_to_iso_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_Date_to_iso_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_day_of_year_mv1')
@ffi.Native<ffi.Uint16 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_day_of_year_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_day_of_year_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_day_of_month_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_day_of_month_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_day_of_month_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_day_of_week_mv1')
@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_day_of_week_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_day_of_week_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_week_of_month_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Int32)>(isLeaf: true, symbol: 'icu4x_Date_week_of_month_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_week_of_month_mv1(ffi.Pointer<ffi.Opaque> self, int firstWeekday);

@meta.ResourceIdentifier('icu4x_Date_week_of_year_mv1')
@ffi.Native<_WeekOfFfi Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_week_of_year_mv1')
// ignore: non_constant_identifier_names
external _WeekOfFfi _icu4x_Date_week_of_year_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> calculator);

@meta.ResourceIdentifier('icu4x_Date_ordinal_month_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_ordinal_month_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_ordinal_month_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_month_code_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_month_code_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_Date_month_code_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_Date_year_in_era_mv1')
@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_year_in_era_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_year_in_era_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_era_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_era_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_Date_era_mv1(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> write);

@meta.ResourceIdentifier('icu4x_Date_months_in_year_mv1')
@ffi.Native<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_months_in_year_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_months_in_year_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_days_in_month_mv1')
@ffi.Native<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_days_in_month_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_days_in_month_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_days_in_year_mv1')
@ffi.Native<ffi.Uint16 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_days_in_year_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_Date_days_in_year_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_Date_calendar_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_Date_calendar_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_Date_calendar_mv1(ffi.Pointer<ffi.Opaque> self);
