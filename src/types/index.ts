export type form = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export type ActiveCountryData = {
  country: string;
  code: string;
  timezone: string;
  timeStamp: Date | string;
};

export type CountryData = {
  name: string;
  "code-2": string;
  "code-3": string;
  timezone: string;
};
