import Airtable from 'airtable';

const Retrieve = () => {
	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);
	var data;

	base('table1')
		.select({
			// Selecting the first 3 records in All projects:
			// maxRecords: 3,
			view: 'All projects'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				data = records[0].get('Name');
			},
			function done(err) {
				if (err) {
					console.error(err);
					return;
				}
			}
		);
	return data;
};

export default Retrieve;
