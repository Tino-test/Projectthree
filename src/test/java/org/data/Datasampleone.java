package org.data;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Datasampleone {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
FileInputStream src = new FileInputStream("C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\DataExcel\\Reports of testnf.xlsx");
Workbook workbook = new XSSFWorkbook(src);
Sheet sheet= workbook.getSheet("Sheet1");
Row row = sheet.getRow(7);
Cell cell =row.getCell(2);
System.out.println(cell);
	

	}

}
