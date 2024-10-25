const vitaminsandminerals = [
    {
      name: 'Vitamin D',
      value: '21.6 ng/mL',
      status: 'Low Risk',
      progress: 50,
      details: [
        { title: 'What is Vitamin D?', content: 'Vitamin D is essential for maintaining bone health by helping the body absorb calcium.' },
        { title: 'What does it assess?', content: 'It assesses your body’s Vitamin D levels, which is critical for bone and immune health.' },
        { title: 'What does it mean to have low Vitamin D?', content: 'Low Vitamin D levels can lead to weakened bones and immune function.' }
      ]
    },
    {
      name: 'Folate (Vitamin B9)',
      value: '31.9365 nmol/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is Folate?', content: 'Folate, or Vitamin B9, is important for DNA synthesis, cell division, and red blood cell formation.' },
        { title: 'What does it assess?', content: 'It assesses your folate levels, helping to determine risks of anemia and birth defects in pregnancy.' },
        { title: 'What does it mean to have low Folate?', content: 'Low folate levels can cause fatigue, anemia, and neural tube defects in pregnancy.' }
      ]
    },
    {
      name: 'Vitamin B12',
      value: '328.6 pmol/L',
      status: 'Optimal',
      progress: 85,
      details: [
        { title: 'What is Vitamin B12?', content: 'Vitamin B12 is a vital nutrient that supports brain function and the production of red blood cells.' },
        { title: 'What does it assess?', content: 'It assesses Vitamin B12 levels in the blood to help diagnose deficiencies that could lead to fatigue and neurological issues.' },
        { title: 'What does it mean to have low Vitamin B12?', content: 'Low B12 levels may cause fatigue, weakness, and anemia.' }
      ]
    },
    {
      name: 'Homocysteine',
      value: '8.6 µmol/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Homocysteine?', content: 'Homocysteine is an amino acid used to assess cardiovascular health.' },
        { title: 'What does it assess?', content: 'It helps determine risk for heart disease by measuring homocysteine levels in the blood.' },
        { title: 'What does it mean to have high Homocysteine?', content: 'Elevated homocysteine levels can increase the risk of cardiovascular disease and stroke.' }
      ]
    },
    {
      name: 'Iron Saturation',
      value: '66%',
      status: 'Needs Attention',
      progress: 90,
      details: [
        { title: 'What is Iron Saturation?', content: 'Iron Saturation measures the percentage of iron bound to transferrin in the blood.' },
        { title: 'What does it assess?', content: 'It helps assess iron storage and transport in the body.' },
        { title: 'What does it mean to have high Iron Saturation?', content: 'High iron saturation could indicate iron overload or hemochromatosis.' }
      ]
    },
    {
      name: 'Calcium',
      value: '2.375 mmol/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Calcium?', content: 'Calcium is a mineral vital for bone health and the proper functioning of muscles, nerves, and the heart.' },
        { title: 'What does it assess?', content: 'It assesses calcium levels to evaluate bone health and the risk of conditions like osteoporosis.' },
        { title: 'What does it mean to have low Calcium?', content: 'Low calcium levels can lead to bone weakness and an increased risk of fractures.' }
      ]
    },
    {
      name: 'Iron',
      value: '33.29 µmol/L',
      status: 'Needs Attention',
      progress: 85,
      details: [
        { title: 'What is Iron?', content: 'Iron is an essential mineral needed for the production of hemoglobin, a protein in red blood cells that carries oxygen.' },
        { title: 'What does it assess?', content: 'It assesses iron levels in the blood to detect iron deficiency or overload conditions.' },
        { title: 'What does it mean to have high Iron?', content: 'High iron levels may indicate conditions like hemochromatosis or excessive iron intake.' }
      ]
    },
    {
      name: 'Total Iron Binding Capacity (TIBC)',
      value: '50.478 µmol/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is TIBC?', content: 'TIBC measures the blood’s capacity to bind iron with transferrin.' },
        { title: 'What does it assess?', content: 'It helps evaluate iron levels and detect anemia or iron overload.' },
        { title: 'What does it mean to have low TIBC?', content: 'Low TIBC can indicate iron overload or chronic diseases like liver disease.' }
      ]
    },
    {
      name: 'Unsaturated Iron Binding Capacity (UIBC)',
      value: '17.18 µg/dL',
      status: 'Low Risk',
      progress: 45,
      details: [
        { title: 'What is UIBC?', content: 'UIBC measures the reserve capacity of transferrin to bind more iron.' },
        { title: 'What does it assess?', content: 'It helps diagnose iron deficiency or overload by measuring the unbound iron in the blood.' },
        { title: 'What does it mean to have low UIBC?', content: 'Low UIBC may suggest iron overload or a high intake of iron-rich foods or supplements.' }
      ]
    },
    {
      name: 'Magnesium, RBC',
      value: '4.7 mg/dL',
      status: 'Average',
      progress: 60,
      details: [
        { title: 'What is Magnesium, RBC?', content: 'Magnesium is an essential mineral involved in over 300 enzymatic processes in the body.' },
        { title: 'What does it assess?', content: 'It assesses magnesium levels to evaluate risks related to muscle function, cardiovascular health, and bone strength.' },
        { title: 'What does it mean to have low Magnesium?', content: 'Low magnesium may lead to muscle cramps, irregular heartbeat, and fatigue.' }
      ]
    },
    {
      name: 'Corrected Calcium',
      value: '2.22 mmol/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is Corrected Calcium?', content: 'Corrected calcium accounts for albumin levels when assessing calcium concentration.' },
        { title: 'What does it assess?', content: 'It ensures an accurate assessment of calcium levels, especially in patients with abnormal albumin.' },
        { title: 'What does it mean to have low Corrected Calcium?', content: 'Low corrected calcium can signal hypocalcemia, leading to muscle spasms and abnormal heart rhythms.' }
      ]
    },
    {
      name: 'Methylmalonic Acid, Urine',
      value: '6.5 µmol/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Methylmalonic Acid?', content: 'Methylmalonic acid is a marker used to assess Vitamin B12 deficiency.' },
        { title: 'What does it assess?', content: 'It helps evaluate if the body is able to properly utilize Vitamin B12.' },
        { title: 'What does it mean to have high Methylmalonic Acid?', content: 'Elevated methylmalonic acid suggests a deficiency in Vitamin B12.' }
      ]
    }
];

export default vitaminsandminerals;