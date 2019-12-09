var Player = function() {
	this.playlist = [
		{title: "Beyond the End", genre: "Trance", length: "3:48", file: "Beyond the End.mp3"},
		{title: "Celestial Tears", genre: "Instrumental", length: "2:58", file: "Celestial Tears.mp3"},
		{title: "Cold Storm", genre: "Trance", length: "5:45", file: "Cold Storm.mp3"},
		{title: "Color", genre: "Artcore", length: "5:05", file: "Color.mp3"},
		{title: "Cooperation", genre: "Trance", length: "2:29", file: "Cooperation.mp3"},
		{title: "Crisis", genre: "Trance", length: "2:53", file: "Crisis.mp3"},
		{title: "Dark Eyes", genre: "Electronica", length: "4:18", file: "Dark Eyes.mp3"},
		{title: "Delilah Grace", genre: "Healing", length: "7:27", file: "Delilah Grace.mp3"},
		{title: "Dreamlife", genre: "House", length: "2:20", file: "Dreamlife.mp3"},
		{title: "Elevation", genre: "Trance", length: "3:44", file: "Elevation.mp3"},
		{title: "Faraway", genre: "Instrumental", length: "2:39", file: "Faraway.mp3"},
		{title: "Farewell Song", genre: "New Age", length: "2:28", file: "Farewell Song.mp3"},
		{title: "Fascinated Memory", genre: "Electronic Dance", length: "4:53", file: "Fascinated Memory.mp3"},
		{title: "Follow the Light", genre: "Trance", length: "2:32", file: "Follow the Light.mp3"},
		{title: "Fragile -web cut-", genre: "Trance", length: "1:19", file: "Fragile -web cut-.mp3"},
		{title: "Hakenkreuz -web cut-", genre: "Trance", length: "3:00", file: "Hakenkreuz -web cut-.mp3"},
		{title: "I wish...", genre: "Trance", length: "2:23", file: "I wish.mp3"},
		{title: "Into the Blue", genre: "Trance", length: "8:23", file: "Into the Blue.mp3"},
		{title: "Life remix", genre: "Trance", length: "5:27", file: "Life remix.mp3"},
		{title: "Little Life", genre: "Other", length: "5:09", file: "Little Life.mp3"},
		{title: "Lost Emotion", genre: "Progressive Trance", length: "7:57", file: "Lost Emotion.mp3"},
		{title: "Memories", genre: "Instrumental", length: "4:18", file: "Memories.mp3"},
		{title: "Meteor Trip", genre: "Trance", length: "6:05", file: "Meteor Travel.mp3"},
		{title: "Misty State", genre: "Trance", length: "10:42", file: "Misty State.mp3"},
		{title: "More", genre: "Trance", length: "9:24", file: "More.mp3"},
		{title: "Nebula Drive", genre: "Trance", length: "6:43", file: "Nebula Drive.mp3"},
		{title: "Nebula Drive -2nd mix-", genre: "Trance", length: "6:24", file: "Nebula Drive -2nd mix-.mp3"},
		{title: "Nebula Drive -3rd mix-", genre: "Trance", length: "5:30", file: "Nebula Drive -3rd mix-.mp3"},
		{title: "No Reason", genre: "Trance", length: "8:56", file: "No Reason.mp3"},
		{title: "Over the Ocean", genre: "Trance", length: "6:01", file: "Over the Ocean.mp3"},
		{title: "Pastel Rain", genre: "Other", length: "2:49", file: "Pastel Rain.mp3"},
		{title: "Rainbow Drop", genre: "Artcore", length: "5:05", file: "Rainbow Drop.mp3"},
		{title: "Rainy Season", genre: "Trance", length: "6:13", file: "Rainy Season.mp3"},
		{title: "Reminiscence", genre: "Ibiza Trance", length: "5:05", file: "Reminiscence.mp3"},
		{title: "Resonance", genre: "Dutch Trance", length: "2:20", file: "Resonance.mp3"},
		{title: "Revolution -remix-", genre: "Trance", length: "5:22", file: "Revolution -remix-.mp3"},
		{title: "Silent Moon", genre: "Trance", length: "9:49", file: "Silent Moon.mp3"},
		{title: "Sky High", genre: "Epic Trance", length: "4:10", file: "Sky High.mp3"},
		{title: "Snow Light", genre: "Ibiza Trance", length: "3:23", file: "Snow Light.mp3"},
		{title: "Stardust", genre: "Ibiza Trance", length: "3:25", file: "Stardust.mp3"},
		{title: "Structure", genre: "Other", length: "2:59", file: "Structure.mp3"},
		{title: "The Kernel", genre: "Progressive Trance", length: "8:32", file: "The Kernel.mp3"},
		{title: "The Polestar", genre: "Trance", length: "4:55", file: "The Polestar.mp3"},
		{title: "The Sunset", genre: "Healing emotional", length: "6:33", file: "The Sunset.mp3"},
		{title: "Truth Destruction", genre: "Trance", length: "3:52", file: "Truth Destruction.mp3"},
		{title: "Unification", genre: "Trance", length: "5:23", file: "Unification.mp3"},
		{title: "Unity", genre: "Trance", length: "4:10", file: "Unity.mp3"},
		{title: "Uranus", genre: "Techno", length: "7:00", file: "Uranus.mp3"},
		{title: "Waterblue", genre: "House", length: "2:30", file: "Waterblue.mp3"},
        {title: "refluster 2004-2006 reel", genre: "Trance", length: "7:07", file: "refluster_reel.mp3"},
	];

	this.playingItem;
	this.$audio = $("audio");	
	this.$audioSource = $("audio source");
	this.$playlist = $("#playlist");
	this.playlist.forEach(function(p) {
		this.$playlist.append("<a href=\"mp3/" + p.file + "\" class=\"tab-item\">" +
							  "<div class=tab-title>" + p.title + "</div>" +
							  "<div class=tab-genre>" + p.genre + "</div>" +
							  "<div class=tab-length>" + p.length + "</div>" +
							  "<div class=line-feed></div>" + 
							  "</a>");
	}.bind(this));
	
	this.items = $('.tab-item');
};

Player.prototype.setCallback = function() {
	this.$audio.on('ended', this.playNextItem.bind(this));

	this.items.each(function(i, v) {
		$(v).click(this.selectItemAndPlayByClick.bind(this));
	}.bind(this));
};

Player.prototype.selectItemAndPlayByClick = function(e) {
	var index = $.inArray(e.currentTarget, this.items);

	this.play(index);
	e.preventDefault();
};

Player.prototype.playNextItem = function() {
	if (this.playingIndex == this.items.length) {
		return;
	}
	
	this.play(this.playingIndex + 1);
};

Player.prototype.play = function(index) {
	var fname = this.items[index].href.replace(/^.*[\\\/]/, '');
	
	if (this.playingIndex != null) {
		$(this.items[this.playingIndex]).removeClass('tab-active-item');
	}

	$(this.items[index]).addClass('tab-active-item');

	this.$audioSource.attr('src', 'mp3/' + fname);
    this.$audio[0].pause();
    this.$audio[0].load();
    this.$audio[0].play();

	this.playingIndex = index;
};

////////////////////////////////////////////////////////////
window.onload = function() {
	player = new Player();
	player.setCallback();
};
