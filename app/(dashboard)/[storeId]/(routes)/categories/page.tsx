import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoryClient } from "./_components/category-client";
import { CategoryClomun } from "./_components/columns";

export default async function CategoriesPage({
  params,
}: {
  params: { storeId: string };
}) {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatteedCategories: CategoryClomun[] = categories.map(category => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(category.createdAt, "MMMM do, yyyy"),
  }));

  return <CategoryClient data={formatteedCategories} />;
}
