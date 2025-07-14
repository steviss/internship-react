# React + TypeScript + Vite

# Pre-requisites
- Volta
- Yarn 4.9.2 (installs using Volta)
- Node 22.16.0 (installs using Volta)

## Volta
### The Hassle-Free JavaScript Tool Manager
- Install Volta using the guide from the official website: [https://volta.sh/](https://docs.volta.sh/guide/getting-started)
- Please remember to set up Developer mode in Windows, as per the guide.
- Restart your machine
- Enter the folder of the project and just do `yarn` it will install both Node and Yarn version according to the `volta` setting inside of `package.json`

## What's in the repo

### [Atomic Design](https://atomicdesign.bradfrost.com/) - by Brad Frost

Atomic Design by Brad Frost is a methodology that breaks interfaces into five hierarchical levels—atoms, molecules, organisms, templates, and pages—to create consistent, reusable UI components. It improves communication between UI/UX teams and developers by providing a shared language and structure, ensuring design systems are modular, scalable, and aligned with real-world implementation.

### [TailwindCSS](https://tailwindcss.com/)

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in markup. It streamlines communication between designers and developers by enforcing consistent design tokens (spacing, colors, typography) and eliminating the need for custom CSS, making implementation faster and more maintainable.

### [DaisyUI](https://daisyui.com/)

DaisyUI is a Tailwind CSS component library that adds ready-made, customizable UI components using Tailwind's utility classes. It bridges the gap between design and development by offering consistent, themeable components out of the box, allowing teams to move faster without compromising on design consistency.

### [class-variance-authority](https://cva.style/docs)

Class Variance Authority (CVA) is a utility for managing complex Tailwind class combinations in a predictable and scalable way. It helps developers create reusable, variant-based component styles while maintaining consistency in logic and design tokens, streamlining collaboration between teams by reducing duplication and making styling decisions more transparent.

### [react-hook-form](https://react-hook-form.com/)

React Hook Form is a lightweight library for managing form state and validation in React using hooks. It simplifies form logic by reducing boilerplate, improving performance, and providing a clear structure—making it easier for developers and designers to collaborate on dynamic, accessible forms.

### [Zod](https://zod.dev/)

Zod is a TypeScript-first schema validation library that enables developers to define and validate data structures with static type safety. It improves collaboration between frontend and backend teams by ensuring consistent data contracts, reducing runtime errors, and aligning validation logic with TypeScript types.

### [react-router](https://reactrouter.com/)

React Router is a declarative routing library for React that enables navigation and dynamic rendering based on the URL. It enhances collaboration between designers and developers by aligning UI structure with route-based layouts, supporting nested routes, and making app navigation predictable and easy to manage.

### [Redux Toolkit](https://redux-toolkit.js.org/)

Redux Toolkit is the official, recommended way to write Redux logic, offering simplified APIs for managing global state, reducers, and async logic. It reduces boilerplate, enforces best practices, and improves collaboration by making state management more predictable, scalable, and easier for teams to adopt and maintain.

### [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)

react-helmet-async is a lightweight library for managing changes to the document <head> (like title, meta tags) in React applications, with full support for asynchronous rendering and server-side rendering (SSR). It helps developers and SEO/marketing teams collaborate by enabling dynamic, SEO-friendly metadata updates that work seamlessly across routes and rendering strategies.

### PostCSS

PostCSS is a tool for transforming CSS with JavaScript plugins. In your setup, it's used primarily to power Tailwind CSS and modern CSS features during development and build time. It enables modular, scalable styling workflows while integrating seamlessly with Vite.

- [postcss-import](https://www.npmjs.com/package/postcss-import)
Allows you to use @import in CSS files, letting you split styles into multiple files for better organization and modularity.

-  [postcss-nesting](https://www.npmjs.com/package/postcss-nesting)
Enables native CSS nesting (like SCSS), making styles more readable and closer to component structure, which is ideal for component-based systems like React.

-  [autoprefixer](https://www.npmjs.com/package/autoprefixer)
Automatically adds vendor prefixes to your CSS based on browser compatibility, ensuring consistent styling across different environments.

-  [cssnano](https://www.npmjs.com/package/cssnano)
A CSS minifier that optimises and compresses your CSS for production, reducing bundle size.

- [@tailwindcss/nesting](https://www.npmjs.com/package/@tailwindcss/nesting)
Works in tandem with Tailwind to support nesting syntax, ensuring Tailwind utilities still apply correctly in nested rules.

### Prettier

Prettier is an opinionated code formatter that enforces consistent code style by parsing your code and reprinting it with its own rules. It streamlines collaboration across teams by eliminating debates over code formatting, reducing cognitive load during code reviews, and ensuring clean, readable code.
Additional Prettier Plugins

-  [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
    Automatically sorts Tailwind CSS utility classes in a logical, standardized order (based on the official Tailwind config). This improves readability and consistency in markup, helping both developers and designers navigate code more easily.

-  [prettier-plugin-css-order](https://www.npmjs.com/package/prettier-plugin-css-order)
    Enforces a consistent property order within CSS rules (e.g., positioning, box model, typography). It helps maintain a clean and predictable CSS structure, especially useful in large or team-managed stylesheets.

-  [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
    Sorts import statements by module type (e.g., external libraries, internal modules, styles) and alphabetically within those groups. This keeps files organised, reduces merge conflicts, and helps developers quickly locate dependencies.

### ESLint

ESLint is a pluggable linting tool for JavaScript and TypeScript that helps maintain code quality and consistency by identifying problems in code—ranging from stylistic issues to potential bugs. In your setup, it ensures a consistent, error-free codebase that’s easier to read, debug, and maintain across your team.

### Vite

Vite is a modern frontend build tool that provides lightning-fast development and optimised production builds. It leverages native ES modules and an instant dev server to deliver near-instant hot module replacement (HMR), making development smoother and more efficient.

`vite-tsconfig-paths`
Allows you to use TypeScript path aliases (@/components, etc.) in your Vite project, improving code organisation and import clarity.
