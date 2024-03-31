'use client';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.scss';

const blurDataURL =
	'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABTAFMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEpDUmKaRWiExlPWkxT1FWSSIKmUUxBUyrWcikGKawqXbTWWsxlZ6garTiq7itYksiopcUVYiwRTSKlIppFYpmliLFSKKTFSIK0TJaJEWp1WmRirCLUsQm2mMtWNtMdakLlORarOKuyCqkgqkMhxRTsUVVwsWKaacTTCayRYlSJUdSJWiEyxGKsoKrR1ZSkyGSYpjin0xqQitKKqSVblqpJQUiKiiimMkLU0mmbqaWqUh3H5qRDVcNUiNVDLsZqwjVTjap0akyWizuprNTN1MZqRIyQ1UkNTSNVZzTQDc0U3NFMdyPdSbqj3UmadiUyYNUiNVcGpFNDNUW0ap1aqiGplNQxtFjfTWao91IzUiGhrtVdzUjmoGNWiGGaKZmiqsK5DRRRTFEcKkWiipZvEnSploorNlMdTWoopIhkT1C1FFaIyYyiiirEf/Z';

export const Description = () => {
	const [hasBorder, setBorder] = useState(false);

	const handleClick = () => setBorder(!hasBorder);

	const cx = classNames.bind(styles);

	const buttonStyles = cx('Description__button', {
		'Description__button--border': hasBorder,
	});
	return (
		<section className={styles.Description}>
			<button onClick={handleClick} className={buttonStyles}>
				<div className={styles.Description__imageContainer}>
					<Image
						src='/images/test-bg.jpeg'
						alt='Hero'
						fill
						placeholder='blur'
						blurDataURL={blurDataURL}

						// quality={20}
					/>
				</div>
			</button>
			<div className={styles.Description__text}>
				<h2>Bring the future today</h2>
				<p>
					Future World: Your Gateway to Tomorrow´s Tech! Dive into a world of
					cutting-edge gadgets and gear. Stay ahead of the curve and redefine
					your digital lifestyle with us.
				</p>
			</div>
		</section>
	);
};
