import { getLogger, Logger, LogLevel } from "./logger.ts";
import { TypedEventTarget } from "../deps.ts";
import { Events } from "./types.ts";
import { CodedError, ErrorCode } from "./errors.ts";
import { RTMClient } from "./RTMClient.ts";

export interface KeepAliveOptions {
  logger?: Logger;
  logLevel?: LogLevel;
  /** How long (in ms) to wait before sending a ping message to keep the connection alive */
  clientPingTimeout?: number;
  /** How long (in ms) to wait for the acknowledgement of a ping message before considering the connection dead */
  serverPongTimeout?: number;
}

export class KeepAlive extends TypedEventTarget<Events> {
  #clientPingTimeout: number;
  #serverPongTimeout: number;
  #client?: RTMClient;

  /**
   * Flag that indicates whether this object is still monitoring.
   */
  isMonitoring: boolean;

  /**
   * Flag that indicates whether recommend_reconnect event has been emitted and stop() has not been called.
   */
  recommendReconnect: boolean;

  private static loggerName = "KeepAlive";

  logger: Logger;

  constructor({
    clientPingTimeout = 6000,
    serverPongTimeout = 4000,
    logger = undefined,
    logLevel = LogLevel.INFO,
  }: KeepAliveOptions = {}) {
    super();
    this.#clientPingTimeout = clientPingTimeout;
    this.#serverPongTimeout = serverPongTimeout;

    if (this.#serverPongTimeout >= this.#clientPingTimeout) {
      const error = new Error(
        "Client ping timeout must be less than server pong timeout",
      );
      (error as CodedError).code = ErrorCode.KeepAliveConfigError;
      throw error;
    }

    this.isMonitoring = false;
    this.recommendReconnect = false;
    this.logger = getLogger(KeepAlive.loggerName, logLevel, logger);
  }

  public start(client: RTMClient): void {
    this.logger.debug("start monitoring");

    if (!client.connected) {
      const error = new Error("");
      (error as CodedError).code = ErrorCode.KeepAliveClientNotConnected;
      throw error;
    }

    this.#client = client;
    this.isMonitoring = true;
    // this.#client("outgoing_message", this.setPingTimer, this);
    // this.setPingTimer();
  }
}
