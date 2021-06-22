(self.webpackChunk=self.webpackChunk||[]).push([[17635],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21150:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,metadata:()=>l,toc:()=>p,default:()=>d});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],s={id:"testing-relay-components",title:"Testing Relay Components",original_id:"testing-relay-components"},l={unversionedId:"testing-relay-components",id:"version-v10.0.0/testing-relay-components",isDocsHomePage:!1,title:"Testing Relay Components",description:"The purpose of this document is to cover the Relay APIs for testing Relay components.",source:"@site/versioned_docs/version-v10.0.0/Modern-TestingRelayComponents.md",sourceDirName:".",slug:"/testing-relay-components",permalink:"/docs/v10.0.0/testing-relay-components",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.0.0/Modern-TestingRelayComponents.md",version:"v10.0.0",lastUpdatedBy:"Andres Suarez",lastUpdatedAt:1624360176,formattedLastUpdatedAt:"6/22/2021",frontMatter:{id:"testing-relay-components",title:"Testing Relay Components",original_id:"testing-relay-components"},sidebar:"version-v10.0.0/docs",previous:{title:"Type Emission",permalink:"/docs/v10.0.0/type-emission"},next:{title:"Local State Management",permalink:"/docs/v10.0.0/local-state-management"}},p=[{value:"Testing with Relay",id:"testing-with-relay",children:[]},{value:"RelayMockEnvironment API Overview",id:"relaymockenvironment-api-overview",children:[]},{value:"Mock Payload Generator and @relay_test_operation Directive",id:"mock-payload-generator-and-relay_test_operation-directive",children:[{value:"Mock Resolver Context",id:"mock-resolver-context",children:[]},{value:"ID Generation",id:"id-generation",children:[]},{value:"@relay_test_operation",id:"relay_test_operation",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Relay Component Test",id:"relay-component-test",children:[]},{value:"Fragment Container Tests",id:"fragment-container-tests",children:[]},{value:"Pagination Container Test",id:"pagination-container-test",children:[]},{value:"Refetch Container",id:"refetch-container",children:[]},{value:"Mutations",id:"mutations",children:[]},{value:"Subscription",id:"subscription",children:[]},{value:"Example with <code>queueOperationResolver</code>",id:"example-with-queueoperationresolver",children:[]}]}],c={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The purpose of this document is to cover the Relay APIs for testing Relay components."),(0,a.kt)("p",null,"The content is focused mostly on jest unit-tests (testing individual components) and integration tests (testing a combination of components).  But these testing tools may be applied in different cases: screenshot-tests, production smoke-tests, fuzz-tests, e2e test, etc."),(0,a.kt)("p",null,"What are the benefits of writing jest tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In general, it improves the stability of the system. Flow really helps with catching a various set of javascript errors, but it is still possible to introduce regressions to the components. Unit-tests may help to find, reproduce, and fix those regressions, and prevent them in the future."),(0,a.kt)("li",{parentName:"ul"},"It simplifies the refactoring process: when properly written (testing public interface, not implementation) - tests really help with changing the internal implementation of the components."),(0,a.kt)("li",{parentName:"ul"},"It may speed up and improve the development workflow. Some people may call it Test Driven Development (TM). But essentially it's just writing tests for public interfaces of your components, and then writing the components that are implementing those interfaces. Jest \u2014watch mode is really shining in this case."),(0,a.kt)("li",{parentName:"ul"},"It will simplify the onboarding process for new developers, having tests really help to ramp up on the new code base, fixing bugs, and delivering features.")),(0,a.kt)("p",null,"One thing to notice: while jest unit and integration tests will help improve the stability of the system, they should be considered as a part of a bigger stability infrastructure with multiple layers of automated testing: flow, e2e, screenshot, performance tests."),(0,a.kt)("h2",{id:"testing-with-relay"},"Testing with Relay"),(0,a.kt)("p",null,"Testing applications that are using Relay may be challenging, because of the additional data fetching layer that is wrapping the actual product code."),(0,a.kt)("p",null,"And it's not always easy to understand the mechanics of all processes that are happening behind Relay, and how to properly handle interactions with the framework."),(0,a.kt)("p",null,"Fortunately, we have tools that aim to simplify the process of writing tests for Relay components, by providing imperative APIs for controlling the request/response flow and additional API for mock data generation."),(0,a.kt)("p",null,"There are two main modules that you may use in your tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createMockEnvironment(options): RelayMockEnvironment"),(0,a.kt)("li",{parentName:"ul"},"MockPayloadGenerator and @relay_test_operation directive")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"createMockEnvironment,")," you will be able to create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"RelayMockEnvironment"),", a Relay environment specifically for your tests. The instance created by ",(0,a.kt)("inlineCode",{parentName:"p"},"createMockEnvironment")," is implementing the Relay Environment Interface and it also has an additional Mock layer, with methods that allow to resolve/reject and control the flow of operations (queries/mutations/subscriptions)."),(0,a.kt)("p",null,"The main purpose of ",(0,a.kt)("inlineCode",{parentName:"p"},"MockPayloadGenerator")," is to improve the process of creating and maintaining the mock data for tested components."),(0,a.kt)("p",null,"One of the patterns you may see in the tests for Relay components: 95% of the test code, is the test preparation: the gigantic mock object with dummy data, manually created, or just a copy of a sample server response that needs to be passed as the network response. And rest 5% is actual test. As a result, people don't test much. It's hard to create and manage all these dummy payloads for different cases. Hence, writing tests are time-consuming and painful to maintain."),(0,a.kt)("p",null,"With the MockPayloadGenerator and @relay_test_operation, we want to get rid of this pattern and switch the developer's focus from the preparation of the test to the actual testing."),(0,a.kt)("h2",{id:"relaymockenvironment-api-overview"},"RelayMockEnvironment API Overview"),(0,a.kt)("p",null,"RelayMockEnvironment is a special version of Relay Environment with an additional API methods for controlling the operation flow: resolving and rejection operations, providing incremental payloads for subscriptions, working with cache."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methods for finding operations executed on the environment",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getAllOperations()")," - get all operation executed during the test by the current time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"findOperation(findFn => boolean) "),"- find particular operation in the list of all executed operations, this method will throw, if operation is not available. Maybe useful to find a particular operation when multiple operations executed at the same time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getMostRecentOperation() -")," return the most recent operation, this method will throw if no operations were executed prior this call."))),(0,a.kt)("li",{parentName:"ul"},"Methods for resolving or rejecting operations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nextValue(request | operation, data)")," - provide payload for operation(request), but not complete request. Practically useful when testing incremental updates and subscriptions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"complete(request | operation)"),"  - complete the operation, no more payloads are expected for this operation, when it's completed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolve(request | operation, data)")," - resolve the request with provided GraphQL response. Essentially, it's nextValue(...) and complete(...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reject(request | operation, error)")," - reject the request with particular error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolveMostRecentOperation(data | operation => data)")," - resolve and getMostRecentOperation work together"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rejectMostRecentOperation(error | operation => error)"),"  - reject and getMostRecentOperation work together"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queueOperationResolver(operation => data | error)")," - adds an OperationResolver function to the queue, those methods will be used to resolve/reject operations as they appear"))),(0,a.kt)("li",{parentName:"ul"},"Additional utility methods",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isLoading(request | operation)")," - will return ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if operations have not been completed, yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cachePayload(request | operation, variables, payload)")," - will add payload to QueryResponse cache"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clearCache() "),"- will clear QueryResponse cache")))),(0,a.kt)("h2",{id:"mock-payload-generator-and-relay_test_operation-directive"},"Mock Payload Generator and @relay_test_operation Directive"),(0,a.kt)("p",null,"MockPayloadGenerator may drastically simplify the process of creating and maintaining mock data for your tests. MockPayloadGenerator is the module that can generate dummy data for the selection that you have in your operation. There is an API to modify the generated data - Mock Resolvers. With Mock Resolvers, you may adjust the data for your needs. Collection of Mock Resolvers it's an object where keys are names of GraphQL types (ID, String, User, Feedback, Comment, etc), and values are functions that will return the default data for the type."),(0,a.kt)("p",null,"Example of a simple Mock Resolver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  ID() {\n    // Return mock value for a scalar filed with type ID\n    return 'my-id';\n  },\n  String() {\n    // Every scalar field with type String will have this default value\n    return \"Lorem Ipsum\"\n  }\n}\n")),(0,a.kt)("p",null,"It is possible to define more resolvers for Object types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // This will be the default values for User object in the query response\n  User() {\n    return {\n      id: 1000,\n      name: "Alice",\n      profile_picture: {\n        uri: "http://my-image...",\n      },\n    };\n  },\n}\n')),(0,a.kt)("h3",{id:"mock-resolver-context"},"Mock Resolver Context"),(0,a.kt)("p",null,"The first argument of the MockResolver is the object that contains Mock Resolver Context. It is possible to return dynamic values from mock resolvers based on the context - for instance, name or alias of the field, a path in the selection, arguments, or parent type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  String(context) {\n    if (context.name === 'zip') {\n      return '94025';\n    }\n    if (context.path != null && context.path.join('.') === 'node.actor.name') {\n      return 'Current Actor Name';\n    }\n    if (context.parentType === 'Image' && context.name === 'uri') {\n       return 'http://my-image.url';\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"id-generation"},"ID Generation"),(0,a.kt)("p",null,"The second argument of the Mock Resolver its a function that will generate a sequence of integers, useful to generate unique ids in the tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // will generate strings "my-id-1", "my-id-2", etc.\n  ID(_, generateId) {\n     return `my-id-${generateId()}`;\n  },\n}\n')),(0,a.kt)("h3",{id:"relay_test_operation"},"@relay_test_operation"),(0,a.kt)("p",null,"Most of GraphQL type information for a specific field in the selection is not available during Relay runtime. By default, Relay, cannot get type information for a scalar field in the selection, or an interface type of the object."),(0,a.kt)("p",null,"Operation with the @relay_test_operation directive will have additional metadata that will contain GraphQL type info for fields in the operation's selection. And it will improve the quality of the generated data. You also will be able to define Mock resolvers for Scalar (not only ID and String) and Abstract types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  Float() {\n    return 123.456;\n  },\n  Boolean(context) {\n    if (context.name === 'can_edit') {\n      return true;\n    }\n    return false;\n  },\n  Node() {\n    return {\n      __typename: 'User',\n      id: 'my-user-id',\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"relay-component-test"},"Relay Component Test"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"createMockEnvironment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MockPayloadGenerator")," allows writing concise tests for components that are using Relay Containers and Renderers. Both those modules can be imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"relay-test-utils")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Say you have a component with the QueryRenderer\nconst MyAwesomeViewRoot = require('MyAwesomeViewRoot');\nconst {\n  createMockEnvironment,\n  MockPayloadGenerator,\n} = require('relay-test-utils');\n\n// Relay may trigger 3 different states\n// for this component: Loading, Error, Data Loaded\n// Here is examples of tests for those states.\ntest('Loading State', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // Here we just verify that the spinner is rendered\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'spinner'),\n  ).toBeDefined();\n});\n\ntest('Data Render', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation),\n  );\n\n  // At this point operation will be resolved\n  // and the data for a query will be available in the store\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'myButton'),\n  ).toBeDefined();\n});\n\ntest('Error State', () => {\n  const environment = createMockEnvironment();\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // Error can be simulated with `rejectMostRecentOperation`\n  environment.mock.rejectMostRecentOperation(new Error('Uh-oh'));\n\n  expect(\n    renderer.root.find(item => (item.props.testID = 'errorMessage')),\n  ).toBeDefined();\n});\n")),(0,a.kt)("h3",{id:"fragment-container-tests"},"Fragment Container Tests"),(0,a.kt)("p",null,"Essentially, in the example above will ",(0,a.kt)("inlineCode",{parentName:"p"},"resolveMostRecentOperation")," will generate data for all child fragment containers (pagination, refetch). But, usually the Root Components container may have many child fragment components and you may want to exercise a specific Fragment Container. The solution for that would be to wrap you fragment container with the QueryRenderer that renders a Query that's spreads fragments from you fragment container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"test('Fragment Container', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query TestQuery @relay_test_operation {\n          myData: node(id: \"test-id\") {\n            ...MyFragment\n          }\n        }\n      `}\n      variables={{}}\n      render={({error, props}) => {\n        if (props) {\n          return <MyFragmentContainer myData={props.myData} />;\n        } else if (error) {\n          return error.message;\n        }\n        return 'Loading...';\n      }}\n    />\n  );\n  const renderer = ReactTestRenderer.create(<TestRenderer />);\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation),\n  );\n\n  expect(renderer).toMatchSnapshot();\n});\n")),(0,a.kt)("h3",{id:"pagination-container-test"},"Pagination Container Test"),(0,a.kt)("p",null,"Essentially, tests for Pagination container are not different from Fragment Container tests. But we can do more here, we can actually see how the pagination works - we can assert the behavior of our components when performing pagination (load more, refetch)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Pagination Example\ntest('Pagination Container', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query TestQuery @relay_test_operation {\n          myConnection: node(id: \"test-id\") {\n            connection {\n              ...MyConnectionFragment\n            }\n          }\n        }\n      `}\n      variables={{}}\n      render={({error, props}) => {\n        if (props) {\n          return <MyPaginationContainer connection={props.myConnection.connection} />;\n        } else if (error) {\n          return error.message;\n        }\n        return 'Loading...';\n      }}\n    />\n  );\n  const renderer = ReactTestRenderer.create(<TestRenderer />);\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation, {\n      ID(_, generateId) {\n        // Why we're doing this?\n        // To make sure that we will generate a different set of ID\n        // for elements on first page and the second page.\n        return `first-page-id-${generateId()}`;\n      },\n      PageInfo() {\n        return {\n          has_next_page: true,\n        };\n      },\n    }),\n  );\n\n  // Let's find a `loadMore` button and click on it to initiate pagination request, for example\n  const loadMore = renderer.root.find(node => node.props['data-testid'] === 'loadMore')\n  expect(loadMore.props.disabled).toBe(false);\n  loadMore.props.onClick();\n\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation, {\n      ID(_, generateId) {\n        // See, the second page IDs will be different\n        return `second-page-id-${generateId()}`;\n      },\n      PageInfo() {\n        return {\n          // And the button should be disabled, now. Probably.\n          has_next_page: false,\n        };\n      },\n    }),\n  );\n  expect(loadMore.props.disabled).toBe(true);\n});\n\n\n")),(0,a.kt)("h3",{id:"refetch-container"},"Refetch Container"),(0,a.kt)("p",null,"We can use similar approach here with wrapping container with Query Renderer. And for the sake of completeness, we will add example here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"test('Refetch Container', () => {\n  const environment = createMockEnvironment();\n  const TestRenderer = () => (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query TestQuery @relay_test_operation {\n          myData: node(id: \"test-id\") {\n            ...MyRefetchableFragment\n          }\n        }\n      `}\n      variables={{}}\n      render={({error, props}) => {\n        if (props) {\n          return <MyRefetchContainer myData={props.myData} />;\n        } else if (error) {\n          return error.message;\n        }\n        return 'Loading...';\n      }}\n    />\n  );\n\n  const renderer = ReactTestRenderer.create(<TestRenderer />);\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation),\n  );\n  // Assuming we have refetch button in the Container\n  const refetchButton = renderer.root.find(node => node.props['data-testid'] === 'refetch');\n\n  // This should trigger the `refetch`\n  refetchButton.props.onClick();\n\n  environment.mock.resolveMostRecentOperation(operation =>\n    MockPayloadGenerator.generate(operation, {\n      // We can customize mock resolvers, to change the output of the refetch query\n    }),\n  );\n  // expect(renderer).toMatchSnapshot();\n});\n")),(0,a.kt)("h3",{id:"mutations"},"Mutations"),(0,a.kt)("p",null,"Mutations itself are operations so we can test them independently (unit-test) for specific mutation, or in combination with the view from which this mutation is called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Say, you have a mutation function\nfunction sendMutation(environment, onCompleted, onError, variables)\n  commitMutation(environment, {\n    mutation: graphql`...`,\n    onCompleted,\n    onError,\n    variables,\n  });\n}\n\n// Example test may be written like so\ntest('it should send mutation', () => {\n  const environment = createMockEnvironment();\n  const onCompleted = jest.fn();\n  sendMutation(environment, onCompleted, jest.fn(), {});\n  const operation = environment.mock.getMostRecentOperation();\n  environment.mock.resolve(\n    operation,\n    MockPayloadGenerator.generate(operation)\n  );\n  expect(onCompleted).toBeCalled();\n});\n")),(0,a.kt)("h3",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"We can test subscription in a similar way we test mutations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example subscribe function\nfunction subscribe(environment, onNext, onError, variables)\n  requestSubscription(environment, {\n    subscription: graphql`...`,\n    onNext,\n    onError,\n    variables,\n  });\n}\n\n// Example test may be written like so\ntest('it should subscribe', () => {\n  const environment = createMockEnvironment();\n  const onNext = jest.fn();\n  subscribe(environment, onNext, jest.fn(), {});\n  const operation = environment.mock.getMostRecentOperation();\n  environment.mock.nextValue(\n    operation,\n    MockPayloadGenerator.generate(operation)\n  );\n  expect(onNext).toBeCalled();\n});\n")),(0,a.kt)("h3",{id:"example-with-queueoperationresolver"},"Example with ",(0,a.kt)("inlineCode",{parentName:"h3"},"queueOperationResolver")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"queueOpeararionResolver")," it possible to define responses for operations that will be executed on the environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Say you have a component with the QueryRenderer\nconst MyAwesomeViewRoot = require('MyAwesomeViewRoot');\nconst {\n  createMockEnvironment,\n  MockPayloadGenerator,\n} = require('relay-test-utils');\n\ntest('Data Render', () => {\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(operation =>\n    MockPayloadGenerator.generate(operation),\n  );\n\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  // At this point operation will be resolved\n  // and the data for a query will be available in the store\n  expect(\n    renderer.root.find(node => node.props['data-testid'] === 'myButton'),\n  ).toBeDefined();\n});\n\ntest('Error State', () => {\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(() =>\n    new Error('Uh-oh'),\n  );\n  const renderer = ReactTestRenderer.create(\n    <MyAwesomeViewRoot environment={environment} />,\n  );\n\n  expect(\n    renderer.root.find(item => (item.props.testID = 'errorMessage')),\n  ).toBeDefined();\n});\n\n\n")))}d.isMDXComponent=!0}}]);