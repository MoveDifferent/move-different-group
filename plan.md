# Restoration Plan: Revert Home Page to Complex Design

The user wants to revert the Home page to its previous design, which is the detailed, custom-styled version as opposed to the simplified modular version.

## Analysis
- The "previous design" refers to the implementation that includes inline `StatCounter` and `divisions` array, with custom background images and descriptions in the ecosystem cards.
- The "modular" version (which we are reverting from) used the generic `DivisionCards` component which lacks these custom details.
- We have restored `src/pages/Home.tsx` by copying the content from `src/pages/HomePage.tsx` (the older version) and ensuring it is a proper default export.

## File Changes
1. **src/pages/Home.tsx**:
   - Replaced with the complex, finalized design.
   - Includes custom division data and inline sub-components for maximum visual fidelity as requested.

## Verification
- Home page should now show full descriptions and background images for all divisions.
- Stat counters should be working.
- No other pages were modified.