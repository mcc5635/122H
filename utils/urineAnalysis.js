const urineAnalysis = [
    {
      name: 'Urine Colour',
      value: 'Yellow',
      status: 'Optimal',
      progress: 90,
      details: [
        { title: 'What is Urine Colour?', content: 'Urine colour is an indicator of hydration and health, with darker yellow indicating possible dehydration.' }
      ]
    },
    {
      name: 'Urine Clarity',
      value: 'Clear',
      status: 'Optimal',
      progress: 95,
      details: [
        { title: 'What is Urine Clarity?', content: 'Urine clarity shows if urine appears clear or cloudy. Clear urine suggests good hydration.' }
      ]
    },
    {
      name: 'Urine pH',
      value: '6.5',
      status: 'Optimal',
      progress: 85,
      details: [
        { title: 'What is Urine pH?', content: 'Urine pH measures the acidity or alkalinity of urine, which reflects kidney function and can suggest various health conditions.' }
      ]
    },
    {
      name: 'Urine Specific Gravity',
      value: '1.01',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is Urine Specific Gravity?', content: 'This measures urine concentration and hydration status.' }
      ]
    },
    {
      name: 'Urine Nitrite',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What is Urine Nitrite?', content: 'The presence of nitrites in urine can indicate a bacterial infection, such as a UTI.' }
      ]
    },
    {
      name: 'Urine Protein',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What is Urine Protein?', content: 'This test measures protein levels, with high protein possibly indicating kidney issues.' }
      ]
    },
    {
      name: 'Urine Glucose',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What is Urine Glucose?', content: 'Glucose in urine can indicate uncontrolled diabetes or other conditions.' }
      ]
    },
    {
      name: 'Urine Ketones',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are Urine Ketones?', content: 'Ketones in urine could be a sign of ketoacidosis, particularly in diabetes.' }
      ]
    },
    {
      name: 'Urine Bilirubin',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What is Urine Bilirubin?', content: 'This tests for liver function. Bilirubin is a breakdown product of red blood cells.' }
      ]
    },
    {
      name: 'Urine Leukocytes',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are Urine Leukocytes?', content: 'Leukocytes (white blood cells) can indicate infection when found in urine.' }
      ]
    },
    {
      name: 'Urine Erythrocytes',
      value: 'Negative',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are Urine Erythrocytes?', content: 'Erythrocytes (red blood cells) may indicate bleeding in the urinary tract.' }
      ]
    },
    {
      name: 'Urine Casts',
      value: 'Negative',
      status: 'At Risk',
      progress: 50,
      details: [
        { title: 'What are Urine Casts?', content: 'Casts are cylindrical structures produced by the kidney, and their presence may suggest kidney disease.' }
      ]
    },
    {
      name: 'Urine Crystals',
      value: 'Negative',
      status: 'At Risk',
      progress: 50,
      details: [
        { title: 'What are Urine Crystals?', content: 'Crystals may indicate kidney stones or other metabolic issues.' }
      ]
    },
    {
      name: 'Urine Bacteria',
      value: 'Negative',
      status: 'At Risk',
      progress: 50,
      details: [
        { title: 'What are Urine Bacteria?', content: 'Bacteria in urine can indicate a urinary tract infection (UTI).' }
      ]
    },
    {
      name: 'Urine Yeasts',
      value: 'Negative',
      status: 'At Risk',
      progress: 50,
      details: [
        { title: 'What are Urine Yeasts?', content: 'The presence of yeast in urine can be a sign of a fungal infection.' }
      ]
    },
    {
      name: 'Urine White Blood Cells (cells/hpf)',
      value: 'None seen',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are White Blood Cells in Urine?', content: 'White blood cells in urine could indicate infection or inflammation in the urinary tract.' }
      ]
    },
    {
      name: 'Urine Red Blood Cells (cells/hpf)',
      value: 'None seen',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are Red Blood Cells in Urine?', content: 'Red blood cells in urine may indicate trauma, infection, or kidney disease.' }
      ]
    },
    {
      name: 'Urine Epithelial Cells (non-renal) (cells/hpf)',
      value: 'None seen',
      status: 'Optimal',
      progress: 100,
      details: [
        { title: 'What are Epithelial Cells in Urine?', content: 'Epithelial cells line the urinary tract, and their presence may indicate infection or inflammation.' }
      ]
    },
    {
      name: 'Urine Urobilinogen, Semi-quantitative',
      value: '0.2 mg/dL',
      status: 'Average',
      progress: 60,
      details: [
        { title: 'What is Urine Urobilinogen?', content: 'This measures liver function and can indicate liver disease if elevated.' }
      ]
    }
];

export default urineAnalysis;