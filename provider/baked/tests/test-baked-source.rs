// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

extern crate alloc;

// Don't import anything, to assert that compiled data compiles without imports.
// In particular, *do not* import `icu_provider::prelude::*`.

struct Baked;

const _: () = {
    #[allow(unused_imports)]
    #[path = "data/mod.rs"]
    mod baked_data;
    baked_data::make_provider!(Baked);
    baked_data::impl_hello_world_v1_marker!(Baked, ITER);
};

#[test]
fn iter() {
    use icu_provider::hello_world::HelloWorldProvider;
    use icu_provider::prelude::*;

    assert_eq!(Baked.iter_ids(), HelloWorldProvider.iter_ids(),)
}

#[test]
fn load() {
    use icu_provider::hello_world::HelloWorldProvider;
    use icu_provider::prelude::*;

    for id in HelloWorldProvider.iter_ids().unwrap().iter() {
        let req = DataRequest {
            id: id.as_borrowed(),
            ..Default::default()
        };
        let expected = HelloWorldProvider.load(req).unwrap().payload;
        let baked = Baked.load(req).unwrap().payload;
        assert_eq!(baked, expected);
    }
}

#[test]
fn prefix_match() {
    use icu_provider::hello_world::HelloWorldV1Marker;
    use icu_provider::prelude::*;

    let id = DataIdentifierCow::from_owned(
        DataMarkerAttributes::from_str_or_panic("reve").to_owned(),
        "ja".parse().unwrap(),
    );

    assert!(DataProvider::<HelloWorldV1Marker>::load(
        &Baked,
        DataRequest {
            id: id.as_borrowed(),
            ..Default::default()
        }
    )
    .is_err());

    assert!(DataProvider::<HelloWorldV1Marker>::load(
        &Baked,
        DataRequest {
            id: id.as_borrowed(),
            metadata: {
                let mut metadata = DataRequestMetadata::default();
                metadata.attributes_prefix_match = true;
                metadata
            }
        }
    )
    .is_ok());

    let id = DataIdentifierCow::from_owned(
        DataMarkerAttributes::from_str_or_panic("non-existent").to_owned(),
        "ja".parse().unwrap(),
    );

    assert!(DataProvider::<HelloWorldV1Marker>::load(
        &Baked,
        DataRequest {
            id: id.as_borrowed(),
            metadata: {
                let mut metadata = DataRequestMetadata::default();
                metadata.attributes_prefix_match = true;
                metadata
            }
        }
    )
    .is_err());
}
