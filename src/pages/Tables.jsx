import React from "react";
import TableHeader from "../components/tables/TableHeader";
import TableCard from "../components/tables/TableCard";
import { tables } from "../components/constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";

const Tables = () => {
  const {
    data: resData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData,
  });
  if (isError) {
    enqueueSnackbar("something went wrong", { variant: "error" });
  }
  console.log(resData);
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden mb-8">
      <TableHeader />
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll h-[calc(100vh-10rem)]">
        {resData?.data.data.map((table) => {
          return (
            <TableCard
              name={table.tableNo}
              status={table.status}
              seat={table.seats}
              initials={table?.currentOrder?.customerDetails.name}
              id={table._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tables;
