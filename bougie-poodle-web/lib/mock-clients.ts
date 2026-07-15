/**
 * Placeholder "existing client" directory so the booking flow's phone-lookup
 * step has something real to demo against. Replace with a real CRM/database
 * lookup (e.g. an API route backed by the studio's client records) before launch.
 */

export type MockClient = {
  phone: string;
  ownerName: string;
  email: string;
  dogName: string;
  breed: string;
};

export const MOCK_CLIENTS: MockClient[] = [
  {
    phone: "9142210048",
    ownerName: "Alexandra Reyes",
    email: "alexandra.reyes@example.com",
    dogName: "Milo",
    breed: "Standard Poodle",
  },
  {
    phone: "9145550187",
    ownerName: "Jonathan Park",
    email: "jonathan.park@example.com",
    dogName: "Coco",
    breed: "Maltese",
  },
  {
    phone: "9145550142",
    ownerName: "Whitney Scott",
    email: "whitney.scott@example.com",
    dogName: "Bear",
    breed: "Bernedoodle",
  },
];

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function findClientByPhone(phone: string): MockClient | undefined {
  const normalized = normalizePhone(phone);
  return MOCK_CLIENTS.find((client) => normalizePhone(client.phone) === normalized);
}
