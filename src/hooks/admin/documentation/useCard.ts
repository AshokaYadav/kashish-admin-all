"use client";

import { fetchCardsApi } from "@/apis/admin/documentation";
// import { fetchCardsApi } from "@/apis/documentation";
// import { fetchCardsApi } from "@/apis/cardsApi";
import { useQuery } from "@tanstack/react-query";


export const useCards = () => {
  return useQuery({
    queryKey: ["cards"],  // cache key
    queryFn: fetchCardsApi,
  });
};
