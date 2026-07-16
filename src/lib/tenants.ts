export interface Tenant {
  /** Company name — used for the image alt text. */
  name: string;
  /** Path to the logo in /public (e.g. "/tenants/acme.svg"). */
  src: string;
}

/**
 * Tenant logos shown in the "Our Tenants" row.
 * Replace the placeholders in /public/tenants with the real logos and edit
 * this list (see /public/tenants/README.md).
 */
export const tenants: Tenant[] = [
  { name: 'Northgate', src: '/tenants/tenant-1.svg' },
  { name: 'Vertex', src: '/tenants/tenant-2.svg' },
  { name: 'Lumen', src: '/tenants/tenant-3.svg' },
  { name: 'Cedar & Co', src: '/tenants/tenant-4.svg' },
  { name: 'Atlas', src: '/tenants/tenant-5.svg' },
  { name: 'Brightpath', src: '/tenants/tenant-6.svg' },
];
