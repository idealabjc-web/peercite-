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
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'mh-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Hamide Eygoren",
                                        aff: "Master of Applied Positive Psychology Program, University of Pennsylvania,USA"
                                    }
                                ],
                                pages: '1-17',
                                pdf: 'assets/pdfs/mental-health/mh-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'DNA Damage in Multiple Tissues of Different Genomic Silver Nanoparticles',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'mh-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr.Prasad Kovvuru",
                                        aff: "Department of Health Sciences, Post-Doctoral Research, University at Albany, SUNY New York, USA"
                                    }
                                ],
                                pages: '1-6',
                                pdf: 'assets/pdfs/mental-health/mh-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Psychology and Epidemiology Distress in Human Brain',
                        date: 'September 2023',
                        articles: [
                            {
                                id: 'mh-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr.Angelika Wagner",
                                        aff: "Department of Psychology, Mental Health Center, UK"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/mental-health/mh-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Positive Energy in Psychology Treatment',
                        date: 'September 2023',
                        articles: [
                            {
                                id: 'mh-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Dr.Abdulkarim Kazemzade",
                                        aff: "Founder of Online Psycho Therapy-OPT Co, Ltd, Vietnam"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/mental-health/mh-v1-i4-a4.pdf',
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
                        date: 'April 2024',
                        articles: [
                            {
                                id: 'mh-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Geethika Sharma",
                                        aff: "Founder of Online Psycho Therapy-OPT Co, Ltd, Australia"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/mental-health/mh-v2-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Supporting Young Minds: Promoting Mental Health in Children',
                        date: 'April 2024',
                        articles: [
                            {
                                id: 'mh-v2-i2-a2',
                                authors: [
                                    {
                                        name: "Dr.Suresh V",
                                        aff: "Department of Mental health,Research Group, Australia"
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/mental-health/mh-v2-i2-a2.pdf',
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
                        date: 'June 2023',
                        articles: [
                            {
                                id: 'wl-v1-i1-a1',
                                authors: [
                                    {
                                        name: "Dr. Tejeswi Gidadhubli",
                                        aff: "University of Maryland, Aldie, Virginia, United States."
                                    }
                                ],
                                pages: '1-4',
                                pdf: 'assets/pdfs/womens-leadership/wl-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: "1 (2)",
                        title: 'Nurturing Mental Strength and Fostering Inclusive Leadership in Women',
                        date: 'December 2023',
                        articles: [
                            {
                                id: 'wl-v1-i1(s)-a1',
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
                                pdf: 'assets/pdfs/womens-leadership/wl-v1-i1(s)-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'The Premature Aging of Our Female Clients',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'wl-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Dr. Kokkori Eleftheria",
                                        aff: "Marketing & Management in Cosmetology, National & Kapodistriakon University of Athens, Greece"
                                    }
                                ],
                                pages: '1-2',
                                pdf: './assets/pdfs/womens-leadership/wl-v1-i2-a2.pdf',
                            }
                        ]
                    },

                    {
                        issue: 3,
                        title: 'Impact of Deletion and Sickle-Cell Trait on Ventilatory and Hemodynamic Responses to Maximum Exercise in Young Saudi Women',
                        date: 'December 2023',
                        articles: [
                            {
                                id: 'wl-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Dr. Sayed Abdul Azeez",
                                        aff: "Department of Genetic Research, Institute for Research and Medical Consultation (IRMC), Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia"
                                    }
                                ],
                                pages: '1-6',
                                pdf: './assets/pdfs/womens-leadership/wl-v1-i3-a3.pdf',
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
            //                     pdf: './pdfs/womens-leadership/v2-i1-a1.pdf',
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
            //                     pdf: './pdfs/womens-leadership/v2-i1-a2.pdf',
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
                        date: 'February 2023',
                        articles: [
                            {
                                id: 'ai-v1-i1-a1',
                                authors: [
                                    {
                                        name: 'Erica L',
                                        aff: "Department of Engineering, University of Shanghai for Science and Technology,Shanghai, China"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/ai-ml/ai-v1-i1-a1.pdf',
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Research and Development of Innovative Machine Learning Technology for Reliability Testing Systems',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'ai-v1-i2-a2',
                                authors: [
                                    {
                                        name: "Davide Cascella, Valeria Giardinieri, Mauro Pipponzi, Pietro Serafino",
                                        aff: "Idea75 s.r.l., Eles Semiconductor Equipment S.P.A., Politecnico di Bari"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/ai-ml/ai-v1-i2-a2.pdf',
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Air Quality Based Adaptive AI. Algorithms for Improving the Efficiency of Environmental Regulatory Systems',
                        date: 'August 2023',
                        articles: [
                            {
                                id: 'ai-v1-i3-a3',
                                authors: [
                                    {
                                        name: "Davide Cascella, Valeria Giardinieri, Mauro Pipponzi, Pietro Serafino",
                                        aff: "Idea75 s.r.l., Eles Semiconductor Equipment S.P.A., Politecnico di Bari"
                                    }
                                ],
                                pages: '1-2',
                                pdf: 'assets/pdfs/ai-ml/ai-v1-i3-a3.pdf',
                            }
                        ]
                    },
                    {
                        issue: 4,
                        title: 'Artificial Intelligence in Human Healthcare',
                        date: 'January 2024',
                        articles: [
                            {
                                id: 'ai-v1-i4-a4',
                                authors: [
                                    {
                                        name: "Yamini Devi",
                                        aff: "Department of Artificial Intelligence, Research study, India"
                                    }
                                ],
                                pages: '1-3',
                                pdf: 'assets/pdfs/ai-ml/ai-v1-i4-a4.pdf',
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
                        date: 'January 2024',
                        articles: [
                            {
                                id: 'ai-v2-i1-a1',
                                authors: [
                                    {
                                        name: "Mahesh J",
                                        aff: "Department of Artificial Intelligence, Research study, India"
                                    }
                                ],
                                pages: '1-5',
                                pdf: 'assets/pdfs/ai-ml/ai-v2-i1-a1.pdf',
                            }
                        ]
                    },
                    // {
                    //     issue: 2,
                    //     title: 'Large Language Models',
                    //     date: 'July 2024',
                    //     articles: [
                    //         {
                    //             id: 'ai-v2-i2-a1',
                    //             title: 'Fine-tuning LLMs for Domain-Specific Tasks',
                    //             authors: 'Dr. David Kim',
                    //             pages: '1-30',
                    //             pdf: 'pdfs/ai-ml/v2-i2-a1.pdf',
                    //         },
                    //     ]
                    // },
                    // {
                    //     issue: 3,
                    //     title: 'Inaugural Issue',
                    //     date: 'March 2023',
                    //     articles: [
                    //         {
                    //             id: 'ai-v2-i2-a2',
                    //             title: 'Multimodal AI Systems',
                    //             authors: 'Dr. Yuki Sato, Dr. Paul Werner',
                    //             pages: '31-50',
                    //             pdf: 'pdfs/ai-ml/v2-i2-a2.pdf',
                    //         }
                    //     ]
                    // }
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Prognostic and Validation of Microrna Goals in Animal Genomes',
                        date: 'May 2024',
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
                        date: 'March 2023',
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
                        date: 'August 2023',
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
                        date: 'January 2024',
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'The Impact of Globalisation on Education Systems Worldwide',
                        date: 'May 2024',
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
                        date: 'March 2023',
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
                        date: 'August 2023',
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
                        date: 'January 2024',
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
                        date: 'January 2024',
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
                                pdf: './assets/pdfs/globalization/gt-v2-i1-a1.pdf',
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'One World, One Nation, One Love-A New Social and Economic Organization',
                        date: 'January 2024',
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
                                pdf: './assets/pdfs/globalization/gt-v2-i2-a2.pdf',
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'The Impact of Food On The Human Body: Exploring Future Possibilities',
                        date: 'January 2024',
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
                        date: 'April 2024',
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
                        date: 'July 2024',
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
                        date: 'October 2024',
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
                        date: 'January 2024',
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Pharmaceutical Science: Bridging Bench to Bedside',
                        date: 'January 2024',
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
                        date: 'April 2024',
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
                        date: 'July 2024',
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
                        date: 'October 2024',
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
                        date: 'January 2024',
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Outcomes of Positional And Geometrical Isomerism on The Biological Hobby of Some Novel Oxazolidinones',
                        date: 'January 2024',
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
                        date: 'April 2024',
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
                        date: 'July 2024',
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
                        date: 'October 2024',
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

};
// Add default volumes structure for other journals (empty for now)
const otherJournalIds = [
    'quantum-science', 'surgery-medicine', 'environmental-sciences',
    'obstetrics-gynecology', 'cell-biology', 'cardio-biology', 'dermatology-cosmetics',
    'veterinary-science', 'nanostructured-materials', 'dental-care',
    'pediatrics',
    'entrepreneurship', 'microbiology', 'metaphysics', 'diagnostic-pathology',
    'fisheries-aquatic-studies'
];
const defaultOtherJournals = {
    'quantum-science': { title: 'PeerCite Journal of Quantum Science and Technology', shortTitle: 'Quantum Science & Tech', category: 'Science & Technology', categoryFilter: 'science-tech', badge: 'Science & Tech', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop', abbr: 'QST' },
    'surgery-medicine': { title: 'PeerCite Journal of Surgery and Medicine', shortTitle: 'Surgery & Medicine', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop', abbr: 'SM' },
    'environmental-sciences': { title: 'PeerCite Journal of Environmental Sciences', shortTitle: 'Environmental Sciences', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop', abbr: 'ES' },
    'obstetrics-gynecology': { title: 'PeerCite Journal of Obstetrics and Gynecology', shortTitle: 'Obstetrics & Gynecology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop', abbr: 'OBG' },
    'cell-biology': { title: 'PeerCite Journal of Cell Biology', shortTitle: 'Cell Biology', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop', abbr: 'CB' },
    'cardio-biology': { title: 'PeerCite Journal of Cardio Biology', shortTitle: 'Cardio Biology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop', abbr: 'CVB' },
    'dermatology-cosmetics': { title: 'PeerCite Journal of Dermatology & Cosmetics', shortTitle: 'Dermatology & Cosmetics', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=500&fit=crop', abbr: 'DC' },
    'veterinary-science': { title: 'PeerCite Journal of Veterinary Science', shortTitle: 'Veterinary Science', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=500&fit=crop', abbr: 'VS' },
    'nanostructured-materials': { title: 'PeerCite Journal of Nanostructured and Green Materials', shortTitle: 'Nanostructured & Green Materials', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop', abbr: 'NGM' },
    'dental-care': { title: 'PeerCite Journal of Advanced Dental Care, Materials and Marketing', shortTitle: 'Advanced Dental Care', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop', abbr: 'ADC' },
    'pediatrics': { title: 'PeerCite Journal of Pediatrics', shortTitle: 'Pediatrics', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&h=500&fit=crop', abbr: 'PED' },
    'entrepreneurship': { title: 'PeerCite Journal of Entrepreneurship and Business Innovations', shortTitle: 'Entrepreneurship & Business', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop', abbr: 'EBI' },
    'microbiology': { title: 'PeerCite Journal of Microbiology and Infectious Diseases', shortTitle: 'Microbiology & Infectious Diseases', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop', abbr: 'MID' },
    'metaphysics': { title: 'PeerCite Journal of Metaphysics & Mystery', shortTitle: 'Metaphysics & Mystery', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=500&fit=crop', abbr: 'MM' },
    'diagnostic-pathology': { title: 'PeerCite Journal of Diagnostic Pathology', shortTitle: 'Diagnostic Pathology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop', abbr: 'DP' },
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
                            pdf: `./assets/pdfs/${id}/v1-i1-a1.pdf`,
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
                <button class="btn-view-pdf" onclick="viewPDF('${article.pdf}', '${safeTitle}')">
                    <i class='bx bx-show'></i> View PDF
                </button>
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

/* =====================================================
   PDF VIEWER
   ===================================================== */
function viewPDF(pdfUrl, title) {
    // Create modal if doesn't exist
    let modal = document.getElementById('pdf-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'pdf-modal';
        modal.className = 'pdf-modal';
        modal.innerHTML = `
            <div class="pdf-modal-content">
                <div class="pdf-modal-header">
                    <h3 id="pdf-modal-title"></h3>
                    <button class="pdf-modal-close" onclick="closePDF()">
                        <i class='bx bx-x'></i>
                    </button>
                </div>
                <div class="pdf-modal-body">
                    <iframe id="pdf-viewer" src="" frameborder="0"></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('pdf-modal-title').textContent = title;
    document.getElementById('pdf-viewer').src = pdfUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePDF() {
    const modal = document.getElementById('pdf-modal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('pdf-viewer').src = '';
        document.body.style.overflow = '';
    }
}

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePDF();
});