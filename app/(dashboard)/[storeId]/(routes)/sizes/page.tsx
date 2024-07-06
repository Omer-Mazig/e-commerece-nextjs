import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { SizesClient } from "./_components/sizes-client";
import { SizeClomun } from "./_components/columns";

export default async function SizesPage({
  params,
}: {
  params: { storeId: string };
}) {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeClomun[] = sizes.map(size => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "MMMM do, yyyy"),
  }));

  return <SizesClient data={formattedSizes} />;
}
