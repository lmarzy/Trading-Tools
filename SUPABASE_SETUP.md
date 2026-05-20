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
supabase secrets set --project-ref qsvxquoovlmvcljzgmiy 'ADMIN_PASSCODE_HASH=878a37ef51145c058bd5260799abf1048d5bb34ebb520e7c1fc2f7827e032bd7'
```

Do not put the service role or secret key in frontend code.

## Functions To Deploy

```bash
supabase functions deploy login
supabase functions deploy get-user-data
supabase functions deploy save-user-data
supabase functions deploy admin-users
```

## What Each Function Does

- `login`: checks a user passcode hash and returns the matched user.
- `get-user-data`: returns one user's config and trades.
- `save-user-data`: saves one user's config and trades.
- `admin-users`: admin-only user list/create/update endpoint.

## Next App Step

Once these functions are deployed, the frontend can be switched from `localStorage` to Supabase-backed login/data loading.
