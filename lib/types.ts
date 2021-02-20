import type { Logger, LogLevel } from "../deps.ts";
import type { RetryOptions } from "./retry-polocies.ts";

export interface RTMClientOptions {
  slackApiUrl?: string;
  autoReconnect?: boolean;
  useRtmConnect?: boolean;
  clientPingTimeout?: number;
  serverPongTimeout?: number;
  replyAckOnReconnectTimeout?: number;
  logger?: Logger;
  logLevel?: LogLevel;
  retryConfig?: RetryOptions;
}
