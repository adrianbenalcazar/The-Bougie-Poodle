/**
 * Temporary editorial photography, sourced from Unsplash (free license) and verified live.
 * Swap the `src` values for The Bougie Poodle's own studio photography when available —
 * every image on the site pulls from this single file.
 */

export type Photo = {
  src: string;
  alt: string;
  /** Base64 LQIP shown via next/image's placeholder="blur" while the real file loads. */
  blurDataURL?: string;
};

/** Tiny (16x9) blurred JPEG of the hero photo — swap the file and regenerate if the hero image changes. */
const HERO_HOME_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAACQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACQAQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMACQkJCQkJEAkJEBYQEBAWHhYWFhYeJh4eHh4eJi4mJiYmJiYuLi4uLi4uLjc3Nzc3N0BAQEBASEhISEhISEhISP/bAEMBCwwMEhESHxERH0szKjNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS//dAAQAAf/aAAwDAQACEQMRAD8A9TDCoRLIZmUgbB09TSilNM9Gx//Z";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;
}

export const HERO_IMAGES = {
  home: {
    src: "/images/gallery/16.PNG",
    alt: "A Shiba Inu in a pink shower cap having its teeth brushed with a pink toothbrush against a bubblegum-pink backdrop",
    blurDataURL: HERO_HOME_BLUR_DATA_URL,
  },
  services: {
    src: unsplash("1727510190155-51abda425a82"),
    alt: "A professional groomer carefully blow-drying a dog's coat during a luxury grooming session",
  },
  about: {
    src: unsplash("1513189643435-49f97650b367"),
    alt: "A serene studio portrait of a well-groomed white toy poodle",
  },
  gallery: {
    src: unsplash("1691024305725-a36770cdaab7"),
    alt: "Close-up portrait of a freshly groomed white poodle with a soft, luxurious coat",
  },
  reviews: {
    src: unsplash("1649168917088-2fecda4d5cc2"),
    alt: "A woman in an elegant white dress lovingly holding her white dog",
  },
  contact: {
    src: unsplash("1560132248-d946352460e3"),
    alt: "A well-groomed white long-haired dog sitting elegantly",
  },
  requestService: {
    src: unsplash("1704227170709-5e5ddefcb4f7"),
    alt: "A pristine white poodle standing gracefully outdoors",
  },
} satisfies Record<string, Photo>;

export const STORY_IMAGES: Photo[] = [
  {
    src: unsplash("1727681200723-9513e4e3c394"),
    alt: "A groomer gently blow-drying a client's dog with meticulous care",
  },
  {
    src: unsplash("1780732659746-8c2276f3ddc6"),
    alt: "A tortoiseshell cat being groomed with a soft brush on a plush blanket",
  },
  {
    src: unsplash("1611173622933-91942d394b04"),
    alt: "A small dog wrapped in a warm towel after a luxury spa bath",
  },
];

export const DOG_PORTRAITS: Photo[] = [
  { src: unsplash("1780606768590-72370372ad78"), alt: "White poodle posed on a piano bench" },
  { src: unsplash("1513189643435-49f97650b367"), alt: "Studio portrait of a white toy poodle" },
  { src: unsplash("1691024305725-a36770cdaab7"), alt: "Close-up of a groomed white poodle" },
  { src: unsplash("1657558863280-da75356abe7e"), alt: "White poodle looking upward, freshly groomed" },
  { src: unsplash("1681209919494-9eea82665e0f"), alt: "Small white poodle wearing a finishing bow" },
  { src: unsplash("1629098937081-973871586213"), alt: "White poodle puppy in sharp, elegant focus" },
  { src: unsplash("1597674078228-5ff99c7b3dc8"), alt: "Apricot toy poodle resting on soft white textile" },
  { src: unsplash("1775831553949-2275837142f3"), alt: "Happy corgi sitting on a grassy Westchester hillside" },
  { src: unsplash("1536809188428-e8ecf663d0be"), alt: "Golden retriever with a glossy, healthy coat" },
  { src: unsplash("1768605760786-7b562709af76"), alt: "A scruffy terrier enjoying a sunny garden" },
  { src: unsplash("1590590024926-6eece48bf24e"), alt: "White and brown dog relaxing on a manicured lawn" },
  { src: unsplash("1775018061209-19bbe9cf6c50"), alt: "Corgi resting on a fallen log outdoors" },
];

export const CAT_PORTRAITS: Photo[] = [
  { src: unsplash("1782982973186-295617ad8ad6"), alt: "Brown tabby cat portrait on a clean white background" },
  { src: unsplash("1585545139267-27419834bdd0"), alt: "Elegant brown tabby cat against a soft backdrop" },
  { src: unsplash("1771986927933-9c0be9f056c1"), alt: "A fluffy gray cat held with care" },
  { src: unsplash("1774461138475-9e948f14b638"), alt: "Fluffy Siamese cat with striking blue eyes" },
  { src: unsplash("1624651612316-316a4ddfd483"), alt: "A moody portrait of a black and white cat" },
  { src: unsplash("1780380044502-a2ba2b852fcc"), alt: "Black and white cat with vivid green eyes" },
  { src: unsplash("1779956511290-3c303e375606"), alt: "A fluffy cat relaxing on a warm wooden bench" },
  { src: unsplash("1779956510877-8b3193412f04"), alt: "A serene cat resting in a spa-like wooden setting" },
];

export const PRODUCT_IMAGES: Photo[] = [
  { src: unsplash("1559693555-d143b5b713ed"), alt: "A collection of professional silver grooming shears" },
  { src: unsplash("1635094420131-0337a3e732fc"), alt: "Wooden grooming brushes arranged in a bowl" },
  { src: unsplash("1656921350153-b6389adaad57"), alt: "Close-up of premium grooming tools laid out on a table" },
  { src: unsplash("1631511231050-24f8dba10537"), alt: "A bottle of organic pet grooming shampoo" },
];

export const GALLERY_PAIRS: { before: Photo; after: Photo; label: string }[] = [
  {
    before: { src: unsplash("1597603413826-cd1c06b05222"), alt: "Before: a shaggy, unkempt long-coated dog" },
    after: { src: unsplash("1780606768590-72370372ad78"), alt: "After: the same coat transformed into a polished, luxury finish" },
    label: "Full Groom Transformation",
  },
  {
    before: { src: unsplash("1544568100-847a948585b9"), alt: "Before: a dog with a dull, matted coat" },
    after: { src: unsplash("1536809188428-e8ecf663d0be"), alt: "After: a glossy, healthy coat post-treatment" },
    label: "Deshedding Treatment",
  },
  {
    before: { src: unsplash("1648316465628-f21950bedc4f"), alt: "Before: an overgrown coat in need of shaping" },
    after: { src: unsplash("1691024305725-a36770cdaab7"), alt: "After: precision breed-specific styling" },
    label: "Breed-Specific Haircut",
  },
  {
    before: { src: unsplash("1552248879-2b6b2a23c11a"), alt: "Before: a coat in need of a full spa refresh" },
    after: { src: unsplash("1657558863280-da75356abe7e"), alt: "After: a bright, hydrated, finished coat" },
    label: "Bath & Spa Refresh",
  },
];

export const LIFESTYLE_IMAGES: Photo[] = [
  { src: unsplash("1641034289136-72c246913b9d"), alt: "A woman sharing a tender moment with her white dog at home" },
  { src: unsplash("1737977086600-6b9c392f8b70"), alt: "A woman in a white dress holding her freshly groomed white dog" },
  { src: unsplash("1660748171015-20a03cc34413"), alt: "A pet owner affectionately holding her dog" },
];
