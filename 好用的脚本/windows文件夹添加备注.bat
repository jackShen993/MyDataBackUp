@echo off
echo.&echo.
set /p fn=�����ļ���·�������������ļ��������ס�ϵ��˴���:
echo.&echo.
set /p it=������Դ��ļ��е�������Ϣ:
attrib %fn%\desktop.ini -s -h
del %fn%\desktop.ini
echo [.ShellClassInfo]>%fn%\desktop.ini
echo InfoTip=%it%>>%fn%\desktop.ini
attrib %fn%\desktop.ini +h +s
attrib %fn% +s