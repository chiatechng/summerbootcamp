// curriculum-data.js
// ChiaTech 2026 NERDC Curriculum Database

const curriculumData = {
  jss1: [
    // ==========================================
    // 1. MATHEMATICS (JSS 1)
    // ==========================================
    {
      title: "Mathematics",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Whole Numbers", objectives: "Place value, ordering, and properties of whole numbers." },
            { week: "Week 2", topic: "LCM (Least Common Multiple)", objectives: "Finding LCM using multiples and prime factorization." },
            { week: "Week 3", topic: "HCF (Highest Common Factor)", objectives: "Finding HCF using factorization methods." },
            { week: "Week 4", topic: "Counting in Base 2", objectives: "Introduction to the binary number system." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Conversion of Numbers", objectives: "Conversion of Base 10 numerals to binary numbers (step-by-step)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Fractions I", objectives: "Types of fractions (proper, improper, mixed), simplification." },
            { week: "Week 9", topic: "Fractions II", objectives: "Equivalent fractions, comparison of fractions." },
            { week: "Week 10", topic: "Basic Operations on Whole Numbers", objectives: "Addition, subtraction, multiplication, and division." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Addition & Subtraction of Fractions", objectives: "With the same and different denominators." },
            { week: "Week 2", topic: "Multiplication & Division of Fractions", objectives: "Solving real-life problems with fractions." },
            { week: "Week 3", topic: "Estimation & Approximation", objectives: "Rounding off numbers, significant figures." },
            { week: "Week 4", topic: "Numbers in Base 2 â€“ Addition", objectives: "Binary addition rules." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Numbers in Base 2 â€“ Subtraction", objectives: "Binary subtraction rules." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Numbers in Base 2 â€“ Multiplication", objectives: "Binary multiplication rules." },
            { week: "Week 9", topic: "Algebraic Processes I", objectives: "Use of symbols, coefficients, and algebraic expressions." },
            { week: "Week 10", topic: "Simplification of Algebraic Expressions", objectives: "Expanding brackets, collecting like terms." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Simple Equations", objectives: "Solving one-variable linear equations." },
            { week: "Week 2", topic: "Plane Shapes", objectives: "Properties of triangles, quadrilaterals, and circles." },
            { week: "Week 3", topic: "Three-Dimensional Figures", objectives: "Cubes, cuboids, cylinders, spheres, and cones." },
            { week: "Week 4", topic: "Constructions", objectives: "Basic geometric constructions using ruler and compass." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Angles", objectives: "Types of angles, angle sum properties of triangles & quadrilaterals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Everyday Statistics I", objectives: "Need for statistics, importance in daily life." },
            { week: "Week 9", topic: "Everyday Statistics II", objectives: "Methods of data collection." },
            { week: "Week 10", topic: "Everyday Statistics III", objectives: "Data presentation: tables, bar charts, pie charts." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },

    // ==========================================
    // 2. ENGLISH STUDIES (JSS 1)
    // ==========================================
    {
      title: "English Studies",
      icon: "fa-book",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Intro to Speech & Nouns", objectives: "<b>Speech:</b> Organs of Speech.<br><b>Grammar:</b> Parts of Speech; Nouns - Meaning.<br><b>Composition:</b> Meaning & Types.<br><b>Literature:</b> What is Literature?" },
            { week: "Week 2", topic: "Pure Vowels & Pronouns", objectives: "<b>Speech:</b> Pure Vowel Sounds.<br><b>Grammar:</b> Types of Nouns; Pronouns.<br><b>Reading:</b> The Family.<br><b>Literature:</b> Features and Types of Literature." },
            { week: "Week 3", topic: "Vowel /i:/ & Verbs", objectives: "<b>Speech:</b> Vowel Sound /i:/.<br><b>Grammar:</b> Verbs - Definition & Types.<br><b>Reading:</b> SPQ3R Technique.<br><b>Literature:</b> Intro to Prose & Elements." },
            { week: "Week 4", topic: "Vowel /i/ & Transitive Verbs", objectives: "<b>Speech:</b> Vowel Sound /i/.<br><b>Grammar:</b> Transitive, Intransitive & Regular Verbs.<br><b>Composition:</b> Descriptive vs Narrative.<br><b>Literature:</b> Oral Literature." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Vowel /e/ & Adjectives", objectives: "<b>Speech:</b> Vowel Sound /e/.<br><b>Grammar:</b> Adjectives - Types & Comparison.<br><b>Reading:</b> Differentiating Main Ideas.<br><b>Literature:</b> Intro to Drama." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Vowel /Ã¦/ & Adverbs", objectives: "<b>Speech:</b> Vowel /Ã¦/ and /a:/.<br><b>Grammar:</b> Adverbs - Identification & Types.<br><b>Composition:</b> Descriptive Essay - A Market Place." },
            { week: "Week 9", topic: "Prepositions & Letter Writing", objectives: "<b>Grammar:</b> Prepositions - Definition & Types.<br><b>Composition:</b> Intro to Letter Writing.<br><b>Literature:</b> Folktales & Drama Text Plot." },
            { week: "Week 10", topic: "Vowel /p/ & Conjunctions", objectives: "<b>Speech:</b> Vowel Sound /p/.<br><b>Grammar:</b> Conjunctions - Coordinating & Subordinating.<br><b>Literature:</b> Figures of Speech (Simile, Metaphor, Irony)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision, examinations, and closing." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Vowels /u/ and /u:/", objectives: "<b>Speech:</b> Vowel Sounds /u/ & /u:/.<br><b>Grammar:</b> Adverbials of Frequency.<br><b>Composition:</b> Formal Letter Features.<br><b>Literature:</b> African Folktales." },
            { week: "Week 2", topic: "Simple Present Tense", objectives: "<b>Speech:</b> Vowel Sound /a:/.<br><b>Grammar:</b> Tenses - Simple Present.<br><b>Reading:</b> Asking projection questions.<br><b>Literature:</b> Poetry Definition." },
            { week: "Week 3", topic: "Simple Past Tense", objectives: "<b>Grammar:</b> Simple Past Tense.<br><b>Composition:</b> Guided Composition.<br><b>Literature:</b> Poetry Types (Epic, Lyric)." },
            { week: "Week 4", topic: "Present Continuous Tense", objectives: "<b>Speech:</b> Vowel Sound /3:/.<br><b>Grammar:</b> Present Continuous Tense.<br><b>Composition:</b> Narrative Essay.<br><b>Literature:</b> Drama Features." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Past Continuous Tense", objectives: "<b>Speech:</b> Vowel Sound /ÊŒ/.<br><b>Grammar:</b> Past Continuous Tense.<br><b>Composition:</b> Argumentative Essay.<br><b>Literature:</b> Recommended Prose." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Vowel Contrasts", objectives: "<b>Speech:</b> Contrasts /É’/ vs /É”:/.<br><b>Grammar:</b> Sentence making.<br><b>Composition:</b> Expository Essay (HIV/AIDS).<br><b>Literature:</b> Myths and Legends." },
            { week: "Week 9", topic: "Future Tense", objectives: "<b>Speech:</b> Contrasts /e/ vs /3:/.<br><b>Grammar:</b> Future Tense (will, shall).<br><b>Reading:</b> Interpreting diagrams/maps." },
            { week: "Week 10", topic: "Intro to Diphthongs", objectives: "<b>Speech:</b> Introduction to Diphthongs.<br><b>Composition:</b> A Festival in My Village.<br><b>Literature:</b> Dramatization of scenes." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Diphthongs & Active Voice", objectives: "<b>Speech:</b> Diphthongs /ei/, /ou/, /au/.<br><b>Grammar:</b> Intro to Active and Passive Voice.<br><b>Reading:</b> Spatial description." },
            { week: "Week 2", topic: "Consonant Sounds", objectives: "<b>Speech:</b> Intro to Consonant Sounds.<br><b>Grammar:</b> Highlighting Active Voice.<br><b>Composition:</b> Intro to Expository Essay." },
            { week: "Week 3", topic: "Syllables", objectives: "<b>Speech:</b> Words of two, three, four syllables.<br><b>Grammar:</b> Use of Passive Voice.<br><b>Literature:</b> Poetry Language." },
            { week: "Week 4", topic: "Active Voice Exercises", objectives: "<b>Grammar:</b> Exercises on Active Voice.<br><b>Composition:</b> Argumentative Essay (Cultism).<br><b>Literature:</b> Myths/Legends Moral Lessons." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Passive Voice Exercises", objectives: "<b>Speech:</b> Syllables continued.<br><b>Grammar:</b> Exercises on Passive Voice.<br><b>Literature:</b> Identification of figures of speech." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Tag Questions", objectives: "<b>Speech:</b> Consonant Clusters.<br><b>Grammar:</b> Statements and Tag Questions.<br><b>Composition:</b> Argumentative vs Expository." },
            { week: "Week 9", topic: "Polar and Tag Questions", objectives: "<b>Speech:</b> Word Boundaries - Linking sounds.<br><b>Grammar:</b> Differentiating Polar and Tag Questions.<br><b>Composition:</b> How to Plant Trees." },
            { week: "Week 10", topic: "Contrasting Diphthongs", objectives: "<b>Speech:</b> /ei/ vs /iÇ/.<br><b>Grammar:</b> Exercise on Adverbials.<br><b>Literature:</b> Turning similes to metaphors." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Revision of Nouns, Pronouns, Verbs. End of Term Examinations." }
          ]
        }
      ]
    },

    // ==========================================
    // 3. PHYSICAL & HEALTH EDUCATION (JSS 1)
    // ==========================================
    {
      title: "Physical & Health Education",
      icon: "fa-running",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meaning of Physical Fitness", objectives: "Definition of physical fitness; difference between fitness and health." },
            { week: "Week 2", topic: "Components of Physical Fitness", objectives: "Strength, endurance, flexibility, agility, speed, balance, coordination." },
            { week: "Week 3", topic: "Characteristics of a Fit Person", objectives: "Features such as stamina, resistance to illness, alertness, efficiency." },
            { week: "Week 4", topic: "Importance of Physical Fitness", objectives: "Benefits: health promotion, body development, productivity, disease prevention." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Fitness Exercises", objectives: "Exercises to Develop Strength, Endurance and Flexibility (push-ups, sit-ups, squats)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Safety Precautions", objectives: "Warm-up, cool-down, hydration, use of proper kits, avoiding overstrain." },
            { week: "Week 9", topic: "Recreation, Leisure and Dance", objectives: "Definitions with examples of recreational and leisure activities." },
            { week: "Week 10", topic: "Differences in Activities", objectives: "Differences between Dance, Leisure and Recreation." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Benefits of Recreation and Dance", objectives: "Physical, mental, emotional, and social benefits." },
            { week: "Week 2", topic: "Athletics â€“ Shot-Put (Skills)", objectives: "Grip, stance, holding and releasing the shot." },
            { week: "Week 3", topic: "Athletics â€“ Shot-Put (Execution)", objectives: "Glide and rotational techniques, rules of performance." },
            { week: "Week 4", topic: "Athletics â€“ Discus Throw (Skills)", objectives: "Holding, swinging, and throwing the discus." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Discus Throw (Execution)", objectives: "Body positioning, release and follow-through." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Rules Governing Throwing Events", objectives: "Regulations, fouls, measuring of throws for Shot-Put and Discus." },
            { week: "Week 9", topic: "Safety Measures in Track and Field", objectives: "Injury prevention, proper supervision, use of facilities." },
            { week: "Week 10", topic: "Football", objectives: "Basic rules, skills (passing, dribbling, shooting), team play, safety measures." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Volleyball", objectives: "Basic rules, skills (serving, passing, spiking), team play, safety measures." },
            { week: "Week 2", topic: "Contact and Non-Contact Sports", objectives: "Meaning and explanation with examples." },
            { week: "Week 3", topic: "Types of Sports", objectives: "Examples: football, boxing, rugby (contact); tennis, badminton, athletics (non-contact)." },
            { week: "Week 4", topic: "Benefits of Sports", objectives: "Physical fitness, social interaction, discipline, teamwork." },
            { week: "Week 5", topic: "Midterm Exams", objectives: "Assessment of Weeks 1-4" },
            { week: "Week 6", topic: "Basic Skills in Sports", objectives: "Tackling, blocking, dodging, passing, coordination." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday" },
            { week: "Week 8", topic: "Safety Measures in Sports", objectives: "First aid, use of protective equipment, fair play." },
            { week: "Week 9", topic: "Determinants of Health", objectives: "Personal, School and Community Health â€“ Factors: heredity, environment, lifestyle, healthcare." },
            { week: "Week 10", topic: "Characteristics of a Healthy Person", objectives: "Signs of good health (physical, mental, emotional, social well-being)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Christian Religious Studies",
      icon: "fa-bible",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "The Creation", objectives: "The story of creation and God's plan." },
            { week: "Week 2", topic: "The Fall of Man", objectives: "Disobedience and its consequences in the Garden of Eden." },
            { week: "Week 3", topic: "The Covenant", objectives: "God's covenant with Noah." },
            { week: "Week 4", topic: "Call of Abraham", objectives: "Abraham's obedience, faith, and God's promise." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Isaac and Jacob", objectives: "The life, struggles, and blessings of the patriarchs." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Joseph", objectives: "Joseph in Egypt and his rise to power." },
            { week: "Week 9", topic: "Joseph's Reconciliation", objectives: "Forgiveness and family reunion." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Nigerian History",
      icon: "fa-landmark",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Intro to History", objectives: "Definitions, importance, and sources of history." },
            { week: "Week 2", topic: "Early People in Nigeria", objectives: "The Nok culture, early human settlements." },
            { week: "Week 3", topic: "The Oyo Empire", objectives: "Structure, political administration, and decline." },
            { week: "Week 4", topic: "The Benin Empire", objectives: "Origins, administration, and cultural legacy." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "The Sokoto Caliphate", objectives: "The Jihad of 1804 and its impact." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Kanem-Borno Empire", objectives: "Growth, trade routes, and development." },
            { week: "Week 9", topic: "Inter-group Relations", objectives: "Trade, migration, and diplomacy among early states." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Social & Citizenship Studies",
      icon: "fa-users",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "What is Society?", objectives: "Defining society and the concept of community." },
            { week: "Week 2", topic: "Duties of Citizens", objectives: "Rights, duties, and responsibilities." },
            { week: "Week 3", topic: "National Symbols", objectives: "The flag, coat of arms, anthem, and their significance." },
            { week: "Week 4", topic: "Social Values", objectives: "Honesty, integrity, and discipline." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Leadership", objectives: "Qualities of a good leader and follower." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Human Rights", objectives: "Basic human rights and how to protect them." },
            { week: "Week 9", topic: "Patriotism", objectives: "Importance of loyalty to the nation." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
  {
      title: "Islamic Studies",
      icon: "fa-mosque",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "The Holy Quran", objectives: "Definition, significance, and importance of the Quran." },
            { week: "Week 2", topic: "Revelation of the Quran", objectives: "The process and significance of Wahy." },
            { week: "Week 3", topic: "Articles of Faith", objectives: "Belief in Allah, Angels, and Books." },
            { week: "Week 4", topic: "Pillars of Islam", objectives: "Shahadah (Faith) and Salat (Prayer)." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Taharah (Cleanliness)", objectives: "Importance of purity and types of purification." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Salat (Prayer)", objectives: "Conditions, types, and importance of prayer." },
            { week: "Week 9", topic: "Surah Al-Fatihah", objectives: "Meaning and translation of the opening chapter." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Cultural & Creative Arts",
      icon: "fa-palette",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Intro to CCA", objectives: "Defining art, culture, and creative expression." },
            { week: "Week 2", topic: "Elements of Art", objectives: "Line, shape, form, color, and texture." },
            { week: "Week 3", topic: "Drawing", objectives: "Types of drawing and materials needed." },
            { week: "Week 4", topic: "Local Crafts", objectives: "Identifying local crafts (pottery, weaving)." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Music", objectives: "Basic notes, rhythm, and local musical instruments." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Drama", objectives: "Introduction to theatre and role-playing." },
            { week: "Week 9", topic: "Art Appreciation", objectives: "Importance of art in society." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "French",
      icon: "fa-language",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Greetings (Salutations)", objectives: "How to greet in French (Bonjour, Salut)." },
            { week: "Week 2", topic: "Self Introduction", objectives: "Stating name, age, and nationality." },
            { week: "Week 3", topic: "Numbers 1-50", objectives: "Counting and writing numbers in French." },
            { week: "Week 4", topic: "The Alphabet", objectives: "French phonetic alphabet and sounds." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Classroom Objects", objectives: "Identifying items in the classroom (le stylo, le livre)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Days and Months", objectives: "Names of days of the week and months of the year." },
            { week: "Week 9", topic: "Family Members", objectives: "Describing basic family relationships." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Business Studies",
      icon: "fa-briefcase",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Intro to Business Studies", objectives: "Definition, scope, and importance." },
            { week: "Week 2", topic: "The Office", objectives: "Meaning, function, and layout of an office." },
            { week: "Week 3", topic: "Office Staff", objectives: "Roles and responsibilities of office personnel." },
            { week: "Week 4", topic: "Trade", objectives: "Meaning, importance, and types (Home vs. Foreign)." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Production", objectives: "Factors of production (Land, Labor, Capital, Entrepreneur)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Forms of Business", objectives: "Sole proprietorship, partnership." },
            { week: "Week 9", topic: "Consumer Protection", objectives: "Rights and responsibilities of a consumer." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    }
  ],
  jss2: [
    {
      title: "English Studies",
      icon: "fa-book-open",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Speech Work: Consonant Sounds /p/, /b/", objectives: "Identification and articulation of /p/ and /b/ sounds." },
            { week: "Week 2", topic: "Grammar: Reported Speech", objectives: "Converting direct speech to reported speech." },
            { week: "Week 3", topic: "Composition: Descriptive Essay", objectives: "Describing a memorable event or place." },
            { week: "Week 4", topic: "Literature: Prose Techniques", objectives: "Understanding plot, characterization, and setting." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Grammar: Active and Passive Voice", objectives: "Usage and conversion of voice." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Comprehension: Speed Reading", objectives: "Techniques for rapid reading and extraction." },
            { week: "Week 9", topic: "Speech: Intonation", objectives: "Falling and rising intonation patterns." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Mathematics",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Whole Numbers (Large)", objectives: "Reading and writing large numbers." },
            { week: "Week 2", topic: "Approximation", objectives: "Rounding numbers to significant figures." },
            { week: "Week 3", topic: "Rational Numbers", objectives: "Operations on rational numbers." },
            { week: "Week 4", topic: "Indices", objectives: "Laws of indices: multiplication, division, and power laws." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Algebraic Expressions", objectives: "Expansion of algebraic brackets." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Linear Equations", objectives: "Solving simple linear equations." },
            { week: "Week 9", topic: "Plane Geometry", objectives: "Angles and polygons." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Digital Technologies",
      icon: "fa-laptop-code",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "System Unit", objectives: "Components of the system unit (CPU, RAM, ROM)." },
            { week: "Week 2", topic: "Storage Devices", objectives: "Primary and secondary storage media." },
            { week: "Week 3", topic: "Word Processing: Advanced", objectives: "Mail merge and table handling." },
            { week: "Week 4", topic: "Spreadsheet Basics", objectives: "Introduction to rows, columns, and formulas." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Internet Concepts", objectives: "World Wide Web, browsers, and search engines." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Cyber Security", objectives: "Online safety, passwords, and threats." },
            { week: "Week 9", topic: "Graphics Basics", objectives: "Introduction to image editing tools." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Basic Science",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Living and Non-Living Things", objectives: "Characteristics and classification of living things." },
            { week: "Week 2", topic: "Science and Society", objectives: "The role of science in daily life." },
            { week: "Week 3", topic: "Force and Motion", objectives: "Types of forces and their effects." },
            { week: "Week 4", topic: "Energy", objectives: "Forms of energy and conservation principles." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Environmental Pollution", objectives: "Types, causes, and control of pollution." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Human Health", objectives: "Personal hygiene and balanced diet." },
            { week: "Week 9", topic: "Reproductive System", objectives: "Introduction to human development." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Social Studies",
      icon: "fa-globe",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Social Environment", objectives: "Understanding the immediate community and society." },
            { week: "Week 2", topic: "Family Structure", objectives: "Types of families and family roles." },
            { week: "Week 3", topic: "National Identity", objectives: "Promoting unity and cultural heritage." },
            { week: "Week 4", topic: "Social Issues", objectives: "Drug abuse, cultism, and crime prevention." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Government", objectives: "Arms of government and their functions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Economic Activities", objectives: "Agriculture, industries, and trade." },
            { week: "Week 9", topic: "Globalization", objectives: "Impact of global interaction on Nigeria." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Cultural & Creative Arts",
      icon: "fa-palette",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Arts", objectives: "Review of art types and elements." },
            { week: "Week 2", topic: "Drawing and Painting", objectives: "Still life drawing and shading techniques." },
            { week: "Week 3", topic: "Crafts", objectives: "Introduction to leatherwork and beads." },
            { week: "Week 4", topic: "Music Theory", objectives: "Staff notation and key signatures." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Drama", objectives: "Stagecraft and script writing basics." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Cultural Heritage", objectives: "Festivals and traditions in Nigeria." },
            { week: "Week 9", topic: "Modern Art", objectives: "Contemporary trends in Nigerian art." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
      {
      title: "Business Studies",
      icon: "fa-briefcase",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "The Business Environment", objectives: "Internal and external business environments." },
            { week: "Week 2", topic: "Office Documents", objectives: "Types and uses of office documents (invoices, receipts)." },
            { week: "Week 3", topic: "Bookkeeping", objectives: "Basic concepts of bookkeeping and double-entry." },
            { week: "Week 4", topic: "Consumer Rights", objectives: "Protection agencies and consumer responsibilities." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Forms of Business Ownership", objectives: "Cooperatives and public companies." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Transportation", objectives: "Types, importance, and documents used in transport." },
            { week: "Week 9", topic: "Communication", objectives: "Modern and traditional means of communication." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "French",
      icon: "fa-language",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "At School", objectives: "Vocabulary related to school subjects and people." },
            { week: "Week 2", topic: "Numbers 50-100", objectives: "Writing and speaking larger numbers." },
            { week: "Week 3", topic: "Telling Time", objectives: "How to read and say the time in French." },
            { week: "Week 4", topic: "Verbs: ER Conjugations", objectives: "Present tense of regular -er verbs." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Describing People", objectives: "Adjectives for physical appearance and personality." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "My House", objectives: "Naming rooms and furniture." },
            { week: "Week 9", topic: "Food and Drinks", objectives: "Vocabulary for daily meals." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Christian Religious Studies",
      icon: "fa-bible",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Leadership of Moses", objectives: "Call and leadership of Moses." },
            { week: "Week 2", topic: "The Ten Commandments", objectives: "Significance of the Decalogue." },
            { week: "Week 3", topic: "The Kings of Israel", objectives: "Saul, David, and Solomon." },
            { week: "Week 4", topic: "The Exile", objectives: "Babylonian exile and return." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Minor Prophets", objectives: "Messages of Amos, Hosea, and Micah." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Ministry of Jesus", objectives: "Baptism, temptation, and disciples." },
            { week: "Week 9", topic: "Parables of Jesus", objectives: "Teaching through parables (The Sower)." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Islamic Studies",
      icon: "fa-mosque",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Surah Al-Qadr & Al-Adiyat", objectives: "Memorization and interpretation." },
            { week: "Week 2", topic: "Prophethood", objectives: "Lives of selected prophets." },
            { week: "Week 3", topic: "Salat", objectives: "Conditions for prayer and congregational prayer." },
            { week: "Week 4", topic: "Zakat", objectives: "Meaning, importance, and calculation." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Hajj", objectives: "Meaning and significance of the pilgrimage." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Sunnah", objectives: "Importance and role of the Sunnah." },
            { week: "Week 9", topic: "Moral Lessons", objectives: "Honesty and truthfulness in Islam." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "Final revision and examinations." }
          ]
        }
      ]
    }
  ],
  jss3: [
    {
      title: "Mathematics",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Number Bases II", objectives: "Conversion and operations in bases other than 10." },
            { week: "Week 2", topic: "Sets", objectives: "Types of sets, intersection, union, and Venn diagrams." },
            { week: "Week 3", topic: "Modular Arithmetic", objectives: "Operations in modulo systems." },
            { week: "Week 4", topic: "Variation", objectives: "Direct, inverse, and joint variation." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Algebraic Fractions", objectives: "Simplification and operations on algebraic fractions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Pythagoras Theorem", objectives: "Application of theorem to right-angled triangles." },
            { week: "Week 9", topic: "Trigonometric Ratios", objectives: "Sine, Cosine, and Tangent (SOHCAHTOA)." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "English Studies",
      icon: "fa-book-open",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Speech: Consonant Clusters", objectives: "Articulation of two and three consonant clusters." },
            { week: "Week 2", topic: "Grammar: Complex Sentences", objectives: "Structure and usage of subordinating conjunctions." },
            { week: "Week 3", topic: "Composition: Formal Letters", objectives: "Writing formal letters (applications, complaints)." },
            { week: "Week 4", topic: "Literature: Poetry Analysis", objectives: "Analyzing themes and imagery in poems." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Grammar: Direct/Indirect Speech", objectives: "Advanced rules for reported speech conversion." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Comprehension: Critical Reading", objectives: "Identifying bias and author intent." },
            { week: "Week 9", topic: "Speech: Stress and Rhythm", objectives: "Sentence stress and word stress patterns." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Digital Technologies",
      icon: "fa-laptop-code",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Computer Network", objectives: "Types, topologies, and networking hardware." },
            { week: "Week 2", topic: "The Internet", objectives: "Services on the internet and email etiquette." },
            { week: "Week 3", topic: "Programming Basics", objectives: "Introduction to coding logic and algorithms." },
            { week: "Week 4", topic: "Database Management", objectives: "Introduction to databases and simple queries." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Multimedia", objectives: "Creating and editing audio/video content." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Career in ICT", objectives: "Opportunities in the digital economy." },
            { week: "Week 9", topic: "Data Privacy", objectives: "Encryption and digital safety standards." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision and examinations." }
          ]
        }
      ]
    },
    {
      title: "Basic Science",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Genetics", objectives: "Introduction to heredity and variations." },
            { week: "Week 2", topic: "Reproductive System", objectives: "Human reproduction and puberty changes." },
            { week: "Week 3", topic: "Ecosystem", objectives: "Balance in nature, food chains, and webs." },
            { week: "Week 4", topic: "Atomic Structure", objectives: "Atoms, molecules, and elements." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Work and Machines", objectives: "Levers, pulleys, and mechanical advantage." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Light Energy", objectives: "Reflection, refraction, and optical instruments." },
            { week: "Week 9", topic: "Water and Solutions", objectives: "Properties of water, solubility, and hard water." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision and examinations." }
          ]
        }
      ]
    }
  ,
    {
      title: "Business Studies",
      icon: "fa-briefcase",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Bookkeeping & Accounting", objectives: "Principles of double-entry bookkeeping." },
            { week: "Week 2", topic: "Partnership & Joint Stock Companies", objectives: "Capital formation and management." },
            { week: "Week 3", topic: "Trade Associations", objectives: "Functions of Chambers of Commerce." },
            { week: "Week 4", topic: "Insurance", objectives: "Principles and types of insurance in business." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Business Law", objectives: "Contracts and simple legal obligations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Entrepreneurship", objectives: "Identifying business opportunities." },
            { week: "Week 9", topic: "Marketing", objectives: "The 4 Ps of marketing (Product, Price, Place, Promotion)." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision." }
          ]
        }
      ]
    },
    {
      title: "Cultural & Creative Arts",
      icon: "fa-palette",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Graphic Design", objectives: "Typography and layout fundamentals." },
            { week: "Week 2", topic: "Ceramics", objectives: "Methods of clay modeling and firing." },
            { week: "Week 3", topic: "Music Composition", objectives: "Creating melodies and rhythm." },
            { week: "Week 4", topic: "Drama Production", objectives: "Script analysis and character development." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Traditional Festivals", objectives: "Societal significance of Nigerian festivals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Textile Design", objectives: "Tie and dye, batik techniques." },
            { week: "Week 9", topic: "Art Exhibition", objectives: "Planning and displaying artworks." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision." }
          ]
        }
      ]
    },
    {
      title: "Social & Citizenship Studies",
      icon: "fa-users",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Constitutional Development", objectives: "Evolution of Nigerian constitutions." },
            { week: "Week 2", topic: "Electoral Process", objectives: "Voting, ballot, and democratic rights." },
            { week: "Week 3", topic: "Political Parties", objectives: "Functions and roles in Nigeria." },
            { week: "Week 4", topic: "Human Trafficking", objectives: "Causes, consequences, and prevention." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Drug Abuse", objectives: "Dangers and rehab centers." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Public Service", objectives: "Civil service structure and importance." },
            { week: "Week 9", topic: "International Organizations", objectives: "UN, AU, ECOWAS roles." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision." }
          ]
        }
      ]
    },
    {
      title: "Religious Studies (CRS/IRS)",
      icon: "fa-church",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Religious Tolerance", objectives: "Peaceful coexistence in a multi-religious society." },
            { week: "Week 2", topic: "Prophets and Messengers", objectives: "Life and teachings of major figures." },
            { week: "Week 3", topic: "Moral Virtues", objectives: "Justice, honesty, and humility." },
            { week: "Week 4", topic: "Social Vices", objectives: "Religious perspective on corruption and greed." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Revision of weeks 1-4." },
            { week: "Week 6", topic: "Community Service", objectives: "Religious duty to help the needy." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Faith and Reason", objectives: "Balancing religious belief with logical inquiry." },
            { week: "Week 9", topic: "Leadership", objectives: "Religious attributes of a good leader." },
            { week: "Week 10", topic: "Revision & Exams", objectives: "BECE mock revision." }
          ]
        }
      ]
    }
  ],
  sss1: [
    {
      title: "English Language",
      icon: "fa-book",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Spoken English: Oral Composition Skills I", objectives: "Narrative composition using picture charts; Nouns - Numbers and forming plurals." },
            { week: "Week 2", topic: "Reading Comprehension & Gender Nouns", objectives: "Word meanings through context; Nouns and Gender (masculine, feminine, common, neuter)." },
            { week: "Week 3", topic: "Spoken English: Selected Consonant Sounds", objectives: "Practice pronunciation of /Êƒ/, /z/, /Ê’/, /Î¸/, /Ã°/; Vocabulary associated with Agriculture." },
            { week: "Week 4", topic: "Countable and Uncountable Nouns", objectives: "Uncountable nouns in singular forms; Types of Nouns; Narrative composition." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Consonants followed by /w/", objectives: "Pronunciation practice; Noun Phrases with the Definite Article." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Listening Comprehension: Grasping Main Ideas", objectives: "Identifying main points in real-life speeches; Exceptions to definite article use." },
            { week: "Week 9", topic: "Spoken English: Oral Composition Skills II", objectives: "Descriptive composition; Nominalization of Adjectives (e.g., wise to wisdom)." },
            { week: "Week 10", topic: "Nominalization of Verbs", objectives: "Reading short prose on topical issues; Nominalizing verbs (e.g., conquer to conquest)." },
            { week: "Week 11", topic: "Vocabulary Development: Animal Husbandry", objectives: "Words related to animal husbandry; Irregular Verbs with examples in context." },
            { week: "Week 12", topic: "Consonants followed by /j/ and /u:/", objectives: "Pronunciation of dew, due, stew; Listening to debates; Forms of irregular verbs." },
            { week: "Week 13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Words Associated with Religions", objectives: "Vocabulary for traditional religion; Consonant sounds followed by /kw/; Simple tense forms." },
            { week: "Week 2", topic: "Vocabulary: Christian Religion", objectives: "Words associated with Christianity; Informal letter format; Complex tense forms." },
            { week: "Week 3", topic: "Vocabulary: Islamic Religion", objectives: "Words associated with Islam; Syllabic /l/ in words; Further practice on simple and complex tenses." },
            { week: "Week 4", topic: "Spoken English: Syllabic /n/", objectives: "Syllabic /n/ in words like often, sudden; Informal letter writing." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Other Religious Expressions", objectives: "Words like convert, fanatic, atheist; Stress on two-syllable words." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Mood, Tone, and Purpose", objectives: "Identifying mood and tone in speeches/plays; Complex sentences structure and clauses." },
            { week: "Week 9", topic: "Words Associated with Advertising", objectives: "Vocabulary for advertising; Stress in three-syllable words; Semi-formal letter writing." },
            { week: "Week 10", topic: "Listening Comprehension: Poem & Debate", objectives: "Identifying purpose in poems and debates; Semi-formal letter revision." },
            { week: "Week 11", topic: "Words Associated with Stock Exchange", objectives: "Stock market vocabulary; Stress in four-syllable words; Compound and complex sentences." },
            { week: "Week 12", topic: "Advanced Stress and Record Keeping", objectives: "Following directions; Record keeping uses (register, diary); Sentence practice." },
            { week: "Week 13", topic: "Examination & Closing", objectives: "End of term examination." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Vocabulary: Antonyms (Exactly Opposite)", objectives: "Words exactly opposite in meaning; Stress timing in continuous prose; Adjuncts (adverbs)." },
            { week: "Week 2", topic: "Vocabulary: Antonyms (Nearly Opposite)", objectives: "Words nearly opposite in meaning; Identifying speaker styles; Classes of adjuncts." },
            { week: "Week 3", topic: "Vocabulary: Synonyms (Same Meaning)", objectives: "Words that mean the same; Making notes from texts; Further adjunct examples." },
            { week: "Week 4", topic: "Listening Comprehension: Summary Skills", objectives: "Listening for summary through keywords; Speech writing features for occasions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Vocabulary: Synonyms (Nearly the Same)", objectives: "Words nearly the same in meaning; Expository writing; Phrasal verbs (come across, etc.)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Speech Writing Revision", objectives: "Revising speech features; Spelling of commonly misspelt words; Argumentative speech." },
            { week: "Week 9", topic: "Newspaper Articles", objectives: "Features of newspaper articles vs speeches and letters; Listening for summary." },
            { week: "Week 10", topic: "Commonly Misspelt Words II", objectives: "Spelling drills; Debate practice; Phrasal verbs (give up, give in, put off)." },
            { week: "Week 11", topic: "Spoken English: Debate Session", objectives: "Debate practice; Writing articles on current issues; Phrasal verbs (bring back, take away)." },
            { week: "Week 12", topic: "Revision", objectives: "General revision across vocabulary, grammar, and writing." },
            { week: "Week 13", topic: "Examination & Closing", objectives: "End of term examination." }
          ]
        }
      ]
    },
    {
      title: "General Mathematics",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Number Base System", objectives: "Conversion from one base to base 10; Conversion of decimal fractions; Arithmetic operations." },
            { week: "Week 2", topic: "Modular Arithmetic", objectives: "Concept of modular arithmetic; Simple operations; Applications to daily life." },
            { week: "Week 3", topic: "Indices", objectives: "Revision of standard form; Laws of indices with examples; Applications in problem solving." },
            { week: "Week 4", topic: "Logarithms", objectives: "Definition of logarithm; Relationship between logarithm, indices, and standard form; Reading tables." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Effective Use of Logarithm Tables", objectives: "Use of logarithm tables in calculations (division, multiplication, powers, roots)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Simple Equations and Variations", objectives: "Change of subject of formula; Direct, inverse, and joint variation; Applications." },
            { week: "Week 9", topic: "Quadratic Equations I", objectives: "Revision of factorization; Factorization of quadratic expressions; Solution by factorization." },
            { week: "Week 10", topic: "Quadratic Equations II", objectives: "Formation of quadratic equations with given roots; Drawing quadratic graphs." },
            { week: "Week 11", topic: "Logical Reasoning I", objectives: "Simple statements; Examples of true/false statements; Negation of simple statements." },
            { week: "Week 12", topic: "Logical Reasoning II", objectives: "Compound statements; Logical operators and symbols; Conjunction, disjunction, conditional." },
            { week: "Week 13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Constructions I", objectives: "Construction of angles and triangles; Bisection of angles (30Â°, 45Â°, 60Â°, 90Â°)." },
            { week: "Week 2", topic: "Constructions II", objectives: "Construction of equal angles and quadrilaterals; Locus of points equidistant from lines/points." },
            { week: "Week 3", topic: "Proofs of Theorems I", objectives: "Proof that sum of angles in a triangle is 180Â°; Exterior angle properties." },
            { week: "Week 4", topic: "Proofs of Theorems II (Riders)", objectives: "Deductive proofs of riders; Angles of parallel lines; Properties of parallelograms." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Trigonometric Ratios", objectives: "Trigonometric ratios in right-angled triangles (sine, cosine, tangent)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Trigonometric Ratios of Special Angles", objectives: "Ratios for 30Â°, 45Â°, 60Â°; Applications to solving problems." },
            { week: "Week 9", topic: "Application of Trigonometric Ratios", objectives: "Applications of trigonometry in real-life contexts; Angles between 0Â° and 360Â°." },
            { week: "Week 10", topic: "Trigonometric Ratios & Graphs", objectives: "Trigonometric ratios with respect to the unit circle; Graphs of sine, cosine, and tangent." },
            { week: "Week 11", topic: "Revision", objectives: "General revision of all topics taught during the term." },
            { week: "Week 12", topic: "Examination", objectives: "Second Term Examination." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Mensuration I", objectives: "Length of arcs of circles; Sectors and segments of a circle." },
            { week: "Week 2", topic: "Mensuration II", objectives: "Area of sectors and segments; Relationship between sector and surface area of a cone." },
            { week: "Week 3", topic: "Surface Area of Solids", objectives: "Surface area of cube, cuboid, cylinder, cone, prism, and pyramid." },
            { week: "Week 4", topic: "Volume of Solids", objectives: "Volume of cube, cuboid, cylinder, cone, prism, and pyramid." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Area and Volume of Frustum", objectives: "Surface area and volume of frustum of cone and pyramid; Compound shapes." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Statistics I", objectives: "Collection of meaningful data; Tabulation and presentation." },
            { week: "Week 9", topic: "Statistics II", objectives: "Frequency distribution; Graphs: linear, bar charts, histograms." },
            { week: "Week 10", topic: "Statistics III", objectives: "Pie charts; Frequency polygons." },
            { week: "Week 11", topic: "Revision", objectives: "General revision of the term's work." },
            { week: "Week 12", topic: "Examination", objectives: "End of term examination." },
            { week: "Week 13", topic: "Closing", objectives: "Term ends." }
          ]
        }
      ]
    },
    {
      title: "Citizenship and Heritage Studies",
      icon: "fa-monument",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Citizenship & Heritage Studies", objectives: "Meaning, scope, and importance; Differences between citizenship and heritage." },
            { week: "Week 2", topic: "Origin of Citizenship", objectives: "Birth, registration, naturalization, and honorary citizenship." },
            { week: "Week 3", topic: "Rights of Citizens", objectives: "Universal human rights; Constitutional rights in Nigeria; Rights vs privileges." },
            { week: "Week 4", topic: "Duties and Obligations of Citizens", objectives: "Civic responsibilities, loyalty, obedience to laws, and tax payment." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "National Symbols & Their Meanings", objectives: "Coat of arms, flag, anthem, pledge, currency, and the constitution." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Nigerian Heritage", objectives: "Cultural heritage (language, dress, festivals); Historical heritage (monuments, sites)." },
            { week: "Week 9", topic: "Preservation of Nigerian Heritage", objectives: "Role of government, communities, and families in preservation." },
            { week: "Week 10", topic: "Threats to National Heritage", objectives: "Urbanization, globalization, neglect, conflict, and corruption." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Citizenship by Law", objectives: "Legal frameworks governing citizenship in Nigeria (1999 Constitution)." },
            { week: "Week 2", topic: "Rule of Law", objectives: "Concept, importance, and equality before the law." },
            { week: "Week 3", topic: "Democratic Values", objectives: "Freedom, participation, tolerance, and accountability." },
            { week: "Week 4", topic: "National Unity & Integration", objectives: "Need, benefits, symbols, and strategies to promote unity." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Ethnic & Religious Heritage of Nigeria", objectives: "Diversity of ethnic groups and religions; Respect for plurality." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Interpersonal Relations & Social Harmony", objectives: "Peaceful co-existence, tolerance, and conflict resolution." },
            { week: "Week 9", topic: "Leadership & Followership", objectives: "Qualities of good leaders; Duties of followers; Examples from Nigerian history." },
            { week: "Week 10", topic: "Corruption & Its Effects on Citizenship", objectives: "Meaning, forms, dangers, and prevention of corruption." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Global Citizenship", objectives: "Concept, rights and responsibilities, and globalization." },
            { week: "Week 2", topic: "Citizenship Education in Other Countries", objectives: "Case studies from USA, UK, Ghana, and South Africa." },
            { week: "Week 3", topic: "International Organizations & Citizenship", objectives: "UN, AU, ECOWAS, and the Commonwealth." },
            { week: "Week 4", topic: "Protection of Human Rights", objectives: "NHRC, NGOs, judiciary, and international courts." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Cultural Exchange & Tourism", objectives: "Importance for heritage and the economy." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Contemporary Issues in Citizenship", objectives: "Migration, digital citizenship, and climate change." },
            { week: "Week 9", topic: "Patriotism", objectives: "Meaning, importance, and ways of showing patriotism." },
            { week: "Week 10", topic: "Civic Participation", objectives: "Voting, community service, and volunteering." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
        ]
        }
      ]
    },
        {
      title: "Biology",
      icon: "fa-leaf",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Recognizing Living Things", objectives: "Characteristics of living things; differences between plants and animals." },
            { week: "Week 2", topic: "Classification of Living Things", objectives: "Binomial nomenclature; kingdoms of living things." },
            { week: "Week 3", topic: "The Cell", objectives: "Cell structure, plant vs. animal cells, and functions of organelles." },
            { week: "Week 4", topic: "The Cell and Its Environment", objectives: "Osmosis, diffusion, and plasmolysis with practical examples." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Properties and Functions of the Cell", objectives: "Cellular respiration and growth." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Tissues and Supporting Systems", objectives: "Types of skeletons: hydrostatic, exoskeleton, and endoskeleton." },
            { week: "Week 9", topic: "Nutrition in Animals", objectives: "Classes of food, balanced diet, and food tests." },
            { week: "Week 10", topic: "Digestive System", objectives: "Human alimentary canal and the process of digestion." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Nutrition in Plants", objectives: "Photosynthesis, requirements, and light/dark reactions." },
            { week: "Week 2", topic: "Mineral Requirements of Plants", objectives: "Macro and micro-nutrients; effects of deficiencies." },
            { week: "Week 3", topic: "Transportation Systems", objectives: "Need for transport, materials transported, and media of transportation." },
            { week: "Week 4", topic: "Transport in Plants", objectives: "Xylem and phloem functions; transpiration." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Transport in Animals", objectives: "Structure of the heart, blood vessels, and composition of blood." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Respiratory Systems", objectives: "Types of respiratory organs in different animals." },
            { week: "Week 9", topic: "Mechanism of Breathing", objectives: "Inhalation and exhalation in humans and other mammals." },
            { week: "Week 10", topic: "Excretory Systems", objectives: "Waste products, excretory organs, and kidney functions." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Reproduction in Unicellular Organisms", objectives: "Asexual reproduction methods: binary fission, budding." },
            { week: "Week 2", topic: "Reproduction in Plants", objectives: "Structure of a flower, pollination, and fertilization." },
            { week: "Week 3", topic: "Reproduction in Animals", objectives: "Male and female reproductive systems in humans." },
            { week: "Week 4", topic: "Diseases and Health", objectives: "Pathogens, vectors, and transmission of diseases." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Public Health", objectives: "Sanitation, immunization, and community health." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Ecology: Basic Concepts", objectives: "Environment, habitat, niche, and population." },
            { week: "Week 9", topic: "Ecosystems", objectives: "Components of an ecosystem; food chains and food webs." },
            { week: "Week 10", topic: "Ecological Management", objectives: "Conservation of natural resources and pollution control." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Economics",
      icon: "fa-chart-line",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meaning of Economics", objectives: "Definitions by various economists; scope and importance." },
            { week: "Week 2", topic: "Basic Economic Concepts", objectives: "Wants, scarcity, scale of preference, choice, and opportunity cost." },
            { week: "Week 3", topic: "Basic Tools for Economic Analysis", objectives: "Tables, graphs, and charts; simple percentage calculations." },
            { week: "Week 4", topic: "Concept of Demand", objectives: "Definition, law of demand, and demand schedules." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Concept of Supply", objectives: "Definition, law of supply, and supply schedules." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Theory of Price Determination", objectives: "Equilibrium price and quantity; effects of changes in supply and demand." },
            { week: "Week 9", topic: "Theory of Production", objectives: "Meaning, types, and factors of production (Land, Labor)." },
            { week: "Week 10", topic: "Factors of Production II", objectives: "Capital and Entrepreneurship; division of labor." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Business Organizations I", objectives: "Sole proprietorship and partnership: features, advantages, disadvantages." },
            { week: "Week 2", topic: "Business Organizations II", objectives: "Joint stock companies (Private and Public Ltd)." },
            { week: "Week 3", topic: "Co-operative Societies", objectives: "Types, features, and importance of co-operatives." },
            { week: "Week 4", topic: "Public Enterprises", objectives: "Meaning, reasons for establishment, and privatization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Population", objectives: "Census, population size, growth rate, and demographics." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Labor Market", objectives: "Concept of labor force, supply, and demand for labor." },
            { week: "Week 9", topic: "Trade Unions", objectives: "Role of trade unions, employers' associations, and wage determination." },
            { week: "Week 10", topic: "Unemployment", objectives: "Causes, consequences, and solutions to unemployment in Nigeria." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Agriculture", objectives: "Systems of agriculture, importance, and problems." },
            { week: "Week 2", topic: "Agricultural Policies in Nigeria", objectives: "Review of past and present agricultural policies." },
            { week: "Week 3", topic: "Industrialization", objectives: "Meaning, importance, and problems of industrialization." },
            { week: "Week 4", topic: "Location of Industries", objectives: "Factors influencing location and localization of industries." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Distributive Trade", objectives: "Channels of distribution: Wholesalers, Retailers, and Consumers." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Money", objectives: "Trade by barter, definition of money, characteristics, and functions." },
            { week: "Week 9", topic: "Financial Institutions", objectives: "Commercial banks and central banks: functions and differences." },
            { week: "Week 10", topic: "Inflation", objectives: "Meaning, types, causes, and control of inflation." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Computer Studies",
      icon: "fa-desktop",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Fundamentals of Computing", objectives: "Definition of a computer, basic components, and uses." },
            { week: "Week 2", topic: "History of Computers", objectives: "Early counting devices (Abacus, Napier's Bones) to modern systems." },
            { week: "Week 3", topic: "Generations of Computers", objectives: "First to fifth generations and their core technologies." },
            { week: "Week 4", topic: "Classification of Computers", objectives: "By size (micro, mini, mainframe) and by type (analog, digital, hybrid)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Computer Hardware", objectives: "Input and Output devices; Central Processing Unit (CPU)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Computer Software", objectives: "System software vs. Application software; examples." },
            { week: "Week 9", topic: "Operating Systems", objectives: "Functions of an OS; examples like Windows, Linux, and macOS." },
            { week: "Week 10", topic: "Data and Information", objectives: "Differences between data and information; data processing cycle." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Information Transmission", objectives: "Methods of transmitting information: ancient and modern." },
            { week: "Week 2", topic: "Internet Basics", objectives: "Definition of the internet, web browsers, and search engines." },
            { week: "Week 3", topic: "Electronic Mail (E-mail)", objectives: "Creating an email account, sending, and receiving emails." },
            { week: "Week 4", topic: "Network Topologies", objectives: "Bus, Star, Ring, and Mesh topologies." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Introduction to Word Processing", objectives: "Using MS Word: creating, saving, and formatting text." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Word Processing Skills", objectives: "Inserting tables, images, and printing documents." },
            { week: "Week 9", topic: "Spreadsheet Applications", objectives: "Introduction to MS Excel; rows, columns, and cells." },
            { week: "Week 10", topic: "Basic Excel Formulas", objectives: "Using SUM, AVERAGE, and basic arithmetic in spreadsheets." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Presentation Packages", objectives: "Introduction to MS PowerPoint; creating basic slides." },
            { week: "Week 2", topic: "Advanced Presentation", objectives: "Adding animations, transitions, and multimedia to slides." },
            { week: "Week 3", topic: "Computer Ethics", objectives: "Responsible use of computers and the internet." },
            { week: "Week 4", topic: "Cybersecurity Basics", objectives: "Understanding malware, viruses, and how to protect systems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Logic Circuits I", objectives: "Introduction to logic gates (AND, OR, NOT)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Logic Circuits II", objectives: "Truth tables and simple combinations of gates." },
            { week: "Week 9", topic: "Introduction to Programming", objectives: "Concept of algorithms and flowcharts." },
            { week: "Week 10", topic: "Basic Programming Constructs", objectives: "Sequence, selection, and iteration in programming logic." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Chemistry",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Chemistry", objectives: "Definition, history, branches, and importance of chemistry." },
            { week: "Week 2", topic: "Chemical Industries & Lab Apparatus", objectives: "Common laboratory apparatus and their uses." },
            { week: "Week 3", topic: "Nature of Matter", objectives: "States of matter, properties, and changes of state." },
            { week: "Week 4", topic: "Separation Techniques", objectives: "Filtration, distillation, sublimation, chromatography." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Atomic Structure", objectives: "Structure of the atom; Subatomic particles." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Periodic Table", objectives: "Groups, periods, and periodicity." },
            { week: "Week 9", topic: "Chemical Combination", objectives: "Laws of chemical combination." },
            { week: "Week 10", topic: "Acids, Bases, and Salts", objectives: "Definitions, examples, properties; pH scale; Neutralization." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Writing symbols, formulae; Balancing equations, followed by exams." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Quantitative and Qualitative Analysis", objectives: "Basic concepts of chemical analysis." },
            { week: "Week 2", topic: "Mole Concept and Stoichiometry", objectives: "Mole, molar mass, Avogadroâ€™s number." },
            { week: "Week 3", topic: "Percentage Composition", objectives: "Calculations of composition and empirical formula." },
            { week: "Week 4", topic: "Gas Laws", objectives: "Boyleâ€™s law, Charlesâ€™ law, Ideal gas equation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Structure of the Atom II", objectives: "Bohrâ€™s model; Electronic configurations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Chemical Bonding", objectives: "Ionic and Covalent Bonding: Formation and properties." },
            { week: "Week 9", topic: "Oxidation and Reduction", objectives: "Definitions, examples, redox reactions." },
            { week: "Week 10", topic: "Water and Solution", objectives: "Properties, types of solutions, solubility, and crystallization." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Organic Chemistry", objectives: "Characteristics of organic compounds." },
            { week: "Week 2", topic: "Hydrocarbons", objectives: "Alkanes, Alkenes, and Alkynes: Structures, properties, and examples." },
            { week: "Week 3", topic: "Isomerism", objectives: "Structural and geometric isomerism." },
            { week: "Week 4", topic: "Petroleum and Petrochemicals", objectives: "Refining, fractional distillation of petroleum." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Chemical Reactions and Types", objectives: "Combination, decomposition, displacement." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Energy Changes in Reactions", objectives: "Endothermic and exothermic reactions." },
            { week: "Week 9", topic: "Rates of Chemical Reactions", objectives: "Factors affecting reaction rates." },
            { week: "Week 10", topic: "Chemical Equilibrium", objectives: "Reversible reactions and Le Chatelierâ€™s principle." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Metals and Non-Metals properties and uses, followed by exams." }
          ]
        }
      ]
    },
    {
      title: "Physics",
      icon: "fa-magnet",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Fundamentals and Derived Quantities", objectives: "Meaning of physical quantities, fundamental units, derived units, SI units." },
            { week: "Week 2", topic: "Measurements", objectives: "Measurement of mass, weight, length, and time; accuracy and errors." },
            { week: "Week 3", topic: "Position, Distance and Displacement", objectives: "Concept of position, difference between distance and displacement." },
            { week: "Week 4", topic: "Scalars and Vectors", objectives: "Definitions, differences, addition and resolution of vectors." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Speed, Velocity and Acceleration", objectives: "Definitions, equations, graphical representation." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Motion I", objectives: "Concept of motion, types of motion, equations of uniformly accelerated motion." },
            { week: "Week 9", topic: "Motion II", objectives: "Applications of equations of motion in real life." },
            { week: "Week 10", topic: "Motion III", objectives: "Graphical analysis of motion, problem-solving." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Linear Momentum", objectives: "Newtonâ€™s laws of motion, momentum, impulse, conservation of momentum." },
            { week: "Week 2", topic: "Work, Energy and Power", objectives: "Definitions, equations, work done in different contexts." },
            { week: "Week 3", topic: "Mechanical Energy: Machines", objectives: "Simple machines, efficiency, mechanical advantage, velocity ratio." },
            { week: "Week 4", topic: "Heat Energy I", objectives: "Temperature and Its Measurement: Concept of heat, temperature scales, thermometers." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Heat Energy II", objectives: "Heat Measurement: Specific heat capacity, latent heat, calorimetry." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Particulate Nature of Matter I", objectives: "Molecular theory, evidence of particle nature, Brownian motion." },
            { week: "Week 9", topic: "Particulate Nature of Matter II", objectives: "Diffusion, pressure in gases, applications." },
            { week: "Week 10", topic: "Particulate Nature of Matter III", objectives: "Real-life applications of particle theory." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Fluids at Rest and in Motion", objectives: "Pressure in fluids, Pascalâ€™s principle, Archimedesâ€™ principle, Bernoulliâ€™s principle." },
            { week: "Week 2", topic: "Gas Laws", objectives: "Boyleâ€™s law, Charlesâ€™ law, pressure law, ideal gas equation." },
            { week: "Week 3", topic: "Simple Harmonic Motion", objectives: "Concept, examples, characteristics, equations." },
            { week: "Week 4", topic: "Projectile Motion", objectives: "Concept, equations of projectile motion, range, maximum height." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Types of Waves", objectives: "Classification of waves: mechanical, electromagnetic, transverse, longitudinal." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Properties of Waves I", objectives: "Reflection, refraction, diffraction, interference, applications." },
            { week: "Week 9", topic: "Properties of Waves II", objectives: "Superposition of waves, resonance." },
            { week: "Week 10", topic: "Properties of Waves III", objectives: "Real-life applications of wave properties." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Agricultural Science",
      icon: "fa-tractor",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meaning and Importance of Agriculture", objectives: "Definition of agriculture; Importance to individuals and the nation." },
            { week: "Week 2", topic: "Problems of Agricultural Development", objectives: "Land tenure, low technology, poor storage, pests and diseases; Solutions." },
            { week: "Week 3", topic: "Subsistence and Commercial Agriculture", objectives: "Meaning, characteristics, and differences." },
            { week: "Week 4", topic: "Role of Government", objectives: "Agricultural programmes, credit facilities, and extension services." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Role of NGOs", objectives: "Contributions of NGOs (FAO, IFAD, etc.) to agricultural development." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Agricultural Laws and Reforms", objectives: "Land use decree, land tenure systems, and government reforms." },
            { week: "Week 9", topic: "Land and Its Uses", objectives: "Types of land use (agriculture, forestry, housing, mining)." },
            { week: "Week 10", topic: "Agricultural Ecology", objectives: "Components of farm ecosystem; Interactions of crops and animals." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Factors affecting land availability, followed by examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Agro-Allied Industries", objectives: "Meaning, examples (textile, breweries, oil mills), and relationship with agriculture." },
            { week: "Week 2", topic: "Environmental Factors", objectives: "Effects of rainfall, temperature, wind, soil, and biotic factors on agriculture." },
            { week: "Week 3", topic: "Rock Formation", objectives: "Types of rocks (igneous, sedimentary, metamorphic); Importance to agriculture." },
            { week: "Week 4", topic: "Soil Formation and Profile", objectives: "Processes of soil formation; Soil horizons and profiles." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Soil Types and Properties", objectives: "Types of soil; Physical and chemical properties; Soil texture and structure." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Simple Farm Tools", objectives: "Examples (hoe, cutlass, rake); Uses and maintenance practices." },
            { week: "Week 9", topic: "Farm Machinery and Implements", objectives: "Examples (tractors, planters, harvesters); Functions and advantages." },
            { week: "Week 10", topic: "Maintenance of Farm Machinery", objectives: "Care and servicing of implements; Safety precautions." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Problems of agricultural mechanization, followed by exams." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Prospects of Agricultural Mechanization", objectives: "Meaning, benefits, and limitations of mechanization." },
            { week: "Week 2", topic: "Sources of Farm Power", objectives: "Human, animal, mechanical, electrical, solar, wind, and water power." },
            { week: "Week 3", topic: "Classification of Crops", objectives: "Food crops, cash crops; Annuals, biennials, and perennials." },
            { week: "Week 4", topic: "Husbandry of Selected Crops", objectives: "Maize, cassava, yam: Land prep, planting, maintenance, and harvesting." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Pasture and Forage Crops", objectives: "Meaning, types, and importance in livestock production." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Plant Nutrients and Cycle", objectives: "Macro and micro-nutrients; Nitrogen and carbon cycles." },
            { week: "Week 9", topic: "Irrigation", objectives: "Definition, types of irrigation, and importance." },
            { week: "Week 10", topic: "Drainage", objectives: "Meaning, types of drainage systems, and importance." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "Agricultural pollution causes and control, followed by exams." }
          ]
        }
      ]
    },
    {
      title: "Solar PV Installation & Maintenance",
      icon: "fa-solar-panel",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Renewable Energy", objectives: "Meaning, sources (solar, wind, hydro, biomass), and importance in Nigeria." },
            { week: "Week 2", topic: "Basics of Solar Energy", objectives: "Solar radiation, photovoltaic effect, advantages & limitations." },
            { week: "Week 3", topic: "Solar Energy Terminologies", objectives: "Irradiance, insolation, efficiency, peak sun hours." },
            { week: "Week 4", topic: "Types of Solar Energy Systems", objectives: "Off-grid, on-grid, hybrid systems â€“ differences and applications." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Components of PV Systems I", objectives: "Solar panels: types (monocrystalline, polycrystalline, thin film), ratings." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Components of PV Systems II", objectives: "Charge controllers: types (PWM, MPPT) and functions." },
            { week: "Week 9", topic: "Components of PV Systems III", objectives: "Batteries: types (lead-acid, lithium-ion), sizing, and care." },
            { week: "Week 10", topic: "Components of PV Systems IV", objectives: "Inverters: types (pure sine, modified sine) and ratings." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Basic Electrical Concepts", objectives: "Current, voltage, resistance, power, and Ohmâ€™s law." },
            { week: "Week 2", topic: "Tools & Instruments in PV Installation", objectives: "Multimeter, clamp meter, solar tester, and hand tools." },
            { week: "Week 3", topic: "Solar Panel Connections I", objectives: "Series connection and voltage effects." },
            { week: "Week 4", topic: "Solar Panel Connections II", objectives: "Parallel connection and current effects." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Solar Panel Mounting Structures", objectives: "Types, orientations, tilt angle, and site assessment." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Wiring & Cabling", objectives: "DC & AC cabling, cable sizing, and safety." },
            { week: "Week 9", topic: "Earthing & Protection", objectives: "Surge protectors, grounding systems, and circuit breakers." },
            { week: "Week 10", topic: "Practical: Small Solar Setup", objectives: "Assembling a 12V DC lighting system." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "PV System Design Principles", objectives: "Load assessment and energy demand calculation." },
            { week: "Week 2", topic: "Sizing Solar Panels", objectives: "Calculating energy requirement vs. solar panel output." },
            { week: "Week 3", topic: "Sizing Batteries", objectives: "Daily load, depth of discharge, and battery autonomy." },
            { week: "Week 4", topic: "Sizing Charge Controllers & Inverters", objectives: "Ratings and efficiency considerations." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Practical PV System Design", objectives: "Case study: Designing a household system." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "PV System Installation Steps I", objectives: "Mounting panels and installing the balance of system." },
            { week: "Week 9", topic: "PV System Installation Steps II", objectives: "Electrical wiring, inverter, and battery connection." },
            { week: "Week 10", topic: "System Testing & Commissioning", objectives: "Voltage/current tests and performance checks." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Further Mathematics",
      icon: "fa-square-root-alt",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1-2", topic: "Sets", objectives: "Types of sets; Set operations (union, intersection, complement); Venn diagrams up to 3-set problems." },
            { week: "Week 3", topic: "Indices and Logarithms", objectives: "Laws of indices and logarithms; Solution of exponential equations." },
            { week: "Week 4", topic: "Surds", objectives: "Rules for manipulating surds; Rationalization of the denominator." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Linear Inequalities", objectives: "Linear inequalities in one and two variables; Graphs of linear inequalities." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Binary Operations", objectives: "Laws of binary operations; Identity element and inverse; Multiplication table." },
            { week: "Week 9", topic: "Functions", objectives: "Types of functions (one-to-one, inverse, identity, composite); Applications." },
            { week: "Week 10", topic: "Sequence and Series", objectives: "nth term and sum of Arithmetic (AP) and Geometric Progressions (GP)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1-2", topic: "Trigonometric Ratios & Logical Reasoning", objectives: "Special angles (30Â°, 45Â°, 60Â°); Introduction to logical reasoning." },
            { week: "Week 3", topic: "Calculating and Processing Devices", objectives: "Abacus; Decimal and binary systems; Flow charts and applications." },
            { week: "Week 4", topic: "Straight Line in Coordinate Geometry", objectives: "Midpoint, gradient, distance between points, and equation of a straight line." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Vectors in Two Dimensions I", objectives: "Scalars and vectors; Vector addition and scalar multiplication; Unit vectors." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Vectors in Two Dimensions II", objectives: "Triangle and parallelogram law; Resolution of vectors; Scalar (dot) product." },
            { week: "Week 9-10", topic: "Revision", objectives: "General revision of topics covered." },
            { week: "Week 11-13", topic: "Examination & Closing", objectives: "End of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1-2", topic: "Location", objectives: "Measures of central tendency: mean, mode, median, deciles, percentiles, quartiles." },
            { week: "Week 3-4", topic: "Measures of Dispersion", objectives: "Range, interquartile range, mean deviation, standard deviation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Measures of Location", objectives: "Coefficient of variation and its applications." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Operations Research", objectives: "Meaning and scope; Models (linear programming, transportation, assignment)." },
            { week: "Week 9", topic: "Models", objectives: "Practical application of linear programming and assignment models." },
            { week: "Week 10", topic: "Application of Models", objectives: "Further applications of OR models in real-life problem-solving." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Geography",
      icon: "fa-globe-africa",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Geography", objectives: "Meaning, nature, scope, and value of geography." },
            { week: "Week 2", topic: "The Earth and Other Planets", objectives: "Characteristics of the Earth; Comparison with other planets." },
            { week: "Week 3", topic: "Earthâ€™s Rotation and Revolution", objectives: "Effects of rotation; Revolution (seasons, solstices, equinoxes)." },
            { week: "Week 4", topic: "Latitudes and Longitudes", objectives: "Definitions, uses in location and time calculation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "The Earthâ€™s Structure", objectives: "Layers: crust, mantle, core â€“ composition and importance." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Rocks", objectives: "Types of rocks: igneous, sedimentary, metamorphic; Formation." },
            { week: "Week 9", topic: "Town/Village", objectives: "Characteristics, similarities, and differences." },
            { week: "Week 10", topic: "The Local Government Area (LGA)", objectives: "Definition, functions, and importance in geography." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Mountains", objectives: "Types: block, fold, volcanic; Formation and importance." },
            { week: "Week 2", topic: "Lowlands", objectives: "Types, examples in Nigeria and West Africa, importance." },
            { week: "Week 3", topic: "The Environment", objectives: "Meaning, components (physical and human), interactions." },
            { week: "Week 4", topic: "Weather", objectives: "Meaning, elements of weather, instruments for measurement." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Climate I", objectives: "Meaning, elements, and factors influencing climate." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Nigeria: Location and Position", objectives: "Latitudinal and longitudinal extent, boundaries, neighbours." },
            { week: "Week 9", topic: "Physical Setting of Nigeria", objectives: "Relief, drainage, and vegetation zones." },
            { week: "Week 10-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Population of Nigeria", objectives: "Size, distribution, density, factors influencing population." },
            { week: "Week 2", topic: "Resources of Nigeria", objectives: "Types: human and natural; Distribution and importance." },
            { week: "Week 3", topic: "Basic Concepts in Map Reading", objectives: "Scale, direction, symbols, conventional signs." },
            { week: "Week 4", topic: "Map Distances", objectives: "Methods of measuring distances on maps." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Map Reduction and Enlargement", objectives: "Techniques and practical exercises." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Interpretation of Features", objectives: "Relief, drainage, settlement, transport features." },
            { week: "Week 9", topic: "Transportation", objectives: "Modes: road, rail, water, air; Importance and problems." },
            { week: "Week 10-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Technical Drawing",
      icon: "fa-ruler-combined",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Technical Drawing", objectives: "Meaning; Career opportunities; Uses of drawing materials." },
            { week: "Week 2", topic: "Safe Working Habits", objectives: "Practice of good and safe working habits in technical drawing." },
            { week: "Week 3", topic: "Board Practice", objectives: "Fixing drawing sheet; Sharpening pencil; Drawing borderlines and title block." },
            { week: "Week 4", topic: "Lines", objectives: "Identification of line types and their applications." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Lettering and Numbering", objectives: "Upper and lower case letters; Writing numbers 0â€“9 correctly." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Plane Geometry â€“ Division of Line", objectives: "Bisection and trisection of lines; Dividing lines into equal parts/ratios." },
            { week: "Week 9", topic: "Circles", objectives: "Types of circles; Parts and properties; Division into equal parts." },
            { week: "Week 10", topic: "Angles", objectives: "Construction and Measurement; Classification and description of angles." },
            { week: "Week 11", topic: "Triangles", objectives: "Types, construction, and inscribed/circumscribed circles." },
            { week: "Week 12-13", topic: "Quadrilaterals & Revision", objectives: "Properties and construction of quadrilaterals; End of term exams." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1-3", topic: "Introduction to Polygons", objectives: "Properties and construction of regular and irregular polygons." },
            { week: "Week 4", topic: "Scales", objectives: "Types of scales (plain, diagonal, RF); Reading and interpreting scales." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Enlargement and Reduction", objectives: "Enlargement and reduction of plane figures using ratios." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8-9", topic: "Equal Areas of Similar Figures", objectives: "Principles of determining equal areas; Graphical methods." },
            { week: "Week 10", topic: "Tangents and Tangency", objectives: "Properties and construction of tangents to circles." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1-3", topic: "Loci, Parabola, Hyperbola, Ellipse", objectives: "Construction and plotting of loci, parabola, hyperbola, and ellipse." },
            { week: "Week 4", topic: "Prisms", objectives: "Properties and construction; Cardboard model production." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Pyramids and Cones", objectives: "Properties and construction; Cardboard model production." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8-9", topic: "Surface Development", objectives: "Construction of surface development of frustum of solids." },
            { week: "Week 10", topic: "Dimensioning", objectives: "Principles and rules guiding dimensioning." },
            { week: "Week 11", topic: "Construction of Isometric", objectives: "Isometric drawing and axis; Techniques of isometric circles." },
            { week: "Week 12-13", topic: "Examination & Closing", objectives: "End of term examination and activities." }
          ]
        }
      ]
    },
    {
      title: "Nigerian History",
      icon: "fa-landmark",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to History", objectives: "Meaning, scope, and importance of History in nation-building." },
            { week: "Week 2", topic: "Why We Teach History", objectives: "Educational, moral, political, and social values." },
            { week: "Week 3", topic: "Sources of History I", objectives: "Oral tradition, written sources, archaeology, linguistics." },
            { week: "Week 4", topic: "Sources of History II and Dating", objectives: "Determining historical time â€“ calendar systems, radiocarbon dating." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Historical Skills", objectives: "Ancient and modern approaches; critical thinking, evaluation of evidence." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Prospects of ICT in Historical Studies", objectives: "Use of ICT in data collection, storage, and presentation." },
            { week: "Week 9", topic: "Land and Peoples of Nigeria", objectives: "Geographical and ethnic diversity; major ethnic groups." },
            { week: "Week 10", topic: "Traditions of Origin", objectives: "Myths, legends, and oral accounts of the origins of major groups." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Early Centres of Civilization", objectives: "Nok culture, Igbo-Ukwu, Ife, and Benin civilizations." },
            { week: "Week 2", topic: "State Formation Process I", objectives: "Concept of centralized and non-centralized states." },
            { week: "Week 3", topic: "Centralized States I", objectives: "Kanem and Bornu to 1800 â€“ political organization, trade, and religion." },
            { week: "Week 4", topic: "Centralized States II", objectives: "Hausa States to 1800 â€“ city-states, economy, and leadership." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Centralized States III", objectives: "Nupe, Jukun, Ife, Oyo, Benin, and Efik â€“ origins and administration." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Non-Centralized States I", objectives: "Tiv, Idoma, Igbo, Ibibio, Ijaw â€“ social and political organization." },
            { week: "Week 9", topic: "Non-Centralized States II", objectives: "Aspects of their history and inter-group interactions." },
            { week: "Week 10", topic: "Inter-group Relations I", objectives: "Economic activities, trade between groups, and cultural exchanges." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Inter-group Relations II", objectives: "The impact of migrations, wars, and politics." },
            { week: "Week 2", topic: "Indigenous Technology and Industries", objectives: "Iron smelting, weaving, pottery, carving, and blacksmithing." },
            { week: "Week 3", topic: "Early External Influences", objectives: "Contact with North African trade and introduction of Islam." },
            { week: "Week 4", topic: "The Trans-Saharan Trade", objectives: "Routes, goods exchanged, and impact on Nigerian societies." },
            { week: "Week 5", topic: "Midterm Test", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Islam in Kanem-Bornu and Hausa Land", objectives: "Spread, influence, and contributions to governance." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Early European Contacts", objectives: "Arrival of the Portuguese; trade, exploration, and missionary activities." },
            { week: "Week 9", topic: "Trans-Atlantic Slave Trade I", objectives: "Origin and organization of the Atlantic slave trade." },
            { week: "Week 10", topic: "Trans-Atlantic Slave Trade II", objectives: "Effects of the slave trade on African societies and economies." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Government",
      icon: "fa-university",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meaning and Scope of Government", objectives: "Government as an institution, a process, and an academic field of study." },
            { week: "Week 2", topic: "Basic Concepts in Government I", objectives: "Power, Authority, and Legitimacy: Definitions and sources." },
            { week: "Week 3", topic: "Basic Concepts in Government II", objectives: "Sovereignty: Meaning, characteristics, types, and limitations." },
            { week: "Week 4", topic: "Basic Concepts in Government III", objectives: "Democracy, Political Culture, and Political Socialization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Types and Characteristics of Government", objectives: "Unitary, Federal, and Confederal systems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Systems of Government", objectives: "Presidential and Parliamentary (Cabinet) systems of government." },
            { week: "Week 9", topic: "Types of Government", objectives: "Monarchy, Aristocracy, Oligarchy, and Autocracy." },
            { week: "Week 10", topic: "Constitutions", objectives: "Meaning, sources, features, and types (Written, Unwritten, Rigid, Flexible)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Constitutionalism", objectives: "Meaning, principles, and limitations." },
            { week: "Week 2", topic: "Organs of Government I", objectives: "The Executive: Types, functions, and control." },
            { week: "Week 3", topic: "Organs of Government II", objectives: "The Legislature: Types (unicameral, bicameral), functions, and bills." },
            { week: "Week 4", topic: "Organs of Government III", objectives: "The Judiciary: Functions, independence, and separation of powers." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Rule of Law", objectives: "Meaning, principles, and limitations to the rule of law." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Fundamental Human Rights", objectives: "Meaning, types, and how they can be safeguarded." },
            { week: "Week 9", topic: "Political Parties", objectives: "Definition, types, functions, and party systems." },
            { week: "Week 10", topic: "Pressure Groups", objectives: "Meaning, types, functions, and modes of operation." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Franchise (Suffrage)", objectives: "Meaning, types, and qualifications for franchise." },
            { week: "Week 2", topic: "Elections", objectives: "Meaning, functions, and types of electoral systems." },
            { week: "Week 3", topic: "Electoral Commission", objectives: "Roles, functions, and features of an independent electoral commission." },
            { week: "Week 4", topic: "Public Administration", objectives: "Civil Service: Meaning, characteristics, functions, and problems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Public Corporations", objectives: "Meaning, reasons for establishment, structure, and control." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Local Government", objectives: "Meaning, reasons for creation, functions, and sources of finance." },
            { week: "Week 9", topic: "Pre-Colonial Administration in Nigeria", objectives: "Hausa/Fulani, Yoruba, and Igbo traditional political systems." },
            { week: "Week 10", topic: "Colonial Administration", objectives: "Indirect rule in Nigeria: Successes and failures." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Christian Religious Studies",
      icon: "fa-bible",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Sovereignty of God", objectives: "God the Creator; The Creation story." },
            { week: "Week 2", topic: "Leadership Roles", objectives: "Joseph as a leader: Early life, dreams, and betrayal." },
            { week: "Week 3", topic: "Leadership Roles II", objectives: "Moses: Birth, call, and leading Israelites out of Egypt." },
            { week: "Week 4", topic: "Leadership Roles III", objectives: "Joshua: Commissioning, crossing the Jordan, and capturing Jericho." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Leadership Roles IV", objectives: "Deborah and Barak: Leading the Israelites to victory." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "God's Care for His People", objectives: "Provision in the wilderness (Manna, Quail, Water)." },
            { week: "Week 9", topic: "The Ten Commandments", objectives: "Giving of the law at Mount Sinai and its significance." },
            { week: "Week 10", topic: "Consequences of Disobedience", objectives: "Saul's disobedience and rejection as king." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Submission to the Will of God", objectives: "David's submission and repentance; Jonah's call and submission." },
            { week: "Week 2", topic: "Making Decisions", objectives: "Solomon's wisdom and decisions; Rehoboam's unwise decision." },
            { week: "Week 3", topic: "Greed and Its Effects", objectives: "Ahab and Naboth's vineyard; Gehazi's greed." },
            { week: "Week 4", topic: "The Supremacy of God", objectives: "Elijah at Mount Carmel; Religious reforms of Josiah." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Courage", objectives: "Daniel, Shadrach, Meshach, and Abednego." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Early Life of Jesus", objectives: "Annunciation, birth, and presentation in the temple." },
            { week: "Week 9", topic: "The Baptism and Temptation", objectives: "Significance of Jesus' baptism and triumph over temptation." },
            { week: "Week 10", topic: "Call of the Disciples", objectives: "The twelve disciples and the demands of discipleship." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Jesus' Teachings I", objectives: "The Sermon on the Mount; The Beatitudes." },
            { week: "Week 2", topic: "Jesus' Teachings II", objectives: "Parables of the Kingdom (Sower, Mustard Seed, Wheat and Tares)." },
            { week: "Week 3", topic: "Miracles of Jesus", objectives: "Nature miracles, healing, and raising the dead." },
            { week: "Week 4", topic: "The Triumphal Entry", objectives: "Significance of Jesus entering Jerusalem." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "The Last Supper", objectives: "Institution of the Lord's Supper and betrayal by Judas." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Trial and Crucifixion", objectives: "Jesus before the High Priest and Pilate; The crucifixion." },
            { week: "Week 9", topic: "Resurrection and Ascension", objectives: "The empty tomb, appearances, and the Great Commission." },
            { week: "Week 10", topic: "The Holy Spirit", objectives: "Promise of the Holy Spirit and the Day of Pentecost." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Literature-in-English",
      icon: "fa-book-open",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Literature", objectives: "Meaning, nature, and functions of literature." },
            { week: "Week 2", topic: "Genres of Literature", objectives: "Features of Prose, Drama, and Poetry." },
            { week: "Week 3", topic: "Literary Appreciation", objectives: "Elements of prose: Plot, setting, characterization, and theme." },
            { week: "Week 4", topic: "Figures of Speech I", objectives: "Simile, metaphor, personification, and hyperbole." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Figures of Speech II", objectives: "Irony, paradox, oxymoron, and euphemism." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Introduction to Drama", objectives: "Types of drama (Tragedy, Comedy, Tragicomedy); Elements of drama." },
            { week: "Week 9", topic: "African Drama", objectives: "Reading and analysis of recommended African play." },
            { week: "Week 10", topic: "African Drama (Cont'd)", objectives: "Thematic analysis and character study of recommended African play." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Poetry", objectives: "Structure, form, and poetic devices (rhyme, rhythm, stanza)." },
            { week: "Week 2", topic: "Types of Poetry", objectives: "Sonnet, ode, elegy, lyric, epic, and ballad." },
            { week: "Week 3", topic: "African Poetry", objectives: "Analysis of selected African poems: themes and poetic devices." },
            { week: "Week 4", topic: "African Poetry (Cont'd)", objectives: "Detailed study of more selected African poems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Non-African Poetry", objectives: "Analysis of selected non-African poems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Introduction to Prose", objectives: "Types of prose (Fiction vs. Non-fiction); Narrative techniques." },
            { week: "Week 9", topic: "African Prose", objectives: "Reading and plot analysis of recommended African novel." },
            { week: "Week 10", topic: "African Prose (Cont'd)", objectives: "Characterization and themes of recommended African novel." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Non-African Drama", objectives: "Background and plot summary of recommended Non-African play." },
            { week: "Week 2", topic: "Non-African Drama (Cont'd)", objectives: "Thematic concerns and dramatic techniques." },
            { week: "Week 3", topic: "Character Study", objectives: "Detailed character analysis in recommended Non-African play." },
            { week: "Week 4", topic: "Non-African Prose", objectives: "Background and plot summary of recommended Non-African novel." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Non-African Prose (Cont'd)", objectives: "Thematic analysis and narrative style." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Unseen Poetry", objectives: "Techniques for analyzing unseen poems." },
            { week: "Week 9", topic: "Unseen Prose", objectives: "Techniques for answering questions on unseen prose passages." },
            { week: "Week 10", topic: "General Literary Review", objectives: "Comparing themes across recommended texts." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Accounting",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Bookkeeping and Accounting", objectives: "History, definition, objectives, and importance." },
            { week: "Week 2", topic: "Accounting Concepts and Conventions", objectives: "Entity, going concern, materiality, historical cost, and matching concepts." },
            { week: "Week 3", topic: "The Accounting Equation", objectives: "Assets = Capital + Liabilities; Practical applications." },
            { week: "Week 4", topic: "Source Documents", objectives: "Receipts, invoices, vouchers, debit/credit notes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Books of Original Entry", objectives: "Sales journal, purchases journal, return inwards, and outwards journals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Ledger and Double Entry Principle", objectives: "Posting from subsidiary books to the ledger." },
            { week: "Week 9", topic: "The Cash Book (Single Column)", objectives: "Format, recording transactions, and balancing." },
            { week: "Week 10", topic: "The Cash Book (Two Column)", objectives: "Recording cash and bank transactions; Contra entries." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "The Cash Book (Three Column)", objectives: "Recording cash, bank, and discount allowed/received." },
            { week: "Week 2", topic: "Petty Cash Book", objectives: "Imprest system, preparation of petty cash book." },
            { week: "Week 3", topic: "The Trial Balance", objectives: "Meaning, uses, rules of extraction, and preparation." },
            { week: "Week 4", topic: "Errors in Accounting", objectives: "Errors that affect and do not affect the trial balance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Correction of Errors", objectives: "Using the suspense account to correct errors." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Bank Reconciliation Statement I", objectives: "Causes of differences between cash book and bank statement." },
            { week: "Week 9", topic: "Bank Reconciliation Statement II", objectives: "Preparation of adjusted cash book and reconciliation statement." },
            { week: "Week 10", topic: "Final Accounts of a Sole Trader", objectives: "Introduction to Trading Account." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Final Accounts of a Sole Trader (Cont'd)", objectives: "Profit and Loss Account." },
            { week: "Week 2", topic: "Balance Sheet", objectives: "Format, classification of assets and liabilities." },
            { week: "Week 3", topic: "Adjustments in Final Accounts I", objectives: "Prepayments and Accruals." },
            { week: "Week 4", topic: "Adjustments in Final Accounts II", objectives: "Provision for bad/doubtful debts and depreciation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Depreciation of Fixed Assets", objectives: "Meaning, causes, straight line, and reducing balance methods." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Control Accounts", objectives: "Sales ledger and purchases ledger control accounts." },
            { week: "Week 9", topic: "Manufacturing Accounts", objectives: "Cost of production, prime cost, factory overheads." },
            { week: "Week 10", topic: "Single Entry and Incomplete Records", objectives: "Statement of affairs, calculation of profit or loss." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Commerce",
      icon: "fa-store",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Commerce", objectives: "Meaning, scope, characteristics, and functions of commerce." },
            { week: "Week 2", topic: "Occupation", objectives: "Meaning, classification of occupation (industry, commerce, services)." },
            { week: "Week 3", topic: "Production", objectives: "Meaning, types (primary, secondary, tertiary), and factors of production." },
            { week: "Week 4", topic: "Division of Labor & Specialization", objectives: "Meaning, advantages, disadvantages, and limitations." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Trade", objectives: "Meaning, classification (Home and Foreign trade)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Home Trade", objectives: "Retail trade: Meaning, characteristics, functions of the retailer." },
            { week: "Week 9", topic: "Types of Retail Outlets", objectives: "Small scale (hawking, mobile shops) vs Large scale (department stores, supermarkets)." },
            { week: "Week 10", topic: "Wholesale Trade", objectives: "Meaning, types, functions of the wholesaler to manufacturer and retailer." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Foreign Trade", objectives: "Meaning, types (import, export, entrepot), and barriers." },
            { week: "Week 2", topic: "Documents used in Foreign Trade", objectives: "Indent, Bill of Lading, Consular Invoice, Certificate of Origin." },
            { week: "Week 3", topic: "Terms of Quoting Prices", objectives: "FOB, CIF, FAS, FOR." },
            { week: "Week 4", topic: "Business Organizations: Sole Proprietorship", objectives: "Meaning, features, sources of capital, advantages, and disadvantages." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Partnership", objectives: "Meaning, types of partners, deed of partnership, advantages, and disadvantages." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Limited Liability Companies", objectives: "Private and Public companies; Formation and features." },
            { week: "Week 9", topic: "Co-operative Societies", objectives: "Meaning, types, features, advantages, and disadvantages." },
            { week: "Week 10", topic: "Public Enterprises", objectives: "Reasons for establishment, features, and problems." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Money", objectives: "Trade by barter; Origin, definition, and characteristics of money." },
            { week: "Week 2", topic: "Functions of Money", objectives: "Medium of exchange, store of value, standard of deferred payment." },
            { week: "Week 3", topic: "Commercial Banks", objectives: "Meaning, functions, types of accounts (savings, current, fixed deposit)." },
            { week: "Week 4", topic: "Central Bank", objectives: "Meaning, functions, and differences from commercial banks." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Other Financial Institutions", objectives: "Mortgage banks, Merchant banks, Insurance companies." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Insurance", objectives: "Meaning, principles (insurable interest, indemnity, utmost good faith)." },
            { week: "Week 9", topic: "Types of Insurance", objectives: "Life and non-life insurance (marine, fire, motor)." },
            { week: "Week 10", topic: "Communication", objectives: "Importance in commerce; Traditional and modern methods (NIPOST, Courier, Internet)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Marketing",
      icon: "fa-bullhorn",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Marketing", objectives: "Meaning, definitions, and history of marketing." },
            { week: "Week 2", topic: "Importance of Marketing", objectives: "Functions to the economy, society, and business." },
            { week: "Week 3", topic: "Marketing Concepts I", objectives: "Production concept, product concept, selling concept." },
            { week: "Week 4", topic: "Marketing Concepts II", objectives: "Marketing concept and societal marketing concept." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Marketing Mix (The 4Ps)", objectives: "Product, Price, Place, and Promotion." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Market Segmentation", objectives: "Meaning, bases for segmentation (demographic, geographic, psychographic)." },
            { week: "Week 9", topic: "Consumer Behavior", objectives: "Meaning and factors influencing consumer buying decisions." },
            { week: "Week 10", topic: "Types of Consumers", objectives: "Individual consumers vs. Organizational consumers." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "The Product", objectives: "Meaning, levels of a product, classification of products." },
            { week: "Week 2", topic: "Product Life Cycle", objectives: "Introduction, growth, maturity, and decline stages." },
            { week: "Week 3", topic: "New Product Development", objectives: "Stages from idea generation to commercialization." },
            { week: "Week 4", topic: "Branding and Packaging", objectives: "Meaning, importance, types of brands, and packaging functions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Pricing", objectives: "Meaning, objectives, and factors influencing pricing." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Pricing Strategies", objectives: "Skimming, penetration, psychological, and cost-plus pricing." },
            { week: "Week 9", topic: "Distribution (Place)", objectives: "Channels of distribution, intermediaries (wholesalers, retailers)." },
            { week: "Week 10", topic: "Physical Distribution", objectives: "Transportation, warehousing, inventory control, and order processing." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Promotion", objectives: "Meaning, objectives, and the promotional mix." },
            { week: "Week 2", topic: "Advertising", objectives: "Meaning, types, media, advantages, and disadvantages." },
            { week: "Week 3", topic: "Personal Selling", objectives: "Meaning, steps in the selling process, qualities of a good salesperson." },
            { week: "Week 4", topic: "Sales Promotion", objectives: "Techniques used for consumers and trade." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Public Relations", objectives: "Meaning, tools, and importance to marketing." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Marketing Research", objectives: "Meaning, importance, and steps in the research process." },
            { week: "Week 9", topic: "E-Marketing", objectives: "Meaning, importance, and tools (social media, websites, email)." },
            { week: "Week 10", topic: "International Marketing", objectives: "Meaning, reasons for going international, and challenges." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Government",
      icon: "fa-university",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meaning and Scope of Government", objectives: "Government as an institution, a process, and an academic field of study." },
            { week: "Week 2", topic: "Basic Concepts in Government I", objectives: "Power, Authority, and Legitimacy: Definitions and sources." },
            { week: "Week 3", topic: "Basic Concepts in Government II", objectives: "Sovereignty: Meaning, characteristics, types, and limitations." },
            { week: "Week 4", topic: "Basic Concepts in Government III", objectives: "Democracy, Political Culture, and Political Socialization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Types and Characteristics of Government", objectives: "Unitary, Federal, and Confederal systems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Systems of Government", objectives: "Presidential and Parliamentary (Cabinet) systems of government." },
            { week: "Week 9", topic: "Types of Government", objectives: "Monarchy, Aristocracy, Oligarchy, and Autocracy." },
            { week: "Week 10", topic: "Constitutions", objectives: "Meaning, sources, features, and types (Written, Unwritten, Rigid, Flexible)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Constitutionalism", objectives: "Meaning, principles, and limitations." },
            { week: "Week 2", topic: "Organs of Government I", objectives: "The Executive: Types, functions, and control." },
            { week: "Week 3", topic: "Organs of Government II", objectives: "The Legislature: Types (unicameral, bicameral), functions, and bills." },
            { week: "Week 4", topic: "Organs of Government III", objectives: "The Judiciary: Functions, independence, and separation of powers." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Rule of Law", objectives: "Meaning, principles, and limitations to the rule of law." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Fundamental Human Rights", objectives: "Meaning, types, and how they can be safeguarded." },
            { week: "Week 9", topic: "Political Parties", objectives: "Definition, types, functions, and party systems." },
            { week: "Week 10", topic: "Pressure Groups", objectives: "Meaning, types, functions, and modes of operation." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Franchise (Suffrage)", objectives: "Meaning, types, and qualifications for franchise." },
            { week: "Week 2", topic: "Elections", objectives: "Meaning, functions, and types of electoral systems." },
            { week: "Week 3", topic: "Electoral Commission", objectives: "Roles, functions, and features of an independent electoral commission." },
            { week: "Week 4", topic: "Public Administration", objectives: "Civil Service: Meaning, characteristics, functions, and problems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Public Corporations", objectives: "Meaning, reasons for establishment, structure, and control." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Local Government", objectives: "Meaning, reasons for creation, functions, and sources of finance." },
            { week: "Week 9", topic: "Pre-Colonial Administration in Nigeria", objectives: "Hausa/Fulani, Yoruba, and Igbo traditional political systems." },
            { week: "Week 10", topic: "Colonial Administration", objectives: "Indirect rule in Nigeria: Successes and failures." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Christian Religious Studies",
      icon: "fa-bible",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Sovereignty of God", objectives: "God the Creator; The Creation story." },
            { week: "Week 2", topic: "Leadership Roles", objectives: "Joseph as a leader: Early life, dreams, and betrayal." },
            { week: "Week 3", topic: "Leadership Roles II", objectives: "Moses: Birth, call, and leading Israelites out of Egypt." },
            { week: "Week 4", topic: "Leadership Roles III", objectives: "Joshua: Commissioning, crossing the Jordan, and capturing Jericho." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Leadership Roles IV", objectives: "Deborah and Barak: Leading the Israelites to victory." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "God's Care for His People", objectives: "Provision in the wilderness (Manna, Quail, Water)." },
            { week: "Week 9", topic: "The Ten Commandments", objectives: "Giving of the law at Mount Sinai and its significance." },
            { week: "Week 10", topic: "Consequences of Disobedience", objectives: "Saul's disobedience and rejection as king." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Submission to the Will of God", objectives: "David's submission and repentance; Jonah's call and submission." },
            { week: "Week 2", topic: "Making Decisions", objectives: "Solomon's wisdom and decisions; Rehoboam's unwise decision." },
            { week: "Week 3", topic: "Greed and Its Effects", objectives: "Ahab and Naboth's vineyard; Gehazi's greed." },
            { week: "Week 4", topic: "The Supremacy of God", objectives: "Elijah at Mount Carmel; Religious reforms of Josiah." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Courage", objectives: "Daniel, Shadrach, Meshach, and Abednego." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Early Life of Jesus", objectives: "Annunciation, birth, and presentation in the temple." },
            { week: "Week 9", topic: "The Baptism and Temptation", objectives: "Significance of Jesus' baptism and triumph over temptation." },
            { week: "Week 10", topic: "Call of the Disciples", objectives: "The twelve disciples and the demands of discipleship." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Jesus' Teachings I", objectives: "The Sermon on the Mount; The Beatitudes." },
            { week: "Week 2", topic: "Jesus' Teachings II", objectives: "Parables of the Kingdom (Sower, Mustard Seed, Wheat and Tares)." },
            { week: "Week 3", topic: "Miracles of Jesus", objectives: "Nature miracles, healing, and raising the dead." },
            { week: "Week 4", topic: "The Triumphal Entry", objectives: "Significance of Jesus entering Jerusalem." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "The Last Supper", objectives: "Institution of the Lord's Supper and betrayal by Judas." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Trial and Crucifixion", objectives: "Jesus before the High Priest and Pilate; The crucifixion." },
            { week: "Week 9", topic: "Resurrection and Ascension", objectives: "The empty tomb, appearances, and the Great Commission." },
            { week: "Week 10", topic: "The Holy Spirit", objectives: "Promise of the Holy Spirit and the Day of Pentecost." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Literature-in-English",
      icon: "fa-book-open",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Literature", objectives: "Meaning, nature, and functions of literature." },
            { week: "Week 2", topic: "Genres of Literature", objectives: "Features of Prose, Drama, and Poetry." },
            { week: "Week 3", topic: "Literary Appreciation", objectives: "Elements of prose: Plot, setting, characterization, and theme." },
            { week: "Week 4", topic: "Figures of Speech I", objectives: "Simile, metaphor, personification, and hyperbole." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Figures of Speech II", objectives: "Irony, paradox, oxymoron, and euphemism." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Introduction to Drama", objectives: "Types of drama (Tragedy, Comedy, Tragicomedy); Elements of drama." },
            { week: "Week 9", topic: "African Drama", objectives: "Reading and analysis of recommended African play." },
            { week: "Week 10", topic: "African Drama (Cont'd)", objectives: "Thematic analysis and character study of recommended African play." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Poetry", objectives: "Structure, form, and poetic devices (rhyme, rhythm, stanza)." },
            { week: "Week 2", topic: "Types of Poetry", objectives: "Sonnet, ode, elegy, lyric, epic, and ballad." },
            { week: "Week 3", topic: "African Poetry", objectives: "Analysis of selected African poems: themes and poetic devices." },
            { week: "Week 4", topic: "African Poetry (Cont'd)", objectives: "Detailed study of more selected African poems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Non-African Poetry", objectives: "Analysis of selected non-African poems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Introduction to Prose", objectives: "Types of prose (Fiction vs. Non-fiction); Narrative techniques." },
            { week: "Week 9", topic: "African Prose", objectives: "Reading and plot analysis of recommended African novel." },
            { week: "Week 10", topic: "African Prose (Cont'd)", objectives: "Characterization and themes of recommended African novel." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Non-African Drama", objectives: "Background and plot summary of recommended Non-African play." },
            { week: "Week 2", topic: "Non-African Drama (Cont'd)", objectives: "Thematic concerns and dramatic techniques." },
            { week: "Week 3", topic: "Character Study", objectives: "Detailed character analysis in recommended Non-African play." },
            { week: "Week 4", topic: "Non-African Prose", objectives: "Background and plot summary of recommended Non-African novel." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Non-African Prose (Cont'd)", objectives: "Thematic analysis and narrative style." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Unseen Poetry", objectives: "Techniques for analyzing unseen poems." },
            { week: "Week 9", topic: "Unseen Prose", objectives: "Techniques for answering questions on unseen prose passages." },
            { week: "Week 10", topic: "General Literary Review", objectives: "Comparing themes across recommended texts." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Accounting",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Bookkeeping and Accounting", objectives: "History, definition, objectives, and importance." },
            { week: "Week 2", topic: "Accounting Concepts and Conventions", objectives: "Entity, going concern, materiality, historical cost, and matching concepts." },
            { week: "Week 3", topic: "The Accounting Equation", objectives: "Assets = Capital + Liabilities; Practical applications." },
            { week: "Week 4", topic: "Source Documents", objectives: "Receipts, invoices, vouchers, debit/credit notes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Books of Original Entry", objectives: "Sales journal, purchases journal, return inwards, and outwards journals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "The Ledger and Double Entry Principle", objectives: "Posting from subsidiary books to the ledger." },
            { week: "Week 9", topic: "The Cash Book (Single Column)", objectives: "Format, recording transactions, and balancing." },
            { week: "Week 10", topic: "The Cash Book (Two Column)", objectives: "Recording cash and bank transactions; Contra entries." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "The Cash Book (Three Column)", objectives: "Recording cash, bank, and discount allowed/received." },
            { week: "Week 2", topic: "Petty Cash Book", objectives: "Imprest system, preparation of petty cash book." },
            { week: "Week 3", topic: "The Trial Balance", objectives: "Meaning, uses, rules of extraction, and preparation." },
            { week: "Week 4", topic: "Errors in Accounting", objectives: "Errors that affect and do not affect the trial balance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Correction of Errors", objectives: "Using the suspense account to correct errors." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Bank Reconciliation Statement I", objectives: "Causes of differences between cash book and bank statement." },
            { week: "Week 9", topic: "Bank Reconciliation Statement II", objectives: "Preparation of adjusted cash book and reconciliation statement." },
            { week: "Week 10", topic: "Final Accounts of a Sole Trader", objectives: "Introduction to Trading Account." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Final Accounts of a Sole Trader (Cont'd)", objectives: "Profit and Loss Account." },
            { week: "Week 2", topic: "Balance Sheet", objectives: "Format, classification of assets and liabilities." },
            { week: "Week 3", topic: "Adjustments in Final Accounts I", objectives: "Prepayments and Accruals." },
            { week: "Week 4", topic: "Adjustments in Final Accounts II", objectives: "Provision for bad/doubtful debts and depreciation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Depreciation of Fixed Assets", objectives: "Meaning, causes, straight line, and reducing balance methods." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Control Accounts", objectives: "Sales ledger and purchases ledger control accounts." },
            { week: "Week 9", topic: "Manufacturing Accounts", objectives: "Cost of production, prime cost, factory overheads." },
            { week: "Week 10", topic: "Single Entry and Incomplete Records", objectives: "Statement of affairs, calculation of profit or loss." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Commerce",
      icon: "fa-store",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Commerce", objectives: "Meaning, scope, characteristics, and functions of commerce." },
            { week: "Week 2", topic: "Occupation", objectives: "Meaning, classification of occupation (industry, commerce, services)." },
            { week: "Week 3", topic: "Production", objectives: "Meaning, types (primary, secondary, tertiary), and factors of production." },
            { week: "Week 4", topic: "Division of Labor & Specialization", objectives: "Meaning, advantages, disadvantages, and limitations." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Trade", objectives: "Meaning, classification (Home and Foreign trade)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Home Trade", objectives: "Retail trade: Meaning, characteristics, functions of the retailer." },
            { week: "Week 9", topic: "Types of Retail Outlets", objectives: "Small scale (hawking, mobile shops) vs Large scale (department stores, supermarkets)." },
            { week: "Week 10", topic: "Wholesale Trade", objectives: "Meaning, types, functions of the wholesaler to manufacturer and retailer." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Foreign Trade", objectives: "Meaning, types (import, export, entrepot), and barriers." },
            { week: "Week 2", topic: "Documents used in Foreign Trade", objectives: "Indent, Bill of Lading, Consular Invoice, Certificate of Origin." },
            { week: "Week 3", topic: "Terms of Quoting Prices", objectives: "FOB, CIF, FAS, FOR." },
            { week: "Week 4", topic: "Business Organizations: Sole Proprietorship", objectives: "Meaning, features, sources of capital, advantages, and disadvantages." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Partnership", objectives: "Meaning, types of partners, deed of partnership, advantages, and disadvantages." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Limited Liability Companies", objectives: "Private and Public companies; Formation and features." },
            { week: "Week 9", topic: "Co-operative Societies", objectives: "Meaning, types, features, advantages, and disadvantages." },
            { week: "Week 10", topic: "Public Enterprises", objectives: "Reasons for establishment, features, and problems." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Money", objectives: "Trade by barter; Origin, definition, and characteristics of money." },
            { week: "Week 2", topic: "Functions of Money", objectives: "Medium of exchange, store of value, standard of deferred payment." },
            { week: "Week 3", topic: "Commercial Banks", objectives: "Meaning, functions, types of accounts (savings, current, fixed deposit)." },
            { week: "Week 4", topic: "Central Bank", objectives: "Meaning, functions, and differences from commercial banks." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Other Financial Institutions", objectives: "Mortgage banks, Merchant banks, Insurance companies." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Insurance", objectives: "Meaning, principles (insurable interest, indemnity, utmost good faith)." },
            { week: "Week 9", topic: "Types of Insurance", objectives: "Life and non-life insurance (marine, fire, motor)." },
            { week: "Week 10", topic: "Communication", objectives: "Importance in commerce; Traditional and modern methods (NIPOST, Courier, Internet)." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    },
    {
      title: "Marketing",
      icon: "fa-bullhorn",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to Marketing", objectives: "Meaning, definitions, and history of marketing." },
            { week: "Week 2", topic: "Importance of Marketing", objectives: "Functions to the economy, society, and business." },
            { week: "Week 3", topic: "Marketing Concepts I", objectives: "Production concept, product concept, selling concept." },
            { week: "Week 4", topic: "Marketing Concepts II", objectives: "Marketing concept and societal marketing concept." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Marketing Mix (The 4Ps)", objectives: "Product, Price, Place, and Promotion." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Market Segmentation", objectives: "Meaning, bases for segmentation (demographic, geographic, psychographic)." },
            { week: "Week 9", topic: "Consumer Behavior", objectives: "Meaning and factors influencing consumer buying decisions." },
            { week: "Week 10", topic: "Types of Consumers", objectives: "Individual consumers vs. Organizational consumers." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "The Product", objectives: "Meaning, levels of a product, classification of products." },
            { week: "Week 2", topic: "Product Life Cycle", objectives: "Introduction, growth, maturity, and decline stages." },
            { week: "Week 3", topic: "New Product Development", objectives: "Stages from idea generation to commercialization." },
            { week: "Week 4", topic: "Branding and Packaging", objectives: "Meaning, importance, types of brands, and packaging functions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Pricing", objectives: "Meaning, objectives, and factors influencing pricing." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Pricing Strategies", objectives: "Skimming, penetration, psychological, and cost-plus pricing." },
            { week: "Week 9", topic: "Distribution (Place)", objectives: "Channels of distribution, intermediaries (wholesalers, retailers)." },
            { week: "Week 10", topic: "Physical Distribution", objectives: "Transportation, warehousing, inventory control, and order processing." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Promotion", objectives: "Meaning, objectives, and the promotional mix." },
            { week: "Week 2", topic: "Advertising", objectives: "Meaning, types, media, advantages, and disadvantages." },
            { week: "Week 3", topic: "Personal Selling", objectives: "Meaning, steps in the selling process, qualities of a good salesperson." },
            { week: "Week 4", topic: "Sales Promotion", objectives: "Techniques used for consumers and trade." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment of Weeks 1-4." },
            { week: "Week 6", topic: "Public Relations", objectives: "Meaning, tools, and importance to marketing." },
            { week: "Week 7", topic: "Midterm Break", objectives: "Holiday." },
            { week: "Week 8", topic: "Marketing Research", objectives: "Meaning, importance, and steps in the research process." },
            { week: "Week 9", topic: "E-Marketing", objectives: "Meaning, importance, and tools (social media, websites, email)." },
            { week: "Week 10", topic: "International Marketing", objectives: "Meaning, reasons for going international, and challenges." },
            { week: "Week 11-13", topic: "Revision & Exams", objectives: "General revision and end of term examinations." }
          ]
        }
      ]
    }
  ],

  "sss2": [
    {
      "title": "General Mathematics",
      "icon": "fa-calculator",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Logarithms", "objectives": "Laws of indices; operations with numbers > 1 using tables." },
            { "week": "Week 2", "topic": "Logarithms II", "objectives": "Characteristics and mantissa of numbers < 1; mult/div calculations." },
            { "week": "Week 3", "topic": "Sequence and Series (AP)", "objectives": "Definition of A.P.; nth term and sum of A.P." },
            { "week": "Week 4", "topic": "Sequence and Series (GP)", "objectives": "Definition of G.P.; nth term and sum of geometric series." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Quadratic Equations", "objectives": "Factorization, completing the square, formula methods." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Simultaneous Eq.", "objectives": "Linear and quadratic expressions (elimination/substitution)." },
            { "week": "Week 9", "topic": "Approximation & Errors", "objectives": "Percentage error, rounding, and significant figures." },
            { "week": "Week 10", "topic": "General Revision", "objectives": "Consolidation of first-term topics." },
            { "week": "Week 11-13", "topic": "Exams", "objectives": "End of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Linear Inequalities", "objectives": "Graphing intervals and compounding inequalities." },
            { "week": "Week 2", "topic": "Graphs of Inequalities", "objectives": "Shading regions on Cartesian coordinates." },
            { "week": "Week 3", "topic": "Logical Reasoning", "objectives": "Truth tables, implications, and equivalence." },
            { "week": "Week 4", "topic": "Mensuration of Circle", "objectives": "Length of arcs, areas of sectors and segments." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Trigonometry I", "objectives": "Sine and Cosine rules; angles of elevation and depression." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Trigonometry II", "objectives": "Trigonometric ratios of angles up to 360 degrees." },
            { "week": "Week 9", "topic": "Geometry of Circles", "objectives": "Circle theorems (chords, tangents, angles)." },
            { "week": "Week 10", "topic": "Revision", "objectives": "Revision of second-term topics." },
            { "week": "Week 11-13", "topic": "Exams", "objectives": "End of term evaluations." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Statistics I", "objectives": "Mean, median, mode of grouped data." },
            { "week": "Week 2", "topic": "Statistics II", "objectives": "Variance and standard deviation." },
            { "week": "Week 3", "topic": "Probability", "objectives": "Experimental and theoretical probability of independent events." },
            { "week": "Week 4", "topic": "Vectors", "objectives": "Vector notation, addition, and resultant vectors." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Transformations", "objectives": "Translation, reflection, and rotation in the Cartesian plane." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Enlargement", "objectives": "Scale factors and similar shapes." },
            { "week": "Week 9", "topic": "General Revision", "objectives": "Comprehensive review of the academic session." },
            { "week": "Week 10-13", "topic": "Promotion Exams", "objectives": "End of session examinations." }
          ]
        }
      ]
    },
    {
      "title": "English Language",
      "icon": "fa-book-open",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Oral Skills: Vowels", "objectives": "Distinguishing between short and long monophthongs with phonetic drills." },
            { "week": "Week 2", "topic": "Grammar: Noun Phrases", "objectives": "Identification of noun phrases, structural elements, and grammatical functions." },
            { "week": "Week 3", "topic": "Continuous Writing: Narrative Essays", "objectives": "Structuring dynamic storytelling formats using correct tense alignment." },
            { "week": "Week 4", "topic": "Comprehension", "objectives": "Reading for main ideas and summarizing core concepts." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Oral Skills: Consonants", "objectives": "Articulation of plosives and fricatives in connected speech." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Grammar: Pronouns", "objectives": "Types of pronouns, antecedents, and proper application in sentences." },
            { "week": "Week 9", "topic": "Continuous Writing: Expository Essays", "objectives": "Techniques for explaining concepts clearly and logically." },
            { "week": "Week 10", "topic": "General Revision", "objectives": "Consolidation of first-term topics." },
            { "week": "Week 11-13", "topic": "Exams", "objectives": "End of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Oral Skills: Diphthongs", "objectives": "Identifying and pronouncing combinations of two vowel sounds." },
            { "week": "Week 2", "topic": "Grammar: Adjectival Phrases", "objectives": "Formation and function of adjectival phrases as modifiers." },
            { "week": "Week 3", "topic": "Continuous Writing: Formal Letters", "objectives": "Layout, tone, and conventions of official correspondence." },
            { "week": "Week 4", "topic": "Comprehension", "objectives": "Reading to understand implied meanings and infer authorial intent." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Oral Skills: Consonant Clusters", "objectives": "Pronunciation of clusters at the beginning and ends of words." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Grammar: Verb Tenses", "objectives": "Mastery of the present perfect and past perfect tenses." },
            { "week": "Week 9", "topic": "Continuous Writing: Argumentative Essays", "objectives": "Structuring arguments, acknowledging counterclaims, and persuading the reader." },
            { "week": "Week 10", "topic": "Revision", "objectives": "Revision of second-term topics." },
            { "week": "Week 11-13", "topic": "Exams", "objectives": "End of term evaluations." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Oral Skills: Intonation and Stress", "objectives": "Understanding rising and falling tunes and word stress patterns." },
            { "week": "Week 2", "topic": "Grammar: Adverbial Phrases & Clauses", "objectives": "Identifying adverbial elements modifying verbs, adjectives, and other adverbs." },
            { "week": "Week 3", "topic": "Continuous Writing: Speech Writing", "objectives": "Drafting speeches for specific audiences using rhetorical devices." },
            { "week": "Week 4", "topic": "Comprehension: Summary Skills", "objectives": "Extracting salient points and writing concise summaries." },
            { "week": "Week 5", "topic": "Midterm", "objectives": "Continuous Assessment." },
            { "week": "Week 6", "topic": "Literature-in-English Link", "objectives": "Identifying rhymes, rhythms, and poetic devices in selected poems." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "Academic rest." },
            { "week": "Week 8", "topic": "Grammar: Prepositions", "objectives": "Complex prepositions and prepositional phrases expressing relationships." },
            { "week": "Week 9", "topic": "General Revision", "objectives": "Comprehensive review of the academic session." },
            { "week": "Week 10-13", "topic": "Promotion Exams", "objectives": "End of session examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 3: PHYSICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Physics",
      icon: "fa-magnet",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Light Waves I", objectives: "Nature of light, rectilinear propagation, reflection, laws of reflection, applications." },
            { week: "Week 2", topic: "Light Waves II", objectives: "Refraction of light, refractive index, total internal reflection (prisms, optical fibers)." },
            { week: "Week 3", topic: "Sound Waves", objectives: "Production, propagation, characteristics (pitch, loudness, quality), and speed of sound." },
            { week: "Week 4", topic: "Human Eye", objectives: "Structure, image formation, eye defects and corrections (short sight, long sight)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Application of Sound Waves", objectives: "Uses of sound in medicine (ultrasound), industry (SONAR), and musical instruments." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Electric Charges", objectives: "Concept of charge, methods of charging, and properties of charges." },
            { week: "Week 9", topic: "Fields (Description & Properties)", objectives: "Concept of electric, magnetic, and gravitational fields and their field lines." },
            { week: "Week 10", topic: "Gravitational Field", objectives: "Newtonâ€™s law of universal gravitation, differences between mass and weight." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Electric Field", objectives: "Electric field patterns, Coulombâ€™s law, potential difference, capacitors." },
            { week: "Week 2", topic: "Magnetic Fields", objectives: "Properties of magnets, magnetic flux, earthâ€™s magnetic field and its uses." },
            { week: "Week 3", topic: "Electro-Magnetic Field", objectives: "Electricity and magnetism relationship, Faradayâ€™s and Lenzâ€™s laws, transformers." },
            { week: "Week 4", topic: "Simple A.C. Circuits", objectives: "Characteristics of alternating current, comparison of A.C. and D.C., peak and rms values." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Battery", objectives: "Types of cells (primary, secondary), construction, working principles, and maintenance." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Solar Collector", objectives: "Principles of solar collector, applications and advantages in energy supply." },
            { week: "Week 9-11", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Electrical Continuity Testing", objectives: "Testing with continuity tester and multimeter; troubleshooting circuits." },
            { week: "Week 2", topic: "Electroplating", objectives: "Principles of electrolysis; industrial and domestic electroplating applications." },
            { week: "Week 3", topic: "Application of Electromagnetic Field", objectives: "Uses in communication, medicine (MRI, X-ray), and industry." },
            { week: "Week 4", topic: "Models of the Atom", objectives: "Historical development: Dalton, Thomson, Rutherford, Bohr; modern atomic theory." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Nucleus", objectives: "Structure of the nucleus, isotopes, nuclear reactions (fission, fusion), radioactivity." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Energy Quantization", objectives: "Planckâ€™s hypothesis, photons, energy levels, and the photoelectric effect." },
            { week: "Week 9", topic: "Duality of Matter", objectives: "Wave-particle duality, de Broglie hypothesis, experimental evidences." },
            { week: "Week 10", topic: "Energy and Society", objectives: "Sources of energy, energy crisis, environmental effects, sustainable strategies." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 4: CHEMISTRY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Chemistry",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Environmental Chemistry", objectives: "Water pollution, air pollution, sources, effects, and control measures." },
            { week: "Week 2", topic: "Electrolysis", objectives: "Electrolytes, electrodes, applications of electrolysis, Faradayâ€™s laws." },
            { week: "Week 3", topic: "Electrochemical Cells", objectives: "Galvanic and electrolytic cells, construction, working principles." },
            { week: "Week 4", topic: "Acid-Base Titration", objectives: "Apparatus, procedures, acid-base indicators, titration calculations." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Solubility and Solubility Curves", objectives: "Factors affecting solubility, calculations, interpretation of solubility curves." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Chemical Equilibrium", objectives: "Concept of dynamic equilibrium, equilibrium constant (Kc), simple calculations." },
            { week: "Week 9", topic: "Chemical Kinetics", objectives: "Meaning of reaction rate, factors affecting rates, rate laws, order of reaction." },
            { week: "Week 10", topic: "Heat of Reaction", objectives: "Enthalpy change, calorimetry, Hessâ€™s law applications." },
            { week: "Week 11", topic: "Energetics of Reactions", objectives: "Activation energy, energy profile diagrams, exothermic and endothermic reactions." },
            { week: "Week 12-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Saponification and Detergents", objectives: "Chemistry of soap making, differences between soap and detergent." },
            { week: "Week 2", topic: "Intro to Nuclear Chemistry", objectives: "Radioactivity, half-life, nuclear reactions, applications and dangers." },
            { week: "Week 3", topic: "Halogens", objectives: "General properties, trends, compounds, and uses of fluorine, chlorine, bromine, iodine." },
            { week: "Week 4", topic: "Alkali and Alkaline Earth Metals", objectives: "Characteristics, occurrence, reactivity, and uses." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Transition Elements", objectives: "General properties, variable oxidation states, complex compounds." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "General Properties of Metals", objectives: "Reactivity series, extraction and refining, metallic bonding." },
            { week: "Week 9", topic: "Non-Metals and Their Compounds", objectives: "Hydrogen, oxygen, nitrogen and their compounds." },
            { week: "Week 10", topic: "Water", objectives: "Hardness of water, purification methods, water quality control." },
            { week: "Week 11", topic: "Environmental Pollution", objectives: "Causes, effects, and control of land, air, and water pollution." },
            { week: "Week 12-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Sulphur and Its Compounds", objectives: "Occurrence, preparation, properties, uses of sulphur, sulphur dioxide, and sulphuric acid." },
            { week: "Week 2", topic: "Carbon and Its Compounds", objectives: "Properties, oxides, carbonates, hydrocarbons, importance." },
            { week: "Week 3", topic: "Industrial Preparation of Chemicals", objectives: "Large-scale production of HCl, NHâ‚ƒ, Hâ‚‚SOâ‚„, processes and applications." },
            { week: "Week 4", topic: "Organic Chemistry (Revision)", objectives: "Functional groups, homologous series, IUPAC nomenclature." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Hydrocarbons", objectives: "Types, properties, reactions, tests for hydrocarbons." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Alcohols, Ethers, and Phenols", objectives: "Structures, uses, reactions, industrial applications." },
            { week: "Week 9", topic: "Aldehydes and Ketones", objectives: "Preparation, identification, uses and reactions." },
            { week: "Week 10", topic: "Carboxylic Acids and Esters", objectives: "Structure, reactions, uses, esterification." },
            { week: "Week 11", topic: "Polymers and Plastics", objectives: "Types, polymerization, uses, dangers of plastics." },
            { week: "Week 12-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 5: BIOLOGY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Biology",
      icon: "fa-dna",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Digestive System I", objectives: "Organs of the alimentary canal; associated glands; mechanical and chemical digestion." },
            { week: "Week 2", topic: "Digestive System II", objectives: "Enzymes of digestion; absorption of digested food; assimilation and egestion." },
            { week: "Week 3", topic: "Transportation System I", objectives: "Transport in unicellular and multicellular organisms; diffusion, osmosis, active transport." },
            { week: "Week 4", topic: "Transportation System II", objectives: "Circulatory system in mammals; structure and functions of the heart, blood vessels." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Respiratory System I", objectives: "Meaning of respiration; structure of the respiratory system in man; breathing mechanism." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Respiratory System II", objectives: "Types of respiration (aerobic and anaerobic); comparison; importance and energy yield." },
            { week: "Week 9", topic: "Excretory System", objectives: "Excretory organs in man; structure and functions of the kidney; excretory products." },
            { week: "Week 10", topic: "Nutrient Cycling in Nature", objectives: "Cycles of carbon, nitrogen, and water; importance of nutrient cycling to living organisms." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Ecological Management", objectives: "Concepts of association, tolerance and adaptation; examples in plants and animals." },
            { week: "Week 2", topic: "Pollution", objectives: "Types (air, water, soil, noise); causes, effects and control of pollution." },
            { week: "Week 3", topic: "Conservation of Natural Resources", objectives: "Meaning, methods, and importance of conserving soil, water, forests and wildlife." },
            { week: "Week 4", topic: "Pests and Diseases of Crops", objectives: "Types of crop pests and diseases; effects on crop production; control measures." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Reproductive Systems in Vertebrates", objectives: "Structures and functions of reproductive systems in fish, amphibians, reptiles, birds, mammals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Reproductive Systems in Plants", objectives: "Floral parts and functions; types of flowers; comparison of monocot and dicot flowers." },
            { week: "Week 9", topic: "Pollination in Plants", objectives: "Self- and cross-pollination; agents of pollination; advantages and disadvantages." },
            { week: "Week 10", topic: "Regulation of Internal Environment", objectives: "Homeostasis in humans; regulation of temperature, water balance; role of skin, kidney." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Nervous Coordination", objectives: "Organization of the nervous system; structure and functions of neurones." },
            { week: "Week 2", topic: "Sense Organs", objectives: "Structure and functions of the eye, ear, nose, tongue and skin; common defects." },
            { week: "Week 3", topic: "Ecology of Population", objectives: "Population characteristics (size, density, birth rate, death rate); population growth curve." },
            { week: "Week 4", topic: "Balance in Nature", objectives: "Concept of ecological balance; food chains, food webs, and energy flow in ecosystems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Reproductive System in Humans", objectives: "Male and female reproductive systems; fertilization; development of embryo." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Development of New Seeds", objectives: "Fertilization in plants; development of seeds; structure and functions of seed parts." },
            { week: "Week 9", topic: "Fruits", objectives: "Types of fruits (simple, aggregate, multiple); features of wind- and animal-dispersed fruits." },
            { week: "Week 10", topic: "Reproductive Behaviours", objectives: "Courtship behaviour in animals; parental care; importance to species continuity." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 6: GOVERNMENT (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Government",
      icon: "fa-university",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Colonial Administration in Nigeria", objectives: "British vs French systems; principles, successes, and failures of indirect rule in Nigeria." },
            { week: "Week 2", topic: "Nationalism in Nigeria", objectives: "Meaning; factors leading to its rise; roles of key nationalists; effects on independence." },
            { week: "Week 3", topic: "Constitutional Development I", objectives: "Features, merits, and demerits of Clifford (1922), Richards (1946), and Macpherson (1951) Constitutions." },
            { week: "Week 4", topic: "Constitutional Development II", objectives: "Lyttleton (1954), Independence (1960), and Republican (1963) Constitutions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Military Rule in Nigeria", objectives: "Reasons for military intervention; achievements and failures of military regimes." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Civil Rule in Nigeria", objectives: "Characteristics of civil rule (rule of law, separation of powers); merits and challenges." },
            { week: "Week 9", topic: "Nigerian Federalism I", objectives: "Evolution of Nigerian federalism (from 1954 till date); main features." },
            { week: "Week 10", topic: "Nigerian Federalism II", objectives: "Problems of federalism (resource control, revenue allocation, state creation); solutions." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Revenue Allocation in Nigeria", objectives: "Principles (derivation, need, equality, population); controversies and challenges." },
            { week: "Week 2", topic: "Inter-Governmental Relations", objectives: "Types (federalâ€“state, stateâ€“local); importance and problems." },
            { week: "Week 3", topic: "Political Crisis in Nigeria I", objectives: "Causes and effects of the 1962 Census Crisis and 1963 Tiv Crisis." },
            { week: "Week 4", topic: "Political Crisis in Nigeria II", objectives: "1964 Election Crisis; 1965 Western Region Crisis; impact on Nigerian politics." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "The Nigerian Civil War", objectives: "Causes, major events, effects, and Gowonâ€™s 3Rs resolution efforts." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Civil Society & Popular Participation", objectives: "Role of NGOs, labour unions, student movements; importance of popular participation." },
            { week: "Week 9", topic: "Citizenship Education", objectives: "Rights and duties of citizens; importance of national integration; challenges to unity." },
            { week: "Week 10", topic: "Political Apathy", objectives: "Causes, effects on democracy, and solutions (civic education, accountability)." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Electoral Systems", objectives: "Types (simple majority, PR, second ballot); merits and demerits." },
            { week: "Week 2", topic: "Electoral Commissions in Nigeria", objectives: "Historical overview (NEC, FEDECO, INEC); roles, achievements, and challenges." },
            { week: "Week 3", topic: "Electoral Malpractices", objectives: "Types (rigging, ballot stuffing, intimidation); causes; consequences on democracy." },
            { week: "Week 4", topic: "Democratic Processes in Nigeria", objectives: "Democratic principles (rule of law, majority rule); challenges to democratic processes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Judiciary", objectives: "Structure (hierarchy of courts), functions, and independence of the judiciary." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Human Rights", objectives: "Categories of rights; protection of rights; limitations in practice; institutions for enforcement." },
            { week: "Week 9", topic: "Public Corporations in Nigeria", objectives: "Roles in national development; methods of control (ministerial, legislative, judicial)." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 7: ECONOMICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Economics",
      icon: "fa-chart-line",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Elementary Treatment of Fiscal Policy", objectives: "Tools of fiscal policy (taxation, government expenditure); objectives and limitations." },
            { week: "Week 2", topic: "Balanced and Unbalanced Budget", objectives: "Meaning and differences; effects on the economy; advantages and disadvantages." },
            { week: "Week 3", topic: "Elements of National Income", objectives: "Concepts (GDP, GNP, NI); methods of measuring national income; uses and limitations." },
            { week: "Week 4", topic: "Demand for and Supply of Money", objectives: "Transactionary, precautionary, and speculative motives; determinants of money supply." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Inflation and Deflation", objectives: "Types, causes, and effects of inflation and deflation; control measures." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Economic Lessons from World Powers", objectives: "Growth in Asian Tigers; lessons Nigeria can learn from Japan, Europe, and America." },
            { week: "Week 9", topic: "Human Capital Development", objectives: "Importance, problems, and solutions to human capital development in Nigeria." },
            { week: "Week 10", topic: "Petroleum and the Nigerian Economy", objectives: "Contributions to GDP; problems of oil dependence; diversification strategies." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Manufacturing & Construction Industries", objectives: "Features, importance, and problems of manufacturing and construction in Nigeria." },
            { week: "Week 2", topic: "Financial Market Regulatory Agencies", objectives: "Overview of financial markets; types of regulatory agencies." },
            { week: "Week 3", topic: "Functions of Regulatory Agencies I", objectives: "Functions, importance, and challenges of CBN, NDIC, and SEC." },
            { week: "Week 4", topic: "Functions of Regulatory Agencies II", objectives: "Functions and roles of NSE, Insurance Commission, and Ministry of Finance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "International Trade", objectives: "Importance and problems; theories of absolute and comparative advantage." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Economic Growth and Development", objectives: "Distinction between growth and development; indicators; strategies for promoting growth." },
            { week: "Week 9", topic: "Balance of Payments (BOP)", objectives: "Components, causes of disequilibrium, and measures for correcting BOP problems." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Economic Development Planning", objectives: "Objectives of planning; types of plans; problems of planning in Nigeria." },
            { week: "Week 2", topic: "International Economic Organization I", objectives: "IMF, World Bank â€“ objectives, roles, benefits, and criticisms." },
            { week: "Week 3", topic: "International Economic Organization II", objectives: "ECOWAS, AU, WTO â€“ aims, achievements, and challenges." },
            { week: "Week 4", topic: "Current Economic Plans", objectives: "Meaning, objectives, and evaluation of MDGs, NEEDS, and Vision 2020." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Economic Development Challenges", objectives: "Corruption, unemployment, poverty, poor infrastructure; effects on development." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Economic Reform Programs", objectives: "SAP, deregulation, privatization, commercialization â€“ objectives and benefits." },
            { week: "Week 9", topic: "Past Question Drilling I", objectives: "Practice of WAEC/NECO past questions on SS2 topics." },
            { week: "Week 10", topic: "Past Question Drilling II", objectives: "More past question practice and test drills." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    }
    ,
    // -----------------------------------------------------------------
    // SUBJECT 8: CITIZENSHIP AND HERITAGE STUDIES (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Citizenship and Heritage Studies",
      icon: "fa-monument",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Nigerian Constitution", objectives: "Origin, structure, and features of the constitution." },
            { week: "Week 2", topic: "Fundamental Objectives", objectives: "Political, economic, social, and educational directive principles." },
            { week: "Week 3", topic: "Separation of Powers", objectives: "Executive, legislature, judiciary; checks and balances." },
            { week: "Week 4", topic: "Public Service & Citizenship", objectives: "Role of civil service, duties, and challenges." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Nigerian Heritage Sites", objectives: "UNESCO sites, national museums, and parks." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Traditional Institutions", objectives: "Roles of chiefs, kings, emirs, obas, and obis." },
            { week: "Week 9", topic: "Colonial Heritage", objectives: "Positive and negative impacts; historical lessons." },
            { week: "Week 10", topic: "Preservation of Historical Records", objectives: "Roles of archives, museums, and libraries." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Governance & Citizenship", objectives: "Meaning, principles, and systems of governance." },
            { week: "Week 2", topic: "Federalism in Nigeria", objectives: "Features, challenges, and importance of federalism." },
            { week: "Week 3", topic: "Human Rights Violations", objectives: "Causes, effects, and legal remedies." },
            { week: "Week 4", topic: "Civil Society & NGOs", objectives: "Roles in democracy, advocacy, and social service." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Security & Citizenship", objectives: "Roles of police, army, civil defense; citizensâ€™ roles in security." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Nigerian Foreign Policy", objectives: "Principles, objectives, and major achievements." },
            { week: "Week 9", topic: "Citizenship in a Digital Age", objectives: "Cyber rights, cybercrime, and digital responsibility." },
            { week: "Week 10", topic: "Case Studies", objectives: "Analyzing role models in Nigerian citizenship & heritage." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Democratic Institutions in Nigeria", objectives: "Roles of INEC, political parties, and the judiciary." },
            { week: "Week 2", topic: "Elections & Citizenship", objectives: "Importance, processes, and duties of voters." },
            { week: "Week 3", topic: "Electoral Malpractices", objectives: "Forms, effects, and solutions to electoral fraud." },
            { week: "Week 4", topic: "Media & Citizenship", objectives: "Role of press, social media, and freedom of expression." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Nigerian Cultural Heritage Globally", objectives: "Impact of Nollywood, Nigerian music, and literature." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Civic Challenges", objectives: "Addressing drug abuse, cultism, and examination malpractice." },
            { week: "Week 9", topic: "National Development", objectives: "The role of active citizenship in building the nation." },
            { week: "Week 10", topic: "Environmental Citizenship", objectives: "Climate change, waste management, and sustainable living." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 9: DIGITAL TECHNOLOGIES (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Digital Technologies",
      icon: "fa-laptop-code",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Review of SS1 Work", objectives: "Quick revision of digital foundations." },
            { week: "Week 2", topic: "Advanced Word Processing", objectives: "Mail merge, macros, and templates." },
            { week: "Week 3", topic: "Advanced Spreadsheet I", objectives: "Pivot tables and advanced formulas." },
            { week: "Week 4", topic: "Advanced Spreadsheet II", objectives: "Financial models and scenario analysis." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Advanced Presentation Tools", objectives: "Multimedia integration and professional designs." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Web Design I", objectives: "Introduction to HTML and CSS structures." },
            { week: "Week 9", topic: "Web Design II", objectives: "Creating and structuring simple websites." },
            { week: "Week 10", topic: "Web Publishing & Hosting", objectives: "Domains, hosting environments, and the publishing process." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Computer Programming I", objectives: "Introduction to algorithms and flowcharts." },
            { week: "Week 2", topic: "Computer Programming II", objectives: "Introduction to Python/JavaScript." },
            { week: "Week 3", topic: "Programming Basics", objectives: "Understanding variables, data types, and operators." },
            { week: "Week 4", topic: "Control Structures", objectives: "If-else conditions, loops, and functions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Data Science Basics", objectives: "Data collection, storage, and cleaning techniques." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Big Data & Analytics", objectives: "Meaning, applications, and tools for data analytics." },
            { week: "Week 9", topic: "Artificial Intelligence", objectives: "Applications of AI in education, health, and business." },
            { week: "Week 10", topic: "Machine Learning Basics", objectives: "Core concepts and simple machine learning applications." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Mobile Application Development I", objectives: "Introduction to mobile app environments." },
            { week: "Week 2", topic: "Mobile Application Development II", objectives: "Creating simple Android/iOS apps." },
            { week: "Week 3", topic: "Cloud Computing II", objectives: "SaaS, PaaS, and IaaS structures." },
            { week: "Week 4", topic: "Blockchain Technology", objectives: "Concept, cryptocurrency, and uses beyond finance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Cybersecurity III", objectives: "Ethical hacking and penetration testing basics." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Cyber Laws & Digital Rights", objectives: "Nigerian cybercrime act and global cyber laws." },
            { week: "Week 9", topic: "Digital Entrepreneurship", objectives: "E-commerce, freelancing, and running an online business." },
            { week: "Week 10", topic: "Project Work", objectives: "Students develop and present mini ICT projects." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 10: AGRICULTURAL SCIENCE (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Agricultural Science",
      icon: "fa-tractor",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Farm Surveying and Planning", objectives: "Meaning, importance, instruments used, and methods of land measurement." },
            { week: "Week 2", topic: "Farm Planning", objectives: "Objectives, factors influencing farm planning, and importance to production." },
            { week: "Week 3", topic: "Farmstead Planning & Building Location", objectives: "Factors affecting location (topography, soil, water); layout of farm structures." },
            { week: "Week 4", topic: "Forest Management", objectives: "Importance of forests; methods of management (afforestation, taungya system)." },
            { week: "Week 5", topic: "Agro-Forestry Practices in Nigeria", objectives: "Examples (alley cropping, shelter belts); benefits to soil fertility and biodiversity." },
            { week: "Week 6", topic: "Importance of Ornamental Plants", objectives: "Economic, aesthetic, medicinal, and environmental importance." },
            { week: "Week 7", topic: "Common Types of Ornamental Plants", objectives: "Flowering plants, foliage plants, shrubs, lawn grasses, climbers." },
            { week: "Week 8", topic: "Settings and Locations for Planting", objectives: "Home gardens, parks, roadsides; factors to consider when locating plants." },
            { week: "Week 9", topic: "Cultivating Ornamental Plants", objectives: "Direct seeding, transplanting, grafting, layering, budding, and cuttings." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Maintenance of Ornamental Plants", objectives: "Weeding, watering, pruning, staking, mulching, pest and disease control." },
            { week: "Week 2", topic: "Diseases of Crops", objectives: "Types (fungal, bacterial, viral, nematode); symptoms, effects, and control." },
            { week: "Week 3", topic: "Pests of Crops", objectives: "Examples (insects, birds, rodents); economic importance and control measures." },
            { week: "Week 4", topic: "Weeds and Weed Control", objectives: "Characteristics, harmful/beneficial effects; methods of weed control." },
            { week: "Week 5", topic: "Types and Classification of Farm Animals", objectives: "Cattle, sheep, goats, pigs, poultry, fish; classification based on uses." },
            { week: "Week 6", topic: "Anatomy & Physiology of Farm Animals", objectives: "Digestive, circulatory, respiratory, and reproductive systems." },
            { week: "Week 7", topic: "Animal Reproduction", objectives: "Types (asexual and sexual); reproductive processes, fertilization, and gestation." },
            { week: "Week 8", topic: "Environmental Physiology", objectives: "Effects of climate on growth and reproduction; adaptation strategies." },
            { week: "Week 9", topic: "Livestock Management", objectives: "Management practices for housing, feeding, breeding, and health care." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Animal Nutrition", objectives: "Classes of food nutrients, functions, sources, and importance in animal production." },
            { week: "Week 2", topic: "Rangeland Management", objectives: "Types, importance, and methods of improvement (reseeding, rotational grazing)." },
            { week: "Week 3", topic: "Basic Economic Principles", objectives: "Scarcity, choice, opportunity cost, scale of preference, production possibilities." },
            { week: "Week 4", topic: "Factors of Production", objectives: "Land, labour, capital, and entrepreneurship in agriculture." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Principles of Demand", objectives: "Law of demand, demand curve, factors affecting demand in agriculture." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Principles of Supply", objectives: "Law of supply, supply curve, factors affecting supply in agriculture." },
            { week: "Week 9", topic: "Implications of Demand and Supply", objectives: "Application of demand and supply to pricing, output, and farmersâ€™ decisions." },
            { week: "Week 10", topic: "Functions of a Farm Manager", objectives: "Roles, qualities, and responsibilities; importance to agricultural productivity." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 11: FURTHER MATHEMATICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Further Mathematics",
      icon: "fa-square-root-alt",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Solution to Quadratic Equation", objectives: "Solving quadratic equations via factorization, completing the square, formula; word problems." },
            { week: "Week 2", topic: "Tangent and Normal to Curve", objectives: "Derivation of tangent and normal equations; applications in coordinate geometry." },
            { week: "Week 3", topic: "Polynomials I", objectives: "Degree of polynomials; addition, subtraction, multiplication; long division." },
            { week: "Week 4", topic: "Polynomials II", objectives: "Factor and remainder theorem; applications in simplifying algebraic expressions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Polynomials II (Cont.)", objectives: "Application of factor and remainder theorem; solving higher order equations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Cubic Equations and Factorization", objectives: "Factorization of cubic expressions; methods of solution." },
            { week: "Week 9", topic: "Logical Reasoning I", objectives: "Statements; truth table; negation, conjunction, disjunction." },
            { week: "Week 10", topic: "Logical Reasoning II", objectives: "Conditional and biconditional statements; tautology and contradiction." },
            { week: "Week 11", topic: "Trigonometric Function", objectives: "Values of trigonometric ratios; angle of elevation and depression." },
            { week: "Week 12", topic: "Graphs of Trigonometric Function", objectives: "Sine, cosine, and tangent graphs; properties and transformations." },
            { week: "Week 13", topic: "Trig Identity & Inverse Graphs", objectives: "Basic identities; inverse trigonometric graphs; applications of Pythagoras theorem." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Limits & Differentiation from First Principle", objectives: "Concept of limits; evaluation; differentiation using first principle." },
            { week: "Week 2", topic: "Rules of Differentiation I", objectives: "Differentiation of algebraic functions using power, constant, and sum/difference rules." },
            { week: "Week 3", topic: "Rules of Differentiation II", objectives: "Product rule, quotient rule, chain rule." },
            { week: "Week 4", topic: "Differentiation of Complex Functions", objectives: "Standard derivatives of trigonometric, logarithmic, and exponential functions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Application of Differentiation", objectives: "Rate of change; velocity and acceleration; equation of motion." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Maximum and Minimum Points", objectives: "Turning points of curves; second derivative test; applications." },
            { week: "Week 9", topic: "The Circle", objectives: "General equation of a circle; equation of tangent; length of tangent." },
            { week: "Week 10", topic: "Conic Sections I", objectives: "Parabola, ellipse, hyperbola: definitions and equations." },
            { week: "Week 11", topic: "Conic Sections II", objectives: "Properties and graphs of conic sections; applications." },
            { week: "Week 12", topic: "Conic Sections III", objectives: "Continuation of parabola, ellipse, and hyperbola." },
            { week: "Week 13", topic: "Sample Space and Events", objectives: "Event space; independent and dependent events; probability." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Sample Space and Events (Cont.)", objectives: "Further problems on event space; probability of compound events." },
            { week: "Week 2", topic: "Permutation and Combination I", objectives: "Meaning; arrangement of objects; fundamental counting principle." },
            { week: "Week 3", topic: "Permutation and Combination II", objectives: "Combination of objects; applications in probability." },
            { week: "Week 4", topic: "Dynamics I", objectives: "Newtonâ€™s laws of motion; motion along inclined plane." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Dynamics II", objectives: "Motion of connected particles; applications of Newtonâ€™s laws." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Work, Power, Energy", objectives: "Work done by a force; power; energy; impulse and momentum." },
            { week: "Week 9", topic: "Projectiles", objectives: "Motion of projectiles; equations and applications." },
            { week: "Week 10", topic: "Binomial Expansion", objectives: "Binomial theorem; expansion of (a + b)^n; applications." },
            { week: "Week 11", topic: "Mechanics (Vector Geometry)", objectives: "Vector operations; scalar and vector products; applications in mechanics." },
            { week: "Week 12", topic: "Integration I", objectives: "Indefinite integral; basic rules; applications." },
            { week: "Week 13", topic: "Integration II and Applications", objectives: "Definite integrals; area under a curve; regression line and correlation coefficient." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 12: FOODS & NUTRITION (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Foods & Nutrition",
      icon: "fa-utensils",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Meat Cookery", objectives: "Types, structure, and nutritive value of meat; choice and cooking methods." },
            { week: "Week 2", topic: "Poultry", objectives: "Types, structure, nutritive value, and preparation of poultry." },
            { week: "Week 3", topic: "Eggs", objectives: "Structure, tests for freshness, and methods of cooking eggs." },
            { week: "Week 4", topic: "Milk and Milk Products", objectives: "Types, nutritive value, preservation, and examples of milk dishes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Sea Foods", objectives: "Classification, nutritive value, and cooking methods for fishes." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Food Additives", objectives: "Types (flavouring, herbs, spices), classification, and uses." },
            { week: "Week 9", topic: "Practical Session", objectives: "Preparation and serving of meat, poultry, milk, and seafood dishes." },
            { week: "Week 10", topic: "Starchy Roots and Plantain", objectives: "Types, nutritive value, and dishes made from starchy roots and plantains." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Energy Management in Food Prep", objectives: "Principles of energy management, steps to manage energy, and fatigue." },
            { week: "Week 2", topic: "Kitchen Equipment and Utensils", objectives: "Classification, selection, care, and storage of kitchen equipment." },
            { week: "Week 3", topic: "Labour Saving Devices", objectives: "Uses, selection factors, care, and maintenance." },
            { week: "Week 4", topic: "Special Nutritional Needs I", objectives: "Meal planning for infants, children, adolescents, and adults." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Special Nutritional Needs II", objectives: "Meal planning for pregnant/lactating mothers and the aged." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Project on Test Interpretation", objectives: "Practice in interpreting exam questions and writing responses." },
            { week: "Week 9", topic: "Flour Cookery", objectives: "Types of flour, nutritive value, and dishes (bread, pastries)." },
            { week: "Week 10", topic: "Raising Agents", objectives: "Types (yeast, baking powder), composition, and evaluation." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Convenience Foods", objectives: "Uses, forms, selection factors, and dishes made with convenience foods." },
            { week: "Week 2", topic: "Preservation of Foods", objectives: "Spoilage causes, importance of preservation, and principles." },
            { week: "Week 3", topic: "Methods of Food Preservation", objectives: "Drying, smoking, salting, freezing, and canning." },
            { week: "Week 4", topic: "Food Storage", objectives: "Storage of perishable/non-perishable foods; barns, freezers." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Practical on Convenience & Storage", objectives: "Preparation of dishes; demonstration of preservation methods." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Budgeting", objectives: "Income, expenditure, food budgeting, and influencing factors." },
            { week: "Week 9", topic: "Food Purchasing", objectives: "Bulk vs. piece-meal purchasing, impulse buying, shopping lists." },
            { week: "Week 10", topic: "Consumer Education", objectives: "Consumer rights, NAFDAC, SON, FCCPC; falsification and misbranding." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 13: GEOGRAPHY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Geography",
      icon: "fa-globe-africa",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Industry", objectives: "Types of industries (primary, secondary, tertiary, quaternary); importance in economic development." },
            { week: "Week 2", topic: "Basic Concepts of GIS", objectives: "Meaning of Geographic Information System; importance and uses." },
            { week: "Week 3", topic: "Components of GIS", objectives: "Hardware, software, data, people, and methods; functions of each." },
            { week: "Week 4", topic: "Earthâ€™s External Processes", objectives: "Weathering, erosion, transportation, deposition, and resulting landforms." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Climate II", objectives: "Elements of climate; climatic controls; differences between weather and climate." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Climatic Classification", objectives: "Koppenâ€™s classification; world climatic regions." },
            { week: "Week 9", topic: "Environmental Resources", objectives: "Renewable and non-renewable resources; importance and sustainable use." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Renewable and Non-Renewable Resources", objectives: "Meaning, differences, and significance in Nigeriaâ€™s economy." },
            { week: "Week 2", topic: "Environmental Problems", objectives: "Pollution, deforestation, desertification, soil erosion, overpopulation." },
            { week: "Week 3", topic: "Environmental Conservation", objectives: "Methods (afforestation, legislation, recycling) and importance." },
            { week: "Week 4", topic: "Agriculture", objectives: "Types (subsistence, commercial, mixed); importance and challenges in Nigeria." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Transport and Communication", objectives: "Types (road, rail, water, air); importance and challenges in Nigeria." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Manufacturing Industries", objectives: "Factors influencing location; contributions to GDP; problems." },
            { week: "Week 9", topic: "Commercial Activities in Nigeria", objectives: "Role of trade, banking, insurance, and tourism in the economy." },
            { week: "Week 10-12", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Direction and Bearing", objectives: "Use of compass and bearings in navigation and map reading." },
            { week: "Week 2", topic: "Representation of Relief Forms", objectives: "Contours, hachures, spot heights; interpretation of relief features." },
            { week: "Week 3", topic: "Population", objectives: "Factors influencing distribution; structure, density, growth, and problems." },
            { week: "Week 4", topic: "Settlements", objectives: "Rural and urban settlements; functions and location factors." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Settlement Interactions", objectives: "Rural-urban migration; effects on development; problems and solutions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Geo-political Issues", objectives: "Boundary disputes, ethnic conflicts, political instability; effects on development." },
            { week: "Week 9", topic: "GIS Data", objectives: "Types (spatial, attribute); sources and uses in planning." },
            { week: "Week 10", topic: "Earthâ€™s Internal Processes", objectives: "Vulcanicity, earthquakes, folding, and faulting." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },
    ,
    // -----------------------------------------------------------------
    // SUBJECT 14: COMMERCE (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Commerce",
      icon: "fa-store",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Communication", objectives: "Meaning, importance, and traditional/modern forms of communication." },
            { week: "Week 2", topic: "Post Office and Telecommunication Services", objectives: "Services provided by NIPOST and telecommunication companies; advantages." },
            { week: "Week 3", topic: "Advertising", objectives: "Meaning, roles, types, and media of advertising; advantages and disadvantages." },
            { week: "Week 4", topic: "Sales Promotion and Public Relations", objectives: "Functions of sales promotion; roles of public relations in business." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Tourism", objectives: "Meaning, importance, tourist centers in Nigeria, and challenges." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Insurance I", objectives: "Meaning, principles of insurance (insurable interest, indemnity, utmost good faith)." },
            { week: "Week 9", topic: "Insurance II", objectives: "Types of insurance (life, fire, marine, motor); importance of insurance to businesses." },
            { week: "Week 10", topic: "Banking", objectives: "Origin of banking, types of banks, and their general functions." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Commercial Banks", objectives: "Functions, types of accounts, bank clearing system, and cheques." },
            { week: "Week 2", topic: "Central Bank", objectives: "Functions of CBN, monetary policies, and relationship with commercial banks." },
            { week: "Week 3", topic: "Specialized Banks", objectives: "Development banks, mortgage banks, merchant banks; their roles." },
            { week: "Week 4", topic: "Business Capital", objectives: "Meaning, types of capital (authorized, issued, called-up, working capital)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Calculation of Business Capital", objectives: "Working capital, capital owned, and basic accounting equations in commerce." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Credit", objectives: "Meaning, basis for credit, instruments of credit, and types of credit." },
            { week: "Week 9", topic: "Hire Purchase and Deferred Payment", objectives: "Features, advantages, and differences between them." },
            { week: "Week 10", topic: "Profit", objectives: "Meaning, types (gross, net), and calculation of turnover and rate of turnover." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Business Law I", objectives: "Principles of contract, essentials of a valid contract, breach of contract." },
            { week: "Week 2", topic: "Business Law II", objectives: "Law of agency; types of agents, rights, and duties of principal and agent." },
            { week: "Week 3", topic: "Sale of Goods Act", objectives: "Provisions of the act, conditions, and warranties." },
            { week: "Week 4", topic: "Government Policies and Business", objectives: "Privatization, commercialization, and deregulation; impact on commerce." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Consumer Protection", objectives: "Need for protection, rights of consumers, and consumer protection agencies (SON, NAFDAC)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Trade Associations", objectives: "Meaning, types, and functions (Chamber of Commerce, Manufacturers Association)." },
            { week: "Week 9", topic: "Syndicates and Cartels", objectives: "Meaning, formation, advantages, and disadvantages." },
            { week: "Week 10", topic: "Nationalization and Indigenization", objectives: "Reasons for nationalization; the indigenization decree and its effects." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 15: FINANCIAL ACCOUNTING (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Financial Accounting",
      icon: "fa-file-invoice-dollar",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Bank Reconciliation Statement I", objectives: "Meaning, causes of disagreement between cash book and bank statement." },
            { week: "Week 2", topic: "Bank Reconciliation Statement II", objectives: "Preparation of adjusted cash book and bank reconciliation statement." },
            { week: "Week 3", topic: "Depreciation of Fixed Assets I", objectives: "Meaning, causes, and reasons for providing depreciation." },
            { week: "Week 4", topic: "Depreciation of Fixed Assets II", objectives: "Methods of calculating depreciation (Straight line and Reducing balance)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Depreciation Accounting", objectives: "Journal entries and ledger accounts for depreciation and disposal of assets." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Bad Debts and Provision for Bad Debts", objectives: "Accounting entries for bad debts, recovery, and provision for doubtful debts." },
            { week: "Week 9", topic: "Provision for Discounts", objectives: "Accounting entries for provision for discounts allowed and received." },
            { week: "Week 10", topic: "Control Accounts I", objectives: "Meaning, uses, and preparation of Sales Ledger Control Account." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Control Accounts II", objectives: "Preparation of Purchases Ledger Control Account and set-offs." },
            { week: "Week 2", topic: "Single Entry and Incomplete Records I", objectives: "Meaning, causes, and computation of profit using statement of affairs." },
            { week: "Week 3", topic: "Single Entry and Incomplete Records II", objectives: "Conversion of single entry to double entry; preparation of final accounts." },
            { week: "Week 4", topic: "Manufacturing Accounts I", objectives: "Meaning, prime cost, factory overheads, and cost of production." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Manufacturing Accounts II", objectives: "Preparation of manufacturing, trading, profit and loss accounts." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Partnership Accounts I", objectives: "Meaning, types of partners, deed of partnership, and capital accounts." },
            { week: "Week 9", topic: "Partnership Accounts II", objectives: "Preparation of Profit and Loss Appropriation Account." },
            { week: "Week 10", topic: "Partnership Accounts III", objectives: "Current accounts and balance sheet of a partnership." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Admission of a New Partner", objectives: "Reasons for admission, treatment of goodwill (premium and revaluation methods)." },
            { week: "Week 2", topic: "Revaluation of Assets", objectives: "Accounting entries for revaluing assets upon admission of a partner." },
            { week: "Week 3", topic: "Company Accounts (Introduction)", objectives: "Meaning, types of companies, differences between partnership and company." },
            { week: "Week 4", topic: "Issue of Shares", objectives: "Classes of shares, issue at par, premium, and discount." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Company Final Accounts", objectives: "Preparation of simple trading, profit and loss appropriation account for companies." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Capital Market I", objectives: "Meaning, functions of the Nigerian Stock Exchange (NSE)." },
            { week: "Week 9", topic: "Capital Market II", objectives: "Securities traded on the NSE; roles of brokers and jobbers." },
            { week: "Week 10", topic: "Public Sector Accounting", objectives: "Meaning, sources of government revenue, and capital expenditures." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 16: LITERATURE IN ENGLISH (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Literature in English",
      icon: "fa-theater-masks",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Introduction to African Drama", objectives: "Background, themes, and stylistic devices in the selected WAEC/NECO text." },
            { week: "Week 2", topic: "African Drama: Act & Scene Analysis", objectives: "Detailed reading and analysis of plot development." },
            { week: "Week 3", topic: "African Drama: Characterization", objectives: "Role and significance of major and minor characters." },
            { week: "Week 4", topic: "African Poetry I", objectives: "Reading and analyzing selected African poems; identifying themes and poetic devices." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "African Poetry II", objectives: "In-depth study of tone, mood, and imagery in selected poems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Non-African Prose: Introduction", objectives: "Author's background, setting, and plot overview of the selected novel." },
            { week: "Week 9", topic: "Non-African Prose: Chapter Analysis", objectives: "Exploration of themes, narrative techniques, and conflicts." },
            { week: "Week 10", topic: "Unseen Poetry Analysis", objectives: "Strategies for analyzing and interpreting unseen poems." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Non-African Drama: Introduction", objectives: "Background, themes, and setting of the selected non-African play." },
            { week: "Week 2", topic: "Non-African Drama: Plot Analysis", objectives: "Detailed scene-by-scene analysis." },
            { week: "Week 3", topic: "Non-African Drama: Characterization", objectives: "Analysis of major characters, tragic flaws, and motivations." },
            { week: "Week 4", topic: "Non-African Poetry I", objectives: "Reading and analyzing selected non-African poems." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Non-African Poetry II", objectives: "Focus on literary devices, figures of speech, and thematic concerns." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "African Prose: Introduction", objectives: "Overview of the selected African novel; socio-cultural context." },
            { week: "Week 9", topic: "African Prose: Thematic Analysis", objectives: "Exploration of major themes (e.g., colonialism, tradition vs. modernity)." },
            { week: "Week 10", topic: "Unseen Prose Comprehension", objectives: "Techniques for tackling unseen prose passages." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "General Overview of Drama Texts", objectives: "Comparing themes and styles across African and Non-African drama." },
            { week: "Week 2", topic: "General Overview of Prose Texts", objectives: "Comparing narrative techniques and character development in prescribed novels." },
            { week: "Week 3", topic: "General Overview of Poetry", objectives: "Consolidating knowledge on poetic devices across all prescribed poems." },
            { week: "Week 4", topic: "Literary Appreciation", objectives: "Evaluating texts critically; identifying tone, mood, and diction." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Answering Context Questions", objectives: "Techniques for answering WAEC/NECO context and essay questions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Past Questions Drill: Drama", objectives: "Practicing past questions on prescribed drama texts." },
            { week: "Week 9", topic: "Past Questions Drill: Prose", objectives: "Practicing past questions on prescribed prose texts." },
            { week: "Week 10", topic: "Past Questions Drill: Poetry", objectives: "Practicing past questions on prescribed poetry." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 17: CHRISTIAN RELIGIOUS STUDIES (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Christian Religious Studies",
      icon: "fa-cross",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "The Sovereignty of God", objectives: "God as Creator; His control over the universe (Isaiah 45, Genesis 1-2)." },
            { week: "Week 2", topic: "The Leadership of Joseph", objectives: "Josephâ€™s early life, dreams, slavery, and rise to power in Egypt." },
            { week: "Week 3", topic: "The Leadership of Moses", objectives: "Call of Moses, leading the Israelites, and his qualities as a leader." },
            { week: "Week 4", topic: "The Leadership of Joshua", objectives: "Joshuaâ€™s commission, crossing the Jordan, and leading Israel into Canaan." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Deborah and Barak", objectives: "Role of Deborah as a judge and leader; the victory over Sisera." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Eli and Samuel", objectives: "The sins of Eli's sons; the call of Samuel and his leadership." },
            { week: "Week 9", topic: "King Saul", objectives: "Saul's selection, his disobedience, and his rejection as king." },
            { week: "Week 10", topic: "King David", objectives: "David's selection, his successes, his sin with Bathsheba, and repentance." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "King Solomon", objectives: "Solomonâ€™s wisdom, the building of the temple, his sins, and the division of the kingdom." },
            { week: "Week 2", topic: "Elijah and the Prophets of Baal", objectives: "Ahabâ€™s apostasy, the contest on Mount Carmel, and Elijah's victory." },
            { week: "Week 3", topic: "King Josiah", objectives: "Josiahâ€™s religious reforms and the discovery of the Book of the Law." },
            { week: "Week 4", topic: "Nehemiah and Ezra", objectives: "The rebuilding of the walls of Jerusalem; religious and social reforms." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "The Birth and Early Life of Jesus", objectives: "The annunciation, birth, presentation in the temple, and visit of the Magi." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "The Baptism and Temptation", objectives: "Significance of Jesus' baptism by John and his victory over temptation." },
            { week: "Week 9", topic: "The Call of the Disciples", objectives: "Calling of the first disciples and the twelve apostles; demands of discipleship." },
            { week: "Week 10", topic: "The Teachings of Jesus (Parables)", objectives: "Parables of the Kingdom (Sower, Mustard Seed) and their meanings." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Miracles of Jesus", objectives: "Nature miracles (calming the storm) and healing miracles; their significance." },
            { week: "Week 2", topic: "The Transfiguration", objectives: "Events on the mount of transfiguration and its significance to Jesus' ministry." },
            { week: "Week 3", topic: "The Triumphal Entry and Cleansing of the Temple", objectives: "Fulfillment of prophecy; conflict with religious leaders." },
            { week: "Week 4", topic: "The Last Supper and Betrayal", objectives: "Institution of the Lordâ€™s Supper; Judas' betrayal and Peter's denial." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Crucifixion and Burial", objectives: "The trials of Jesus, crucifixion at Golgotha, and burial by Joseph of Arimathea." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Resurrection and Ascension", objectives: "The empty tomb, post-resurrection appearances, and the great commission." },
            { week: "Week 9", topic: "The Promise of the Holy Spirit", objectives: "The Day of Pentecost, Peter's speech, and the birth of the early church." },
            { week: "Week 10", topic: "Paul's Missionary Journeys", objectives: "Overview of Paul's first missionary journey; challenges and successes." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 18: ISLAMIC RELIGIOUS STUDIES (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Islamic Religious Studies",
      icon: "fa-star-and-crescent",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Suratul Hujurat (Q. 49)", objectives: "Reading, translation, and lessons on Islamic brotherhood and manners." },
            { week: "Week 2", topic: "Suratun Nur (Q. 24)", objectives: "Selected verses on chastity, modesty, and social ethics." },
            { week: "Week 3", topic: "Hadith: Concept and Importance", objectives: "Definition of Hadith/Sunnah; its role as the second source of Shariah." },
            { week: "Week 4", topic: "Classification of Hadith", objectives: "Sahih (Authentic), Hasan (Good), Da'if (Weak); components of Hadith (Isnad and Matn)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Hadith 1 of An-Nawawi", objectives: "Reading, translation, and application of the Hadith on Intentions (Niyyah)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Hadith 15 & 16 of An-Nawawi", objectives: "Good speech, honoring neighbors, and controlling anger." },
            { week: "Week 9", topic: "Tawhid: Shirk (Polytheism)", objectives: "Meaning, types of Shirk, and its consequences in Islam." },
            { week: "Week 10", topic: "Articles of Faith", objectives: "Belief in Prophets and Messengers; characteristics of Prophets." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Zakat: Concept and Importance", objectives: "Meaning of Zakat, differences between Zakat and Sadaqah." },
            { week: "Week 2", topic: "Nisab and Beneficiaries of Zakat", objectives: "Items subject to Zakat, calculation of Nisab, and the 8 categories of recipients." },
            { week: "Week 3", topic: "Hajj (Pilgrimage)", objectives: "Conditions, types, and the essential rites (Arkan) of Hajj." },
            { week: "Week 4", topic: "Umrah (Lesser Hajj)", objectives: "Differences between Hajj and Umrah; spiritual significance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Islamic Economic System", objectives: "Sources of wealth, prohibition of Riba (usury/interest), and fair trading." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Marriage in Islam (Nikah)", objectives: "Conditions for valid marriage, selection of a spouse, and duties of husband and wife." },
            { week: "Week 9", topic: "Divorce (Talaq)", objectives: "Types of divorce, rules governing Iddah (waiting period), and Khul'." },
            { week: "Week 10", topic: "The Rightly Guided Caliphs", objectives: "Life and achievements of Abu Bakr As-Siddiq (RA)." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "The Rightly Guided Caliphs", objectives: "Life and administrative reforms of Umar bin Al-Khattab (RA)." },
            { week: "Week 2", topic: "The Rightly Guided Caliphs", objectives: "Life, compilation of the Quran, and martyrdom of Uthman bin Affan (RA)." },
            { week: "Week 3", topic: "The Rightly Guided Caliphs", objectives: "Life, courage, and challenges during the reign of Ali bin Abi Talib (RA)." },
            { week: "Week 4", topic: "Umayyad Dynasty", objectives: "Establishment of the dynasty by Mu'awiyah; key achievements." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Umar bin Abdul Aziz", objectives: "His piety, reforms, and why he is considered the 5th Rightly Guided Caliph." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Islamic Ethics", objectives: "Respect for parents and elders; brotherhood and equality." },
            { week: "Week 9", topic: "Social Vices in Islam", objectives: "Prohibition of gambling, alcohol consumption, and bribery." },
            { week: "Week 10", topic: "Islamic Contribution to Civilization", objectives: "Contributions in medicine, mathematics, and education." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 19: DATA PROCESSING (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Data Processing",
      icon: "fa-database",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Data Models", objectives: "Meaning of data models; types (Entity-Relationship, Relational, Object-Oriented)." },
            { week: "Week 2", topic: "Entity-Relationship Model", objectives: "Entities, attributes, relationships, and drawing ER diagrams." },
            { week: "Week 3", topic: "Relational Model", objectives: "Tables, primary keys, foreign keys, and referential integrity." },
            { week: "Week 4", topic: "Normalization", objectives: "Meaning and importance; First Normal Form (1NF) and Second Normal Form (2NF)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Database Management System (DBMS)", objectives: "Functions, advantages, and examples of DBMS software (Access, MySQL)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Creating a Database (Practical)", objectives: "Using MS Access to create tables and define primary keys." },
            { week: "Week 9", topic: "Querying a Database", objectives: "Creating select queries and basic SQL commands (SELECT, FROM, WHERE)." },
            { week: "Week 10", topic: "Forms and Reports", objectives: "Designing data entry forms and generating printable reports in MS Access." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Internet", objectives: "Meaning, history, and basic terminology (WWW, URL, HTTP, HTML)." },
            { week: "Week 2", topic: "Internet Services", objectives: "Email, FTP, Telnet, e-commerce, and cloud storage." },
            { week: "Week 3", topic: "Web Browsers and Search Engines", objectives: "Features of browsers; how to use search engines effectively." },
            { week: "Week 4", topic: "Cyber Security I", objectives: "Meaning, types of cybercrimes (hacking, phishing, identity theft)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Cyber Security II", objectives: "Preventive measures, firewalls, antivirus software, and encryption." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Presentation Packages", objectives: "Features, uses, and examples (MS PowerPoint, Google Slides)." },
            { week: "Week 9", topic: "Creating Presentations (Practical)", objectives: "Designing slides, inserting multimedia, and applying transitions." },
            { week: "Week 10", topic: "Web Design (Introduction)", objectives: "Basic HTML tags and structuring a simple web page." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Graphic Design (Introduction)", objectives: "Meaning, principles of design, and types of graphic software (CorelDraw, Photoshop)." },
            { week: "Week 2", topic: "CorelDraw Basics", objectives: "Exploring the CorelDraw interface, toolbars, and color palettes." },
            { week: "Week 3", topic: "Creating Designs (Practical I)", objectives: "Using shape tools, text tools, and coloring to create logos." },
            { week: "Week 4", topic: "Creating Designs (Practical II)", objectives: "Designing letterheads, complementary cards, and basic flyers." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Computer Maintenance", objectives: "Preventive maintenance, disk defragmentation, and system updates." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Ethics in Data Processing", objectives: "Data privacy, copyright laws, and intellectual property rights." },
            { week: "Week 9", topic: "Data Backup and Recovery", objectives: "Importance of backups, types of backup media, and recovery procedures." },
            { week: "Week 10", topic: "Project Work", objectives: "Students develop a complete mini-database or a basic graphics portfolio." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },
    ,
    // -----------------------------------------------------------------
    // SUBJECT 20: ECONOMICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Economics",
      icon: "fa-chart-line",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Action of Government on Prices", objectives: "Price control, minimum and maximum price legislation, rationing, and their effects." },
            { week: "Week 2", topic: "Elasticity of Demand", objectives: "Meaning, types (price, income, cross), and measurement of elasticity of demand." },
            { week: "Week 3", topic: "Elasticity of Supply", objectives: "Meaning, determinants, and measurement of price elasticity of supply." },
            { week: "Week 4", topic: "Utility Theory", objectives: "Meaning of utility, total, marginal utility, and the law of diminishing marginal utility." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Theory of Consumer Behaviour", objectives: "Indifference curves, budget lines, and consumer equilibrium." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Theory of Production I", objectives: "Production function, short-run and long-run periods." },
            { week: "Week 9", topic: "Theory of Production II", objectives: "Law of variable proportions (diminishing returns) and returns to scale." },
            { week: "Week 10", topic: "Cost Concepts", objectives: "Total, average, marginal costs, fixed and variable costs, and their curves." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Revenue Concepts", objectives: "Total, average, and marginal revenue under different market structures." },
            { week: "Week 2", topic: "Market Structures I: Perfect Competition", objectives: "Features, short-run and long-run equilibrium of a perfectly competitive firm." },
            { week: "Week 3", topic: "Market Structures II: Monopoly", objectives: "Features, causes, and equilibrium of a monopolist; price discrimination." },
            { week: "Week 4", topic: "Market Structures III: Imperfect Markets", objectives: "Monopolistic competition, oligopoly, and their basic features." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "National Income I", objectives: "Meaning, concepts (GDP, GNP, NNP, NI)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "National Income II", objectives: "Methods of measuring national income (Output, Income, Expenditure)." },
            { week: "Week 9", topic: "Money", objectives: "Meaning, characteristics, functions, and the concept of value of money." },
            { week: "Week 10", topic: "Inflation and Deflation", objectives: "Meaning, types, causes, effects, and control of inflation and deflation." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Financial Institutions I", objectives: "Commercial banks and central banks: functions and credit creation." },
            { week: "Week 2", topic: "Financial Institutions II", objectives: "Other financial institutions (merchant banks, mortgage banks, insurance)." },
            { week: "Week 3", topic: "Public Finance I", objectives: "Meaning, government revenue, and government expenditure." },
            { week: "Week 4", topic: "Public Finance II", objectives: "Taxation: Meaning, types (direct and indirect), principles of a good tax system." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "National Budget", objectives: "Meaning, types (balanced, surplus, deficit), and uses of the budget." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Economic Growth and Development", objectives: "Meaning, differences, and characteristics of developing economies." },
            { week: "Week 9", topic: "Economic Planning", objectives: "Meaning, types, importance, and challenges of economic planning in West Africa." },
            { week: "Week 10", topic: "International Trade", objectives: "Reasons for international trade, comparative advantage, and terms of trade." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 21: FURTHER MATHEMATICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Further Mathematics",
      icon: "fa-square-root-alt",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Roots of Quadratic Equations", objectives: "Sum and product of roots, forming equations from given roots." },
            { week: "Week 2", topic: "Polynomials I", objectives: "Addition, subtraction, and multiplication of polynomials." },
            { week: "Week 3", topic: "Polynomials II", objectives: "Division of polynomials, Remainder and Factor theorems." },
            { week: "Week 4", topic: "Polynomials III", objectives: "Roots of cubic equations, synthetic division." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Logical Reasoning", objectives: "Truth tables, compound statements, tautology, contradiction, and implication." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Permutations", objectives: "Factorial notation, arrangements with and without restrictions, cyclic permutations." },
            { week: "Week 9", topic: "Combinations", objectives: "Selections, combination formulas, and applications." },
            { week: "Week 10", topic: "Binomial Theorem", objectives: "Pascal's triangle, Binomial expansion for positive integral indices." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Probability I", objectives: "Addition and multiplication laws of probability, mutually exclusive events." },
            { week: "Week 2", topic: "Probability II", objectives: "Independent events, conditional probability, and probability trees." },
            { week: "Week 3", topic: "Vectors in Three Dimensions I", objectives: "Position vectors, addition, subtraction, and magnitude of 3D vectors." },
            { week: "Week 4", topic: "Vectors in Three Dimensions II", objectives: "Scalar (Dot) product, angle between two vectors, and direction cosines." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Dynamics I", objectives: "Newton's laws of motion, force, mass, and acceleration." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Dynamics II", objectives: "Motion of connected particles, objects on inclined planes with friction." },
            { week: "Week 9", topic: "Work, Energy, and Power", objectives: "Definitions, calculations of work done, kinetic/potential energy, and conservation of energy." },
            { week: "Week 10", topic: "Projectiles", objectives: "Equations of motion under gravity, maximum height, time of flight, and range." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Differentiation I", objectives: "First principles, standard derivatives of polynomials, trigonometric, and exponential functions." },
            { week: "Week 2", topic: "Differentiation II", objectives: "Product rule, quotient rule, and chain rule (function of a function)." },
            { week: "Week 3", topic: "Application of Differentiation", objectives: "Rates of change, gradients of curves, turning points (maxima and minima)." },
            { week: "Week 4", topic: "Integration I", objectives: "Integration as anti-derivative, standard integrals, indefinite integrals." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Integration II", objectives: "Integration by substitution, integration of trigonometric functions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Application of Integration", objectives: "Definite integrals, calculation of area under a curve." },
            { week: "Week 9", topic: "Correlation", objectives: "Scatter diagrams, Spearman's rank correlation coefficient." },
            { week: "Week 10", topic: "Variance and Standard Deviation", objectives: "Calculation for grouped and ungrouped continuous data." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 22: CIVIC EDUCATION (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Civic Education",
      icon: "fa-landmark",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Citizenship Education", objectives: "Meaning of citizenship, ways of acquiring citizenship." },
            { week: "Week 2", topic: "Duties and Obligations of Citizens", objectives: "Differentiating between rights, duties, and obligations." },
            { week: "Week 3", topic: "Capitalist Democracy", objectives: "Meaning, characteristics, and how it fosters development." },
            { week: "Week 4", topic: "Rule of Law", objectives: "Principles, meaning, importance, and limitations of the rule of law." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Protection of Human Rights", objectives: "Groups that protect human rights, roles of individuals in human rights protection." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Drug Abuse I", objectives: "Meaning, commonly abused drugs, and signs of drug abuse." },
            { week: "Week 9", topic: "Drug Abuse II", objectives: "Symptoms, causes, and consequences of drug abuse on individuals and society." },
            { week: "Week 10", topic: "Preventive Measures against Drug Abuse", objectives: "Roles of government agencies (NDLEA, NAFDAC) and rehabilitation." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Political Apathy I", objectives: "Meaning, forms, and causes of political apathy." },
            { week: "Week 2", topic: "Political Apathy II", objectives: "Dangers of political apathy and ways to overcome it." },
            { week: "Week 3", topic: "Public Service", objectives: "Meaning, characteristics, and reasons for the shortcomings in the public service." },
            { week: "Week 4", topic: "Ways of Improving the Public Service", objectives: "Code of Conduct Bureau (CCB) and continuous training." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Civil Society", objectives: "Meaning, functions, and problems of civil society groups." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Popular Participation I", objectives: "Meaning, types, and reasons why people do not participate in politics." },
            { week: "Week 9", topic: "Popular Participation II", objectives: "How popular participation can be promoted in society." },
            { week: "Week 10", topic: "Democracy and National Development", objectives: "How democratic practices promote national development and unity." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Human Trafficking I", objectives: "Meaning, causes, and methods used by traffickers." },
            { week: "Week 2", topic: "Human Trafficking II", objectives: "Consequences of human trafficking on the victims and society." },
            { week: "Week 3", topic: "Preventing Human Trafficking", objectives: "Roles of government (NAPTIP), NGOs, and individuals." },
            { week: "Week 4", topic: "Interpersonal Relationships", objectives: "Meaning, types, and importance of healthy interpersonal relationships." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Inter-communal Relationships", objectives: "Meaning, importance, and skills for resolving inter-communal conflicts." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Cultism", objectives: "Meaning, origin, causes, and consequences of cultism in schools." },
            { week: "Week 9", topic: "Preventive Measures against Cultism", objectives: "Roles of parents, government, and society in eradicating cultism." },
            { week: "Week 10", topic: "National Security", objectives: "Roles of citizens and armed forces in maintaining national security." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 23: ANIMAL HUSBANDRY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Animal Husbandry",
      icon: "fa-paw",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Anatomy and Physiology of Farm Animals", objectives: "Introduction to major body systems of farm animals." },
            { week: "Week 2", topic: "Digestive Systems", objectives: "Ruminant vs. non-ruminant digestive systems and their functions." },
            { week: "Week 3", topic: "Reproductive System", objectives: "Male and female reproductive organs and their functions." },
            { week: "Week 4", topic: "Animal Reproduction", objectives: "Estrus cycle, mating, gestation, and parturition." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Environmental Physiology", objectives: "Effects of climate (temperature, rainfall, humidity) on animal performance." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Animal Nutrition", objectives: "Classes of animal feed and essential nutrients (carbohydrates, proteins, vitamins)." },
            { week: "Week 9", topic: "Types of Feed", objectives: "Concentrates, roughages, supplements, and feed additives." },
            { week: "Week 10", topic: "Ration Formulation", objectives: "Balanced ration, maintenance, and production rations." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Livestock Management: Poultry", objectives: "Breeds, housing, feeding, and management systems of poultry." },
            { week: "Week 2", topic: "Livestock Management: Pigs", objectives: "Breeds, housing, feeding, and routine management of swine." },
            { week: "Week 3", topic: "Livestock Management: Cattle", objectives: "Dairy vs. beef cattle, housing, and pasture management." },
            { week: "Week 4", topic: "Livestock Management: Sheep and Goats", objectives: "Extensive and intensive systems, health and feeding." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Animal Health Management I", objectives: "Signs of good health vs. ill-health in farm animals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Animal Health Management II", objectives: "Predisposing factors to animal diseases; preventive measures." },
            { week: "Week 9", topic: "Common Animal Diseases", objectives: "Viral, bacterial, fungal, and protozoan diseases; symptoms and control." },
            { week: "Week 10", topic: "Parasites of Farm Animals", objectives: "Endoparasites (tapeworms, roundworms) and ectoparasites (ticks, lice)." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Pasture and Forage Crops", objectives: "Meaning, common grasses and legumes used in livestock feeding." },
            { week: "Week 2", topic: "Establishment of Pasture", objectives: "Land preparation, planting, weed control, and fertilizer application." },
            { week: "Week 3", topic: "Pasture Management", objectives: "Rotational grazing, zero grazing, and control of pests/diseases in pasture." },
            { week: "Week 4", topic: "Forage Conservation", objectives: "Methods of preserving forage: hay and silage making." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Animal Improvement", objectives: "Aims of animal improvement; introduction, selection, and breeding methods." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Artificial Insemination", objectives: "Meaning, methods of semen collection, advantages and disadvantages." },
            { week: "Week 9", topic: "Processing and Marketing of Animal Products", objectives: "Processing meat, milk, and eggs for human consumption." },
            { week: "Week 10", topic: "Record Keeping in Animal Husbandry", objectives: "Types of records (health, production, financial) and their importance." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 24: VISUAL ARTS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Visual Arts",
      icon: "fa-palette",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Nigerian Art History I", objectives: "Study of Nok and Ife Art cultures: location, medium, and characteristics." },
            { week: "Week 2", topic: "Nigerian Art History II", objectives: "Study of Benin and Igbo-Ukwu Art cultures: origin, medium, and significance." },
            { week: "Week 3", topic: "Contemporary Nigerian Art", objectives: "Pioneers of modern Nigerian art (Aina Onabolu, Ben Enwonwu)." },
            { week: "Week 4", topic: "Two-Dimensional Art: Painting", objectives: "Techniques (impasto, wash, glazing), media, and color psychology." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Still Life Painting (Practical)", objectives: "Setting up a composition; rendering using poster colors or watercolor." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Landscape Painting", objectives: "Understanding perspective, atmospheric perspective, and outdoor painting." },
            { week: "Week 9", topic: "Imaginative Composition", objectives: "Creating artwork based on themes from memory or imagination." },
            { week: "Week 10", topic: "Figure Drawing", objectives: "Proportions of the human body, quick sketches, and detailed anatomical studies." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Three-Dimensional Art: Sculpture", objectives: "Materials (clay, wood, metal) and techniques (modeling, carving, casting)." },
            { week: "Week 2", topic: "Modeling (Practical)", objectives: "Preparing clay, pinch, coil, and slab methods." },
            { week: "Week 3", topic: "Relief Sculpture", objectives: "Creating bas-relief (low relief) and high relief using clay or plaster." },
            { week: "Week 4", topic: "Ceramics I", objectives: "History of pottery, preparation of clay, and forming techniques." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Ceramics II (Decoration and Firing)", objectives: "Incising, glazing, and understanding the kiln firing process." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Textile Design I", objectives: "Introduction to fabric decoration, materials, and dyes." },
            { week: "Week 9", topic: "Tie and Dye (Practical)", objectives: "Techniques: folding, tying, marbling, and dyeing processes." },
            { week: "Week 10", topic: "Batik (Practical)", objectives: "Wax resist techniques, stamping, and freehand drawing on fabric." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Graphic Design I", objectives: "Elements and principles applied to graphic communication." },
            { week: "Week 2", topic: "Lettering", objectives: "Calligraphy, block lettering, serif and sans-serif typefaces." },
            { week: "Week 3", topic: "Poster Design", objectives: "Functions of a poster, balancing text and imagery, use of bold colors." },
            { week: "Week 4", topic: "Logo and Badge Design", objectives: "Conceptualizing and designing emblems for schools or organizations." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Book Cover Design", objectives: "Designing front, spine, and back covers; typography and illustration." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Art Appreciation", objectives: "How to critique a work of art; analyzing form, content, and context." },
            { week: "Week 9", topic: "Museums and Galleries", objectives: "Roles of museums/galleries in preservation and promotion of art." },
            { week: "Week 10", topic: "Portfolio Development", objectives: "Selecting, organizing, and presenting artworks for exhibition or WAEC assessment." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 25: TECHNICAL DRAWING (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Technical Drawing",
      icon: "fa-drafting-compass",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Orthographic Projection I", objectives: "First-angle and Third-angle projection principles." },
            { week: "Week 2", topic: "Orthographic Projection II", objectives: "Converting isometric views to orthographic views." },
            { week: "Week 3", topic: "Orthographic Projection III", objectives: "Dimensioning, hidden details, and center lines." },
            { week: "Week 4", topic: "Isometric Drawing I", objectives: "Principles of isometric projection, isometric axes and scale." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Isometric Drawing II", objectives: "Drawing isometric views from orthographic projections (blocks and cylinders)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Oblique Drawing I", objectives: "Principles of oblique projection (Cavalier and Cabinet)." },
            { week: "Week 9", topic: "Oblique Drawing II", objectives: "Drawing oblique blocks and dealing with circular features." },
            { week: "Week 10", topic: "Sections and Sectional Views I", objectives: "Purpose of sectioning, cutting planes, and hatching techniques." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Sections and Sectional Views II", objectives: "Full sections, half sections, and staggered sections." },
            { week: "Week 2", topic: "Intersection of Solids I", objectives: "Lines of intersection between two prisms." },
            { week: "Week 3", topic: "Intersection of Solids II", objectives: "Intersection of cylinders of equal and unequal diameters." },
            { week: "Week 4", topic: "Intersection of Solids III", objectives: "Intersection between a cylinder and a cone." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Surface Development I", objectives: "Meaning and application of surface development in sheet metal work." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Surface Development II", objectives: "Parallel line development (prisms and cylinders)." },
            { week: "Week 9", topic: "Surface Development III", objectives: "Radial line development (pyramids and cones)." },
            { week: "Week 10", topic: "Development of Truncated Solids", objectives: "Developing the surfaces of cut cylinders and cones." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Loci I", objectives: "Path of a moving point; the cycloid." },
            { week: "Week 2", topic: "Loci II", objectives: "The epicycloid and hypocycloid." },
            { week: "Week 3", topic: "Loci III", objectives: "Involute of a circle and a polygon." },
            { week: "Week 4", topic: "Building Drawing I", objectives: "Architectural symbols, standard dimensions for doors and windows." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Building Drawing II", objectives: "Drawing a simple floor plan from a given sketch." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Building Drawing III", objectives: "Front and side elevations of a simple building." },
            { week: "Week 9", topic: "Freehand Sketching", objectives: "Sketching hand tools and engineering components in good proportion." },
            { week: "Week 10", topic: "Computer-Aided Design (CAD)", objectives: "Introduction to AutoCAD interface, basic drawing, and modification tools." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },
    ,
    // -----------------------------------------------------------------
    // SUBJECT 26: AGRICULTURAL SCIENCE (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Agricultural Science",
      icon: "fa-leaf",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Forestry I", objectives: "Meaning, importance, and forest management practices." },
            { week: "Week 2", topic: "Forestry II", objectives: "Forest regulations, selective exploitation, and regeneration." },
            { week: "Week 3", topic: "Wildlife Conservation", objectives: "Meaning, importance, and common wildlife species in Nigeria." },
            { week: "Week 4", topic: "Fishery I", objectives: "Meaning, types (artisanal, industrial), and aquatic organisms." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Fishery II", objectives: "Fish farming management, pond construction, and maintenance." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Ruminant Animal Management", objectives: "Management of cattle, sheep, and goats (housing, feeding)." },
            { week: "Week 9", topic: "Non-Ruminant Animal Management", objectives: "Management of poultry, pigs, and rabbits." },
            { week: "Week 10", topic: "Agricultural Pests", objectives: "Classification, signs of damage, and economic importance." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Crop Improvement", objectives: "Methods of crop improvement (introduction, selection, breeding)." },
            { week: "Week 2", topic: "Principles of Genetics", objectives: "Mendelian genetics, genes, chromosomes, and heritability." },
            { week: "Week 3", topic: "Crop Diseases", objectives: "Symptoms, causes, and control of common crop diseases." },
            { week: "Week 4", topic: "Weed Control", objectives: "Classification, harmful effects, and methods of weed control." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Soil Fertility", objectives: "Maintenance of soil fertility; manure and fertilizers." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Irrigation and Drainage", objectives: "Meaning, importance, types, and systems of irrigation." },
            { week: "Week 9", topic: "Planting Operations", objectives: "Seed selection, seed treatment, planting dates, and spacing." },
            { week: "Week 10", topic: "Basic Farm Tools", objectives: "Maintenance and uses of farm tools and implements." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Farm Economics", objectives: "Basic economic principles: demand, supply, and production costs." },
            { week: "Week 2", topic: "Farm Management", objectives: "Record keeping, types of records, and farm budgeting." },
            { week: "Week 3", topic: "Agricultural Extension", objectives: "Definition, functions, and teaching methods in extension." },
            { week: "Week 4", topic: "Agricultural Marketing", objectives: "Channels of marketing, marketing problems, and solutions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Food Processing", objectives: "Methods of processing fruits, vegetables, and cereals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Storage of Farm Produce", objectives: "Storage structures and methods for grains and perishable crops." },
            { week: "Week 9", topic: "Agricultural Laws", objectives: "Land tenure systems, land use act, and agricultural policies." },
            { week: "Week 10", topic: "Revision", objectives: "Recap of core agricultural concepts." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 27: BIOLOGY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Biology",
      icon: "fa-dna",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Cell and its Environment", objectives: "Diffusion, osmosis, plasmolysis, and turgidity." },
            { week: "Week 2", topic: "Living Cells", objectives: "Structure, functions, and properties of cell components." },
            { week: "Week 3", topic: "Nutrition in Animals", objectives: "Holophytic vs. holozoic nutrition; teeth and digestion in mammals." },
            { week: "Week 4", topic: "Digestive System", objectives: "Process of digestion and absorption in the human alimentary canal." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Transport System I", objectives: "Media of transport; blood and lymph; circulatory systems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Transport System II", objectives: "Transport in plants: Xylem and Phloem; transpirational pull." },
            { week: "Week 9", topic: "Respiratory System I", objectives: "Types of respiration (aerobic/anaerobic); mechanisms of respiration." },
            { week: "Week 10", topic: "Respiratory System II", objectives: "Respiratory organs in animals and plants." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Excretory System", objectives: "Excretory organs, mechanism of excretion, and homeostasis." },
            { week: "Week 2", topic: "Nervous System I", objectives: "Central and peripheral nervous systems; neurons." },
            { week: "Week 3", topic: "Nervous System II", objectives: "Brain, spinal cord, and reflex actions." },
            { week: "Week 4", topic: "Sense Organs", objectives: "Structure and function of eye, ear, nose, tongue, and skin." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Hormonal Coordination", objectives: "Endocrine glands, hormones, and their functions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Reproductive System I", objectives: "Asexual and sexual reproduction in organisms." },
            { week: "Week 9", topic: "Reproductive System II", objectives: "Reproduction in mammals: structures and process of fertilization." },
            { week: "Week 10", topic: "Pollination and Fertilization", objectives: "Mechanisms of pollination and fertilization in plants." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Growth and Development", objectives: "Meaning, types, and mechanisms of growth in organisms." },
            { week: "Week 2", topic: "Ecological Factors", objectives: "Abiotic and biotic factors and their influence on organisms." },
            { week: "Week 3", topic: "Ecosystems", objectives: "Components, food chains, food webs, and trophic levels." },
            { week: "Week 4", topic: "Habitat Studies", objectives: "Freshwater, marine, and terrestrial habitats." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Adaptation for Survival", objectives: "Adaptive features in plants and animals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Pollution", objectives: "Types, causes, effects, and control of environmental pollution." },
            { week: "Week 9", topic: "Conservation of Natural Resources", objectives: "Importance of conservation and sustainable management." },
            { week: "Week 10", topic: "Pests and Diseases of Crops", objectives: "Common pests and methods of control." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 28: CHEMISTRY (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Chemistry",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Air", objectives: "Composition of air, separation of air components, noble gases." },
            { week: "Week 2", topic: "Water", objectives: "Composition, properties, types of water hardness, and treatment." },
            { week: "Week 3", topic: "Solubility", objectives: "Solubility curves, saturated/unsaturated solutions, Henry's law." },
            { week: "Week 4", topic: "Chemical Kinetics", objectives: "Rates of reaction, factors affecting reaction rates, collision theory." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Chemical Equilibrium", objectives: "Reversible reactions, Le Chatelierâ€™s principle, equilibrium constant." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Acids, Bases, and Salts I", objectives: "Concepts of acids and bases (Arrhenius, Bronsted-Lowry)." },
            { week: "Week 9", topic: "Acids, Bases, and Salts II", objectives: "pH scale, neutralization, and preparation of salts." },
            { week: "Week 10", topic: "Redox Reactions", objectives: "Oxidation numbers, oxidizing and reducing agents, balancing redox equations." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Electrolysis I", objectives: "Electrolytes, non-electrolytes, Faradayâ€™s laws of electrolysis." },
            { week: "Week 2", topic: "Electrolysis II", objectives: "Applications of electrolysis (electroplating, extraction of metals)." },
            { week: "Week 3", topic: "Hydrocarbons: Alkanes", objectives: "Structure, nomenclature, physical/chemical properties of alkanes." },
            { week: "Week 4", topic: "Hydrocarbons: Alkenes", objectives: "Preparation, properties, and addition reactions of alkenes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Hydrocarbons: Alkynes", objectives: "Preparation, properties, and reactions of alkynes (ethyne)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Benzene and Aromatic Compounds", objectives: "Structure, properties, and substitution reactions of benzene." },
            { week: "Week 9", topic: "Alkanols", objectives: "Classification, preparation, and properties of alcohols." },
            { week: "Week 10", topic: "Alkanoic Acids", objectives: "Structure, preparation, and chemical properties of carboxylic acids." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Alkanals and Alkanones", objectives: "Structure, properties, and identification tests." },
            { week: "Week 2", topic: "Alkanoates (Esters)", objectives: "Preparation (esterification) and uses." },
            { week: "Week 3", topic: "Fats and Oils", objectives: "Composition, saponification, soap manufacture." },
            { week: "Week 4", topic: "Proteins and Polymers", objectives: "Structure of amino acids, condensation and addition polymerization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Introduction to Radioactivity", objectives: "Alpha, beta, and gamma radiation; half-life." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Nuclear Chemistry", objectives: "Nuclear fission and fusion, applications." },
            { week: "Week 9", topic: "Petroleum and Petrochemicals", objectives: "Fractional distillation, refining processes." },
            { week: "Week 10", topic: "Revision", objectives: "Review of key organic and physical chemistry topics." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 29: PHYSICS (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Physics",
      icon: "fa-atom",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Heat Energy", objectives: "Concept of heat, temperature, and heat capacity." },
            { week: "Week 2", topic: "Specific Heat Capacity", objectives: "Measurement and applications (calorimetry)." },
            { week: "Week 3", topic: "Change of State", objectives: "Melting, boiling, latent heat, and vapor pressure." },
            { week: "Week 4", topic: "Gas Laws", objectives: "Boyle's law, Charles' law, Pressure law, and Ideal gas equation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Light Energy: Reflection", objectives: "Laws of reflection, plane mirrors, curved mirrors." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Light Energy: Refraction", objectives: "Laws of refraction, refractive index, Snell's law." },
            { week: "Week 9", topic: "Total Internal Reflection", objectives: "Conditions, critical angle, and applications (fiber optics)." },
            { week: "Week 10", topic: "Lenses", objectives: "Types, refraction through lenses, lens formula, and magnification." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Optical Instruments", objectives: "Human eye, camera, projector, microscope, and telescope." },
            { week: "Week 2", topic: "Current Electricity I", objectives: "Electric current, potential difference, Ohm's law, resistors." },
            { week: "Week 3", topic: "Current Electricity II", objectives: "Series and parallel circuits, resistivity." },
            { week: "Week 4", topic: "Electromotive Force", objectives: "EMF vs. Terminal voltage, internal resistance, cells." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Electrical Measurements", objectives: "Potentiometers, Wheatstone bridge, ammeters/voltmeters." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Capacitors", objectives: "Principles, types, capacitance, energy stored, dielectrics." },
            { week: "Week 9", topic: "Electric Fields", objectives: "Coulomb's law, electric field intensity, potential." },
            { week: "Week 10", topic: "Magnetic Fields", objectives: "Magnetic force, fields around conductors, electromagnets." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Electromagnetic Induction", objectives: "Faraday's and Lenz's laws, induction principles." },
            { week: "Week 2", topic: "Transformers", objectives: "Construction, principles, types (step-up/step-down), efficiency." },
            { week: "Week 3", topic: "Alternating Current", objectives: "AC circuits, peak/RMS values, reactance, impedance." },
            { week: "Week 4", topic: "Semiconductors", objectives: "Intrinsic/extrinsic, p-n junction, diodes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Electronic Components", objectives: "Transistors, logic gates (AND, OR, NOT)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Atomic Physics", objectives: "Models of the atom, photoelectric effect, energy levels." },
            { week: "Week 9", topic: "Radioactivity", objectives: "Decay, half-life, uses, and dangers of radiation." },
            { week: "Week 10", topic: "Revision", objectives: "Review of electricity, magnetism, and modern physics." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 30: HEALTH EDUCATION (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Health Education",
      icon: "fa-heartbeat",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Community Health", objectives: "Meaning, importance, and community health services." },
            { week: "Week 2", topic: "School Health Program", objectives: "Meaning, components, and functions of a school health program." },
            { week: "Week 3", topic: "Environmental Health", objectives: "Factors affecting environmental health; sanitation." },
            { week: "Week 4", topic: "Health Agencies", objectives: "Roles of local, state, national, and international health agencies (WHO, UNICEF)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Family Life Education", objectives: "Meaning, importance, and components of family life." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Human Growth and Development", objectives: "Stages of development; personality development." },
            { week: "Week 9", topic: "Sexually Transmitted Infections", objectives: "Types, symptoms, prevention, and control of STIs." },
            { week: "Week 10", topic: "Prevention of STIs", objectives: "Personal responsibility, abstinence, and proper protection." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Drug/Substance Abuse", objectives: "Definition, common drugs, and signs of drug abuse." },
            { week: "Week 2", topic: "Effects of Drug Abuse", objectives: "Physical, social, and mental consequences of substance abuse." },
            { week: "Week 3", topic: "Prevention of Drug Abuse", objectives: "Roles of family, school, and government agencies (NDLEA)." },
            { week: "Week 4", topic: "Safety and First Aid", objectives: "Principles of first aid, emergency kits, and common accidents." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Emergency Conditions", objectives: "First aid for burns, fractures, poisoning, and bleeding." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Rehabilitation", objectives: "Meaning and importance of rehabilitation in health." },
            { week: "Week 9", topic: "Consumer Health", objectives: "Meaning of consumer health; rights and protection of consumers." },
            { week: "Week 10", topic: "Health Quackery", objectives: "Identifying and avoiding fraudulent health practices." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Food and Nutrition", objectives: "Nutrients, balanced diet, and dietary needs of different groups." },
            { week: "Week 2", topic: "Nutritional Deficiencies", objectives: "Causes, symptoms, and control of deficiency diseases (e.g., Kwashiorkor, Scurvy)." },
            { week: "Week 3", topic: "Physical Fitness", objectives: "Meaning, components, and importance of physical fitness." },
            { week: "Week 4", topic: "Body Conditioning", objectives: "Types of exercises for fitness; warm-up and cool-down." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Posture and Deformities", objectives: "Importance of good posture; common postural deformities." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Common Communicable Diseases", objectives: "Mode of transmission and prevention." },
            { week: "Week 9", topic: "Non-Communicable Diseases", objectives: "Causes and management of chronic diseases (e.g., Hypertension, Diabetes)." },
            { week: "Week 10", topic: "Personal Health", objectives: "Practices for maintaining personal hygiene." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 31: NIGERIAN LANGUAGES (SS 2)
    // -----------------------------------------------------------------
    {
      title: "Nigerian Languages (Igbo/Yoruba/Hausa)",
      icon: "fa-language",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Grammar: Sentence Structure", objectives: "Advanced sentence construction and syntax analysis." },
            { week: "Week 2", topic: "Grammar: Tenses and Aspects", objectives: "Understanding verb conjugations in the language." },
            { week: "Week 3", topic: "Literature: Poetry Analysis", objectives: "Appreciating traditional and modern poetic forms, tone, and imagery." },
            { week: "Week 4", topic: "Oral Literature: Proverbs", objectives: "Analysis of cultural wisdom and usage of proverbs in daily communication." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Essay Writing: Descriptive", objectives: "Writing clear descriptive essays on cultural events." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Comprehension", objectives: "Reading and interpreting complex literary passages." },
            { week: "Week 9", topic: "Translation", objectives: "Translating simple English passages into the native language." },
            { week: "Week 10", topic: "Cultural Study", objectives: "Traditional institutions, marriage customs, and festivals." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Grammar: Punctuation and Spelling", objectives: "Mastering orthography and correct usage of marks." },
            { week: "Week 2", topic: "Literature: Drama", objectives: "Character analysis and themes in selected play texts." },
            { week: "Week 3", topic: "Essay Writing: Narrative", objectives: "Writing engaging stories and narratives." },
            { week: "Week 4", topic: "Vocabulary Development", objectives: "Synonyms, antonyms, and idiomatic expressions." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Letter Writing", objectives: "Formal and informal letters in the native language." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Folktales and Legends", objectives: "Exploring moral lessons embedded in traditional tales." },
            { week: "Week 9", topic: "Debate and Speech", objectives: "Articulating ideas and arguments in the native language." },
            { week: "Week 10", topic: "Current Affairs in the Language", objectives: "Discussing local issues using the native language." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Grammar: Advanced Syntax", objectives: "Complex sentence analysis." },
            { week: "Week 2", topic: "Literature: Prose", objectives: "Deep study of themes, plot, and settings in selected novels." },
            { week: "Week 3", topic: "Essay Writing: Argumentative", objectives: "Structured argumentative writing." },
            { week: "Week 4", topic: "Summary Skills", objectives: "Summarizing complex texts in the native language." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Poetry Recitation", objectives: "Performance and appreciation of traditional chants/poems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Report Writing", objectives: "Writing reports on school or community events." },
            { week: "Week 9", topic: "Oral Tradition", objectives: "Documenting traditional music and artistic expression." },
            { week: "Week 10", topic: "General Revision", objectives: "Consolidation of grammar, literature, and essay skills." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        }
      ]
    },
    {
      "title": "Government",
      "icon": "fa-gavel",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Pre-Colonial Administration I", "objectives": "Hausa/Fulani and Yoruba traditional political systems." },
            { "week": "Week 2", "topic": "Pre-Colonial Administration II", "objectives": "Igbo traditional political system and comparisons." },
            { "week": "Week 3", "topic": "Colonial Administration", "objectives": "Historical background, Indirect Rule in Nigeria." },
            { "week": "Week 4", "topic": "French Colonial Administration", "objectives": "Policy of Assimilation and Association in West Africa." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Nationalism in West Africa", "objectives": "Factors that led to nationalist movements and key figures." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Constitutional Development I", "objectives": "Clifford (1922) and Richards (1946) Constitutions." },
            { "week": "Week 9", "topic": "Constitutional Development II", "objectives": "Macpherson (1951) and Lyttleton (1954) Constitutions." },
            { "week": "Week 10", "topic": "Independence Constitution", "objectives": "Features, merits, and demerits of the 1960 Constitution." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Post-Independence Constitutions", "objectives": "Republican Constitution (1963) and 1979/1999 Constitutions." },
            { "week": "Week 2", "topic": "Military Rule in Nigeria", "objectives": "Causes, structure, and impact of military intervention." },
            { "week": "Week 3", "topic": "Conflict Resolution", "objectives": "Meaning, causes of conflicts, and resolution mechanisms." },
            { "week": "Week 4", "topic": "Public Service", "objectives": "Structure, functions, and shortcomings of the Public Service." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "NEPAD", "objectives": "New Partnership for Africa's Development: objectives and impact." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Millennium Development Goals", "objectives": "MDGs and Sustainable Development Goals (SDGs) in Nigeria." },
            { "week": "Week 9", "topic": "Foreign Policy Revsion", "objectives": "Nigeria's role in global and regional organizations." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Past questions on Basic Concepts and Political Systems." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Past questions on Constitutional Development." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Past questions on International Organizations." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "Geography",
      "icon": "fa-globe-africa",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Earth's Internal Processes", "objectives": "Vulcanicity, earthquakes, and their geographical effects." },
            { "week": "Week 2", "topic": "Earth's External Processes", "objectives": "Weathering, mass movement, and denudation." },
            { "week": "Week 3", "topic": "Action of Rivers", "objectives": "Stages of a river, erosion, transportation, and deposition." },
            { "week": "Week 4", "topic": "Action of Wind and Glaciers", "objectives": "Desert landforms and glaciated topographies." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Oceanography", "objectives": "Ocean currents, tides, and marine resources." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Climate and Vegetation", "objectives": "Global climatic regions and associated vegetation." },
            { "week": "Week 9", "topic": "Soils", "objectives": "Soil formation, profiles, types, and conservation." },
            { "week": "Week 10", "topic": "Map Reading Revision", "objectives": "Advanced map reading: intervisibility, drainage patterns." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Geographic Information System", "objectives": "Introduction to GIS and Remote Sensing." },
            { "week": "Week 2", "topic": "Economic Geography", "objectives": "Mining, manufacturing, and power resources globally." },
            { "week": "Week 3", "topic": "World Population", "objectives": "Growth, distribution, and demographic transition." },
            { "week": "Week 4", "topic": "Nigeria: Trade and Transportation", "objectives": "Domestic and international trade networks." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Environmental Challenges", "objectives": "Deforestation, pollution, and global warming." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Regional Geography of Africa I", "objectives": "Location, relief, drainage, and climate of Africa." },
            { "week": "Week 9", "topic": "Regional Geography of Africa II", "objectives": "Lumbering in Zaire, Gold mining in South Africa." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Physical geography map work and data interpretation." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Human and economic geography." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Regional geography of Nigeria and Africa." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "Commerce",
      "icon": "fa-shopping-cart",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Trade Associations", "objectives": "Chambers of Commerce, Trade Unions, and Employers Associations." },
            { "week": "Week 2", "topic": "Business Management I", "objectives": "Functions of management: planning, organizing, controlling." },
            { "week": "Week 3", "topic": "Business Management II", "objectives": "Organizational structure and delegation of authority." },
            { "week": "Week 4", "topic": "Privatization and Commercialization", "objectives": "Meaning, advantages, and disadvantages." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Nationalization and Indigenization", "objectives": "Reasons for nationalization and historical context." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Economic Groupings", "objectives": "ECOWAS, LCBC, Mano River Union: functions and problems." },
            { "week": "Week 9", "topic": "Capital Market", "objectives": "Functions of the capital market and primary/secondary markets." },
            { "week": "Week 10", "topic": "Introduction to Business Law", "objectives": "Law of agency, sales of goods act." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Credit", "objectives": "Meaning, bases of credit, and credit instruments." },
            { "week": "Week 2", "topic": "Consumer Credit", "objectives": "Hire purchase, deferred payment, and credit cards." },
            { "week": "Week 3", "topic": "Profit", "objectives": "Gross profit, net profit, mark-up, and margin." },
            { "week": "Week 4", "topic": "Turnover", "objectives": "Meaning, factors affecting turnover, and rate of turnover." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Business Environment", "objectives": "Internal and external factors affecting business." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Computer in Business", "objectives": "Application of computers in modern commerce." },
            { "week": "Week 9", "topic": "Revision: Home and Foreign Trade", "objectives": "Consolidation of SS1 and SS2 trade concepts." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Past questions on Business Units and Trade." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Past questions on Commercial Services (Banking, Insurance)." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Past questions on Management and Law." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "Financial Accounting",
      "icon": "fa-calculator",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Company Accounts: Issue of Shares", "objectives": "Issue at par, premium, and discount; calls in arrears/advance." },
            { "week": "Week 2", "topic": "Company Accounts: Capital Structure", "objectives": "Bonus issues, rights issues, and accounting treatments." },
            { "week": "Week 3", "topic": "Final Accounts of Companies II", "objectives": "Adjustments, provisions for tax, and dividends." },
            { "week": "Week 4", "topic": "Interpretation of Accounts", "objectives": "Profitability ratios, liquidity ratios, and investment ratios." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Public Sector Accounting", "objectives": "Sources of government revenue, capital, and recurrent expenditure." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Consignment Accounts Revision", "objectives": "Invoicing at cost and selling price." },
            { "week": "Week 9", "topic": "Joint Venture Revision", "objectives": "Memorandum joint venture accounts." },
            { "week": "Week 10", "topic": "Branch Accounts Revision", "objectives": "Preparation of branch and head office accounts." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Suspense Accounts", "objectives": "Correction of errors and preparation of suspense accounts." },
            { "week": "Week 2", "topic": "Bank Reconciliation", "objectives": "Adjusted cash book and reconciliation statements." },
            { "week": "Week 3", "topic": "Depreciation Revision", "objectives": "Advanced problems on disposal of assets." },
            { "week": "Week 4", "topic": "Incomplete Records Revision", "objectives": "Conversion to double entry." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Partnership Accounts Revision", "objectives": "Dissolution and piecemeal realization." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Non-Profit Organizations Revision", "objectives": "Complex adjustments for clubs and societies." },
            { "week": "Week 9", "topic": "Manufacturing Accounts Revision", "objectives": "Transfer pricing and unrealized profit." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Objective test techniques and principles." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Theory and computational past questions (Part 1)." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Theory and computational past questions (Part 2)." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "Christian Religious Studies",
      "icon": "fa-cross",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Fellowship in the Early Church", "objectives": "Communal living, Peter's speech on Pentecost." },
            { "week": "Week 2", "topic": "Opposition to the Gospel", "objectives": "Arrest of Peter and John, death of Stephen." },
            { "week": "Week 3", "topic": "Mission to the Gentiles", "objectives": "Peter's vision and the conversion of Cornelius." },
            { "week": "Week 4", "topic": "The Council of Jerusalem", "objectives": "Conflict over circumcision and the resolution." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Paul's Teachings on Love", "objectives": "1 Corinthians 13: the supremacy of love." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Justification by Faith", "objectives": "Paul's letters to the Romans and Galatians." },
            { "week": "Week 9", "topic": "Spiritual Gifts", "objectives": "Types of gifts, their purpose, and unity in the Church." },
            { "week": "Week 10", "topic": "Forgiveness", "objectives": "Paul's teaching in Philemon." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Civic Responsibilities", "objectives": "Obedience to lawful authority and payment of taxes." },
            { "week": "Week 2", "topic": "Dignity of Labor", "objectives": "Paul's teaching on work in Thessalonians." },
            { "week": "Week 3", "topic": "Family Relationships", "objectives": "Duties of husbands, wives, and children (Colossians/Ephesians)." },
            { "week": "Week 4", "topic": "The Second Coming", "objectives": "Signs of the end times and preparation." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Christian Persecution", "objectives": "Peter's message to suffering Christians." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Faith and Works", "objectives": "James' teachings on practical Christianity." },
            { "week": "Week 9", "topic": "Impartiality", "objectives": "Treating all people equally regardless of status." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Review of Old Testament themes (SS1/SS2)." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Review of the Synoptic Gospels." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Review of Acts and the Epistles." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "Islamic Religious Studies",
      "icon": "fa-mosque",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Study of Selected Surahs", "objectives": "Translation, commentary, and lessons from Surah Al-Hujurat." },
            { "week": "Week 2", "topic": "Study of Selected Hadith", "objectives": "Hadith on intention, brotherhood, and morality." },
            { "week": "Week 3", "topic": "Marriage in Islam (Nikah)", "objectives": "Conditions, importance, and rights of spouses." },
            { "week": "Week 4", "topic": "Divorce (Talaq)", "objectives": "Types of divorce, Iddah (waiting period), and reconciliation." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Inheritance (Mirath)", "objectives": "Basic principles and heirs in Islamic law." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Islamic Civilization", "objectives": "Contributions of early Muslims to science and medicine." },
            { "week": "Week 9", "topic": "Islam in West Africa", "objectives": "Impact of Islam on culture and education in West Africa." },
            { "week": "Week 10", "topic": "The Role of Women in Islam", "objectives": "Rights, education, and contributions of women." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Sufism (Tariqah)", "objectives": "Origin, beliefs, and major orders (Qadiriyyah, Tijaniyyah)." },
            { "week": "Week 2", "topic": "Islamic Political System", "objectives": "Concept of Shura (consultation) and leadership." },
            { "week": "Week 3", "topic": "Umayyad and Abbasid Caliphates", "objectives": "Historical overview and achievements." },
            { "week": "Week 4", "topic": "Moral Decadence in Society", "objectives": "Islamic approach to solving drug abuse, cultism, and corruption." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Islamic Economic System Revision", "objectives": "Halal businesses and poverty alleviation." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Articles of Faith Revision", "objectives": "In-depth review of Iman." },
            { "week": "Week 9", "topic": "Pillars of Islam Revision", "objectives": "Review of Salat, Zakat, Sawm, and Hajj." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and feedback." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Quran and Hadith studies." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Fiqh (Jurisprudence) and Islamic History." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Moral/Social teachings and contemporary issues." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    },
    {
      "title": "French",
      "icon": "fa-language",
      "terms": [
        {
          "termName": "First Term",
          "weeks": [
            { "week": "Week 1", "topic": "Grammar Revision: Tenses", "objectives": "Consolidation of Present, Past, Future, and Imperfect." },
            { "week": "Week 2", "topic": "Le Subjonctif", "objectives": "Advanced usage of the subjunctive mood in expressions of doubt/will." },
            { "week": "Week 3", "topic": "La Technologie", "objectives": "Vocabulary related to computing, internet, and AI." },
            { "week": "Week 4", "topic": "Les ProblÃ¨mes de SociÃ©tÃ©", "objectives": "Discussing unemployment, poverty, and crime." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "Discours Direct et Indirect", "objectives": "Reported speech formation and rules." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Lâ€™art et la Culture", "objectives": "Cinema, music, literature, and festivals." },
            { "week": "Week 9", "topic": "Expression Ã‰crite", "objectives": "Argumentative essays and formal letter writing." },
            { "week": "Week 10", "topic": "ComprÃ©hension Orale et Ã‰crite", "objectives": "Advanced reading texts and listening exercises." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "General revision and end of term evaluations." }
          ]
        },
        {
          "termName": "Second Term",
          "weeks": [
            { "week": "Week 1", "topic": "Francophone Africa", "objectives": "History, geography, and literature of Francophone nations." },
            { "week": "Week 2", "topic": "La Traduction", "objectives": "Techniques for translating passages from French to English and vice versa." },
            { "week": "Week 3", "topic": "Les Pronoms Relatifs", "objectives": "Mastery of qui, que, dont, oÃ¹, and compound relatives." },
            { "week": "Week 4", "topic": "PrÃ©paration Ã  l'Oral", "objectives": "Role-plays, debates, and picture description." },
            { "week": "Week 5", "topic": "Midterm Examination", "objectives": "Assessment covering Weeks 1-4." },
            { "week": "Week 6", "topic": "La Francophonie", "objectives": "The organization, its goals, and global presence." },
            { "week": "Week 7", "topic": "Midterm Break", "objectives": "National mid-term academic rest cycle." },
            { "week": "Week 8", "topic": "Writing Skills Revision", "objectives": "Summarizing texts and creative writing." },
            { "week": "Week 9", "topic": "Grammar Revision", "objectives": "Adjectives, adverbs, and prepositions." },
            { "week": "Week 10", "topic": "Mock Examination Preparation", "objectives": "Comprehensive review of SS1 to SS3 topics." },
            { "week": "Week 11-13", "topic": "Revision & Examinations", "objectives": "Mock Examinations and oral tests." }
          ]
        },
        {
          "termName": "Third Term",
          "weeks": [
            { "week": "Week 1", "topic": "Intensive WASSCE Revision I", "objectives": "Essay writing and comprehension passages." },
            { "week": "Week 2", "topic": "Intensive WASSCE Revision II", "objectives": "Grammar, translation, and vocabulary." },
            { "week": "Week 3", "topic": "Intensive WASSCE Revision III", "objectives": "Oral examination practice (Listening and Speaking)." },
            { "week": "Week 4-13", "topic": "WASSCE / NECO Examinations", "objectives": "Final national and regional certificate examinations." }
          ]
        }
      ]
    }
  ],

// =========================================================================
  // SENIOR SECONDARY SCHOOL YEAR 3 (SS 3) CURRICULUM DATA INDEX
  // =========================================================================
  sss3: [
    // -----------------------------------------------------------------
    // SUBJECT 1: ENGLISH LANGUAGE (SS 3)
    // -----------------------------------------------------------------
    {
      title: "English Language",
      icon: "fa-book-open",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Speech: Consonant Clusters", objectives: "Practicing complex consonant sounds in sentences; rising and falling tones." },
            { week: "Week 2", topic: "Vocabulary: Culture & Institutions", objectives: "Words associated with cultural ceremonies, development, and traditional institutions." },
            { week: "Week 3", topic: "Comprehension & Summary", objectives: "Extracting salient points; phrasing main ideas into concise, correct sentences." },
            { week: "Week 4", topic: "Grammar: Noun Phrases", objectives: "Functions of noun phrases as subjects and objects in complex sentences." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Continuous Writing: Expository", objectives: "Writing expository compositions reflecting current global and national issues." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Speech: Intonation Patterns", objectives: "More practice with intonation using WH-questions and polar questions." },
            { week: "Week 9", topic: "Grammar: Adjectival & Adverbial Clauses", objectives: "Identifying and using dependent clauses accurately." },
            { week: "Week 10", topic: "Letter Writing: Formal", objectives: "Writing letters of complaint, application, and requests to authorities." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Speech: Contrastive Stress", objectives: "Using emphatic stress to convey specific meanings in dialogue." },
            { week: "Week 2", topic: "Grammar: Lexis and Structure", objectives: "Intensive WAEC/JAMB lexis and structure drills; synonyms and antonyms." },
            { week: "Week 3", topic: "Continuous Writing: Argumentative", objectives: "Debate writing; structuring arguments and acknowledging counterclaims." },
            { week: "Week 4", topic: "Comprehension: Inferential Reading", objectives: "Reading between the lines; understanding author's mood, tone, and purpose." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Grammar: Concord (Subject-Verb Agreement)", objectives: "Rules of proximity, rules of majority, and complex subject-verb relations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Speech Writing", objectives: "Format of a formal speech/address for school or public functions." },
            { week: "Week 9", topic: "Summary Writing Techniques", objectives: "Practicing WAEC standard summary passages; avoiding preamble and examples." },
            { week: "Week 10", topic: "WAEC/JAMB Preparatory Drills", objectives: "Answering past questions on test of orals and essay writing." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Test of Orals, Lexis, and Structure past question breakdown." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Essay writing, Comprehension, and Summary review." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Final examination techniques and time management." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 2: GENERAL MATHEMATICS (SS 3)
    // -----------------------------------------------------------------
    {
      title: "General Mathematics",
      icon: "fa-calculator",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Matrices and Determinants", objectives: "Addition, subtraction, multiplication of matrices; determinants of 2x2 and 3x3 matrices." },
            { week: "Week 2", topic: "Inverse of Matrices", objectives: "Finding the inverse of 2x2 matrices; solving simultaneous equations using matrices." },
            { week: "Week 3", topic: "Arithmetic & Geometric Progressions", objectives: "Revision of AP and GP; advanced problem solving and real-life applications." },
            { week: "Week 4", topic: "Surds", objectives: "Conjugate of surds, rationalization, and solving equations involving surds." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Commercial Mathematics I", objectives: "Simple and compound interest, depreciation, and inflation calculations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Commercial Mathematics II", objectives: "Shares, dividends, bonds, and taxation (Income tax and VAT)." },
            { week: "Week 9", topic: "Longitude and Latitude I", objectives: "Identifying lines of longitude/latitude; calculating distances along great circles." },
            { week: "Week 10", topic: "Longitude and Latitude II", objectives: "Calculating distances along small circles; speed and time differences." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Coordinate Geometry", objectives: "Equation of a line, gradient, distance between points, parallel and perpendicular lines." },
            { week: "Week 2", topic: "Calculus: Differentiation", objectives: "Concept of limits, differentiation from first principles, power rule." },
            { week: "Week 3", topic: "Applications of Differentiation", objectives: "Rates of change, finding maximum and minimum points on a curve." },
            { week: "Week 4", topic: "Calculus: Integration", objectives: "Integration as reverse of differentiation; indefinite and definite integrals." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Applications of Integration", objectives: "Calculating the area under a curve using definite integrals." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Circle Geometry (Revision)", objectives: "Comprehensive review of circle theorems, chords, tangents, and cyclic quadrilaterals." },
            { week: "Week 9", topic: "Trigonometry (Revision)", objectives: "Sine and cosine rules, elevation, depression, and bearing." },
            { week: "Week 10", topic: "WAEC/JAMB Preparatory Drills", objectives: "Solving complex multi-topic WAEC theory questions." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Algebra, Number Bases, and Commercial Math past questions." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Geometry, Trigonometry, and Calculus past questions." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Statistics, Probability, and graph-reading techniques." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 3: DIGITAL TECHNOLOGIES (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Digital Technologies",
      icon: "fa-laptop-code",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Revision of SS2 Work", objectives: "Recap of programming, web development, and networking concepts." },
            { week: "Week 2", topic: "Computer Security (Advanced)", objectives: "Encryption, firewalls, intrusion detection, and digital signatures." },
            { week: "Week 3", topic: "System Development Life Cycle (SDLC)", objectives: "Analysis, design, implementation, testing, and evaluation." },
            { week: "Week 4", topic: "Software Engineering Principles", objectives: "Agile, Waterfall methodologies, and project documentation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Database Advanced Concepts", objectives: "Normalization (1NF, 2NF, 3NF), advanced SQL (JOIN, GROUP BY)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Web Programming (Advanced)", objectives: "Responsive design, interactivity (JS DOM), and web hosting." },
            { week: "Week 9", topic: "Python (Object-Oriented Programming)", objectives: "Classes, objects, methods, and inheritance in Python." },
            { week: "Week 10", topic: "ICT in National Security & Business", objectives: "Digital surveillance, cybercrime prevention, FinTech, e-commerce." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Emerging Tech: Blockchain & FinTech", objectives: "Cryptocurrency mechanisms, e-payment gateways, smart contracts." },
            { week: "Week 2", topic: "Mobile App Development (Advanced)", objectives: "Integration with databases, APIs, and publishing apps to stores." },
            { week: "Week 3", topic: "Artificial Intelligence (Machine Learning Intro)", objectives: "Data training, supervised vs unsupervised learning." },
            { week: "Week 4", topic: "Data Analytics Tools", objectives: "Using Excel, Python (pandas), or Power BI for data interpretation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "ICT Policy and Governance", objectives: "ICT policies in Nigeria, roles of NITDA and NCC." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Digital Transformation & Entrepreneurship", objectives: "E-government, smart cities; writing business plans for ICT startups." },
            { week: "Week 9", topic: "Capstone Project (Full Stack)", objectives: "Students create functional websites or apps for real-world issues." },
            { week: "Week 10", topic: "Project Defense & WAEC Prep", objectives: "Presenting projects and reviewing WAEC practical past questions." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WAEC/NECO Revision I", objectives: "Solving WAEC/NECO ICT objective and theory past papers." },
            { week: "Week 2", "topic": "Intensive WAEC/NECO Revision II", objectives: "Hands-on practice with spreadsheets, databases, and word processing tasks." },
            { week: "Week 3", "topic": "Intensive WAEC/NECO Revision III", objectives: "Review of programming, flowcharts, and HTML WAEC standards." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 4: SOLAR PV INSTALLATION & MAINTENANCE (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Solar PV Installation & Maintenance",
      icon: "fa-solar-panel",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Revision of SS1-SS2 Work", objectives: "Recap of PV components, sizing, and basic installation." },
            { week: "Week 2", topic: "Routine Maintenance of Solar PV Systems", objectives: "Cleaning panels, checking connections, and battery terminal care." },
            { week: "Week 3", topic: "Troubleshooting I", objectives: "Identifying common faults (low voltage, rapid battery drain)." },
            { week: "Week 4", topic: "Troubleshooting II", objectives: "Using multimeters and clamp meters for fault diagnosis." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Replacing Faulty Components", objectives: "Safe removal and replacement of inverters, charge controllers, or panels." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Advanced System Design Project", objectives: "Designing a comprehensive solar system for a rural health clinic or school." },
            { week: "Week 9", topic: "Project Presentation", objectives: "Presentation of student designs and electrical schematics." },
            { week: "Week 10", topic: "Health and Safety (HSE)", objectives: "Advanced HSE standards in roof mounting and electrical wiring." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Costing of Solar PV Installations", objectives: "Calculating components, labor, logistics, and overhead costs." },
            { week: "Week 2", topic: "Pricing Strategies & Quotations", objectives: "Drafting professional quotations and business proposals for clients." },
            { week: "Week 3", topic: "Record Keeping & Customer Service", objectives: "Maintaining warranties, service logs, and handling client complaints." },
            { week: "Week 4", topic: "Marketing Solar Products in Nigeria", objectives: "Strategies for selling solar solutions to residential and commercial users." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Funding Opportunities", objectives: "Accessing grants, loans, cooperatives, and government incentives." },
            { week: "Week 7", "topic": "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Practical Quotation Project", objectives: "Prepare a complete business quotation for a 5kVA solar installation." },
            { week: "Week 9", topic: "Business Strategy Exhibition", objectives: "Mini-exhibition: Students showcase solar PV business startup ideas." },
            { week: "Week 10", topic: "WAEC Trade Subject Practical Prep", objectives: "Reviewing WAEC electrical/solar practical requirements." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WAEC/NECO Revision I", objectives: "Mock WAEC/NECO solar PV practicals (wiring, connection, testing)." },
            { week: "Week 2", "topic": "Intensive WAEC/NECO Revision II", objectives: "Global career opportunities and future trends (bifacial panels, flexible PVs)." },
            { week: "Week 3", "topic": "Intensive WAEC/NECO Revision III", objectives: "Theory past question drills and final troubleshooting labs." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 5: BIOLOGY (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Biology",
      icon: "fa-dna",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Nervous Coordination (Revision)", objectives: "Central and peripheral nervous system, reflex arcs, conditional reflexes." },
            { week: "Week 2", topic: "Sense Organs", objectives: "Structure and functions of the eye and ear; defects and corrections." },
            { week: "Week 3", topic: "Reproductive System in Plants", objectives: "Structure of flowers, pollination, fertilization, and fruit formation." },
            { week: "Week 4", topic: "Reproductive System in Humans", objectives: "Male/female anatomy, fertilization, gestation, and birth." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Heredity and Genetics I", objectives: "Basic terms (genes, alleles, genotype); Mendel's First Law." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Heredity and Genetics II", objectives: "Mendel's Second Law, sex determination, sex-linked traits (color blindness)." },
            { week: "Week 9", topic: "Chromosomes and DNA", objectives: "Structure of DNA, replication, and the role of chromosomes in inheritance." },
            { week: "Week 10", topic: "Variation in Population", objectives: "Morphological and physiological variations; blood groups and fingerprints." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Evolution", objectives: "Theories of evolution (Lamarck, Darwin); evidence of evolution (fossils, comparative anatomy)." },
            { week: "Week 2", topic: "Adaptation", objectives: "Structural, physiological, and behavioral adaptations of organisms to their environments." },
            { week: "Week 3", topic: "Ecological Succession", objectives: "Primary and secondary succession; climax community." },
            { week: "Week 4", topic: "Overcrowding and Population", objectives: "Causes and effects of overcrowding; factors affecting population sizes." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Food Shortage", objectives: "Causes of food shortage, effects on population, and agricultural solutions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Conservation of Natural Resources", objectives: "Importance of preserving water, soil, wildlife, and forests; agencies involved." },
            { week: "Week 9", topic: "Biology Practical Prep I", objectives: "Drawing and labeling biological specimens, magnification calculations." },
            { week: "Week 10", topic: "Biology Practical Prep II", objectives: "Food tests, identifying bones of the mammalian skeleton, ecological instruments." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Theory past questions on physiology, anatomy, and genetics." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Theory past questions on ecology, evolution, and plant biology." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Final practical specimen review and labeling standards." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 6: CHEMISTRY (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Chemistry",
      icon: "fa-flask",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Quantitative Analysis (Volumetric)", objectives: "Acid-base titrations, calculation of molarity, mass concentration, and water of crystallization." },
            { week: "Week 2", topic: "Qualitative Analysis", objectives: "Test for cations (flame tests, NaOH, NH3 drops) and anions." },
            { week: "Week 3", topic: "Petroleum and Alternative Energy", objectives: "Refining of crude oil, knocking, octane number, and alternative fuels." },
            { week: "Week 4", topic: "Fats and Oils", objectives: "Sources, physical/chemical properties, saponification (soap making)." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Soaps and Detergents", objectives: "Preparation, cleansing action, differences, and environmental impact (eutrophication)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Giant Molecules (Polymers)", objectives: "Addition and condensation polymerization; natural (starch, proteins) and synthetic polymers." },
            { week: "Week 9", topic: "Carbohydrates", objectives: "Classification (mono-, di-, polysaccharides), properties, and tests for sugars." },
            { week: "Week 10", topic: "Proteins", objectives: "Structure, amino acids, peptide bonds, and properties." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Metals and their Compounds I", objectives: "General properties of metals; Extraction, properties, and uses of Iron." },
            { week: "Week 2", topic: "Metals and their Compounds II", objectives: "Extraction, properties, and uses of Aluminium and Copper; Alloys." },
            { week: "Week 3", topic: "Non-Metals: Sulphur", objectives: "Allotropes, extraction (Frasch process), compounds (SO2, H2SO4), and uses." },
            { week: "Week 4", topic: "Non-Metals: Nitrogen", objectives: "Preparation, properties, Ammonia (Haber process), Trioxonitrate(V) acid." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Non-Metals: Halogens", objectives: "Chlorine preparation, properties, and uses; hydrogen chloride." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Radioactivity (Revision)", objectives: "Alpha, beta, gamma rays; half-life calculations, nuclear fission/fusion." },
            { week: "Week 9", topic: "Chemistry Practical Prep I", objectives: "Titration drills, accuracy, and concordant values." },
            { week: "Week 10", topic: "Chemistry Practical Prep II", objectives: "Identifying unknown salts; writing balanced ionic equations for qualitative tests." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Physical Chemistry past questions (Gas laws, Stoichiometry, Electrolysis)." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Organic Chemistry and IUPAC nomenclature review." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Inorganic Chemistry and final practical test drills." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 7: PHYSICS (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Physics",
      icon: "fa-atom",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Electromagnetic Induction", objectives: "Faradayâ€™s laws, Lenzâ€™s law, induction coil, and mutual/self induction." },
            { week: "Week 2", topic: "Transformers & Generators", objectives: "Step-up/step-down transformers, AC and DC generators, power transmission." },
            { week: "Week 3", topic: "Alternating Current (A.C.) Circuits I", objectives: "Peak and RMS values, resistance, and capacitance in A.C. circuits." },
            { week: "Week 4", topic: "Alternating Current (A.C.) Circuits II", objectives: "Inductance, series RLC circuits, impedance, and resonance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Models of the Atom", objectives: "Thomson, Rutherford, and Bohr models; atomic spectra and energy levels." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Energy Quantization", objectives: "Planckâ€™s constant, photons, and thermionic emission." },
            { week: "Week 9", topic: "Photoelectric Effect", objectives: "Einsteinâ€™s equation, threshold frequency, work function, and applications." },
            { week: "Week 10", topic: "X-Rays", objectives: "Production, properties, types (hard and soft), and applications." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Radioactivity I", objectives: "Natural radioactivity, properties of alpha, beta, and gamma emissions." },
            { week: "Week 2", topic: "Radioactivity II", objectives: "Decay law, half-life calculations, artificial radioactivity, and isotopes." },
            { week: "Week 3", topic: "Nuclear Energy", objectives: "Nuclear fission, nuclear fusion, binding energy, and mass defect." },
            { week: "Week 4", topic: "Conduction of Electricity Through Gases", objectives: "Cathode rays, discharge tubes, J.J. Thomsonâ€™s experiment." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Semiconductors and Diodes", objectives: "P-type and N-type materials, doping, P-N junction diodes, and rectification." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Physics Practical Prep I", objectives: "Mechanics and Waves experiments; plotting graphs, slope, and intercept." },
            { week: "Week 9", topic: "Physics Practical Prep II", objectives: "Electricity and Optics experiments; handling errors and precautions." },
            { week: "Week 10", topic: "WAEC Theory Mechanics Revision", objectives: "Projectiles, circular motion, SHM, and equilibrium of forces." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Electricity, Magnetism, and modern physics theory past questions." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Heat, Light, and Sound theory past questions." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Final practical mock and examination strategy." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 8: CIVIC EDUCATION (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Civic Education",
      icon: "fa-landmark",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Characteristics of Human Rights", objectives: "Universality, inalienability, and indivisibility of human rights." },
            { week: "Week 2", topic: "Dangers of Political Apathy", objectives: "Effects of voter apathy on development, democracy, and governance." },
            { week: "Week 3", topic: "Fighting Political Apathy", objectives: "Ways to encourage popular participation in elections and governance." },
            { week: "Week 4", topic: "Public Service in a Democracy", objectives: "Meaning, functions, and characteristics of the public service." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Shortcomings of the Public Service", objectives: "Red tape, corruption, inefficiency, and ways to improve it (CCB, SERVICOM)." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Civil Society", objectives: "Meaning, examples (NLC, ASUU, NBA), and functions in a democracy." },
            { week: "Week 9", topic: "Popular Participation", objectives: "Reasons people do not participate in politics and how to promote it." },
            { week: "Week 10", topic: "Democracy and National Development", objectives: "How democratic practices promote rule of law and national development." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Constitutional Democracy", objectives: "Meaning, features, and advantages of constitutional democracy." },
            { week: "Week 2", topic: "Rule of Law vs Arbitrary Rule", objectives: "Supremacy of the law, equality before the law, and safeguarding rights." },
            { week: "Week 3", topic: "Dangers of Cultism", objectives: "Causes, consequences on the individual and society, preventive measures." },
            { week: "Week 4", topic: "Drug Abuse (Revision)", objectives: "Recap of consequences, NDLEA activities, and rehabilitation." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Human Trafficking (Revision)", objectives: "Causes, effects, roles of NAPTIP, and preventive strategies." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "National Values & Ethics", objectives: "Honesty, discipline, courage, and integrity in nation building." },
            { week: "Week 9", topic: "WAEC/JAMB Objective Drills", objectives: "Solving past objective questions on civic duties and governance." },
            { week: "Week 10", topic: "WAEC Essay Drills", objectives: "Techniques for answering theory questions on human rights and democracy." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Review of SS1 Topics (Values, Citizenship, HIV/AIDS)." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Review of SS2 Topics (Capitalist Democracy, Traffic Regs, Interpersonal relations)." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Review of SS3 Topics and final mock assessments." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },
    // -----------------------------------------------------------------
    // SUBJECT 9: ECONOMICS (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Economics",
      icon: "fa-chart-line",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "National Income Concepts", objectives: "GDP, GNP, NNP, NI; methods of measuring national income." },
            { week: "Week 2", topic: "Public Finance", objectives: "Government expenditure, taxation types, incidence of tax." },
            { week: "Week 3", topic: "Inflation and Deflation", objectives: "Causes, types, effects, and control of inflation." },
            { week: "Week 4", topic: "Financial Institutions I", objectives: "Central Bank: functions and tools of monetary control." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Financial Institutions II", objectives: "Commercial banks, merchant banks, and microfinance banks." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Economic Growth and Development", objectives: "Indicators, differences, and challenges of development in Nigeria." },
            { week: "Week 9", topic: "Money Market and Capital Market", objectives: "Instruments, stock exchange, and importance to the economy." },
            { week: "Week 10", topic: "Population and Labour", objectives: "Theories of population, population density, and labor force participation." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "International Trade I", objectives: "Terms of trade, balance of trade, balance of payments." },
            { week: "Week 2", topic: "International Trade II", objectives: "Protectionism, tariffs, quotas, and exchange rates." },
            { week: "Week 3", topic: "Economic Integration", objectives: "ECOWAS, OPEC, WTO; benefits and challenges of integration." },
            { week: "Week 4", topic: "Economic Development Planning", objectives: "Types of plans, problems of planning in developing countries." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Development Agencies", objectives: "Roles of IMF, World Bank, and African Development Bank." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "WAEC Objective Drills", objectives: "Solving past objective questions on theory of demand/supply and market structure." },
            { week: "Week 9", topic: "WAEC Theory Drills", objectives: "Solving past theory questions on national income and international trade." },
            { week: "Week 10", topic: "Final Exam Strategy", objectives: "Answering data response and graphical analysis questions." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Micro-economic concepts, demand, supply, and elasticities." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Macro-economic concepts, national income, and public finance." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "International trade, economic integration, and development planning." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 10: FURTHER MATHEMATICS (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Further Mathematics",
      icon: "fa-infinity",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Dynamics: Newtonâ€™s Laws", objectives: "Motion in a straight line, projectile motion, and forces in equilibrium." },
            { week: "Week 2", topic: "Vectors in Three Dimensions", objectives: "Dot product, cross product, and application to geometry." },
            { week: "Week 3", topic: "Differentiation of Trig Functions", objectives: "Derivatives of sin x, cos x, and tan x; chain and product rules." },
            { week: "Week 4", topic: "Applications of Differentiation", objectives: "Tangents, normals, rates of change, and optimization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Integration of Trig Functions", objectives: "Indefinite and definite integration of basic trigonometric functions." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Areas and Volumes", objectives: "Using integration to find area under curves and volume of revolution." },
            { week: "Week 9", topic: "Statistics I", objectives: "Mean, median, mode of grouped data, standard deviation, and variance." },
            { week: "Week 10", topic: "Statistics II", objectives: "Probability distributions, binomial and Poisson distributions." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Mechanics: Work, Energy, Power", objectives: "Kinetic and potential energy, conservation of energy, work done." },
            { week: "Week 2", topic: "Circular Motion", objectives: "Angular velocity, centripetal force, and banking of roads." },
            { week: "Week 3", topic: "Differential Equations", objectives: "Solving first-order separable differential equations." },
            { week: "Week 4", topic: "Numerical Methods", objectives: "Approximate roots of equations, Simpson's rule." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Coordinate Geometry (Conics)", objectives: "Parabola, ellipse, and hyperbola equations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Partial Fractions", objectives: "Decomposition into partial fractions and integration application." },
            { week: "Week 9", topic: "WAEC Theory Revision I", objectives: "Complex numbers, polynomials, and roots of equations." },
            { week: "Week 10", topic: "WAEC Theory Revision II", objectives: "Dynamics, statics, and trigonometry past questions." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Algebra and Pure Mathematics past papers." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Vectors, Mechanics, and Statistics past papers." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Calculus and final examination strategies." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 11: AGRICULTURAL SCIENCE (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Agricultural Science",
      icon: "fa-leaf",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Agricultural Economics", objectives: "Farm management, record keeping, and agricultural finance." },
            { week: "Week 2", topic: "Agricultural Extension", objectives: "Methods of extension, role of extension agents in Nigeria." },
            { week: "Week 3", topic: "Animal Health and Management", objectives: "Causes of diseases, parasites, and control measures." },
            { week: "Week 4", topic: "Crop Improvement", objectives: "Principles of genetics in agriculture, hybridization, selection." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Pasture and Forage Management", objectives: "Types of pasture, establishment, and utilization." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Ornamental Plants", objectives: "Floriculture, maintenance of lawns, and landscaping." },
            { week: "Week 9", topic: "Forestry", objectives: "Importance of forests, forest management, and conservation." },
            { week: "Week 10", topic: "Wildlife Conservation", objectives: "Wildlife management, game reserves, and national parks." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Soil Management (Advanced)", objectives: "Soil fertility, conservation, and erosion control." },
            { week: "Week 2", topic: "Fishery Management", objectives: "Aquaculture, fish farming systems, and processing." },
            { week: "Week 3", topic: "Agricultural Laws and Reforms", objectives: "Land tenure systems, government policies (e.g., Operation Feed the Nation)." },
            { week: "Week 4", topic: "Farm Power and Machinery", objectives: "Tractors, tillage equipment, and maintenance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Marketing of Agricultural Produce", objectives: "Channels of distribution, storage, and processing." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Agro-Allied Industries", objectives: "Processing raw materials into finished goods." },
            { week: "Week 9", topic: "WAEC Practical Preparation I", objectives: "Specimen identification, soil samples, and tools." },
            { week: "Week 10", topic: "WAEC Theory Revision", objectives: "Crop production, animal science, and agricultural economics." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Crop and Soil Science past questions." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Animal production and health past questions." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Economics and practical specimen review." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 12: LITERATURE-IN-ENGLISH (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Literature-in-English",
      icon: "fa-feather-alt",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Analysis of African Prose", objectives: "Characterization, themes, and stylistic devices in the set African novel." },
            { week: "Week 2", topic: "Analysis of Non-African Prose", objectives: "Comparative analysis of themes in the set non-African novel." },
            { week: "Week 3", topic: "African Drama", objectives: "Conflict, plot development, and stage craft in set African play." },
            { week: "Week 4", topic: "Non-African Drama", objectives: "Symbolism and dramatic devices in set non-African play." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "African Poetry I", objectives: "Analysis of African poems; tone, imagery, and poetic devices." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "African Poetry II", objectives: "Thematic comparison across different African poets." },
            { week: "Week 9", topic: "Non-African Poetry", objectives: "Analysis of set non-African poems; appreciation and critique." },
            { week: "Week 10", topic: "Literary Terms", objectives: "Review of figures of speech, verse forms, and narrative techniques." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Unseen Prose", objectives: "Skills for answering questions on unseen prose passages." },
            { week: "Week 2", topic: "Unseen Poetry", objectives: "Techniques for appreciating and interpreting unknown poems." },
            { week: "Week 3", topic: "Synthesis of Set Books", objectives: "Connecting themes across all three genres (Prose, Drama, Poetry)." },
            { week: "Week 4", topic: "Essay Writing in Literature", objectives: "Structuring critical essays; thesis statements, evidence, and conclusion." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Character Analysis Workshops", objectives: "Deep dives into major characters of set texts." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "WAEC Past Questions: Theory", objectives: "Drafting responses to typical WAEC/NECO essay questions." },
            { week: "Week 9", topic: "Objective Question Drills", objectives: "Literary theory and history of literature objective tests." },
            { week: "Week 10", topic: "Examinerâ€™s Expectations", objectives: "Reviewing marking schemes and common pitfalls in literature exams." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Deep review of African texts." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Deep review of Non-African texts." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Poetry and unseen passage practice." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 13: FINANCIAL ACCOUNTING (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Financial Accounting",
      icon: "fa-file-invoice-dollar",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Company Accounts I", objectives: "Issue of shares, types of shares, and share capital." },
            { week: "Week 2", topic: "Company Accounts II", objectives: "Debentures, preparation of profit and loss appropriation accounts." },
            { week: "Week 3", topic: "Partnership Accounts", objectives: "Dissolution of partnership, admission of new partners." },
            { week: "Week 4", topic: "Manufacturing Accounts", objectives: "Costing of goods, prime cost, factory overheads, and production account." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Departmental Accounts", objectives: "Allocation of expenses and preparation of departmental trading accounts." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Branch Accounts", objectives: "Head office and branch relationship; accounting for branch transactions." },
            { week: "Week 9", topic: "Accounting for Non-Profit Org.", objectives: "Receipts and payments account, income and expenditure account." },
            { week: "Week 10", topic: "Public Sector Accounting", objectives: "Government accounting concepts and budgetary processes." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Control Accounts", objectives: "Sales and purchases ledger control accounts." },
            { week: "Week 2", topic: "Correction of Errors", objectives: "Suspense accounts, journal entries, and errors not affecting the trial balance." },
            { week: "Week 3", topic: "Incomplete Records", objectives: "Deriving profit from incomplete information; single entry systems." },
            { week: "Week 4", topic: "Investment Accounts", objectives: "Accounting for stocks, shares, and bonds." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Valuation of Assets", objectives: "Methods of depreciation and stock valuation." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Interpretation of Financial Statements", objectives: "Ratio analysis (Liquidity, profitability, efficiency)." },
            { week: "Week 9", topic: "WAEC Theory Practice", objectives: "Comprehensive past question drills on final accounts." },
            { week: "Week 10", topic: "WAEC Objective Practice", objectives: "Speed drills for theory and computation objective questions." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Financial reporting and company accounts." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Partnership, branch, and manufacturing accounts." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Cost accounting and final ratio analysis." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },
    // -----------------------------------------------------------------
    // SUBJECT 14: GOVERNMENT (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Government",
      icon: "fa-gavel",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Constitution", objectives: "Types, features, and importance of constitutions." },
            { week: "Week 2", topic: "Democracy", objectives: "Types, features, and democratic processes." },
            { week: "Week 3", topic: "Political Parties", objectives: "Functions, types, and the party system in Nigeria." },
            { week: "Week 4", topic: "Electoral Commission (INEC)", objectives: "Roles, duties, and challenges of INEC in Nigeria." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Pressure Groups", objectives: "Functions, methods, and impact on government." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Public Opinion", objectives: "Formation, expression, and importance in democracy." },
            { week: "Week 9", topic: "Capitalism and Socialism", objectives: "Features, merits, and demerits of these ideologies." },
            { week: "Week 10", topic: "Fascism and Communalism", objectives: "Defining features and historical significance." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Public Administration", objectives: "Meaning, structure, and functions." },
            { week: "Week 2", topic: "Civil Service", objectives: "Structure, functions, and the role of the Civil Service Commission." },
            { week: "Week 3", topic: "Foreign Policy", objectives: "Determinants and objectives of Nigeria's foreign policy." },
            { week: "Week 4", topic: "International Organizations I", objectives: "The United Nations (UN) and its specialized agencies." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "International Organizations II", objectives: "AU, ECOWAS, and the Commonwealth of Nations." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Political Heritage of Nigeria", objectives: "Pre-colonial, colonial, and post-colonial governance." },
            { week: "Week 9", topic: "WAEC Theory Drills", objectives: "Past question analysis on rights, democracy, and foreign policy." },
            { week: "Week 10", topic: "WAEC Objective Practice", objectives: "Speed drills for objective theory and governance terminology." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Government ideologies and constitution review." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Nigeria's political history and foreign policy." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "International organizations and past question marathon." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------
    // SUBJECT 15: GEOGRAPHY (SS 3)
    // -----------------------------------------------------------------
    {
      title: "Geography",
      icon: "fa-globe-africa",
      terms: [
        {
          termName: "First Term",
          weeks: [
            { week: "Week 1", topic: "Map Reading I (Relief)", objectives: "Identification of relief features, slopes, and cross-sections." },
            { week: "Week 2", topic: "Map Reading II", objectives: "Drawing cross-sections and calculating gradients." },
            { week: "Week 3", topic: "Settlement", objectives: "Types, factors affecting growth, and functions of settlements." },
            { week: "Week 4", topic: "Transport", objectives: "Modes of transport (road, rail, water, air) and their importance." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Manufacturing Industries", objectives: "Factors affecting location, importance, and problems." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "World Population", objectives: "Patterns, density, and migration factors." },
            { week: "Week 9", topic: "Tourism", objectives: "Development, importance, and challenges in Nigeria/Africa." },
            { week: "Week 10", topic: "International Trade", objectives: "Major commodities, trading blocs, and global trade patterns." },
            { week: "Week 11-13", topic: "Revision & Examinations", objectives: "General revision and end of term evaluations." }
          ]
        },
        {
          termName: "Second Term",
          weeks: [
            { week: "Week 1", topic: "Environmental Problems", objectives: "Pollution (air, water, land), global warming, and desertification." },
            { week: "Week 2", topic: "Renewable/Non-Renewable Resources", objectives: "Management and conservation strategies." },
            { week: "Week 3", topic: "Regional Geography: Nigeria I", objectives: "Physical setting, climate, and vegetation." },
            { week: "Week 4", topic: "Regional Geography: Nigeria II", objectives: "Economic activities: agriculture, mining, and industrialization." },
            { week: "Week 5", topic: "Midterm Examination", objectives: "Assessment covering Weeks 1-4." },
            { week: "Week 6", topic: "Map Work Revision", objectives: "Intensive practice on map interpretation and scale calculation." },
            { week: "Week 7", topic: "Midterm Break", objectives: "National mid-term academic rest cycle." },
            { week: "Week 8", topic: "Statistical Methods", objectives: "Representing data using bar charts, pie charts, and dots." },
            { week: "Week 9", topic: "WAEC Practical Prep", objectives: "Field work methods and survey techniques." },
            { week: "Week 10", topic: "WAEC Theory Revision", objectives: "Physical and human geography past question drills." },
            { week: "Week 11-13", topic: "Mock Examinations", objectives: "Comprehensive Mock WASSCE / NECO testing." }
          ]
        },
        {
          termName: "Third Term",
          weeks: [
            { week: "Week 1", topic: "Intensive WASSCE Revision I", objectives: "Physical geography (landforms, climate, vegetation)." },
            { week: "Week 2", "topic": "Intensive WASSCE Revision II", objectives: "Human geography (settlement, transport, trade)." },
            { week: "Week 3", "topic": "Intensive WASSCE Revision III", objectives: "Map reading and statistical calculation marathon." },
            { week: "Week 4-13", topic: "WASSCE / NECO EXAMINATIONS", objectives: "Students sit for final national and regional certificate examinations." }
          ]
        }
      ]
    }
  ]
};

const BOOTCAMP_CONFIG = {
  apiProxyUrl: "/api/portal",
  pricePerSubject: 2500,
  currency: "NGN",
  termStartDate: "2026-07-04",
  releaseIntervalDays: 7
};

(function () {
  "use strict";

  const classMeta = [
    { id: "jss1", name: "JSS1", exam: "Foundation", aliases: ["jss1", "js1"] },
    { id: "jss2", name: "JSS2", exam: "Foundation", aliases: ["jss2", "js2"] },
    { id: "jss3", name: "JSS3", exam: "BECE", aliases: ["jss3", "js3"] },
    { id: "sss1", name: "SS1", exam: "Senior Secondary Foundation", aliases: ["sss1", "ss1", "s1"] },
    { id: "sss2", name: "SS2", exam: "WAEC / NECO Preparation", aliases: ["sss2", "ss2", "s2"] },
    { id: "sss3", name: "SS3", exam: "WAEC / NECO / JAMB / NABTEB", aliases: ["sss3", "ss3", "s3"] }
  ];

  const iconFallbacks = {
    "Mathematics": "ðŸ§®",
    "General Mathematics": "ðŸ§®",
    "English Studies": "ðŸ“˜",
    "English Language": "ðŸ“˜",
    "Digital Technologies": "ðŸ’»",
    "Computer Studies": "ðŸ’»",
    "Physics": "âš›",
    "Chemistry": "âš—",
    "Biology": "ðŸ§¬",
    "Agricultural Science": "ðŸŒ±",
    "Economics": "ðŸ“ˆ",
    "Government": "ðŸ›",
    "Geography": "ðŸŒ",
    "Literature-in-English": "âœ’",
    "Financial Accounting": "ðŸ§¾",
    "Commerce": "ðŸ’¼"
  };

  function slug(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function titleCaseId(value) {
    return slug(value).replace(/-/g, " ");
  }

  function subjectIcon(subject) {
    return iconFallbacks[subject.title] || iconFallbacks[subject.shortTitle] || "ðŸ“š";
  }

  function weekNumber(raw) {
    const match = String(raw || "").match(/\d+/);
    return match ? parseInt(match[0], 10) : 1;
  }

  function objectiveList(value) {
    if (Array.isArray(value)) return value.filter(Boolean).map(String);
    if (!value) return [];
    return String(value)
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?b>/gi, "")
      .split(/\n|;|\.\s+(?=[A-Z0-9])/)
      .map(item => item.replace(/\.$/, "").trim())
      .filter(Boolean);
  }

  function cleanText(value) {
    return String(value || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?b>/gi, "**")
      .trim();
  }

  function normalizeWeek(week) {
    const num = weekNumber(week.week);
    const objectives = objectiveList(week.objectives);
    const notes = [
      "## " + (week.topic || "Weekly Lesson"),
      "",
      cleanText(week.objectives || "Lesson content will be supplied by the academic team."),
      "",
      "### Study Task",
      "- Read the topic summary carefully.",
      "- Write short notes on the key ideas.",
      "- Attempt the practice questions for this subject."
    ].join("\n");

    return {
      week: num,
      label: String(week.week || "Week " + num),
      topic: week.topic || "Weekly Lesson",
      objectives,
      notes
    };
  }

  function normalizeSubject(classId, subject) {
    const firstTerm = (subject.terms || []).find(term => /first/i.test(term.termName || "")) || (subject.terms || [])[0] || { weeks: [] };
    const id = slug(subject.title);
    return {
      id,
      classId,
      title: subject.title,
      shortTitle: subject.title
        .replace("Christian Religious Studies", "CRS")
        .replace("Islamic Religious Studies", "IRS")
        .replace("Physical & Health Education", "PHE")
        .replace("Literature-in-English", "Literature"),
      icon: subjectIcon(subject),
      terms: subject.terms || [],
      weeks: (firstTerm.weeks || []).map(normalizeWeek)
    };
  }

  function normalizeClassId(classId) {
    const key = String(classId || "").toLowerCase().replace(/\s+/g, "");
    const found = classMeta.find(item => item.aliases.includes(key));
    return found ? found.id : key;
  }

  const classes = classMeta.filter(item => Array.isArray(curriculumData[item.id]));
  const subjectsByClass = {};
  const subjectsById = {};

  classes.forEach(cls => {
    subjectsByClass[cls.id] = (curriculumData[cls.id] || []).filter(Boolean).map(subject => normalizeSubject(cls.id, subject));
    subjectsByClass[cls.id].forEach(subject => {
      if (!subjectsById[subject.id]) subjectsById[subject.id] = subject;
    });
  });

  const subjects = Object.values(subjectsById).sort((a, b) => a.title.localeCompare(b.title));

  const officialSubjectDefinitions = [
    { id: "english-studies", title: "English Studies", shortTitle: "English", icon: "ðŸ“˜", sourceAliases: ["english-studies"] },
    { id: "mathematics", title: "Mathematics", shortTitle: "Mathematics", icon: "ðŸ§®", sourceAliases: ["mathematics"] },
    { id: "digital-technologies", title: "Digital Technologies", shortTitle: "Digital Tech", icon: "ðŸ’»", sourceAliases: ["digital-technologies", "computer-studies", "data-processing"] },
    { id: "basic-science", title: "Basic Science", shortTitle: "Basic Science", icon: "ðŸ”¬", sourceAliases: ["basic-science"] },
    { id: "physical-health-education", title: "Physical & Health Education", shortTitle: "PHE", icon: "ðŸƒ", sourceAliases: ["physical-and-health-education", "physical-health-education", "health-education"] },
    { id: "social-citizenship-studies", title: "Social & Citizenship Studies", shortTitle: "Social Studies", icon: "ðŸ¤", sourceAliases: ["social-and-citizenship-studies", "social-citizenship-studies", "social-studies"] },
    { id: "business-studies", title: "Business Studies", shortTitle: "Business", icon: "ðŸ’¼", sourceAliases: ["business-studies"] },
    { id: "cultural-creative-arts", title: "Cultural & Creative Arts", shortTitle: "CCA", icon: "ðŸŽ¨", sourceAliases: ["cultural-and-creative-arts", "cultural-creative-arts"] },
    { id: "nigerian-history", title: "Nigerian History", shortTitle: "History", icon: "ðŸ“œ", sourceAliases: ["nigerian-history", "history"] },
    { id: "christian-religious-studies", title: "Christian Religious Studies", shortTitle: "CRS", icon: "âœï¸", sourceAliases: ["christian-religious-studies", "crs", "religious-studies-crs-irs", "religious-studies"] },
    { id: "islamic-studies", title: "Islamic Studies", shortTitle: "IRS", icon: "â˜ªï¸", sourceAliases: ["islamic-studies", "islamic-religious-studies", "irs", "religious-studies-crs-irs", "religious-studies"] },
    { id: "french", title: "French", shortTitle: "French", icon: "ðŸ—£ï¸", sourceAliases: ["french"] },
    { id: "english-language", title: "English Language", shortTitle: "English", icon: "ðŸ“˜", sourceAliases: ["english-language"] },
    { id: "general-mathematics", title: "General Mathematics", shortTitle: "Mathematics", icon: "ðŸ§®", sourceAliases: ["general-mathematics"] },
    { id: "solar-photovoltaic-installation-and-maintenance", title: "Solar Photovoltaic Installation and Maintenance", shortTitle: "Solar PV", icon: "â˜€ï¸", sourceAliases: ["solar-photovoltaic-installation-and-maintenance", "solar-pv-installation-and-maintenance", "solar-pv-installation-maintenance", "electrical-wiring-installation", "electrical-installation-maintenance-work"] },
    { id: "citizenship-and-heritage-studies", title: "Citizenship and Heritage Studies", shortTitle: "Citizenship", icon: "ðŸ›ï¸", sourceAliases: ["citizenship-and-heritage-studies", "citizenship-heritage-studies"] },
    { id: "biology", title: "Biology", shortTitle: "Biology", icon: "ðŸ§¬", sourceAliases: ["biology"] },
    { id: "chemistry", title: "Chemistry", shortTitle: "Chemistry", icon: "âš—ï¸", sourceAliases: ["chemistry"] },
    { id: "physics", title: "Physics", shortTitle: "Physics", icon: "âš›ï¸", sourceAliases: ["physics"] },
    { id: "agriculture", title: "Agriculture", shortTitle: "Agriculture", icon: "ðŸŒ±", sourceAliases: ["agriculture", "agricultural-science", "animal-husbandry"] },
    { id: "further-mathematics", title: "Further Mathematics", shortTitle: "Further Maths", icon: "ðŸ§®", sourceAliases: ["further-mathematics"] },
    { id: "health-education", title: "Health Education", shortTitle: "Health", icon: "ðŸ©º", sourceAliases: ["health-education", "physical-health-education", "physical-and-health-education"] },
    { id: "geography", title: "Geography", shortTitle: "Geography", icon: "ðŸŒ", sourceAliases: ["geography"] },
    { id: "technical-drawing", title: "Technical Drawing", shortTitle: "Tech Drawing", icon: "ðŸ“", sourceAliases: ["technical-drawing"] },
    { id: "government", title: "Government", shortTitle: "Government", icon: "ðŸ›ï¸", sourceAliases: ["government"] },
    { id: "literature-in-english", title: "Literature in English", shortTitle: "Literature", icon: "âœ’ï¸", sourceAliases: ["literature-in-english", "literature"] },
    { id: "accounting", title: "Accounting", shortTitle: "Accounting", icon: "ðŸ§¾", sourceAliases: ["accounting", "financial-accounting", "bookkeeping"] },
    { id: "commerce", title: "Commerce", shortTitle: "Commerce", icon: "ðŸ’¼", sourceAliases: ["commerce"] },
    { id: "marketing", title: "Marketing", shortTitle: "Marketing", icon: "ðŸ“£", sourceAliases: ["marketing"] },
    { id: "economics", title: "Economics", shortTitle: "Economics", icon: "ðŸ“ˆ", sourceAliases: ["economics"] },
    { id: "civic-education", title: "Civic Education", shortTitle: "Civic", icon: "ðŸ›ï¸", sourceAliases: ["civic-education"] }
  ];

  const officialDefsById = {};
  const officialAliasToId = {
    "computer-studies": "digital-technologies",
    "data-processing": "digital-technologies",
    "solar-pv-installation-and-maintenance": "solar-photovoltaic-installation-and-maintenance",
    "solar-pv-installation-maintenance": "solar-photovoltaic-installation-and-maintenance",
    "electrical-wiring-installation": "solar-photovoltaic-installation-and-maintenance",
    "electrical-installation-maintenance-work": "solar-photovoltaic-installation-and-maintenance",
    "agricultural-science": "agriculture",
    "financial-accounting": "accounting",
    "physical-and-health-education": "physical-health-education"
  };

  officialSubjectDefinitions.forEach(def => {
    officialDefsById[def.id] = def;
    officialAliasToId[slug(def.id)] = def.id;
    officialAliasToId[slug(def.title)] = def.id;
  });

  function canonicalSubjectId(value) {
    const key = slug(value);
    return officialAliasToId[key] || key;
  }

  const juniorNerdcSubjectIds = [
    "english-studies", "mathematics", "digital-technologies", "basic-science",
    "physical-health-education", "social-citizenship-studies", "business-studies",
    "cultural-creative-arts", "nigerian-history", "christian-religious-studies",
    "islamic-studies", "french"
  ];

  const seniorNerdcSubjectIds = [
    "english-language", "general-mathematics", "solar-photovoltaic-installation-and-maintenance",
    "citizenship-and-heritage-studies", "digital-technologies", "biology", "chemistry", "physics",
    "agriculture", "further-mathematics", "health-education", "geography", "technical-drawing",
    "government", "christian-religious-studies", "literature-in-english", "nigerian-history",
    "accounting", "commerce", "marketing", "economics"
  ];

  const ss3ExamSubjectIds = [
    "english-language", "general-mathematics", "civic-education", "digital-technologies",
    "solar-photovoltaic-installation-and-maintenance", "biology", "chemistry", "physics", "agriculture",
    "further-mathematics", "health-education", "geography", "technical-drawing", "nigerian-history",
    "government", "christian-religious-studies", "literature-in-english", "accounting", "commerce",
    "marketing", "economics"
  ];

  const officialClassPlan = {
    jss1: juniorNerdcSubjectIds,
    jss2: juniorNerdcSubjectIds,
    jss3: juniorNerdcSubjectIds,
    sss1: seniorNerdcSubjectIds,
    sss2: seniorNerdcSubjectIds,
    sss3: ss3ExamSubjectIds
  };

  const classFallbackOrder = {
    jss1: ["jss1", "jss2", "jss3"],
    jss2: ["jss2", "jss1", "jss3"],
    jss3: ["jss3", "jss2", "jss1"],
    sss1: ["sss1", "sss2", "sss3"],
    sss2: ["sss2", "sss1", "sss3"],
    sss3: ["sss3", "sss2", "sss1"]
  };

  const rawSubjectsByClass = {};
  classes.forEach(cls => {
    rawSubjectsByClass[cls.id] = (subjectsByClass[cls.id] || []).slice();
  });

  function generatedSubjectWeeks(classId, def) {
    const cls = classMeta.find(item => item.id === classId) || { name: classId };
    return [
      [1, "Orientation to " + def.title, "Explain the scope of " + def.title + " for " + cls.name + " and set first-term learning targets."],
      [2, "Core Concepts and Vocabulary", "Build the terms, symbols, tools, and ideas needed for confident learning."],
      [3, "NERDC 2025 Skill Focus", "Connect the subject to practical competence, citizenship, enterprise, technology, and problem solving."],
      [4, "Guided Practice", "Work through teacher-led examples and class activities using ChiaTech notes."],
      [5, "Midterm Assessment", "Check understanding from Weeks 1 to 4 with short written and CBT-style questions."],
      [6, "Applied Learning Project", "Use the subject to solve a school, home, community, or exam-readiness task."],
      [7, "Midterm Break", "Review notebooks, revise weak areas, and complete catch-up assignments."],
      [8, "Extended Concepts", "Develop higher-order understanding through examples, diagrams, readings, and demonstrations."],
      [9, "Exam and CBT Practice", "Practise objective, short-answer, and structured questions with feedback."],
      [10, "Integrated Revision", "Revise the full first-term sequence and link topics across the curriculum."],
      [11, "Project Presentation", "Present learning evidence through notes, calculations, designs, reports, or oral explanation."],
      [12, "End-of-Term Revision", "Review likely examination areas and correct common mistakes."],
      [13, "First Term Examination", "Complete final assessment and prepare an improvement plan for next term."]
    ].map(item => ({ week: "Week " + item[0], topic: item[1], objectives: item[2] }));
  }

  function sourceSubjectFor(classId, def) {
    const sourceIds = (def.sourceAliases || [def.id]).map(slug);
    const order = classFallbackOrder[classId] || [classId];
    for (const sourceClass of order) {
      const source = (rawSubjectsByClass[sourceClass] || []).find(subject =>
        sourceIds.includes(slug(subject.id)) || sourceIds.includes(slug(subject.title)) || sourceIds.includes(slug(subject.shortTitle))
      );
      if (source) return source;
    }
    return null;
  }

  function officialSubjectFor(classId, defId) {
    const def = officialDefsById[defId];
    const source = sourceSubjectFor(classId, def);
    if (source) {
      return Object.assign({}, source, {
        id: def.id,
        classId,
        title: def.title,
        shortTitle: def.shortTitle,
        icon: def.icon,
        sourceTitle: source.title
      });
    }

    const sourceWeeks = generatedSubjectWeeks(classId, def);
    return {
      id: def.id,
      classId,
      title: def.title,
      shortTitle: def.shortTitle,
      icon: def.icon,
      terms: [{ termName: "First Term", weeks: sourceWeeks }],
      weeks: sourceWeeks.map(normalizeWeek),
      sourceTitle: "ChiaTech generated scheme"
    };
  }

  classes.forEach(cls => {
    subjectsByClass[cls.id] = (officialClassPlan[cls.id] || []).map(defId => officialSubjectFor(cls.id, defId));
  });

  Object.keys(subjectsById).forEach(key => delete subjectsById[key]);
  const uniqueOfficialSubjects = [];
  const seenOfficialSubjects = {};
  classes.forEach(cls => {
    subjectsByClass[cls.id].forEach(subject => {
      const def = officialDefsById[subject.id];
      subjectsById[subject.id] = subject;
      (def.sourceAliases || []).forEach(alias => { subjectsById[slug(alias)] = subject; });
      if (!seenOfficialSubjects[subject.id]) {
        seenOfficialSubjects[subject.id] = true;
        uniqueOfficialSubjects.push(subject);
      }
    });
  });
  subjects.splice(0, subjects.length, ...uniqueOfficialSubjects.sort((a, b) => a.title.localeCompare(b.title)));


  function getClassById(classId) {
    const key = normalizeClassId(classId);
    return classes.find(item => item.id === key) || null;
  }

  function getSubjectsForClass(classId) {
    return subjectsByClass[normalizeClassId(classId)] || [];
  }

  function getSubjectById(subjectId) {
    const key = canonicalSubjectId(subjectId);
    return subjectsById[key] || subjects.find(subject => subject.id === key || slug(subject.title) === key || subject.title.toLowerCase() === String(subjectId || "").toLowerCase()) || null;
  }

  function getCurriculumForClass(classId, subjectId) {
    const normalizedClassId = normalizeClassId(classId);
    const normalizedSubjectId = canonicalSubjectId(subjectId);
    const subject = getSubjectsForClass(normalizedClassId).find(item => item.id === normalizedSubjectId);
    return subject ? { classId: normalizedClassId, subjectId: subject.id, weeks: subject.weeks } : null;
  }

  function getWeekReleaseDate(week) {
    const date = new Date(BOOTCAMP_CONFIG.termStartDate + "T00:00:00");
    const offset = Math.max(0, weekNumber(week) - 1) * BOOTCAMP_CONFIG.releaseIntervalDays;
    date.setDate(date.getDate() + offset);
    return date;
  }

  function isWeekUnlocked(week) {
    return new Date() >= getWeekReleaseDate(week);
  }

  function getQuestionsForSubjectAndClass(subjectId, classId) {
    const data = getCurriculumForClass(classId, subjectId);
    if (!data || !data.weeks.length) return [];
    return data.weeks.map((week, index) => ({
      id: [classId, subjectId, week.week, index].join("-"),
      stem: "Which topic is scheduled for Week " + week.week + " in this subject?",
      options: [
        week.topic,
        data.weeks[(index + 1) % data.weeks.length].topic,
        "End of term examinations",
        "Midterm break"
      ],
      answerIndex: 0,
      explanation: "Week " + week.week + " focuses on " + week.topic + "."
    }));
  }

  window.BOOTCAMP_CONFIG = BOOTCAMP_CONFIG;
  window.curriculumData = curriculumData;
  window.CURRICULUM = {
    raw: curriculumData,
    classes,
    subjects,
    getClassById,
    normalizeClassId,
    getSubjectsForClass,
    getSubjectById,
    canonicalSubjectId,
    getCurriculumForClass,
    getWeekReleaseDate,
    isWeekUnlocked,
    getQuestionsForSubjectAndClass,
    titleCaseId
  };
})();
