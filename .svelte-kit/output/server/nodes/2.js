

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.359eeb7c.js","_app/immutable/chunks/scheduler.1a799828.js","_app/immutable/chunks/index.3d4e9ca0.js","_app/immutable/chunks/index.9c05f43a.js"];
export const stylesheets = ["_app/immutable/assets/2.602fde4e.css"];
export const fonts = [];
