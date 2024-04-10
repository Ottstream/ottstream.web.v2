# Project Installation

- **`git clone`**:
- **`yarn`**: Install all dependencies.
- **`yarn dev`**: For development.
- **`yarn build `**: For production build creation.
- **`yarn preview`**: For production build check and preview



# Project Structure

The project follows a well-organized structure to enhance maintainability, scalability, and code readability.

## Root Directory Structure



**`index.html`**: Entry point HTML file IMPORTANT

**`/src/main.tsx`**: Entry Point tsx file (replacing Chat.tsx)

- **`/public`**: This directory contains public assets and static files that can be accessed directly. It is typically used for assets like images, fonts, or any file that should be publicly accessible.

- **`/src`**: The main source code directory for the project.

    - **`/Assets`**: General project assets such as images, icons, or styles that are not specific to a screen or feature.

    - **`/Components`**: Shared React components that can be reused across different screens or features.

    - **`/Constants`**: General constants used throughout the application. This can include configuration settings, API endpoints, or any other constants.

    - **`/Store`**: Redux-related files, including slices and actions.

    - **`/Hooks`**: General custom hooks that can be reused across different parts of the application.

    - **`/Translations`**: Internationalization (i18n) files for managing translations and localization.

    - **`/Helpers`**: General utility/helper functions that can be used across the application.

    - **`/Screens`**: Main screens or features of the application. Each screen or feature has its own directory with specific components, hooks, and helpers.

        - **`/Components`**: Components specific to each screen or feature.

        - **`/Hooks`**: Custom hooks specific to each screen or feature.

        - **`/Helpers`**: Helper functions specific to each screen or feature.
        
      - ...

This organized structure helps to keep related files together, making it easier to navigate and maintain the codebase. It promotes code modularity, reusability, and separation of concerns.


        
