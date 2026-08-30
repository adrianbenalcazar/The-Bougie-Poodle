"use client";

import { useState, useSyncExternalStore } from "react";
import { Download, Lock, LogOut } from "lucide-react";
import { WAITLIST_ADMIN_PASSWORD } from "@/lib/constants";
import { getWaitlistEntries, formatMemberNumber, waitlistEntriesToCsv, type WaitlistEntry } from "@/lib/waitlist";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AUTH_KEY = "bougie-poodle-waitlist-admin-auth";
const AUTH_EVENT = "bougie-poodle-waitlist-admin-auth-change";

function subscribeAuth(callback: () => void) {
  window.addEventListener(AUTH_EVENT, callback);
  return () => window.removeEventListener(AUTH_EVENT, callback);
}
function getAuthSnapshot() {
  return window.sessionStorage.getItem(AUTH_KEY) === "true";
}
function getAuthServerSnapshot() {
  return false;
}

function downloadCsv(entries: WaitlistEntry[]) {
  const csv = waitlistEntriesToCsv(entries);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bougie-poodle-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function WaitlistAdmin() {
  const authed = useSyncExternalStore(subscribeAuth, getAuthSnapshot, getAuthServerSnapshot);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const entries: WaitlistEntry[] = authed ? getWaitlistEntries() : [];

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (password === WAITLIST_ADMIN_PASSWORD) {
      window.sessionStorage.setItem(AUTH_KEY, "true");
      window.dispatchEvent(new Event(AUTH_EVENT));
      setError(false);
    } else {
      setError(true);
    }
  }

  function handleSignOut() {
    window.sessionStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new Event(AUTH_EVENT));
    setPassword("");
  }

  if (!authed) {
    return (
      <div className="mx-auto flex max-w-sm flex-col items-center gap-4 rounded-3xl border border-sand/70 bg-white p-8 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush">
          <Lock className="h-5 w-5 text-heading" strokeWidth={1.6} />
        </div>
        <h1 className="font-display text-xl text-ink">Admin Access</h1>
        <p className="text-sm text-stone">Enter the admin password to view waitlist signups.</p>
        <form onSubmit={handleUnlock} className="w-full space-y-3 text-left" noValidate>
          <div className="space-y-1.5">
            <Label htmlFor="admin-password">Password</Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              autoFocus
            />
            {error && <p className="text-xs text-bougie">Incorrect password.</p>}
          </div>
          <Button type="submit" className="h-11 w-full rounded-full bg-bougie text-cream hover:bg-bougie/90">
            Enter
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl text-ink">Waitlist Signups</h1>
          <p className="mt-1 text-sm text-stone">
            {entries.length} {entries.length === 1 ? "signup" : "signups"} recorded on this device
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-full border-sand"
            onClick={() => downloadCsv(entries)}
            disabled={entries.length === 0}
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="ghost" className="h-10 gap-2 rounded-full" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-[#c9a227]/40 bg-[#fbf3de] p-4 text-sm leading-relaxed text-[#8a6d10]">
        This table only shows signups submitted from <strong>this browser</strong>. Your complete, real-time list
        of every registrant — ready to export for MoeGo — lives in your Formspree dashboard at{" "}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
          formspree.io
        </a>
        .
      </div>

      {entries.length === 0 ? (
        <p className="rounded-2xl border border-sand/70 bg-white p-8 text-center text-sm text-stone">
          No signups recorded on this device yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-sand/70 bg-white">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="border-b border-sand/60 text-xs font-medium uppercase tracking-wide text-stone">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Dog</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Breed / Size</th>
                <th className="px-4 py-3">ZIP</th>
                <th className="px-4 py-3">Preferred Day</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={`${entry.email}-${i}`} className="border-b border-sand/30 last:border-0">
                  <td className="px-4 py-3 font-medium text-heading">{formatMemberNumber(entry.memberNumber)}</td>
                  <td className="px-4 py-3">{entry.ownerName}</td>
                  <td className="px-4 py-3">{entry.dogName}</td>
                  <td className="px-4 py-3">{entry.email}</td>
                  <td className="px-4 py-3">{entry.phone}</td>
                  <td className="px-4 py-3">{entry.breedSize}</td>
                  <td className="px-4 py-3">{entry.zip}</td>
                  <td className="px-4 py-3">{entry.dayPreference}</td>
                  <td className="px-4 py-3 text-stone">{new Date(entry.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
