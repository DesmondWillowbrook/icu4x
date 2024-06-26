// @generated
include!("and_list_v2_marker.rs.data");
include!("or_list_v2_marker.rs.data");
include!("unit_list_v2_marker.rs.data");
/// Marks a type as a data provider. You can then use macros like
/// `impl_core_helloworld_v1` to add implementations.
///
/// ```ignore
/// struct MyProvider;
/// const _: () = {
///     include!("path/to/generated/macros.rs");
///     make_provider!(MyProvider);
///     impl_core_helloworld_v1!(MyProvider);
/// }
/// ```
#[doc(hidden)]
#[macro_export]
macro_rules! __make_provider {
    ($ name : ty) => {
        #[clippy::msrv = "1.70"]
        impl $name {
            #[allow(dead_code)]
            pub(crate) const MUST_USE_MAKE_PROVIDER_MACRO: () = ();
        }
        icu_provider::marker::impl_data_provider_never_marker!($name);
    };
}
#[doc(inline)]
pub use __make_provider as make_provider;
#[allow(unused_macros)]
macro_rules! impl_data_provider {
    ($ provider : ty) => {
        make_provider!($provider);
        impl_and_list_v2_marker!($provider);
        impl_or_list_v2_marker!($provider);
        impl_unit_list_v2_marker!($provider);
    };
}
#[allow(unused_macros)]
macro_rules! impl_any_provider {
    ($ provider : ty) => {
        #[clippy::msrv = "1.70"]
        impl icu_provider::any::AnyProvider for $provider {
            fn load_any(&self, marker: icu_provider::DataMarkerInfo, req: icu_provider::DataRequest) -> Result<icu_provider::AnyResponse, icu_provider::DataError> {
                match marker.path.hashed() {
                    h if h == <icu::list::provider::AndListV2Marker as icu_provider::DataMarker>::INFO.path.hashed() => icu_provider::DataProvider::<icu::list::provider::AndListV2Marker>::load(self, req).map(icu_provider::DataResponse::wrap_into_any_response),
                    h if h == <icu::list::provider::OrListV2Marker as icu_provider::DataMarker>::INFO.path.hashed() => icu_provider::DataProvider::<icu::list::provider::OrListV2Marker>::load(self, req).map(icu_provider::DataResponse::wrap_into_any_response),
                    h if h == <icu::list::provider::UnitListV2Marker as icu_provider::DataMarker>::INFO.path.hashed() => icu_provider::DataProvider::<icu::list::provider::UnitListV2Marker>::load(self, req).map(icu_provider::DataResponse::wrap_into_any_response),
                    _ => Err(icu_provider::DataErrorKind::MissingDataMarker.with_req(marker, req)),
                }
            }
        }
    };
}
