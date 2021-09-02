
package org.data;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Datasample {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
File f=new File("C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\DataExcel\\dbook.xlsx");

FileInputStream fis=new FileInputStream(f);

Workbook workbook = new XSSFWorkbook(fis);

Sheet sheet = workbook.getSheet("sheet1");

for(int i=0;i<sheet.getPhysicalNumberOfRows();i++) {
	
	Row row= sheet.getRow(i);

for(int j=0;j<row.getPhysicalNumberOfCells();j++) {
	
	Cell cell = row.getCell(j);

System.out.println(cell);

int cellType=cell.getCellType();
String value="";
if(cellType==1) {
 value  =	cell.getStringCellValue();
	}
else if(DateUtil.isCellDateFormatted(cell)) {
	Date d = cell.getDateCellValue();
	SimpleDateFormat s =new SimpleDateFormat("dd-MM-yyyy");
	value = s.format(d);
}
else {
	double d= cell.getNumericCellValue();
	long l = (long) d;
	  value = String.valueOf(1);
}
System.out.println(value);
}
}
	}}

