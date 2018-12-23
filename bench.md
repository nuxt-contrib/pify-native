## Benchmark results

Tests runned on Macbook Pro 2016 using npx for selecting node version and Travis (Linux).

You can locally run benchmarks using `node bench.js`

### Node 11.x

mac:

```
pify-native@4.0.1

Node: 11.4.0
V8: 7.0.276.38-node.13

non-native x 27,806 ops/sec ±5.15% (69 runs sampled)
native x 15,198 ops/sec ±6.14% (64 runs sampled)
Fastest is non-native
```

travis:

```
pify-native@4.0.1

Node: 11.5.0
V8: 7.0.276.38-node.13

non-native x 36,329 ops/sec ±2.86% (73 runs sampled)
native x 20,920 ops/sec ±1.46% (81 runs sampled)
Fastest is non-native
```

### Node 10.x

mac:

```
pify-native@4.0.0-1

Node: 10.12.0
V8: 6.8.275.32-node.35

non-native x 36,399 ops/sec ±2.08% (74 runs sampled)
native x 20,413 ops/sec ±1.75% (77 runs sampled)
Fastest is non-native
```

travis:

```
pify-native@4.0.0-1

Node: 10.12.0
V8: 6.8.275.32-node.35

non-native x 36,566 ops/sec ±2.79% (71 runs sampled)
native x 21,278 ops/sec ±1.39% (82 runs sampled)
Fastest is non-native
```

### Node 8.x

mac:

```
pify-native@4.0.0-1

Node: 8.12.0
V8: 6.2.414.66

non-native x 34,825 ops/sec ±5.11% (74 runs sampled)
native x 17,637 ops/sec ±2.63% (75 runs sampled)
Fastest is non-native
```

travis:

```
pify-native@4.0.0-1

Node: 8.12.0
V8: 6.2.414.66

non-native x 42,682 ops/sec ±2.13% (85 runs sampled)
native x 19,615 ops/sec ±1.58% (83 runs sampled)
Fastest is non-native
```

### ~~Node 6.x~~

Results are the same because `Util.promisify` is not supported!

mac:

```
pify-native@4.0.0-1

Node: 6.14.4
V8: 5.1.281.111

non-native x 15,682 ops/sec ±5.74% (69 runs sampled)
native x 15,689 ops/sec ±4.98% (70 runs sampled)
Fastest is native,non-native
```

travis:

```
pify-native@4.0.0-1

Node: 6.14.4
V8: 5.1.281.111

non-native x 24,018 ops/sec ±0.41% (85 runs sampled)
native x 23,571 ops/sec ±2.43% (82 runs sampled)
Fastest is non-native,native
```
