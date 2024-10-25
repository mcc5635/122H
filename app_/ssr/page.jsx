import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    
    // Simulating filters and selectedFilter for this example
    const filters = ['Filter1', 'Filter2', 'Filter3', 'Filter4'];
    const selectedFilter = 'Filter1';
    const setSelectedFilter = (filter) => console.log(filter);  // Placeholder for actual setter function

    return (
      <>
        <div className="mb-5" data-testid="ssr">
          <h1 data-testid="ssr-title">Analysis</h1>
          <div data-testid="ssr-text">
            <p>
              Your biological age is 31.1, which means that your relative chronic disease risk is low overall.
            </p>
            <h3 data-testid="ssr-title">Biomarkers</h3>
            <h3 data-testid="ssr-title">Overall Health</h3>
            <h3 data-testid="ssr-title">Physician's Insights</h3>
          </div>
        </div>

        {/* New Panel Section */}
        <div style={{ padding: '20px', marginTop: '80px' }}>
          {/* Header Section */}
          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Panel</h1>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontWeight: 'bold' }}>
                See your personalized blood panel and reach out to one of our physicians for questions.
              </h2>
            </div>
            <h3 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '20px' }}>Biomarkers</h3>

            {/* Filter Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {filters.map((filter, index) => (
                <div key={index} style={{ margin: '10px' }}>
  
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  },
  { returnTo: '/ssr' }
);
