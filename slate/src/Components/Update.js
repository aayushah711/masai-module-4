import Airtable from 'airtable';

// const Update = (id, client) => {
// 	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);

// 	base('table1').update(
// 		[
// 			{
// 				id: id,
// 				fields: {
// 					Name: 'record1',
// 					Client: client,
// 					Category: 'stack1'
// 				}
// 			}
// 		],
// 		function(err, records) {
// 			if (err) {
// 				console.error(err);
// 				return;
// 			}
// 			records.forEach(function(record) {
// 				console.log(record.get('Category'));
// 			});
// 		}
// 	);
// };

const Update = () => {
	var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(process.env.REACT_APP_BASE);

	base('table1').update(
		[
			{
				id: 'rec16Rp2pzNLzKX4X',
				fields: {
					Name: `{
						"board1": [
							{
								"id": "list1",
								"name": "list1",
								"data": [
									{
										"id": "item1",
										"name": "apple"
									},
									{
										"id": "item2",
										"name": "banana"
									}
								]
							},
							{
								"id": "list2",
								"name": "list2",
								"data": [
									{
										"id": "item3",
										"name": "chicoo"
									},
									{
										"id": "item4",
										"name": "dragonfruit"
									}
								]
							}
						]
					}
					`
				}
			}
		],
		function(err, records) {
			if (err) {
				console.error(err);
				return;
			}
			records.forEach(function(record) {
				console.log(record.get('name'));
			});
		}
	);
};

export default Update;
