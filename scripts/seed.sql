-- Flowva Database Schema and Seed Data
-- Run this in your Supabase SQL Editor

-- ============================================
-- SCHEMA
-- ============================================

-- Enable RLS
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  flow_coins INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tools catalog
CREATE TABLE IF NOT EXISTS public.tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  icon_url TEXT,
  website_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User's saved tools
CREATE TABLE IF NOT EXISTS public.user_tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  tool_id UUID REFERENCES public.tools(id) ON DELETE CASCADE,
  notes TEXT,
  is_favorite BOOLEAN DEFAULT FALSE,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, tool_id)
);

-- Rewards history
CREATE TABLE IF NOT EXISTS public.rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Profiles are created on signup" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Tools policies (everyone can read)
CREATE POLICY "Anyone can view tools" ON public.tools
  FOR SELECT TO authenticated, anon USING (true);

-- User tools policies
CREATE POLICY "Users can view their own tools" ON public.user_tools
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can add tools to their library" ON public.user_tools
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their tools" ON public.user_tools
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can remove tools from their library" ON public.user_tools
  FOR DELETE USING (auth.uid() = user_id);

-- Rewards policies
CREATE POLICY "Users can view their own rewards" ON public.rewards
  FOR SELECT USING (auth.uid() = user_id);

-- Newsletter policies
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers
  FOR INSERT TO authenticated, anon WITH CHECK (true);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, flow_coins)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    100  -- Welcome bonus
  );
  
  -- Add welcome reward
  INSERT INTO public.rewards (user_id, amount, reason)
  VALUES (NEW.id, 100, 'Welcome bonus for joining Flowva!');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to award coins when adding a tool
CREATE OR REPLACE FUNCTION public.award_tool_coins()
RETURNS TRIGGER AS $$
BEGIN
  -- Award 10 coins for adding a tool
  UPDATE public.profiles
  SET flow_coins = flow_coins + 10
  WHERE id = NEW.user_id;
  
  -- Log the reward
  INSERT INTO public.rewards (user_id, amount, reason)
  VALUES (NEW.user_id, 10, 'Added a tool to library');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for adding tools
DROP TRIGGER IF EXISTS on_tool_added ON public.user_tools;
CREATE TRIGGER on_tool_added
  AFTER INSERT ON public.user_tools
  FOR EACH ROW EXECUTE FUNCTION public.award_tool_coins();

-- ============================================
-- SEED DATA
-- ============================================

-- Insert sample tools
INSERT INTO public.tools (name, description, category, icon_url, website_url, is_featured) VALUES
  ('Canva', 'Design platform for creating visual content like presentations, social media graphics, and more', 'Design', '🎨', 'https://canva.com', true),
  ('ChatGPT', 'AI assistant for conversations, content generation, coding help, and creative tasks', 'AI', '🤖', 'https://chat.openai.com', true),
  ('Zoom', 'Video conferencing platform for virtual meetings, webinars, and team collaboration', 'Communication', '📹', 'https://zoom.us', true),
  ('Notion', 'All-in-one workspace for notes, docs, wikis, and project management', 'Productivity', '📝', 'https://notion.so', true),
  ('Slack', 'Team communication and messaging platform for workplace collaboration', 'Communication', '💬', 'https://slack.com', false),
  ('Figma', 'Collaborative design and prototyping tool for UI/UX designers', 'Design', '🎯', 'https://figma.com', true),
  ('Spotify', 'Music streaming service for focus playlists and background music', 'Entertainment', '🎵', 'https://spotify.com', false),
  ('Trello', 'Kanban-style project management and task organization tool', 'Productivity', '📋', 'https://trello.com', false),
  ('GitHub', 'Code hosting platform for version control and collaboration', 'Development', '💻', 'https://github.com', true),
  ('Linear', 'Modern issue tracking and project management for software teams', 'Productivity', '📊', 'https://linear.app', false),
  ('Miro', 'Online whiteboard platform for creative team collaboration', 'Design', '🖼️', 'https://miro.com', false),
  ('Loom', 'Video messaging tool for asynchronous communication', 'Communication', '🎬', 'https://loom.com', false),
  ('Airtable', 'Spreadsheet-database hybrid for flexible data management', 'Productivity', '📑', 'https://airtable.com', false),
  ('Grammarly', 'AI-powered writing assistant for grammar and style', 'Writing', '✍️', 'https://grammarly.com', true),
  ('1Password', 'Password manager for secure credential storage', 'Security', '🔐', 'https://1password.com', false),
  ('Calendly', 'Scheduling automation for meetings and appointments', 'Productivity', '📅', 'https://calendly.com', false),
  ('Zapier', 'Automation platform connecting apps and workflows', 'Automation', '⚡', 'https://zapier.com', true),
  ('Webflow', 'No-code website builder for designers', 'Design', '🌐', 'https://webflow.com', false),
  ('Superhuman', 'Fast email client for power users', 'Productivity', '📧', 'https://superhuman.com', false),
  ('Raycast', 'Productivity launcher for macOS power users', 'Productivity', '🚀', 'https://raycast.com', false)
ON CONFLICT DO NOTHING;
