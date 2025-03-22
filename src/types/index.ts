export type form = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export type localData = {
  country: string;
  code: string;
  timezone: string;
  timeStamp: Date;
};

export type countries = {
  name: string;
  "code-2": string;
  "code-3": string;
  timezone: string;
};
