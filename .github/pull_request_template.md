## 📌 Description

<!-- Describe your changes in detail -->

## ✅ PR Checklist

📌 General

- [ ] The changes are small and focused on a single feature or bug fix.
- [ ] The PR references a related issue (if applicable).
      📁 Folder Structure & Code Organization
- [ ] New routes are placed inside the app/ directory.
- [ ] Large components are broken down into smaller, reusable components and placed inside the relevant features/ or components/ folder.
- [ ] Business logic is kept outside of page.tsx and placed inside utils/, hooks/, or services/.
- [ ] Uses custom hooks for reusable logic instead of placing logic directly inside components.
- [ ] All constants are placed inside the constants/ folder.

🚀 Performance & Optimization

- [ ] Uses next/dynamic for lazy loading non-critical components.
- [ ] Uses React.memo or useMemo/useCallback for expensive computations and unnecessary re-renders.
- [ ] Uses useEffect only when necessary.

🔗 Navigation & Routing

- [ ] Uses next/link instead of <a> for client-side navigation.
- [ ] Uses next/image for optimized images instead of <img>.
- [ ] Routes follow a clean and structured convention (e.g., /dashboard/settings instead of /dashboardsettings).

🎨 Styling & UI

- [ ] Uses tailwindcss instead of global CSS.
- [ ] Ensures responsive design (tested on mobile, tablet, and desktop).

🛠️ State Management

- [ ] Uses selectors to access the state efficiently.
- [ ] Uses zustand/shallow or memoized selectors to avoid unnecessary re-renders.
- [ ] Ensures global state updates are minimal and well-structured.

📜 API & Data Fetching

- [ ] Adds supabase queries inside `lib/calls/` instead of calling them directly inside components.
- [ ] Handles errors gracefully with proper fallbacks.
- [ ] Ensures requests are debounced where applicable (e.g., search inputs).

⚙️ Build & Deployment

- [ ] Runs successfully with yarn dev or npm run dev.
- [ ] Has been tested using yarn build followed by yarn start to ensure it works in production mode.
- [ ] Ensures no console warnings or errors in the browser or terminal.

## 🔍 Screenshots (if applicable)

<!-- Add screenshots if required -->

## 🚀 Testing Instructions

<!-- Provide instructions on how to test the changes -->
