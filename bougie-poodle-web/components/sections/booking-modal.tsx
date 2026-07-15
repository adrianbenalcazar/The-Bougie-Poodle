"use client";

import { cloneElement, useState, type ReactElement } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BookingFlow } from "@/components/sections/booking-flow";

export function BookingModal({
  trigger,
  defaultService,
}: {
  trigger: ReactElement<{ onClick?: () => void }>;
  defaultService?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {cloneElement(trigger, { onClick: () => setOpen(true) })}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-cream p-6 sm:p-8">
          <DialogTitle className="font-display text-2xl">Book Your Visit</DialogTitle>
          <BookingFlow defaultService={defaultService} />
        </DialogContent>
      </Dialog>
    </>
  );
}
