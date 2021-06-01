const dateFormat = require('dateformat');

const formatDate = (date) => {
	return dateFormat(date, 'yyyy/m/dd');
};

console.log(formatDate('2021-06-26'));