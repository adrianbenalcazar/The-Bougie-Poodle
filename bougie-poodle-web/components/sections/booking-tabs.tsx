"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewClientForm } from "@/components/forms/new-client-form";
import { ExistingClientForm } from "@/components/forms/existing-client-form";

export function BookingTabs() {
  return (
    <Tabs defaultValue="new" className="gap-8">
      <TabsList className="flex h-auto w-full flex-wrap items-center justify-center gap-2 rounded-full bg-blush/50 p-1.5">
        <TabsTrigger
          value="new"
          className="min-h-11 flex-none rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap data-active:bg-bougie data-active:text-cream"
        >
          I&apos;m New Here
        </TabsTrigger>
        <TabsTrigger
          value="existing"
          className="min-h-11 flex-none rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap data-active:bg-bougie data-active:text-cream"
        >
          I&apos;m an Existing Client
        </TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <NewClientForm />
      </TabsContent>
      <TabsContent value="existing">
        <ExistingClientForm />
      </TabsContent>
    </Tabs>
  );
}
