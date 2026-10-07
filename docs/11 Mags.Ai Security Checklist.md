# Mags.Ai Security Checklist

## 1. Purpose

Mags.Ai should follow practical security principles from the beginning without introducing unnecessary enterprise-level complexity.

Security should be considered whenever the system handles:

- User input
- Personal information
- Business information
- Authentication
- APIs
- Databases
- External services
- AI integrations

**Core principle:**

> Build securely from the beginning, but introduce security complexity according to actual risk.

---

## 2. Secrets and Environment Variables

- Never hardcode API keys, passwords, database credentials, or private tokens.
- Use environment variables for secrets.
- Use `.env` files locally where appropriate.
- Add sensitive environment files to `.gitignore`.
- Never commit secrets to GitHub.
- Never expose private keys in frontend code.

---

## 3. User Input

All user-provided input should be treated as untrusted.

For forms and APIs:

- Validate required fields.
- Validate data types and formats.
- Validate input on the backend when a backend exists.
- Do not rely only on browser-side validation.
- Handle unexpected input safely.

---

## 4. Authentication

Mags.Ai V1 does not require login or signup.

If authentication is introduced later:

- Use established authentication patterns.
- Passwords must never be stored as plain text.
- Use secure password hashing.
- Implement appropriate session/token management.
- Implement authorization separately from authentication.
- Do not build custom authentication casually.

---

## 5. API Security

When APIs are introduced:

- Validate incoming requests.
- Protect sensitive endpoints.
- Keep private API keys on the server.
- Do not expose server secrets through React/frontend code.
- Implement rate limiting where public endpoints require protection.
- Return safe error responses.

---

## 6. Database Security

When PostgreSQL or another database is introduced:

- Use parameterized queries or safe ORM/query mechanisms.
- Never construct SQL queries directly from untrusted input.
- Use appropriate database permissions.
- Keep database credentials private.
- Do not expose database connections directly to the frontend.
- Back up important production data where appropriate.

---

## 7. Contact Form Security

The contact form may collect personal and business information.

Security measures should include:

- Input validation
- Email validation
- Spam protection where necessary
- Rate limiting where appropriate
- Safe server-side processing
- Secure storage if submissions are persisted

Submitted personal or business information must not be publicly exposed.

---

## 8. Third-Party Services

Before integrating an external service:

- Understand what data is sent.
- Understand what the service does with the data.
- Avoid sending unnecessary personal or sensitive business information.
- Protect API credentials.
- Use the minimum required permissions.
- Review service security requirements.

This is especially important for AI APIs and external automation services.

---

## 9. AI-Generated Code

AI-generated code must not automatically be considered secure.

For security-sensitive code:

1. Understand what the code does.
2. Review the implementation.
3. Identify potential security risks.
4. Test expected and unexpected inputs.
5. Verify the implementation before using it.

**Core rule:**

> AI can generate code, but AI-generated code is not automatically trusted code.

---

## 10. Frontend Security

The frontend must not contain secrets.

Be especially careful with:

- API keys
- Authentication credentials
- Private configuration
- User-generated HTML
- Dynamic content rendering
- `dangerouslySetInnerHTML`

Avoid unsafe HTML injection patterns.

Sensitive information should not be stored casually in browser storage such as `localStorage`.

---

## 11. Dependencies

Third-party packages should be treated as part of the application's security surface.

Before installing a package:

- Understand why it is needed.
- Prefer established packages.
- Review package reputation and maintenance.
- Check for security warnings.
- Keep dependencies reasonably updated.

Do not install packages simply because AI recommends them without understanding their purpose.

---

## 12. Deployment Security

Production deployments should use:

- HTTPS
- Secure environment variables
- Production-specific configuration
- Appropriate access controls
- Secure API configuration

Development credentials and production credentials should not be mixed.

---

## 13. Error Handling

Users should receive useful but safe error messages.

Do not expose:

- Stack traces
- Database credentials
- API keys
- Internal server paths
- Sensitive configuration
- Detailed internal architecture

Detailed debugging information should remain available only to authorized developers.

---

## 14. Git and GitHub Security

Before pushing code:

- Check `.gitignore`.
- Check for API keys and secrets.
- Check for `.env` files.
- Check for customer or personal data.
- Check for accidentally committed credentials.
- Review important changes before pushing.

If a secret is accidentally committed, it should be treated as compromised and rotated rather than simply deleted from the latest commit.

---

## 15. Privacy

If Mags.Ai collects personal information:

- Clearly explain what information is collected.
- Explain why it is collected.
- Collect only information that is necessary.
- Protect stored information.
- Provide appropriate privacy information.
- Avoid retaining unnecessary personal information.

The privacy approach should evolve as the website begins collecting more data.

---

## 16. Security Testing

Security should be considered during:

- Development
- Testing
- Deployment
- Feature additions
- Third-party integrations
- Backend/database implementation

Important areas to test include:

- Invalid input
- Missing input
- Unexpected input
- Unauthorized access
- API abuse
- Form spam
- Authentication failures
- Sensitive information exposure

---

## 17. Security Mindset

Never assume:

> “It's just a small website, so security doesn't matter.”

Instead:

> **Collect less → Expose less → Trust less → Validate everything important.**

Security should be proportional to the actual risk of the feature.

---

## 18. Core Security Principle

> **AI-generated code is not automatically trusted code. Security-sensitive code must be understood, reviewed, tested, and verified before being used.**

Mags.Ai should grow from a secure foundation without allowing security concerns to create unnecessary complexity before it is required.