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
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

create table if not exists public.user_data (
  user_id uuid primary key references public.app_users(id) on delete cascade,
  config_json jsonb not null default '{"symbols":[],"sessions":[],"accounts":[],"strategies":[],"marketTypes":[],"accountBalances":{}}'::jsonb,
  trades_json jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id bigserial primary key,
  event text not null,
  actor_user_id uuid references public.app_users(id) on delete set null,
  target_user_id uuid references public.app_users(id) on delete set null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists app_users_role_active_idx on public.app_users(role, active);
create index if not exists user_data_updated_at_idx on public.user_data(updated_at);
create index if not exists audit_logs_created_at_idx on public.audit_logs(created_at desc);
create index if not exists audit_logs_actor_user_id_idx on public.audit_logs(actor_user_id);
create index if not exists audit_logs_target_user_id_idx on public.audit_logs(target_user_id);

alter table public.app_users enable row level security;
alter table public.user_data enable row level security;
alter table public.audit_logs enable row level security;
