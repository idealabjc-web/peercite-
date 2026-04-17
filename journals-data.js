/* =====================================================
   PEERCITE - JOURNALS DATA
   All 24 journals with unique content
   ===================================================== */

const JOURNALS_DATA = {

    'mental-health': {
        id: 'mental-health',
        title: 'PeerCite Journal of Mental Health',
        shortTitle: 'Mental Health',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop',
        description: 'A premier open-access journal publishing peer-reviewed research on mental wellness, psychiatric disorders, psychological interventions, and behavioral health from global medical conferences.',
        about1: 'The PeerCite Journal of Mental Health is dedicated to advancing the understanding and treatment of mental health conditions through the dissemination of high-quality research sourced directly from international psychiatric conferences and health summits.',
        about2: 'We publish keynote addresses, research presentations, and panel discussions from world-leading psychiatrists, psychologists, and mental health advocates, making critical insights accessible to practitioners and researchers globally.',
        scope: ['Psychiatric disorders and treatment', 'Psychological interventions and therapy', 'Mental health policy and advocacy', 'Digital mental health innovations', 'Child and adolescent psychiatry', 'Addiction and substance use disorders'],
        metrics: [
            { value: 'MH', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'MH Conference Proceedings 1.0',
                conference: 'Global Mental Health Summit 2024',
                description: 'Inaugural proceedings featuring keynote addresses and research presentations on modern psychiatric care.',
                articles: 12,
                year: 2024
            },
            {
                title: 'MH Conference Proceedings 1.1',
                conference: 'Mental Health Innovation Forum 2024',
                description: 'Supplementary proceedings focusing on digital mental health tools and telepsychiatry.',
                articles: 8,
                year: 2024
            }
        ]
    },

    'womens-leadership': {
        id: 'womens-leadership',
        title: "PeerCite Journal of Women's Leadership",
        shortTitle: "Women's Leadership",
        category: 'Social Sciences',
        categoryFilter: 'social',
        badge: 'Social Sciences',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop',
        description: "A peer-reviewed open-access journal advancing gender equity through research on women in leadership, organizational behaviour, policy reform, and professional development.",
        about1: "The PeerCite Journal of Women's Leadership publishes transformative research from international conferences focused on gender equity, women's empowerment, and leadership development across industries and cultures.",
        about2: "We collect and publish speeches, research papers, and panel discussions from pioneering female leaders, academics, and policymakers, creating a comprehensive archive of women's leadership scholarship.",
        scope: ["Women in executive leadership", "Gender equity and workplace policy", "Leadership development programs", "Women in STEM", "Entrepreneurship and women-owned businesses", "Work-life balance and organizational culture"],
        metrics: [
            { value: 'WL', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: "Women Leadership Conference Proceedings 1.0",
                conference: "WL Conference 2024",
                description: "Foundational proceedings from the inaugural Women's Leadership Conference featuring global female executives and researchers.",
                articles: 15,
                year: 2024
            },
            {
                title: "Women Leadership Conference Proceedings 1.1",
                conference: "WL Summit 2024",
                description: "Extended proceedings on gender equity policies and women in corporate governance.",
                articles: 11,
                year: 2024
            },
            {
                title: "Women Leadership Conference Proceedings 2.0",
                conference: "WL World Forum 2024",
                description: "Second series proceedings examining women's leadership in emerging economies.",
                articles: 14,
                year: 2024
            },
            {
                title: "Women Leadership Conference Proceedings 2.1",
                conference: "WL Innovation Summit 2024",
                description: "Proceedings focused on digital leadership and women in technology.",
                articles: 9,
                year: 2024
            }
        ]
    },

    'globalization': {
        id: 'globalization',
        title: 'PeerCite Journal of Globalization, Societies and Education',
        shortTitle: 'Globalization & Education',
        category: 'Social Sciences',
        categoryFilter: 'social',
        badge: 'Social Sciences',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
        description: 'Cross-cultural research on global education systems, societal transformation, intercultural dynamics, and the impact of globalization on communities and institutions worldwide.',
        about1: 'The PeerCite Journal of Globalization, Societies and Education explores the complex interplay between global forces and local realities, publishing research from international education conferences, sociology forums, and global studies symposiums.',
        about2: 'We curate content from educators, sociologists, policy makers, and cultural researchers who present at premier conferences addressing the challenges and opportunities of an increasingly interconnected world.',
        scope: ['Global education systems and reform', 'Cultural exchange and intercultural communication', 'Migration and diaspora studies', 'International development and policy', 'Globalization and economic inequality', 'Digital education and e-learning'],
        metrics: [
            { value: 'GSE', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'GSE Conference Proceedings 1.0',
                conference: 'Global Education Summit 2024',
                description: 'Research on education transformation in the context of globalization.',
                articles: 10,
                year: 2024
            }
        ]
    },

    'ai-machine-learning': {
        id: 'ai-machine-learning',
        title: 'PeerCite Journal of Artificial Intelligence and Machine Learning',
        shortTitle: 'AI & Machine Learning',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        description: 'Cutting-edge artificial intelligence research, deep learning breakthroughs, and machine learning applications from the world\'s most prestigious technology conferences.',
        about1: 'The PeerCite Journal of Artificial Intelligence and Machine Learning is the definitive source for AI research originating from international technology conferences, including keynote addresses from leading AI scientists and engineers.',
        about2: 'From neural networks to natural language processing, computer vision to reinforcement learning — we publish the full spectrum of AI research presented at world-class conferences, making it freely accessible to the global research community.',
        scope: ['Deep learning and neural networks', 'Natural language processing', 'Computer vision and image recognition', 'Reinforcement learning', 'AI ethics and responsible AI', 'ML applications in healthcare, finance, and industry'],
        metrics: [
            { value: 'AIML', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'AI Conference Proceedings 1.0',
                conference: 'AI World Congress 2024',
                description: 'Flagship proceedings from the AI World Congress featuring breakthrough research in machine learning and AI applications.',
                articles: 22,
                year: 2024
            },
            {
                title: 'AI Conference Proceedings 1.1',
                conference: 'Machine Learning Summit 2024',
                description: 'Specialized proceedings on practical ML deployment and scalable AI systems.',
                articles: 16,
                year: 2024
            }
        ]
    },

    'quantum-science': {
        id: 'quantum-science',
        title: 'PeerCite Journal of Quantum Science and Technology',
        shortTitle: 'Quantum Science & Tech',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
        description: 'Pioneering research in quantum computing, quantum communication, quantum cryptography, and next-generation technology applications from leading physics conferences.',
        about1: 'The PeerCite Journal of Quantum Science and Technology publishes groundbreaking research from international quantum physics conferences and technology summits, capturing the frontier of quantum innovation.',
        about2: 'As quantum computing approaches practical realization, we document the most important conference presentations and research papers that are shaping the quantum future.',
        scope: ['Quantum computing and algorithms', 'Quantum communication and cryptography', 'Quantum sensing and metrology', 'Quantum materials and devices', 'Quantum error correction', 'Quantum-classical hybrid systems'],
        metrics: [
            { value: 'QST', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'QST Conference Proceedings 1.0',
                conference: 'Quantum Technology World Forum 2024',
                description: 'Research presentations on quantum computing hardware and software breakthroughs.',
                articles: 13,
                year: 2024
            }
        ]
    },

    'surgery-medicine': {
        id: 'surgery-medicine',
        title: 'PeerCite Journal of Surgery and Medicine',
        shortTitle: 'Surgery & Medicine',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop',
        description: 'Advanced surgical techniques, clinical innovations, evidence-based medical research, and operative medicine from leading international surgical conferences.',
        about1: 'The PeerCite Journal of Surgery and Medicine publishes research from premier surgical conferences worldwide, capturing keynote addresses and presentations from leading surgeons and medical innovators.',
        about2: 'From minimally invasive procedures to robotic surgery, from trauma care to elective procedures — our proceedings cover the full breadth of modern surgical science.',
        scope: ['Minimally invasive and robotic surgery', 'Trauma and emergency medicine', 'Surgical oncology', 'Transplant surgery', 'Anesthesiology and perioperative care', 'Post-operative care and rehabilitation'],
        metrics: [
            { value: 'SM', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'SM Conference Proceedings 1.0',
                conference: 'International Surgery Congress 2024',
                description: 'Comprehensive proceedings from the International Surgery Congress covering advances in surgical technique.',
                articles: 18,
                year: 2024
            }
        ]
    },

    'environmental-sciences': {
        id: 'environmental-sciences',
        title: 'PeerCite Journal of Environmental Sciences',
        shortTitle: 'Environmental Sciences',
        category: 'Environmental Sciences',
        categoryFilter: 'environmental',
        badge: 'Environmental Sciences',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop',
        description: 'Research on climate change, ecological sustainability, environmental policy, and conservation science from global environmental summits and ecology conferences.',
        about1: 'The PeerCite Journal of Environmental Sciences documents critical environmental research presented at international climate conferences, sustainability summits, and ecological forums.',
        about2: 'At a time of unprecedented environmental challenge, we ensure that the most important scientific voices from global conferences are heard and accessible to policymakers, researchers, and the public.',
        scope: ['Climate change science and mitigation', 'Biodiversity and conservation', 'Environmental policy and governance', 'Pollution and remediation', 'Sustainable development', 'Renewable energy research'],
        metrics: [
            { value: 'ES', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'ES Conference Proceedings 1.0',
                conference: 'Climate Action Forum 2024',
                description: 'Key research presentations on climate change mitigation and environmental policy from global experts.',
                articles: 14,
                year: 2024
            }
        ]
    },

    'obstetrics-gynecology': {
        id: 'obstetrics-gynecology',
        title: 'PeerCite Journal of Obstetrics and Gynecology',
        shortTitle: 'Obstetrics & Gynecology',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
        description: "Women's reproductive health research, maternal care innovations, gynecological advances, and obstetric science from international women's health conferences.",
        about1: "The PeerCite Journal of Obstetrics and Gynecology is dedicated to advancing women's reproductive healthcare by publishing research from premier OB/GYN conferences and women's health summits.",
        about2: 'We curate critical research on maternal health, reproductive medicine, and gynecological oncology, ensuring that conference insights reach clinicians and researchers worldwide.',
        scope: ["Maternal and fetal medicine", "Reproductive endocrinology", "Gynecological oncology", "Minimally invasive gynecological surgery", "Prenatal diagnosis and care", "Menopause and women's health"],
        metrics: [
            { value: 'OBG', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: "OBG Conference Proceedings 1.0",
                conference: "International Women's Health Congress 2024",
                description: "Research on maternal care, reproductive medicine, and gynecological innovations.",
                articles: 16,
                year: 2024
            }
        ]
    },

    'cell-biology': {
        id: 'cell-biology',
        title: 'PeerCite Journal of Cell Biology',
        shortTitle: 'Cell Biology',
        category: 'Life Sciences',
        categoryFilter: 'life',
        badge: 'Life Sciences',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop',
        description: 'Groundbreaking research on cellular mechanisms, molecular biology, cell-based therapies, and genetic science from premier life sciences conferences.',
        about1: 'The PeerCite Journal of Cell Biology captures the most significant advances in cellular and molecular biology presented at international conferences, from basic science discoveries to translational applications.',
        about2: 'We publish research that spans the full scope of cell biology — from membrane dynamics to gene regulation, from stem cells to cancer biology — making conference knowledge accessible to the global scientific community.',
        scope: ['Cell signaling and transduction', 'Gene regulation and expression', 'Stem cell biology', 'Cancer cell biology', 'Cell metabolism', 'Structural biology and proteomics'],
        metrics: [
            { value: 'CB', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'CB Conference Proceedings 1.0',
                conference: 'International Cell Biology Symposium 2024',
                description: 'Cutting-edge presentations on cellular mechanisms and molecular biology breakthroughs.',
                articles: 11,
                year: 2024
            }
        ]
    },

    'neuroscience': {
        id: 'neuroscience',
        title: 'PeerCite Journal of Neuroscience',
        shortTitle: 'Neuroscience',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
        description: 'Latest discoveries in brain science, neural networks, cognitive function, neurological disorders, and neurotechnology from leading neuroscience conferences worldwide.',
        about1: 'The PeerCite Journal of Neuroscience publishes groundbreaking brain research from international neuroscience conferences, capturing keynotes from the world\'s leading neuroscientists and clinical neurologists.',
        about2: 'From basic neuroscience to clinical applications, from neuroimaging to neural engineering — our proceedings archive the most important advances in understanding the brain.',
        scope: ['Cognitive neuroscience', 'Neurological disorders and treatment', 'Neuroimaging and brain mapping', 'Neural engineering and brain-computer interfaces', 'Developmental neuroscience', 'Neuropharmacology'],
        metrics: [
            { value: 'NS', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'NS Conference Proceedings 1.0',
                conference: 'Neuroscience World Forum 2024',
                description: 'Premier neuroscience research presentations on brain function, disorders, and therapeutic innovations.',
                articles: 20,
                year: 2024
            }
        ]
    },

    'cardio-biology': {
        id: 'cardio-biology',
        title: 'PeerCite Journal of Cardio Biology',
        shortTitle: 'Cardio Biology',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop',
        description: 'Research on cardiovascular health, cardiac biology, heart disease prevention, and innovative cardiology treatments from international cardiology conferences.',
        about1: 'The PeerCite Journal of Cardio Biology publishes research from premier cardiology and cardiovascular science conferences, covering everything from molecular cardiac biology to clinical cardiology practice.',
        about2: 'Heart disease remains the leading cause of death globally. Our journal ensures that the most important cardiology conference research reaches clinicians, researchers, and public health professionals worldwide.',
        scope: ['Cardiovascular disease prevention', 'Cardiac molecular biology', 'Heart failure and arrhythmia', 'Interventional cardiology', 'Cardiac imaging and diagnostics', 'Cardiovascular genetics'],
        metrics: [
            { value: 'CVB', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'CVB Conference Proceedings 1.0',
                conference: 'World Cardiology Congress 2024',
                description: 'Comprehensive cardiology research from leading cardiologists and cardiovascular scientists.',
                articles: 17,
                year: 2024
            }
        ]
    },

    'dermatology-cosmetics': {
        id: 'dermatology-cosmetics',
        title: 'PeerCite Journal of Dermatology & Cosmetics',
        shortTitle: 'Dermatology & Cosmetics',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=500&fit=crop',
        description: 'Advances in skin science, cosmetic dermatology, aesthetic medicine, skin disease treatments, and cosmetic innovations from global dermatology conferences.',
        about1: 'The PeerCite Journal of Dermatology & Cosmetics publishes research from international dermatology conferences, covering clinical dermatology, cosmetic procedures, skin biology, and aesthetic medicine.',
        about2: 'From eczema and psoriasis research to aesthetic innovations and cosmetic formulation science, our proceedings capture the complete landscape of dermatological research.',
        scope: ['Clinical dermatology and skin diseases', 'Cosmetic and aesthetic dermatology', 'Skin cancer and oncology', 'Cosmetic formulation science', 'Laser and light therapies', 'Pediatric dermatology'],
        metrics: [
            { value: 'DC', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'DC Conference Proceedings 1.0',
                conference: 'International Dermatology Summit 2024',
                description: 'Research presentations on skin disease, cosmetic innovations, and aesthetic medicine.',
                articles: 13,
                year: 2024
            }
        ]
    },

    'blockchain': {
        id: 'blockchain',
        title: 'PeerCite Journal of Blockchain and Cryptocurrencies',
        shortTitle: 'Blockchain & Crypto',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
        description: 'Research on decentralized technology, cryptocurrency markets, DeFi, smart contracts, and blockchain applications across industries from leading fintech conferences.',
        about1: 'The PeerCite Journal of Blockchain and Cryptocurrencies publishes research from premier blockchain conferences and fintech summits, capturing the most important developments in decentralized technology.',
        about2: 'As blockchain technology transforms industries from finance to healthcare to supply chain, our journal ensures that conference-originating research reaches technologists, economists, and policymakers worldwide.',
        scope: ['Blockchain protocols and consensus mechanisms', 'Cryptocurrency economics and markets', 'Decentralized finance (DeFi)', 'Smart contracts and dApps', 'NFTs and digital assets', 'Blockchain regulation and compliance'],
        metrics: [
            { value: 'BC', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'BC Conference Proceedings 1.0',
                conference: 'Blockchain World Summit 2024',
                description: 'Research on blockchain technology, cryptocurrency markets, and decentralized applications.',
                articles: 15,
                year: 2024
            }
        ]
    },

    'veterinary-science': {
        id: 'veterinary-science',
        title: 'PeerCite Journal of Veterinary Science',
        shortTitle: 'Veterinary Science',
        category: 'Life Sciences',
        categoryFilter: 'life',
        badge: 'Life Sciences',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=500&fit=crop',
        description: 'Animal health research, veterinary medicine innovations, zoonotic disease studies, and comparative medicine from international veterinary conferences.',
        about1: 'The PeerCite Journal of Veterinary Science publishes research from international veterinary conferences, covering companion animal medicine, livestock health, wildlife conservation medicine, and zoonotic disease research.',
        about2: 'Veterinary science plays a crucial role in global health through the One Health framework. Our proceedings bring together animal health research from conferences worldwide.',
        scope: ['Companion animal medicine', 'Livestock and production animal health', 'Wildlife and zoo medicine', 'Zoonotic diseases and One Health', 'Veterinary pharmacology', 'Animal welfare and ethics'],
        metrics: [
            { value: 'VS', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'VS Conference Proceedings 1.0',
                conference: 'World Veterinary Congress 2024',
                description: 'Research presentations on animal health, zoonotic diseases, and veterinary innovation.',
                articles: 12,
                year: 2024
            }
        ]
    },

    'nanostructured-materials': {
        id: 'nanostructured-materials',
        title: 'PeerCite Journal of Nanostructured and Green Materials',
        shortTitle: 'Nanostructured & Green Materials',
        category: 'Environmental Sciences',
        categoryFilter: 'environmental',
        badge: 'Environmental Sciences',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop',
        description: 'Research on nanomaterials, sustainable green chemistry, eco-friendly material innovations, and nanotechnology applications from global materials science conferences.',
        about1: 'The PeerCite Journal of Nanostructured and Green Materials publishes research from international materials science conferences, focusing on nanoscale materials and sustainable chemistry innovations.',
        about2: 'As nanotechnology and green chemistry converge to address global challenges, our journal captures the most innovative research from conferences at the forefront of materials science.',
        scope: ['Nanoparticle synthesis and characterization', 'Green chemistry and sustainable processes', 'Nanomaterials for energy applications', 'Biodegradable and bio-based materials', 'Nanotoxicology and safety', 'Advanced composites and coatings'],
        metrics: [
            { value: 'NGM', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'NGM Conference Proceedings 1.0',
                conference: 'International Nanomaterials Symposium 2024',
                description: 'Research on nanostructured materials and green chemistry innovations.',
                articles: 10,
                year: 2024
            }
        ]
    },

    'dental-care': {
        id: 'dental-care',
        title: 'PeerCite Journal of Advanced Dental Care, Materials and Marketing',
        shortTitle: 'Advanced Dental Care',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
        description: 'Innovations in dental technology, oral health research, dental materials science, implantology, and dental practice management from international dental conferences.',
        about1: 'The PeerCite Journal of Advanced Dental Care, Materials and Marketing publishes research from premier dental conferences, covering clinical dentistry, dental materials innovation, and the business of dental practice.',
        about2: 'From composite resins to digital dentistry, from implant science to practice marketing — our proceedings cover the complete spectrum of modern dental science and practice management.',
        scope: ['Digital dentistry and CAD/CAM', 'Dental implants and oral surgery', 'Orthodontics and aesthetic dentistry', 'Dental materials science', 'Oral health public policy', 'Dental practice management and marketing'],
        metrics: [
            { value: 'ADC', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'ADC Conference Proceedings 1.0',
                conference: 'World Dental Congress 2024',
                description: 'Comprehensive dental research on advanced materials, digital dentistry, and clinical innovations.',
                articles: 14,
                year: 2024
            }
        ]
    },

    'pediatrics': {
        id: 'pediatrics',
        title: 'PeerCite Journal of Pediatrics',
        shortTitle: 'Pediatrics',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&h=500&fit=crop',
        description: 'Child health research, pediatric medicine innovations, neonatal care, childhood disease studies, and adolescent medicine from leading international pediatric conferences.',
        about1: 'The PeerCite Journal of Pediatrics publishes research from premier pediatric medical conferences, capturing the most important advances in child health, neonatal medicine, and adolescent healthcare.',
        about2: 'From neonatal intensive care to adolescent mental health, from childhood vaccines to pediatric oncology — our proceedings document the key research shaping the future of child health.',
        scope: ['Neonatal medicine and care', 'Childhood immunization and vaccines', 'Pediatric oncology', 'Adolescent medicine', 'Child development and behavioral pediatrics', 'Pediatric nutrition and growth'],
        metrics: [
            { value: 'PED', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'PED Conference Proceedings 1.0',
                conference: 'International Pediatrics Congress 2024',
                description: 'Key research presentations on child health, neonatal care, and pediatric innovations.',
                articles: 15,
                year: 2024
            }
        ]
    },

    'agriculture-food': {
        id: 'agriculture-food',
        title: 'PeerCite Journal of Agriculture and Food Research',
        shortTitle: 'Agriculture & Food Research',
        category: 'Environmental Sciences',
        categoryFilter: 'environmental',
        badge: 'Environmental Sciences',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop',
        description: 'Agricultural innovation, food security research, sustainable farming practices, food science, and agri-technology from global agriculture and food science conferences.',
        about1: 'The PeerCite Journal of Agriculture and Food Research publishes research from international agriculture conferences, food science summits, and agri-technology forums addressing global food security challenges.',
        about2: 'As the world faces unprecedented food security challenges, our journal ensures that the most important agricultural and food science conference research reaches farmers, policymakers, and researchers.',
        scope: ['Sustainable agriculture and farming', 'Food security and nutrition', 'Agricultural biotechnology', 'Food processing and preservation', 'Soil science and agronomy', 'Smart farming and precision agriculture'],
        metrics: [
            { value: 'AFR', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'AFR Conference Proceedings 1.0',
                conference: 'World Agriculture Forum 2024',
                description: 'Research on sustainable agriculture, food security, and agricultural innovation.',
                articles: 11,
                year: 2024
            }
        ]
    },

    'pharmaceutical-sciences': {
        id: 'pharmaceutical-sciences',
        title: 'PeerCite Journal of Pharmaceutical Sciences',
        shortTitle: 'Pharmaceutical Sciences',
        category: 'Life Sciences',
        categoryFilter: 'life',
        badge: 'Life Sciences',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop',
        description: 'Drug discovery, pharmaceutical innovation, clinical pharmacology, medication research, and drug delivery systems from international pharmaceutical conferences.',
        about1: 'The PeerCite Journal of Pharmaceutical Sciences publishes research from premier pharmaceutical conferences, covering drug discovery, clinical trials, pharmaceutical manufacturing, and medication safety.',
        about2: 'From small molecule drugs to biologics, from clinical pharmacology to regulatory science — our proceedings capture the full scope of pharmaceutical science presented at global conferences.',
        scope: ['Drug discovery and development', 'Clinical pharmacology and trials', 'Drug delivery systems', 'Pharmaceutical manufacturing', 'Biopharmaceuticals and biosimilars', 'Pharmacovigilance and drug safety'],
        metrics: [
            { value: 'PS', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'PS Conference Proceedings 1.0',
                conference: 'International Pharmaceutical Congress 2024',
                description: 'Research on drug discovery, pharmaceutical innovation, and clinical pharmacology.',
                articles: 16,
                year: 2024
            }
        ]
    },

    'applied-chemistry': {
        id: 'applied-chemistry',
        title: 'PeerCite Journal of Applied Chemistry',
        shortTitle: 'Applied Chemistry',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop',
        description: 'Industrial chemistry applications, chemical engineering innovations, materials chemistry, and green chemistry research from global chemistry conferences and symposiums.',
        about1: 'The PeerCite Journal of Applied Chemistry publishes research from international chemistry conferences and chemical engineering symposiums, covering practical applications of chemistry across industries.',
        about2: 'From industrial processes to pharmaceutical chemistry, from polymer science to electrochemistry — our proceedings document key applied chemistry research from global conferences.',
        scope: ['Industrial and process chemistry', 'Polymer science and materials', 'Electrochemistry and energy storage', 'Catalysis and reaction engineering', 'Analytical chemistry methods', 'Green and sustainable chemistry'],
        metrics: [
            { value: 'AC', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'AC Conference Proceedings 1.0',
                conference: 'World Chemistry Congress 2024',
                description: 'Applied chemistry research on industrial applications, materials science, and green chemistry.',
                articles: 12,
                year: 2024
            }
        ]
    },

    'entrepreneurship': {
        id: 'entrepreneurship',
        title: 'PeerCite Journal of Entrepreneurship and Business Innovations',
        shortTitle: 'Entrepreneurship & Business',
        category: 'Social Sciences',
        categoryFilter: 'social',
        badge: 'Social Sciences',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
        description: 'Startup ecosystems, business innovation research, entrepreneurial leadership, economic development, and corporate innovation from global business conferences.',
        about1: 'The PeerCite Journal of Entrepreneurship and Business Innovations publishes research from premier business conferences, entrepreneurship summits, and innovation forums worldwide.',
        about2: 'From startup ecosystems to corporate innovation, from social entrepreneurship to venture capital — our proceedings capture the most important business and entrepreneurship conference research.',
        scope: ['Startup ecosystems and venture capital', 'Corporate innovation and intrapreneurship', 'Social entrepreneurship and impact', 'Business model innovation', 'Leadership and organizational development', 'Digital transformation and industry disruption'],
        metrics: [
            { value: 'EBI', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'EBI Conference Proceedings 1.0',
                conference: 'Global Entrepreneurship Summit 2024',
                description: 'Research on startup ecosystems, business innovation, and entrepreneurial leadership.',
                articles: 13,
                year: 2024
            }
        ]
    },

    'microbiology': {
        id: 'microbiology',
        title: 'PeerCite Journal of Microbiology and Infectious Diseases',
        shortTitle: 'Microbiology & Infectious Diseases',
        category: 'Life Sciences',
        categoryFilter: 'life',
        badge: 'Life Sciences',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop',
        description: 'Microbial research, infectious disease studies, antimicrobial resistance, epidemiology, and vaccine science from global microbiology and infectious disease conferences.',
        about1: 'The PeerCite Journal of Microbiology and Infectious Diseases publishes research from international microbiology conferences and infectious disease summits, capturing critical insights into pathogen biology and disease control.',
        about2: 'In an era of emerging infectious diseases and antimicrobial resistance, our journal ensures that conference-originating microbiology research reaches the global health community.',
        scope: ['Bacteriology and mycology', 'Virology and emerging viruses', 'Antimicrobial resistance', 'Epidemiology and disease surveillance', 'Vaccine development', 'Infection prevention and control'],
        metrics: [
            { value: 'MID', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'MID Conference Proceedings 1.0',
                conference: 'World Microbiology Congress 2024',
                description: 'Research on microbial science, infectious diseases, and antimicrobial resistance.',
                articles: 14,
                year: 2024
            }
        ]
    },

    'metaphysics': {
        id: 'metaphysics',
        title: 'PeerCite Journal of Metaphysics & Mystery',
        shortTitle: 'Metaphysics & Mystery',
        category: 'Social Sciences',
        categoryFilter: 'social',
        badge: 'Social Sciences',
        image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=500&fit=crop',
        description: 'Philosophical inquiry, consciousness studies, paranormal research, and the intersection of science and unexplained phenomena from interdisciplinary academic conferences.',
        about1: 'The PeerCite Journal of Metaphysics & Mystery provides an academic platform for rigorous exploration of philosophical questions, consciousness studies, and scientifically approached investigations of unexplained phenomena.',
        about2: 'We publish research from interdisciplinary conferences that bridge philosophy, physics, psychology, and the study of phenomena that challenge conventional scientific boundaries.',
        scope: ['Philosophy of mind and consciousness', 'Parapsychology and anomalous phenomena', 'Quantum consciousness theories', 'Near-death experiences and afterlife research', 'Sacred geometry and metaphysical mathematics', 'Interdisciplinary approaches to the unknown'],
        metrics: [
            { value: 'MM', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'MM Conference Proceedings 1.0',
                conference: 'International Metaphysics Symposium 2024',
                description: 'Academic research on consciousness, philosophical inquiry, and unexplained phenomena.',
                articles: 9,
                year: 2024
            }
        ]
    },

    'diagnostic-pathology': {
        id: 'diagnostic-pathology',
        title: 'PeerCite Journal of Diagnostic Pathology',
        shortTitle: 'Diagnostic Pathology',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop',
        description: 'Advances in disease diagnosis, pathological analysis, laboratory medicine, molecular diagnostics, and diagnostic technology from international pathology conferences.',
        about1: 'The PeerCite Journal of Diagnostic Pathology publishes research from premier pathology conferences, covering clinical pathology, molecular diagnostics, digital pathology, and laboratory medicine innovations.',
        about2: 'Accurate diagnosis is the foundation of effective treatment. Our proceedings capture the most important advances in diagnostic pathology from conferences worldwide, from anatomic pathology to AI-powered diagnostics.',
        scope: ['Anatomic and surgical pathology', 'Molecular diagnostics and genomics', 'Digital pathology and AI', 'Clinical chemistry and hematology', 'Cytopathology', 'Forensic pathology'],
        metrics: [
            { value: 'DP', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        proceedings: [
            {
                title: 'DP Conference Proceedings 1.0',
                conference: 'International Pathology Congress 2024',
                description: 'Research on diagnostic innovations, molecular pathology, and digital diagnostics.',
                articles: 13,
                year: 2024
            }
        ]
    }
};

/* =====================================================
   JOURNAL PAGE RENDERER
   Reads URL param and populates the page
   ===================================================== */

(function () {
    // Only run on journal.html
    if (!document.getElementById('journal-hero')) return;

    // Get journal ID from URL
    const params = new URLSearchParams(window.location.search);
    const journalId = params.get('id');

    // Get journal data
    const journal = JOURNALS_DATA[journalId];

    // If journal not found — redirect to publications
    if (!journal) {
        window.location.href = 'publications.html';
        return;
    }

    // ---- UPDATE PAGE TITLE ----
    document.title = journal.title + ' | PeerCite Publishers';

    // ---- UPDATE META DESCRIPTION ----
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = journal.description;

    // ---- HERO SECTION ----
    document.getElementById('journal-cover-img').src = journal.image;
    document.getElementById('journal-cover-img').alt = journal.title;
    document.getElementById('journal-breadcrumb').textContent = journal.shortTitle;
    document.getElementById('journal-badge').textContent = journal.badge;
    document.getElementById('journal-title').textContent = journal.title;
    document.getElementById('journal-description').textContent = journal.description;

    // Metrics
    const metricsEl = document.getElementById('journal-metrics');
    metricsEl.innerHTML = journal.metrics.map(m => `
        <div class="metric">
            <span class="metric-value">${m.value}</span>
            <span class="metric-label">${m.label}</span>
        </div>
    `).join('');

    // ---- ABOUT SECTION ----
    document.getElementById('about-title').textContent = 'About ' + journal.shortTitle;
    document.getElementById('about-desc-1').textContent = journal.about1;
    document.getElementById('about-desc-2').textContent = journal.about2;
    document.getElementById('info-category').textContent = journal.category;

    // Scope list
    const scopeEl = document.getElementById('journal-scope');
    scopeEl.innerHTML = `
        <h4 style="margin-bottom:1rem; color:var(--primary);">Topics & Scope</h4>
        <ul class="scope-list">
            ${journal.scope.map(s => `<li><i class='bx bx-check-circle'></i> ${s}</li>`).join('')}
        </ul>
    `;

    // ---- PROCEEDINGS SECTION ----
    const proceedingsHTML = journal.proceedings.map(p => `
    <div class="proceeding-card" data-proceeding="${p.id}">
        <div class="proceeding-card-header">
            <span class="badge badge-green">${p.status || 'Published'}</span>
            <h3>${p.title}</h3>
            <p class="proceeding-conference">${p.conference}</p>
        </div>
        <div class="proceeding-card-body">
            <p>${p.description}</p>
            <div class="proceeding-meta">
                <span><i class='bx bx-calendar'></i> ${p.date || p.year}</span>
                <span><i class='bx bx-file'></i> ${p.articles} Articles</span>
            </div>
        </div>
        <div class="proceeding-card-footer">
            <!-- UPDATED: Dynamic link to proceeding.html -->
            <a href="proceeding.html?journal=${journal.id}&proceeding=${p.id}" class="btn btn-primary btn-sm">
                <i class='bx bx-book-open'></i> Read Proceedings
            </a>
        </div>
    </div>
`).join('');

    document.getElementById("proceedingsList").innerHTML = proceedingsHTML;


    // ---- OTHER JOURNALS (show 4 random others) ----
    const otherJournals = Object.values(JOURNALS_DATA)
        .filter(j => j.id !== journalId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const otherGrid = document.getElementById('other-journals-grid');
    otherGrid.innerHTML = otherJournals.map(j => `
        <a href="journal.html?id=${j.id}" class="other-journal-card">
            <div class="other-journal-img">
                <img src="${j.image}" alt="${j.title}" loading="lazy">
            </div>
            <div class="other-journal-info">
                <span class="other-journal-badge">${j.badge}</span>
                <h4>${j.shortTitle}</h4>
                <p>${j.description.substring(0, 80)}...</p>
            </div>
        </a>
    `).join('');

})();