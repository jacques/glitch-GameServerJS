var name		= "Good Buddy";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Made 23 friends";
var status_text		= "Way to make friends and influence people! You've earned a Good Buddy badge.";
var last_published	= 1348798859;
var is_shareworthy	= 1;
var url		= "good-buddy";
var category		= "social";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-14\/good_buddy_1316061691.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-14\/good_buddy_1316061691_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-14\/good_buddy_1316061691_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-14\/good_buddy_1316061691_40.png";
function on_apply(pc){
	
}
var conditions = {
	212 : {
		type	: "counter",
		group	: "player",
		label	: "buddies_count",
		value	: "23"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_favor_points("friendly", round_to_5(15 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"favor"	: {
		"giant"		: "friendly",
		"points"	: 15
	}
};

//log.info("good_buddy.js LOADED");

// generated ok (NO DATE)