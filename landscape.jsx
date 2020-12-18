import { run } from 'uebersicht'

const refreshFrequency = false;

function createSpace(ws) {
	run(`/usr/local/bin/yabai -m space --focus ${ws} && /usr/local/bin/landscape`)
}

const render = () => {
	return (
	<div class="screen">
		<link rel="stylesheet" type="text/css" href="/landscape/landscape.css" />
		<div class="landscape">
			<ul>
				<li class="ls1" onClick={function() { createSpace(1) } }></li>
				<li class="ls2" onClick={function() { createSpace(2) } }></li>
				<li class="ls3" onClick={function() { createSpace(3) } }></li>
				<li class="ls4" onClick={function() { createSpace(4) } }></li>
			</ul>
		</div>
	</div>
	)
};

export { refreshFrequency, render };

