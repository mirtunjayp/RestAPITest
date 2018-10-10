package com.splunk.actions;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.codehaus.groovy.control.io.StringReaderSource;
import org.junit.Assert;

import com.jayway.restassured.response.Response;
import com.splunk.base.BaseClass;
import com.splunk.base.CommonFunction;
import com.splunk.constant.Globaldata;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class MovieActions extends BaseClass{

	CommonFunction commonFunction = new CommonFunction();
	
	@Before
	public void beforeScenario(Scenario scenario){
		BaseClass.scenario = scenario;
	}
	
	/**
	 * @method submitGetRequestAndGetResponse: submit GET request and get RestAssured Response
	 * @param datatable
	 * @author Mirtunjay Prasad
	 */
	public void submitGetRequestAndGetResponse(DataTable datatable) {
		try{
			Map<String, String> mapDatatable = datatable.asMap(String.class, String.class);
			Map<String, String> mapParam = new HashMap<String, String>();
			String q = mapDatatable.get("Param_Required_q");
			String count = mapDatatable.get("Param_Optional_count");
			
			
				if(q.isEmpty()){
					log.error("Class:: MovieActions || Method:: submitGetRequestAndGetResponse || Message:: Query Parameter 'q' is empty");
					Assert.fail("Class:: MovieActions || Method:: submitGetRequestAndGetResponse || Message:: Query Parameter 'q' is empty");
				}
				else{
					mapParam.put("q", q);
				}
			
				if(!count.isEmpty()){
					mapParam.put("count", count);
				}
			
			Globaldata.response = commonFunction.submitGetRequest(mapParam);
			Globaldata.strResponse = commonFunction.convertResponseToString(Globaldata.response);
			
			commonFunction.addTextToReport(Globaldata.strResponse);
			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: submitGetRequestAndGetResponse || Message:: Error when submitting get request and gettin response");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: submitGetRequestAndGetResponse || Message:: Error when submitting get request and gettin response");
		}
	}

	/**
	 * @method verifyResponseStatusCode: verify response status code from Response
	 * @param str
	 * @author Mirtunjay Prasad
	 */
	public void verifyResponseStatusCode(String strStatusCode) {
		try{
			int intStatusCode = Integer.valueOf(strStatusCode);
			log.info("Expected Status Code:: " + intStatusCode);
			log.info("Actual Status Code:: " + Globaldata.response.statusCode());

			if(Globaldata.response.statusCode() != intStatusCode){
				log.error("Response Status Code is not equal to Expected Status Code");
				Assert.fail("Response Status Code is not equal to Expected Status Code");
			}			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: verifyResponseStatusCode || Message:: error when verifying response status code");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: verifyResponseStatusCode || Message:: error when verifying response status code");
		}
	}

	/**
	 * @method verifyNoTwoMoviesHasSameImage: will verify the response should not have two movie with same image
	 * @author Mirtunjay 
	 */
	public void verifyNoTwoMoviesHasSameImage() {
		try{
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			Set<String> setOfDuplicatePosterPath = new HashSet<String>();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			for(int i=0; i<sizeOfMovie; i++){
				if(Globaldata.objMovieResponseVO.getResults().get(i).getPosterPath()!= null)
				{
					Globaldata.lstPosterPath.add(Globaldata.objMovieResponseVO.getResults().get(i).getPosterPath());
				}
			}
			log.info(Globaldata.lstPosterPath);
			
			setOfDuplicatePosterPath = commonFunction.getDuplicateFromList(Globaldata.lstPosterPath);

			if(setOfDuplicatePosterPath.size() > 0){
				printPosterPath("Duplicate", setOfDuplicatePosterPath);
				Assert.fail("Two or more Movies has same image/poster path.");
			}

		}catch(Exception e){
			log.error("Class:: MovieActions || Method::verifyNoTwoMoviesHasSameImage || Message:: error when verifying no two movies has same image");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method::verifyNoTwoMoviesHasSameImage || Message:: error when verifying no two movies has same image");
		}
	}

	/**
	 * @method printPosterPath : will print poster path details
	 * @param str
	 * @param setPosterPath
	 * @author Mirtunjay Prasad
	 */
	private void printPosterPath(String str, Set<String> setPosterPath) {
		try{
			String header = null;
			switch(str.toLowerCase()){
			case "duplicate":
				header = "Duplicate Poster Path/s Detail";
				break;
				
			case "broken":
				header = "Broken Poster Path/s Detail";
				break;
				
			default:
				log.error("Class:: MovieActions || Method:: printPostePath || Message:: Case is not defined in switch statement. Case:: " + str);
				Assert.fail("Class:: MovieActions || Method:: printPostePath || Message:: Case is not defined in switch statement. Case:: " + str);
			}
			
			StringBuffer sb = new StringBuffer();
			Iterator<String> itr = setPosterPath.iterator();
			sb.append("<table border='1'> " + "<tr > " + "<th colspan='1'>");
			sb.append("<center> " + header + "</center>");
			sb.append("</th>");
			
			while(itr.hasNext()){
				sb.append("<tr>");
				sb.append("<td><left> " + itr.next() + "</left></td>");
				sb.append("</tr>");
			}
			
			sb.append("</table>");
			
			commonFunction.addTextToReport(sb.toString());
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: printPosterPath || Message:: Error when printing poster path details => " + setPosterPath );
			e.printStackTrace();
		}
	}

	/**
	 * @method verifyPosterPathValidOrNull: will verify if the poster path is either valid of null
	 */
	public void verifyPosterPathValidOrNull() {
		try{
	
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			for(int i=0; i<sizeOfMovie; i++){
				if(Globaldata.objMovieResponseVO.getResults().get(i).getPosterPath()!= null)
				{
					Globaldata.lstPosterPath.add(Globaldata.objMovieResponseVO.getResults().get(i).getPosterPath());
				}
			}
			log.info(Globaldata.lstPosterPath);
	
			Set<String> setPosterPath = getUniqueElementsFromList(Globaldata.lstPosterPath);
			
			Set<String> brokenPosterPath = getInvalidLinks(setPosterPath);
			
			if(brokenPosterPath.size() > 0){
				printPosterPath("Broken" , brokenPosterPath);
				Assert.fail("Poster path contains broken links.");
			}
			
		}catch(Exception e){
			log.error("Class:: MovieAction || Method:: verifyPosterPathValidOrNull || Message:: Error when validating poster is either valid or null");
			e.printStackTrace();
			Assert.fail("Class:: MovieAction || Method:: verifyPosterPathValidOrNull || Message:: Error when validating poster is either valid or null");
		}
	}

	/**
	 * @method getInvalidLinks
	 * @param setPosterPath
	 * @return
	 * @author Mirtunjay Prasad
	 */
	private Set<String> getInvalidLinks(Set<String> setLinks) {
		Set<String> setBrokenLink = new HashSet<String>();
		try{
	
			Iterator<String> itr = setLinks.iterator();
			
			while(itr.hasNext()){
				String link = null;
				link = itr.next();
				if(!isLinkBroken(link)){
					setBrokenLink.add(link);
				}
			}
			log.info("Broken Link/s :: " + setBrokenLink);
			return setBrokenLink;
			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: getInvalidLinks || Message:: Error in getting invalid links => " + setLinks );
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: getInvalidLinks || Message:: Error in getting invalid links => " + setLinks);
		}
		return null;
	}
	
	private boolean isLinkBroken(String link){
		try{
			URL url= new URL(link);
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setConnectTimeout(2000);
			httpConn.connect();
			
			if(httpConn.getResponseCode()==200){
				return true;
			}
			else {
				return false;
			}
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: isLinkBroken || Message:: Link is broken");
			return false;
		}
	}

	/**
	 * @method getUniqueElementsFromList : will return unique elements from list of String
	 * @param lstPosterPath
	 * @return
	 */
	private Set<String> getUniqueElementsFromList(ArrayList<String> lst) {
		try{
			Set<String> setOfList = new HashSet<String>(lst);
			return setOfList;			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: getUniqueElementsFromList || Message:: Error when getting unique elements form list => " + lst );
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: getUniqueElementsFromList || Message:: Error when getting unique elements form list => " + lst );
		}
		return null;
	}

	/**
	 * @method printMovieTitleWithPallindrome:: will print movie title which has pallindrome string
	 * @author Mirtunjay Prasad
	 */
	public void printMovieTitleWithPallindrome() {
		try{
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			for(int i=0; i<sizeOfMovie; i++){
				if(Globaldata.objMovieResponseVO.getResults().get(i).getTitle() != null)
				{
					Globaldata.lstTitle.add(Globaldata.objMovieResponseVO.getResults().get(i).getTitle());
				}
			}
			log.info("List of Movie Titles:: " + Globaldata.lstTitle);
			
			Globaldata.mapPallindromeTitle = getMapPallindromeStringFromList(Globaldata.lstTitle);
			log.info("Movie Title and title with pallindrome :: " + Globaldata.mapPallindromeTitle);
			printMapPallindromeTitle(Globaldata.mapPallindromeTitle);
		}catch(Exception e){
			log.error("Class:: MovieAction || Method:: printMovieTitleWithPallindrome || Message:: Error when printing movie title with pallindrome");
			e.printStackTrace();
			Assert.fail("Class:: MovieAction || Method:: printMovieTitleWithPallindrome || Message:: Error when printing movie title with pallindrome");
		}
	}

	/**
	 * @method printMapPallindromeTitle : will print the movie title and title with pallindrome
	 * @param mapPallindromeTitle
	 * @author Mirtunjay Prasad
	 */
	private void printMapPallindromeTitle(HashMap<String, String> mapPallindromeTitle) {
		try{
			StringBuffer sb = new StringBuffer();
			Iterator<Map.Entry<String, String>> itr = mapPallindromeTitle.entrySet().iterator();
			sb.append("<table border='1'>");

			sb.append("<tr>");
			sb.append("<td><left><b> Movie Title </b></left></td>");
			sb.append("<td><left><b> Pallindrome in movie title </b></left></td>");
			sb.append("</tr>");
			
			while(itr.hasNext()){
				Map.Entry<String, String> entry = itr.next();
				sb.append("<tr>");
				sb.append("<td><left> " + entry.getKey() + "</left></td>");
				sb.append("<td><left> " + entry.getValue() + "</left></td>");
				sb.append("</tr>");
			}
			sb.append("</table>");
			
			commonFunction.addTextToReport(sb.toString());
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: printMapPallindromeTitle || Message:: Error when printing Map Of Pallindrome Title => " + mapPallindromeTitle );
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * @param lstTitle
	 * @return
	 */
	private HashMap<String, String> getMapPallindromeStringFromList(ArrayList<String> lstTitle) {
		HashMap<String, String> map = new HashMap<String, String>();
		try{		
			for(int i=0;i<lstTitle.size();i++){
				String strPallindrome = "";
				String strTitle = lstTitle.get(i);
				
				String[] arrayStrTitle = strTitle.split(" ");
				for(int k=0; k<arrayStrTitle.length; k++){
					if(commonFunction.checkStringIsPallindrome(arrayStrTitle[k])){
						strPallindrome = strPallindrome + " " + arrayStrTitle[k] ;
					}
				}//End of for k loop
				if(!strPallindrome.equals("") && strPallindrome.length()>2){
					map.put(lstTitle.get(i), strPallindrome);
				}
			}//End Of for i loop
			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: getMapPallindromeStringFromList || MEssage:: Error when getting Map Pallindrome string from list of strings");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: getMapPallindromeStringFromList || MEssage:: Error when getting Map Pallindrome string from list of strings");
		}
		return map;
	}

	/**
	 * @method printMovieTitleContainingAnotherMovieTitle : will print movie title containing another movie title
	 * @author Mirtunjay Prasad
	 */
	public void printMovieTitleContainingAnotherMovieTitle() {
		try{
			HashMap<String, String> mapTitleWithAnotherTitle = new HashMap<String, String>();
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			for(int i=0; i<sizeOfMovie; i++){
				if(Globaldata.objMovieResponseVO.getResults().get(i).getTitle() != null)
				{
					Globaldata.lstTitle.add(Globaldata.objMovieResponseVO.getResults().get(i).getTitle());
				}
			}
			log.info("List of Movie Titles:: " + Globaldata.lstTitle);

			int sizeOfTitle = Globaldata.lstTitle.size();
			for(int i=0; i<sizeOfTitle-1;i++){
				String strTitleI = Globaldata.lstTitle.get(i);
				for(int j=i+1; j<sizeOfTitle;j++){
					String strTitleJ = Globaldata.lstTitle.get(j);
					if(StringUtils.contains(strTitleI, strTitleJ) && !strTitleI.equalsIgnoreCase(strTitleJ)){
						mapTitleWithAnotherTitle.put(strTitleI, strTitleJ);
					}//End of if condition
				}//End of j loop
			}//End of i loop
			
			log.info("Movie Title containing another movie title :: " + mapTitleWithAnotherTitle);
			
			printTitleWithAnotherMovieTitle(mapTitleWithAnotherTitle);
		
		}//End of try block
		catch(Exception e){
			log.error("Class:: MovieActions || Method:: printMovieTitleContainingAnotherMovieTitle || MEssage:: Error when printing movie title containing another movie title");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: printMovieTitleContainingAnotherMovieTitle || MEssage:: Error when printing movie title containing another movie title");
		}
	}

	/**
	 * @method printTitleWithAnotherMovieTitle : will print movie title which contains another movie title
	 * @author Mirtunjay Prasad
	 * @param mapTitleWithAnotherTitle 
	 */
	private void printTitleWithAnotherMovieTitle(HashMap<String, String> mapTitleWithAnotherTitle) {
	try{
		StringBuffer sb = new StringBuffer();
		Iterator<Map.Entry<String, String>> itr = mapTitleWithAnotherTitle.entrySet().iterator();
		sb.append("<table border='1'>");

		sb.append("<tr>");
		sb.append("<td><left><b> Movie Title containing another movie title </b></left></td>");
		sb.append("<td><left><b> Another Movie Title </b></left></td>");
		sb.append("</tr>");
		
		while(itr.hasNext()){
			Map.Entry<String, String> entry = itr.next();
			sb.append("<tr>");
			sb.append("<td><left> " + entry.getKey() + "</left></td>");
			sb.append("<td><left> " + entry.getValue() + "</left></td>");
			sb.append("</tr>");
		}
		sb.append("</table>");
		
		commonFunction.addTextToReport(sb.toString());		
	}catch(Exception e){
		log.error("Class:: MovieActions ||Method:: printTitleWithAnotherMovieTitle || Message:: Error when printing movie title containing another movie title");
		e.printStackTrace();
		Assert.fail("Class:: MovieActions ||Method:: printTitleWithAnotherMovieTitle || Message:: Error when printing movie title containing another movie title");
	}
	}

	/**
	 * @method printMovieTitleWithGernerIds400Plus : will print movie title with genre id > 400
	 */
	public void printMovieTitleWithGernerIds400Plus() {
		try{
			HashMap<String, ArrayList<Integer>> mapTitleAndAllGenreIds = new HashMap<String, ArrayList<Integer>>();
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			for(int i=0; i<sizeOfMovie; i++){
				String title = Globaldata.objMovieResponseVO.getResults().get(i).getTitle();
				ArrayList<Integer> genreIds = (ArrayList<Integer>) Globaldata.objMovieResponseVO.getResults().get(i).getGenreIds();				
				mapTitleAndAllGenreIds.put(title, genreIds);
			}
			log.info("Movie title and All Genre Ids Details :: " + mapTitleAndAllGenreIds);
			
			Globaldata.mapTitleAndGenreIds = getMovieTitleWithGenreId400Plus(mapTitleAndAllGenreIds);
		
			log.info("Movie title with sum Genre ID > 400 :: " + Globaldata.mapTitleAndGenreIds );
			
			printTitleAndGenreIds(Globaldata.mapTitleAndGenreIds);
			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: printMovieTitleWithGernerIds400Plus || Message:: Error when printing");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: printMovieTitleWithGernerIds400Plus || Message:: Error when printing");
		}
	}

	/**
	 * @method printTitleAndGenreIds : will print title and genre ids
	 * @param mapTitleAndGenreIds
	 * @author Mirtunjay Prasad
	 */
	private void printTitleAndGenreIds(HashMap<String, ArrayList<Integer>> mapTitleAndGenreIds) {
		try{
			StringBuffer sb = new StringBuffer();
			Iterator<Map.Entry<String, ArrayList<Integer>>> itr = mapTitleAndGenreIds.entrySet().iterator();
			sb.append("<table border='1'>");

			sb.append("<tr>");
			sb.append("<td><left><b> Movie Title  </b></left></td>");
			sb.append("<td><left><b> Gerner Ids whose sum is greater than 400 </b></left></td>");
			sb.append("</tr>");
			
			while(itr.hasNext()){
				Map.Entry<String, ArrayList<Integer>> entry = itr.next();
				sb.append("<tr>");
				sb.append("<td><left> " + entry.getKey() + "</left></td>");
				sb.append("<td><left> " + entry.getValue() + "</left></td>");
				sb.append("</tr>");
			}
			sb.append("</table>");
			
			commonFunction.addTextToReport(sb.toString());		

			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: printTitleAndGenreIds || Message:: Error when printing");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: printTitleAndGenreIds || Message:: Error when printing");
		}
		
	}

	/**
	 * @method getMovieTitleWithGenreId400Plus: will get the movie title with genre id > 400
	 * @param mapTitleAndAllGenreIds
	 * @return 
	 * @author Mirtunjay Prasad
	 */
	private HashMap<String, ArrayList<Integer>> getMovieTitleWithGenreId400Plus(HashMap<String, ArrayList<Integer>> map) {
		 HashMap<String, ArrayList<Integer>> mapTitleAndGenreIds = new HashMap<String, ArrayList<Integer>>();

		try{
			ArrayList<Integer> lstGenreIds = new ArrayList<Integer>();
			boolean flag = false;
			Iterator<Map.Entry<String, ArrayList<Integer>>> itr = map.entrySet().iterator();
			while(itr.hasNext()){
				Map.Entry<String, ArrayList<Integer>> entry = itr.next();
				lstGenreIds = entry.getValue(); 
				
				flag = commonFunction.sumOfListGreaterThan(lstGenreIds, 400);
				
				if(flag){
					mapTitleAndGenreIds.put(entry.getKey(), entry.getValue());
				}				
			} 
			return mapTitleAndGenreIds;
			
		}catch(Exception e){
			log.error("Class:: MovieAction || Method:: getMovieTitleWithGenreId400Plus || Message:: Error to get movie title with sum of genre id > 400");
			e.printStackTrace();
			Assert.fail("Class:: MovieAction || Method:: getMovieTitleWithGenreId400Plus || Message:: Error to get movie title with sum of genre id > 400");
		}
		return null;
	}

	/**
	 * @method printMovieTitleInSortedOrder : will print the movie title in sorted order 
	 * @author Mirtunjay Prasad 
	 */
	public void printMovieTitleInSortedOrder() {
		try{
			commonFunction.convertJsonStringToJavaObject(Globaldata.strResponse);
			int sizeOfMovie = Globaldata.objMovieResponseVO.getResults().size();
			log.info("Total number of movies:: " + sizeOfMovie);
			
			HashMap<String, Integer> mapTitleGenre = new HashMap<String, Integer>();
			HashMap<String, Integer> mapTitleId = new HashMap<String, Integer>();
			LinkedList<String> listSortedTitle = new LinkedList<String>();
			HashMap<String, Integer> mapGenreNull = new HashMap<String, Integer>();
			HashMap<String, Integer> mapSortedNullGenre = new HashMap<String, Integer>();
			
			//Get title and genre in map1 and title and id in map2
			for(int i=0; i<sizeOfMovie; i++){
				String title = Globaldata.objMovieResponseVO.getResults().get(i).getTitle();
				int genreId = (Globaldata.objMovieResponseVO.getResults().get(i).getGenreIds().isEmpty() ? 0 : 1);
				int id = Globaldata.objMovieResponseVO.getResults().get(i).getId();
				mapTitleGenre.put(title, genreId);
				mapTitleId.put(title, id);
			}//End of for loop

			//map with sorted ids
			HashMap<String, Integer> mapIdSort = (HashMap<String, Integer>) commonFunction.sortByValue(mapTitleId);
			
			Iterator<Map.Entry<String, Integer>> itr1 = mapTitleGenre.entrySet().iterator();
			
			//getting all null genre id in MAP
			while(itr1.hasNext()){
				Map.Entry<String, Integer> entry = itr1.next();
				if(entry.getValue() == 0){
					mapGenreNull.put(entry.getKey(), mapTitleGenre.get(entry.getKey()));
				}
			}
			
			mapSortedNullGenre = (HashMap<String, Integer>) commonFunction.sortByValue(mapGenreNull);
			
			Iterator<Map.Entry<String, Integer>> itr2 = mapSortedNullGenre.entrySet().iterator();
			
			while(itr2.hasNext()){
				//1. get the sorted value in linked list of movie title
				Map.Entry<String, Integer> entry1 = itr2.next();
				listSortedTitle.add(entry1.getKey());
				//2. Delete the values from sorted title id map			
				mapIdSort.remove(entry1.getKey());
			}
			
			Iterator<Map.Entry<String, Integer>> itr3 = mapIdSort.entrySet().iterator();
			while(itr3.hasNext()){
				Map.Entry<String, Integer> entry = itr3.next();
				
				listSortedTitle.add(entry.getKey());
			}
			printSortedTitle(listSortedTitle);		
		}catch(Exception e){
			log.error("Class:: MovieActions || Meth.od:: printMovieTitleInSortedOrder || MEssage:: Error when printing");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: printMovieTitleInSortedOrder || MEssage:: Error when printing");
		}
	}

	/**
	 * @method printSortedTitle : will print the title in sorted order
	 * @param listSortedTitle
	 * @author Mirtunjay Prasad
	 */
	private void printSortedTitle(LinkedList<String> listSortedTitle) {
		try{
			StringBuffer sb = new StringBuffer();
			Iterator<String> itr = listSortedTitle.iterator();
			sb.append("<table border='1'> " + "<tr > " + "<th colspan='1'>");
			sb.append("<center> Sorted Movie Title</center>");
			sb.append("</th>");
			
			while(itr.hasNext()){
				sb.append("<tr>");
				sb.append("<td><left> " + itr.next() + "</left></td>");
				sb.append("</tr>");
			}
			
			sb.append("</table>");
			
			commonFunction.addTextToReport(sb.toString());
			
		}catch(Exception e){
			log.error("Class:: MovieActions || Method:: printSortedTitle || Message:: Error when printing");
			e.printStackTrace();
			Assert.fail("Class:: MovieActions || Method:: printSortedTitle || Message:: Error when printing");
		}
	}
}
