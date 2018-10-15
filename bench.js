const Benchmark = require('benchmark');
const pkg = require('./package.json');

console.log(pkg.name + '@' + pkg.version);
console.log();
console.log('Node: ' + process.versions.node);
console.log('V8: ' + process.versions.v8);
console.log();

const pify = require('.');

const suite = new Benchmark.Suite('pify');

const cases = [
	cb => cb(),
	cb => cb(new Error()),
	cb => cb(null, JSON.stringify({val: Math.random()})),
	cb => setImmediate(() => cb(null, Math.random()))
];

const nativeCases = () => cases.map(c => pify(c, {native: true}));
const nonNativeCases = () => cases.map(c => pify(c, {native: false}));

const createDifferedTest = cases => {
	return {
		defer: true,
    fn(deferred) {
			Promise
        .all(cases().map(c => c().catch(error => error)))
				.then(() => deferred.resolve());
		}
	};
};

suite
	.add('non-native', createDifferedTest(nonNativeCases))
	.add('native', createDifferedTest(nativeCases))
	.on('cycle', event => console.log(String(event.target)))
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	.run();
