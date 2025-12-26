# Flowvahub - Rewards Platform

A full-stack recreation of the Flowvahub Rewards page, built as part of a technical assessment. This project demonstrates seamless integration between a React frontend and a Supabase backend to manage user authentication, real-time database queries, and automated reward logic.

## 🚀 Live Demo
**URL:** [https://flowva-rewards.vercel.app](https://flowva-rewards.vercel.app) *(Note: User must update this with actual deployment URL)*

## ✨ Key Features
- **Secure Authentication**: Handles Sign Up, Login, and Sign Out using Supabase Auth.
- **Dynamic Rewards Dashboard**: Real-time visualization of FlowCoin balance, total earnings, and total spending.
- **Transaction History**: An activity feed showing the 20 most recent reward transactions.
- **Automated Reward System**: Implemented via PostgreSQL triggers in the database to award coins automatically when users interact with the platform.
- **Responsive UI**: A premium, "sticky" navigation system designed for maximum accessibility and functional aesthetics.
- **Robust State Handling**: Full implementation of Loading states, Empty states (for new accounts), and Error feedback.

## 🏗️ Supabase Implementation Details
This project goes beyond simple CRUD operations to showcase a "meaningful" use of Supabase:
1.  **Auth Hooks**: Connected to a custom `AuthProvider` context managing user sessions and profile states app-wide.
2.  **Database Triggers**: The `rewards` logic is decupled from the frontend. Adding a tool to the library automatically triggers a PostgreSQL function that updates the user's `flow_coins` balance and logs a transaction record.
3.  **Row Level Security (RLS)**: Strictly enforced policies ensure users can only view their own rewards and profile data.

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/flowvahub.git
cd flowvahub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

### 4. Database Setup
Run the SQL schema found in `scripts/seed.sql` within your Supabase SQL Editor. This will:
- Create the `profiles`, `tools`, `user_tools`, and `rewards` tables.
- Enable RLS on all tables.
- Enable the triggers for automated reward awarding.

### 5. Run Locally
```bash
npm run dev
```

## 📝 Trade-offs & Assumptions
- **Trade-off: Server-side vs Client-side logic**: I chose to implement the reward logic using Database Triggers. While this requires more backend setup, it ensures data integrity (users can't manually "tell" the app they earned coins via the client) and keeps the React code clean.
- **Assumption: Profile Extensibility**: I assumed the `auth.users` table would be extended via a `public.profiles` table to store application-specific data like `flow_coins`.
- **UI Decision**: I made the navigation bar sticky (unlike the original design) because I wanted users to have easy access to tools at all times, prioritizing functionality alongside aesthetics.

---
*Created for the Flowvahub Technical Assessment.*
