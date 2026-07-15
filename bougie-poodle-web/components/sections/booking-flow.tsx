"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteRequestForm } from "@/components/forms/quote-request-form";
import { ExistingClientLookup } from "@/components/forms/existing-client-lookup";

export function BookingFlow({ defaultService }: { defaultService?: string }) {
  return (
    <Tabs defaultValue="new" className="gap-8">
      <TabsList className="grid h-auto! w-full grid-cols-2 items-stretch gap-2 rounded-full bg-blush/50 p-1.5">
        <TabsTrigger
          value="new"
          className="min-h-11 h-auto! w-full rounded-full px-3 py-2.5 text-center text-sm font-semibold text-balance data-active:bg-bougie data-active:text-white"
        >
          I&apos;m New Here
        </TabsTrigger>
        <TabsTrigger
          value="existing"
          className="min-h-11 h-auto! w-full rounded-full px-3 py-2.5 text-center text-sm font-semibold text-balance data-active:bg-bougie data-active:text-white"
        >
          I&apos;m an Existing Client
        </TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <QuoteRequestForm defaultService={defaultService} />
      </TabsContent>
      <TabsContent value="existing">
        <ExistingClientLookup defaultService={defaultService} />
      </TabsContent>
    </Tabs>
  );
}
