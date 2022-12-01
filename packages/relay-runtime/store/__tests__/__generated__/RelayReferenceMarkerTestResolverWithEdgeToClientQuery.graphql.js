/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<e78f7619f5f7dc77215bf5f239da913e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { QueryAllAstrologicalSignsResolver$key } from "./../resolvers/__generated__/QueryAllAstrologicalSignsResolver.graphql";
import {all_astrological_signs as queryAllAstrologicalSignsResolver} from "../resolvers/QueryAllAstrologicalSignsResolver.js";
// Type assertion validating that `queryAllAstrologicalSignsResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryAllAstrologicalSignsResolver: (
  rootKey: QueryAllAstrologicalSignsResolver$key, 
) => mixed);
export type RelayReferenceMarkerTestResolverWithEdgeToClientQuery$variables = {||};
export type RelayReferenceMarkerTestResolverWithEdgeToClientQuery$data = {|
  +all_astrological_signs: ?$ReadOnlyArray<?{|
    +id: string,
  |}>,
|};
export type RelayReferenceMarkerTestResolverWithEdgeToClientQuery = {|
  response: RelayReferenceMarkerTestResolverWithEdgeToClientQuery$data,
  variables: RelayReferenceMarkerTestResolverWithEdgeToClientQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "RelayReferenceMarkerTestResolverWithEdgeToClientQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "AstrologicalSign",
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": {
            "args": null,
            "kind": "FragmentSpread",
            "name": "QueryAllAstrologicalSignsResolver"
          },
          "kind": "RelayResolver",
          "name": "all_astrological_signs",
          "resolverModule": require('./../resolvers/QueryAllAstrologicalSignsResolver').all_astrological_signs,
          "path": "all_astrological_signs"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "AstrologicalSign",
          "kind": "LinkedField",
          "name": "all_astrological_signs",
          "plural": true,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReferenceMarkerTestResolverWithEdgeToClientQuery",
    "selections": [
      {
        "name": "all_astrological_signs",
        "args": null,
        "fragment": {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "me",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "Query",
          "abstractKey": null
        },
        "kind": "RelayResolver",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "85c3bc2f08abfc3f6f4054fdbe203f16",
    "id": null,
    "metadata": {},
    "name": "RelayReferenceMarkerTestResolverWithEdgeToClientQuery",
    "operationKind": "query",
    "text": "query RelayReferenceMarkerTestResolverWithEdgeToClientQuery {\n  ...QueryAllAstrologicalSignsResolver\n}\n\nfragment QueryAllAstrologicalSignsResolver on Query {\n  me {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "2ca79d027314a1a8e7f8c700d07c8fb0";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReferenceMarkerTestResolverWithEdgeToClientQuery$variables,
  RelayReferenceMarkerTestResolverWithEdgeToClientQuery$data,
>*/);
