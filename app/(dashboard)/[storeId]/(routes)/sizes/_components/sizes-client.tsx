"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Plus } from "lucide-react";

import { SizeClomun, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface SizesClientProps {
  data: SizeClomun[];
}

export const SizesClient = ({ data }: SizesClientProps) => {
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage Size for you store"
        />
        <Button asChild>
          <Link href={`/${params.storeId}/sizes/new`}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Link>
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
