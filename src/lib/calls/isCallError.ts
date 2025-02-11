export interface CallError {
  error?: string;
}

export default function isCallError(error: unknown): error is CallError {
  return typeof error === "object" && error !== null && "error" in error;
}
