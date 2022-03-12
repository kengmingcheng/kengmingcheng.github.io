import { Skill, Career, Education, SocialLink } from './interfaces'

export const introTxt: string = `A long journey involved in my life. From exploring classic science to navigating the digital network, My curiosity never stops its paces seeking a new field. Now, I've been working on back-end software development for more than one year, mainly responsible for the SMS telecom system at CIeNet. 
`;

export const SOCIALLINKS: SocialLink[] = [
    {
        iconClass: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/chengkm'
    },
    {
        iconClass: 'fab fa-github',
        link: 'https://github.com/kengmingcheng'
    },
    {
        iconClass: 'fab fa-medium',
        link: 'https://medium.com/@k.m.cheng'
    },
    {
        iconClass: 'fab fa-instagram',
        link: 'https://www.instagram.com/photobykmc'
    },
    {
        iconClass: 'fas fa-envelope',
        link: 'mailto:kengmingcheng@outlook.com'
    }
];

export const SKILLS: Skill[] = [
    {
        skillTitle: 'Softeware Development',
        description: 'Being a backend engineer for developing reliable banking and telecommunications software as well as all-around office app, WorkDo. Combining JavaEE framework and AWS cloud services, we provide the most robust and reliable architecture for web applications.'
    },
    {
        skillTitle: 'Machine Learning',
        description: 'Artificial intelligence has become a popular topic in recent years. I was fortunate to work with Prof. Bauchy for industrial-level datasets which give me insight of real-world analysis. With outstanding high-level APIs such as TensorFlow, I am able to build models for regression problems, picture identifications.'
    },
    {
        skillTitle: 'Chemicals Analysis',
        description: 'From as simple as wire coat to the most complicated organic shellac, we can thoroughly dissect components of those materials with the finest analytical technologies such as GC-MS, LC-MS, and DLS. Multifaceted yet interpretable chemical composition  will be examinated.'
    }
];

export const CAREERS: Career[] = [
    {
        title: "Software Engineer",
        org: "CIeNet",
        location: "Taipei, Taiwan",
        orgLink: "https://www.cienet.com/",
        picLink: 'assets/img/cienet.jpeg',
        dateOfEmployment: "",
        achievements: [
            "• Responsible for distributed systems for telecom SMS processing which requires asynchronous, message-driven and producer-consummer handlings.",
            "Develope WorkDo, an all-around workplace application, with implementations of AWS services such as EC2, S3, Cassandra, Rekognition, etc.",
            "• Involve in garbage collection(GC) tuning and memory management based on in/outbounding traffic and survival rate of living objects. The outcome shows more than 70% reduction of overall GC duration.",
            "• Enhance and simplify Java build process by eliminating 50% redundant syntax as well as correctly implementing concurrent and incremental compilation which accelerates at least 20% of build process.",
            "• Applied skills: Java EE, MySQL, Hibernate",
        ]
    },
    {
        title: "Researcher",
        org: "UCLA",
        location: "Los Angeles, CA",
        orgLink: "https://www.cee.ucla.edu/",
        picLink: 'assets/img/ucla.png',
        dateOfEmployment: "",
        achievements: [
            "• Designed neural network models for prediction of concrete strength, which reached 0.81 of R-squared performance.",
            "• Implemented SHAP analysis for further model interpretability of complexity of neural networks.",
            "• Implemented Integrated Gradients(IG), by which influences represented by gradient change among pixels could be calculated, to research optimal concrete compositions.",
            "• Built custom optimizer for Tensorflow training model based on Levenberg-Marquardt algorithm.",
            "• Constructed AdaNet, which is capable of adding subnetworks to create a diverse ensemble, to achieve higher validation performance. (around 0.05-0.1 of R-squared increment)"
        ]
    }, 
    {
        title: "Applications Engineer",
        org: "Systematic Corp.",
        location: "New Taipei, Taiwan",
        orgLink: "https://www.cienet.com/",
        picLink: 'assets/img/systematic.jpeg',
        dateOfEmployment: "",
        achievements: [
            "• Decoded and analyzed commercial products by using Gas chromatography-mass spectrometry (GC-MS) with pyrolyzer, Liquid chromatography-mass spectrometry (LC-MS), and Dynamic light scattering (DLS).",
            "• Analyzed chemical constitutions of products made by Nanya Technology Corporation.",
            "• Identified compositions of diverse shellac on arts and antiques collected by National Palace Museum."
        ]
    },
    {
        title: "Research Assistant",
        org: "NTU",
        location: "Taipei, Taiwan",
        orgLink: "https://www.ntu.edu.tw/",
        picLink: 'assets/img/ntu.png',
        dateOfEmployment: "",
        achievements: [
            "• Developed ultra-thin silicon wafers with zero waste for solar cells.",
            "• Utilized the mechanics of thermal expansion mismatch to fabricate silicon films with uniform thickness.",
            "• Fabricated 4 inches silicon films with a thickness of 50 micrometers by means of internal mismatch stress.",
            "• Involved in chemical polishing, chemical etching, electroless nickel plating, and screen printing."
        ]
    },
    {
        title: "Graduate Student Researcher",
        org: "NCKU",
        location: "Tainan, Taiwan",
        orgLink: "https://web.ncku.edu.tw/",
        picLink: 'assets/img/ncku.png',
        dateOfEmployment: "",
        achievements: [
            "• Synthesized Janus particles with the ability of self-assembly to trigger the fluorescence resonance energy transfer (FRET) effect.",
            "• Used CVD and CLD to modify surfaces of each hemisphere.",
            "• Exploited analytical instruments including atomic force microscopy (AFM), scanning electron microscopy (SEM), transmission electron microscopy (TEM), and photoluminescence (PL)."
        ]
    },
];

export const EDUCATIONS: Education[] = [
    {
        degree: "Certificate",
        major: 'Applications Programming',
        org: "NTU",
        location: "Los Angeles, CA",
        orgLink: "https://www.uclaextension.edu/",
        picLink: 'assets/img/ucla-e.png',
        achievements: []
    },
    {
        degree: "M.S.",
        major: 'Materials Science & Engineering',
        org: "NCKU",
        location: "Tainan, Taiwan",
        orgLink: "https://web.ncku.edu.tw/",
        picLink: 'assets/img/ncku.png',
        achievements: ["• Thesis: Self-assembly and FRET of Dye-functionalized Janus Particles."]
    },
    {
        degree: "B.S.",
        major: 'Civil Engineering',
        org: "NCTU",
        location: "Hsinchu, Taiwan",
        orgLink: "https://www.nycu.edu.tw/",
        picLink: 'assets/img/nctu.png',
        achievements: ["• Minored in Materials Science & Engineering"]
    },
];