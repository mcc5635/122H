const metabolicProfile = [
    {
      name: 'Fasting Insulin',
      value: '6 mU/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Fasting Insulin?', content: 'Fasting insulin measures the insulin level in your blood after fasting.' },
        { title: 'What does it assess?', content: 'It assesses insulin sensitivity and glucose regulation.' },
        { title: 'What does it mean to have low insulin?', content: 'Low insulin may indicate improved insulin sensitivity or hypoglycemia.' }
      ]
    },
    {
      name: 'Fasting Glucose',
      value: '5.0505 mmol/L',
      status: 'Average',
      progress: 60,
      details: [
        { title: 'What is Fasting Glucose?', content: 'It measures blood sugar levels after fasting and is critical for diabetes screening.' },
        { title: 'What does it assess?', content: 'It assesses glucose control and diabetes risk.' },
        { title: 'What does it mean to have high glucose?', content: 'High glucose levels may indicate prediabetes or diabetes.' }
      ]
    },
    {
      name: 'HbA1c',
      value: '5.4%',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is HbA1c?', content: 'HbA1c measures average blood sugar levels over the past three months.' },
        { title: 'What does it assess?', content: 'It is used to diagnose and monitor diabetes.' },
        { title: 'What does it mean to have high HbA1c?', content: 'High levels may indicate diabetes or poor blood sugar control.' }
      ]
    },
    {
      name: 'HOMA-IR',
      value: '1.35',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is HOMA-IR?', content: 'HOMA-IR assesses insulin resistance by comparing insulin and glucose levels.' },
        { title: 'What does it assess?', content: 'It assesses the risk of insulin resistance, a precursor to diabetes.' },
        { title: 'What does it mean to have a high HOMA-IR?', content: 'High levels indicate insulin resistance, increasing the risk for type 2 diabetes.' }
      ]
    },
    {
      name: 'Estimated Average Glucose (eAG)',
      value: '6 mmol/L',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is eAG?', content: 'eAG translates HbA1c levels into equivalent average glucose levels.' },
        { title: 'What does it assess?', content: 'It assesses long-term blood glucose control in diabetes management.' },
        { title: 'What does it mean to have high eAG?', content: 'High levels indicate poor glucose control over the past three months.' }
      ]
    },
    {
      name: 'Uric Acid',
      value: '392.6003 μmol/L',
      status: 'Average',
      progress: 65,
      details: [
        { title: 'What is Uric Acid?', content: 'Uric acid is a waste product from the breakdown of purines in food.' },
        { title: 'What does it assess?', content: 'It assesses the risk for gout and kidney stones.' },
        { title: 'What does it mean to have high uric acid?', content: 'High levels may lead to gout or kidney issues.' }
      ]
    }
  ];

export default metabolicProfile;