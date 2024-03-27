import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useCountryQueryStore from "../stores/countrystore";

const useCountries = () => {
  const countryQuery = useCountryQueryStore((s) => s.countryQuery);
  const fetchCountries = () => {
    let apiClient;
    if (countryQuery.region) {
      apiClient = new APIClient(`/region/${countryQuery.region}`);
    } else if (countryQuery.country) {
      apiClient = new APIClient(`/name/${countryQuery.country}?fullText=true`);
    } else {
      apiClient = new APIClient("/all");
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
