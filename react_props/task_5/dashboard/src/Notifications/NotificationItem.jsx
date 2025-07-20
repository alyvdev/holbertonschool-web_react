import React from "react";
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
	const style = { color: type === 'urgent' ? 'red' : 'blue' };
	if (html) {
		return (
			<li data-notification-type={type}
			style={style}
			dangerouslySetInnerHTML={html}></li>
		);
	}
	return (
		<li data-notification-type={type}
		style={style}>{value}</li>
	);
}

// Check type of data props, raise a warning in the console if is't an invalid value
NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	html: PropTypes.shape({
	  __html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: 'default'
};