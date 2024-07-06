"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Plus } from "lucide-react";

import { BillboardClomun, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: BillboardClomun[];
}

export const BillboardClient = ({ data }: BillboardClientProps) => {
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for you store"
        />
        <Button asChild>
          <Link href={`/${params.storeId}/billboards/new`}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Link>
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
};
