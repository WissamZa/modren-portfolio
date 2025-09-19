
-- Create function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for tables with updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE
    ON projects FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_about_sections_updated_at BEFORE UPDATE
    ON about_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE
    ON site_settings FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

ALTER TABLE projects ADD COLUMN slug text UNIQUE;

UPDATE projects SET slug = lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) WHERE slug IS NULL;

ALTER TABLE projects ADD COLUMN locale TEXT DEFAULT 'en';

CREATE UNIQUE INDEX idx_projects_slug_locale ON projects(slug, locale);