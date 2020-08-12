import Airtable from 'airtable';

const Update = (id, client) => {
	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);

	base('table1').update(
		[
			{
				id: id,
				fields: {
					Name: 'record1',
					Client: client,
					Category: 'stack1'
				}
			}
		],
		function(err, records) {
			if (err) {
				console.error(err);
				return;
			}
			records.forEach(function(record) {
				console.log(record.get('Category'));
			});
		}
	);
};

export default Update;
