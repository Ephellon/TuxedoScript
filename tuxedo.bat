:: Ephellon Dantzler - TuxedoScript Java Compiler 2015
@ECHO off
@java -jar tuxedo.jar
@CHOICE /M "Would you like to compile another file?"
@GOTO %ERRORLEVEL%
:1
  tuxedo.bat
  @EXIT
:2
@EXIT