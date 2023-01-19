'use strict';
const React = require('react');
const {Text, Color, Box} = require('ink');

const FIELD_SIZE =16;
const FIELD_ROW = [...new Array(FIELD_SIZE).keys()];

const App = () => (
	<Box flexDirection='column' alignItems='center'>
<Text>
	<Color green>Snake</Color> game
</Text>
<Box flexDirection='column'>
	{FIELD_ROW.map(y =>  (
		<Box key={y}>
			{FIELD_ROW.map(x => {
				<Box key={x}> . </Box>
			})}
		</Box>
	))}
</Box>
	</Box>
);

module.exports = App;
