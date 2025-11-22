/*
  # FixNaro Database Schema

  ## Overview
  This migration creates tables for the FixNaro subcontractor agency website to manage contact inquiries and subcontractor applications.

  ## New Tables
  
  ### 1. `contact_inquiries`
  Stores customer contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Customer's full name
  - `email` (text) - Customer's email address
  - `phone` (text, optional) - Customer's phone number
  - `service_type` (text, optional) - Type of service interested in
  - `message` (text) - Customer's message or inquiry
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### 2. `subcontractor_applications`
  Stores subcontractor sign-up applications
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Applicant's full name
  - `email` (text) - Applicant's email address
  - `phone` (text) - Applicant's phone number
  - `service_categories` (text[]) - Array of service categories they can provide
  - `years_experience` (integer) - Years of experience
  - `has_insurance` (boolean) - Whether they have insurance
  - `has_license` (boolean) - Whether they have required licenses
  - `availability` (text) - Their availability schedule
  - `additional_info` (text, optional) - Additional information
  - `status` (text) - Application status (pending, approved, rejected)
  - `created_at` (timestamptz) - Timestamp of application
  
  ## Security
  - Enable RLS on both tables
  - Allow public INSERT access for form submissions
  - Restrict SELECT/UPDATE/DELETE to authenticated users only (for admin access)
  
  ## Notes
  - Tables use sensible defaults for timestamps and status fields
  - RLS policies allow anonymous users to submit forms but restrict viewing to authenticated admins
*/

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create subcontractor_applications table
CREATE TABLE IF NOT EXISTS subcontractor_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_categories text[] NOT NULL,
  years_experience integer NOT NULL,
  has_insurance boolean DEFAULT false,
  has_license boolean DEFAULT false,
  availability text NOT NULL,
  additional_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcontractor_applications ENABLE ROW LEVEL SECURITY;

-- Contact inquiries policies
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Subcontractor applications policies
CREATE POLICY "Anyone can submit subcontractor applications"
  ON subcontractor_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subcontractor applications"
  ON subcontractor_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update subcontractor applications"
  ON subcontractor_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);