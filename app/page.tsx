import MaxWidth from './components/MaxWidth'

export default function Home() {
	return (
		<MaxWidth className='justify-between'>
			<div id='title' className='flex flex-col items-start gap-4'>
				<h1 className='text-5xl font-bold text-blue-400'>Alex Sherman</h1>
				<div className='flex flex-col items-start'>
					<span className='text-blue-400 text-xl font-bold'>
						Software Engineer
					</span>
					<div>contact buttons</div>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<div id='roles'>roles</div>

				<div id='projects'>projects</div>
			</div>
		</MaxWidth>
	)
}
