export interface CountryInterface {
  name: CountryName;
  capital: string[];
  region: string;
  subregion: string;
  flag: string;
  tld: string;
  currencies: { [key: string]: string };
  languages: { [key: string]: string };
}

interface CountryName {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  name: any;
}

interface NativeNameSub {
  official: string;
  common: string;
}
