import type { H3Event } from "h3";
import type { RenderResponse } from "./renderer";

export type { NitroApp } from "./app";
export type {
  CacheEntry,
  CacheOptions,
  ResponseCacheEntry,
  CachedEventHandlerOptions,
} from "./cache";
export type { NitroAppPlugin } from "./plugin";
export type { RenderResponse, RenderHandler } from "./renderer";

export interface NitroRuntimeHooks {
  "render:response": (
    response: Partial<RenderResponse>,
    context: { event: H3Event }
  ) => void;
  close: () => void;
}
