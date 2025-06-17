export default function MaxWidth({
	children,
	className,
}: {
	children: React.ReactNode
	className: string
}) {
	return (
		<div
			className={`flex-1 mx-auto w-full max-w-7xl flex flex-col items-start ${className} p-8 md:p-24`}
		>
			{children}
		</div>
	)
}
