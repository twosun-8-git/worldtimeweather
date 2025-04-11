export type form = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export type ActiveCountry = {
  country: string;
  code: string;
  timezone: string;
  timeStamp: Date | string;
};

export type ActiveWeather = {
  name: string;
  region: string;
  country: string;
  timezone: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  updated: string;
};

export type CountryData = {
  name: string;
  code2: string;
  code3: string;
  timezone: string;
};
