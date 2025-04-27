---
layout: page
title: Roadmap
permalink: /roadmap/
page_id: roadmap
nav_order: 700
---

# Roadmap

## Macroscopic Roadmap

| Version | Date | Features |
|:---:|:---:|---|
| Papi-web 1.x | 2013–2023 | Initial version |
| Papi-web 2.0 | Nov 2023 | Improved display screens |
| Papi-web 2.1 | Dec 2023 | Connection to ChessEvent |
| Papi-web 2.2 | Mar 2024 | Performance improvements, illegal moves |
| Papi-web 2.3 | Apr 2024 | Check-in feature |
| Papi-web 2.4 | Oct 2024 | Open-source<br/>Multilingual support<br/>Web configuration<br/>SQLite storage |
| Papi-web 2.5 | Apr 2025 | Interface improvements<br/>Player management<br/>Ranking calculation, display, and printing |
| Papi-web 2.x | 2025 | **Functionality parity with Papi 3.3.8**<br/>Swiss pairings, round-robin and manual, draft/published<br/>Prize calculation<br/>Norm and certificate calculation<br/>Statistics, FIDE performances, TRF import/export, name cards |
| Sharly Chess 3.0 | 2025 | **Additional features not supported by Papi**<br/>Dropping Access format<br/>Results, tiebreaks |

## Detailed Roadmap

- LAN = local network usage (on a local server)
- SaaS = online usage (on a remote server)

|  | PW 1.19<br>Jan 2023 | PW 2.0<br/>Nov 2023 | PW 2.1<br/>Dec 2023 | PW 2.2<br/>Mar 2024 | PW 2.3<br/>Apr 2024 | PW 2.4<br/>Oct 2024 | PW 2.5<br/>Apr 2025 | PW 2.x<br/>2025 | SC 3.0<br/>2025 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **LAN** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
| Open source | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Free software license | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ AGPL | ✔︎ AGPL | ✔︎ AGPL | ✔︎ AGPL |
| Built-in web server | ✖︎ XAMPP | ✔︎ Django | ✔︎ Django | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar |
| Built-in database driver | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✔︎ SQLite |
| Windows support | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Windows executable | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Windows executable signing | - | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ? |
| Linux support | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| Mac support | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| Papi-web configuration | ✖︎ PHP | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI/SQLite |
| Event configuration | ✖︎ PHP | ✖︎ INI | ✖︎ INI | ✖︎ INI | ✖︎ INI | ✔︎ Web | ✔︎ Web | ✔︎ Web | ✔︎ Web |
| Tournament storage | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✔︎ SQLite |
| Event storage | - | ✖︎ File | ✖︎ File | ✖︎ File | ✖︎ File | ✔︎ SQLite | ✔︎ SQLite | ✔︎ SQLite | ✔︎ SQLite |

| **SAAS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Availability | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
| Open source | - | - | - | - | - | - | - | - | ? |
| Free software license | - | - | - | - | - | - | - | - | ? |
| Storage | - | - | - | - | - | - | - | - | ? |

| **PAIRINGS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Swiss pairings | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>bbp 5.0.1 | ✔︎<br/>bbp 5.0.1 |
| FIDE Handbook C.04 compliance | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ PW 2.5 | ✔︎ PW 2.6 | ✔︎ SC 3.0 |
| Round-robin pairings | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>Papi 3.3.8 | ✔︎ PW 2.6 | ✔︎ SC 3.0 |
| Manual pairings | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>Papi 3.3.8 | ✔︎ PW 2.6 | ✔︎ SC 3.0 |
| Draft/Published status | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| TRF16 import/export | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| TRF25 import/export | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |

| **RANKINGS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Ranking calculation | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.8 | ✔︎ PW 2.5 | ✔︎ PW 2.x | ✔︎ SC 3.0 |
| FIDE compliance for unplayed games | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✖︎ | ✖︎ | ✔︎ PW 2.5 | ✔︎ PW 2.x | ✔︎ SC 3.0 |
| FIDE performance compliance | ✖︎ | ✖︎ | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✖︎ | ✖︎ | ✖︎ | ✔︎ PW 2.x | ✔︎ SC 3.0 |

| **INTERNATIONALIZATION** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| FR (French) | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Multilingual support | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ 2.4.19 | ✔︎ | ✔︎ | ✔︎ |
| EN (English) | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ 2.4.19 | ✔︎ | ✔︎ | ✔︎ |

| **FIDE APPROVAL** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Approval support | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ✔︎ |

| **USAGE** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| HTMX usage | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Multi-screen support | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Multi-column support | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Alphabetical pairings | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Rotating displays | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Illegal move recording | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Check-in management | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Result editing | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| FFE - Tournament upload | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| FFE - Data protection | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| ChessEvent - Data download | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Player management | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Pairing printing | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Ranking printing | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Cross-table printing | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| FIDE performances | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Prize calculation | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Norm calculation for players | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Name cards (chevalets) | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Raffle management (tombola) | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ? |
| Arbiter norm certificates | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
| Team competitions | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
