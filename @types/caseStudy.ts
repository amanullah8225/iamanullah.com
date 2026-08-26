
import { IImage, IRawCompany } from '@types';

export interface ICaseStudy {
	id: string;
	slug: string;
	seoDescription: string;
	title: string;
	projectUrl?: string;
	client: {
		name: string;
		logo?: string;
	};
	content: string;
	technologies: string[];
	primaryImage?: string;
	secondaryImages?: string[];
	/** Excludes this project from the resume's "Selected Projects" section. It still appears on the case studies page. */
	hidden?: boolean;
}

export interface IRawCaseStudy {
	id: string;
	title: string;
	slug: string;
	seoDescription: string;
	projectUrl?: string;
	client: IRawCompany;
	content: {
		raw: string;
	};
	technologies: Array<{ skill: string }>;
	primaryImage: IImage;
	secondaryImages: IImage[];
}
