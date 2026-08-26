import { ReactNode } from 'react';
import { ICompany, IRawCompany } from '@types';

export interface ISummaryLine {
	text: string;
	hidden?: boolean;
}

export interface IJob {
	company: ICompany;
	jobTitle: string;
	startDate: string;
	endDate: string | null;
	technologies: string[];
	summary: ISummaryLine[];
	location: string;
}

export interface IRawJob {
	name: IRawCompany;
	company: IRawCompany;
	jobTitle: string;
	startDate: string;
	endDate: string | null;
	skills: Array<{ skill: string }>;
	summary: string[];
}
