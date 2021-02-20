import { InputOptions } from "../deps.ts";

//deno-lint-ignore no-empty-interface
export interface RetryOptions extends InputOptions {}

export const tenRetriesInAboutThirtyMinutes: RetryOptions = {
  retries: 10,
  factor: 1.96821,
  randomize: true,
};

export const fiveRetriesInFiveMinutes: RetryOptions = {
  retries: 5,
  factor: 3.86,
};

export const rapidRetryPolicy: RetryOptions = {
  minTimeout: 0,
  maxTimeout: 1,
};

const policies = {
  tenRetriesInAboutThirtyMinutes,
  fiveRetriesInFiveMinutes,
  rapidRetryPolicy,
};

export default policies;
