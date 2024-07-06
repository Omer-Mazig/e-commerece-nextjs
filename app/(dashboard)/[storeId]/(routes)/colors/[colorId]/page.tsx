import prismadb from "@/lib/prismadb";
import { ColorForm } from "./_components/color-form";

export default async function ColorPage({
  params,
}: {
  params: { colorId: string };
}) {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return <ColorForm initialData={color} />;
}
