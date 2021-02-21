import { LogLevel, TypedEventTarget, WebClient } from "../deps.ts";
import { RTMClientOptions } from "./types.ts";

type Events = {
  message: string;
};

export class RTMClient extends TypedEventTarget<Events> {
  #webClient: WebClient;
  #autoReconnect: boolean;

  /**
   * Whether or not the client is currently connected to the RTM API
   */
  // public connected: boolean = false;

  /**
   * Whether or not the client has authenticated to the RTM API. This occurs when the connect method
   * completes, and a WebSocket URL is available for the client's connection.
   */
  // public authenticated: boolean = false;

  /**
   * The user ID for the connected client.
   */
  public activeUserId?: string;

  /**
   * The team ID for the workspace the client is connected to.
   */
  public activeTeamId?: string;

  /**
   * Internal use web client
   */
  // #webClient: WebClient;

  /**
   * An agent used to manage TCP connections for requests. Most commonly used to implement proxy support. See
   * npm packages `tunnel` and `https-proxy-agent` for information on how to construct a proxy agent.
   */

  /**
   * Whether this client will automatically reconnect when (not manually) disconnected
   */
  // #autoReconnect: boolean;

  /**
   * Use the `rtm.connect` method to connect when true, or the `rtm.start` method when false
   */
  #useRtmConnect: boolean;

  /**
   * The number of milliseconds to wait upon connection for reply messages from the previous connection. The default
   * value is 2 seconds.
   */
  #replyAckOnReconnectTimeout = 2000;

  /**
   * State machine that backs the transition and action behavior
   */
  // #stateMachine: StateMachine<string, string>;

  constructor(token: string, {
    slackApiUrl = "https://slack.com/api/",
    logger = undefined,
    logLevel = LogLevel.INFO,
    retryConfig,
    autoReconnect = true,
    useRtmConnect = true,
    clientPingTimeout,
    serverPongTimeout,
    replyAckOnReconnectTimeout = 2000,
  }: RTMClientOptions = {}) {
    super();
    this.#webClient = new WebClient(token, {
      slackApiUrl,
      logger,
      logLevel,
      retryConfig,
      // tls,
      maxRequestConcurrency: 1,
    });

    this.#autoReconnect = autoReconnect;
    this.#useRtmConnect = useRtmConnect;
    this.#replyAckOnReconnectTimeout = replyAckOnReconnectTimeout;
  }
}
