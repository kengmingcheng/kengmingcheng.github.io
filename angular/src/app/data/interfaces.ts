export interface Skill {
    skillTitle: string;
    description: string;
}

export interface experience {
    
    org: string;
    location: string;
    description?: string;
    orgLink?: string;
    picLink?: string;
}

export interface Career extends experience {
    title: string;
    dateOfEmployment: string;
    achievements: string[];
}

export interface Education extends experience {
    degree: string;
    major: string;
    achievements: string[];
}

export interface socialLink {
    iconClass?: string;
    link: string;
}