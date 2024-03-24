import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CountryInterface } from "../entities/country";
import useCountryQueryStore from "../stores/countrystore";

const useCountries = () => {
  const countryQuery = useCountryQueryStore((s) => s.countryQuery);
  const fetchCountries = () => {
    let apiClient = new APIClient<CountryInterface>("/all");
    if (countryQuery.region) {
      apiClient = new APIClient<CountryInterface>(
        `/region/${countryQuery.region}`
      );
    } else if (countryQuery.country) {
      apiClient = new APIClient<CountryInterface>(
        `/name/${countryQuery.country}?fullText=true`
      );
    } else {
      apiClient = new APIClient<CountryInterface>("/all");
    }
    return apiClient.getAll({});
  };

  return useQuery({
    queryKey: ["countries", countryQuery],
    queryFn: fetchCountries,
    staleTime: 24 * 60 * 60 * 100, //24h
  });
};

export default useCountries;
