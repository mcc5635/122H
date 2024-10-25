import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import ClientButton from './clientbutton';
import OtherButton from '../asr/otherbutton';

export default withPageAuthRequired(
  async function BBBPage() {
    const { user } = await getSession();
    return (
      <>
        <div className="mb-5" data-testid="ssr">
          <h1 data-testid="ssr-title">Biomarkers</h1>
          
          <div data-testid="ssr-text">
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
              <OtherButton>All</OtherButton>
              <OtherButton>Needs Attention</OtherButton>
              <OtherButton>Moderate Risk</OtherButton>
              <OtherButton>Optimal</OtherButton>     
              <OtherButton>None</OtherButton>        
            </div>

            <h4 data-testid="ssr-title">Biometrics</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                  <ClientButton>Height</ClientButton>
                </div>
                <div>
                  <ClientButton>Weight</ClientButton>
                </div>
                <div>
                  <ClientButton>BMI</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                
            </div>
            <h4 data-testid="ssr-title">Cholesterol Panel</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                <ClientButton>Apolipoprotein B (apoB)</ClientButton>
                </div>
                <div>
                <ClientButton>Total Cholesterol</ClientButton>
                </div>
                <div>
                <ClientButton>HDL-Cholesterol</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                <ClientButton>LDL-Cholesterol</ClientButton>
                </div>
                <div>
                <ClientButton>TG:HDL-C ratio</ClientButton>
                </div>
                <div>
                <ClientButton>Triglycerides</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                <ClientButton>non-HDL-Cholesterol</ClientButton>
                </div>
                <div>
                <ClientButton>Lipoprotein(a)</ClientButton>
                </div>
            </div>

            <h4 data-testid="ssr-title">Metabolic Profile</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                <ClientButton>Fasting Insulin</ClientButton>
                </div>
                <div>
                <ClientButton>Fasting Glucose</ClientButton>
                </div>
                <div>
                <ClientButton>HbA1c</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                <ClientButton>HOMA-IR</ClientButton>
                </div>
                <div>
                <ClientButton>Estimated Average Glucose (eAG)</ClientButton>
                </div>
                <div>
                <ClientButton>Uric Acid</ClientButton>
                </div>
            </div>
            <h4 data-testid="ssr-title">Blood Profile</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                    <ClientButton>Haemoglobin</ClientButton>
                </div>
                <div>
                    <ClientButton>Red cell count</ClientButton>
                </div>
                <div>
                    <ClientButton>Haematocrit</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                    <ClientButton>MCV</ClientButton>
                </div>
                <div>
                    <ClientButton>MCH</ClientButton>
                </div>
                <div>
                    <ClientButton>MCHC</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                    <ClientButton>RDW (Red cell distribution width)</ClientButton>
                </div>
                <div>
                    <ClientButton>Platelets</ClientButton>
                </div>
                <div>
                    <ClientButton>Total White Cell Count (TWC)</ClientButton>
                </div>
            </div>

            <h4 data-testid="ssr-title">Inflammation Panel</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                    <ClientButton>High-sensitivity C-reactive Protein (hsCRP)</ClientButton>
                </div>
                <div>
                    <ClientButton>Erythrocyte sedimentation rate (ESR)</ClientButton>
                </div>
            </div>

            <h4 data-testid="ssr-title">Liver Function</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <div>
                    <ClientButton>Alanine transaminase (ALT)</ClientButton>
                </div>
                <div>
                    <ClientButton>Aspartate transaminase (AST)</ClientButton>
                </div>
                <div>
                    <ClientButton>Gamma-glutamyl transferase (GGT)</ClientButton>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div>
                    <ClientButton>Alkaline phosphatase (ALP)</ClientButton>
                </div>
                <div>
                    <ClientButton>Total bilirubin</ClientButton>
                </div>
                <div>
                    <ClientButton>Total protein</ClientButton>
                </div>
            </div>
            <h4 data-testid="ssr-title">Kidney Profile</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Cystatin C</ClientButton>
                <ClientButton>Estimated Glomerular Filtration Rate</ClientButton>
                <ClientButton>Creatinine</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>eGFRcr</ClientButton>
                <ClientButton>BUN (Urea)</ClientButton>
                <ClientButton>Sodium</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Potassium</ClientButton>
                <ClientButton>Chloride</ClientButton>
                <ClientButton>Carbon Dioxide (Bicarbonate)</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Urine Albumin-Creatinine Ratio (uACR)</ClientButton>
                <ClientButton>Urine Creatinine Random</ClientButton>
                <ClientButton>Urine Microalbumin Random</ClientButton>
            </div>

            <h4 data-testid="ssr-title">Vitamins & Minerals</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Vitamin D</ClientButton>
                <ClientButton>Folate</ClientButton>
                <ClientButton>Vitamin B12</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Homocysteine</ClientButton>
                <ClientButton>Calcium</ClientButton>
                <ClientButton>Iron</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Iron Saturation</ClientButton>
                <ClientButton>Total Iron Binding Capacity (TIBC)</ClientButton>
                <ClientButton>Ferritin</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Magnesium, RBC</ClientButton>
                <ClientButton>Corrected Calcium</ClientButton>
                <ClientButton>Methylmalonic Acid, Urine</ClientButton>
            </div>

            <h4 data-testid="ssr-title">Hormone Panel</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Free Thyroxine (T4)</ClientButton>
                <ClientButton>Triiodothyronine (T3)</ClientButton>
                <ClientButton>Thyroid Stimulating Hormone (TSH)</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Total Testosterone</ClientButton>
                <ClientButton>Estradiol</ClientButton>
                <ClientButton>Luteinizing Hormone (LH)</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Follicle-Stimulating Hormone (FSH)</ClientButton>
                <ClientButton>Sex Hormone Binding Globulin (SHBG)</ClientButton>
                <ClientButton>Cortisol</ClientButton>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>DHEA-S</ClientButton>
                <ClientButton>Cortisol:DHEA-S Ratio</ClientButton>
                <ClientButton>Free Testosterone, Direct</ClientButton>
            </div>

            <h4 data-testid="ssr-title">Cancer Screening</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Prostate Specific Antigen (PSA)</ClientButton>
            </div>
            <h4 data-testid="ssr-title">Urine Analysis</h4>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Urine Colour</ClientButton>
                <ClientButton>Urine Clarity</ClientButton>
                <ClientButton>Urine pH</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Urine Specific Gravity</ClientButton>
                <ClientButton>Urine Nitrite</ClientButton>
                <ClientButton>Urine Protein</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Urine Glucose</ClientButton>
                <ClientButton>Urine Ketones</ClientButton>
                <ClientButton>Urine Bilirubin</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Urine Leukocytes</ClientButton>
                <ClientButton>Urine Erythrocytes</ClientButton>
                <ClientButton>Urine Casts</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', marginTop: '30px' }}>
                <ClientButton>Urine Crystals</ClientButton>
                <ClientButton>Urine Bacteria</ClientButton>
                <ClientButton>Urine Yeasts</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Urine White Blood Cells</ClientButton>
                <ClientButton>Urine Red Blood Cells</ClientButton>
                <ClientButton>Urine Epithelial Cells</ClientButton>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <ClientButton>Urine Urobilinogen</ClientButton>
            </div>
          </div>
        </div>
      </>
    );
  },
  { returnTo: '/bbb' }
);
