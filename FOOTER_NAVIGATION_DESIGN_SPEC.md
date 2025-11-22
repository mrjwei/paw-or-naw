# Mobile Footer Navigation Bar - Design Specification
## Paw or Naw - Pet Dating App

---

## Overview
A playful, friendly mobile footer navigation bar with 5 icons featuring a prominent center action button. Designed for a pet-dating app with a light, approachable aesthetic.

---

## Layout Structure

### Container Specifications
- **Height**: 80px (excluding safe area)
- **Background**: `#FFFFFF` (Pure White)
- **Top Border**: 1px solid `#F0F0F0` (Subtle separator)
- **Shadow**: `0px -2px 8px rgba(0, 0, 0, 0.04)` (Soft upward shadow)
- **Safe Area Bottom**: Add 20px padding for iOS home indicator
- **Border Radius (Top)**: 20px (Rounded top corners for modern feel)

---

## Icon Layout (Left to Right)

### Spacing System
- **Total Icons**: 5
- **Container Width**: 100% of screen
- **Horizontal Padding**: 16px (left & right)
- **Icon Distribution**: Evenly spaced using flexbox (`justify-content: space-around`)
- **Icon Container Width**: Each icon gets equal flex space
- **Vertical Alignment**: All icons centered except "Talk" button (raised)

---

## 1. Home Icon (Position 1 - Leftmost)

### Visual Design
- **Icon Style**: Simple house outline
- **Size**: 24x24px
- **Stroke Width**: 2px
- **Corner Style**: Rounded line caps
- **Active State Color**: `#FF6B6B` (Coral Red - playful and warm)
- **Inactive State Color**: `#9CA3AF` (Neutral Gray)
- **Active State**: Filled version of icon with color change
- **Tap Target**: 44x44px (iOS HIG compliant)

### States
- **Default**: Outline only, gray
- **Active**: Filled solid, coral red
- **Pressed**: Scale down to 95% with 100ms transition

### Label
- **Text**: "Home"
- **Font Size**: 10px
- **Font Weight**: 500 (Medium)
- **Color**: Matches icon state
- **Margin Top**: 4px
- **Font Family**: SF Pro (iOS) / Roboto (Android)

---

## 2. Heart Icon (Position 2)

### Visual Design
- **Icon Style**: Heart outline (rounded, friendly shape)
- **Size**: 24x24px
- **Stroke Width**: 2px
- **Corner Style**: Rounded line caps
- **Active State Color**: `#EC4899` (Pink - represents love/likes)
- **Inactive State Color**: `#9CA3AF` (Neutral Gray)
- **Active State**: Filled heart with gentle pulse animation
- **Tap Target**: 44x44px

### States
- **Default**: Outline only, gray
- **Active**: Filled solid, bright pink
- **Pressed**: Scale down to 95% with 100ms transition
- **Badge**: Red dot (8px diameter) on top-right for new likes

### Label
- **Text**: "Likes"
- **Font Size**: 10px
- **Font Weight**: 500 (Medium)
- **Color**: Matches icon state
- **Margin Top**: 4px

---

## 3. "Talk" Button (Position 3 - CENTER) ⭐

### Visual Design - PRIMARY ACTION
- **Shape**: Circle
- **Size**: 64x64px (significantly larger than other icons)
- **Position**: Raised 16px above footer baseline
- **Background**: Linear gradient
  - Start: `#FFB347` (Warm Orange)
  - End: `#FF8C42` (Deeper Orange)
  - Direction: 135deg (diagonal)
- **Shadow**: `0px 4px 12px rgba(255, 140, 66, 0.35)` (Warm glow)
- **Border**: 4px solid `#FFFFFF` (Creates separation from background)
- **Icon**: Speech bubble or chat icon
  - Color: `#FFFFFF` (White)
  - Size: 28x28px
  - Stroke Width: 2.5px (slightly thicker for visibility)
- **Tap Target**: 64x64px (entire circle)

### States
- **Default**: Gradient background, white icon
- **Pressed**: 
  - Scale down to 92%
  - Shadow: `0px 2px 8px rgba(255, 140, 66, 0.4)`
  - Transition: 150ms ease-out
- **Disabled**: 
  - Opacity: 50%
  - Grayscale filter

### Label
- **Text**: "Talk"
- **Font Size**: 11px (slightly larger)
- **Font Weight**: 600 (Semi-bold)
- **Color**: `#FF8C42` (Matches gradient end color)
- **Margin Top**: 8px (more space due to raised button)
- **Position**: Below the raised circle

### Animation
- **On Appear**: Gentle bounce animation (300ms)
- **Micro-interaction**: Subtle float animation (2s loop, ±2px vertical movement)

---

## 4. Paw Icon (Position 4)

### Visual Design
- **Icon Style**: Simple paw print outline (1 pad + 4 toes)
- **Size**: 24x24px
- **Stroke Width**: 2px
- **Corner Style**: Rounded line caps
- **Active State Color**: `#8B5CF6` (Purple - playful and friendly)
- **Inactive State Color**: `#9CA3AF` (Neutral Gray)
- **Active State**: Filled paw with color change
- **Tap Target**: 44x44px

### States
- **Default**: Outline only, gray
- **Active**: Filled solid, purple
- **Pressed**: Scale down to 95% with 100ms transition
- **Badge**: Red dot (8px diameter) on top-right for new matches

### Label
- **Text**: "Matches"
- **Font Size**: 10px
- **Font Weight**: 500 (Medium)
- **Color**: Matches icon state
- **Margin Top**: 4px

---

## 5. Profile Icon (Position 5 - Rightmost)

### Visual Design
- **Icon Style**: Circular pet/user silhouette outline
- **Size**: 24x24px
- **Stroke Width**: 2px
- **Corner Style**: Rounded line caps
- **Active State Color**: `#10B981` (Emerald Green - fresh and trustworthy)
- **Inactive State Color**: `#9CA3AF` (Neutral Gray)
- **Active State**: Filled circle with pet silhouette
- **Tap Target**: 44x44px

### States
- **Default**: Outline only, gray
- **Active**: Filled solid, emerald green
- **Pressed**: Scale down to 95% with 100ms transition
- **Badge**: Red dot (8px diameter) on top-right for profile updates

### Label
- **Text**: "Profile"
- **Font Size**: 10px
- **Font Weight**: 500 (Medium)
- **Color**: Matches icon state
- **Margin Top**: 4px

---

## Color Palette Summary

### Primary Colors
- **Talk Button Gradient**: `#FFB347` → `#FF8C42`
- **Home Active**: `#FF6B6B` (Coral Red)
- **Likes Active**: `#EC4899` (Pink)
- **Matches Active**: `#8B5CF6` (Purple)
- **Profile Active**: `#10B981` (Emerald Green)

### Neutral Colors
- **Inactive Icons**: `#9CA3AF` (Gray 400)
- **Background**: `#FFFFFF` (White)
- **Border/Separator**: `#F0F0F0` (Gray 100)

### Notification Badge
- **Background**: `#EF4444` (Red 500)
- **Size**: 8px diameter
- **Position**: Top-right corner of icon (offset 4px)

---

## Responsive Behavior

### Small Screens (< 375px width)
- Reduce horizontal padding to 12px
- Keep icon sizes consistent
- Talk button remains 64x64px

### Large Screens (> 428px width)
- Maximum container width: 428px (centered)
- Maintain spacing ratios

---

## Accessibility

### Touch Targets
- Minimum: 44x44px (iOS) / 48x48dp (Android)
- All icons meet minimum requirements

### Contrast Ratios
- Active icons on white: All pass WCAG AA (4.5:1+)
- Labels: Pass WCAG AA at 10px size

### Semantic Labels
- Each icon has aria-label
- Active state communicated to screen readers
- Badge counts announced

---

## Animation Specifications

### Page Transitions
- Duration: 200ms
- Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Property: Icon color and fill

### Talk Button
- Entrance: Bounce animation (scale 0.8 → 1.1 → 1.0) over 300ms
- Hover/Press: Scale to 0.92 over 150ms
- Idle: Float ±2px over 2000ms infinite loop

### Icon Press Feedback
- Scale: 0.95
- Duration: 100ms
- Easing: ease-out

---

## Technical Implementation Notes

### React Component Structure
```
<FooterNav>
  <NavItem icon="home" label="Home" />
  <NavItem icon="heart" label="Likes" badge={count} />
  <CenterButton icon="chat" label="Talk" />
  <NavItem icon="paw" label="Matches" badge={count} />
  <NavItem icon="profile" label="Profile" />
</FooterNav>
```

### CSS Framework Compatibility
- Tailwind CSS ready
- Supports CSS-in-JS (styled-components, emotion)
- Vanilla CSS compatible

---

## Design Files Export Specs

### Figma
- Frame: 390x80px (iPhone 14 Pro width)
- Components: Create variants for each icon state
- Auto-layout: Horizontal, space-around
- Constraints: Left & right (icons), Center (Talk button)

### Export Assets
- SVG format for icons (24x24px artboard)
- Talk button: 64x64px artboard
- 1x, 2x, 3x for raster fallbacks
- Naming: `icon-{name}-{state}.svg`

---

## Design Rationale

### Why This Works for Pet Dating
1. **Playful Colors**: Warm, friendly palette (orange, pink, purple) evokes joy
2. **Clear Hierarchy**: Raised center button = primary action (chat/match)
3. **Familiar Patterns**: Similar to popular dating apps but pet-themed
4. **Paw Icon**: Instant pet association, unique to pet apps
5. **Soft Edges**: Rounded corners throughout for approachable feel
6. **White Space**: Clean, uncluttered = premium feel
7. **Micro-interactions**: Delightful feedback enhances engagement

---

## Final Checklist for Designer

- [ ] All icons are 24x24px (except Talk: 64x64px)
- [ ] Talk button is raised 16px above baseline
- [ ] Icons are evenly spaced with `space-around`
- [ ] All tap targets are minimum 44x44px
- [ ] Colors match specification exactly
- [ ] Border radius on footer top is 20px
- [ ] White 4px border around Talk button
- [ ] Shadow specifications applied correctly
- [ ] Labels are 10px (11px for Talk), weight 500/600
- [ ] All 5 icons in correct order: Home, Heart, Talk, Paw, Profile
- [ ] Active states use fill with specified colors
- [ ] Inactive states use gray outline
- [ ] Badge positioning on top-right (when applicable)

---

**Version**: 1.0  
**Last Updated**: November 22, 2025  
**Designer**: Ready for implementation  
**Status**: ✅ Final Specification
