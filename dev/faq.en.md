---
layout: page
title: Frequently Asked Questions
permalink: /faq/
page_id: faq
nav_order: 800
---

# Frequently Asked Questions

## Application

{% details Can access to the arbitration interface be restricted? %}
  The arbitration interface is accessible only from the server itself, on the local URL (`http://localhost` or `http://127.0.0.1`).

  If result entry is performed on the web server, open the public interface (`http://192.168.x.x`) and the arbitration pages will not be accessible.
{% enddetails %}

{% details Why are clients displaying different times? %}
  The timer displayed on clients uses each client’s local system time (not the server’s).
  You must synchronize all clients to the same time server.
{% enddetails %}

## Windows issues

{% details What to do if _Microsoft Defender SmartScreen_ blocked the launch of an unrecognized application? %}
  {: .text-center}
  ![_Microsoft Defender SmartScreen_ error message](/assets/faq/faq-system-defender-smartscreen.jpg)

  In the current version of _Sharly Chess_, _Microsoft Defender SmartScreen_ displays the error shown above.

  The only way to bypass this is to click **More info** and then **Run anyway**.
{% enddetails %}

{% details What to do if the web server is blocked by the server firewall? %}

  By default, it is possible that the web server is not allowed through the server's firewall — for example with Microsoft Defender:

  {: .text-center}
  ![_Microsoft Defender Firewall_ permission request](/assets/faq/faq-system-defender-firewall-1.jpg)

  Depending on your firewall, the message may differ, and the method to open necessary ports may vary as well;
  if needed, contact your network administrator to open inbound server traffic (by default, TCP/UDP port 80, shown below).

  {: .text-center}
  ![Example of _Microsoft Defender_ firewall permission for _Sharly Chess_](/assets/faq/faq-system-defender-firewall-2.jpg)
{% enddetails %}

{% details What to do if Avast refuses the installation of _Sharly Chess_? %}
  When extracting the archive `sharly-chess-<x.y.z>.zip`, Avast may block the installation of the `sharly-chess-<x.y.z>.exe` executable in the `bin` directory with the following message:

  {: .text-center}
  ![_Avast_ message during extraction of `sharly-chess-<x.y.z>.zip`](/assets/faq/faq-system-avast-1.jpg)

  This is a false positive, which you can report to _Avast_ by clicking **Report as a false positive**.

  By clicking **Open quarantine**, you should see the executable file:

  {: .text-center}
  ![Executable file in quarantine](/assets/faq/faq-system-avast-2.jpg)

  Click the context menu (`···`) then **Restore and add exception**:

  {: .text-center}
  ![Restore and add an exception](/assets/faq/faq-system-avast-3.jpg)

  {: .text-center}
  ![Confirmation request for restoring from quarantine](/assets/faq/faq-system-avast-4.jpg)

  {: .text-center}
  ![Confirmation of quarantine release](/assets/faq/faq-system-avast-5.jpg)

  Verify that the file has been properly restored at the root of the Sharly Chess directory.
{% enddetails %}

{% details What to so if all candidate ports [`80`, `81`, `8080`, `8081`] are already in use? %}

  Sharly Chess's server uses several predefined ports to respond to client requests (screen display, score entry, etc.).

  If _Sharly Chess_’s server tells you at startup that all ports are in use, you must find the applications already using these ports and stop them before restarting the _Sharly Chess_ server.

  To find which application is using a port, open a command prompt as administrator and run the command `netstat -ab`:

  {: .text-center}
  ![Checking used ports on the server](/assets/faq/faq-system-netstat.jpg)

  (here, port `80` is being used by another web server `httpd.exe`)
{% enddetails %}
