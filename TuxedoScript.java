package src;

/**
 * @author: Ephellon Dantzler
 * 12 December 2015
 * from: ScriptDemo5.java
*/

import java.io.*;
import java.util.Scanner;
import javax.script.*;

public class TuxedoScript {
  private static Scanner input = new Scanner(System.in);
  private static String JAVA_STRING = "JAVA_STRING = ";
  private static String Tuxedo = "\n\n";
  
  public static void main (String [] args) throws ScriptException, FileNotFoundException {
   // pre-compile the file
   System.out.println("Enter your file directory/name: ");
   File f = new File(input.nextLine());
   Scanner F = new Scanner(new File("TuxedoScript.js"));
   System.out.println("Compiling: " + f.getAbsolutePath() + "\n");

   Scanner file = new Scanner(f);
   String newName = f.getAbsolutePath().replace("tux", "tux.js");

   PrintStream out = new PrintStream(new FileOutputStream( newName ));

   for(;file.hasNextLine();) {
     JAVA_STRING += '"' + file.nextLine().replace("\"", "\\\"") + "\\n\" + \n";
   } JAVA_STRING += "\"\"";

   for(;F.hasNextLine();) {
     Tuxedo += F.nextLine() + '\n';
   } F.close();

   // Create a ScriptEngineManager that discovers all script engine
   // factories (and their associated script engines) that are visible to
   // the current thread's classloader
   ScriptEngineManager manager = new ScriptEngineManager();

   // Obtain a ScriptEngine that supports the JavaScript short name
   ScriptEngine engine = manager.getEngineByName("JavaScript");

   // Redirect the engine's standard output to a StringWriter instance
   StringWriter writer = new StringWriter();
   PrintWriter printer = new PrintWriter(writer, true);
   engine.getContext().setWriter(printer);

   // Evaluate a script
   engine.eval(JAVA_STRING + Tuxedo);

   // Obtain the string buffer's contents
   StringBuffer TUX = writer.getBuffer();
   String TUX_ = TUX.toString();
   out.print(TUX_);
   out.close();
   file.close();

   // done
   System.out.println ("Tuxedo Script has compiled \"" + f.getName() + "\"\nA file named \"" + newName +"\" has been made");
  }
}