# Clerk + Supabase Authentication

This document explains how the Clerk and Supabase integration is configured in this project.

## Overview

This project uses a modern, recommended approach where **Clerk is the primary authentication provider**, and Supabase is used for the database and other backend services.

### Key Concepts

*   **Single Source of Truth:** Clerk is the single source of truth for all user information. User sign-ups, profiles, and session management are all handled by Clerk. You will manage your users in the **Clerk Dashboard**, not the Supabase Dashboard.

*   **No User Syncing:** Users who sign up via Clerk will **not** appear in the `auth.users` table in your Supabase project. This is by design.

*   **JWT-Based Authorization:** When a user authenticates, Clerk issues a JSON Web Token (JWT). This JWT is sent with every request to Supabase. Supabase verifies the token's signature to authenticate the request.

*   **Row-Level Security (RLS):** You can and should still use Supabase's powerful Row-Level Security to protect your data. Your RLS policies can access user information (like user ID, organization, or custom claims) directly from the Clerk JWT.

### Why this approach?

This is the official recommendation from both Supabase and Clerk because:

*   **It's more secure:** It avoids sharing your Supabase JWT secret with a third party and reduces the attack surface.
*   **It's simpler:** It eliminates the need to synchronize user data between two services, which can be complex and error-prone.
*   **It's more flexible:** You can add custom claims to your Clerk JWT and use them in your Supabase RLS policies.

### How to Secure Your Data

To secure your tables, you'll create RLS policies in Supabase that reference claims from the Clerk JWT. For example, to get the user's ID from the token, you can use `(auth.jwt() ->> 'sub')::uuid`.

For more information, you can refer to the official Supabase documentation on this topic:
[https://supabase.com/docs/guides/auth/third-party/clerk](https://supabase.com/docs/guides/auth/third-party/clerk)
