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
  The administration interface, which allows any operation, is accessible only from the server itself, via the local URL (`http://localhost` or `http://127.0.0.1`).

  To access the public pages from the server as if you were on a client (for check-in and results entry), connect to the public interface (`http://192.168.x.x`).
  The arbitration pages will be inaccessible by default on this interface.

  Finally, you can delegate some arbitration tasks to clients in the [Staff tab]({% link docs/network/staff.en.md %}).

{% enddetails %}

{% details id:standard-rating caption:"Why is there an option to use the standard rating for unrated players in rapid and blitz games?" %}
  The [_FIDE_ Rapide and Blitz Rating Regulations](https://handbook.fide.com/chapter/B02RBRegulations2024) state, in article 7.2.1, that:

  <div class="quote">
    If an unrated player has a standard rating at the beginning of a rapid or blitz tournament, their standard rating is used for rating calculation. Such a player is <b>considered to be rated</b>, and 7.2.2 to 7.2.5 below do not apply.
  </div>

  A player who believes that their opponent is unrated may be surprised when they discover that their game has affected their rating!

  This rule concerns **only** the rating calculation, not the pairings.  However, the [_FIDE_ arbiters manual](https://arbiters.fide.com/wp-content/uploads/Publications/Manual/Arbiters_Manual_2025.pdf) states:

  <div class="quote">
    If no reliable rating is known for a player the arbiters should make an estimation of it as accurately as possible.
  </div>

  Thus, the arbiter has the freedom to assign a valid estimated rating for unrated players.

  It is therefore a sensible choice to use the standard rating for unrated players in rapid and blitz tournaments, since this avoids unpleasant surprises.

  We recommend adding this clarification to your tournament regulations. An example is provided in the [Regulations for the Fide World Rapid & Blitz Championships 2025](https://handbook.fide.com/files/handbook/wrbc_regulations_2025_open.pdf) which specifically mentions this in article 4.2.4.1:

  <div class="quote">
    If a player has no rapid rating, the player's standard rating shall be used for the starting list, pairings (see Article 4.2.5) and tie-break calculation.
  </div>

  This is especially important if you're using a ratings-based tie-break, since the [_FIDE_ Tie-break specifications](https://handbook.fide.com/chapter/TieBreakRegulations082024) state (in section 10):

  <div class="quote">
    These tie-breaks must be dropped from the tournament tie-break list when unrated players are present, unless detailed rules on the handling of unrated players are included in the tournament regulations or established and published by the Chief Arbiter before the start of the tournament.
  </div>

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

  Verify that the file has been properly restored at the root of the _Sharly Chess_ directory.
{% enddetails %}

{% details What to do if all candidate ports [`80`, `81`, `8080`, `8081`] are already in use? %}

  _Sharly Chess_'s server uses several predefined ports to respond to client requests (screen display, score entry, etc.).

  If _Sharly Chess_’s server tells you at startup that all ports are in use, you must find the applications already using these ports and stop them before restarting the _Sharly Chess_ server.

  To find which application is using a port, open a command prompt as administrator and run the command `netstat -ab`:

  {: .text-center}
  ![Checking used ports on the server](/assets/faq/faq-system-netstat.jpg)

  (here, port `80` is being used by another web server `httpd.exe`)
{% enddetails %}

<script>
  if (location.hash) {
    document.querySelector(location.hash)?.setAttribute("open", "");
  }
</script>
