var createModels(db, models) {
	models.user = db.define("user", {
		league_id: String,
		summoner_name: String,
		profile_image: String,
		division: String,
		primary_position: String,
		secondary_position: String,
		auth_id: String
	});

	models.champion = db.define("champion", {
		id: String,
		name: String,
		image: String
	});
};

module.exports = createModels;