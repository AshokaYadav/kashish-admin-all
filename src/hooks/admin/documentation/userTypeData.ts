// import { fetchTypeData } from "@/apis/documentation";
import { fetchTypeData } from "@/apis/admin/documentation";
import { useQuery } from "@tanstack/react-query";

export const useTypeData = (type: string) => {
  return useQuery({
    queryKey: ["typesData", type], // unique key based on type
    queryFn: () => fetchTypeData(type), // call only when query runs
    enabled: !!type, // only run when type is not empty/null
  });
};
