import { LogLevel, TypedEventTarget, WebClient } from "../deps.ts";
import { RTMClientOptions } from "./types.ts";

type Events = {
  message: string;
};

export class RTMClient extends TypedEventTarget<Events> {
  private webClient: WebClient;

  constructor(token: string, {
    slackApiUrl = "https://slack.com/api/",
    logger = undefined,
    logLevel = LogLevel.INFO,
    // retryConfig,
    autoReconnect = true,
    useRtmConnect = true,
    clientPingTimeout,
    serverPongTimeout,
    replyAckOnReconnectTimeout = 2000,
  }: RTMClientOptions = {}) {
    super();
    this.webClient = new WebClient(token, {
      slackApiUrl,
      logger,
    });
  }
}
