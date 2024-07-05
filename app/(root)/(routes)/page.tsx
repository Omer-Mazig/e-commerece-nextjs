"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

// THIS PAGE IS ONLY FOR TRIGGERING THE MODAL IF NO THERE ARE NO STORES
export default function SetupPage() {
  const isOpen = useStoreModal(state => state.isOpen);
  const onOpen = useStoreModal(state => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
