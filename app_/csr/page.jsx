import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import ClientButton from './clientbutton';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    return (
      <>
        <div className="mb-5" data-testid="ssr">
          <h1 data-testid="ssr-title">Health Plan</h1>
          <h4 data-testid="ssr-title">Next Steps</h4>

          {/* Updated button-container with vertical layout */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ClientButton>Order Tests</ClientButton>
              <ClientButton>Health Report</ClientButton>
            </div>
          </div>

          <p>Your physician recommends the following next steps:</p>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '50px', marginTop: '30px' }}>
              <ClientButton>Consider repeating Vitamin D test in 3-4 months   →</ClientButton>
              <ClientButton>Reassess cholesterol levels in 3 months   →</ClientButton>
          </div>
          
          <div data-testid="ssr-text">
            <h4 data-testid="ssr-title">Recommendations</h4>

            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
              <ClientButton>All</ClientButton>
              <ClientButton>Nutrition</ClientButton>
              <ClientButton>Exercise</ClientButton>
              <ClientButton>Supplements</ClientButton>           
            </div>

            <h4 data-testid="ssr-title">List</h4>
            {/* List of recommendations */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                  <ClientButton>Consider psyllium husk for cholesterol reduction →</ClientButton>
                </div>
                <div>
                  <ClientButton>Consider red yeast rice supplements →</ClientButton>
                </div>
                <div>
                  <ClientButton>Consider vitamin D supplements daily →</ClientButton>
                </div>
                <div>
                  <ClientButton>Consider magnesium glycinate or chloride supplementation →</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                  <ClientButton>Choose fermented or low-fat dairy products →</ClientButton>
                </div>
                <div>
                  <ClientButton>Choose fish, poultry, or plant-based proteins →</ClientButton>
                </div>
                <div>
                  <ClientButton>Choose unsaturated fats for cooking instead →</ClientButton>
                </div>
                <div>
                  <ClientButton>Increase soluble fiber intake for cholesterol reduction →</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                  <ClientButton>Increase intake of magnesium-rich foods →</ClientButton>
                </div>
                <div>
                  <ClientButton>Reduce sugar intake for uric acid reduction →</ClientButton>
                </div>
                <div>
                  <ClientButton>Shift focus to resistance training for fat loss →</ClientButton>
                </div>
                <div>
                  <ClientButton>Integrate physical activity into daily activities →</ClientButton>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  },
  { returnTo: '/ssr' }
);
