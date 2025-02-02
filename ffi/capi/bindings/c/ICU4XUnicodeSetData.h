#ifndef ICU4XUnicodeSetData_H
#define ICU4XUnicodeSetData_H

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include "diplomat_runtime.h"

#include "ICU4XDataError.d.h"
#include "ICU4XDataProvider.d.h"
#include "ICU4XLocale.d.h"

#include "ICU4XUnicodeSetData.d.h"






bool ICU4XUnicodeSetData_contains(const ICU4XUnicodeSetData* self, const char* s_data, size_t s_len);

bool ICU4XUnicodeSetData_contains_char(const ICU4XUnicodeSetData* self, char32_t cp);

bool ICU4XUnicodeSetData_contains32(const ICU4XUnicodeSetData* self, uint32_t cp);

typedef struct ICU4XUnicodeSetData_load_basic_emoji_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_basic_emoji_result;
ICU4XUnicodeSetData_load_basic_emoji_result ICU4XUnicodeSetData_load_basic_emoji(const ICU4XDataProvider* provider);

typedef struct ICU4XUnicodeSetData_load_exemplars_main_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_exemplars_main_result;
ICU4XUnicodeSetData_load_exemplars_main_result ICU4XUnicodeSetData_load_exemplars_main(const ICU4XDataProvider* provider, const ICU4XLocale* locale);

typedef struct ICU4XUnicodeSetData_load_exemplars_auxiliary_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_exemplars_auxiliary_result;
ICU4XUnicodeSetData_load_exemplars_auxiliary_result ICU4XUnicodeSetData_load_exemplars_auxiliary(const ICU4XDataProvider* provider, const ICU4XLocale* locale);

typedef struct ICU4XUnicodeSetData_load_exemplars_punctuation_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_exemplars_punctuation_result;
ICU4XUnicodeSetData_load_exemplars_punctuation_result ICU4XUnicodeSetData_load_exemplars_punctuation(const ICU4XDataProvider* provider, const ICU4XLocale* locale);

typedef struct ICU4XUnicodeSetData_load_exemplars_numbers_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_exemplars_numbers_result;
ICU4XUnicodeSetData_load_exemplars_numbers_result ICU4XUnicodeSetData_load_exemplars_numbers(const ICU4XDataProvider* provider, const ICU4XLocale* locale);

typedef struct ICU4XUnicodeSetData_load_exemplars_index_result {union {ICU4XUnicodeSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XUnicodeSetData_load_exemplars_index_result;
ICU4XUnicodeSetData_load_exemplars_index_result ICU4XUnicodeSetData_load_exemplars_index(const ICU4XDataProvider* provider, const ICU4XLocale* locale);


void ICU4XUnicodeSetData_destroy(ICU4XUnicodeSetData* self);





#endif // ICU4XUnicodeSetData_H
