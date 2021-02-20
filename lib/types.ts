/**
 * Exported types
 *
 */
import type { Logger, LogLevel } from "../deps.ts";

export interface RTMClientOptions {
  slackApiUrl?: string;
  autoReconnect?: boolean;
  useRtmConnect?: boolean;
  clientPingTimeout?: number;
  serverPongTimeout?: number;
  replyAckOnReconnectTimeout?: number;
  logger?: Logger;
  logLevel?: LogLevel;
}
