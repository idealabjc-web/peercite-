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
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'mh-v1-i1-a1',
                                title: 'Modern Approaches to Depression Treatment',
                                authors: 'Dr. Sarah Mitchell, Dr. James Chen',
                                pages: '1-15',
                                pdf: 'assets/pdfs/mental-health/mh-v1-i1-a1.pdf',
                                abstract: 'An extensive review of contemporary treatment modalities for major depressive disorder.'
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'mh-v1-i1-a2',
                                title: 'Anxiety Disorders in Adolescents',
                                authors: 'Dr. Emily Rodriguez',
                                pages: '16-32',
                                pdf: 'pdfs/mental-health/v1-i1-a2.pdf',
                                abstract: 'Research on emerging anxiety patterns among teenagers in the post-pandemic era.'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Digital Mental Health',
                        date: 'September 2023',
                        articles: [
                            {
                                id: 'mh-v1-i2-a1',
                                title: 'Telepsychiatry: The New Frontier',
                                authors: 'Dr. Michael Brown, Dr. Lisa Wang',
                                pages: '1-20',
                                pdf: 'pdfs/mental-health/v1-i2-a1.pdf',
                                abstract: 'How telepsychiatry is reshaping mental healthcare delivery.'
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
                        title: 'Global Mental Health Summit',
                        date: 'April 2024',
                        articles: [
                            {
                                id: 'mh-v2-i1-a1',
                                title: 'Cross-Cultural Perspectives on Mental Wellness',
                                authors: 'Dr. Raj Patel, Dr. Ana Silva',
                                pages: '1-18',
                                pdf: 'pdfs/mental-health/v2-i1-a1.pdf',
                                abstract: 'Examining mental health frameworks across diverse cultures.'
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Global Mental Health Summit',
                        date: 'April 2024',
                        articles: [
                            {
                                id: 'mh-v2-i1-a2',
                                title: 'PTSD Treatment Innovations',
                                authors: 'Dr. Robert Johnson',
                                pages: '19-35',
                                pdf: 'pdfs/mental-health/v2-i1-a2.pdf',
                                abstract: 'New therapeutic approaches for post-traumatic stress disorder.'
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
                        title: 'Foundations of Leadership',
                        date: 'June 2023',
                        articles: [
                            {
                                id: 'wl-v1-i1-a1',
                                title: 'Breaking the Glass Ceiling: Executive Women in Fortune 500',
                                authors: 'Dr. Jennifer Adams, Dr. Maria Gonzalez',
                                pages: '1-22',
                                pdf: 'pdfs/womens-leadership/v1-i1-a1.pdf',
                                abstract: 'A decade of progress in female executive representation.'
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'wl-v1-i1-a2',
                                title: 'Mentorship Programs for Women Leaders',
                                authors: 'Dr. Priya Sharma',
                                pages: '23-40',
                                pdf: 'pdfs/womens-leadership/v1-i1-a2.pdf',
                                abstract: 'Impact of structured mentorship on women in corporate leadership.'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Women in STEM',
                        date: 'December 2023',
                        articles: [
                            {
                                id: 'wl-v1-i2-a1',
                                title: 'Closing the Gender Gap in Technology',
                                authors: 'Dr. Chen Wei, Dr. Rebecca Lee',
                                pages: '1-25',
                                pdf: 'pdfs/womens-leadership/v1-i2-a1.pdf',
                                abstract: 'Strategies for increasing female representation in tech industries.'
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
                        title: 'Global Women Leaders Forum',
                        date: 'March 2024',
                        articles: [
                            {
                                id: 'wl-v2-i1-a1',
                                title: 'Women Leadership in Emerging Economies',
                                authors: 'Dr. Fatima Al-Hassan, Dr. Grace Okonkwo',
                                pages: '1-30',
                                pdf: 'pdfs/womens-leadership/v2-i1-a1.pdf',
                                abstract: 'Analysis of women leaders driving change in developing nations.'
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'wl-v2-i1-a2',
                                title: 'Digital Leadership and Remote Teams',
                                authors: 'Dr. Anna Kowalski',
                                pages: '31-48',
                                pdf: 'pdfs/womens-leadership/v2-i1-a2.pdf',
                                abstract: 'How women leaders excel in virtual workplace environments.'
                            }
                        ]
                    }
                ]
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
        volumes: [
            {
                volume: 1,
                year: 2023,
                issues: [
                    {
                        issue: 1,
                        title: 'Deep Learning Advances',
                        date: 'February 2023',
                        articles: [
                            {
                                id: 'ai-v1-i1-a1',
                                title: 'Transformer Architectures: A Comprehensive Review',
                                authors: 'Dr. Alan Turing, Dr. Sofia Vasquez',
                                pages: '1-28',
                                pdf: 'pdfs/ai-ml/v1-i1-a1.pdf',
                                abstract: 'Deep dive into modern transformer models and their applications.'
                            },
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'ai-v1-i1-a2',
                                title: 'Generative AI: Opportunities and Ethical Concerns',
                                authors: 'Dr. Kenji Tanaka',
                                pages: '29-45',
                                pdf: 'pdfs/ai-ml/v1-i1-a2.pdf',
                                abstract: 'Balancing innovation with responsibility in generative AI.'
                            }
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Computer Vision',
                        date: 'August 2023',
                        articles: [
                            {
                                id: 'ai-v1-i2-a1',
                                title: 'Real-time Object Detection in Autonomous Vehicles',
                                authors: 'Dr. Lars Hansen',
                                pages: '1-22',
                                pdf: 'pdfs/ai-ml/v1-i2-a1.pdf',
                                abstract: 'State-of-the-art computer vision for self-driving cars.'
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
                        title: 'AI in Healthcare',
                        date: 'January 2024',
                        articles: [
                            {
                                id: 'ai-v2-i1-a1',
                                title: 'Machine Learning for Early Disease Detection',
                                authors: 'Dr. Ravi Kumar, Dr. Elena Petrova',
                                pages: '1-24',
                                pdf: 'pdfs/ai-ml/v2-i1-a1.pdf',
                                abstract: 'How AI is revolutionizing diagnostic medicine.'
                            }
                        ]
                    },
                    {
                        issue: 2,
                        title: 'Large Language Models',
                        date: 'July 2024',
                        articles: [
                            {
                                id: 'ai-v2-i2-a1',
                                title: 'Fine-tuning LLMs for Domain-Specific Tasks',
                                authors: 'Dr. David Kim',
                                pages: '1-30',
                                pdf: 'pdfs/ai-ml/v2-i2-a1.pdf',
                                abstract: 'Techniques for specialized LLM deployment.'
                            },
                        ]
                    },
                    {
                        issue: 3,
                        title: 'Inaugural Issue',
                        date: 'March 2023',
                        articles: [
                            {
                                id: 'ai-v2-i2-a2',
                                title: 'Multimodal AI Systems',
                                authors: 'Dr. Yuki Sato, Dr. Paul Werner',
                                pages: '31-50',
                                pdf: 'pdfs/ai-ml/v2-i2-a2.pdf',
                                abstract: 'Integrating vision, language, and audio in unified models.'
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
                year: 2024,
                issues: [
                    {
                        issue: 1,
                        title: 'Brain-Computer Interfaces',
                        date: 'May 2024',
                        articles: [
                            {
                                id: 'ns-v1-i1-a1',
                                title: 'Advances in Neural Prosthetics',
                                authors: 'Dr. Stephen Walsh, Dr. Aisha Khan',
                                pages: '1-26',
                                pdf: 'pdfs/neuroscience/v1-i1-a1.pdf',
                                abstract: 'Latest breakthroughs in brain-machine interface technology.'
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
    'globalization', 'quantum-science', 'surgery-medicine', 'environmental-sciences',
    'obstetrics-gynecology', 'cell-biology', 'cardio-biology', 'dermatology-cosmetics',
    'blockchain', 'veterinary-science', 'nanostructured-materials', 'dental-care',
    'pediatrics', 'agriculture-food', 'pharmaceutical-sciences', 'applied-chemistry',
    'entrepreneurship', 'microbiology', 'metaphysics', 'diagnostic-pathology',
    'fisheries-aquatic-studies'
];

// Minimal data for other journals
const defaultOtherJournals = {
    'globalization': { title: 'PeerCite Journal of Globalization, Societies and Education', shortTitle: 'Globalization & Education', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop', abbr: 'GSE' },
    'quantum-science': { title: 'PeerCite Journal of Quantum Science and Technology', shortTitle: 'Quantum Science & Tech', category: 'Science & Technology', categoryFilter: 'science-tech', badge: 'Science & Tech', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop', abbr: 'QST' },
    'surgery-medicine': { title: 'PeerCite Journal of Surgery and Medicine', shortTitle: 'Surgery & Medicine', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop', abbr: 'SM' },
    'environmental-sciences': { title: 'PeerCite Journal of Environmental Sciences', shortTitle: 'Environmental Sciences', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop', abbr: 'ES' },
    'obstetrics-gynecology': { title: 'PeerCite Journal of Obstetrics and Gynecology', shortTitle: 'Obstetrics & Gynecology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop', abbr: 'OBG' },
    'cell-biology': { title: 'PeerCite Journal of Cell Biology', shortTitle: 'Cell Biology', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop', abbr: 'CB' },
    'cardio-biology': { title: 'PeerCite Journal of Cardio Biology', shortTitle: 'Cardio Biology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop', abbr: 'CVB' },
    'dermatology-cosmetics': { title: 'PeerCite Journal of Dermatology & Cosmetics', shortTitle: 'Dermatology & Cosmetics', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=500&fit=crop', abbr: 'DC' },
    'blockchain': { title: 'PeerCite Journal of Blockchain and Cryptocurrencies', shortTitle: 'Blockchain & Crypto', category: 'Science & Technology', categoryFilter: 'science-tech', badge: 'Science & Tech', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', abbr: 'BC' },
    'veterinary-science': { title: 'PeerCite Journal of Veterinary Science', shortTitle: 'Veterinary Science', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=500&fit=crop', abbr: 'VS' },
    'nanostructured-materials': { title: 'PeerCite Journal of Nanostructured and Green Materials', shortTitle: 'Nanostructured & Green Materials', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop', abbr: 'NGM' },
    'dental-care': { title: 'PeerCite Journal of Advanced Dental Care, Materials and Marketing', shortTitle: 'Advanced Dental Care', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop', abbr: 'ADC' },
    'pediatrics': { title: 'PeerCite Journal of Pediatrics', shortTitle: 'Pediatrics', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&h=500&fit=crop', abbr: 'PED' },
    'agriculture-food': { title: 'PeerCite Journal of Agriculture and Food Research', shortTitle: 'Agriculture & Food Research', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop', abbr: 'AFR' },
    'pharmaceutical-sciences': { title: 'PeerCite Journal of Pharmaceutical Sciences', shortTitle: 'Pharmaceutical Sciences', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop', abbr: 'PS' },
    'applied-chemistry': { title: 'PeerCite Journal of Applied Chemistry', shortTitle: 'Applied Chemistry', category: 'Science & Technology', categoryFilter: 'science-tech', badge: 'Science & Tech', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop', abbr: 'AC' },
    'entrepreneurship': { title: 'PeerCite Journal of Entrepreneurship and Business Innovations', shortTitle: 'Entrepreneurship & Business', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop', abbr: 'EBI' },
    'microbiology': { title: 'PeerCite Journal of Microbiology and Infectious Diseases', shortTitle: 'Microbiology & Infectious Diseases', category: 'Life Sciences', categoryFilter: 'life', badge: 'Life Sciences', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop', abbr: 'MID' },
    'metaphysics': { title: 'PeerCite Journal of Metaphysics & Mystery', shortTitle: 'Metaphysics & Mystery', category: 'Social Sciences', categoryFilter: 'social', badge: 'Social Sciences', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=500&fit=crop', abbr: 'MM' },
    'diagnostic-pathology': { title: 'PeerCite Journal of Diagnostic Pathology', shortTitle: 'Diagnostic Pathology', category: 'Medical Sciences', categoryFilter: 'medical', badge: 'Medical Sciences', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop', abbr: 'DP' },
    'fisheries-aquatic-studies': { title: 'PeerCite Journal of Fisheries and Aquatic Studies', shortTitle: 'Fisheries and Aquatic Studies', category: 'Environmental Sciences', categoryFilter: 'environmental', badge: 'Environmental Sciences', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop', abbr: 'FAS' }
};

// Fill in the rest of the journals with default structure
Object.keys(defaultOtherJournals).forEach(id => {
    const base = defaultOtherJournals[id];
    JOURNALS_DATA[id] = {
        id: id,
        title: base.title,
        shortTitle: base.shortTitle,
        category: base.category,
        categoryFilter: base.categoryFilter,
        badge: base.badge,
        image: base.image,
        description: `Peer-reviewed research in ${base.shortTitle.toLowerCase()} from leading international conferences.`,
        about1: `The ${base.title} publishes research from premier conferences and symposiums in the field.`,
        about2: 'We curate high-quality research and make it freely accessible to the global academic community.',
        scope: ['Research and innovation', 'Academic discourse', 'Conference proceedings', 'Peer-reviewed studies'],
        metrics: [
            { value: base.abbr, label: 'Abbreviation' },
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
                        title: 'Inaugural Issue',
                        date: 'January 2024',
                        articles: [
                            {
                                id: `${id}-v1-i1-a1`,
                                title: `Research Advances in ${base.shortTitle}`,
                                authors: 'Research Team',
                                pages: '1-20',
                                pdf: `pdfs/${id}/v1-i1-a1.pdf`,
                                abstract: 'Sample article abstract. Full content coming soon.'
                            }
                        ]
                    }
                ]
            }
        ]
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
    return `
        <div class="article-row">
            <div class="article-icon-wrap">
                <i class='bx bx-file-blank'></i>
            </div>
            <div class="article-details">
                <h5>${article.title}</h5>
                <p class="article-authors"><i class='bx bx-user'></i> ${article.authors}</p>
                <p class="article-abstract">${article.abstract}</p>
                <div class="article-meta-row">
                    <span><i class='bx bx-bookmark'></i> Pages ${article.pages}</span>
                </div>
            </div>
            <div class="article-actions">
                <button class="btn-view-pdf" onclick="viewPDF('${article.pdf}', '${article.title.replace(/'/g, "\\'")}')">
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