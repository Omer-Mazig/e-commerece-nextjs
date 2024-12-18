import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { StoreSwitcher } from "./store-switcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Separator } from "./ui/separator";

export const MainHeader = async ({}) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
      {/* <Separator /> */}
      {/* <MainNav className="mx-6 my-4" /> */}
    </header>
  );
};
