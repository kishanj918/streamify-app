## 📌 Description

<!-- Describe your changes in detail -->

## ✅ PR Checklist

- [ ] Adds a new route, if applicable.
  - [ ] Breaks down large components into smaller, reusable components and places them in the relevant features/ folder.
  - [ ] Ensures business logic is not placed directly inside the main page.tsx.
  - [ ]Uses lazy loading (next/dynamic) for smaller components inside larger ones.
- [ ] Uses next/link instead of <a> for client-side navigation.
- [ ] Uses selectors to access state from the store.
- [ ] Uses zustand/shallow when selecting state from the store to avoid unnecessary re-renders.
- [ ] Runs successfully with yarn dev.
- [ ] Has been tested using yarn build followed by yarn start to ensure it works in production mode.

## 🔍 Screenshots (if applicable)

<!-- Add screenshots if required -->

## 🚀 Testing Instructions

<!-- Provide instructions on how to test the changes -->
