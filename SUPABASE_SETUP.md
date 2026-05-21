# Supabase Setup

Use this after creating the `app_users` and `user_data` tables.

## Project Values

- API URL: `https://qsvxquoovlmvcljzgmiy.supabase.co`
- Publishable key: stored in `supabase-config.js`

## Required Edge Function Secrets

Set these in Supabase before deploying functions:

```bash
supabase secrets set --project-ref qsvxquoovlmvcljzgmiy 'PROJECT_URL=https://qsvxquoovlmvcljzgmiy.supabase.co'
supabase secrets set --project-ref qsvxquoovlmvcljzgmiy 'SERVICE_ROLE_KEY=your_service_or_secret_key'
```

Do not put the service role or secret key in frontend code.

## Functions To Deploy

```bash
supabase functions deploy login
supabase functions deploy get-user-data
supabase functions deploy save-user-data
supabase functions deploy admin-users
supabase functions deploy reset-own-passcode
```

## What Each Function Does

- `login`: checks a user passcode hash and returns the matched user.
- `get-user-data`: returns one user's config and trades.
- `save-user-data`: saves one user's config and trades.
- `admin-users`: admin-only user list/create/update endpoint.
- `reset-own-passcode`: lets a logged-in user reset their own passcode after confirming the current one.

## Fresh Install Notes

The app uses Supabase as the source of truth for user profiles, user config, and trades. Browser session storage is only used to keep the current login active until logout or tab/session expiry.
