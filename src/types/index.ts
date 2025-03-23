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
  code2: string;
  code3: string;
  timezone: string;
};
