import { FFIError } from "./diplomat-runtime"
import { ICU4XDataError } from "./ICU4XDataError";
import { ICU4XDataProvider } from "./ICU4XDataProvider";
import { ICU4XWordBreakIteratorLatin1 } from "./ICU4XWordBreakIteratorLatin1";
import { ICU4XWordBreakIteratorUtf16 } from "./ICU4XWordBreakIteratorUtf16";
import { ICU4XWordBreakIteratorUtf8 } from "./ICU4XWordBreakIteratorUtf8";

/**

 * An ICU4X word-break segmenter, capable of finding word breakpoints in strings.

 * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html Rust documentation for `WordSegmenter`} for more information.
 */
export class ICU4XWordSegmenter {

  /**

   * Construct an {@link ICU4XWordSegmenter `ICU4XWordSegmenter`} with automatically selecting the best available LSTM or dictionary payload data.

   * Note: currently, it uses dictionary for Chinese and Japanese, and LSTM for Burmese, Khmer, Lao, and Thai.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.new_auto Rust documentation for `new_auto`} for more information.
   * @throws {@link FFIError}<{@link ICU4XDataError}>
   */
  static create_auto(provider: ICU4XDataProvider): ICU4XWordSegmenter | never;

  /**

   * Construct an {@link ICU4XWordSegmenter `ICU4XWordSegmenter`} with LSTM payload data for Burmese, Khmer, Lao, and Thai.

   * Warning: {@link ICU4XWordSegmenter `ICU4XWordSegmenter`} created by this function doesn't handle Chinese or Japanese.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.new_lstm Rust documentation for `new_lstm`} for more information.
   * @throws {@link FFIError}<{@link ICU4XDataError}>
   */
  static create_lstm(provider: ICU4XDataProvider): ICU4XWordSegmenter | never;

  /**

   * Construct an {@link ICU4XWordSegmenter `ICU4XWordSegmenter`} with dictionary payload data for Chinese, Japanese, Burmese, Khmer, Lao, and Thai.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.new_dictionary Rust documentation for `new_dictionary`} for more information.
   * @throws {@link FFIError}<{@link ICU4XDataError}>
   */
  static create_dictionary(provider: ICU4XDataProvider): ICU4XWordSegmenter | never;

  /**

   * Segments a string.

   * Ill-formed input is treated as if errors had been replaced with REPLACEMENT CHARACTERs according to the WHATWG Encoding Standard.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.segment_utf8 Rust documentation for `segment_utf8`} for more information.
   */
  segment_utf8(input: string): ICU4XWordBreakIteratorUtf8;

  /**

   * Segments a string.

   * Ill-formed input is treated as if errors had been replaced with REPLACEMENT CHARACTERs according to the WHATWG Encoding Standard.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.segment_utf16 Rust documentation for `segment_utf16`} for more information.
   */
  segment_utf16(input: string): ICU4XWordBreakIteratorUtf16;

  /**

   * Segments a Latin-1 string.

   * See the {@link https://docs.rs/icu/latest/icu/segmenter/struct.WordSegmenter.html#method.segment_latin1 Rust documentation for `segment_latin1`} for more information.
   */
  segment_latin1(input: Uint8Array): ICU4XWordBreakIteratorLatin1;
}
