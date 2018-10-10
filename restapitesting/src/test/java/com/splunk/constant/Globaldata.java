package com.splunk.constant;

import java.util.ArrayList;
import java.util.HashMap;

import com.jayway.restassured.response.Response;

import com.splunk.pojo.MovieResponseVO;

public class Globaldata {

	public static Response response = null;
	public static String strResponse = null;
	public static MovieResponseVO objMovieResponseVO = null;
	public static ArrayList<String> lstPosterPath = new ArrayList<String>();
	public static ArrayList<String> lstTitle = new ArrayList<String>();
	public static HashMap<String, String> mapPallindromeTitle = new HashMap<String, String>();
	public static HashMap<String, ArrayList<Integer>> mapTitleAndGenreIds = new HashMap<String, ArrayList<Integer>>();
}
