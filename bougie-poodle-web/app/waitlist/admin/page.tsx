import type { Metadata } from "next";
import { WaitlistAdmin } from "@/components/admin/waitlist-admin";

export const metadata: Metadata = {
  title: "Waitlist Admin",
  robots: { index: false, follow: false },
};

export default function WaitlistAdminPage() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <WaitlistAdmin />
    </section>
  );
}
