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
  { name: '24/7 Mortgage', src: '/tenants/247-Logo.png' },
  { name: 'Buildpro ATX', src: '/tenants/buildpro.png' },
  { name: 'Synergy', src: '/tenants/Synergy-Logo-Horizontal-No-Tagline.png' },
  { name: 'Titan Title & Closing', src: '/tenants/titan.png' },
  { name: 'Easy Mortgage with Yara', src: '/tenants/easy-mortgage.png' },
];
