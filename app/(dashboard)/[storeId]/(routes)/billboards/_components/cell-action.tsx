"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import toast from "react-hot-toast";
import axios from "axios";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

import { BillboardClomun } from "./columns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { AlertModal } from "@/components/modals/alet-modal";

interface CellActionProps {
  data: BillboardClomun;
}

export const CellAction = ({ data }: CellActionProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Id copied to clipboard.");
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
      router.refresh(); // ?
      toast.success("Billboard Deleted!");
    } catch {
      toast.error("Make sure you removed categories using this billboard.");
    } finally {
      setLoading(false);
      setOpenAlertModal(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={openAlertModal}
        loading={loading}
        onConfirm={onDelete}
        onClose={() => setOpenAlertModal(false)}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${params.storeId}/billboards/${data.id}`)
            }
          >
            <Edit className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenAlertModal(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
