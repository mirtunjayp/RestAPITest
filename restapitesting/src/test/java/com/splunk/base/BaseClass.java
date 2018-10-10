package com.splunk.base;

import java.util.Collection;

import org.apache.log4j.Logger;

import com.splunk.actions.MovieActions;

import cucumber.api.Scenario;

public class BaseClass {
	
	public static Logger log = Logger.getLogger(BaseClass.class);;
	public static Scenario scenario = new Scenario() {
		
		public void write(String arg0) {
			// TODO Auto-generated method stub
			
		}
		
		public boolean isFailed() {
			// TODO Auto-generated method stub
			return false;
		}
		
		public String getStatus() {
			// TODO Auto-generated method stub
			return null;
		}
		
		public Collection<String> getSourceTagNames() {
			// TODO Auto-generated method stub
			return null;
		}
		
		public String getName() {
			// TODO Auto-generated method stub
			return null;
		}
		
		public String getId() {
			// TODO Auto-generated method stub
			return null;
		}
		
		public void embed(byte[] arg0, String arg1) {
			// TODO Auto-generated method stub
			
		}
	};
	
//	//Object of all classes
//	protected CommonFunction commonFunction = new CommonFunction();
//	protected MovieActions movieActions = new MovieActions();
	
}
