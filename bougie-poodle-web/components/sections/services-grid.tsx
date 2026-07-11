import type { Service } from "@/lib/constants";
import { ServiceCard } from "@/components/sections/service-card";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}
