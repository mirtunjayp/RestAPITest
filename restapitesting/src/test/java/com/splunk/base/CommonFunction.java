package com.splunk.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.Assert;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import com.splunk.constant.Constants;
import com.splunk.constant.Globaldata;
import com.splunk.pojo.MovieResponseVO;

import cucumber.api.Scenario;


public class CommonFunction extends BaseClass{

	/**
	 * @method submitGetRequest: will submit GET request and get Rest Assured Response
	 * @param mapParam: parameter to be passed in header section
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public Response submitGetRequest(Map<String, String> mapDatatable){
		Response response = null;
		try{
			String url = Constants.url;
			HashMap<String, String> mapHeader = Constants.headersForGetRequest;
			log.info("URL:: " + url);
			log.info("GET header value:: " + mapHeader);
			log.info("Query Parameter:: " + mapDatatable);
			response = RestAssured.given().log().all().headers(mapHeader).queryParameters(mapDatatable).get(url);
			String strJson = convertResponseToString(response);
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: submitGetRequest || Message:: Error when submitting GET Request");
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: submitGetRequest || Message:: Error when submitting GET Request");
		}
		return response;
	}
	
	/**
	 * @method submitPostRequest: will POST request and get RestAssured Response
	 * @param mapParam
	 * @param strBody
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public Response submitPostRequest(HashMap<String, String> mapParam, String strBody){
		Response response = null;
		try{
			String url = Constants.url;
			HashMap<String, String> mapHeader = Constants.headersForPostRequest;
			log.info("POST URL:: " + url);
			log.info("POST header value:: " + mapHeader);
			response = RestAssured.given().log().all().headers(mapHeader).body(strBody).post(url);
			addTextToReport(convertResponseToString(response));
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: submitPostRequest || Message:: Error when submitting POST Request");
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: submitPostRequest || Message:: Error when submitting POST Request");
		}
		return response;
	}

	/**
	 * @method convertResponseToString: will convert RestAssured Response to string
	 * @param response
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public String convertResponseToString(Response response){
		String strJson = null;
		try{
			strJson = response.asString();
			log.info("Converted RestAssured Response to String => " + strJson);
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: convertJsonToString || Message:: Error converting RestAssured Response to String" );
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: convertJsonToString || Message:: Error converting RestAssured Response to String");
		}
		return strJson;
	}
	
	/**
	 * @method addTextToReport: will add String text to report
	 * @param str
	 * @author Mirtunjay Prasad
	 */
	public void addTextToReport(String str){
		try{
			
			Scenario scenario = BaseClass.scenario;
			scenario.embed(str.getBytes(), "text/html");			
			log.info("Added text to report successfully. /nText :: " + str );
		}catch(Exception e){
			log.error("Class: CommonFunction || Method:: addTextToReport ||Message:: Error when adding text to report. Text:: " + str);
		}
	}
	
	/**
	 * @method convertJsonStringToJavaObject: will convert JSON String to Java Object
	 * @author Mirtunjay Prasad	 * 
	 */
	public void convertJsonStringToJavaObject(String strJson){
		try{
			ObjectMapper objectMapper = new ObjectMapper();
			Globaldata.objMovieResponseVO = objectMapper.readValue(strJson, MovieResponseVO.class);			
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: convertJsonStringToJavaObject || Message:: Error when converting json string to java object");
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: convertJsonStringToJavaObject || Message:: Error when converting json string to java object");
		}
	}

	/**
	 * @method getDuplicateFromList : will get duplicate details from list
	 * @param lst
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public Set<String> getDuplicateFromList(List<String> lst){
		try{
			Set<String> setDuplicate = new HashSet<String>();
			Set<String> setOfLst = new HashSet<String>(lst);
			Set<String> uniqueSet = new HashSet<String>();

			if(setOfLst.size() != lst.size()){
				for(String str:lst){
					if(!uniqueSet.add(str)){
						setDuplicate.add(str);
					}
				}
				log.info("List Contains Duplicates");
				log.info("List :: " + lst);
				log.info("Total Duplicate items in list :: " + setDuplicate.size());
				log.info("Duplicates in List are :: " + setDuplicate);
				return setDuplicate;
			}
			else{
				log.info("No Duplicates in the List :: " + lst);
				return null;
			}			
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: getDuplicateFromList || Message:: Error when getting duplicate from List :: " + lst);
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: getDuplicateFromList || Message:: Error when getting duplicate from List :: " + lst);
		}
		return null;
	}
	
	/**
	 * @method checkStringIsPallindrome: will check if the string is a pallindrome and return true or false accordingly
	 * @param str
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public boolean checkStringIsPallindrome(String str){
		try{
			int n = str.length();
			str = str.toLowerCase();
			for(int i=0; i<n; i++, n--){
				if(str.charAt(i) != str.charAt(n-1)){
					return false;
				}
			}
		}catch(Exception e){
			log.error("Class:: CommonFunction || Method:: checkStringIsPallindrome || Message:: Error when checking if string is a pallindrome");
			e.printStackTrace();
			Assert.fail("Class:: CommonFunction || Method:: checkStringIsPallindrome || Message:: Error when checking if string is a pallindrome");
		}
		return true;
	}

	/**
	 * @method sumOfListGreaterThan :will sum the list of integer and return true is sum is less then num or false otherwise
	 * @param lstGenreIds
	 * @param num
	 * @return
	 * @author Mirtunjay Prasad
	 */
	public boolean sumOfListGreaterThan(ArrayList<Integer> lst, int num) {
		try{
			Iterator<Integer> itr = lst.iterator();
			int sum = 0;
			while(itr.hasNext()){
				sum = sum + itr.next();
			}
			
			log.info("List Of Number:: " + lst);
			if(sum>num){
//				log.info("Sum of list = " + sum + " is greater than the number :: " + num);
				return true;
			}
			else {
//				log.info("Sum of list = " + sum + " is less than the number :: " + num);
				return false;
			}
		}catch(Exception e){
			log.error("Class:: sumOfListGreaterThan || Method: sumOfListGreaterThan || Message: Error when calculating sum in the list" );
			e.printStackTrace();
			Assert.fail("Class:: sumOfListGreaterThan || Method: sumOfListGreaterThan || Message: Error when calculating sum in the list");
		}
		return false;
	}
	
	public  Map<String, Integer> sortByValue(final Map<String, Integer> value) {
        return value.entrySet()
                .stream()
                .sorted((Entry.<String, Integer>comparingByValue()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
    }

}
