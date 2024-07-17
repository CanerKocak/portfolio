export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ic-assets.json5","favicon.ico","logo2.svg"]),
	mimeTypes: {".json5":"application/json5",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.a4d6fd41.js","app":"_app/immutable/entry/app.4d0a0355.js","imports":["_app/immutable/entry/start.a4d6fd41.js","_app/immutable/chunks/scheduler.1a799828.js","_app/immutable/chunks/singletons.ed383b51.js","_app/immutable/chunks/index.9c05f43a.js","_app/immutable/entry/app.4d0a0355.js","_app/immutable/chunks/scheduler.1a799828.js","_app/immutable/chunks/index.3d4e9ca0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
