import Airtable from 'airtable';

const Create = (listName) => {
	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);

	base('table1').create(
		[
			{
				fields: {
					Name: listName
				}
			}
		],
		function(err, records) {
			if (err) {
				console.error(err);
				return;
			}
			records.forEach(function(record) {
				console.log(record.getId());
			});
		}
	);
};

export default Create;
