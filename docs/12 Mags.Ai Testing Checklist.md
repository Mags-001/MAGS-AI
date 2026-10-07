# Mags.Ai Testing Checklist

## 1. Purpose

Testing ensures that Mags.Ai works as intended, remains responsive and accessible, and does not introduce unnecessary security or performance problems.

Testing is also a critical part of the AI-assisted development workflow.

**Core principle:**

> Do not consider code finished because it works once. Build, test, break, understand, fix, and test again.

---

## 2. Functional Testing

Verify that:

- Navigation links work.
- Buttons work.
- Forms submit correctly.
- FAQ items open and close.
- Product demos open correctly.
- CTAs reach the correct destination.
- WhatsApp, email, and social links work.
- Success states work.
- Error states work.

---

## 3. Responsive Testing

Test the website across:

- Desktop
- Laptop
- Tablet
- Mobile
- Different screen widths

Check for:

- Horizontal overflow
- Broken layouts
- Incorrect spacing
- Unreadable text
- Incorrect element sizing
- Touch interaction problems
- Mobile navigation problems

The mobile experience should preserve the same core information and functionality while adapting its interaction model appropriately.

---

## 4. Visual Testing

Verify:

- Typography
- Spacing
- Alignment
- Colours
- Gradients
- Glass effects
- Images
- Animations
- Hover states
- Section transitions

The implementation should remain consistent with the approved Brand & Design System.

---

## 5. Interaction Testing

Test:

- Navbar
- Navigation menu
- Buttons
- Cards
- Forms
- FAQ
- Scroll interactions
- Cursor effects
- Product demos
- Mobile interactions

No essential functionality should depend on mouse interaction when the user is on a touch device.

---

## 6. Form Testing

Test:

- Valid submissions
- Empty required fields
- Invalid email addresses
- Very long input
- Unexpected input
- Submission failures
- Successful submissions
- Loading states
- Duplicate or rapid submissions where relevant

---

## 7. Accessibility Testing

Check:

- Keyboard navigation
- Visible focus states
- Image alt text
- Colour contrast
- Form labels
- Clear button and link purposes
- Reduced-motion behaviour
- Semantic HTML
- Screen-reader compatibility where appropriate

Accessibility should be considered during implementation rather than added only at the end.

---

## 8. Performance Testing

Check:

- Page loading speed
- Image sizes
- GIF sizes
- Animation performance
- Unnecessary JavaScript
- Mobile performance
- Network requests

Visual effects should not noticeably reduce the website's performance.

---

## 9. Browser Testing

At minimum, test the website on:

- Google Chrome
- Microsoft Edge
- Safari where available
- Mobile browsers

Browser-specific problems should be identified before important releases.

---

## 10. Error and Empty-State Testing

Test situations such as:

- Missing images
- Missing products
- No testimonials
- Broken demos
- Failed form submissions
- Invalid URLs
- API failures
- Network failures

Every failure should provide a clear, human-readable response.

---

## 11. Security Testing

Verify that:

- API keys are not exposed.
- `.env` files are not committed.
- User input is validated.
- Sensitive information is not publicly exposed.
- Backend endpoints are appropriately protected.
- Dependencies do not contain obvious critical security vulnerabilities.

Security testing should increase as the application becomes more complex.

---

## 12. AI-Generated Code Review

Whenever AI generates code, follow:

**Read → Understand → Run → Test → Break → Debug → Accept**

AI-generated code should not be considered finished simply because it works once.

AI should also be asked to identify:

- Logic problems
- Edge cases
- Security risks
- Performance issues
- Accessibility problems
- Maintainability concerns

The developer remains responsible for the final implementation.

---

## 13. Git Checkpoints

Before major changes:

1. Test the current version.
2. Confirm it is working.
3. Commit the working version.
4. Use a meaningful commit message.

Example:

```text
Add reusable product card component
```

Avoid vague commit messages such as:

```text
update
```

Git should provide safe checkpoints for experimentation and debugging.

---

## 14. Manual Testing for V1

V1 should prioritize strong manual testing using:

- Browser DevTools
- Responsive/device simulation
- Console
- Network panel
- Element inspector
- Lighthouse or equivalent performance/accessibility checks

This allows testing skills to develop alongside implementation.

---

## 15. Automated Testing — Future

Automated testing should be introduced as Mags.Ai becomes a real application.

Potential future testing layers include:

- Unit tests
- Integration tests
- End-to-end tests
- API tests
- Automated regression testing

These should be introduced when application complexity justifies them rather than becoming an unnecessary barrier during V1.

---

## 16. Definition of Done

A feature is considered complete when it is:

**Working → Responsive → Accessible → Tested → Secure → Understandable → Committed**

A feature should not be considered complete merely because the implementation renders successfully.

---

## 17. Core Testing Principle

> **Build → Test → Break → Understand → Fix → Test Again**

Testing is not only about finding bugs.

It is part of learning how the system actually works and developing the ability to build reliable software.