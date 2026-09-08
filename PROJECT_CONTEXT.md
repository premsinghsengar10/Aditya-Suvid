# Suvid Retail Website Context

## Purpose

Corporate React/Vite website for Suvid Retail Group. The site presents the group story, portfolio companies, careers, articles, team, and brand links.

## Architecture

- `src/App.jsx`: custom client-side routing, theme state, cookie consent, shared layout.
- `src/data/content.js`: centralized navigation, company, article, career, story, team, and footer data.
- `src/components/`: reusable homepage sections and shared UI such as Header, Footer, Hero, Entities, Careers, and Timeline.
- `src/pages/`: route-level pages including Story, Companies, Careers, About, and Articles.
- `src/components/styles/`: component-scoped CSS.
- `src/pages/styles/`: page-level and shared page CSS.
- `src/App.css`: global layout, theme variables, responsive rules, and shared controls.
- `src/index.css`: base reset and document-level styles.

## Routing

Routing uses `window.history.pushState` and `popstate`; there is no React Router dependency. Internal links use paths such as `/story`, `/companies`, `/careers`, `/about`, and `/articles`.

## Theme System

The root app shell uses `data-theme="dark"` or `data-theme="light"`. Theme tokens are defined in `src/App.css`. Light-mode exceptions should be scoped to the relevant page or component to avoid overriding image-backed sections and shared buttons.

## Data Flow

Reusable page content is exported from `src/data/content.js`. Components map those records to UI and should not duplicate company or article copy locally unless the content is route-specific.

## Recent Change

Companies-page `Visit brand` buttons now have a `28px` separation from the highlights block and an explicit light-mode contrast treatment. The dark theme keeps the existing appearance.

## Validation

Use:

```text
npm run lint
npm run build
```

After visual changes, check both dark and light themes plus mobile layout.

## Contact and Careers

- /contact is a routed brand-collaboration page with name, company, email, phone, website, and message fields.
- /careers presents one flat openings list with department shown in each role's metadata; /careers/<opening-slug> renders the full role detail page.
- Career applications collect name, phone, email, role, message, and a PDF/DOC/DOCX resume.
- Both forms submit to FormSubmit's hr@suvidretail.in endpoint. The careers form uses multipart/form-data so the resume is delivered as an attachment; the browser preview link is a temporary object URL and is not the email link.
- FormSubmit must be confirmed once from the HR mailbox before production submissions are delivered. Keep the file size within the service's documented 10 MB total upload limit.
