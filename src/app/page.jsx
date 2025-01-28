import { query } from '../lib/db';
import Link from 'next/link';
import { Grid2, List, ListItem, Typography, Paper } from '@mui/material';




export default async function Home() {
  // Fetch company data from PostgreSQL
  const companies = await query('SELECT id, name FROM companies');

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>Select a company:</Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid2 container spacing={2} >
          {companies.map((company) => (
            <Grid2  xs={12} sm={6} md={4} key={company.id}>
              <List>
                <ListItem style={{ paddingLeft: 0 }}>
                  <Link href={`/companies/${company.id}`}>
                    <Typography variant="h6">{company.name}</Typography>
                  </Link>
                </ListItem>
              </List>
            </Grid2>
          ))}
        </Grid2>
      </Paper>
    </div>
  );
}
