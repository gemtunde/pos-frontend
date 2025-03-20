import React from "react";
import TableHeader from "../components/tables/TableHeader";
import TableCard from "../components/tables/TableCard";
import { tables } from "../components/constants";

const Tables = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden mb-8">
      <TableHeader />
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll h-[calc(100vh-10rem)]">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              seat={table.seat}
              initials={table.initial}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tables;
