import { Link, MailIcon, PhoneIcon } from 'lucide-react'
import MaxWidth from '@/components/MaxWidth'
import { GitHubIcon } from './icons/GithubIcon'
import { LinkedInIcon } from './icons/LinkedinIcon'
import { Button } from '@/components/ui/button'
import { details } from './data/details'

export default function Home() {
	return (
		<MaxWidth className='justify-between'>
			<div id='title' className='flex flex-col items-start gap-2'>
				<div className='flex items-end gap-2'>
					<h1 className='text-5xl font-bold text-blue-700'>Alex Sherman</h1>
					<span className='text-xl font-bold'>Software Engineer</span>
				</div>
				<div className='flex flex-col items-start gap-2'>
					<div className='flex gap-2'>
						<Button variant='outline' asChild>
							<a href='mailto:asherman.ca@gmail.com'>
								<MailIcon className='w-6 h-6' />
							</a>
						</Button>
						<Button variant='outline' asChild>
							<a href='tel:4156520317'>
								<PhoneIcon className='w-6 h-6' />
							</a>
						</Button>
						<Button variant='outline' asChild>
							<a
								href='https://www.linkedin.com/in/alex-sherman-1ba03649/'
								target='_blank'
							>
								<LinkedInIcon className='w-6 h-6' />
							</a>
						</Button>
						<Button variant='outline' asChild>
							<a href='https://github.com/asherman-ca' target='_blank'>
								<GitHubIcon className='w-6 h-6' />
							</a>
						</Button>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<div id='roles' className='flex flex-col gap-0.5'>
					{details.roles.map((role) => (
						<a
							key={role.company}
							className='flex gap-1 hover:-translate-x-[10px] transition-transform cursor-pointer'
							href={`/resume/${role.slug}`}
						>
							<div className='font-semibold'>{role.company}</div>
							<div className='font-light text-muted-foreground'>
								{role.title}
							</div>
						</a>
					))}
				</div>

				<div id='projects'>projects</div>
			</div>
		</MaxWidth>
	)
}
