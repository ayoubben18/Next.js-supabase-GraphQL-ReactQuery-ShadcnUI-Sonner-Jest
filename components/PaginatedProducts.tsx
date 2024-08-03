"use client";
import { getPaginatedProducts } from "@/db/data/products-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

const PaginatedProducts = () => {
  const itemsPerPage = useMemo(() => 6, []);
  const { data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getPaginatedProducts(pageParam, itemsPerPage),
      getNextPageParam: (lastPage, pages) =>
        lastPage.length === itemsPerPage ? pages.length + 1 : undefined,
    });
  return (
    <div>
      <h1 className="text-xl">Products :</h1>
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.map((product, index) => (
            <div key={index}>
              <h1>{product.name}</h1>
            </div>
          ))}
        </div>
      ))}
      <Button
        className="flex items-center gap-2"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage || isFetching}
      >
        Show More <PlusCircle size={16} />
      </Button>
    </div>
  );
};

export default PaginatedProducts;
