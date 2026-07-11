type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.6 8.4h1.4V6h-1.8c-1.7 0-2.7 1-2.7 2.6v1.5H9v2.4h1.5V18h2.5v-5.5h1.7l.3-2.4h-2V9c0-.4.2-.6.6-.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 4c.3 1.9 1.6 3.3 3.6 3.6v2.4a6 6 0 0 1-3.6-1.2v6.4a4.8 4.8 0 1 1-4-4.7v2.5a2.3 2.3 0 1 0 1.6 2.2V4h2.4Z"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="currentColor"
      />
    </svg>
  );
}
