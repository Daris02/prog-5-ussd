export {};

declare global {
  namespace NodeJS {
    interface Global {
      log: (message: string) => void;
      logError: (message: string) => void;
      logSuccess: (message: string) => void;
      logInfo: (message: string) => void;
      logWarning: (message: string) => void;
      logDebug: (message: string) => void;
    }
  }

  let log: (message: string) => void;
  let logError: (message: string) => void;
  let logSuccess: (message: string) => void;
  let logInfo: (message: string) => void;
  let logWarning: (message: string) => void;
  let logDebug: (message: string) => void;
}
