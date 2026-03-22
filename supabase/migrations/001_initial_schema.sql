-- ॐ DIVYA: Digital Sanctum - Initial Schema Migration
-- Unified Schema for Devotee, Pandit, and Admin Modules

-- 1. Users Table (Core Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  user_type TEXT CHECK (user_type IN ('devotee', 'pandit', 'admin')),
  phone_number TEXT UNIQUE,
  preferred_language TEXT DEFAULT 'hi',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Temples Table
CREATE TABLE IF NOT EXISTS public.temples (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location_lat DOUBLE PRECISION,
  location_lng DOUBLE PRECISION,
  address TEXT,
  description TEXT,
  images TEXT[] DEFAULT '{}',
  is_verified BOOLEAN DEFAULT false,
  rating DECIMAL(2,1) DEFAULT 0.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Pandits Table
CREATE TABLE IF NOT EXISTS public.pandits (
  id UUID REFERENCES public.profiles(id) ON DELETE CASCADE PRIMARY KEY,
  temple_id UUID REFERENCES public.temples(id),
  expertise TEXT[] DEFAULT '{}',
  bio TEXT,
  years_of_experience INTEGER,
  is_online BOOLEAN DEFAULT false,
  identity_verified BOOLEAN DEFAULT false
);

-- 4. Pujas (Services)
CREATE TABLE IF NOT EXISTS public.pujas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  temple_id UUID REFERENCES public.temples(id),
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER,
  dakshina_amount DECIMAL(12,2) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  category TEXT CHECK (category IN ('Ritual', 'Sewa', 'Havan', 'Special'))
);

-- 5. Bookings (Puja Orders)
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  devotee_id UUID REFERENCES public.profiles(id),
  pandit_id UUID REFERENCES public.pandits(id),
  puja_id UUID REFERENCES public.pujas(id),
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')) DEFAULT 'pending',
  sankalp_details JSONB,
  payment_status TEXT CHECK (payment_status IN ('pending', 'escrow', 'released', 'refunded')) DEFAULT 'pending',
  razorpay_order_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Donations (Drives)
CREATE TABLE IF NOT EXISTS public.donation_drives (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  temple_id UUID REFERENCES public.temples(id),
  title TEXT NOT NULL,
  description TEXT,
  goal_amount DECIMAL(12,2) NOT NULL,
  raised_amount DECIMAL(12,2) DEFAULT 0.0,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE,
  status TEXT CHECK (status IN ('active', 'completed', 'cancelled')) DEFAULT 'active'
);

-- 7. Transparency Ledger
CREATE TABLE IF NOT EXISTS public.ledger (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  drive_id UUID REFERENCES public.donation_drives(id),
  amount DECIMAL(12,2) NOT NULL,
  entry_type TEXT CHECK (entry_type IN ('credit', 'debit')),
  description TEXT,
  receipt_url TEXT,
  verified_by_ai BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Notifications
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_drives ENABLE ROW LEVEL SECURITY;

-- Simple Policies (Expand later)
CREATE POLICY "Public profiles are visible to everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);
