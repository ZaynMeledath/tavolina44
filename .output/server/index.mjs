globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"158a-8ppxO1uuKHHliT+Kb5KJwndVH6k\"",
		"mtime": "2026-09-09T18:52:46.636Z",
		"size": 5514,
		"path": "../public/favicon.png"
	},
	"/menu-card-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5062b-3vl1IvZguAhhNvfcpER+UfNmfjA\"",
		"mtime": "2026-09-09T18:52:46.637Z",
		"size": 329259,
		"path": "../public/menu-card-1.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-09T18:52:46.636Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/menu-card-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"4abf7-go1slTIpf61pFcJX/tS01UvSSe8\"",
		"mtime": "2026-09-09T18:52:46.637Z",
		"size": 306167,
		"path": "../public/menu-card-2.jpg"
	},
	"/assets/gmaps-antipasti-carpaccio-Biu6Tn6F.jpg": {
		"type": "image/jpeg",
		"etag": "\"4daf9-HWZJ1flXz0Tp/gfhANbsd9qt9Jw\"",
		"mtime": "2026-09-09T18:52:46.334Z",
		"size": 318201,
		"path": "../public/assets/gmaps-antipasti-carpaccio-Biu6Tn6F.jpg"
	},
	"/assets/gmaps-calamari-wine-CqcXOCUT.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fab8-aUycc/VJ4BoDAeXzRsJFQgdvYtU\"",
		"mtime": "2026-09-09T18:52:46.337Z",
		"size": 326328,
		"path": "../public/assets/gmaps-calamari-wine-CqcXOCUT.jpg"
	},
	"/assets/gmaps-bar-lounge-Dh-Uu7_z.jpg": {
		"type": "image/jpeg",
		"etag": "\"6da82-wi8SOsXwvDeTWtO40GK9Efz7/Yk\"",
		"mtime": "2026-09-09T18:52:46.334Z",
		"size": 449154,
		"path": "../public/assets/gmaps-bar-lounge-Dh-Uu7_z.jpg"
	},
	"/assets/gmaps-cocktails-bar-CU4fBrLM.jpg": {
		"type": "image/jpeg",
		"etag": "\"485cd-5aVoDhNNnmZIn+jBT/Fz9EDYjuQ\"",
		"mtime": "2026-09-09T18:52:46.338Z",
		"size": 296397,
		"path": "../public/assets/gmaps-cocktails-bar-CU4fBrLM.jpg"
	},
	"/assets/gmaps-pizza-artisan-CvatvhEA.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da29-DFUtIgFo39TcY6nCIW+NRwPYxlE\"",
		"mtime": "2026-09-09T18:52:46.338Z",
		"size": 514601,
		"path": "../public/assets/gmaps-pizza-artisan-CvatvhEA.jpg"
	},
	"/assets/gmaps-polpette-BG9ErA1u.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f9f1-RSrIrhTLOkAB/Xqn0HFVySPPEO8\"",
		"mtime": "2026-09-09T18:52:46.339Z",
		"size": 457201,
		"path": "../public/assets/gmaps-polpette-BG9ErA1u.jpg"
	},
	"/assets/index-QBOhMBtD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54fef-NoSjmETSOL9JDBlcTLx2viJmYkQ\"",
		"mtime": "2026-09-09T18:52:46.333Z",
		"size": 348143,
		"path": "../public/assets/index-QBOhMBtD.js"
	},
	"/assets/routes-CO7tAzAI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17423-OcpEI93eDdjWIPrDQfIilT/FFNI\"",
		"mtime": "2026-09-09T18:52:46.333Z",
		"size": 95267,
		"path": "../public/assets/routes-CO7tAzAI.js"
	},
	"/assets/styles-BfvbuLgc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1aed9-H6DOFwCuwKKIaW92Y9iHNrUeKM4\"",
		"mtime": "2026-09-09T18:52:46.343Z",
		"size": 110297,
		"path": "../public/assets/styles-BfvbuLgc.css"
	},
	"/assets/pizza-hF9odjuO.jpg": {
		"type": "image/jpeg",
		"etag": "\"275e0-Z8b3aH470eY2oRXFVc3vZT7SJhc\"",
		"mtime": "2026-09-09T18:52:46.340Z",
		"size": 161248,
		"path": "../public/assets/pizza-hF9odjuO.jpg"
	},
	"/assets/steak-BBjTSFBb.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b907-61/aKT8Xp0pNqElUgzf6ly8HM1E\"",
		"mtime": "2026-09-09T18:52:46.341Z",
		"size": 178439,
		"path": "../public/assets/steak-BBjTSFBb.jpg"
	},
	"/assets/branzino-8b4bDtx-.jpg": {
		"type": "image/jpeg",
		"etag": "\"d1f21-a9chs2aCAbJWafC3O3a1ol/cvj4\"",
		"mtime": "2026-09-09T18:52:46.333Z",
		"size": 859937,
		"path": "../public/assets/branzino-8b4bDtx-.jpg"
	},
	"/assets/gmaps-cocktail-coupe-tMUoo3YU.jpg": {
		"type": "image/jpeg",
		"etag": "\"826a7-n3OvpJoclpjez8/pnVbB4G4DQWs\"",
		"mtime": "2026-09-09T18:52:46.338Z",
		"size": 534183,
		"path": "../public/assets/gmaps-cocktail-coupe-tMUoo3YU.jpg"
	},
	"/assets/gmaps-bar-spirits-BWystseY.jpg": {
		"type": "image/jpeg",
		"etag": "\"81298-X7gDpC6IPBbfOggcPkCeZ2RruMw\"",
		"mtime": "2026-09-09T18:52:46.337Z",
		"size": 529048,
		"path": "../public/assets/gmaps-bar-spirits-BWystseY.jpg"
	},
	"/assets/gmaps-dining-room-C2P8_bgs.jpg": {
		"type": "image/jpeg",
		"etag": "\"81835-6fsxe9bxcux6u9827H/t0j/dluA\"",
		"mtime": "2026-09-09T18:52:46.338Z",
		"size": 530485,
		"path": "../public/assets/gmaps-dining-room-C2P8_bgs.jpg"
	},
	"/assets/gmaps-tiramisu-DUYOMd6H.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fe47-Arni3KWkt1KJf8H8U5cbtgBPDz0\"",
		"mtime": "2026-09-09T18:52:46.339Z",
		"size": 327239,
		"path": "../public/assets/gmaps-tiramisu-DUYOMd6H.jpg"
	},
	"/assets/burrata-BxYJhu57.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0a81-Zxgq/GxDJD/PXnXuDocEXf74e84\"",
		"mtime": "2026-09-09T18:52:46.334Z",
		"size": 789121,
		"path": "../public/assets/burrata-BxYJhu57.jpg"
	},
	"/assets/ingredients-Bg-4H3iW.jpg": {
		"type": "image/jpeg",
		"etag": "\"dcec2-eeAKGddmY3ObwQdEsoyMJBzlkXU\"",
		"mtime": "2026-09-09T18:52:46.340Z",
		"size": 904898,
		"path": "../public/assets/ingredients-Bg-4H3iW.jpg"
	},
	"/assets/hero-luxury-xxLx8ejU.jpg": {
		"type": "image/jpeg",
		"etag": "\"b1ce4-WdnODDQ7/Wuo1IckaHhEyzGCsm4\"",
		"mtime": "2026-09-09T18:52:46.340Z",
		"size": 728292,
		"path": "../public/assets/hero-luxury-xxLx8ejU.jpg"
	},
	"/assets/tavolina44-DNFwVASZ.png": {
		"type": "image/png",
		"etag": "\"e3dfe-JCATeTcxK6EMEnTAaDAA7Zq+S3A\"",
		"mtime": "2026-09-09T18:52:46.343Z",
		"size": 933374,
		"path": "../public/assets/tavolina44-DNFwVASZ.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Ut3js3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Ut3js3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
