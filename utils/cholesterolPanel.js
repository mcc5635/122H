const cholesterolPanel = [
    {
      name: 'Apolipoprotein B (apoB)',
      value: '0.95 g/L',
      status: 'Average',
      progress: 60,
      details: [
        { title: 'What is Apolipoprotein B?', content: 'Apolipoprotein B is a protein involved in fat metabolism. It helps transport cholesterol to tissues.' },
        { title: 'What does it assess?', content: 'It assesses the risk of cardiovascular diseases by measuring the amount of bad cholesterol (LDL) particles.' },
        { title: 'What does it mean to have high Apolipoprotein B?', content: 'High levels may indicate an increased risk for heart disease.' }
      ]
    },
    {
      name: 'Total Cholesterol',
      value: '5.4131 mmol/L',
      status: 'Needs Attention',
      progress: 90,
      details: [
        { title: 'What is Total Cholesterol?', content: 'Total cholesterol is the sum of LDL, HDL, and VLDL cholesterol in the blood.' },
        { title: 'What does it assess?', content: 'It assesses cardiovascular health and the risk of heart disease or stroke.' },
        { title: 'What does it mean to have high Total Cholesterol?', content: 'High cholesterol increases the risk of plaque buildup in arteries.' }
      ]
    },
    {
      name: 'HDL-Cholesterol',
      value: '1.7612 mmol/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is HDL-Cholesterol?', content: 'High-density lipoprotein (HDL) is often referred to as "good" cholesterol.' },
        { title: 'What does it assess?', content: 'It assesses the amount of cholesterol being carried away from the arteries to the liver.' },
        { title: 'What does it mean to have high HDL-Cholesterol?', content: 'Higher HDL levels are linked to a lower risk of heart disease.' }
      ]
    },
    {
      name: 'LDL-Cholesterol',
      value: '3.24 mmol/L',
      status: 'Average',
      progress: 70,
      details: [
        { title: 'What is LDL-Cholesterol?', content: 'Low-density lipoprotein (LDL) is known as "bad" cholesterol.' },
        { title: 'What does it assess?', content: 'It measures the cholesterol that builds up on artery walls, leading to blockages.' },
        { title: 'What does it mean to have high LDL-Cholesterol?', content: 'High levels increase the risk of heart disease and stroke.' }
      ]
    },
    {
      name: 'Triglycerides',
      value: '1.0396 mmol/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What are Triglycerides?', content: 'Triglycerides are a type of fat (lipid) found in your blood.' },
        { title: 'What does it assess?', content: 'It assesses your body’s ability to store unused calories as fat.' },
        { title: 'What does it mean to have high Triglycerides?', content: 'High levels can increase the risk of heart disease.' }
      ]
    },
    {
      name: 'non-HDL-Cholesterol',
      value: '3.6519 mmol/L',
      status: 'Needs Attention',
      progress: 85,
      details: [
        { title: 'What is non-HDL-Cholesterol?', content: 'Non-HDL cholesterol is total cholesterol minus HDL, indicating the "bad" cholesterol.' },
        { title: 'What does it assess?', content: 'It assesses the total amount of cholesterol that can build up in arteries.' },
        { title: 'What does it mean to have high non-HDL-Cholesterol?', content: 'High levels indicate a higher risk for heart disease and stroke.' }
      ]
    },
    {
      name: 'Lipoprotein(a)',
      value: '192 nmol/L',
      status: 'Needs Attention',
      progress: 85,
      details: [
        { title: 'What is Lipoprotein(a)?', content: 'Lipoprotein(a) is a type of LDL cholesterol that is genetically inherited.' },
        { title: 'What does it assess?', content: 'It assesses inherited risk for cardiovascular disease.' },
        { title: 'What does it mean to have high Lipoprotein(a)?', content: 'High levels increase the risk of heart attacks and strokes.' }
      ]
    },
    {
      name: 'TG:HDL-C ratio',
      value: '1.35',
      status: 'Average',
      progress: 65,
      details: [
        { title: 'What is the TG:HDL-C ratio?', content: 'The TG:HDL-C ratio compares triglycerides to HDL cholesterol.' },
        { title: 'What does it assess?', content: 'It assesses cardiovascular risk, with lower ratios indicating better health.' },
        { title: 'What does it mean to have a high ratio?', content: 'Higher ratios are linked to increased risk of heart disease.' }
      ]
    }
];

export default cholesterolPanel;