create table "public"."funnel_analytics_accounts" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now(),
    "account_id" uuid default gen_random_uuid(),
    "analysis_id" uuid default gen_random_uuid()
);


alter table "public"."funnel_analytics_accounts" enable row level security;

CREATE UNIQUE INDEX account_funnel_analytics_pkey ON public.funnel_analytics_accounts USING btree (id);

alter table "public"."funnel_analytics_accounts" add constraint "account_funnel_analytics_pkey" PRIMARY KEY using index "account_funnel_analytics_pkey";

alter table "public"."funnel_analytics_accounts" add constraint "account_funnel_analytics_account_id_fkey" FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE not valid;

alter table "public"."funnel_analytics_accounts" validate constraint "account_funnel_analytics_account_id_fkey";

alter table "public"."funnel_analytics_accounts" add constraint "account_funnel_analytics_analysis_id_fkey" FOREIGN KEY (analysis_id) REFERENCES funnel_analytics(id) ON DELETE CASCADE not valid;

alter table "public"."funnel_analytics_accounts" validate constraint "account_funnel_analytics_analysis_id_fkey";

grant delete on table "public"."funnel_analytics_accounts" to "anon";

grant insert on table "public"."funnel_analytics_accounts" to "anon";

grant references on table "public"."funnel_analytics_accounts" to "anon";

grant select on table "public"."funnel_analytics_accounts" to "anon";

grant trigger on table "public"."funnel_analytics_accounts" to "anon";

grant truncate on table "public"."funnel_analytics_accounts" to "anon";

grant update on table "public"."funnel_analytics_accounts" to "anon";

grant delete on table "public"."funnel_analytics_accounts" to "authenticated";

grant insert on table "public"."funnel_analytics_accounts" to "authenticated";

grant references on table "public"."funnel_analytics_accounts" to "authenticated";

grant select on table "public"."funnel_analytics_accounts" to "authenticated";

grant trigger on table "public"."funnel_analytics_accounts" to "authenticated";

grant truncate on table "public"."funnel_analytics_accounts" to "authenticated";

grant update on table "public"."funnel_analytics_accounts" to "authenticated";

grant delete on table "public"."funnel_analytics_accounts" to "service_role";

grant insert on table "public"."funnel_analytics_accounts" to "service_role";

grant references on table "public"."funnel_analytics_accounts" to "service_role";

grant select on table "public"."funnel_analytics_accounts" to "service_role";

grant trigger on table "public"."funnel_analytics_accounts" to "service_role";

grant truncate on table "public"."funnel_analytics_accounts" to "service_role";

grant update on table "public"."funnel_analytics_accounts" to "service_role";


