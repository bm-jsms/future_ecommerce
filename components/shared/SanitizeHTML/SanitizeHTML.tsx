import { HTMLAttributes, createElement } from 'react';
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
	tag: string;
	children: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({
	tag,
	children,
	...props
}: SanitizeHTMLProps) => {
	const sanitizedHtml = sanitize(children, {
		allowedTags: ['b', 'i', 'em', 'strong', 'ul', 'li'],
	});

	return createElement(tag, { ...props }, sanitizedHtml);
};
