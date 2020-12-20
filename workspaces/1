import { run } from 'uebersicht'

const refreshFrequency = false;

function selectSpace(ws) {
	run(`/usr/local/bin/yabai -m space --focus ${ws} && /usr/local/bin/landscape`)
}

function addSpace(ws) {
	run(`/usr/local/bin/yabai -m space --create && /usr/local/bin/yabai -m space --focus ${ws} && /usr/local/bin/landscape`)
}

function deleteSpace() {
	run(`/usr/local/bin/yabai -m space --destroy && /usr/local/bin/landscape`)
}

const render = () => {
	return (
	<div class="screen">
		<link rel="stylesheet" type="text/css" href="/landscape/landscape.css" />
		<link rel="stylesheet" type="text/css" href="/landscape/.cache/current.css" />
		<div class="landscape">
			<ul>
				<li class="ls1" onClick={function() { selectSpace(1) } }></li>
				<li class="add" onClick={function() { addSpace(2) } } onContextMenu={function() { deleteSpace() } }>+</li>
			</ul>
		</div>
	</div>
	)
};

export { refreshFrequency, render };

