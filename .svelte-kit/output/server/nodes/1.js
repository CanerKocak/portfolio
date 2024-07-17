

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.50678223.js","_app/immutable/chunks/scheduler.1a799828.js","_app/immutable/chunks/index.3d4e9ca0.js","_app/immutable/chunks/singletons.ed383b51.js","_app/immutable/chunks/index.9c05f43a.js"];
export const stylesheets = [];
export const fonts = [];
