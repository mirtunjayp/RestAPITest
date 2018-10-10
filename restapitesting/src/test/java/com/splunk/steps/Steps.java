package com.splunk.steps;

import com.splunk.actions.MovieActions;
import com.splunk.base.BaseClass;
import com.splunk.constant.Globaldata;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {

	MovieActions movieActions = new MovieActions();

	@When("^User submit GET request with below parameter and get movie data response$")
	public void user_submit_GET_request_with_below_parameter_and_get_movie_data_response(DataTable datatable)
			throws Throwable {
		movieActions.submitGetRequestAndGetResponse(datatable);
	}

	@Then("^User verifies response status code is \"([^\"]*)\"$")
	public void user_verifies_response_status_code_is(String str) throws Throwable {
		movieActions.verifyResponseStatusCode(str);
	}

	@Then("^User verifies no two movie has same image$")
	public void user_verifies_no_two_movie_has_same_image() throws Throwable {
		movieActions.verifyNoTwoMoviesHasSameImage();
	}

	@Then("^User verifies all poster path is either valid or null$")
	public void user_verifies_all_poster_path_is_either_valid_or_null() throws Throwable {
		movieActions.verifyPosterPathValidOrNull();
	}

	@Then("^User print the movie title with pallindrome string in it$")
	public void user_print_the_movie_title_with_pallindrome_string_in_it() throws Throwable {
		movieActions.printMovieTitleWithPallindrome();
	}

	@Then("^User print movie title/s which contains title of another movie$")
	public void user_print_movie_title_s_which_contains_title_of_another_movie() throws Throwable {
		movieActions.printMovieTitleContainingAnotherMovieTitle();
	}

	@Then("^User prints movie title whose sum of genre ids > (\\d+)$")
	public void user_prints_movie_title_whose_sum_of_genre_ids(int arg1) throws Throwable {
		movieActions.printMovieTitleWithGernerIds400Plus();
	}
	
	@Then("^User prints movie title in sorted order as per the requirement$")
	public void user_prints_movie_title_in_sorted_order_as_per_the_requirement() throws Throwable {
		movieActions.printMovieTitleInSortedOrder();
	}

	
}
