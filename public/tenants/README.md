# Tenant logos

Drop tenant logo files in this folder, then list them in
`src/lib/tenants.ts`.

Guidelines so the row stays clean and logos show in their true colours:

- **Format:** SVG preferred (crisp at any size); PNG with a **transparent
  background** also works. Avoid logos baked onto a white/coloured box.
- **Colour:** full colour — the site does not apply any grayscale/opacity
  filter, so each logo renders exactly as supplied.
- **Trim:** crop tight to the artwork (no big empty margins) so heights line up.
- **Naming:** anything is fine; the current placeholders are `tenant-1…6`.

The files named `tenant-1.svg … tenant-6.svg` here are **placeholders** —
replace them with the real logos (same names) or add new files and update
`src/lib/tenants.ts`.
