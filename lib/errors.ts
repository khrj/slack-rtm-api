export interface CodedError extends Error {
  code: ErrorCode;
}

export enum ErrorCode {
  SendWhileDisconnectedError = "slack_rtmapi_send_while_disconnected_error",
  SendWhileNotReadyError = "slack_rtmapi_send_while_not_ready_error",
  SendMessagePlatformError = "slack_rtmapi_send_message_platform_error",
  WebsocketError = "slack_rtmapi_websocket_error",
  NoReplyReceivedError = "slack_rtmapi_no_reply_received_error",

  // internal errors
  KeepAliveConfigError = "slack_rtmapi_keepalive_config_error",
  KeepAliveClientNotConnected = "slack_rtmapi_keepalive_client_not_connected",
  KeepAliveInconsistentState = "slack_rtmapi_keepalive_inconsistent_state",
}
