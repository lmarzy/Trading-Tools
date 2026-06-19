create extension if not exists pgcrypto;

create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  first_name text,
  last_name text,
  email text,
  role text not null default 'user' check (role in ('user', 'admin')),
  passcode_hash text not null unique,
  passcode_code text,
  active boolean not null default true,
  trial_enabled boolean not null default false,
  trial_weeks integer check (trial_weeks is null or trial_weeks between 1 and 4),
  trial_started_at timestamptz,
  trial_ends_at timestamptz,
  disabled_reason text,
  feature_access jsonb not null default '{"journal":true,"backtesting":false,"calculator":true,"training":false,"challenges":false}'::jsonb,
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

alter table public.app_users alter column feature_access set default '{"journal":true,"backtesting":false,"calculator":true,"training":false,"challenges":false}'::jsonb;

create table if not exists public.user_data (
  user_id uuid primary key references public.app_users(id) on delete cascade,
  config_json jsonb not null default '{"symbols":[],"symbolsByMarket":{"CFD":[],"Futures":[]},"symbolMarketMap":{},"sessions":[],"trackSessions":false,"accounts":[],"strategies":[],"marketTypes":[],"accountBalances":{},"accountSettings":{},"checklistRules":[],"automatedRules":[],"blockedTradingDays":[],"weeklyPlans":{},"weeklyReviews":{},"trainingProgress":{}}'::jsonb,
  trades_json jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.news_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_time timestamptz not null,
  currency text not null default 'USD',
  impact text not null default 'High' check (impact in ('High', 'Medium', 'Low')),
  notes text,
  source_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orb_backtests (
  id uuid primary key default gen_random_uuid(),
  symbol text not null,
  session text,
  model text not null,
  range_timeframe text not null,
  break_timeframe text not null,
  import_id uuid,
  import_name text,
  test_date date,
  target_points numeric,
  range_value numeric,
  first_candle_direction text,
  overall_bias text,
  time_to_break text,
  break_direction text,
  break_amount numeric,
  next_candle_reaction text,
  next_candle_pullback numeric,
  result text,
  flip text,
  flip_result text,
  created_by uuid references public.app_users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.orb_backtests add column if not exists target_points numeric;
alter table public.orb_backtests add column if not exists import_id uuid;
alter table public.orb_backtests add column if not exists session text;

create table if not exists public.challenges (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.app_users(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'draft' check (status in ('draft', 'active', 'complete', 'cancelled')),
  challenge_type text not null default 'custom',
  ranking_method text not null default 'profit_percentage',
  rules_json jsonb not null default '{}'::jsonb,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.challenge_members (
  challenge_id uuid not null references public.challenges(id) on delete cascade,
  user_id uuid not null references public.app_users(id) on delete cascade,
  invited_by uuid not null references public.app_users(id) on delete cascade,
  invitation_status text not null default 'pending' check (invitation_status in ('pending', 'accepted', 'declined', 'removed')),
  invited_at timestamptz not null default now(),
  responded_at timestamptz,
  primary key (challenge_id, user_id)
);

create index if not exists app_users_role_active_idx on public.app_users(role, active);
create index if not exists user_data_updated_at_idx on public.user_data(updated_at);
create index if not exists news_events_time_active_idx on public.news_events(event_time, active);
create index if not exists orb_backtests_symbol_model_idx on public.orb_backtests(symbol, model, range_timeframe);
create index if not exists challenges_creator_idx on public.challenges(creator_id, created_at);
create index if not exists challenge_members_user_idx on public.challenge_members(user_id, invitation_status);

alter table public.app_users enable row level security;
alter table public.user_data enable row level security;
alter table public.news_events enable row level security;
alter table public.orb_backtests enable row level security;
alter table public.challenges enable row level security;
alter table public.challenge_members enable row level security;
