interface DigitalAsset {
  id: string;
  title: string;
  slug: string; // write-code
  description: string;
  category: string;
  tags: string[];
  type: 'pdf' | 'image' | 'code';
  price: number;
  previewUrl: string;       // Öffentlich sichtbar (z.B. Wasserzeichen-Bild / Textauszug)
  secureDownloadUrl: string;// Nur nach Kauf zugänglich
  createdAt: string | null;
  authorClerkId: string | null;
  authorEmail: string | null;
}