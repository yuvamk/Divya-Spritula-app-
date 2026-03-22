-- 001_enable_extensions.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 002_users.sql
CREATE TABLE public.user_profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role            TEXT NOT NULL DEFAULT 'devotee'
                    CHECK (role IN ('devotee', 'pandit', 'super_admin')),
  full_name       TEXT NOT NULL,
  phone           TEXT UNIQUE,
  avatar_url      TEXT,
  preferred_lang  TEXT NOT NULL DEFAULT 'hi'
                    CHECK (preferred_lang IN ('hi','en','ta','te','kn','mr','bn','gu')),
  gotra           TEXT,
  nakshatra       TEXT,
  rashi           TEXT,
  occupation      TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own profile" ON public.user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.user_profiles FOR UPDATE USING (auth.uid() = id);

-- 003_temples.sql
CREATE TABLE public.temples (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pandit_id       UUID NOT NULL REFERENCES public.user_profiles(id),
  name            TEXT NOT NULL,
  name_hi         TEXT,
  description     TEXT,
  deity           TEXT,
  address         TEXT,
  village         TEXT,
  district        TEXT,
  state           TEXT,
  pincode         TEXT,
  location        GEOGRAPHY(POINT, 4326),
  cover_photo_url TEXT,
  photo_urls      TEXT[] DEFAULT '{}',
  is_verified     BOOLEAN DEFAULT FALSE,
  is_active       BOOLEAN DEFAULT TRUE,
  qr_code_url     TEXT,
  qr_token        TEXT UNIQUE DEFAULT uuid_generate_v4()::text,
  devotee_count   INTEGER DEFAULT 0,
  rating          NUMERIC(3,2) DEFAULT 0,
  review_count    INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_temples_pandit ON public.temples(pandit_id);
CREATE INDEX idx_temples_location ON public.temples USING GIST(location);
CREATE INDEX idx_temples_qr_token ON public.temples(qr_token);

ALTER TABLE public.temples ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read active temples" ON public.temples FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Pandit can manage own temple" ON public.temples FOR ALL USING (pandit_id = auth.uid());

-- 004_temple_members.sql
CREATE TABLE public.temple_members (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id       UUID NOT NULL REFERENCES public.temples(id) ON DELETE CASCADE,
  user_id         UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  family_size     INTEGER DEFAULT 1,
  village         TEXT,
  joined_via      TEXT DEFAULT 'qr' CHECK (joined_via IN ('qr', 'search', 'invite', 'admin')),
  is_active       BOOLEAN DEFAULT TRUE,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(temple_id, user_id)
);

ALTER TABLE public.temple_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Temple pandit can see all members" ON public.temple_members FOR SELECT USING (EXISTS (SELECT 1 FROM public.temples t WHERE t.id = temple_id AND t.pandit_id = auth.uid()));
CREATE POLICY "Members can see their own record" ON public.temple_members FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can join temples" ON public.temple_members FOR INSERT WITH CHECK (user_id = auth.uid());

-- 005_donation_drives.sql
CREATE TABLE public.donation_drives (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id       UUID NOT NULL REFERENCES public.temples(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  title_hi        TEXT,
  description     TEXT,
  puja_type       TEXT,
  cover_photo_url TEXT,
  target_amount   NUMERIC(12,2) NOT NULL,
  raised_amount   NUMERIC(12,2) DEFAULT 0,
  min_donation    NUMERIC(10,2) DEFAULT 1,
  deadline        DATE,
  event_date      TIMESTAMPTZ,
  event_location  TEXT,
  status          TEXT DEFAULT 'active' CHECK (status IN ('draft','active','completed','cancelled')),
  note_for_donors TEXT,
  created_by      UUID REFERENCES public.user_profiles(id),
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.donation_drives ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active drives" ON public.donation_drives FOR SELECT USING (status != 'draft');

-- 006_donations.sql
CREATE TABLE public.donations (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  drive_id            UUID NOT NULL REFERENCES public.donation_drives(id),
  temple_id           UUID NOT NULL REFERENCES public.temples(id),
  donor_id            UUID REFERENCES public.user_profiles(id),
  amount              NUMERIC(12,2) NOT NULL,
  currency            TEXT DEFAULT 'INR',
  is_anonymous        BOOLEAN DEFAULT FALSE,
  payment_method      TEXT,
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT UNIQUE,
  razorpay_signature  TEXT,
  status              TEXT DEFAULT 'pending' CHECK (status IN ('pending','captured','failed','refunded')),
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Donor can see own donations" ON public.donations FOR SELECT USING (donor_id = auth.uid());

-- 008_pandits.sql
CREATE TABLE public.pandit_profiles (
  id                UUID PRIMARY KEY REFERENCES public.user_profiles(id),
  display_name      TEXT NOT NULL,
  bio               TEXT,
  bio_hi            TEXT,
  experience_years  INTEGER DEFAULT 0,
  specialisations   TEXT[] DEFAULT '{}',
  languages         TEXT[] DEFAULT '{}',
  cities_served     TEXT[] DEFAULT '{}',
  is_verified       BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMPTZ,
  rating            NUMERIC(3,2) DEFAULT 0,
  total_pujas       INTEGER DEFAULT 0,
  review_count      INTEGER DEFAULT 0,
  base_price        NUMERIC(10,2),
  photo_url         TEXT,
  is_available      BOOLEAN DEFAULT TRUE,
  accepts_remote    BOOLEAN DEFAULT TRUE,
  accepts_home      BOOLEAN DEFAULT TRUE,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- (Adding rest in the next call due to size)
