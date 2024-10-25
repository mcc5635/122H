const inflammationProfile = [
    {
      name: 'High-sensitivity C-reactive Protein (hsCRP)',
      value: '0.46 mg/L',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is hsCRP?', content: 'hsCRP is a marker of inflammation in the body.' },
        { title: 'What does it assess?', content: 'It assesses inflammation, particularly in the cardiovascular system.' },
        { title: 'What does it mean to have high hsCRP?', content: 'High levels may indicate an increased risk of heart disease or chronic inflammation.' }
      ]
    },
    {
      name: 'Erythrocyte Sedimentation Rate (ESR)',
      value: '5 mm/hr',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is ESR?', content: 'ESR is a measure of how quickly red blood cells settle in a test tube.' },
        { title: 'What does it assess?', content: 'It assesses inflammation and is commonly used to detect inflammatory diseases.' },
        { title: 'What does it mean to have high ESR?', content: 'High ESR can indicate chronic inflammation or autoimmune disorders.' }
      ]
    }
];

export default inflammationProfile;