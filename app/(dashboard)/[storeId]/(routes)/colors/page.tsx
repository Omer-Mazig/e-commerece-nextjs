import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ColorClomun } from "./_components/columns";
import { ColorsClient } from "./_components/sizes-client";

export default async function ColorsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorClomun[] = colors.map(color => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM do, yyyy"),
  }));

  return <ColorsClient data={formattedColors} />;
}
