package com.testing.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Feature",
        glue = {"com.testing.stepDefinition",
                "com.testing.cucumber",},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@RegisteredCustomerLogin"}
)
        public class TestRunner {
}
