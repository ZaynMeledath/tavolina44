Continue working on the **existing Tavolina 44 website**.

The previous model left the website with **poor alignment, inconsistent spacing, weak visual hierarchy, and almost no meaningful animations**. Your job is to carefully fix these issues and elevate the website to a genuinely **premium Italian-American restaurant experience**.

Do NOT start by blindly rewriting the entire application. First inspect the existing implementation and understand the current structure, components, assets, and styling. Then make targeted improvements while preserving functionality that already works.

---

# 1. LOGO

Use the uploaded:

**`tavolina44.png`**

as the official Tavolina 44 logo.

Do NOT recreate the logo using text.

Do NOT substitute it with another logo.

Use the actual image asset throughout the website wherever the brand logo is required.

Make sure the logo:

* Maintains its original proportions
* Is never stretched
* Has appropriate sizing at desktop and mobile
* Has sufficient breathing room
* Looks crisp
* Works correctly on both light and dark backgrounds

If necessary, create an appropriate subtle treatment behind the logo so it remains clearly visible.

---

# 2. FIX THE ALIGNMENT FIRST

This is a high priority.

Before adding new visual effects, audit the entire website for alignment problems.

Fix:

* Inconsistent section widths
* Misaligned headings
* Uneven margins
* Incorrect padding
* Inconsistent vertical rhythm
* Elements not sharing the same content grid
* Images that don't align properly
* Buttons that appear randomly positioned
* Text that is too close to edges
* Inconsistent spacing between sections
* Mobile overflow
* Elements overlapping incorrectly
* Incorrect responsive behavior

Create a consistent layout system.

Use a central max-width container for normal content.

Large editorial sections can intentionally break outside the container, but this should be deliberate.

Maintain consistent:

* Left/right gutters
* Section spacing
* Typography hierarchy
* Image proportions
* Baseline alignment

The website should feel **precisely designed**, not assembled from independent blocks.

---

# 3. PREMIUM VISUAL DIRECTION

Push the existing design toward a much more premium:

**Italian elegance × modern American dining**

aesthetic.

It should feel like a luxury hospitality website created by a professional design studio.

Use:

* Sophisticated serif typography for major headings
* Refined modern sans-serif for supporting text
* Deep, warm, cinematic backgrounds
* Cream/ivory typography
* Subtle burgundy, olive, terracotta, or muted gold accents
* Large editorial typography
* Generous whitespace
* Fine separators
* Subtle grain/texture
* High-quality food photography
* Strong image composition

Do NOT make it look like a generic restaurant template.

Do NOT use excessive cards, gradients, glassmorphism, or decorative elements.

---

# 4. TYPOGRAPHY

Review the current typography and improve it substantially.

Major headings should use an elegant **luxury editorial serif**.

Supporting text should use a clean premium sans-serif.

Create clear hierarchy between:

* Hero headline
* Section headings
* Eyebrow labels
* Body text
* Menu categories
* Menu items
* Prices
* Buttons

Use large editorial typography where appropriate.

Avoid making every heading bold.

Use italic serif typography selectively for elegant accents.

Typography should feel sophisticated and intentional.

---

# 5. ADD REAL ANIMATIONS

The current implementation lacks meaningful animations.

This must be fixed.

Add a coherent animation system throughout the website.

Use smooth, subtle, premium animations rather than random effects.

Implement:

### Page Load

On initial page load:

1. Background/hero image gradually reveals
2. Logo fades/slides into position
3. Hero typography reveals line-by-line
4. Supporting text appears
5. CTA appears last
6. Decorative elements move subtly into place

The animation should feel cinematic.

---

### Scroll Animations

Every major section should have an intentional entrance animation.

Use:

* Fade + translate
* Text reveal
* Image reveal
* Clip-path image masks
* Scale transitions
* Parallax
* Staggered element animations

Animations should trigger naturally as sections enter the viewport.

Do not animate everything simultaneously.

---

### Image Animations

Use subtle:

* Slow zoom
* Parallax
* Image masking
* Scale on reveal
* Hover zoom

Food photography should feel alive without becoming distracting.

---

### Text Animations

For major headings, use elegant:

* Line reveals
* Word reveals
* Mask animations
* Slight vertical movement

Avoid typewriter effects.

---

# 6. 3D / DEPTH EFFECTS

Add tasteful 3D-inspired interactions.

The 3D should support the premium restaurant aesthetic.

Use the Tavolina 44 **"44"** as a recurring visual concept where appropriate.

Possible treatment:

* Subtle 3D metallic/ceramic "44"
* Slow rotation
* Mouse-based movement
* Scroll-based perspective
* Soft realistic shadows

Do not randomly place 3D objects everywhere.

The 3D should feel like part of the brand identity.

If using Three.js/WebGL, keep it performant and gracefully degrade on mobile.

---

# 7. HERO SECTION

The hero needs to feel like the strongest part of the website.

Use the best available restaurant/food photography.

The composition should feel cinematic and premium.

Create:

* Full viewport hero
* Tavolina 44 logo using `tavolina44.png`
* Strong editorial headline
* Short supporting text
* "Explore Menu" CTA

Do NOT add:

* Reserve a Table
* Book a Table
* Order Now

The hero should have strong negative space so the typography is readable.

Add cinematic entrance animations and subtle image movement.

---

# 8. SECTION TRANSITIONS

The sections currently feel too disconnected.

Create visual continuity between sections.

Use:

* Overlapping images
* Large typography crossing section boundaries
* Subtle background transitions
* Image masks
* Decorative lines
* Parallax
* Slow movement

The website should feel like one continuous visual story.

---

# 9. MENU — IMPORTANT

The uploaded **menu cards are now the source of truth for the menu section**.

Inspect the uploaded menu card images carefully.

Extract the actual:

* Categories
* Dish names
* Descriptions
* Prices
* Menu structure

Then update the existing menu section accordingly.

### IMPORTANT:

Do NOT invent menu items.

Do NOT invent prices.

Do NOT rewrite dish descriptions unless absolutely necessary for formatting.

Do NOT omit menu items that are visible in the uploaded menu cards.

Do NOT use the previous menu data if it conflicts with the uploaded menu cards.

The uploaded menu cards take priority.

---

# 10. MENU DESIGN

Do not simply dump the menu text onto the page.

Redesign the current menu section to feel like a **luxury Italian restaurant menu**.

Use:

* Elegant serif category headings
* Refined dish typography
* Clean price alignment
* Thin separators
* Generous spacing
* Subtle descriptions
* Editorial composition

Avoid generic menu cards.

Avoid excessive borders.

Avoid bright colored boxes.

Avoid unnecessary icons.

The menu should feel like a beautifully designed physical restaurant menu translated into a digital experience.

---

# 11. MENU INTERACTIONS

Add subtle interactions to the menu.

For example:

* Category navigation
* Smooth scroll to categories
* Menu item reveal animations
* Hover movement
* Subtle image interaction where appropriate

When a category enters the viewport, its items can reveal sequentially with a small stagger.

Keep these animations elegant and fast enough that the menu remains easy to read.

---

# 12. RESPONSIVE MENU

The menu must work beautifully on mobile.

Desktop:

* Editorial multi-column composition where appropriate
* Strong category hierarchy
* Large typography

Mobile:

* Single-column layout
* Comfortable spacing
* Easy-to-read prices
* Category navigation
* No horizontal overflow
* Touch-friendly interactions

Do not simply scale the desktop menu down.

---

# 13. HOVER INTERACTIONS

Add premium micro-interactions throughout the website.

Buttons:

* Subtle magnetic movement
* Smooth background transition
* Arrow/icon movement

Images:

* Slight zoom
* Subtle movement
* Smooth overlay

Navigation:

* Underline/reveal animation
* Smooth active state

Interactive elements should feel responsive but understated.

---

# 14. MOBILE EXPERIENCE

Audit the mobile layout completely.

Fix:

* Overflow
* Alignment
* Text wrapping
* Image cropping
* Navigation
* Spacing
* Button sizes
* Menu layout
* Animation performance

The mobile version should feel intentionally designed and premium.

Reduce heavy 3D effects and parallax on mobile when necessary.

---

# 15. PERFORMANCE

Do not sacrifice performance for visual effects.

Use:

* Lazy-loaded images
* Optimized image formats
* GPU-friendly transforms
* Efficient scroll animations
* Optimized 3D
* Reduced-motion support

Avoid unnecessary re-renders.

Animations should remain smooth.

---

# 16. FINAL QUALITY CHECK

Before considering the task complete, inspect the website at:

* Desktop
* Tablet
* Mobile

Check every section for:

* Alignment
* Spacing
* Typography
* Image quality
* Responsive behavior
* Animation timing
* Overflow
* Accessibility
* Visual consistency

Make sure there are **no broken layouts or awkward transitions**.

---

# MOST IMPORTANT PRIORITIES

Work in this order:

**1. Fix alignment and layout**
→ **2. Fix typography**
→ **3. Use `tavolina44.png` as the logo**
→ **4. Update the menu using the uploaded menu cards**
→ **5. Add cinematic scroll/load animations**
→ **6. Add subtle 3D/depth interactions**
→ **7. Polish micro-interactions**
→ **8. Optimize responsive behavior**
→ **9. Final visual QA**

The final result should feel like a **premium Italian-American restaurant website**, with precise alignment, exceptional typography, beautiful food presentation, smooth cinematic motion, and a polished luxury hospitality aesthetic.

Do not just make the website "more animated."

Make the animations, typography, imagery, spacing, and layout work together to create a **cohesive premium experience**.
