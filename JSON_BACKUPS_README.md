# JSON Database Backups

This directory contains JSON backups of your Supabase database tables.

## Available Backup Files

### Individual Table Backups
- **projects.json** - 3 portfolio projects (Home SOC Lab, Linux System Hardening, Portfolio Website)
- **project_documentation_steps.json** - 27 detailed documentation steps for projects
- **experiences.json** - 3 professional experience entries
- **learning_milestones.json** - 4 learning progress records (Security+, TryHackMe, Python, AWS)

### Complete Backup
- **portfolio_backup_YYYY-MM-DD.json** - Combined backup of all tables with timestamp

## How to Use These Backups

### Viewing Your Data
Simply open any JSON file in a text editor to view your data.

### Restoring to Supabase
If you need to restore data to Supabase:

1. Log into Supabase Dashboard: https://supabase.com/dashboard
2. Go to SQL Editor
3. Use INSERT statements to restore data, for example:

```sql
-- Restore a project
INSERT INTO projects (id, title, description, tech_stack, ...)
VALUES ('...', '...', '...', ARRAY['...'], ...);
```

### Creating a New Database from Backup
If you need to rebuild your database from scratch:

1. Create tables using the schema (see your migration files or table definitions)
2. Import data from JSON files using Supabase SQL Editor or the JavaScript client

## Automated Backup Process

To create a fresh backup anytime:

```bash
node export-to-json.js
```

This will:
- Export all current data from your Supabase database
- Create/update individual JSON files for each table
- Generate a timestamped complete backup file

## Backup Schedule Recommendations

1. **After major updates** - Run backup after adding/editing significant content
2. **Weekly routine** - Schedule weekly backups to catch regular updates
3. **Before migrations** - Always backup before database schema changes
4. **Before major deployments** - Backup before pushing to production

## File Safety

- These JSON files are READ-ONLY backups
- Your live data is always in Supabase
- Keep these files in version control or cloud storage for redundancy
- DO NOT commit `.env` file with these backups

## Recovery Instructions

See `BACKUP_INSTRUCTIONS.md` for complete recovery procedures.

## Last Updated

- Backup Date: 2026-02-10
- Total Records: 37 (3 projects, 27 steps, 3 experiences, 4 milestones)
- Database: uqcdrwxyfqwtoaklreap.supabase.co
