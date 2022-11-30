"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Windhoek"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Windhoek", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Windhoek", { abbr: true, expect: "Africa/Khartoum" }),

	"1903" : helpers.makeTestYear("Africa/Windhoek", [
		["1903-02-28T22:29:59+00:00", "23:59:59", "+0130", -90],
		["1903-02-28T22:30:00+00:00", "00:30:00", "SAST", -120]
	]),

	"1942" : helpers.makeTestYear("Africa/Windhoek", [
		["1942-09-19T23:59:59+00:00", "01:59:59", "SAST", -120],
		["1942-09-20T00:00:00+00:00", "03:00:00", "SAST", -180]
	]),

	"1943" : helpers.makeTestYear("Africa/Windhoek", [
		["1943-03-20T22:59:59+00:00", "01:59:59", "SAST", -180],
		["1943-03-20T23:00:00+00:00", "01:00:00", "SAST", -120]
	]),

	"1990" : helpers.makeTestYear("Africa/Windhoek", [
		["1990-03-20T21:59:59+00:00", "23:59:59", "SAST", -120],
		["1990-03-20T22:00:00+00:00", "00:00:00", "CAT", -120]
	]),

	"1994" : helpers.makeTestYear("Africa/Windhoek", [
		["1994-03-20T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1994-03-20T22:00:00+00:00", "23:00:00", "WAT", -60],
		["1994-09-04T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1994-09-04T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"1995" : helpers.makeTestYear("Africa/Windhoek", [
		["1995-04-01T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1995-04-02T00:00:00+00:00", "01:00:00", "WAT", -60],
		["1995-09-03T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1995-09-03T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"1996" : helpers.makeTestYear("Africa/Windhoek", [
		["1996-04-06T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1996-04-07T00:00:00+00:00", "01:00:00", "WAT", -60],
		["1996-09-01T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1996-09-01T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"1997" : helpers.makeTestYear("Africa/Windhoek", [
		["1997-04-05T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1997-04-06T00:00:00+00:00", "01:00:00", "WAT", -60],
		["1997-09-07T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1997-09-07T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"1998" : helpers.makeTestYear("Africa/Windhoek", [
		["1998-04-04T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1998-04-05T00:00:00+00:00", "01:00:00", "WAT", -60],
		["1998-09-06T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1998-09-06T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"1999" : helpers.makeTestYear("Africa/Windhoek", [
		["1999-04-03T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1999-04-04T00:00:00+00:00", "01:00:00", "WAT", -60],
		["1999-09-05T00:59:59+00:00", "01:59:59", "WAT", -60],
		["1999-09-05T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2000" : helpers.makeTestYear("Africa/Windhoek", [
		["2000-04-01T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2000-04-02T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2000-09-03T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2000-09-03T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2001" : helpers.makeTestYear("Africa/Windhoek", [
		["2001-03-31T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2001-04-01T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2001-09-02T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2001-09-02T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2002" : helpers.makeTestYear("Africa/Windhoek", [
		["2002-04-06T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2002-04-07T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2002-09-01T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2002-09-01T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2003" : helpers.makeTestYear("Africa/Windhoek", [
		["2003-04-05T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2003-04-06T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2003-09-07T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2003-09-07T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2004" : helpers.makeTestYear("Africa/Windhoek", [
		["2004-04-03T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2004-04-04T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2004-09-05T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2004-09-05T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2005" : helpers.makeTestYear("Africa/Windhoek", [
		["2005-04-02T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2005-04-03T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2005-09-04T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2005-09-04T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2006" : helpers.makeTestYear("Africa/Windhoek", [
		["2006-04-01T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2006-04-02T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2006-09-03T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2006-09-03T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2007" : helpers.makeTestYear("Africa/Windhoek", [
		["2007-03-31T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2007-04-01T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2007-09-02T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2007-09-02T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2008" : helpers.makeTestYear("Africa/Windhoek", [
		["2008-04-05T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2008-04-06T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2008-09-07T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2008-09-07T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2009" : helpers.makeTestYear("Africa/Windhoek", [
		["2009-04-04T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2009-04-05T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2009-09-06T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2009-09-06T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2010" : helpers.makeTestYear("Africa/Windhoek", [
		["2010-04-03T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2010-04-04T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2010-09-05T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2010-09-05T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2011" : helpers.makeTestYear("Africa/Windhoek", [
		["2011-04-02T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2011-04-03T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2011-09-04T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2011-09-04T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2012" : helpers.makeTestYear("Africa/Windhoek", [
		["2012-03-31T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2012-04-01T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2012-09-02T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2012-09-02T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2013" : helpers.makeTestYear("Africa/Windhoek", [
		["2013-04-06T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2013-04-07T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2013-09-01T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2013-09-01T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2014" : helpers.makeTestYear("Africa/Windhoek", [
		["2014-04-05T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2014-04-06T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2014-09-07T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2014-09-07T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2015" : helpers.makeTestYear("Africa/Windhoek", [
		["2015-04-04T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2015-04-05T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2015-09-06T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2015-09-06T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2016" : helpers.makeTestYear("Africa/Windhoek", [
		["2016-04-02T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2016-04-03T00:00:00+00:00", "01:00:00", "WAT", -60],
		["2016-09-04T00:59:59+00:00", "01:59:59", "WAT", -60],
		["2016-09-04T01:00:00+00:00", "03:00:00", "CAT", -120]
	]),

	"2017" : helpers.makeTestYear("Africa/Windhoek", [
		["2017-04-01T23:59:59+00:00", "01:59:59", "CAT", -120],
		["2017-04-02T00:00:00+00:00", "01:00:00", "WAT", -60]
	])
};