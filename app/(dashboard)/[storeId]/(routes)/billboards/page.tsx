import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BillboardClient } from "./_components/billboard-client";
import { BillboardClomun } from "./_components/columns";

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatteedBiilboards: BillboardClomun[] = billboards.map(billboard => ({
    id: billboard.id,
    label: billboard.label,
    createdAt: format(billboard.createdAt, "MMMM do, yyyy"),
  }));

  return <BillboardClient data={formatteedBiilboards} />;
}
