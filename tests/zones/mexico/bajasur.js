"use strict";

var helpers = require("../../helpers/helpers");

exports["Mexico/BajaSur"] = {

	"guess:by:offset" : helpers.makeTestGuess("Mexico/BajaSur", { offset: true, expect: "America/Mazatlan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Mexico/BajaSur", { abbr: true, expect: "America/Mazatlan" }),

	"1927" : helpers.makeTestYear("Mexico/BajaSur", [
		["1927-06-11T05:59:59+00:00", "22:59:59", "MST", 420],
		["1927-06-11T06:00:00+00:00", "00:00:00", "CST", 360]
	]),

	"1930" : helpers.makeTestYear("Mexico/BajaSur", [
		["1930-11-15T05:59:59+00:00", "23:59:59", "CST", 360],
		["1930-11-15T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1931" : helpers.makeTestYear("Mexico/BajaSur", [
		["1931-05-02T05:59:59+00:00", "22:59:59", "MST", 420],
		["1931-05-02T06:00:00+00:00", "00:00:00", "MDT", 360],
		["1931-10-01T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1931-10-01T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1932" : helpers.makeTestYear("Mexico/BajaSur", [
		["1932-04-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1932-04-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1942" : helpers.makeTestYear("Mexico/BajaSur", [
		["1942-04-24T05:59:59+00:00", "23:59:59", "CST", 360],
		["1942-04-24T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1949" : helpers.makeTestYear("Mexico/BajaSur", [
		["1949-01-14T06:59:59+00:00", "23:59:59", "MST", 420],
		["1949-01-14T07:00:00+00:00", "23:00:00", "PST", 480]
	]),

	"1970" : helpers.makeTestYear("Mexico/BajaSur", [
		["1970-01-01T07:59:59+00:00", "23:59:59", "PST", 480],
		["1970-01-01T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1996" : helpers.makeTestYear("Mexico/BajaSur", [
		["1996-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["1996-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1996-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1996-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1997" : helpers.makeTestYear("Mexico/BajaSur", [
		["1997-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["1997-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1997-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1997-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1998" : helpers.makeTestYear("Mexico/BajaSur", [
		["1998-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["1998-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1998-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1998-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1999" : helpers.makeTestYear("Mexico/BajaSur", [
		["1999-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["1999-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1999-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1999-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2000" : helpers.makeTestYear("Mexico/BajaSur", [
		["2000-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2000-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2000-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2000-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2001" : helpers.makeTestYear("Mexico/BajaSur", [
		["2001-05-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2001-05-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2001-09-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2001-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2002" : helpers.makeTestYear("Mexico/BajaSur", [
		["2002-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2002-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2002-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2002-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2003" : helpers.makeTestYear("Mexico/BajaSur", [
		["2003-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2003-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2003-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2003-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2004" : helpers.makeTestYear("Mexico/BajaSur", [
		["2004-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2004-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2004-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2004-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2005" : helpers.makeTestYear("Mexico/BajaSur", [
		["2005-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2005-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2005-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2005-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2006" : helpers.makeTestYear("Mexico/BajaSur", [
		["2006-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2006-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2006-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2006-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2007" : helpers.makeTestYear("Mexico/BajaSur", [
		["2007-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2007-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2007-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2007-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2008" : helpers.makeTestYear("Mexico/BajaSur", [
		["2008-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2008-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2008-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2008-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2009" : helpers.makeTestYear("Mexico/BajaSur", [
		["2009-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2009-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2009-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2009-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2010" : helpers.makeTestYear("Mexico/BajaSur", [
		["2010-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2010-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2010-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2010-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2011" : helpers.makeTestYear("Mexico/BajaSur", [
		["2011-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2011-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2011-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2011-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2012" : helpers.makeTestYear("Mexico/BajaSur", [
		["2012-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2012-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2012-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2012-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2013" : helpers.makeTestYear("Mexico/BajaSur", [
		["2013-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2013-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2013-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2013-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2014" : helpers.makeTestYear("Mexico/BajaSur", [
		["2014-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2014-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2014-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2014-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2015" : helpers.makeTestYear("Mexico/BajaSur", [
		["2015-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2015-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2015-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2015-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2016" : helpers.makeTestYear("Mexico/BajaSur", [
		["2016-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2016-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2016-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2016-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2017" : helpers.makeTestYear("Mexico/BajaSur", [
		["2017-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2017-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2017-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2017-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2018" : helpers.makeTestYear("Mexico/BajaSur", [
		["2018-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2018-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2018-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2018-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2019" : helpers.makeTestYear("Mexico/BajaSur", [
		["2019-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2019-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2019-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2019-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2020" : helpers.makeTestYear("Mexico/BajaSur", [
		["2020-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2020-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2020-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2020-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2021" : helpers.makeTestYear("Mexico/BajaSur", [
		["2021-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2021-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2021-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2021-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2022" : helpers.makeTestYear("Mexico/BajaSur", [
		["2022-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2022-04-03T09:00:00+00:00", "03:00:00", "MDT", 360]
	])
};