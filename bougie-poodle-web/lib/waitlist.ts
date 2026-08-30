import type { WaitlistValues } from "@/lib/validations";

export type WaitlistEntry = WaitlistValues & {
  memberNumber: number;
  submittedAt: string;
};

const ENTRIES_KEY = "bougie-poodle-waitlist-entries";
const COUNTER_KEY = "bougie-poodle-waitlist-counter";

/**
 * The site has no backend, so this counter is local to each visitor's browser —
 * it powers the "No. 00X" shown on the confirmation screen, not a true global
 * count. Sort the real Formspree submissions by timestamp to get the actual
 * founding-member order before reaching out to clients.
 */
function nextMemberNumber(): number {
  const current = Number(window.localStorage.getItem(COUNTER_KEY) ?? "0");
  const next = current + 1;
  window.localStorage.setItem(COUNTER_KEY, String(next));
  return next;
}

export function recordWaitlistEntry(values: WaitlistValues): WaitlistEntry {
  const entry: WaitlistEntry = {
    ...values,
    memberNumber: nextMemberNumber(),
    submittedAt: new Date().toISOString(),
  };
  const existing = getWaitlistEntries();
  existing.push(entry);
  window.localStorage.setItem(ENTRIES_KEY, JSON.stringify(existing));
  return entry;
}

export function getWaitlistEntries(): WaitlistEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ENTRIES_KEY);
    return raw ? (JSON.parse(raw) as WaitlistEntry[]) : [];
  } catch {
    return [];
  }
}

export function formatMemberNumber(n: number): string {
  return `No. ${String(n).padStart(3, "0")}`;
}

export function waitlistEntriesToCsv(entries: WaitlistEntry[]): string {
  const headers = [
    "Member #",
    "Owner Name",
    "Dog Name",
    "Email",
    "Phone",
    "Breed / Size",
    "ZIP Code",
    "Day Preference",
    "Submitted At",
  ];
  const rows = entries.map((e) => [
    formatMemberNumber(e.memberNumber),
    e.ownerName,
    e.dogName,
    e.email,
    e.phone,
    e.breedSize,
    e.zip,
    e.dayPreference,
    e.submittedAt,
  ]);
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  return [headers, ...rows].map((row) => row.map(escape).join(",")).join("\n");
}
