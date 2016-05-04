function createModels(db, models) {
	models.users = db.define("users", {
		league_id: String,
		summoner_name: String,
		profile_image: String,
		division: String,
		primary_position: String,
		secondary_position: String,
		auth_id: String,
		id: String
	});

	models.champions = db.define("champions", {
		id: String,
		name: String,
		image: String
	});
};

module.exports = createModels;