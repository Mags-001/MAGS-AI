# Mags.Ai — Component Plan

**Document:** 06 — Component Plan  
**Product:** Mags.Ai  
**Status:** Approved

## 1. Global Components

Reusable components shared across the website:

- Navbar
- Logo
- Button
- Footer
- SectionHeading
- Container
- SocialLinks

---

## 2. Hero Components

- HeroSection
- HeroBackground
- HeroCTA
- AnimatedGradient
- CursorGlow

---

## 3. Problems Components

- ProblemSection
- ProblemCard

---

## 4. About Components

- AboutSection
- ProfileImage
- AboutHighlights

---

## 5. Services Components

- ServicesSection
- ServiceCard

---

## 6. Products Components

- ProductsSection
- ProductCard
- ProductStatus
- ProductPreview
- ProductDetails

---

## 7. How I Work Components

- ProcessSection
- ProcessStep
- ProcessTimeline

Process flow:

> **Understand → Analyse → Design → Build → Test → Improve → Launch & Support**

---

## 8. Testimonials / Clients Components

- TestimonialsSection
- TestimonialCard
- ClientCard
- EmptyState

The components must support both genuine content and an empty state.

---

## 9. FAQ Components

- FAQSection
- FAQItem

FAQ items should be reusable and expandable.

---

## 10. Contact Components

- ContactSection
- ContactForm
- FormField
- ContactMethod
- SuccessMessage
- ErrorMessage

---

## 11. Supporting Components

Reusable supporting components may include:

- Modal
- Image
- LoadingState
- EmptyState
- ScrollReveal

Additional components may be introduced when a genuine requirement appears.

---

## 12. Reusability Principle

Components should be reusable rather than duplicated for individual content.

For example:

> One `ProductCard` component should support Customer Follow-up, Inventory Tracker, Product Catalogue, and future products.

The component should receive different content/data rather than requiring a separate component for every product.

---

## 13. Component Design Principle

The component architecture should balance:

- Reusability
- Simplicity
- Maintainability
- Clear responsibilities
- Easy future expansion

Components should not be created merely to increase the number of files.

> **Create reusable components where repetition or responsibility justifies them.**