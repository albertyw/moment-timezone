"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Luanda"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Luanda", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Luanda", { abbr: true, expect: "Africa/Lagos" }),

	"1908" : helpers.makeTestYear("Africa/Luanda", [
		["1908-06-30T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1908-07-01T00:00:00+00:00", "00:13:35", "LMT", -815 / 60]
	]),

	"1913" : helpers.makeTestYear("Africa/Luanda", [
		["1913-12-31T23:46:24+00:00", "23:59:59", "LMT", -815 / 60],
		["1913-12-31T23:46:25+00:00", "00:16:25", "+0030", -30]
	])
};