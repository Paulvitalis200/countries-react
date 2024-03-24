import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useCountry = (country: string | undefined) => {
  const apiClient = new APIClient(`/name/${country}?fullText=true`);

  const fetchCountry = () => {
    return apiClient.getCountry({});
  };

  return useQuery({
    queryKey: ["country"],
    queryFn: fetchCountry,
    staleTime: 1000, //24h
  });
};

export default useCountry;
