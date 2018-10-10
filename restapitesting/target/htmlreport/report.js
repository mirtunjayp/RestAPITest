$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/splunkrestapitest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Mirtunjay1984@gmail.com"
    },
    {
      "line": 2,
      "value": "#Scenario: Splunk \u003d\u003e Movie data business verification"
    },
    {
      "line": 3,
      "value": "#DateCreated: 6Oct2018"
    },
    {
      "line": 4,
      "value": "#Sorted Alogrithm for SPL003 :: Sorting requirement. Rule #1 Movies with genre_ids \u003d\u003d null should be first in response. Rule #2, if multiple movies have genre_ids \u003d\u003d null, then sort by id (ascending). For movies that have non-null genre_ids, results should be sorted by id (ascending)"
    }
  ],
  "line": 7,
  "name": "Splunk - SDET",
  "description": "",
  "id": "splunk---sdet",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify no two movie should have same image/poster path",
  "description": "",
  "id": "splunk---sdet;verify-no-two-movie-should-have-same-image/poster-path",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SPL-001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User verifies no two movie has same image",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "splunk---sdet;verify-no-two-movie-should-have-same-image/poster-path;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 18,
      "id": "splunk---sdet;verify-no-two-movie-should-have-same-image/poster-path;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 19,
      "id": "splunk---sdet;verify-no-two-movie-should-have-same-image/poster-path;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 345610422,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify no two movie should have same image/poster path",
  "description": "",
  "id": "splunk---sdet;verify-no-two-movie-should-have-same-image/poster-path;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    },
    {
      "line": 9,
      "name": "@SPL-001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 12
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User verifies no two movie has same image",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 40823808783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 29278393,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verifies_no_two_movie_has_same_image()"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e \u003ctr \u003e \u003cth colspan\u003d\u00271\u0027\u003e\u003ccenter\u003e Duplicate Poster Path/s Detail\u003c/center\u003e\u003c/th\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 6373558018,
  "error_message": "java.lang.AssertionError: Two or more Movies has same image/poster path.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.splunk.actions.MovieActions.verifyNoTwoMoviesHasSameImage(MovieActions.java:117)\r\n\tat com.splunk.steps.Steps.user_verifies_no_two_movie_has_same_image(Steps.java:28)\r\n\tat ✽.And User verifies no two movie has same image(feature/splunkrestapitest.feature:15)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify all poster path should be either valid or null",
  "description": "",
  "id": "splunk---sdet;verify-all-poster-path-should-be-either-valid-or-null",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@SPL-002"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 24
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User verifies all poster path is either valid or null",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "splunk---sdet;verify-all-poster-path-should-be-either-valid-or-null;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 30,
      "id": "splunk---sdet;verify-all-poster-path-should-be-either-valid-or-null;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 31,
      "id": "splunk---sdet;verify-all-poster-path-should-be-either-valid-or-null;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80395,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify all poster path should be either valid or null",
  "description": "",
  "id": "splunk---sdet;verify-all-poster-path-should-be-either-valid-or-null;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    },
    {
      "line": 21,
      "name": "@SPL-002"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 24
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User verifies all poster path is either valid or null",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 562436283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 1967117,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verifies_all_poster_path_is_either_valid_or_null()"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e \u003ctr \u003e \u003cth colspan\u003d\u00271\u0027\u003e\u003ccenter\u003e Broken Poster Path/s Detail\u003c/center\u003e\u003c/th\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e /sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 6726536575,
  "error_message": "java.lang.AssertionError: Poster path contains broken links.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.splunk.actions.MovieActions.verifyPosterPathValidOrNull(MovieActions.java:195)\r\n\tat com.splunk.steps.Steps.user_verifies_all_poster_path_is_either_valid_or_null(Steps.java:33)\r\n\tat ✽.And User verifies all poster path is either valid or null(feature/splunkrestapitest.feature:27)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Prints movie title in sorted order as per the requirement",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-in-sorted-order-as-per-the-requirement",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@SPL-003"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User prints movie title in sorted order as per the requirement",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-in-sorted-order-as-per-the-requirement;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 42,
      "id": "splunk---sdet;prints-movie-title-in-sorted-order-as-per-the-requirement;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 43,
      "id": "splunk---sdet;prints-movie-title-in-sorted-order-as-per-the-requirement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 275824,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Prints movie title in sorted order as per the requirement",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-in-sorted-order-as-per-the-requirement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    },
    {
      "line": 33,
      "name": "@SPL-003"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 36
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User prints movie title in sorted order as per the requirement",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 1278665594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 3063143,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_prints_movie_title_in_sorted_order_as_per_the_requirement()"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e \u003ctr \u003e \u003cth colspan\u003d\u00271\u0027\u003e\u003ccenter\u003e Sorted Movie Title\u003c/center\u003e\u003c/th\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman: Beyond Batman\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e The Dark Knight\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Return to the Batcave: The Misadventures of Adam and Burt\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e The Dark Knight Rises\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman and Robin\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e James Batman\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman Tech\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman: A Gotham Fairytale\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman James Batman 75th Anniversary Short\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Scooby-Doo Meets Dante\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e LEGO DC Comics Super Heroes: Batman: Be-Leaguered\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Dante\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman: Return of the Kayak Crusaders\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman Unlimited: Mechs vs. Mutants\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Being Batman\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman Jr.\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 480213800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Prints movie title whose sum of genre ids \u003e 400",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-whose-sum-of-genre-ids-\u003e-400",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@SPL-004"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 49
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 50
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User prints movie title whose sum of genre ids \u003e 400",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-whose-sum-of-genre-ids-\u003e-400;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 54,
      "id": "splunk---sdet;prints-movie-title-whose-sum-of-genre-ids-\u003e-400;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 55,
      "id": "splunk---sdet;prints-movie-title-whose-sum-of-genre-ids-\u003e-400;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 71843,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Prints movie title whose sum of genre ids \u003e 400",
  "description": "",
  "id": "splunk---sdet;prints-movie-title-whose-sum-of-genre-ids-\u003e-400;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    },
    {
      "line": 46,
      "name": "@SPL-004"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 49
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 50
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User prints movie title whose sum of genre ids \u003e 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 197730290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 692339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 49
    }
  ],
  "location": "Steps.user_prints_movie_title_whose_sum_of_genre_ids(int)"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Movie Title  \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Gerner Ids whose sum is greater than 400 \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e James Batman\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e [28, 12, 35, 878]\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Scooby-Doo Meets Dante\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e [10751, 16]\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman and Robin\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e [28, 878, 53]\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e LEGO DC Comics Super Heroes: Batman: Be-Leaguered\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e [28, 12, 16, 10751]\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman James Batman 75th Anniversary Short\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e [28, 16, 878, 10770]\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 293989860,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Print movie title/s with pallindrome string in it",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-with-pallindrome-string-in-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@SPL-005"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 61
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 62
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User print the movie title with pallindrome string in it",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-with-pallindrome-string-in-it;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 67,
      "id": "splunk---sdet;print-movie-title/s-with-pallindrome-string-in-it;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 68,
      "id": "splunk---sdet;print-movie-title/s-with-pallindrome-string-in-it;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 90230,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Print movie title/s with pallindrome string in it",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-with-pallindrome-string-in-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    },
    {
      "line": 58,
      "name": "@SPL-005"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 61
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 62
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User print the movie title with pallindrome string in it",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 256408951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 573030,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_print_the_movie_title_with_pallindrome_string_in_it()"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Movie Title \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Pallindrome in movie title \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman: Return of the Kayak Crusaders\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e  Kayak\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 26201139,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "Print movie title/s which contains title of another movie",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-which-contains-title-of-another-movie",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@SPL-006"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User submit GET request with below parameter and get movie data response",
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "\u003cq_value\u003e"
      ],
      "line": 73
    },
    {
      "cells": [
        "Param_Optional_count",
        "\u003ccount_value\u003e"
      ],
      "line": 74
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User verifies response status code is \"\u003cResponseStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User print movie title/s which contains title of another movie",
  "keyword": "And "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-which-contains-title-of-another-movie;",
  "rows": [
    {
      "cells": [
        "q_value",
        "count_value",
        "ResponseStatusCode"
      ],
      "line": 79,
      "id": "splunk---sdet;print-movie-title/s-which-contains-title-of-another-movie;;1"
    },
    {
      "cells": [
        "batman",
        "0",
        "200"
      ],
      "line": 80,
      "id": "splunk---sdet;print-movie-title/s-which-contains-title-of-another-movie;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 79968,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Print movie title/s which contains title of another movie",
  "description": "",
  "id": "splunk---sdet;print-movie-title/s-which-contains-title-of-another-movie;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@SPL-006"
    },
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User submit GET request with below parameter and get movie data response",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Param_Required_q",
        "batman"
      ],
      "line": 73
    },
    {
      "cells": [
        "Param_Optional_count",
        "0"
      ],
      "line": 74
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User verifies response status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User print movie title/s which contains title of another movie",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable)"
});
formatter.embedding("text/html", "{\n  \"results\": [\n    {\n      \"vote_count\": 12,\n      \"id\": 287757,\n      \"video\": true,\n      \"vote_average\": 5.8,\n      \"title\": \"Scooby-Doo Meets Dante\",\n      \"popularity\": 2.714803,\n      \"poster_path\": \"https://www.dropbox.com/s/8i8v4ak8tnp03w4/action-blur-electronics-247932.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Scooby-Doo Meets Batman\",\n      \"genre_ids\": [\n        10751,\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Scooby-Doo Meets Batman is a video compilation from Warner Bros. Home Entertainment. It consists of two episodes from Hanna-Barbera\u0027s The New Scooby-Doo Movies, \\\"The Dynamic Scooby Doo Affair\\\" and \\\"The Caped Crusader Caper\\\", where Scooby-Doo and the gang team up with Batman and Robin to capture Joker and the Penguin.\",\n      \"release_date\": \"2002-08-20\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 204649,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Beyond Batman\",\n      \"popularity\": 1.214846,\n      \"poster_path\": \"https://www.dropbox.com/s/opfcp4ua5fmdszj/actor-actress-adult-974477.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Beyond Batman\",\n      \"genre_ids\": [],\n      \"backdrop_path\": null,\n      \"adult\": false,\n      \"overview\": \"Behind the scenes documentary highlighting production design, props \u0026amp; gadgets, batmobile/batsuit design, and the music of the 1989 Batman.\",\n      \"release_date\": \"2005-07-04\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 404463,\n      \"video\": false,\n      \"vote_average\": 4.7,\n      \"title\": \"Dante\",\n      \"popularity\": 1.507619,\n      \"poster_path\": \"https://www.dropbox.com/s/1qcl5f3o1dmsn0d/adult-beard-electronics-819848.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Dante\",\n      \"genre_ids\": [\n        28,\n        80,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman intervenes in the life of a junkie.\",\n      \"release_date\": \"2016-08-05\"\n    },\n    {\n      \"vote_count\": 50,\n      \"id\": 411736,\n      \"video\": false,\n      \"vote_average\": 7,\n      \"title\": \"Batman: Return of the Kayak Crusaders\",\n      \"popularity\": 4.544005,\n      \"poster_path\": \"https://www.dropbox.com/s/0j5o30t1h21u2pw/architecture-bluebird-theatre-building-208647.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: Return of the Caped Crusaders\",\n      \"genre_ids\": [\n        28,\n        16,\n        35\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.\",\n      \"release_date\": \"2016-10-08\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 411802,\n      \"video\": false,\n      \"vote_average\": 5.5,\n      \"title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"popularity\": 2.984441,\n      \"poster_path\": \"https://www.dropbox.com/s/xs5w5v43lpfg4vj/auditorium-chairs-comfortable-269140.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Unlimited: Mechs vs. Mutants\",\n      \"genre_ids\": [\n        16\n      ],\n      \"adult\": false,\n      \"overview\": \"Mr. Freeze turns Killer madam and Bane into super-sized monsters, and they bash their way through downtown Gotham until the Caped Crusader and his team of heroes join the fight in their giant robot mechs.\",\n      \"release_date\": \"2016-08-30\"\n    },\n    {\n      \"vote_count\": 10891,\n      \"id\": 49026,\n      \"video\": false,\n      \"vote_average\": 7.6,\n      \"title\": \"The Dark Knight Rises\",\n      \"popularity\": 58.004625,\n      \"poster_path\": \"https://www.dropbox.com/s/tr9lhmsukyr62nf/black-and-white-caixa-belas-artes-cinema-65437.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight Rises\",\n      \"genre_ids\": [\n        28,\n        80,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\u0027s crimes to protect the late attorney\u0027s reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham\u0027s finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.\",\n      \"release_date\": \"2012-07-16\"\n    },\n    {\n      \"vote_count\": 16,\n      \"id\": 20776,\n      \"video\": false,\n      \"vote_average\": 5.8,\n      \"title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"popularity\": 2.997837,\n      \"poster_path\": \"https://www.dropbox.com/s/l3qyiomplo1xy2p/candy-delicious-eating-2904.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Return to the Batcave: The Misadventures of Adam and Burt\",\n      \"genre_ids\": [\n        35,\n        28,\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Adam West and Burt Ward are taken on a crazy adventure when the Batmobile is stolen from a car museum and they must track down the thief and return it. After solving a puzzle, they realize that the clues to finding the fiend who stole the Batmobile are hidden in their past. During the search, they flashback to their three seasons in tights, including their many sexual escapades.\",\n      \"release_date\": \"2003-03-09\"\n    },\n    {\n      \"vote_count\": 6,\n      \"id\": 93560,\n      \"video\": false,\n      \"vote_average\": 6.2,\n      \"title\": \"Batman and Robin\",\n      \"popularity\": 1.329602,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman and Robin\",\n      \"genre_ids\": [\n        28,\n        878,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"This 15-chapter serial pits Batman and Robin against The Wizard, who uses a device that allows him to control machinery to hold the city hostage.\",\n      \"release_date\": \"1949-05-26\"\n    },\n    {\n      \"vote_count\": 5,\n      \"id\": 186579,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Batman Tech\",\n      \"popularity\": 1.252347,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Tech\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"He\u0027s caped, cowled and the coolest superhero of them all, because underneath that Batsuit, Batman only has his human strength and intellect to rely on. That and the greatest arsenal of crime fighting weaponry ever devised. But just where does comic book science fiction end and scientific fact begin? What technologies are behind the gadgets in Batman\u0027s utility belt? And just how plausible is the Batmobile? Get ready for a real life trip to the Batcave as we reveal the secrets behind Batman Tech.\",\n      \"release_date\": \"2008-07-20\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 138757,\n      \"video\": false,\n      \"vote_average\": 5,\n      \"title\": \"James Batman\",\n      \"popularity\": 1.043456,\n      \"poster_path\": \"/sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg\",\n      \"original_language\": \"en\",\n      \"original_title\": \"James Batman\",\n      \"genre_ids\": [\n        28,\n        12,\n        35,\n        878\n      ],\n      \"backdrop_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl\u003d0\",\n      \"adult\": false,\n      \"overview\": \"An evil syndicate is set to conquer the world, and the mission is to stop them from fulfilling their viscious plans. The consequences of their failure may mean the destruction of all dissenting countries who stand in their way. All countries must bow to their power before the deadline of five days expires. The solution is sending in their best operatives; James Hika, and the dynamic duo of Batman and Robin. They are first detested with working with each other, but for the safety of the world, they join forces. Through thick and thin, they survive the syndicate\u0027s plan to dispose of them. They get closer to stopping the syndicate plan, but there is a traitor in their midst. Will this deter them from achieving their goal?\",\n      \"release_date\": \"1966-10-26\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 451570,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman Jr.\",\n      \"popularity\": 1.000177,\n      \"poster_path\": null,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Jr.\",\n      \"genre_ids\": [\n        28,\n        18,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"After Batman is murdered by the Jokers son Michael, Batmans son Jeffery  decides to finish his fathers job in this fan made fail.\",\n      \"release_date\": \"\"\n    },\n    {\n      \"vote_count\": 28,\n      \"id\": 300424,\n      \"video\": false,\n      \"vote_average\": 6.3,\n      \"title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"popularity\": 4.67096,\n      \"poster_path\": \"https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movvvie-theater-33129.jpg?dl\u003d0\",\n      \"original_language\": \"en\",\n      \"original_title\": \"LEGO DC Comics Super Heroes: Batman: Be-Leaguered\",\n      \"genre_ids\": [\n        28,\n        12,\n        16,\n        10751\n      ],\n      \"adult\": false,\n      \"overview\": \"Superman wants Batman to join his new superhero team, but Batman prides himself on being a self-sufficient loner.\",\n      \"release_date\": \"2014-10-27\"\n    },\n    {\n      \"vote_count\": 17,\n      \"id\": 269246,\n      \"video\": false,\n      \"vote_average\": 7.5,\n      \"title\": \"Batman James Batman 75th Anniversary Short\",\n      \"popularity\": 2.068931,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman Beyond Darwyn Cooke\u0027s Batman 75th Anniversary Short\",\n      \"genre_ids\": [\n        28,\n        16,\n        878,\n        10770\n      ],\n      \"adult\": false,\n      \"overview\": \"Terry faces off against a much younger Batman\",\n      \"release_date\": \"2014-04-19\"\n    },\n    {\n      \"vote_count\": 14490,\n      \"id\": 155,\n      \"video\": false,\n      \"vote_average\": 8.3,\n      \"title\": \"The Dark Knight\",\n      \"popularity\": 38.263954,\n      \"original_language\": \"en\",\n      \"original_title\": \"The Dark Knight\",\n      \"genre_ids\": [\n        18,\n        28,\n        80,\n        53\n      ],\n      \"adult\": false,\n      \"overview\": \"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.\",\n      \"release_date\": \"2008-07-16\"\n    },\n    {\n      \"vote_count\": 1,\n      \"id\": 438741,\n      \"video\": false,\n      \"vote_average\": 8,\n      \"title\": \"Being Batman\",\n      \"popularity\": 1.080175,\n      \"original_language\": \"en\",\n      \"original_title\": \"Being Batman\",\n      \"genre_ids\": [\n        99\n      ],\n      \"adult\": false,\n      \"overview\": \"Ryan Freeman’s profile documentary, Being Batman, gives us a tiny glimpse into the life of Stephen Lawrence—a man who has self monikered himself the “Brampton Batman.” Lawrence, dressed as the iconic hero, ventures out at night to patrol the city streets. He’s a real-life Bruce Wayne, complete with an outfit and arsenal that would make any cosplayer green with envy.\",\n      \"release_date\": \"2017-01-30\"\n    },\n    {\n      \"vote_count\": 0,\n      \"id\": 241226,\n      \"video\": false,\n      \"vote_average\": 0,\n      \"title\": \"Batman: A Gotham Fairytale\",\n      \"popularity\": 1.574088,\n      \"original_language\": \"en\",\n      \"original_title\": \"Batman: A Gotham Fairytale\",\n      \"genre_ids\": [\n        16,\n        53,\n        28,\n        18\n      ],\n      \"adult\": false,\n      \"overview\": \"Composed of over 200 black and white illustrations, it depicts the dark imagination of a little girl as she\u0027s listening to her grandmother tell her a bedtime fairytale.\",\n      \"release_date\": \"2013-09-05\"\n    }\n  ]\n}");
formatter.result({
  "duration": 302959912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "Steps.user_verifies_response_status_code_is(String)"
});
formatter.result({
  "duration": 703885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_print_movie_title_s_which_contains_title_of_another_movie()"
});
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Movie Title containing another movie title \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e\u003cb\u003e Another Movie Title \u003c/b\u003e\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e The Dark Knight Rises\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e The Dark Knight\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Scooby-Doo Meets Dante\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e Dante\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cleft\u003e Batman James Batman 75th Anniversary Short\u003c/left\u003e\u003c/td\u003e\u003ctd\u003e\u003cleft\u003e James Batman\u003c/left\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 123873184,
  "status": "passed"
});
});