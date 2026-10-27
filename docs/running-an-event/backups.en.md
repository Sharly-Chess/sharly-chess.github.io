---
layout: page
title: Backups
permalink: /backups/
page_id: backups
parent: Running an Event
nav_order: 150
---

# Backups

_Sharly Chess_ backs up your events as you work on them, so that a mistake — a round paired too soon, an import that overwrites the wrong players, a file that stops being readable — costs you minutes rather than the evening.

Nothing has to be set up: backups are on, and each backup is a complete copy of the event, not a difference against another one. Restoring one gives the event back exactly as it was at that moment.

---

## When a backup is taken

**As the event changes.** Every change committed to an event asks for a backup. The changes of a burst are collected into one, and at most one automatic backup is taken every five minutes: entering fifty results in a row leaves one copy, not fifty.

**Before a step of the event**, taken on the spot and before anything is written:

- before a round is paired, unpaired, or moved on from;
- before players are imported, or distributed between tournaments;
- before anything is changed in a round the following ones were paired from — a result, a bye, the colours of a board, a manual pairing, a renumbering, the number of rounds, the tie-breaks;
- before the event is migrated to a new version of _Sharly Chess_;
- before a backup is restored, so that restoring is itself undoable.

**When you ask for one**, with the **Back up now** button.

---

## Finding and restoring a backup

The backups of an event are reached from the clock icon on its card or row in the list of events, and from the **Backups** button in its configuration window.

Each backup is listed with the moment it was taken, why it was taken, the state the event was in — each tournament, the round it was on, the results entered — and its size. The state is what tells two backups apart when their reasons do not.

Two buttons on each row take you back:

| <i class="bi-arrow-counterclockwise"></i> **Restore** | Replaces the event with the backup, keeping its name and identifier, so the screens, the input pages and the plugin configurations all keep working. The state being replaced is backed up first, so this can be undone. A **Restore a backup** window first shows what the backup holds, and what restoring does to an event linked to a site. |
| <i class="bi-copy"></i> **Restore as a new event** | Creates a second event from the backup and leaves the first one alone. For looking at a past state rather than rolling back to it. Offered to the users allowed to create events. |

The new event is not connected to anything the original was connected to: nothing of it is uploaded or synchronised, and its details say that it was restored from a backup, so that the two events can be told apart.

A backup taken by a more recent version of _Sharly Chess_ cannot be restored by this one, and is marked so. A backup taken by an older version is restored as any other, even when its state cannot be read (it is then shown as —).

{: .note }
> :information_source: An event whose file can no longer be read is still listed, with a **Restore** button that opens its backups and an **Archive** button that sets it aside: restoring a backup replaces the file, which is what brings the event back.

---

## Events linked to a site

Restoring rolls back what _Sharly Chess_ holds. It does not roll back what you have already sent elsewhere.

For an event linked to [_Sharly-Chess.com_]({% link docs/events/index.en.md %}), the rounds and the results go back to the state of the backup and are sent to the site at the next upload. The players do not: the site holds the list of registrations, and the next synchronisation brings back the registrations, check-ins and player details as they stand there — including any added, changed or deleted since the backup. Corrections to player data have to be made again after restoring, or made on the site.

The restoration keeps the link itself, the identifiers the site gave the event and its tournaments, and any deletion the site has not yet confirmed, so nothing is uploaded twice and nothing is forgotten.

The tournaments uploaded to [_Chess-Results_]({% link docs/plugins/chess-results.en.md %}) keep their _Chess-Results_ tournament, even when the backup was taken before the first upload: the next upload updates the tournament whose address has been published rather than opening a second one.

---

## Where the backups are kept, and for how long

By default _Sharly Chess_ keeps them in a folder of its own, outside your data folder. That is deliberate: the data folder is often synchronised (OneDrive, Google Drive, Dropbox), and a synchronisation client is free to leave an old file in the cloud rather than on the disk — which is exactly where a backup is of no use, at a venue with no network. In the Flatpak version, the backups are kept inside the data folder, in a `snapshots` folder.

In the **Backups** section of the _Sharly Chess_ settings, where **Open** shows the folder, you can:

- switch off **Activate automatic backups** — the backups already taken stay, and can still be restored; the backups window then says that no new one is being taken;
- switch on **Use my own folder** and choose a folder with **Change**, for instance on a memory stick. The backups already taken are moved there, and moved back to the default folder when you switch it off.

Backups are given up as they age, oldest first, and the most recent backup of every event is always kept:

- each event keeps its 10 latest backups taken before a step, and its 10 latest automatic ones; those taken before a restoration or before a migration to a new version are not counted;
- when _Sharly Chess_ starts, the backups older than 90 days are given up, except the 2 latest taken before a step of each event;
- when all the backups take up more than 500 MB, the automatic backups of the events left alone the longest go first.

An event that is deleted keeps its backups with its archive, and gets them back if the archive is restored.

---

## When a backup cannot be written

A folder that has gone — a memory stick pulled out, a share disconnected, rights changed — is reported where you are working: the page of the event says that it is no longer being backed up, with a link to the panel, and the panel says what went wrong.

The event itself is never held up by a backup that fails: it is the backup that waits, not your work.
