import { create } from "zustand";

interface CountryQuery {
  region?: string;
  country?: string;
}

interface CountryQueryStore {
  countryQuery: CountryQuery;
  setRegion: (region: string) => void;
  setCountry: (country: string) => void;
}

const useCountryQueryStore = create<CountryQueryStore>((set) => ({
  countryQuery: {},
  setRegion: (region) => set(() => ({ countryQuery: { region } })),
  setCountry: (country) => set(() => ({ countryQuery: { country } })),
}));

export default useCountryQueryStore;
