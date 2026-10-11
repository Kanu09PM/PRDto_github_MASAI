---
name: Calm Urban Transit
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#404946'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#707976'
  outline-variant: '#bfc8c5'
  surface-tint: '#33675e'
  primary: '#002f29'
  on-primary: '#ffffff'
  primary-container: '#0d473f'
  on-primary-container: '#80b5aa'
  inverse-primary: '#9cd1c6'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#002368'
  on-tertiary: '#ffffff'
  tertiary-container: '#003797'
  on-tertiary-container: '#8ba7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b7ede2'
  primary-fixed-dim: '#9cd1c6'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#184f47'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  metric-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.03em
  metric-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system expresses a refined, dependable, and quietly intelligent ethos tailored for intelligent commuter transit and ride-sharing. Moving away from the chaotic, high-stress visual cues of traditional on-demand cab aggregators, this identity embraces serenity, safety, environmental stewardship, and community trust. 

The aesthetic is Modern Tactile Minimalism: ultra-crisp surfaces, generous negative space, purposeful information architecture, and micro-elevation that mimics clean, high-grade physical transit passes. It builds immediate emotional assurance for daily office commuters, verified carpoolers, and smart guest matches who prioritize predictability, personal safety, and seamless route coordination over frantic surge notifications.

## Colors

The palette establishes an atmosphere of grounded confidence, environmental responsibility, and institutional trust:

- **Primary (Forest Teal - `#0D473F`, `#125E53`, `#1B7A6E`):** Represents structural reliability and sustainable shared mobility. Used for primary CTAs, active route strokes, top app bars, and high-emphasis interface headers.
- **Secondary / Success (Mint Emerald - `#10B981`, `#059669`, surface `#D4F3E6`):** Communicates safety, optimal match compatibility, confirmed bookings, and verified identity states.
- **Tertiary / Trust (Mobility Cobalt - `#2563EB`, background `#EFF6FF`):** Reserved strictly for identity transparency, organizational affiliations (corporate work email verification), and security credentials.
- **Partner / External Handoff (Transit Amber - `#FACC15`, `#EAB308`):** Applied exclusively to third-party integration badges, bike-taxi partner fallback options, and real-time handoffs to prevent visual confusion with internal matches.
- **Alert & Notice (Warm Ochre - `#F59E0B`, surface `#FEF3C7`):** Non-punitive caution flags for route detours, pickup window adjustments, and seat capacity limits.
- **Surfaces & Neutrals (`#FBFBF9`, `#FFFFFF`, text `#111827`, muted `#6B7280`, stroke `#E2E8F0`):** Pure white modular cards set against an ultra-soft alabaster canvas, anchored by high-contrast charcoal typography for glanceable outdoor legibility.

## Typography

The type scale relies entirely on Inter for its neutral, highly engineered legibility under varied lighting conditions. 

- **Numerical Hierarchy:** Fares (`₹`), time calculations (`min`, `hr`), and match coefficients (`94%`) utilize tabular numbers (`font-variant-numeric: tabular-nums`) under `metric-lg` and `metric-md` to ensure vertical alignment in list views and comparison panels.
- **Route Tracking & Microcopy:** Micro labels (`label-sm`, 11px) use explicit uppercase tracking for status badges and waypoint markers (e.g., `PICKUP`, `DROPOFF`, `VIA`), avoiding ambiguity during active commutes.
- **Scale Adaptability:** Headline roles scale down proportionately on mobile viewports to prevent awkward wraps of multi-stop addresses and company destination names.

## Layout & Spacing

This design system employs an 8pt spatial grid built around fluid screen boundaries:

- **Mobile (< 640px):** Single-column layout with fixed `1rem` outer canvas padding. Map viewports dominate the visual field with overlayed floating sheets and bottom-anchored action zones.
- **Tablet (640px – 1024px):** 8-column layout with `1.5rem` margins and gutters, splitting live map trajectory and commuter route options into a responsive dual-pane split.
- **Desktop (> 1024px):** 12-column grid capped at a maximum container width of `1280px`, maintaining `2rem` outer page margins.
- **Safe Area Insets:** Sticky actions, drawer handles, and floating filter chips rigidly respect device safe areas (`env(safe-area-inset-bottom)`) with dedicated bottom clearance of at least `space-lg`.

## Elevation & Depth

Visual depth is achieved through layered structural containment rather than exaggerated elevation:

- **Level 0 (Flat / Canvas):** Neutral canvas `#FBFBF9`.
- **Level 1 (Card & Modular Tier):** `#FFFFFF` surfaces bounded by an ultra-crisp hairline stroke (`1px solid #E2E8F0` or `#E5E7EB`) with an ambient micro-shadow (`0 1px 3px rgba(17, 24, 39, 0.04), 0 1px 2px rgba(17, 24, 39, 0.02)`).
- **Level 2 (Interactive Floating Overlays & Bottom Sheets):** Modal drawers, transit search inputs, and filter bars hovering over the map canvas use `0 8px 24px -4px rgba(13, 71, 63, 0.08), 0 4px 8px -2px rgba(17, 24, 39, 0.04)` combined with `backdrop-filter: blur(12px)`.
- **Level 3 (Alerts & Critical Confirmations):** High-priority passenger confirmations and emergency SOS modules utilize `0 16px 32px -8px rgba(17, 24, 39, 0.16)`.

## Shapes

The interface balances friendly human ergonomics with high-density architectural structure:

- **Base Radius (`0.5rem` / `rounded-md`):** Buttons, form inputs, status chips, and tabular data containers.
- **Large Radius (`1rem` / `rounded-lg`):** Commuter match summary cards, driver profile cards, fare breakdown cards, and search container wrappers.
- **Extra Large Radius (`1.5rem` / `rounded-xl`):** Mobile bottom sheet sheets (top edges only), modal dialogues, and ride tracker control centers.
- **Pill (`9999px` / `rounded-full`):** State badges, rider avatars, transit waypoint anchors, and quick-filter toggle pills.

## Components

### Buttons
- **Primary:** Filled `#0D473F` background, white text, `0.5rem` border radius, `0.75rem 1.25rem` padding. Active state transitions to `#125E53`. Focus ring: 2px offset with `#1B7A6E`.
- **Secondary:** Surface `#D4F3E6` with `#0D473F` text for affirmative low-friction choices (e.g., "Accept Route").
- **Tertiary / Ghost:** Transparent surface with `#0D473F` or `#6B7280` text, highlighting utility interactions like "Edit Preferences" or "Cancel".
- **Handoff Action:** Accent yellow `#FACC15` with dark `#111827` text when passing users off to external micro-mobility or partner networks.

### Status Chips & Badges
- **Match Compatibility:** `#D4F3E6` background, `#059669` text, displaying percentage ratings (e.g., `● 92% Route Match`).
- **Identity & Verification:** `#EFF6FF` background, `#2563EB` text, paired with a miniature shield or check icon (e.g., `Verified Work Email`).
- **Carpool Pool State:** `#F5F6F4` neutral container with `#111827` text indicating grouping capacity (e.g., `3/4 Seats Filled`).

### Cards
- **Match Item Card:** Pure white background, `1rem` radius, `1px solid #E2E8F0`, interior padding `1rem`. Houses driver/passenger metadata, departure window, overlap percentage, dynamic fare share (`₹140`), and immediate action trigger.

### Transit Route Visualizers
- **Route Line:** 4px continuous solid path in `#125E53` with pickup point marked by a hollow 10px circular node with a `#10B981` core, and drop-off marked by a solid 10px `#0D473F` squared pill.
- **Walking Leg:** 2px dashed stroke in `#6B7280` indicating walking connection to primary boarding location.

### Input Fields
- **Address & Waypoint Field:** Flat `#F5F6F4` container transitioning to `#FFFFFF` on focus, bordered by `1px solid #E2E8F0` (active: `1.5px solid #0D473F`). Preceded by green and charcoal visual pins representing source and destination.

### Bottom Sheets & Sticky Modals
- **Drawer Panel:** Anchored bottom overlay with `1.5rem` top radius, integrated handle bar (`4px` height, `#E2E8F0`, `32px` width), floating over live map tracking with quick swipe toggles for commuter pool chat, live telemetry, and vehicle details.