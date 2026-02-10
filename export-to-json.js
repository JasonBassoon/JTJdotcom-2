import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPABASE_URL = 'https://uqcdrwxyfqwtoaklreap.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxY2Ryd3h5ZnF3dG9ha2xyZWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDg2NzcsImV4cCI6MjA4NTI4NDY3N30.9iNBfskAhOo2VXzQsa0hTDlcauxb9xSFX0acbkkfh9E';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function exportTable(tableName, fileName) {
  console.log(`Exporting ${tableName}...`);

  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;

    const filePath = join(__dirname, fileName);
    writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`✓ Exported ${data.length} records to ${fileName}`);
    return data;
  } catch (error) {
    console.error(`✗ Error exporting ${tableName}:`, error.message);
    throw error;
  }
}

async function exportAll() {
  console.log('Starting database export...\n');

  const tables = [
    { name: 'projects', file: 'projects.json' },
    { name: 'project_documentation_steps', file: 'project_documentation_steps.json' },
    { name: 'experiences', file: 'experiences.json' },
    { name: 'learning_milestones', file: 'learning_milestones.json' }
  ];

  const allData = {};
  let totalRecords = 0;

  for (const table of tables) {
    const data = await exportTable(table.name, table.file);
    allData[table.name] = data;
    totalRecords += data.length;
  }

  const timestamp = new Date().toISOString().split('T')[0];
  const backupFile = `portfolio_backup_${timestamp}.json`;
  writeFileSync(join(__dirname, backupFile), JSON.stringify(allData, null, 2));

  console.log(`\n✓ Complete backup saved to ${backupFile}`);
  console.log(`✓ Total: ${totalRecords} records exported`);
}

exportAll().catch(console.error);
