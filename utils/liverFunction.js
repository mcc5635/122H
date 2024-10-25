const liverFunction = [
    {
      name: 'Alanine Transaminase (ALT)',
      value: '22 U/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is ALT?', content: 'ALT is an enzyme found in the liver and is released into the bloodstream when liver cells are damaged.' },
        { title: 'What does it assess?', content: 'It assesses liver function and damage.' },
        { title: 'What does it mean to have high ALT?', content: 'Elevated ALT levels can indicate liver inflammation or damage from infections, alcohol, or medications.' }
      ]
    },
    {
      name: 'Aspartate Transaminase (AST)',
      value: '17 U/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is AST?', content: 'AST is another enzyme found in the liver and muscles that is measured to assess liver health.' },
        { title: 'What does it assess?', content: 'It assesses liver function and muscle health.' },
        { title: 'What does it mean to have high AST?', content: 'High AST levels can indicate liver or muscle damage.' }
      ]
    },
    {
      name: 'Gamma-glutamyl transferase (GGT)',
      value: '20 U/L',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is GGT?', content: 'GGT is an enzyme found in the liver and bile ducts, elevated levels may indicate bile duct or liver problems.' },
        { title: 'What does it assess?', content: 'It assesses liver health and bile flow.' },
        { title: 'What does it mean to have high GGT?', content: 'High GGT may indicate alcohol use or bile duct problems.' }
      ]
    },
    {
      name: 'Alkaline Phosphatase (ALP)',
      value: '66 U/L',
      status: 'Optimal',
      progress: 65,
      details: [
        { title: 'What is ALP?', content: 'ALP is an enzyme found in the liver and bones.' },
        { title: 'What does it assess?', content: 'It assesses liver function and bone health.' },
        { title: 'What does it mean to have high ALP?', content: 'High ALP levels may indicate liver or bone diseases.' }
      ]
    },
    {
      name: 'Total Bilirubin',
      value: '18.81 µmol/L',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is Bilirubin?', content: 'Bilirubin is a yellow pigment formed during the breakdown of red blood cells.' },
        { title: 'What does it assess?', content: 'It assesses liver function and bile duct health.' },
        { title: 'What does it mean to have high Bilirubin?', content: 'High bilirubin levels may indicate liver disease or bile duct obstruction.' }
      ]
    },
    {
      name: 'Albumin',
      value: '48 g/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Albumin?', content: 'Albumin is a protein produced by the liver and is essential for maintaining blood volume.' },
        { title: 'What does it assess?', content: 'It assesses liver function and nutritional status.' },
        { title: 'What does it mean to have low Albumin?', content: 'Low albumin levels may indicate liver disease or malnutrition.' }
      ]
    },
    {
      name: 'Globulin',
      value: '29 g/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is Globulin?', content: 'Globulins are a group of proteins in the blood that play an important role in liver function, blood clotting, and fighting infections.' },
        { title: 'What does it assess?', content: 'It assesses immune system function and protein levels in the blood.' },
        { title: 'What does it mean to have low Globulin?', content: 'Low globulin levels may indicate liver or kidney disease.' }
      ]
    },
    {
      name: 'Fibrosis-4 Index (FIB-4)',
      value: '0.52',
      status: 'Optimal',
      progress: 85,
      details: [
        { title: 'What is FIB-4?', content: 'FIB-4 is a score used to assess the level of liver fibrosis in people with liver diseases.' },
        { title: 'What does it assess?', content: 'It assesses the risk of liver scarring (fibrosis).' },
        { title: 'What does it mean to have a high FIB-4 score?', content: 'A high FIB-4 score may indicate significant liver fibrosis.' }
      ]
    }
];

export default liverFunction;