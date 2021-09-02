package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generateJvmReport(String jsonPath) {
	

	
	File f = new File("C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\target\\Reports\\JvmReports");

	Configuration con = new Configuration(f,"facebook");
	con.addClassifications("Platformname","windows10");
	con.addClassifications("Browserversion","chrome89");
	con.addClassifications("Browsername", "chrome");
	con.addClassifications("Sprintnumber", "44");

	List<String> li= new ArrayList<String>();
	li.add(jsonPath);

	ReportBuilder r= new  ReportBuilder(li,con);
	r.generateReports();
}
}
