# TRADERS HUB

TRADERS HUB contains two independently deployable websites:

- `app/`: the private trading workspace.
- `marketing/`: the public product and community website.

Each site owns its assets and can be deployed separately without relying on files outside its publish directory.

## Repository Structure

```text
Traders-Hub/
├── app/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── assets/
│   ├── admin/
│   ├── journal/
│   ├── calculator/
│   ├── training/
│   ├── supabase/
│   └── SUPABASE_SETUP.md
├── marketing/
│   ├── index.html
│   ├── styles.css
│   ├── actual-app.css
│   ├── script.js
│   ├── assets/
│   └── images/
├── docs/
└── README.md
```

## Application

The private app combines:

- Dashboard with trading overview, news, weekly review, and training progress.
- Trade journal with filters, detailed records, discipline tracking, and personal rules.
- Account balances, equity curve, analytics, performance, and strategy breakdowns.
- CFD lot and futures contract position-size calculator.
- Economic-news calendar shown in each user's local timezone.
- Interactive training for candlesticks, FVGs, and inverse FVGs.
- User-specific Supabase storage, passcode access, trials, and admin management.

## Marketing Website

The public marketing site explains the benefits of Traders Hub, showcases genuine app screenshots, and links visitors to:

[The Traders Hub on Skool](https://www.skool.com/the-traders-hub-3376/about)

## Local Development

Start one server from the repository root:

```bash
python3 -m http.server 4174
```

Open:

```text
App:       http://127.0.0.1:4174/app/
Marketing: http://127.0.0.1:4174/marketing/
Admin:     http://127.0.0.1:4174/app/admin/
```

## Netlify Deployment

Create two Netlify sites connected to this repository.

### Application Site

```text
Publish directory: app
Suggested site name: traders-hub-app
```

### Marketing Site

```text
Publish directory: marketing
Suggested site name: traders-hub
```

No build command is required for either site.

## Supabase

All Supabase files belong to the application and live under `app/supabase/`.

Run commands from the `app` directory:

```bash
cd app
supabase functions deploy login
supabase functions deploy get-user-data
supabase functions deploy save-user-data
supabase functions deploy admin-users
supabase functions deploy reset-own-passcode
supabase functions deploy news-events
```

Or from the repository root:

```bash
supabase --workdir app functions deploy login
```

See [app/SUPABASE_SETUP.md](app/SUPABASE_SETUP.md) for setup details.

## Documentation

- [User Guide PDF](docs/TRADERS_HUB_User_Guide.pdf)
- `docs/generate_user_guide.py`: regenerates the user guide.

## Development Notes

- Keep the Supabase service-role key out of frontend files.
- Store economic-event times in UTC; the app localises them for each user.
- Marketing screenshots use the isolated `Marketing Demo` user and contain fictional data.
- When adding trade fields, update table rendering, trade details, CSV export, analytics, and Supabase payload handling together.
