import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CountryInterface } from "../entities/country";

const apiClient = new APIClient<CountryInterface>("/all");

const useCountries = () => {
  const fetchCountries = () => apiClient.getAll({});
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: 24 * 60 * 60 * 100, //24h
  });
};

export default useCountries;
