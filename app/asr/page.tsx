import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import ClientButton from './clientbutton';
import OtherButton from './otherbutton';
import BiomarkerButton from './biomarkerbutton';
import ReadMoreButton from './readmorebutton';
import { faCheckCircle, faExclamationTriangle, faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faBone, faTint, faShieldAlt, faMicroscope, faFilter, faVial, faBrain, faFireAlt, faCapsules, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

export default withPageAuthRequired(
  async function ASRPage() {
    const { user } = await getSession();
    return (
      <>
        <div className="mb-5" data-testid="ssr">
          <h1 data-testid="ssr-title">Analysis</h1>
          <p>Your biological age is 31.1, which means that your relative chronic disease risk is low overall.</p>

          {/* Biomarker Progress Bar */}
          <div style={{ margin: '30px 0' }}>
            <h3>Biomarkers</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ClientButton>Biological Age Calculation</ClientButton>
            </div>
          </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            
          <BiomarkerButton 
            icon={<FontAwesomeIcon icon={faHeart} />} 
            count={107} 
            color="blue"
          >
            Biomarkers
          </BiomarkerButton>

          <BiomarkerButton 
            icon={<FontAwesomeIcon icon={faExclamationTriangle} />} 
            count={2} 
            color="orange"
          >
            Needs Attention
          </BiomarkerButton>

          <BiomarkerButton 
            icon={<FontAwesomeIcon icon={faCheckCircle} />} 
            count={81} 
            color="green"
          >
            Optimal
          </BiomarkerButton>

          <BiomarkerButton 
            icon={<FontAwesomeIcon icon={faTimesCircle} />} 
            count={6} 
            color="red"
          >
            None
          </BiomarkerButton>
            </div>

            {/* Progress Bar */}
            <div style={{ display: 'flex', height: '20px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
            <div style={{
                background: 'linear-gradient(90deg, #FF4C4C 0%, #CC0000 100%)', 
                width: '2%',
                height: '100%',
            }}></div>
            <div style={{
                background: 'linear-gradient(90deg, #FF8C00 0%, #CC7000 100%)', 
                width: '17%',
                height: '100%',
            }}></div>
            <div style={{
                background: 'linear-gradient(90deg, #43A047 0%, #2E7D32 100%)', 
                width: '76%',
                height: '100%',
            }}></div>
            <div style={{
                background: 'linear-gradient(90deg, #B0B0B0 0%, #8C8C8C 100%)', 
                width: '5%',
                height: '100%',
            }}></div>
        </div>
          <h3 data-testid="ssr-title">Overall Health</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '30px', marginTop: '30px' }}>
            <OtherButton 
                icon={<FontAwesomeIcon icon={faDumbbell} />} 
                count={''} 
                color="green"
              >
                Fitness
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faBone} />} 
                count={''} 
                color="orange"
              >
                Bone Health
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faTint} />} 
                count={''} 
                color="red"
              >
                Blood
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faShieldAlt} />} 
                count={''} 
                color="blue"
              >
                Immune Regulation
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faMicroscope} />} 
                count={''} 
                color="purple"
              >
                Cancer Risk and Detection
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faFilter} />} 
                count={''} 
                color="teal"
              >
                Kidney Health
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faVial} />} 
                count={''} 
                color="brown"
              >
                Liver Health
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faVial} />} 
                count={''} 
                color="pink"
              >
                Hormonal Health
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faBrain} />} 
                count={''} 
                color="yellow"
              >
                Brain and Nerves
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faFireAlt} />} 
                count={''} 
                color="orange"
              >
                Metabolism
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faCapsules} />} 
                count={''} 
                color="blue"
              >
                Vitamins and Minerals
              </OtherButton>

              <OtherButton 
                icon={<FontAwesomeIcon icon={faHeartbeat} />} 
                count={''} 
                color="red"
              >
                Blood Vessels and Heart
              </OtherButton>
          </div>

          <h3 data-testid="ssr-title">Physician's Insights</h3>
          <p>See your personalized blood panel and reach out to one of our physicians for questions.</p>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '50px', marginTop: '10px' }}>
              <ReadMoreButton>Consider repeating Vitamin D test in 3-4 months</ReadMoreButton>
              <ReadMoreButton>Reassess cholesterol levels in 3 months</ReadMoreButton>
          </div>          
        </div>
        </div>
      </>
    );
  },
  { returnTo: '/asr' }
);
