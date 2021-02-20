import { ConsoleLogger, Logger, LogLevel } from "../deps.ts";

let instanceCount = 0;

// This helps to create names logger
export function getLogger(
  name: string,
  level: LogLevel,
  existingLogger?: Logger,
): Logger {
  const instanceId = instanceCount;

  instanceCount += 1;

  const logger: Logger = (() => {
    if (existingLogger != undefined) return existingLogger;
    return new ConsoleLogger();
  })();

  logger.setName(`rtm-api:${name}:${instanceId}`);

  if (level != undefined) {
    logger.setLevel(level);
  }

  return logger;
}
