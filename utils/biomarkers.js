const Biomarkers_content = [
    {
      name: 'Increase natural sources of protein intake',
      icon: <Spa sx={{ fontSize: 30, color: '#616161' }} />,
      description: 'Increase muscle mass, Weight loss',
      needsAttention: true,
      details: {
        summary: 'Increasing natural sources of protein, such as eggs, fish, lean meats, and legumes, is essential for muscle growth and weight management.',
        goals: [
          'Enhance muscle mass',
          'Aid in healthy weight management',
          'Improve metabolic health'
        ],
        tips: [
          'Incorporate protein from varied sources, including plant-based options like beans, lentils, and nuts.',
          'Aim for 0.8 to 1.2 grams of protein per kilogram of body weight daily.',
          'Monitor your intake to ensure balanced macronutrients with carbs and fats.'
        ]
      }
    },
    {
      name: 'Consider Ashwaganda',
      icon: <Medication sx={{ fontSize: 30, color: '#616161' }} />,
      description: 'Sleep, Stress & anxiety, Cognitive & physical performance',
      needsAttention: false,
      details: {
        summary: 'Ashwagandha is an adaptogenic herb known to improve cognitive function, reduce anxiety, and enhance sleep quality.',
        goals: [
          'Improve sleep quality',
          'Reduce stress and anxiety',
          'Boost cognitive and physical performance'
        ],
        tips: [
          'Consider Ashwagandha for its sleep, muscle, and cognitive benefits.',
          'Take between 500mg to 1,500mg of root extracts daily, preferably in the evening.',
          'Choose products from trusted brands, such as Solgar or Organic India.'
        ]
      }
    },
    {
      name: 'Add weightlifting exercises',
      icon: <FitnessCenter sx={{ fontSize: 30, color: '#616161' }} />,
      description: 'Weight loss, Reduce Cholesterol and ApoB levels',
      details: {
        summary: 'Weightlifting exercises help with weight loss, improve cholesterol levels, and lower ApoB.',
        goals: [
          'Promote fat loss',
          'Enhance muscle strength',
          'Lower cholesterol and ApoB levels'
        ],
        tips: [
          'Start with compound movements like squats and deadlifts for full-body strength.',
          'Incorporate weight training 2-3 times a week for best results.',
          'Track progress to adjust weights progressively for continued improvement.'
        ]
      }
    },
    {
      name: 'Consider starting statin meds',
      icon: <Opacity sx={{ fontSize: 30, color: '#616161' }} />,
      description: 'ApoB and Cardiovascular risk reduction',
      details: {
        summary: 'Statins are effective in reducing cholesterol and ApoB levels, lowering the risk of heart disease.',
        goals: [
          'Lower ApoB levels',
          'Reduce cardiovascular risk',
          'Maintain healthy cholesterol levels'
        ],
        tips: [
          'Consult your doctor to assess the need for statins based on ApoB and cholesterol levels.',
          'Monitor liver function periodically while on statin therapy.',
          'Adopt a heart-healthy diet alongside statin use for optimal benefits.'
        ]
      }
    }
  ];
  
export default Biomarkers_content;
  