import { details } from '@/app/data/details'
import MaxWidth from '@/components/MaxWidth'
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
		<MaxWidth>
			<div className='min-h-screen flex flex-col'>
				{/* Main content */}
				<div className='flex-1'>{currentRole?.company}</div>

				{/* Navigation */}
				<div className='flex justify-between items-center py-8 border-t'>
					{prevRole ? (
						<Link
							href={`/resume/${prevRole.slug}`}
							className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							{prevRole.company}
						</Link>
					) : (
						<div className='px-4 py-2 text-sm text-gray-400'>Previous</div>
					)}

					{nextRole ? (
						<Link
							href={`/resume/${nextRole.slug}`}
							className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							{nextRole.company}
							<svg
								className='w-4 h-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</Link>
					) : (
						<div className='px-4 py-2 text-sm text-gray-400'>Next</div>
					)}
				</div>
			</div>
		</MaxWidth>
	)
}
