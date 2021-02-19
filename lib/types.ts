/**
 * Exported types
 *
 */

export interface RTMClientOptions {
  slackApiUrl?: string;
  autoReconnect?: boolean;
  useRtmConnect?: boolean;
  clientPingTimeout?: number;
  serverPongTimeout?: number;
  replyAckOnReconnectTimeout?: number;
}


export type Events = {


}
