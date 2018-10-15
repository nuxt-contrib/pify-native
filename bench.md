## Benchmark results

Tests runned on Macbook Pro 2016 using npx for selecting node version.

You can locally run benchmarks using `node bench.js`

### Node 10.x

```
pify-native@4.0.0-1

Node: 10.12.0
V8: 6.8.275.32-node.35

native x 14,541 ops/sec ±5.45% (68 runs sampled)
non-native x 25,593 ops/sec ±3.00% (66 runs sampled)
Fastest is non-native
```


### Node 8.x

```
pify-native@4.0.0-1

Node: 8.12.0
V8: 6.2.414.66

native x 16,015 ops/sec ±2.80% (72 runs sampled)
non-native x 26,415 ops/sec ±4.86% (73 runs sampled)
Fastest is non-native
```

### Node 6.x

Results are the same because `Util.promisify` is not supported!

```
pify-native@4.0.0-1

Node: 6.14.4
V8: 5.1.281.111

native x 17,436 ops/sec ±1.88% (71 runs sampled)
non-native x 17,843 ops/sec ±1.55% (75 runs sampled)
Fastest is non-native,native
```
