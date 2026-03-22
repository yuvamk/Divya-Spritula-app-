-- 009_puja_services.sql
CREATE TABLE public.puja_services (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id      UUID REFERENCES public.temples(id),
  pandit_id      UUID NOT NULL REFERENCES public.pandit_profiles(id),
  puja_name      TEXT NOT NULL,
  puja_name_hi   TEXT,
  puja_type      TEXT NOT NULL,
  description    TEXT,
  duration_hours NUMERIC(4,1),
  base_price     NUMERIC(10,2) NOT NULL,
  prasad_price   NUMERIC(10,2) DEFAULT 0,
  bhog_price     NUMERIC(10,2) DEFAULT 0,
  is_remote      BOOLEAN DEFAULT TRUE,
  is_home        BOOLEAN DEFAULT TRUE,
  requires_sankalp BOOLEAN DEFAULT TRUE,
  is_active      BOOLEAN DEFAULT TRUE,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- 010_puja_bookings.sql
CREATE TABLE public.puja_bookings (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_type        TEXT NOT NULL CHECK (booking_type IN ('remote', 'home')),
  service_id          UUID REFERENCES public.puja_services(id),
  pandit_id           UUID NOT NULL REFERENCES public.pandit_profiles(id),
  temple_id           UUID REFERENCES public.temples(id),
  devotee_id          UUID NOT NULL REFERENCES public.user_profiles(id),
  sankalp_name        TEXT NOT NULL,
  sankalp_gotra       TEXT,
  sankalp_nakshatra   TEXT,
  sankalp_rashi       TEXT,
  sankalp_father_name TEXT,
  sankalp_purpose     TEXT,
  family_names        TEXT[] DEFAULT '{}',
  special_wish        TEXT,
  scheduled_date      DATE NOT NULL,
  scheduled_time_slot TEXT,
  scheduled_at        TIMESTAMPTZ,
  muhurat_note        TEXT,
  home_address        TEXT,
  home_city           TEXT,
  home_pincode        TEXT,
  home_location       GEOGRAPHY(POINT,4326),
  wants_prasad        BOOLEAN DEFAULT TRUE,
  prasad_address      TEXT,
  prasad_pincode      TEXT,
  prasad_type         TEXT DEFAULT 'standard',
  status              TEXT DEFAULT 'pending'
                        CHECK (status IN (
                          'pending','pandit_accepted','scheduled',
                          'puja_in_progress','puja_completed',
                          'proof_uploaded','prasad_dispatched',
                          'prasad_delivered','payment_released',
                          'cancelled','refunded'
                        )),
  puja_amount         NUMERIC(10,2) NOT NULL,
  prasad_amount       NUMERIC(10,2) DEFAULT 0,
  delivery_amount     NUMERIC(10,2) DEFAULT 0,
  platform_fee        NUMERIC(10,2) DEFAULT 0,
  total_amount        NUMERIC(10,2) NOT NULL,
  currency            TEXT DEFAULT 'INR',
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT,
  payment_status      TEXT DEFAULT 'pending'
                        CHECK (payment_status IN ('pending','paid','released','refunded')),
  payment_released_at TIMESTAMPTZ,
  escrow_release_at   TIMESTAMPTZ,
  puja_video_url      TEXT,
  proof_photo_urls    TEXT[] DEFAULT '{}',
  expense_notes       TEXT,
  pandit_notes        TEXT,
  courier_name        TEXT,
  courier_tracking_id TEXT,
  courier_tracking_url TEXT,
  dispatched_at       TIMESTAMPTZ,
  delivered_at          TIMESTAMPTZ,
  devotee_rating      INTEGER CHECK (devotee_rating BETWEEN 1 AND 5),
  devotee_review      TEXT,
  reviewed_at         TIMESTAMPTZ,
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- 011_pandit_availability.sql
CREATE TABLE public.pandit_availability (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pandit_id   UUID NOT NULL REFERENCES public.pandit_profiles(id),
  date        DATE NOT NULL,
  slot        TEXT NOT NULL CHECK (slot IN ('morning','afternoon','evening','full_day')),
  is_booked   BOOLEAN DEFAULT FALSE,
  booking_id  UUID REFERENCES public.puja_bookings(id),
  UNIQUE(pandit_id, date, slot)
);

-- 012_reviews.sql
CREATE TABLE public.reviews (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pandit_id   UUID NOT NULL REFERENCES public.pandit_profiles(id),
  booking_id  UUID UNIQUE REFERENCES public.puja_bookings(id),
  reviewer_id UUID NOT NULL REFERENCES public.user_profiles(id),
  rating      INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  puja_type   TEXT,
  review_text TEXT,
  is_visible  BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 013_announcements.sql
CREATE TABLE public.announcements (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id   UUID NOT NULL REFERENCES public.temples(id) ON DELETE CASCADE,
  pandit_id   UUID NOT NULL REFERENCES public.user_profiles(id),
  title       TEXT NOT NULL,
  body        TEXT NOT NULL,
  photo_url   TEXT,
  pranam_count INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 015_live_streams.sql
CREATE TABLE public.live_streams (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id     UUID NOT NULL REFERENCES public.temples(id),
  pandit_id     UUID NOT NULL REFERENCES public.user_profiles(id),
  title         TEXT NOT NULL,
  stream_key    TEXT UNIQUE,
  playback_url  TEXT,
  thumbnail_url TEXT,
  status        TEXT DEFAULT 'scheduled'
                  CHECK (status IN ('scheduled','live','ended')),
  viewer_count  INTEGER DEFAULT 0,
  scheduled_at  TIMESTAMPTZ,
  started_at    TIMESTAMPTZ,
  ended_at      TIMESTAMPTZ,
  recording_url TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 016_notifications.sql
CREATE TABLE public.notifications (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  type        TEXT NOT NULL,
  title       TEXT NOT NULL,
  body        TEXT NOT NULL,
  data        JSONB DEFAULT '{}',
  is_read     BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 017_push_tokens.sql
CREATE TABLE public.push_tokens (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  token       TEXT NOT NULL UNIQUE,
  platform    TEXT CHECK (platform IN ('ios','android')),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, token)
);

-- 018_triggers.sql
CREATE OR REPLACE FUNCTION update_temple_devotee_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.temples
  SET devotee_count = (
    SELECT COUNT(*) FROM public.temple_members
    WHERE temple_id = COALESCE(NEW.temple_id, OLD.temple_id) AND is_active = TRUE
  )
  WHERE id = COALESCE(NEW.temple_id, OLD.temple_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_temple_devotee_count
  AFTER INSERT OR UPDATE OR DELETE ON public.temple_members
  FOR EACH ROW EXECUTE FUNCTION update_temple_devotee_count();
