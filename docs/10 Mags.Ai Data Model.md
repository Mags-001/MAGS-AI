# Mags.Ai Data Model

## 1. Purpose

The data model defines the information Mags.Ai needs to display, manage, and eventually store.

The model should support the current website without introducing unnecessary database complexity.

**Core principle:**

> Define the data clearly first. Store it in a database only when the product actually requires persistent data.

---

## 2. V1 Data Strategy

Mags.Ai V1 may use structured local data for content that does not require a database.

Examples:

- Products
- Services
- FAQs
- Projects
- Testimonials

A database should be introduced when persistent user-generated or business data needs to be stored and managed.

---

## 3. Products / Demos

Products represent solutions or demonstrations that Mags.Ai wants to showcase.

Suggested fields:

- `id`
- `name`
- `description`
- `problem`
- `solution`
- `features`
- `image`
- `gif`
- `technologies`
- `status`
- `demoUrl`
- `sourceCodeUrl`
- `createdAt`
- `updatedAt`

Possible statuses:

- Demo
- Concept
- In Development
- Live

---

## 4. Projects

Projects are separate from Products.

A project represents work that has been built or developed, while a product represents a reusable solution, demonstration, or potential product offering.

Suggested fields:

- `id`
- `name`
- `description`
- `problem`
- `solution`
- `features`
- `technologies`
- `images`
- `demoUrl`
- `sourceCodeUrl`
- `status`
- `projectType`
- `createdAt`
- `updatedAt`

Possible project types:

- Personal Project
- Demo
- Real Client
- Concept

This separation allows Mags.Ai to eventually showcase client work separately from reusable products.

---

## 5. Services

Services describe the types of digital solutions Mags.Ai provides.

Suggested fields:

- `id`
- `name`
- `description`
- `problem`
- `whatIsBuilt`
- `businessBenefit`
- `examples`
- `cta`
- `displayOrder`

Initial services include:

- Business Websites
- Custom Web Applications
- Business Automation
- AI Solutions

---

## 6. FAQs

FAQs contain common questions and answers.

Suggested fields:

- `id`
- `question`
- `answer`
- `displayOrder`
- `isActive`

The structure should allow FAQs to be added, removed, reordered, or updated easily.

---

## 7. Testimonials

Testimonials should be stored in a structure that allows genuine client feedback to be added later.

Suggested fields:

- `id`
- `clientName`
- `businessName`
- `testimonial`
- `photo`
- `logo`
- `relatedProject`
- `status`
- `createdAt`

No fabricated testimonials or client information should ever be added.

Until genuine testimonials exist, the section may remain hidden or display an appropriate empty state.

---

## 8. Contact / Business Enquiries

Contact submissions will eventually represent potential business opportunities.

Suggested fields:

- `id`
- `name`
- `business`
- `email`
- `whatsapp`
- `businessProblem`
- `currentProcess`
- `desiredImprovement`
- `budget`
- `preferredContactMethod`
- `submittedAt`
- `status`

Possible enquiry statuses:

- New
- Reviewing
- Contacted
- In Discussion
- Converted
- Closed

Persistent storage can be introduced when the contact system requires it.

---

## 9. Future Data

The following entities may be introduced as Mags.Ai evolves:

### Users

Potentially required for:

- Authentication
- Client accounts
- Admin access

### Clients

Potentially required for:

- Client management
- Client-specific applications
- Project relationships

### Leads

Potentially required for:

- Sales pipeline
- Business enquiry tracking
- Follow-up management

### Accounts

Potentially required for:

- SaaS products
- Organizations
- User permissions

### Tasks

Potentially required for:

- Project management
- Business workflows
- Internal applications

### Notifications

Potentially required for:

- Automated reminders
- Customer communication
- Workflow events

### AI Conversations

Potentially required for:

- AI assistants
- AI-powered business tools
- Conversation history

### Subscriptions / Billing

Potentially required for:

- SaaS products
- Paid accounts
- Recurring services

### Application-Specific Business Data

Future Mags.Ai products may introduce their own data models based on the business problem being solved.

---

## 10. V1 vs Future Data

### V1

Potentially implemented:

- Products
- Projects
- Services
- FAQs
- Testimonials
- Contact enquiries

The implementation method may initially be local structured data rather than a database.

### Future

Not implemented unless required:

- Users
- Clients
- Leads
- Accounts
- Tasks
- Notifications
- AI conversations
- Subscriptions
- Billing
- Product-specific business databases

---

## 11. Data Relationship Principle

The model should avoid unnecessary duplication.

For example:

```text
Product
   ↓
Product Details
   ↓
Demo / Project
```

Where appropriate, projects, products, and testimonials may reference each other instead of duplicating the same information.

The exact relationships should be implemented when the application requires persistent data.

---

## 12. Content Management Principle

Mags.Ai content should be easy to update.

Adding a new product should ideally require adding product data rather than creating an entirely new component.

The same principle applies to:

- Services
- FAQs
- Projects
- Testimonials

This supports the reusable component architecture defined in the Component Plan.

---

## 13. Data Authenticity

The data model must support clear distinction between:

**Real Client → Personal Project → Demo → Concept → In Development → Live**

This prevents Mags.Ai from accidentally presenting concepts or personal projects as client work.

---

## 14. Core Data Principle

> **Model what the business actually needs, not what the system might theoretically need someday.**

Mags.Ai should start with simple structured data and introduce persistent storage, relationships, authentication, and databases only when real product requirements justify them.