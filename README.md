# TRADERS HUB

TRADERS HUB is a private trading journal and position size calculator. It lets users configure their own trading setup, record trades, review performance, and keep data synced through Supabase.

![TRADERS HUB logo](assets/logo.png)

## Screenshots

![Passcode screen](docs/images/login-screen.png)

## What The App Does

- Tracks trades by symbol, account, strategy, market type, size, result, amount, notes, discipline, entry, exit, and points.
- Shows dashboard tabs for overview, account balances, equity curve, analytics, weekly/monthly breakdowns, and strategy breakdown.
- Includes a position size calculator for lots or contracts.
- Supports user-specific configuration for market types, symbols, sessions, accounts, strategies, and account balances.
- Uses passcodes for access, with admin-managed users and roles.
- Saves each user's trades and configuration to Supabase.

## User Flow

1. Open the app and enter your passcode.
2. New users complete the setup wizard before adding trades.
3. Use `Configure` later to update symbols, accounts, sessions, strategies, market types, and balances.
4. Click `Add trade` to record a trade.
5. Optional sections in the trade form:
   - `Price details`: add direction, entry, and exit to calculate points.
   - `Discipline`: mark whether the plan was followed and any trading mistakes.
   - `Notes`: add trade context or lessons learned.
6. Use the table filters to narrow trades by symbol, account, strategy, and market.
7. Use dashboard tabs to review performance.

## Admin Flow

Admins can open the admin page from the user menu after logging in with an admin passcode.

Admin users can:

- Add users with first name, last name, email, and role.
- Generate passcodes for users.
- Edit user details.
- Enable or disable users.
- Remove users.
- See created, last login, trade count, and last saved information from the user table.

## Data Storage

The app stores data in Supabase:

- `app_users`: user profile, role, passcode hash, generated code, active status, and login metadata.
- `user_data`: each user's configuration and trades.

The browser only keeps the current session details so the user stays logged in until logout or session expiry.

## Local Development

From the project folder:

```bash
python3 -m http.server 4174
```

Then open:

```text
http://127.0.0.1:4174/index.html
```

Admin page:

```text
http://127.0.0.1:4174/admin/
```

## Supabase Setup

The Supabase project URL and publishable key live in `supabase-config.js`.

Deploy these Edge Functions after setting secrets:

```bash
supabase functions deploy login
supabase functions deploy get-user-data
supabase functions deploy save-user-data
supabase functions deploy admin-users
supabase functions deploy reset-own-passcode
```

Full setup notes are in [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

## Main Files

- `index.html`: main app shell.
- `app.js`: trade tracker, dashboard, onboarding, calculator, and user flows.
- `styles.css`: shared app styling.
- `admin/index.html`: admin app shell.
- `admin/admin.js`: admin user management.
- `supabase/functions`: Edge Functions used by the app.
- `supabase/schema.sql`: database schema.

## Notes

- Keep the Supabase service role key out of frontend files.
- User passcodes are generated and managed through the admin page.
- If adding new trade fields, update table rendering, drawer details, CSV export, and Supabase payload handling together.
