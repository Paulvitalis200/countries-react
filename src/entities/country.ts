export interface CountryInterface {
  name: CountryName;
  capital: string[];
  region: string;
  subregion: string;
  flags: { [key: string]: string };
  tld: string;
  currencies: { [key: string]: string };
  languages: { [key: string]: string };
  population: number;
  fifa: string;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  name: { [key: string]: string };
}
