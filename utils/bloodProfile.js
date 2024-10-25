const bloodProfile = [
    {
      name: 'Haemoglobin',
      value: '15.6 g/dL',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What is Haemoglobin?', content: 'Haemoglobin is a protein in red blood cells that carries oxygen throughout the body.' },
        { title: 'What does it assess?', content: 'It assesses oxygen-carrying capacity and the presence of anemia.' },
        { title: 'What does it mean to have low haemoglobin?', content: 'Low haemoglobin may indicate anemia or blood loss.' }
      ]
    },
    {
      name: 'Red Cell Count',
      value: '5.03 x10^12/L',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Red Cell Count?', content: 'It counts the number of red blood cells in the blood.' },
        { title: 'What does it assess?', content: 'It assesses the overall health of the red blood cells and can indicate anemia or polycythemia.' },
        { title: 'What does it mean to have low red cell count?', content: 'A low count may suggest anemia, bleeding, or vitamin deficiencies.' }
      ]
    },
    {
      name: 'Hematocrit',
      value: '46%',
      status: 'Optimal',
      progress: 75,
      details: [
        { title: 'What is Hematocrit?', content: 'Hematocrit measures the percentage of blood volume that is made up of red blood cells.' },
        { title: 'What does it assess?', content: 'It helps assess the overall blood volume and can indicate conditions like anemia or dehydration.' },
        { title: 'What does it mean to have high Hematocrit?', content: 'High Hematocrit can suggest dehydration, whereas low levels can indicate anemia.' }
      ]
    },
    {
      name: 'Platelets',
      value: '239 x10^9/L',
      status: 'Optimal',
      progress: 80,
      details: [
        { title: 'What are Platelets?', content: 'Platelets are small cell fragments in the blood that help with clotting.' },
        { title: 'What does it assess?', content: 'It assesses the blood’s ability to form clots and stop bleeding.' },
        { title: 'What does it mean to have low Platelets?', content: 'Low platelet count can lead to excessive bleeding or bruising.' }
      ]
    },
    {
      name: 'Total White Cell Count (TWC)',
      value: '6.4 x10^9/L',
      status: 'Optimal',
      progress: 70,
      details: [
        { title: 'What is White Cell Count?', content: 'It measures the number of white blood cells in the blood.' },
        { title: 'What does it assess?', content: 'It assesses immune system activity and infection.' },
        { title: 'What does it mean to have high White Cell Count?', content: 'High levels may indicate infection, inflammation, or other immune responses.' }
      ]
    }
    // Continue for other markers like Neutrophils, Lymphocytes, MCV, MCH, etc.
];  

export default bloodProfile;