import { query } from '../../../lib/db';
import { notFound } from 'next/navigation';
import { Typography, Paper, List, ListItem } from '@mui/material';



export default async function CompanyDetails({ params }) {
  const {companyId} = await params

  if (isNaN(companyId)) {
    notFound();
  }

  // Fetch company details and its directors from the database
  const companyData = await query(
    `SELECT * FROM companies WHERE id = $1`,
    [companyId]
  );

  const directorsData = await query(
    `SELECT name FROM directors WHERE company_id = $1`,
    [companyId]
  );

  if (!companyData || companyData.length === 0) {
    notFound();
  }
  const company = companyData[0];

  const companyDetail = {
    name: company.name,
    description: company.description,
    directors: directorsData.map((director) => ({ name: director.name })),
  };

  return (
    <div className="company-detail" style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {companyDetail.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {companyDetail.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Directors:
        </Typography>
        <List>
          {companyDetail.directors.map((director, index) => (
            <ListItem key={index}>
              <Typography variant="body1">{director.name}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
