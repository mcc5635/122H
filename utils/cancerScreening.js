const cancerScreenings = [
    {
      name: 'Fecal Occult Blood Test (FOBT)',
      value: 'Negative',
      status: 'Optimal',
      details: [
        { title: 'What is FOBT?', content: 'It detects hidden blood in the stool, which can be a sign of colorectal cancer.' },
        { title: 'What does it assess?', content: 'It assesses the presence of blood in the stool, often used for early cancer detection.' },
        { title: 'What does a positive result mean?', content: 'A positive result may indicate polyps or colorectal cancer.' }
      ]
    },
    {
      name: 'Prostate Specific Antigen (PSA)',
      value: '0.35 µg/L',
      status: 'Optimal',
      details: [
        { title: 'What is PSA?', content: 'PSA is a protein produced by the prostate gland, used as a marker for prostate health.' },
        { title: 'What does it assess?', content: 'It measures PSA levels in the blood to detect prostate cancer.' },
        { title: 'What does a high PSA level mean?', content: 'High PSA levels may indicate prostate cancer or other prostate conditions.' }
      ]
    },
];

export default cancerScreenings;