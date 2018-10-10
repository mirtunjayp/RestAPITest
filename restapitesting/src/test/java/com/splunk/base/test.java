package com.splunk.base;

import java.util.HashMap;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;

public class test {

	public static void main(String[] args) {
		HashMap<String,String> mapParam = new HashMap<String, String>();
		mapParam.put("q", "");
		
		HashMap<String, String> headers = new HashMap<String, String>();
		headers.put("Accept", "application/json");
		Response response = RestAssured.given().headers(headers).queryParameters(mapParam).get("Https://splunk.mocklab.io/movies");
		System.out.println(response.asString());
	}

}
