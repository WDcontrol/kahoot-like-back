// More content in config.ts
const throwIfNot = <T, K extends keyof T>(obj: Partial<T>, prop: K): T[K] => {
  if (obj[prop] === undefined) {
    throw new Error(`Environment is missing variable ${prop}`);
  } else {
    return obj[prop] as T[K];
  }
};

// Validate that we have our expected ENV variables defined!
["PORT", "MONGO_URI", "CLIENT_URL"].forEach((v) => {
  throwIfNot(process.env, v);
});

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // all decalered as string to avoid undefined
      PORT: string;
      MONGO_URI: string;
      CLIENT_URL: string;
    }
  }
}

export const PORT: number = parseInt(process.env.PORT);
export const MONGO_URI: string = process.env.MONGO_URI;
export const CLIENT_URL: string = process.env.CLIENT_URL;
