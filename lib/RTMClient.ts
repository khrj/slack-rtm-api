import { TypedEventTarget } from "../deps.ts";
import { RTMClientOptions } from "./types.ts";

type Events = {
  message: string;
};

export class RTMClient extends TypedEventTarget<Events> {
  constructor(token: string, {
    slackApiUrl = "https://slack.com/api/",
    autoReconnect = true,
    useRtmConnect = true,
    clientPingTimeout,
    serverPongTimeout,
    replyAckOnReconnectTimeout = 2000,
  }: RTMClientOptions = {}) {
    super();



  }
}
