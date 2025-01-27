"use client";

import { Button } from "@/app/_components/ui/button";
import { PlusIcon } from "lucide-react";

import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { useState } from "react";
import UpsertProductDialogContent from "./upsert-dialog-content";

const CreateProductButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 rounded-xl">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent setDialogIsOpen={setDialogIsOpen} />
    </Dialog>
  );
};

export default CreateProductButton;
