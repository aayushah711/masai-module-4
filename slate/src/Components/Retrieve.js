import Airtable from 'airtable';

const Retrieve = () => {
	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);

	base('table1')
		.select({
			// Selecting the first 3 records in All projects:
			// maxRecords: 3,
			view: 'All projects'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				// This function (`page`) will get called for each page of records.

				records.forEach(function(record) {
					console.log('Retrieved', record.get('Name'));
					console.log('Retrieved', record.get('Category'));
				});

				// To fetch the next page of records, call `fetchNextPage`.
				// If there are more records, `page` will get called again.
				// If there are no more records, `done` will get called.
				fetchNextPage();
			},
			function done(err) {
				if (err) {
					console.error(err);
					return;
				}
			}
		);
};

export default Retrieve;
