import { details } from '@/app/data/details'
import MaxWidth from '@/components/MaxWidth'
import { ArrowLeftIcon, ArrowRightIcon, Home } from 'lucide-react'
import Link from 'next/link'

export default async function Resume({ params }: { params: { id: string } }) {
	const { id } = await params

	const currentRoleIndex = details.roles.findIndex(
		(role) => role.slug === id[0]
	)
	const currentRole = details.roles[currentRoleIndex]

	// Calculate previous and next indices
	const prevIndex = currentRoleIndex > 0 ? currentRoleIndex - 1 : null
	const nextIndex =
		currentRoleIndex < details.roles.length - 1 ? currentRoleIndex + 1 : null

	const prevRole = prevIndex !== null ? details.roles[prevIndex] : null
	const nextRole = nextIndex !== null ? details.roles[nextIndex] : null

	console.log('prevRole', prevRole)
	console.log('nextRole', nextRole)

	return (
		<MaxWidth className='gap-6'>
			<div className='flex justify-between items-center gap-4'>
				{prevRole ? (
					<Link
						href={`/resume/${prevRole.slug}`}
						className='hover:text-gray-500'
					>
						<ArrowLeftIcon size={24} />
					</Link>
				) : (
					<Link href={'/'} className='hover:text-gray-500'>
						<Home size={24} />
					</Link>
				)}
				{nextRole ? (
					<Link
						href={`/resume/${nextRole.slug}`}
						className='hover:text-gray-500'
					>
						<ArrowRightIcon size={24} />
					</Link>
				) : (
					<Link href={'/'} className='hover:text-gray-500'>
						<Home size={24} />
					</Link>
				)}
			</div>
			<div className='flex flex-col gap-2'>
				<span className='text-2xl font-semibold'>
					{currentRole.title} at {currentRole?.company}
				</span>
				<span className=''>
					{currentRole.start} - {currentRole.end ?? 'Present'}
				</span>
				<span className='mt-2'>
					{currentRole.description.split(' Technologies')[0]}
				</span>
			</div>
		</MaxWidth>
	)
}
