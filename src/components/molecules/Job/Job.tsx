import { IJob } from '@types';

import { format } from 'date-fns';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Box } from 'Atoms/Box';

interface JobProps extends Omit<IJob, 'description'> {
	children: any;
}

const Job: FC<IJob> = ({
	company,
	jobTitle,
	startDate,
	endDate,
	technologies,
	summary,
}) => {
	return (
		<Box>
			<div className="flex gap-4 items-start md:items-center">
				{company.logo && (
					<Image
						src={`/assets/companies/${company.logo}.png`}
						alt={company.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="w-full mb-2">
					<div className="flex flex-col-reverse md:flex-row justify-between">
						<h3 className="font-bold">{jobTitle}</h3>
						<span className="text-sm md:text-base">
							{`${format(new Date(startDate), 'MMM yyyy')} — ${
								endDate ? format(new Date(endDate), 'MMM yyyy') : 'present'
							}`}
						</span>
					</div>
					<h4>
						{company.url ? (
							<a
								href={company.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{company.name} - ({company.city}) - {company.country}
							</a>
						) : (
							<>
								{company.name} - ({company.city}) - {company.country}
							</>
						)}
					</h4>
					<p className="hidden md:block text-sm">
						<strong>Stack: </strong>
						{technologies.join(', ')}
					</p>
				</div>
			</div>
			<p className="md:hidden text-sm">
				<strong>Stack: </strong>
				{technologies.join(', ')}
			</p>

			<ul className="list-disc ml-4 mt-4">
				{summary
					.filter((line) => !line.hidden)
					.map((line) => (
						<li className="mt-1" key={line.text}>
							{line.text}
						</li>
					))}
			</ul>
		</Box>
	);
};

export { Job };
