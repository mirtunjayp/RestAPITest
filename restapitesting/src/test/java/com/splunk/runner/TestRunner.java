package com.splunk.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="src/test/resources",
		glue="",
		plugin = {"html:target/htmlreport",
				"json:target/JsonReport/report.json"		
		},
		tags = {"@RegressionTest"},
		monochrome = true,
		dryRun = false,
		strict = true
		)

public class TestRunner {

}
