import Icon, { IconProps } from './Icon';

export default function Left(props: IconProps): JSX.Element {
	return (
		<Icon {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width="1em" height="1em">
				<path
					d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
					fill="currentColor"
				/>
			</svg>
		</Icon>
	);
}
