/* =====================================================
   PEERCITE - JOURNALS DATA
   Volumes → Issues → Articles Structure
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
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Psychedelics and Positive Psychology: Is It The Begining of A New Era, Positive Psychopharmacology?',
                        date: '26 June 2023',
                        articles: [
                            {
                                id: 'PJMH-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Hamide Eygoren",
                                        aff: "Master of Applied Positive Psychology Program, University of Pennsylvania,USA"
                                    }
                                ],
                                pages: '1-17',
                                pdf: 'assets/pdfs/mental-health/PJMH-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'DNA Damage in Multiple Tissues of Different Genomic Silver Nanoparticles',
                        date: 'February 02, 2023',
                        articles: [
                            {
                                id: 'PJMH-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr.Prasad Kovvuru",
                                        aff: "Department of Health Sciences, Post-Doctoral Research, University at Albany, SUNY New York, USA"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/mental-health/PJMH-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Psychology and Epidemiology Distress in Human Brain',
                        date: 'August 22, 2023',
                        articles: [
                            {
                                id: 'PJMH-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr.Angelika Wagner",
                                        aff: "Department of Psychology, Mental Health Center, UK"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/mental-health/PJMH-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Positive Energy in Psychology Treatment',
                        date: 'October 21, 2023',
                        articles: [
                            {
                                id: 'PJMH-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Dr.Abdulkarim Kazemzade",
                                        aff: "Founder of Online Psycho Therapy-OPT Co, Ltd, Vietnam"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/mental-health/PJMH-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Nurturing Maternal Mental Health: Understanding and Supporting Pregnant Women',
                        date: 'January 22, 2024',
                        articles: [
                            {
                                id: 'PJMH-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Geethika Sharma",
                                        aff: "Founder of Online Psycho Therapy-OPT Co, Ltd, Australia"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/mental-health/PJMH-v2-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Supporting Young Minds: Promoting Mental Health in Children',
                        date: ' May 02, 2024',
                        articles: [
                            {
                                id: 'PJMH-v2-i2-a2',
                                authors: [
                                    {
                                        name: "Dr.Suresh V",
                                        aff: "Department of Mental health,Research Group, Australia"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/mental-health/PJMH-v2-i2-a2.pdf',
                            }
                        ]
                    }
                ]
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
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Analyzing Differences Between Male and Female Leadership Styles, the Underrepresentation of Women in Leadership and the Negative Impacts it has.',
                        date: 'February 07 2023',
                        articles: [
                            {
                                id: 'PJWL-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Tejeswi Gidadhubli",
                                        aff: "University of Maryland, Aldie, Virginia, United States."
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/womens-leadership/PJWL-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: "1 (2)",
                        title: 'Nurturing Mental Strength and Fostering Inclusive Leadership in Women',
                        date: 'February 20, 2023',
                        articles: [
                            {
                                id: 'PJWL-v1-i1(s)-a1',
                                authors: [
                                    {
                                        name: "Sabira Arefin",
                                        aff: "Global HealthCare Leadership Program, Harvard University, Boston, USA."
                                    },
                                    {
                                        name: "Gideon Kipkoech",
                                        aff: "A writer focusing on AI and general human well-being research specializing in the intersection of artificial intelligence, mental health, psychology, and public health trends, Kenya."
                                    },
                                    {
                                        name: " Samia Arefin",
                                        aff: "Mental Health Doctor, Sydney, Australia"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/womens-leadership/PJWL-v1-i1(s)-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'The Premature Aging of Our Female Clients',
                        date: 'April 27, 2023',
                        articles: [
                            {
                                id: 'PJWL-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr. Kokkori Eleftheria",
                                        aff: "Marketing & Management in Cosmetology, National & Kapodistriakon University of Athens, Greece"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/womens-leadership/PJWL-v1-i2-a2.pdf',
                            }
                        ]
                    },

                    {
                        issue: 3,
                        title: 'Impact of Deletion and Sickle-Cell Trait on Ventilatory and Hemodynamic Responses to Maximum Exercise in Young Saudi Women',
                        date: 'September 07, 2023',
                        articles: [
                            {
                                id: 'PJWL-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr. Sayed Abdul Azeez",
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultation (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/womens-leadership/PJWL-v1-i3-a3.pdf',
                            }
                        ]
                    }
                ]
            },
            // {
            //     volume: 2,
            //     year: 2024,
            //     issues: [
            //         {
            //             issue: 1,
            //             title: 'Global Women Leaders Forum',
            //             date: 'March 2024',
            //             articles: [
            //                 {
            //                     id: 'wl-v2-i1-a1',
            //                     title: 'Women Leadership in Emerging Economies',
            //                     authors: 'Dr. Fatima Al-Hassan, Dr. Grace Okonkwo',
            //                     pages: '1-30',
            //                     pdf: 'assets/pdfs/./pdfs/womens-leadership/v2-i1-a1.pdf',
            //                 },
            //             ]
            //         },
            //         {
            //             issue: 2,
            //             title: 'Inaugural Issue',
            //             date: 'March 2023',
            //             articles: [
            //                 {
            //                     id: 'wl-v2-i1-a2',
            //                     title: 'Digital Leadership and Remote Teams',
            //                     authors: 'Dr. Anna Kowalski',
            //                     pages: '31-48',
            //                     pdf: 'assets/pdfs/./pdfs/womens-leadership/v2-i1-a2.pdf',
            //                 }
            //             ]
            //         }
            //     ]
            // }
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
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Robotic Programming Development Around the World',
                        date: 'February 07, 2023',
                        articles: [
                            {
                                id: 'PJAIML-v1-i1-a1',
                                authors: [
                                    {
                                        name: 'Erica L',
                                        aff: "Department of Engineering, University of Shanghai for Science and Technology,Shanghai, China"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Research and Development of Innovative Machine Learning Technology for Reliability Testing Systems',
                        date: 'May 06, 2023',
                        articles: [
                            {
                                id: 'PJAIML-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Davide Cascella, Valeria Giardinieri, Mauro Pipponzi, Pietro Serafino",
                                        aff: "Idea75 s.r.l., Eles Semiconductor Equipment S.P.A., Politecnico di Bari"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Air Quality Based Adaptive AI. Algorithms for Improving the Efficiency of Environmental Regulatory Systems',
                        date: 'May 06, 2023',
                        articles: [
                            {
                                id: 'PJAIML-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Davide Cascella, Valeria Giardinieri, Mauro Pipponzi, Pietro Serafino",
                                        aff: "Idea75 s.r.l., Eles Semiconductor Equipment S.P.A., Politecnico di Bari"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Artificial Intelligence in Human Healthcare',
                        date: 'October 06, 2023',
                        articles: [
                            {
                                id: 'PJAIML-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Yamini Devi",
                                        aff: "Department of Artificial Intelligence, Research study, India"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v1-i4-a4.pdf',
                            }
                        ]
                    },
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'The Role of Artificial Intelligence in Advancing Scientific Research',
                        date: 'January 27, 2024',
                        articles: [
                            {
                                id: 'PJAIML-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Mahesh J",
                                        aff: "Department of Artificial Intelligence, Research study, India"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v2-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 'Special',
                        title: 'Unveiling Ethical Complexities in AIs Role in Healthcare',
                        date: 'August 16, 2024',
                        articles: [
                            {
                                id: 'PJAIML-v2-sp',
                                authors: [
                                    {
                                        name: "Ewa J. Kleczyk",
                                        aff: "The University of Maine, Orono, Maine, USA; Target RWE, Durham, NC, USA"
                                    }
                                ],
                                pages: '1-13',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v2-sp.pdf',
                            },
                        ]
                    },
                    {
                        issue: 'Special',
                        title: 'The Fourth Industrial Revolution: Transforming Medicine and Pharmaceuticals',
                        date: 'October 14, 2024',
                        articles: [
                            {
                                id: 'PJAIML-v2-sp2',
                                authors: [
                                    {
                                        name: "Anu Ramchandran Nair",
                                        aff: "Biotech Researcher | Experience in Academics Manufacturing & Research | Author"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v2-sp2.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 3,
                year: 2025,
                issues: [
                    {
                        issue: 'Special',
                        title: 'Operational Endings, Emotional Impacts: Ethical Considerations When Project Teams Form Attachments to AI Collaborators',
                        date: ' May 16, 2025',
                        articles: [
                            {
                                id: 'PJAIML-v3-sp',
                                authors: "Sarah Dyson",
                                pages: '1-15',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v3-sp1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 'Special',
                        title: 'Artificial Intelligence in Healthcare: Trends,Integration, and the Future of the Clinical Workforce',
                        date: 'May 26, 2025',
                        articles: [
                            {
                                id: 'PJAIML-v3-sp2',
                                authors: [
                                    {
                                        name: "Dr. Ewa J. Kleczyk",
                                        aff: "SVP of Operations, Target RWE, Durham, NC; Graduate Faculty, School of Economics, the University of Maine, Orono, Maine; Co-founder of Kleczyk - Strout Foundation, Lansdale, PA"
                                    }
                                ],
                                pages: '1-9',
                                pdf: 'assets/pdfs/ai-ml/PJAIML-v3-sp2.pdf',
                            }
                        ]
                    }
                ]
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
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Prognostic and Validation of Microrna Goals in Animal Genomes',
                        date: 'February 07, 2023',
                        articles: [
                            {
                                id: 'ns-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Prasad Kovvuru",
                                        aff: "Department of Biomedical Sciences, Post-Doctoral Research, University at Albany, SUNY Newyork, USA"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/neuroscience/ns-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Novel Insights into the Underlying Neurobiology of Addiction',
                        date: 'June 25, 2023',
                        articles: [
                            {
                                id: 'ns-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr. Angelika Wagner",
                                        aff: "Grace Center Healing 85 Tottenham Court Road, London, England W1T 4TQ."
                                    }
                                ],
                                pages: '1-17',
                                pdf: 'assets/pdfs/neuroscience/ns-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Disorder in Children Playing Electronic Games',
                        date: 'September 16, 2023',
                        articles: [
                            {
                                id: 'ns-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr. Ali Abdul Kadhim Ajjah AL Shamari",
                                        aff: "Department of Higher Education & Scientific Research, University College of Education for Humanistic Sciences Post Graduate Masters, Iraq"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/neuroscience/ns-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Exploring the Neurological Effects of Music on the Human Brain',
                        date: 'April 06, 2023',
                        articles: [
                            {
                                id: 'ns-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Charis M. Galanakis",
                                        aff: "Department of neurology, Research group, India"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/neuroscience/ns-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
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
        description: 'Latest discoveries in brain science, neural networks, cognitive function, neurological disorders, and neurotechnology from leading neuroscience conferences worldwide.',
        about1: 'The PeerCite Journal of Globalization, Societies and Education publishes high-quality peer-reviewed research in the field.',
        about2: 'We curate and provide open access to impactful research for the global academic community.',
        scope: ['Research and innovation', 'Academic discourse', 'Peer-reviewed studies'],
        metrics: [
            { value: 'GJSE', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'The Impact of Globalisation on Education Systems Worldwide',
                        date: 'February 19, 2023',
                        articles: [
                            {
                                id: 'gt-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Sravani D",
                                        aff: "Department of Social and Science, Researcher, India"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/globalization/gt-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Globalisation and Its Effects on Curriculum Development',
                        date: 'June 15, 2023',
                        articles: [
                            {
                                id: 'gt-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr.Vishnu A",
                                        aff: "Department of Society Development, Development Group, India"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/globalization/gt-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Cultural Diversity and Social Integration: CelebratingDifferences in a Globalised World',
                        date: 'September 24, 2023',
                        articles: [
                            {
                                id: 'gt-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Sowjanya R",
                                        aff: "Department of Global and Society, Global and Society Group Research, India"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/globalization/gt-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'The Politics of Nationalism: Navigating Identity,Power and Global Dynamics',
                        date: 'September 24, 2023',
                        articles: [
                            {
                                id: 'gt-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Deepak P",
                                        aff: "Department of Global and Society, Global and Society Group, India"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/globalization/gt-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Income Inequality and Its Effects on Society: Exploring Dynamics, Impacts and Pathways Forward',
                        date: 'February 01, 2024',
                        articles: [
                            {
                                id: 'gt-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Narendra Varma",
                                        aff: "Department of Global and Society, Global and Society Group, India"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./globalization/gt-v2-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'One World, One Nation, One Love-A New Social and Economic Organization',
                        date: 'May 09, 2024',
                        articles: [
                            {
                                id: 'gt-v2-i2-a2',
                                authors: [
                                    {
                                        name: "Marc-Henri Ahoua",
                                        aff: "Author, Freelance technical Translator, Sales Support Agent"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./globalization/gt-v2-i2-a2.pdf',
                            }
                        ]
                    }
                ]
            }

        ]
    },
    'agriculture-food': {
        title: 'PeerCite Journal of Agriculture and Food',
        shortTitle: 'Agriculture & Food',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
        abbr: 'AF',
        description: 'PeerCite Journal of Agriculture and Food publishes high-quality peer-reviewed research in the field.',
        about1: 'PeerCite Journal of Agriculture and Food is a peer-reviewed scientific journal that publishes original research and reviews in all areas of agriculture and food science.',
        about2: 'PeerCite Journal of Agriculture and Food is a peer-reviewed scientific journal that publishes original research and reviews in all areas of agriculture and food science.',
        scope: ['Agriculture', 'Food Science', 'Food Technology'],
        metrics: [
            { value: 'AF', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'The Impact of Food On The Human Body: Exploring Future Possibilities',
                        date: 'February 06, 2023',
                        articles: [
                            {
                                id: 'af-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Charis M. Galanakis",
                                        aff: "Department of Food Waste Recovery Group, ISEKI Food Association, Vienna, Austria"
                                    }
                                ],
                                pages: '1-7',
                                pdf: 'assets/pdfs/agriculture-food/af-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'The Application of Biotechnology in Enhancing Food Complexity',
                        date: 'April 06, 2023',
                        articles: [
                            {
                                id: 'af-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr. Charis M. Galanakis",
                                        aff: "Department of Food Waste Recovery Group, ISEKI Food Association, Vienna, Austria"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/agriculture-food/af-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Ensuring Adequate and Safe Food Supply for Daily Needs',
                        date: 'September 06, 2023',
                        articles: [
                            {
                                id: 'af-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr. Fahim Shaltout",
                                        aff: "Department of Food Hygiene, Faculty of Veterinary Medicine at Benha University. Banhā, Egypt"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/agriculture-food/af-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Understanding Food Groups in the Food-Based Dietary Guidelines: Insights from Brazilian Consumers',
                        date: 'October 29, 2023',
                        articles: [
                            {
                                id: 'af-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Dr. Jordanna Santos Monteiro",
                                        aff: "Department of Nutrition, School of Health Sciences, University of Brasilia, Campus Darcy Ribeiro, Asa Norte, Brasilia, Brazil"
                                    }
                                ],
                                pages: '1-9',
                                pdf: 'assets/pdfs/agriculture-food/af-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'A Review: On The Health Benefits of Organic Food and Its Distinctions from Conventional Food',
                        date: ' February 16, 2024',
                        articles: [
                            {
                                id: 'af-v2-i1-a1',
                                authors: [
                                    {
                                        name: "ENAS SHEHAB AHMED",
                                        aff: "Department of Biomedical Engineering, College of Engineering, Al-Nahrain University, Jadriya, Baghdad, Iraq"
                                    },
                                    {
                                        name: "RAWAA ADNAN KHALAF",
                                        aff: "Department of Biotechnology Research Center/Al-Nahrain University, Iraq"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/agriculture-food/af-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'pharmaceutical-sciences': {
        id: 'pharmaceutical-sciences',
        title: 'PeerCite Journal of Pharmaceutical Sciences',
        shortTitle: 'Pharmaceutical Sciences',
        category: 'Science & Technology',
        categoryFilter: 'science-tech',
        badge: 'Science & Tech',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
        abbr: 'PS',
        description: 'PeerCite Journal of Pharmaceutical Sciences publishes high-quality peer-reviewed research in the field.',
        about1: 'PeerCite Journal of Pharmaceutical Sciences is a peer-reviewed scientific journal that publishes original research and reviews in all areas of pharmaceutical sciences.',
        about2: 'PeerCite Journal of Pharmaceutical Sciences is a peer-reviewed scientific journal that publishes original research and reviews in all areas of pharmaceutical sciences.',
        scope: ['Pharmaceutical Sciences'],
        metrics: [
            { value: 'PS', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Pharmaceutical Science: Bridging Bench to Bedside',
                        date: 'June 01 , 2023',
                        articles: [
                            {
                                id: 'ps-v1-i1-a1',
                                authors: [
                                    {
                                        name: 'Dr. Sowmya Sharma',
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultations (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/pharmaceutical-sciences/ps-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Examing the Anticancer Potential of Punica Granatum Linn: a Review',
                        date: ' May 06, 2023',
                        articles: [
                            {
                                id: 'ps-v1-i2-a2',
                                authors: [
                                    {
                                        name: "M. Padmaa Paarakh",
                                        aff: "Department of Pharmacognosy, The Oxford College of Pharmacy, Karnataka, India."
                                    },
                                    {
                                        name: "Preethy Ani Jose",
                                        aff: "Department of Pharmaceutics, The Oxford College of Pharmacy, Karnataka, India."
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/pharmaceutical-sciences/ps-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'The Rising Presence of Multidrug-Resistant Bacteria and Fungi in the Arabian Peninsula',
                        date: 'August 03, 2023',
                        articles: [
                            {
                                id: 'ps-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Sayed AbdulAzeez",
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultations (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/pharmaceutical-sciences/ps-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Identification of Autism Spectrum Disorder-related Variants Through Integration of Transcriptome and Exome Geno Typing',
                        date: ' November 27, 2023',
                        articles: [
                            {
                                id: 'ps-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Sayed AbdulAzeez",
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultations (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-7',
                                pdf: 'assets/pdfs/pharmaceutical-sciences/ps-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Advancements in Drug Delivery Systems: Innovations and Applications',
                        date: 'March 1, 2024',
                        articles: [
                            {
                                id: 'ps-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Sayed AbdulAzeez",
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultations (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/pharmaceutical-sciences/ps-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
        abbr: 'AC',
        description: 'PeerCite Journal of Applied Chemistry publishes high-quality peer-reviewed research in the field.',
        about1: 'PeerCite Journal of Applied Chemistry is a peer-reviewed scientific journal that publishes original research and reviews in all areas of applied chemistry.',
        about2: 'PeerCite Journal of Applied Chemistry is a peer-reviewed scientific journal that publishes original research and reviews in all areas of applied chemistry.',
        scope: ['Applied Chemistry'],
        metrics: [
            { value: 'AC', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Outcomes of Positional And Geometrical Isomerism on The Biological Hobby of Some Novel Oxazolidinones',
                        date: 'February 15, 2023',
                        articles: [
                            {
                                id: 'ac-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Jagattaran Das",
                                        aff: "Discovery Research, Dr. Reddy’s Laboratories Ltd, Miyapur, Hyderabad 500049, India"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/applied-chemistry/ac-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Novel Oral Benzimidazoles Found to be Antagonists of Melanin Concentrating Hormone Receptor 1 (MCHR1)',
                        date: 'April 15, 2023',
                        articles: [
                            {
                                id: 'ac-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Jagattaran Das",
                                        aff: "Discovery Research, Dr. Reddy’s Laboratories Ltd, Miyapur, Hyderabad 500049, India"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/applied-chemistry/ac-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Improving Selective Kappa Opioid Agonists by Optimizing 2-Aminobenzimidazole Hits From in Silico Screening',
                        date: 'September 21, 2023',
                        articles: [
                            {
                                id: 'ac-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Pradip K Sasmal",
                                        aff: "Discovery Research, Dr. Reddy’s Laboratories Ltd, Miyapur, Hyderabad 500049, India"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/applied-chemistry/ac-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Chemical Equilibrium: Balancing Act of Nature',
                        date: 'April 15, 2023',
                        articles: [
                            {
                                id: 'ac-v1-i4-a4',
                                authors: [
                                    {
                                        name: "A Sai Kiran",
                                        aff: "Discovery Research, Dr. Reddy’s Laboratories Ltd, Miyapur, Hyderabad, India"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/applied-chemistry/ac-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'QST',
        description: 'Peer-reviewed research in quantum science and technology from global academic contributors.',
        about1: 'The PeerCite Journal of Quantum Science and Technology publishes high-quality peer-reviewed research in the field.',
        about2: 'We curate and provide open access to impactful research for the global academic community.',
        scope: ['Research and innovation', 'Academic discourse', 'Peer-reviewed studies'],
        metrics: [
            { value: 'QST', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'The Science Of Quantum Cryptography: Harnessing Quantum Mechanical Properties',
                        date: 'February 07, ,2023',
                        articles: [
                            {
                                id: 'qs-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Vijay Kumar",
                                        aff: "Department of Quantum Science, Research group, India"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./quantum-science/v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Innovation at The Frontier: Progress in Quantum Information Science And Technology',
                        date: 'February 07, ,2023',
                        articles: [
                            {
                                id: 'qs-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Sowjanya R",
                                        aff: "Department of Physics, Researcher, India"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./quantum-science/v1-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
        abbr: 'SM',
        description: 'Peer-reviewed research in surgery and medicine from global academic contributors.',
        about1: 'The PeerCite Journal of Surgery and Medicine publishes high-quality peer-reviewed research in the field.',
        about2: 'We curate and provide open access to impactful research for the global academic community.',
        scope: ['Research and innovation', 'Academic discourse', 'Peer-reviewed studies'],
        metrics: [
            { value: 'SM', label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Preoperative Indicators of Ossicular Necrosis in Mucosal Chronic Suppurative Otitis Media',
                        date: 'October 17, 2023',
                        articles: [
                            {
                                id: 'PJSM-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Sowmya",
                                        aff: "Assistant Professor, Department of ENT ,Rajarajeswari Medical College, Bangalore."
                                    },
                                    {
                                        name: " Dr. Sriranga Prasad ",
                                        aff: "Professor, Department of ENT, Rajarajeswari Medical College , Bangalore."
                                    },
                                    {
                                        name: "Dr. Sai Sarath",
                                        aff: "Resident, Department of ENT, Rajarajeswari Medical College , Bangalore."
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/surgery-medicine/PJSM-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Exonic Variation of Asic5 Gene Uncovered by Whole-Genome Sequencing Leads to Recurrent Pregnancy Loss',
                        date: 'February 05, 2023',
                        articles: [
                            {
                                id: 'PJSM-v1-i2-a2',
                                authors: [
                                    {
                                        name: 'Noor B. Almandil',
                                        aff: "Department of Genetic Research,Institute for Research andMedical Consultations, ImamAbdulrahman Bin FaisalUniversity, Dammam, Saudi Arabia"
                                    },
                                    {
                                        name: 'Norah Fahad Alhur',
                                        aff: "Department of Clinical PharmacyResearch, Institute for Researchand Medical Consultations, ImamAbdulrahman Bin FaisalUniversity, Dammam, SaudiArabia"
                                    }
                                ],
                                pages: '1-7',
                                pdf: 'assets/pdfs/surgery-medicine/PJSM-v1-i2-a2.pdf'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'A Study on Migraine in Saudi Arabians Using Pilot Mitochondrial Genome-Wide Association Analysis',
                        date: 'July 08, 2023',
                        articles: [
                            {
                                id: 'PJSM-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Sayed AbdulAzeez",
                                        aff: "Department of Genetic Research,Institute for Research and MedicalConsultations, Imam AbdulrahmanBin Faisal University, Dammam,Saudi Arabia"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/surgery-medicine/PJSM-v1-i3-a3.pdf'
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'The Impact of Gut Microbiota on Cellular Response to Multidrug Resistant Transporter Substrates In Vitro With Focus On P-Glycoprotein',
                        date: 'December 06, 2023',
                        articles: [
                            {
                                id: 'PJSM-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Kalaimathi Govindarajan",
                                        aff: "Department of APC Microbiome Institute, University College Cork, Cork, Ireland"
                                    }
                                ],
                                pages: '1-11',
                                pdf: 'assets/pdfs/surgery-medicine/PJSM-v1-i4-a4.pdf'
                            }
                        ]
                    }
                ]
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
        image: 'https://images.unsplash.com/photo-1534778708147-0dfa1754a1d0?w=800&h=500&fit=crop', abbr: 'ES',
        description: 'Peer-reviewed research in environmental science from global academic contributors.',
        about1: 'Research on climate change, ecological sustainability, and environmental policy from global environmental summits.',
        scope: [
            'Climate Change & Global Warming',
            'Pollution Control & Waste Management',
            'Renewable Energy Systems',
            'Biodiversity & Conservation',
            'Sustainable Agriculture & Food Security',
            'Environmental Policy & Governance',
            'Water Resource Management',
            'Ecological Restoration & Remediation',
            'Environmental Health & Toxicology',
            'Green Technologies & Circular Economy'
        ],
        metrics: [
            { name: 'IF', value: '9.542' },
            { name: 'CiteScore', value: '10.3' },
            { name: 'SJR', value: '2.1' },
            { name: 'SNIP', value: '1.8' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Variability of Sea Ice During the 2007-2008 Canadian International Polar Year Program',
                        date: 'February 09, 2023',
                        articles: [
                            {
                                id: 'es-v1-i1-a1',
                                authors: [
                                    { name: "Dr. Scot Nickels", aff: "Department of Environment, University of Manitoba, MB, Canada" }
                                ],
                                pages: '1-8',
                                pdf: 'assets/pdfs/./environmental-science/es-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Long-term Zooplankton Data Set with Precise Temporal and Spatial Resolution',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'es-v1-i2-a2',
                                authors: [
                                    { name: "Dr. Randy Kerr", aff: "Department of ASL Environmental Sciences Inc., University of British Columbia, Canada" }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./environmental-science/es-v1-i2-a2.pdf'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Change in Sea Ice Trends In The Canadian International Polar Year Program',
                        date: 'February 09, 2023',
                        articles: [
                            {
                                id: 'es-v1-i3-a3',
                                authors: [
                                    { name: "Simon J. Prinsenberg", aff: "Department of Environment, University of Manitoba, MB, Canada" }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/./environmental-science/es-v1-i3-a3.pdf'
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Progress in Renewable Energy: Driving Sustainable Development',
                        date: 'February 09, 2023',
                        articles: [
                            {
                                id: 'es-v1-i4-a4',
                                authors: [
                                    { name: "Vishnu Varma", aff: "Department of Environment,University of Manitoba, Canada" }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./environmental-science/es-v1-i4-a4.pdf'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'obstetrics-gynecology': {
        id: 'obstetrics-gynecology',
        title: 'PeerCite Journal of Obstetrics & Gynecology',
        shortTitle: 'Obstetrics & Gynecology',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
        abbr: 'OBG',
        description: 'Peer-reviewed research in obstetrics and gynecology from around the world.',
        about1: 'Research on pregnancy, childbirth, and women\'s health issues from global obstetric and gynecological conferences.',
        about2: 'Submit your latest obstetric and gynecological research for peer review and publication.',
        about3: 'PeerCite Journal of Obstetrics & Gynecology is a leading journal in the field of obstetrics and gynecology. It publishes original research articles, reviews, case reports, and letters to the editor on all aspects of obstetrics and gynecology.',
        scope: [
            'Pregnancy & Childbirth',
            'Reproductive Health',
            'Gynecological Cancers',
            'Maternal-Fetal Medicine',
            'Neonatology',
            'Infertility & Assisted Reproduction',
            'Women\'s Mental Health',
            'Minimally Invasive Gynecology',
            'Gynecological Endocrinology',
            'Women\'s Health Policy'
        ],
        metrics: [
            { name: 'IF', value: '8.995' },
            { name: 'CiteScore', value: '9.5' },
            { name: 'SJR', value: '1.8' },
            { name: 'SNIP', value: '1.6' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Advancements in Reproductive Endocrinology and Infertility: A Comprehensive Review',
                        date: 'February 17, 2023',
                        articles: [
                            {
                                id: 'og-v1-i1-a1',
                                authors: [
                                    { name: "Dr. Lavanya A", aff: "Department of Gynaecology, Research Group, India" }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./obstetrics-gynecology/og-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Advances in Menopausal Health: Understanding, Management and Quality of Life',
                        date: 'April 17, 2023',
                        articles: [
                            {
                                id: 'og-v1-i2-a2',
                                authors: [
                                    { name: " Vijay V", aff: "Department of Obstetrics and Gynaecology, Research Science, India" }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./obstetrics-gynecology/og-v1-i2-a2.pdf'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Advancements in Maternal-Fetal Medicine: A Comprehensive Overview',
                        date: 'September 24, 2023',
                        articles: [
                            {
                                id: 'og-v1-i3-a3',
                                authors: [
                                    { name: "Nuvvula Anil", aff: "Department of Obstetrics and Gynaecology, Research Science, India" }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./obstetrics-gynecology/og-v1-i3-a3.pdf'
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Enhancing Care in Pregnancy: Strategies, Challenges and Innovations',
                        date: 'November 18, 2023',
                        articles: [
                            {
                                id: 'og-v1-i4-a4',
                                authors: [
                                    { name: "Teja M", aff: "Department of Obstetrics and Gynaecology, Research Science, India" }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./obstetrics-gynecology/og-v1-i4-a4.pdf'
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: '2024',
                issues: [
                    {
                        issue: 1,
                        title: 'Navigating the Complexities of Abortion: An Introduction',
                        date: 'January 22, 2024',
                        articles: [
                            {
                                id: 'og-v1-i1-a1',
                                authors: [
                                    { name: "Naveen P", aff: "Department of Obstetrics and Gynaecology, Research Science,India" }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./obstetrics-gynecology/og-v1-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'CB',
        description: 'PeerCite Journal of Cell Biology is a leading international peer-reviewed journal that publishes high-quality research in all areas of cell biology and related fields.',
        about1: 'PeerCite Journal of Cell Biology is a premier international peer-reviewed journal committed to advancing the frontiers of cellular and molecular research. With a rich history of excellence, the journal serves as a vital platform for scientists worldwide to share groundbreaking discoveries that illuminate the fundamental mechanisms governing cell life, behavior, and interactions. We are dedicated to publishing rigorous, high-impact research that drives innovation across all domains of cell biology, from basic science to translational applications.',
        about2: 'PeerCite Journal of Cell Biology is a trusted source for high-quality research in cell biology and related fields. Our journal is dedicated to publishing original research articles, reviews, and commentaries that make a significant contribution to the understanding of cell biology. We welcome submissions from all areas of cell biology, including cell signaling, cell cycle, apoptosis, cellular metabolism, and membrane trafficking. All submissions are subject to rigorous peer review and must meet the highest standards of scientific quality and integrity.',
        scope: [
            'Cell Signaling and Communication',
            'Cell Cycle and Proliferation',
            'Apoptosis and Cell Death',
            'Cellular Metabolism and Bioenergetics',
            'Membrane Trafficking and Dynamics',
            'Cytoskeleton and Cell Movement',
            'Nuclear Organization and Dynamics',
            'Cellular Stress Responses',
            'Stem Cells and Regenerative Medicine',
            'Cellular Epigenetics and Gene Regulation',
            'Mitochondrial Biology and Dynamics',
            'Extracellular Matrix and Cell Adhesion'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Myh Mutations in Dna Genomic in Different Chromosomal Damage',
                        date: 'February 06, 2023',
                        articles: [
                            {
                                id: 'cb-v1-i1-a1',
                                authors: [
                                    { name: "Dr. Prasad Kovvuru", aff: "Department of Biomedical Sciences, Discovery Dr, Rensselaer, NY. Discovery Dr is in Rensselaer, NY, USA" }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./cell-biology/cb-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Pomegranate Extract in MCF-7 Breast Cancer Cells Effects of Antiproliferative',
                        date: 'February 06, 2023',
                        articles: [
                            {
                                id: 'cb-v1-i2-a2',
                                authors: [
                                    { name: "Prasad Kovvuru", aff: "Department of Biomedical Sciences, Discovery Dr, Rensselaer, NY. Discovery Dr is in Rensselaer, NY, USA" }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/./cell-biology/cb-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Caring for Infants in Diverse Locations',
                        date: 'August 06, 2023',
                        articles: [
                            {
                                id: 'cb-v1-i3-a3',
                                authors: [
                                    { name: "Jorelle Mae T. Buenviaje", aff: "Rory Meyers College of Nursing, New York University, New York, USA." }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/./cell-biology/cb-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Advancements in Cancer Therapy Through Mirna Manipulation',
                        date: 'November 06, 2023',
                        articles: [
                            {
                                id: 'cb-v1-i4-a4',
                                authors: [
                                    { name: "Kiruthika Balasubramanian", aff: "Secretary, New Jersey academy of Science, Kean University, NJ Center for Science & Technology, 1075 Morris Ave, Union, New Jersey, USA" }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./cell-biology/cb-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'CVB',
        description: 'Peer-reviewed research in cardio biology from global academic contributors.',
        about1: 'The journal "Cardio Biology" stands as a premier international platform dedicated to the comprehensive exploration of the cardiovascular system. It serves as a vital conduit for the exchange of high-quality research, innovative ideas, and cutting-edge advancements across the broad spectrum of cardio biology.',
        about2: 'The journal publishes rigorous original research, comprehensive reviews, and thought-provoking editorials. Coverage spans fundamental molecular and cellular mechanisms underlying heart function and disease, to population-level studies on cardiovascular health and prevention. The journal welcomes studies on all aspects of cardiovascular biology.',
        scope: [
            'Cardiovascular Biology',
            'Heart and Vascular Health',
            'Cardiac Physiology',
            'Cardiomyopathy Research',
            'Heart Failure Studies',
            'Vascular Biology and Disease',
            'Cardiac Electrophysiology',
            'Clinical Cardiology',
            'Heart Regeneration',
            'Vascular Medicine',
            'Cardiac Metabolism',
            'Genetic Cardiology',
            'Biomarkers in Cardiovascular Disease',
            'Interventional Cardiology',
            'Preventive Cardiology'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Comparison of Left Ventricular Stroke Volume Assessment Using Two-Dimensional and Three-Dimensional Color Doppler Echocardiography',
                        date: 'February 06, 2023',
                        articles: [
                            {
                                id: 'cab-v1-i1-a1',
                                authors: [
                                    { name: 'Kambiz Shahgald', aff: 'Department of Cardiology and Clinical Physiology, Karolinska University Hospital, Sweden' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./cardio-biology/cab-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Review of Tricuspid Regurgitation in His Bundle Pacing: A Comprehensive Analysis',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'cab-v1-i2-a2',
                                authors: [
                                    { name: 'Jahanzeb Malik', aff: 'Department of Cardiology and Clinical Physiology, Karolinska University Hospital, Sweden' }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./cardio-biology/cab-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Unveiling the Dynamics of Cell Growth in Cardiobiology: Implications for Cardiovascular Health and Regenerative Therapies',
                        date: 'September 05, 2023',
                        articles: [
                            {
                                id: 'cab-v1-i3-a3',
                                authors: [
                                    { name: 'Viswam Kumar', aff: 'Department of Cardiology and Clinical Physiology, Research group, India' }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./cardio-biology/cab-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Metabolism at the Heart of Cardiobiology: Unraveling the Interplay for Cardiovascular Health',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'cab-v1-i4-a4',
                                authors: [
                                    { name: 'Deepak Varma', aff: 'Department of Cardiology, Research center, India' }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./cardio-biology/cab-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'DC',
        description: 'Peer-reviewed research in dermatology and cosmetics from global academic contributors.',
        about1: 'The PeerCite Journal of Dermatology & Cosmetics is an international, peer-reviewed journal dedicated to advancing the science and practice of dermatology and cosmetic dermatology. We publish high-quality original research, case reports, and review articles covering the full spectrum of dermatological science, skin health, and cosmetic innovations.',
        about2: 'We provide a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on skin diseases, wound healing, dermatopathology, aesthetic dermatology, hair and nail disorders, and cosmetic science. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        scope: [
            'Clinical Dermatology',
            'Cosmetic Dermatology',
            'Skin Health',
            'Hair Care',
            'Nail Care',
            'Skin Diseases',
            'Skin Cancer',
            'Skin Infections',
            'Skin Disorders',
            'Skin Problems',
            'Dermatopathology',
            'Aesthetic Dermatology',
            'Wound Healing'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Exploring Hair Health: Insights from Dermatological Perspectives',
                        date: 'August 22, 2023',
                        articles: [
                            {
                                id: 'dc-v1-i1-a1',
                                authors: [
                                    { name: 'A Sai Kiran', aff: 'Department of Dermatology, Psoriasis center, The University of Mumbai, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./dermatology-cosmetics/dc-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'The Marvel of Skin: Exploring its Incredible Functions and Complexities',
                        date: 'April 26, 2023',
                        articles: [
                            {
                                id: 'dc-v1-i2-a2',
                                authors: [
                                    { name: 'Vishnu Vamsi', aff: 'Department of Dermatology, Psoriasis center, The University of Mumbai, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./dermatology-cosmetics/dc-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Exploring Cosmetic Dermatology: Enhancing Appearance and Confidence',
                        date: 'August 21, 2023',
                        articles: [
                            {
                                id: 'dc-v1-i3-a3',
                                authors: [
                                    { name: 'Narendra A', aff: 'Department of Dermatology, Research unit, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./dermatology-cosmetics/dc-v1-i3-a3.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: '2024',
                issues: [
                    {
                        issue: 1,
                        title: 'Understanding Genetic Skin Diseases: A Comprehensive Overview',
                        date: 'January 27, 2024',
                        articles: [
                            {
                                id: 'dc-v2-i1-a1',
                                authors: [
                                    { name: 'Manoj kumar', aff: 'Department of Dermatology, Research Science, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./dermatology-cosmetics/dc-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'NGM',
        description: 'Peer-reviewed research in nanostructured and green materials from global academic contributors.',
        about1: 'The PeerCite Journal of Nanostructured and Green Materials is an international, peer-reviewed journal dedicated to advancing the science and practice of nanostructured and green materials. We publish high-quality original research, case reports, and review articles covering the full spectrum of nanostructured and green materials.',
        about2: 'We provide a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on nanostructured and green materials. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        scope: [
            'Nanostructured Materials',
            'Green Materials',
            'Nanomaterials',
            'Nanocomposites',
            'Nanoparticles',
            'Nanowires',
            'Nanotubes',
            'Nanofibers',
            'Nanostructured Polymers',
            'Nanostructured Ceramics',
            'Nanostructured Metals',
            'Nanostructured Composites',
            'Green Synthesis',
            'Green Materials',
            'Green Technology'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Biomaterials For Drug Delivery In Human Programs',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'nm-v1-i1-a1',
                                authors: [
                                    { name: 'Paolo Trucillo', aff: 'Department of Cardiology, Research center, India' }
                                ],
                                pages: '1-10',
                                pdf: 'assets/pdfs/./nanostructured-materials/nm-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'New Biomaterials For Modern Dentistry',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'nm-v1-i2-a2',
                                authors: [
                                    { name: 'Artak Heboyan', aff: 'Department of Cardiology, Research center, India' }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/./nanostructured-materials/nm-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Advancements In Biomaterials: A Review Of Current Trends And Future Perspectives',
                        date: 'June 05 , 2023',
                        articles: [
                            {
                                id: 'nm-v1-i3-a3',
                                authors: [
                                    { name: 'Vishnu Vamsi', aff: 'Department of Science, Research unit, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./nanostructured-materials/nm-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Exploring Biocompatibility: Understanding Interactions Between Biomaterials and Biological Systems',
                        date: 'June 05, 2023',
                        articles: [
                            {
                                id: 'nm-v1-i4-a4',
                                authors: [
                                    { name: 'Deepak Varma', aff: 'Department of Biomaterials, Research unit, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./nanostructured-materials/nm-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'dental-care': {
        id: 'dental-care',
        title: 'PeerCite Journal of Dental Care, Materials and Marketing',
        shortTitle: 'Advanced Dental Care',
        category: 'Medical Sciences',
        categoryFilter: 'medical',
        badge: 'Medical Sciences',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
        abbr: 'ADC',
        description: 'Peer-reviewed research in advanced dental care from global academic contributors.',
        about1: 'The PeerCite Journal of Advanced Dental Care, Materials and Marketing is an international, peer-reviewed journal dedicated to advancing the science and practice of advanced dental care, materials and marketing. We publish high-quality original research, case reports, and review articles covering the full spectrum of advanced dental care, materials and marketing.',
        about2: 'We provide a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on advanced dental care, materials and marketing. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        scope: [
            'Advanced Dental Care',
            'Dental Materials',
            'Dental Marketing',
            'Advanced Dental Care',
            'Dental Materials',
            'Dental Marketing',
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Advancements and Innovations in Dental Treatments and Procedures: Enhancing Patient Care and Outcomes',
                        date: 'February 09, 2023',
                        articles: [
                            {
                                id: 'dc-v1-i1-a1',
                                authors: [
                                    { name: 'Prathyusha A', aff: 'Department of Dental, Researcher, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./advanced-dental-care/dc-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: "Tele-dentistry: Revolutionizing Access and Delivery of Dental Care",
                        date: 'August 09, 2023',
                        articles: [
                            {
                                id: 'dc-v1-i2-a2',
                                authors: [
                                    { name: 'Yamini Ema', aff: 'Department of Dental, Researcher, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./advanced-dental-care/dc-v1-i2-a2.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: '2024',
                issues: [
                    {
                        issue: 1,
                        title: "Advancements in Biocompatible Materials for Dental Applications: Innovations and Clinical Implications",
                        date: 'February 09, 2024',
                        articles: [
                            {
                                id: 'dc-v2-i1-a1',
                                authors: [
                                    { name: 'Sheik Abdullah', aff: 'Department of Dental, Researcher, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./advanced-dental-care/dc-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'PED',
        description: 'Peer-reviewed research in pediatrics from global academic contributors.',
        about1: 'The PeerCite Journal of Pediatrics is an international, peer-reviewed journal dedicated to advancing the science and practice of pediatrics. We publish high-quality original research, case reports, and review articles covering the full spectrum of pediatrics.',
        about2: 'We provide a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on pediatrics. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        scope: [
            'Pediatrics',
            'Child Health',
            'Neonatal Care',
            'Pediatric Surgery',
            'Pediatric Dentistry',
            'Pediatric Neurology',
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '15.2' },
            { name: 'SJR', value: '2.5' },
            { name: 'SNIP', value: '2.1' }
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: 'Medicine Comparison in Adult and Pediatric',
                        date: 'February 21, 2023',
                        articles: [
                            {
                                id: 'pd-v1-i1-a1',
                                authors: [
                                    { name: 'Lavanya A', aff: 'Department of Pediatrics, Research, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./pediatrics/pd-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: "Young Hearts: A Guide to Children's Cardiovascular Health",
                        date: 'February 21, 2023',
                        articles: [
                            {
                                id: 'pd-v1-i2-a2',
                                authors: [
                                    { name: 'Mark Mani', aff: 'Department of Neonatal, Research Science, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./pediatrics/pd-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Young Hearts: A Guide to Childrens Cardiovascular Health',
                        date: 'July 12, 2023',
                        articles: [
                            {
                                id: 'pd-v1-i3-a3',
                                authors: [
                                    { name: 'Mahesh J', aff: 'Department of Pediatrics, Research, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./pediatrics/pd-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Understanding and Treating Pediatric Infections',
                        date: 'October 12, 2023',
                        articles: [
                            {
                                id: 'pd-v1-i4-a4',
                                authors: [
                                    { name: 'Sravani D', aff: 'Department of Pediatrics, Research, India' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./pediatrics/pd-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: '2024',
                issues: [
                    {
                        issue: 1,
                        title: "Advanced Medical Treatment for Pediatric Patients",
                        date: 'January 15, 2024',
                        articles: [
                            {
                                id: 'pd-v2-i1-a1',
                                authors: [
                                    { name: 'Vamsi M', aff: 'Department of Pediatrics, Research, India' }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/./pediatrics/pd-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'EBI',
        description: 'PeerCite Journal of Entrepreneurship and Business Innovations provides a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on entrepreneurship and business innovations. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        about1: 'We provide a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on entrepreneurship and business innovations. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        about2: 'The journal publishes original research articles, review articles, case studies, and editorials that address significant issues in entrepreneurship and business innovations. The journal welcomes submissions from both established and emerging scholars from around the world.',
        scope: [
            'Entrepreneurship',
            'Business Innovations',
            'Entrepreneurship',
            'Business'],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '12.345' },
            { name: 'SJR', value: '12.345' },
            { name: 'SNIP', value: '12.345' },
        ],
        volumes: [
            {
                volume: 1,
                year: '2023',
                issues: [
                    {
                        issue: 1,
                        title: "Industrial Automation Parameter Identification Of Electric Drives In Environment Of Cloud",
                        date: 'February 18, 2023',
                        articles: [
                            {
                                id: 'eb-v1-i1-a1',
                                authors: [
                                    { name: 'Angela Anguilano', aff: 'DOMENICO SCARAFILE, R&D Engineer, Idea75 srl' }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/./entrepreneurship/eb-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: "Industrial Automation: Enhanced Electric Drive Parameter Identification In The Cloud",
                        date: 'May 06, 2023',
                        articles: [
                            {
                                id: 'eb-v1-i2-a2',
                                authors: [
                                    { name: 'Angela Anguilano', aff: 'DOMENICO SCARAFILE, R&D Engineer, Idea75 srl' }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/./entrepreneurship/eb-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Analyzing Innovative Practices For Driving Business Growth',
                        date: 'September 06, 2023',
                        articles: [
                            {
                                id: 'eb-v1-i3-a3',
                                authors: [
                                    { name: 'Vishnu Varma', aff: 'Department of Economic, Research Group, India' }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/./entrepreneurship/eb-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Methodology For Driving Business Innovations: A Strategic Framework',
                        date: 'September 06, 2023',
                        articles: [
                            {
                                id: 'eb-v1-i4-a4',
                                authors: [
                                    { name: 'Deepak Varma', aff: 'Department of Economic, Research Group, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./entrepreneurship/eb-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'MID',
        description: 'Peer-reviewed research in Microbiology and Infectious Diseases from global academic contributors.',
        about1: 'The PeerCite Journal of Microbiology and Infectious Diseases provides a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on microbiology and infectious diseases. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        about2: 'The journal publishes original research articles, review articles, case studies, and editorials that address significant issues in microbiology and infectious diseases. The journal welcomes submissions from both established and emerging scholars from around the world.',
        scope: [
            'Microbiology',
            'Infectious Diseases',
            'Bacteriology',
            'Virology',
            'Mycology',
            'Parasitology',
            'Antimicrobial Resistance',
            'Epidemiology and Public Health Microbiology',
            'Clinical Microbiology and Infectious Diseases Diagnostics',
            'Immunology and Vaccines',
            'Microbial Pathogenesis and Host-Pathogen Interactions',
            'Environmental and Food Microbiology',
            'Biotechnology and Synthetic Biology',
            'Infectious Disease Outbreaks and Management',
            'Antibiotic Discovery and Development',
            'Microbial Forensics and Biosecurity'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '12.345' },
            { name: 'SJR', value: '12.345' },
            { name: 'SNIP', value: '12.345' },
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Parasitic Infections In Patients With Type 2 Diabetes Mellitus In Benghazi, Libya',
                        date: 'February 15, 2023',
                        articles: [
                            {
                                id: 'mid-v1-i1-a1',
                                authors: [
                                    { name: 'Eman Z Younis', aff: 'Department of Biology, Faculty of Education-Ghemines, University of Benghazi, Benghazi, Libya' },
                                    { name: 'Adela H Elamami', aff: 'Department of Medicine, Faculty of Medicine, University of Benghazi, Benghazi, Libya' },
                                    { name: 'Rugaia MEl-Salem', aff: 'Department of Zoology, Faculty of Science, University of Sebha, Libya' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./microbiology/mid-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Silver Nanoparticles: A Versatile Weapon Against Infections and Cancer',
                        date: 'May 06, 2023',
                        articles: [
                            {
                                id: 'mid-v1-i2-a2',
                                authors: [
                                    { name: 'Ardhendu Kumar Mandal', aff: 'Central Instrumentation Division,CSIR-Indian Institute of Chemical Sciences,Biology, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./microbiology/mid-v1-i2-a2.pdf',
                            }
                        ]
                    }
                ]
            },
            {
                volume: 2,
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Invisible Invaders: Microbiology and the World of Infectious Diseases',
                        date: 'January 28, 2024',
                        articles: [
                            {
                                id: 'mid-v2-i1-a1',
                                authors: [
                                    { name: 'Christiana J', aff: 'Department of Microbiology, University College Cork, Cork, Ireland.' }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/./microbiology/mid-v2-i1-a1.pdf',
                            }
                        ]
                    }
                ]
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
        abbr: 'DP',
        description: 'Peer-reviewed research in Diagnostic Pathology from global academic contributors.',
        about1: 'The PeerCite Journal of Diagnostic Pathology provides a platform for researchers, clinicians, and industry experts to share cutting-edge knowledge on diagnostic pathology. The journal upholds rigorous scientific standards with a commitment to rapid review and publication of impactful research.',
        about2: 'The journal publishes original research articles, review articles, case studies, and editorials that address significant issues in diagnostic pathology. The journal welcomes submissions from both established and emerging scholars from around the world.',
        scope: [
            'Diagnostic Pathology',
            'Pathology',
            'Histopathology',
            'Cytopathology',
            'Immunohistochemistry',
            'Molecular Pathology',
            'Forensic Pathology',
            'Clinical Pathology',
            'Diagnostic Microbiology',
            'Diagnostic Virology',
            'Diagnostic Hematology',
            'Diagnostic Immunology',
            'Diagnostic Toxicology',
            'Diagnostic Genetics',
            'Diagnostic Radiology',
            'Diagnostic Ultrasonography'
        ],
        metrics: [
            { name: 'IF', value: '12.345' },
            { name: 'CiteScore', value: '12.345' },
            { name: 'SJR', value: '12.345' },
            { name: 'SNIP', value: '12.345' },
        ],
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Microrna-9 Inhibition of Cells and Identification of New Mir-9 Object by Transcriptome Profiling with Cancer Cells in Breast',
                        date: 'February 07, 2023',
                        articles: [
                            {
                                id: 'dp-v1-i1-a1',
                                authors: [
                                    { name: 'Dr. Prasad Kovvuru', aff: 'Cancer Research Center, Post-Doctoral Researcher, University at Albany, SUNY Newyork, USA' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./diagnostic-pathology/dp-v1-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'MCF-7 Breast Cancer Cells with Reduced DNA Repair Gene Expression',
                        date: 'March 06, 2023',
                        articles: [
                            {
                                id: 'dp-v1-i2-a2',
                                authors: [
                                    { name: 'Dr. Prasad Kovvuru', aff: 'Department of Health Sciences, Post-Doctoral Research, University at Albany, SUNY New York, USA' }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/./diagnostic-pathology/dp-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Type 2 Diabetes Mellitus in Parasitic Infections Patients Libya',
                        date: 'May 06, 2023',
                        articles: [
                            {
                                id: 'dp-v1-i3-a3',
                                authors: [
                                    { name: 'Eman Z Younis', aff: 'Department of Biology, Faculty of Education-Ghemines, University of Benghazi, Benghazi, Libya' },
                                    { name: 'Adela H Elamami', aff: 'Department of Medicine, Faculty of Medicine, University of Benghazi, Benghazi, Libya' },
                                    { name: 'Rugaia MEl-Salem', aff: 'Department of Zoology, Faculty of Science, University of Sebha, Libya' }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/./diagnostic-pathology/dp-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'A Survey on Knowledge, Attitude, and Practice of Virtual Schooling in Dental Undergraduate and Postgraduate Education',
                        date: 'October 22, 2023',
                        articles: [
                            {
                                id: 'dp-v1-i4-a4',
                                authors: [
                                    { name: 'Lichi Solanki', aff: 'Department of Orthodontics and Dentofacial Orthopaedics, Saveetha Dental College and Hospitals, Saveetha Institute of Medical and Technical Sciences, Saveetha University, Chennai, India' }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/./diagnostic-pathology/dp-v1-i4-a4.pdf',
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Add default volumes structure for other journals (empty for now)
const otherJournalIds = [
    'metaphysics',
    'fisheries-aquatic-studies'
];
const defaultOtherJournals = {
    'metaphysics': { title: 'PeerCite Journal of Metaphysics & Mystery', shortTitle: 'Metaphysics & Mystery', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=500&fit=crop', abbr: 'MM' },
    'fisheries-aquatic-studies': { title: 'PeerCite Journal of Fisheries and Aquatic Studies', shortTitle: 'Fisheries and Aquatic Studies', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop', abbr: 'FAS' }
};
Object.keys(defaultOtherJournals).forEach(id => {
    const base = defaultOtherJournals[id];
    const defaultVolumes = [
        {
            volume: 1,
            year: 2024,
            issues: [
                {
                    issue: 1,
                    title: 'Inaugural Issue',
                    date: 'January 2024',
                    articles: [
                        {
                            id: `${id}-v1-i1-a1`,
                            title: `Research Advances in ${base.shortTitle}`,
                            authors: 'Research Team',
                            pages: '1-20',
                            pdf: `./${id}/v1-i1-a1.pdf`,
                            abstract: 'Sample article abstract. Full content coming soon.'
                        }
                    ]
                }
            ]
        }
    ];
    JOURNALS_DATA[id] = {
        id: id,
        title: base.title,
        shortTitle: base.shortTitle,
        category: base.category,
        categoryFilter: base.categoryFilter,
        badge: base.badge,
        image: base.image,
        description: `Peer-reviewed research in ${base.shortTitle.toLowerCase()} from global academic contributors.`,
        about1: `The ${base.title} publishes high-quality peer-reviewed research in the field.`,
        about2: 'We curate and provide open access to impactful research for the global academic community.',
        scope: ['Research and innovation', 'Academic discourse', 'Peer-reviewed studies'],
        metrics: [
            { value: base.abbr, label: 'Abbreviation' },
            { value: '2024', label: 'Year' },
            { value: 'Open', label: 'Access' },
            { value: 'Peer', label: 'Reviewed' }
        ],
        volumes: defaultVolumes
    };
});

// Expose globally
window.JOURNALS_DATA = JOURNALS_DATA;

/* =====================================================
   IN PRESS DATA
   ===================================================== */
const INPRESS_DATA = [
    {
        id: 'inpress-1',
        title: 'Advanced Testicular Mixed Germ Cell Tumor with Discontinuous Spermatic Cord Metastasis: Expanded Case Report',
        authors: [
            { name: 'M. V. S. Sai Adithya', aff: 'MS GENERAL SURGERY' },
            { name: 'K. A. Mohammed Asif', aff: 'MS GENERAL SURGERY' },
            { name: 'K. Santhosh Kumar', aff: 'MS GENERAL SURGERY' },
            { name: 'Jagadish Guptha', aff: 'MS GENERAL SURGERY' }
        ],
        journal: 'Peercite Journal of Surgery and Medicine',
        journalId: 'peercite-journal-of-surgery-and-medicine',
        date: 'Published: May 04, 2026',
        abstract: 'Testicular germ cell tumors (TGCTs) are the most common solid malignancies in young men and are highly curable with stage-adapted multimodal therapy (Singla et al., 2025; Di Costanzo et al., 2025; Feldman et al., 2008; Gilligan et al., 2019). Mixed germ cell tumors (MGCTs), containing both seminomatous and non-seminomatous elements, often behave aggressively and are treated as non-seminoma (Singla et al., 2025; Gilligan et al., 2019; Chen et al., 2018). Discontinuous spermatic cord involvement has emerged as a distinctive adverse pathological feature linked to advanced stage (Pena et al., 2021; Alì et al., 2020; Sanfrancesco et al., 2018; Portillo, Rais-Bahrami and Magi-Galluzzi, 2022; Verrill et al., 2017).',
        // pages: 'Online First',
        pdf: 'assets/pdfs/surgery-medicine/PJSM-Article.pdf'
    }

];
window.INPRESS_DATA = INPRESS_DATA;


/* =====================================================
   JOURNAL PAGE RENDERER
   ===================================================== */

(function () {
    if (!document.getElementById('journal-hero')) return;

    const params = new URLSearchParams(window.location.search);
    const journalId = params.get('id');
    const journal = JOURNALS_DATA[journalId];

    if (!journal) {
        window.location.href = 'publications.html';
        return;
    }

    document.title = journal.title + ' | PeerCite Publishers';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = journal.description;

    // ---- HERO SECTION ----
    document.getElementById('journal-cover-img').src = journal.image;
    document.getElementById('journal-cover-img').alt = journal.title;
    document.getElementById('journal-breadcrumb').textContent = journal.shortTitle;
    document.getElementById('journal-badge').textContent = journal.badge;
    document.getElementById('journal-title').textContent = journal.title;
    document.getElementById('journal-description').textContent = journal.description;

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

    const scopeEl = document.getElementById('journal-scope');
    scopeEl.innerHTML = `
        <h4 style="margin-bottom:1rem; color:var(--primary);">Topics & Scope</h4>
        <ul class="scope-list">
            ${journal.scope.map(s => `<li><i class='bx bx-check-circle'></i> ${s}</li>`).join('')}
        </ul>
    `;

    // ---- VOLUMES & ISSUES ARTICLES SECTION ----
    renderVolumesAndIssues(journal);

    // ---- OTHER JOURNALS ----
    const otherJournals = Object.values(JOURNALS_DATA)
        .filter(j => j.id !== journal.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const otherGrid = document.getElementById('other-journals-grid');
    if (otherGrid) {
        otherGrid.innerHTML = otherJournals.map(j => `
            <a href="journal.html?id=${j.id}" class="other-journal-card">
                <div class="other-journal-img">
                    <img src="${j.image}" alt="${j.title}" loading="lazy">
                </div>
                <div class="other-journal-info">
                    <span class="other-journal-badge">${j.badge}</span>
                    <h4>${j.title}</h4>
                    <p>${j.description.substring(0, 80)}...</p>
                </div>
            </a>
        `).join('');
    }

})();

/* =====================================================
   RENDER VOLUMES & ISSUES STRUCTURE
   ===================================================== */
function renderVolumesAndIssues(journal) {
    const container = document.getElementById('volumes-container');
    if (!container) return;

    if (!journal.volumes || journal.volumes.length === 0) {
        container.innerHTML = `
            <div class="no-volumes">
                <i class='bx bx-info-circle'></i>
                <p>No volumes published yet. Check back soon!</p>
            </div>
        `;
        return;
    }

    // Sort volumes descending (latest first)
    const sortedVolumes = [...journal.volumes].sort((a, b) => b.volume - a.volume);

    container.innerHTML = sortedVolumes.map((vol, volIndex) => `
        <div class="volume-block">
            <div class="volume-header" onclick="toggleVolume(this)">
                <div class="volume-header-left">
                    <i class='bx bx-folder volume-icon'></i>
                    <div>
                        <h3>Volume ${vol.volume} <span class="volume-year">(${vol.year})</span></h3>
                        <p class="volume-meta">${vol.issues.length} ${vol.issues.length === 1 ? 'Issue' : 'Issues'} Published</p>
                    </div>
                </div>
                <i class='bx bx-chevron-down volume-toggle'></i>
            </div>
            <div class="volume-content ${volIndex === 0 ? 'open' : ''}">
                ${vol.issues.map(issue => renderIssue(journal.id, vol.volume, issue)).join('')}
            </div>
        </div>
    `).join('');
}

function renderIssue(journalId, volumeNum, issue) {
    return `
        <div class="issue-block">
            <div class="issue-header" onclick="toggleIssue(this)">
                <div class="issue-header-left">
                    <span class="issue-badge">Issue ${issue.issue}</span>
                    <div>
                        <h4>${issue.title}</h4>
                        <p class="issue-meta">
                            <i class='bx bx-calendar'></i> ${issue.date}
                            <span class="separator">•</span>
                            <i class='bx bx-file'></i> ${issue.articles.length} ${issue.articles.length === 1 ? 'Article' : 'Articles'}
                        </p>
                    </div>
                </div>
                <i class='bx bx-chevron-down issue-toggle'></i>
            </div>
            <div class="issue-articles">
                ${issue.articles.map(article => renderArticle(article)).join('')}
            </div>
        </div>
    `;
}

function renderArticle(article) {
    const safeTitle = (article.title || 'Article').replace(/'/g, "\\'");
    let authorsHTML = '';
    if (Array.isArray(article.authors)) {
        authorsHTML = article.authors.map((author, index) => {
            const num = index + 1;
            return `<span class="author-item">
                <span class="author-name">${author.name}</span><sup class="aff-trigger" onclick="toggleAffiliation(this.parentElement, event)">${num}</sup>
                <span class="author-affiliation-block">
                    <span class="aff-content">
                        <span class="tooltip-num">${num}</span> ${author.aff}
                    </span>
                </span>
            </span>`;
        }).join(', ');
    } else {
        authorsHTML = article.authors || '';
    }

    return `
        <div class="article-row">
            <div class="article-icon-wrap">
                <i class='bx bx-file-blank'></i>
            </div>
            <div class="article-details">

                <p class="article-authors"><i class='bx bx-user'></i> ${authorsHTML}</p>
                ${article.abstract ? `<p class="article-abstract">${article.abstract}</p>` : ''}
                <div class="article-meta-row">
                    <span><i class='bx bx-bookmark'></i> Pages ${article.pages}</span>
                </div>
            </div>
            <div class="article-actions">
                <a href="${article.pdf}" target="_blank" class="btn-view-pdf" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
                    <i class='bx bx-show'></i> View PDF
                </a>
                <a href="${article.pdf}" download class="btn-download-pdf">
                    <i class='bx bx-download'></i> Download
                </a>
            </div>
        </div>
    `;
}

/* =====================================================
   TOGGLE FUNCTIONS
   ===================================================== */
function toggleVolume(header) {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.volume-toggle');
    content.classList.toggle('open');
    toggle.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleIssue(header) {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.issue-toggle');
    content.classList.toggle('open');
    toggle.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
}

