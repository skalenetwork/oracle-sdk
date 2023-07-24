/**
 *
 * @description get the current unix timestamp in milliseconds. Default usage will be the current time
 *
 * @param d Default time of D
 * @returns string version of the current Unix Timestamp in Milliseconds
 *
 * @example
 * const timestamp = getUTCTimestamp(); /// Use the Default Value
 *
 */
export default function getUTCTimestamp(d = new Date()): string {
  const nUtcUnixTimestampWithMilliseconds = d.getTime();
  return "" + nUtcUnixTimestampWithMilliseconds;
}
