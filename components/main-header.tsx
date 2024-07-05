import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";

export const MainHeader = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>this will be a store swithcer</div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
};
