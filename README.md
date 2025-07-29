# Link Management App

This is a full-stack link management application built with Next.js, allowing users to sign up, create a profile, and share a collection of their links on a single, public page.

## Features

*   **Authentication:** Users can sign up and sign in using email/password credentials or their Google account.
*   **Profile Customization:** Users can set a display name and a short bio for their profile.
*   **Link Management:** Add, and manage a list of personal or social links.
*   **Public Profile Page:** A dedicated, shareable page that displays the user's profile information and all their links.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **Database ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v20 or later)
*   [pnpm](https://pnpm.io/installation)
*   A PostgreSQL database instance.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd link-management-app
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables:

    ```env
    # Get credentials from https://console.cloud.google.com/
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

    # Connection string for your PostgreSQL database
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # A secret for NextAuth.js, generate with `openssl rand -base64 32`
    NEXTAUTH_SECRET=
    ```

4.  **Run database migrations:**
    Apply the database schema to your PostgreSQL instance.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

The application exposes the following API endpoints:

*   `/api/auth/[...nextauth]`: Handles all NextAuth.js authentication logic (sign in, sign out, callbacks).
*   `/api/auth/register`: Handles new user registration with email and password.
*   `/api/auth/user`: Manages user profile data (display name, bio).
*   `/api/auth/links`: Handles saving new links for a user.
*   `/api/auth/page-data`: Fetches all necessary data for the final user profile page.

## Final Page

![Final Page](./public/page.png)
