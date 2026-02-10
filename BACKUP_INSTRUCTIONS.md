# Backup & Recovery Instructions

## Database Backup (CRITICAL)

### Option 1: Supabase Dashboard Backup
1. Go to: https://supabase.com/dashboard/project/uqcdrwxyfqwtoaklreap
2. Click "Database" → "Backups"
3. Download daily backups (automatic)
4. Store them on your computer

### Option 2: Export Data as SQL
Run this in Supabase SQL Editor:
```sql
-- Export all data
COPY (SELECT * FROM projects) TO STDOUT WITH CSV HEADER;
COPY (SELECT * FROM project_documentation_steps) TO STDOUT WITH CSV HEADER;
COPY (SELECT * FROM experiences) TO STDOUT WITH CSV HEADER;
COPY (SELECT * FROM learning_milestones) TO STDOUT WITH CSV HEADER;
```

### Option 3: Automated Export Script (RECOMMENDED)
Run the included Node.js export script:
```bash
node export-to-json.js
```

This will automatically create:
- `projects.json`
- `project_documentation_steps.json`
- `experiences.json`
- `learning_milestones.json`
- `portfolio_backup_YYYY-MM-DD.json` (complete backup)

### Option 4: Browser Export Tool
Open `export-database.html` in your browser and click the buttons to download JSON files.

### Option 5: Manual API calls
Save your data locally by calling these API endpoints from your browser console:

```javascript
// Run this in your browser console on your portfolio site
const supabase = window.supabase; // if exposed, or use fetch

fetch('https://uqcdrwxyfqwtoaklreap.supabase.co/rest/v1/projects', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxY2Ryd3h5ZnF3dG9ha2xyZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDg2NzcsImV4cCI6MjA4NTI4NDY3N30.9iNBfskAhOo2VXzQsa0hTDlcauxb9xSFX0acbkkfh9E',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxY2Ryd3h5ZnF3dG9ha2xyZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDg2NzcsImV4cCI6MjA4NTI4NDY3N30.9iNBfskAhOo2VXzQsa0hTDlcauxb9xSFX0acbkkfh9E'
  }
})
.then(r => r.json())
.then(data => {
  console.log(JSON.stringify(data, null, 2));
  // Copy this output and save to projects.json
});
```

## Code Backup

### Files to Save (copy these to your computer):
- All `/src` files (React components)
- `package.json` and `package-lock.json`
- `.env` file (KEEP PRIVATE!)
- `vite.config.ts`, `tailwind.config.js`
- Database migration files (if any in `/supabase/migrations`)

### Quick Backup Script
```bash
# On your local machine, create a backup folder
mkdir portfolio-backup-$(date +%Y%m%d)
# Copy all Bolt files there
```

## Recovery Process

If I "bug out" or forget your files:

1. **Reconnect to Database**: Your data is safe in Supabase
   - Give me your Supabase URL: `https://uqcdrwxyfqwtoaklreap.supabase.co`
   - I can rebuild the frontend by querying the existing database

2. **Restore Code**: Upload your backed-up files back to Bolt
   - Or give me the .env file and tell me it's a portfolio with Projects/Experience/Learning sections

3. **Verify Data**: Run this query to check:
   ```sql
   SELECT COUNT(*) FROM projects;
   SELECT COUNT(*) FROM project_documentation_steps;
   ```

## Prevention Tips

1. **Weekly Backups**: Download your code every week
2. **Database Exports**: Export data to JSON/CSV monthly
3. **Version Control**: Set up git repository
4. **Documentation**: Keep this file updated with changes
5. **Test Recovery**: Try restoring from backup once to verify it works

## Your Current Database Info

- Project: `uqcdrwxyfqwtoaklreap`
- Tables: `projects`, `project_documentation_steps`, `experiences`, `learning_milestones`
- Current Data: 3 projects, 27 documentation steps, 3 experience entries, 4 learning milestones
- Latest Backup: portfolio_backup_2026-02-10.json (37 total records)

## Emergency Contact Info

If you lose access:
- Supabase Support: https://supabase.com/support
- This is YOUR database - you own it, not Bolt
- As long as you can log into Supabase, your data is safe
