document.querySelectorAll('.metric').forEach(function(elem) {
	const ratio = elem.getAttribute('data-ratio');
	const svg = elem.querySelector('svg');
	const perc = elem.querySelector('text.percentage');
	animate_arc(ratio, svg, perc);
});

function polar_to_cartesian(cx, cy, radius, angle) {
	const radians = (angle - 90) * Math.PI / 180.0;
	return [
		Math.round((cx + radius * Math.cos(radians)) * 100) / 100,
		Math.round((cy + radius * Math.sin(radians)) * 100) / 100
	];
}

function svg_circle_arc_path(x, y, radius, start_angle, end_angle) {
	const start_xy = polar_to_cartesian(x, y, radius, end_angle);
	const end_xy = polar_to_cartesian(x, y, radius, start_angle);
	return (
		'M ' + start_xy[0] + ' ' + start_xy[1] + ' A ' + radius + ' ' + radius + ' 0 0 0 ' + end_xy[0] + ' ' + end_xy[1]
	);
}

function animate_arc(ratio, svg, perc) {
	const arc = svg.querySelectorAll('path')[1];
	const val = parseFloat(ratio);
	const path = svg_circle_arc_path(500, 500, 450, -90, val * 180.0 - 90);
	arc.setAttribute('d', path);
	arc.setAttribute('class', 'data-arc');
	perc.innerHTML = Math.round(val * 100) + '%';
}
