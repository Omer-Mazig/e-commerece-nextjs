import prismadb from "@/lib/prismadb";
import { SizeFrom } from "./_components/size-form";

export default async function SizePage({
  params,
}: {
  params: { sizeId: string };
}) {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return <SizeFrom initialData={size} />;
}
