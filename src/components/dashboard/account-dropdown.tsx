import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Gem, Settings, User2 } from "lucide-react";
import Image from "next/image";
import { ExtendedUser } from "../../../next-auth";
import LogoutPopup from "./logout-popup";

interface UserInfoProps {
  user?: ExtendedUser;
}

const AccountDropdown = ({ user }: UserInfoProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center md:gap-4 w-full bg-transparent rounded-lg py-1 cursor-pointer outline-none ring-0">
          {user?.image ? (
            <div className="relative h-10 md:h-10 aspect-square">
              <Image
                fill
                src={user?.image}
                className=" rounded-full"
                alt="Profile picture"
              />
            </div>
          ) : (
            <div className=" h-10 md:h-10 aspect-square rounded-full bg-white/15 inline-flex items-center justify-center">
              <span className="text-white">{user?.name?.charAt(0)}</span>
            </div>
          )}

          <div className=" hidden md:block">
            <div className="flex flex-col items-start">
              <h4 className=" max-w-[18ch] truncate text-sm">{user?.name}</h4>
              <p className="text-white/70 text-sm">Free Tier</p>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" ml-9">
        <DropdownMenuItem>
          <User2 className="mr-3" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Gem className="mr-3" />
          Manage Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-3" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutPopup />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
