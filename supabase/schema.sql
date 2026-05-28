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
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

create table if not exists public.user_data (
  user_id uuid primary key references public.app_users(id) on delete cascade,
  config_json jsonb not null default '{"symbols":[],"sessions":[],"accounts":[],"strategies":[],"marketTypes":[],"accountBalances":{}}'::jsonb,
  trades_json jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists app_users_role_active_idx on public.app_users(role, active);
create index if not exists user_data_updated_at_idx on public.user_data(updated_at);

alter table public.app_users enable row level security;
alter table public.user_data enable row level security;
