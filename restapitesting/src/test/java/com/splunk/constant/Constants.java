package com.splunk.constant;

import java.util.HashMap;
import java.util.Map;

public class Constants {

	public static String url = "https://splunk.mocklab.io/movies";
	public static String headerContentType = "application/json";

	public static HashMap<String, String> headersForGetRequest = new HashMap<String, String>() {
		{
			put("Accept", "application/json");
		}
	};

	public static HashMap<String, String> headersForPostRequest = new HashMap<String, String>() {
		{
			put("Content-Type", "application/json");
		}
	};

}
