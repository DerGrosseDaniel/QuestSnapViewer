# AGENTS.md for OpenCode sessions: compact high-signal guide

**Session ID:** ses_21fa9af72ffevolyGwlmUKLsxh
**Created:** 4/30/2026, 11:40:46 PM
**Updated:** 5/1/2026, 12:07:11 AM

---

## User

Create or update `AGENTS.md` for this repository.

The goal is a compact instruction file that helps future OpenCode sessions avoid mistakes and ramp up quickly. Every line should answer: "Would an agent likely miss this without help?" If not, leave it out.

User-provided focus or constraints (honor these):


## How to investigate

Read the highest-value sources first:
- `README*`, root manifests, workspace config, lockfiles
- build, test, lint, formatter, typecheck, and codegen config
- CI workflows and pre-commit / task runner config
- existing instruction files (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.cursorrules`, `.github/copilot-instructions.md`)
- repo-local OpenCode config such as `opencode.json`

If architecture is still unclear after reading config and docs, inspect a small number of representative code files to find the real entrypoints, package boundaries, and execution flow. Prefer reading the files that explain how the system is wired together over random leaf files.

Prefer executable sources of truth over prose. If docs conflict with config or scripts, trust the executable source and only keep what you can verify.

## What to extract

Look for the highest-signal facts for an agent working in this repo:
- exact developer commands, especially non-obvious ones
- how to run a single test, a single package, or a focused verification step
- required command order when it matters, such as `lint -> typecheck -> test`
- monorepo or multi-package boundaries, ownership of major directories, and the real app/library entrypoints
- framework or toolchain quirks: generated code, migrations, codegen, build artifacts, special env loading, dev servers, infra deploy flow
- repo-specific style or workflow conventions that differ from defaults
- testing quirks: fixtures, integration test prerequisites, snapshot workflows, required services, flaky or expensive suites
- important constraints from existing instruction files worth preserving

Good `AGENTS.md` content is usually hard-earned context that took reading multiple files to infer.

## Questions

Only ask the user questions if the repo cannot answer something important. Use the `question` tool for one short batch at most.

Good questions:
- undocumented team conventions
- branch / PR / release expectations
- missing setup or test prerequisites that are known but not written down

Do not ask about anything the repo already makes clear.

## Writing rules

Include only high-signal, repo-specific guidance such as:
- exact commands and shortcuts the agent would otherwise guess wrong
- architecture notes that are not obvious from filenames
- conventions that differ from language or framework defaults
- setup requirements, environment quirks, and operational gotchas
- references to existing instruction sources that matter

Exclude:
- generic software advice
- long tutorials or exhaustive file trees
- obvious language conventions
- speculative claims or anything you could not verify
- content better stored in another file referenced via `opencode.json` `instructions`

When in doubt, omit.

Prefer short sections and bullets. If the repo is simple, keep the file simple. If the repo is large, summarize the few structural facts that actually change how an agent should work.

If `AGENTS.md` already exists at `/`, improve it in place rather than rewriting blindly. Preserve verified useful guidance, delete fluff or stale claims, and reconcile it with the current codebase.

---

## Assistant (Build · Big Pickle · 8.9s)

_Thinking:_

The user wants me to create or update an `AGENTS.md` file for this repository. Let me understand the task:

1. I need to investigate the repository to understand its structure, build system, testing, etc.
2. I should read key files like README, config files, manifests, etc.
3. I need to create a compact, high-signal `AGENTS.md` file that helps future OpenCode sessions

Let me start by investigating the repository structure and reading the key files mentioned in the instructions.

First, let me:
1. Check what's in the current directory
2. Look for README files
3. Look for config files (package.json, etc.)
4. Check for existing instruction files

Let me start the investigation.

I'll investigate the repository to create a focused `AGENTS.md`. Let me start by reading the key configuration and documentation files.

**Tool: bash**

**Input:**
```json
{
  "command": "ls -la \"/Users/daniel/Desktop/Projekte/2026/20260430 - QuestSnapViewer\"",
  "description": "List files in the project root"
}
```

**Output:**
```
total 0
drwxr-xr-x   2 daniel  staff   64 30 Apr. 23:40 .
drwxr-xr-x  13 daniel  staff  416 30 Apr. 23:40 ..

```

**Tool: glob**

**Input:**
```json
{
  "pattern": "**/README*",
  "path": "/Users/daniel/Desktop/Projekte/2026/20260430 - QuestSnapViewer"
}
```

**Output:**
```
No files found
```

**Tool: glob**

**Input:**
```json
{
  "pattern": "**/{package.json,tsconfig.json,*.config.*,.env*,Makefile,AGENTS.md,CLAUDE.md,.cursorrules,.github/copilot-instructions.md,opencode.json}",
  "path": "/Users/daniel/Desktop/Projekte/2026/20260430 - QuestSnapViewer"
}
```

**Output:**
```
No files found
```

_Thinking:_



---

## Assistant (Build · Big Pickle · 104.3s)

_Thinking:_

The repository is completely empty - there are no files at all. The `ls -la` command shows only the current directory (`.`) and parent directory (`..`) entries, and no files were found by the glob patterns for README, package.json, or any configuration files.

Given that this is an empty repository with no files at me, I need to ask the user what they want to put in the AGENTS.md file. However, looking at the instructions more carefully:

The user said "Create or update `AGENTS.md` for this repository" with specific focus and constraints. But the repo is empty - there's nothing to investigate. The instructions say:

"Only ask the user questions if the repo cannot answer something important."

In this case, the repo is empty, so there's nothing to extract. The user might want me to:
1. Create a template AGENTS.md
2. Wait for them to add code first
3. Something else

Looking at the user's request again - they want me to create AGENTS.md based on investigating the repo. But there's nothing to investigate. 

The instructions say "If `AGENTS.md` already exists at `/`, improve it in place rather than rewriting blindly." But it doesn't exist.

And "Only ask the user questions if the repo cannot answer something important. Use the `question` tool for one short batch at most."

The repo is empty, so I can't answer what should be in AGENTS.md from the repo itself. I should ask the user what kind of project this will be, or if they want me to wait until there's code to document.

But wait - maybe I should just create a minimal AGENTS.md that acknowledges the repo is empty? Or maybe I should ask what they're planning to build here?

Let me think about what the user would want. They're setting up a repository called "QuestSnapViewer" (based on the directory name). They want an AGENTS.md file. But there's nothing here yet.

The most helpful thing would be to ask what they're building so I can create a relevant AGENTS.md, or to let them know the repo is empty and ask if they want me to wait.

Actually, looking at the instructions again: "Only ask the user questions if the repo cannot answer something important." The repo cannot answer what should be in AGENTS.md because it's empty. 

Should I ask about:
- What kind of project this will be?
- What language/framework they plan to use?
- Whether they want me to wait until there's code?

These seem like reasonable questions since the repo is empty. Let me ask using the question tool.

The repository is empty. Let me ask what you're planning to build so I can create a relevant `AGENTS.md`.

**Tool: question**

**Input:**
```json
{
  "questions": [
    {
      "question": "This repo is currently empty. What kind of project will QuestSnapViewer be?",
      "header": "Project type",
      "options": [
        {
          "label": "Web app (React/Vue/etc)",
          "description": "Browser-based application"
        },
        {
          "label": "Node.js/TypeScript",
          "description": "Server or CLI tool"
        },
        {
          "label": "Python project",
          "description": "Python app, script, or service"
        },
        {
          "label": "Empty for now",
          "description": "Wait until code exists before creating AGENTS.md"
        }
      ],
      "multiple": false
    }
  ]
}
```

**Output:**
```
User has answered your questions: "This repo is currently empty. What kind of project will QuestSnapViewer be?"="Web app (React/Vue/etc)". You can now continue with the user's answers in mind.
```

_Thinking:_



---

## Assistant (Build · Big Pickle · 14.9s)

_Thinking:_

The user says this will be a web app (React/Vue/etc). The repo is currently empty. According to the instructions, I should be careful about what to include in AGENTS.md:

1. "Only ask the user questions if the repo cannot answer something important"
2. "Do not ask about anything the repo already makes clear"
3. "When in doubt, omit"
4. "Exclude generic software advice"
5. "Exclude content better stored in another file referenced via opencode.json instructions"

The repo is empty - there's nothing to investigate. The user says it will be a "Web app (React/Vue/etc)" but there's no code, no config, no documentation yet.

Given the instructions:
- "Every line should answer: 'Would an agent likely miss this without help?'"
- "If not, leave it out"
- "When in doubt, omit"
- "Good AGENTS.md content is usually hard-earned context that took reading multiple files to infer"

Since the repo is empty, there's no "hard-earned context" yet. Creating an AGENTS.md now would be speculative and would likely contain generic advice, which the instructions explicitly say to exclude.

I should probably not create an AGENTS.md file yet, or create a very minimal one that just acknowledges the project type. But actually, the instructions say:
- "Exclude generic software advice"
- "Exclude obvious language conventions"
- "Exclude speculative claims or anything you could not verify"

A web app (React/Vue/etc) is too vague - I couldn't verify any specific framework conventions. And there's nothing to extract from the repo.

However, I could create a very minimal AGENTS.md that just has a placeholder noting it's a web app project. But that would be speculation.

Actually, let me reconsider. The user explicitly asked me to "Create or update AGENTS.md for this repository." They also said the project will be a "Web app (React/Vue/etc)".

Given the instructions say "If AGENTS.md already exists at /, improve it in place rather than rewriting blindly" - but it doesn't exist yet.


Since the repo is empty and there's no verifiable context to extract, creating a meaningful AGENTS.md isn't possible yet. The instructions are clear about excluding speculative content and generic advice. I should hold off on creating the file until there's actual code, configuration, or documentation to draw from.

The repo is empty—there's nothing to verify or extract yet. Creating `AGENTS.md` now would be speculative and violate the "no speculative claims" rule.

I'll skip creating it until you've added at least a README, package.json, or framework config.

_Thinking:_



---

## User

Ich möchte eine Web-App bauen, die Fotos zu verschiedenen Themen von verschiedenen Gruppen präsentiert und ermöglicht zu bewerten und die Punkte zusammen zu zählen, die jedes Team bekommen hat. , Ich möchte, dass das komplette Projekt eine statische Web App ist, die ich auf jeden beliebigen Server in jeden beliebigen Unterordner kopieren kann, also alles mit komplett relativen Faden. , Jetzt fangen wir mal damit an was die App grundsätzlich können soll. Also ich habe eine Reihe von Bildern die ich alle zusammen markieren möchte und "padrack and Rob" in die App hochladen möchte. Die müssen nirgendwo gespeichert werden. Es reicht wenn die lokal in der App verfügbar sind. und das ist das, was wir hier im Jahr 2020 hier im Jahr 2020 sind. , Die Daten haben ein festes Format. Hier ist ein Beispiel. "QuestSnap-001-name-prompt.jpg" Ich erkläre dir ganz kurz den Aufbau des Dateinamen. Questsnap ist immer am Beginn des Dateinams. 001 ist stellvertretend für eine fortlaufende ID, Dann kommt der Person oder Gruppenname hier mit Name gekennzeichnet. Und nach dem letzten Minus, was hier angegeben wird, wo Prompt steht, kommt ein Satz oder Gruppe an Wörtern, die einen Prompt gibt, der im Bild abgebildet ist. . Ich werde dir eine ganze Gruppe von Bildern auf einmal per Drag & Drop Interface hochladen. Zu Beginn der Auswertung. Da sind durchlaufende ID-Nomen mit eventuellen Lücken von verschiedenen Gruppen vorhanden. , Das Ziel ist es die Bilder pro ID von allen Gruppen miteinander zu vergleichen. Wir beginnen bei der ID 001 und gehen bis zur höchsten ID, die du im gesamten Datensatz findest. Grundsätzlich wollen wir nach und nach in einem Interface jeder ID durchgehen, wo wir die Bilder von allen Gruppen sehen können und diese dann bewerten können, wo wir der Gruppe einen Punkt geben oder der Gruppe keinen Punkt geben. Als Überschrift von jedem einzelnen Vergleichsbildschirm pro ID soll es eine Überschrift geben mit der Prompt zu den entsprechenden Bildern und ich möchte, dass jedes Team, das an dem kompletten Datensatz teilgenommen hat, eine Spalte kriegt. Wenn ein Team zu einer ID kein Foto im Datensatz hat, dann bleibt das leer und bekommt einen Marker, der zeigt, dass das Bild nicht vorhanden war. Ich möchte, dass es die Möglichkeit gibt, bei jedem Bild zu markieren, ob es einen Punkt gibt oder ob es keinen Punkt gibt.Wenn es einen Punkt dafür gibt, bekommt das Bild einen grünen Rahmen und wenn es keinen Punkt bekommt, bekommt es einen roten Rahmen.Wenn eine Gruppe zu einer EDI kein Bild hat, wird automatisch der rote Rahmen gesetzt, so dass ich dies nicht setzen muss.Unter jedem Bild steht auch der Gruppenname und dabei steht der bisherige aufsummierte Punktestand.Sobald ich mit der Maus über ein Bild hover möchte ich das zwei Button kommen. Ein grüner mit einem Haken, der mir ermöglicht, das Bild zu markieren, als mit einem Punkt und ein Button mit einem roten Kreuz, der es als rot markiert. Unten rechts möchte ich einen großen Button, der weitergeht, in blau, um zur nächsten Folie zu kommen.Und ich möchte daneben noch zwei etwas kleinere Button zum Weiterkommen einen grünen, der automatisch alle Bilder als grün setzt und einen roten, der automatisch alle Bilder als rot setzt, bevor sie weitergehen. Es soll auf der linken unteren Seite auch einen Button zurückgeben, um die vorherigen Bilder noch einmal zu bewerten. Bitte stelle sehr detailliert Fragen zu allem was für dich noch unklar ist.

---

## Assistant (Plan · Big Pickle · 461.9s)

_Thinking:_

Got it, let's tackle this. First, the user is in Plan Mode now, right? Wait, the system reminder says Plan Mode is active, so I can't make any edits, only ask questions, observe, etc. But the user just gave a detailed description of what they want for QuestSnapViewer, a static web app for rating photos from groups, and wants me to ask detailed questions about unclear points.

First, let's list out all the points the user mentioned, then identify what's still unclear. Let's go through their request step by step:

1. Static web app, all relative paths, can be copied to any subfolder on any server. No backend, all client-side, images uploaded via drag-drop at start, stored locally in the app (no server storage).
2. Image filename format: QuestSnap-001-name-prompt.jpg. Breakdown: QuestSnap (fixed prefix), 001 (sequential ID, may have gaps), name (person/group name), prompt (the text after last minus, the prompt the image depicts).
3. Upload: Drag-drop multiple images at the start of evaluation.
4. Workflow: Process IDs sequentially from 001 to highest ID present. For each ID, show all groups' images for that ID, compare, rate each (green = point, red = no point). If a group has no image for an ID, auto red, marked as missing.
5. UI per ID:
   - Heading: The prompt text for that ID (from the image filenames, right? Wait, the prompt is per image? Wait user said: "Überschrift von jedem einzelnen Vergleichsbildschirm pro ID soll es eine Überschrift geben mit der Prompt zu den entsprechenden Bildern" — so per ID, what's the prompt? Are all images for the same ID supposed to have the same prompt? Because the filename has prompt after the last minus. Wait, user said "QuestSnap-001-name-prompt.jpg" — so for ID 001, different groups (name) have different prompts? Or is the prompt same per ID? That's a point to clarify.
   - Columns per team/group that participated in the entire dataset. So first, we need to extract all unique group names from all uploaded images, right?
   - Each image (or missing placeholder) has group name, current accumulated points below.
   - Hover over image: show green check button (award point) and red cross (no point). Wait, but if the image is missing, auto red, can that be changed? User said "Wenn eine Gruppe zu einer ID kein Bild hat, wird automatisch der rote Rahmen gesetzt, so dass ich dies nicht setzen muss." So missing ones are locked to red? Or can you override?
   - Below each image: group name, current total points.
   - Navigation: Bottom right big blue "next" button. Next to it: smaller green (auto-all-green for current ID) and red (auto-all-red for current ID) buttons. Bottom left: "back" button to previous ID.
   - Rating states: Green border = point, red = no point. Missing images auto red.

Now, what's unclear here? Let's list the questions I need to ask, making sure to cover all ambiguities:

First, filename and prompt questions:
- For a given ID (e.g., 001), can different groups have different prompt texts in their filenames? Or is the prompt per ID (so all images for ID 001 should have the same prompt, and we use that for the heading)? Because the filename structure is QuestSnap-{ID}-{group}-{prompt}.jpg — so prompt is per image, not per ID. So if two groups have ID 001, their prompts might differ. What do we use as the heading for ID 001? The user said "Überschrift... mit der Prompt zu den entsprechenden Bildern" — plural? Or is there a single prompt per ID?

Second, group extraction:
- Groups are extracted from all uploaded images, right? So the list of teams/columns is all unique {group name} values from the uploaded filenames? Correct?

Third, ID handling:
- IDs are numeric, sequential? The user said "fortlaufende ID-Nomen mit eventuellen Lücken" — so IDs are like 001, 002, 005 (gap at 003,004). We go from lowest to highest ID present, skipping gaps? Or process all IDs from 001 to max ID, even if no images exist for that ID? Wait user said "wir beginnen bei der ID 001 und gehen bis zur höchsten ID, die du im gesamten Datensatz findest." So if highest ID is 005, but no images for 003,004, do we still show ID 003 and 004 with all groups missing? Or only IDs that have at least one image? Wait user said "ID-Nomen mit eventuellen Lücken von verschiedenen Gruppen vorhanden" — so gaps between existing IDs, not IDs with no images at all. Wait let's re-read: "Da sind durchlaufende ID-Nomen mit eventuellen Lücken von verschiedenen Gruppen vorhanden." Oh, so the IDs are sequential with possible gaps (like 001,002,005 — gap at 003,004) — so we process every ID from min to max, even if no images for that ID? Or only IDs that have at least one image? Because if an ID has no images at all, all groups would be missing, that's a useless screen. Need to clarify.

Fourth, rating persistence:
- Ratings are stored where? Since it's a static app, no backend. So in the browser's local storage? Or only in memory during the session? If the user refreshes the page, are ratings lost? Or do we save to localStorage? User didn't mention, but that's important. Because if you close the tab, do you lose all ratings?

Fifth, image storage:
- User said "Die müssen nirgendwo gespeichert werden. Es reicht wenn die lokal in der App verfügbar sind." So after uploading via drag-drop, the images are stored in the browser's memory (or IndexedDB?) during the session? So if you refresh, you have to re-upload all images? Correct? Because no server storage. So upload is per session, ratings are per session unless we use localStorage. Need to clarify if ratings should persist across page refreshes (using localStorage) or only in-memory.

Sixth, prompt heading per ID:
- As earlier: each image has its own prompt in the filename (after last minus). For a given ID, there are multiple images (one per group). What is the heading for that ID's screen? Is it the prompt from one of the images? Or a combination? Or did the user mean that the prompt is per ID, so all images for the same ID have the same prompt? Because the filename example is "QuestSnap-001-name-prompt.jpg" — if prompt is per ID, then the "prompt" part would be same for all 001 images. But the user said "wo Prompt steht, kommt ein Satz oder Gruppe an Wörtern, die einen Prompt gibt, der im Bild abgebildet ist." So per image prompt. So need to clarify: what's the heading for ID X's screen?

Seventh, auto-set buttons:
- The green button next to "next" sets all images for the current ID to green (point), red button sets all to red. What about groups that have no image for the current ID? They are auto-red, do the auto-set buttons affect them? Or leave them as auto-red?

Eighth, missing image handling:
- For a group with no image for current ID: auto-red, can the user change that? Or is it locked? User said "wird automatisch der rote Rahmen gesetzt, so dass ich dies nicht setzen muss." So "nicht setzen muss" — does that mean you can't change it, or you don't have to, but can if you want?

Ninth, image display:
- How should images be displayed? Fixed size? Responsive? Max height/width? Since it's a static app, no backend, so images are loaded from the uploaded files (as data URLs presumably, since they are stored in the browser).

Tenth, group name display:
- The group name is from the filename's {name} part. Should we sanitize that? Or display as-is?

Eleventh, ID format:
- IDs are always 3 digits? Like 001, 002, up to 999? Or can they be variable length? User used 001 as example, said "fortlaufende ID" — so numeric, possibly zero-padded to 3 digits? Need to confirm: are IDs always zero-padded to 3 digits, or can they be 1, 2, 3 digits?

Twelfth, file extensions:
- User used .jpg as example. Do we support other image formats? Like .png, .webp? Or only .jpg/.jpeg?

Thirteenth, upload constraints:
- Can users upload images after the initial upload? Or only once at the start? User said "Zu Beginn der Auswertung" — so only once at the start? Or can you add more images later?

Fourteenth, scoring:
- Each image (that exists) can get 0 or 1 point, right? No partial points? User said "einen Punkt geben oder der Gruppe keinen Punkt geben" — so 1 or 0 per image. Total per group is sum of points across all IDs they have images for. Correct?

Fifteenth, UI layout:
- Per ID screen: columns per group. How many groups max? Should the layout be responsive, wrap if there are many groups? Or horizontal scroll?

Sixteenth, navigation:
- When clicking "next", does it go to the next ID that has at least one image? Or next sequential ID even if no images? User said "gehen bis zur höchsten ID, die du im gesamten Datensatz findest." So "im gesamten Datensatz" — so IDs present in the dataset. So if dataset has IDs 001,002,005, then next goes 001 → 002 → 005, skipping 003,004? Or 001 → 002 → 003 (no images) → 004 (no images) → 005? Need to clarify.

Seventeenth: Prompt extraction for heading: If per ID, multiple images have different prompts, which one to use? Or is the prompt per ID, meaning all images for same ID have same prompt? That's a critical point. Let's structure the questions properly, using the question tool, but wait: the user said "Bitte stelle sehr detailliert Fragen zu allem was für dich noch unklar ist." And we are in Plan Mode, but can we use the question tool? Wait the system reminder says Plan Mode is active, but the question tool is allowed? Wait the system reminder says: "You may ONLY observe, analyze, and plan. Ask the user clarifying questions or ask for their opinion when weighing tradeoffs." Oh right, the system reminder says we can ask questions. Also, the question tool is available.

Wait but let's make sure the questions are clear, grouped logically, not too many in one batch? Wait the user said "sehr detailliert Fragen zu allem was für dich noch unklar ist." So let's group the questions into categories, make them clear, each with options where possible.

Wait also, the user wrote in German, so I should respond in German? Wait the user's last message is in German, so yes, ask questions in German.

Wait let's list all the unclear points again, structure them into questions:

First category: Dateinamen & Datensatz
1. Sind IDs immer 3-stellig mit führenden Nullen (wie 001, 002,... 999) oder können sie variabel lang sein (z. B. 1, 2, 10)?
2. Im Dateinamen steht nach der Gruppenname noch der Prompt (nach dem letzten Minus). Gilt der Prompt pro Bild oder pro ID? Also: Haben alle Bilder mit derselben ID (z. B. 001) denselben Prompt, oder kann jede Gruppe einen eigenen Prompt für die ID haben?
3. Welche Bildformate sollen unterstützt werden? Nur .jpg/.jpeg wie im Beispiel, oder auch .png, .webp etc.?
4. Werden Bilder nur einmal zu Beginn der Auswertung hochgeladen, oder kann man später noch Bilder hinzufügen?

Second category: ID-Verarbeitung
5. Verarbeiten wir nur IDs, zu denen es mindestens ein Bild gibt (also ID 001, 002, 005 wenn 003/004 keine Bilder haben), oder alle IDs von der kleinsten bis zur größten ID im Datensatz (also auch 003/004 anzeigen, auch wenn alle Gruppen dort keine Bilder haben)?
6. Was passiert, wenn eine ID gar keine Bilder hat? Alle Gruppen als fehlend anzeigen?

Third category: Bewertung & Speicherung
7. Wo sollen die Bewertungen gespeichert werden? Nur im Arbeitsspeicher während der Sitzung (verloren beim Neuladen der Seite), oder im localStorage des Browsers (erhalten nach Neuladen/Seitenschließung)?
8. Sind fehlende Bilder (Gruppe hat kein Bild für die ID) dauerhaft auf rot gesetzt und nicht änderbar, oder kann man den Status auch manuell ändern?
9. Die "Auto-All-Green" und "Auto-All-Red" Buttons neben dem "Weiter" Button: Gelten diese auch für Gruppen, die kein Bild für die aktuelle ID haben (die ja automatisch rot sind)?

Fourth category: UI & Anzeige
10. Was genau soll als Überschrift für den Vergleichsbildschirm einer ID angezeigt werden? Falls pro ID unterschiedliche Prompts in den Bildern stehen: Welchen Prompt nehmen wir?
11. Wie sollen die Bilder der Gruppen angeordnet werden? Spalten nebeneinander (horizontal scrollbar bei vielen Gruppen) oder umgebrochen bei zu vielen Gruppen?
12. Bilder: Sollen die eine feste Größe haben, oder responsiv skalieren? Maximalhöhe/-breite?
13. Der aktuelle Punktestand unter jedem Bild: Bezieht sich dieser auf die Summe aller bisher bewerteten IDs, oder nur auf die bisherigen IDs?

Fifth category: Navigation
14. Der "Zurück" Button unten links: Geht der zur vorherigen ID in der Reihenfolge, oder zur vorherigen bewerteten ID?
15. Kann man auch zu einer beliebigen ID springen, oder nur vorwärts/rückwärts nacheinander?

Wait that's a lot, but the user asked for very detailed questions. Also, make sure to use the question tool properly, each question with options where possible. Wait but the question tool takes an array of questions, each with header, question, options. Let's structure them properly, maybe group some, but the tool allows multiple questions. Wait but let's check the question tool schema: it takes "questions" array, each item has "question" (string), "header" (short label, max 30 chars), "options" (array of label/description), "multiple" (boolean).

So let's create each question with appropriate options, make sure headers are short. Let's prioritize the most critical ones first, but the user wants all unclear points. Wait but maybe batch them, but the tool can take multiple questions. Let's list them all, each as a separate question in the array.

Wait but let's make sure the options are clear. For example, question 1: ID format. Options: ["Immer 3-stellig mit führenden Nullen (001, 002...)", "Variabel lang (1, 2, 10...)"].

Question 2: Prompt pro Bild oder pro ID. Options: ["Pro ID: Alle Bilder derselben ID haben denselben Prompt", "Pro Bild: Jede Gruppe kann einen eigenen Prompt für die ID haben"].

Question 3: Bildformate. Options: ["Nur .jpg/.jpeg", "Alle gängigen Web-Bildformate (.jpg, .png, .webp, .gif)"].

Question 4: Upload timing. Options: ["Nur einmal zu Beginn der Auswertung", "Auch später noch Bilder hinzufügen möglich"].

Question 5: ID-Verarbeitung (IDs mit keinem Bild). Options: ["Nur IDs mit mindestens einem Bild verarbeiten", "Alle IDs von min bis max ID im Datensatz, auch wenn keine Bilder vorhanden sind"].

Question 6: Bewertungsspeicherung. Options: ["Nur im Arbeitsspeicher (verloren beim Neuladen)", "Im localStorage (erhalten nach Neuladen/Seitenschließung)"].

Question 7: Fehlende Bilder (kein Bild der Gruppe). Options: ["Dauerhaft rot, nicht änderbar", "Automatisch rot, aber manuell änderbar"].

Question 8: Auto-Buttons gelten auch für fehlende Bilder? Options: ["Ja, auch fehlende Bilder werden auf green/red gesetzt", "Nein, nur Bilder die existieren"].

Question 9: Überschrift pro ID. Options: ["Nimmt den Prompt des ersten Bildes der ID", "Nimmt den Prompt aller Bilder (falls unterschiedlich, Liste)", "Prompt ist pro ID gleich, also alle Bilder haben denselben Prompt"]. Wait but this depends on question 2. Maybe if question 2 says pro ID, then this is easy. But maybe we can link them? But the question tool doesn't support conditional questions. So maybe ask question 2 first, but no, the tool sends all at once. Alternatively, make question 9 conditional on question 2's answer, but since we can't do that, just ask both.

Question 10: Layout der Gruppen-Spalten. Options: ["Nebeneinander, horizontal scrollbar bei vielen Gruppen", "Umbruch auf nächste Zeile bei zu vielen Gruppen", "Feste Anzahl pro Zeile, Rest neue Zeile"].

Question 11: Bildgröße. Options: ["Responsiv, füllt verfügbaren Platz in der Spalte", "Feste Maximalgröße (z. B. 300px Breite)", "Vollbildansicht bei Klick"].

Question 12: Punktestand unter dem Bild. Options: ["Summe aller bisher bewerteten IDs", "Summe aller IDs (auch noch nicht bewertete? Nein, da noch nicht bewertet)", "Nur die Punkte der aktuellen ID? Nein, user said 'bisherige aufsummierte Punktestand'"].

Question 13: Zurück-Button. Options: ["Geht zur vorherigen ID in der Reihenfolge", "Geht zur vorherigen bewerteten ID (falls man welche übersprungen hat)"].

Wait but the user said "Bitte stelle sehr detailliert Fragen zu allem was für dich noch unklar ist." So all these are relevant. Now, let's format them into the question tool's required format. Each question has header (max 30 chars), question (full question), options (array of label/description), multiple (false for all, since single choice).

Wait also, some questions are dependent, but since we can't do conditional, we just ask all. Also, make sure the options are clear. Let's write each question properly.

Wait also, the user mentioned "im Jahr 2020" twice, probably a typo, ignore that.

Now, let's structure the question tool call. Let's list all the questions:

1. Header: "ID Format"
Question: "Sind IDs im Dateinamen immer 3-stellig mit führenden Nullen (wie 001, 002) oder variabel lang (z. B. 1, 2, 10)?"
Options: [
  {"label": "3-stellig mit führenden Nullen", "description": "IDs wie 001, 002, bis 999"},
  {"label": "Variabel lang", "description": "IDs wie 1, 2, 10, keine führenden Nullen"}
]
Multiple: false

2. Header: "Prompt pro"
Question: "Gilt der Prompt im Dateinamen (nach dem letzten Minus) pro Bild oder pro ID? Also haben alle Bilder derselben ID denselben Prompt, oder kann jede Gruppe einen eigenen Prompt für die ID haben?"
Options: [
  {"label": "Pro ID (alle gleich)", "description": "Alle Bilder mit derselben ID haben denselben Prompt"},
  {"label": "Pro Bild (je Gruppe)", "description": "Jede Gruppe kann einen eigenen Prompt für die ID im Bild haben"}
]
Multiple: false

3. Header: "Bildformate"
Question: "Welche Bildformate sollen unterstützt werden?"
Options: [
  {"label": "Nur .jpg/.jpeg", "description": "Wie im Beispiel angegeben"},
  {"label": "Alle gängigen Formate", "description": "Z. B. .png, .webp, .gif zusätzlich"}
]
Multiple: false

4. Header: "Upload Zeitpunkt"
Question: "Können Bilder nur einmal zu Beginn der Auswertung hochgeladen werden, oder auch später noch hinzugefügt?"
Options: [
  {"label": "Nur zu Beginn", "description": "Einmaliger Upload vor der Auswertung"},
  {"label": "Auch später möglich", "description": "Upload jederzeit während der Auswertung möglich"}
]
Multiple: false

5. Header: "ID Verarbeitung"
Question: "Sollen nur IDs verarbeitet werden, zu denen es mindestens ein Bild gibt, oder alle IDs von der kleinsten bis zur größten ID im Datensatz (auch wenn keine Bilder vorhanden sind)?"
Options: [
  {"label": "Nur IDs mit Bildern", "description": "Überspringt IDs ohne Bilder"},
  {"label": "Alle IDs min bis max", "description": "Zeigt auch IDs ohne Bilder an (alle Gruppen fehlen)"}
]
Multiple: false

6. Header: "Bewertung Speicher"
Question: "Wo sollen die Bewertungen gespeichert werden?"
Options: [
  {"label": "Nur Arbeitsspeicher", "description": "Verloren beim Neuladen der Seite"},
  {"label": "localStorage", "description": "Erhalten nach Neuladen/Seitenschließung"}
]
Multiple: false

7. Header: "Fehlende Bilder"
Question: "Gruppen ohne Bild für eine ID werden automatisch rot markiert. Kann dieser Status manuell geändert werden?"
Options: [
  {"label": "Nicht änderbar", "description": "Dauerhaft rot, keine manuelle Änderung"},
  {"label": "Änderbar", "description": "Automatisch rot, aber manuell auf grün setzbar"}
]
Multiple: false

8. Header: "Auto-Buttons"
Question: "Die Buttons 'Alle Grün' und 'Alle Rot' neben dem 'Weiter' Button: Gelten diese auch für Gruppen ohne Bild für die aktuelle ID?"
Options: [
  {"label": "Ja", "description": "Auch fehlende Bilder werden gesetzt"},
  {"label": "Nein", "description": "Nur existierende Bilder werden gesetzt"}
]
Multiple: false

9. Header: "ID Überschrift"
Question: "Was soll als Überschrift für den Vergleichsbildschirm einer ID angezeigt werden? (Falls Pro Bild Prompts gewählt wurde)"
Options: [
  {"label": "Prompt des ersten Bildes", "description": "Nimmt den Prompt des ersten gefundenen Bildes der ID"},
  {"label": "Alle Prompts anzeigen", "description": "Listet alle unterschiedlichen Prompts der ID auf"},
  {"label": "Prompt ist pro ID gleich", "description": "Alle Bilder haben denselben Prompt, also keine Unterschiede"}
]
Multiple: false

10. Header: "Gruppen Layout"
Question: "Wie sollen die Gruppen-Spalten pro ID angeordnet werden?"
Options: [
  {"label": "Horizontal nebeneinander", "description": "Scrollbar bei zu vielen Gruppen"},
  {"label": "Umbruch bei Bedarf", "description": "Zeilenumbruch wenn Platz nicht ausreicht"}
]
Multiple: false

11. Header: "Bildgröße"
Question: "Wie sollen die Bilder skaliert werden?"
Options: [
  {"label": "Responsiv", "description": "Füllt den verfügbaren Platz in der Spalte"},
  {"label": "Feste Max-Größe", "description": "Z. B. 300px Breite, 400px Höhe Max"}
]
Multiple: false

12. Header: "Punktestand"
Question: "Der Punktestand unter jedem Bild: Summe welcher Punkte?"
Options: [
  {"label": "Bisher bewertete IDs", "description": "Summe aller IDs, die schon bewertet wurden"},
  {"label": "Alle IDs (auch unbewertet?)", "description": "Nein, unbewertete haben noch keinen Punktstatus"}
]
Wait, maybe adjust: "Summe aller bisher bewerteten IDs (also alle IDs bis zur aktuellen inklusive)"? User said "bisherige aufsummierte Punktestand" — so up to the current point, right?

13. Header: "Zurück Button"
Question: "Wohin navigiert der 'Zurück' Button unten links?"
Options: [
  {"label": "Vorherige ID in Reihenfolge", "description": "Geht zur ID vor der aktuellen in der Liste"},
  {"label": "Vorherige bewertete ID", "description": "Falls IDs übersprungen wurden"}
]
Multiple: false

Wait that's 13 questions, which is okay. The question tool allows multiple questions. Now, let's make sure all headers are under 30 chars, which they are.

Now, call the question tool with all these questions. Wait but the user is in Plan Mode, but the system reminder says we can ask questions. The question tool is allowed, right? Because the system reminder says "Ask the user clarifying questions or ask for their opinion when weighing tradeoffs." So yes.

Wait also, the user wrote in German, so all questions are in German, which is correct.

Now, let's format the function call properly

**Tool: question**

**Input:**
```json
{
  "questions": [
    {
      "header": "ID Format",
      "question": "Sind IDs im Dateinamen immer 3-stellig mit führenden Nullen (wie 001, 002) oder variabel lang (z. B. 1, 2, 10)?",
      "options": [
        {
          "label": "3-stellig mit führenden Nullen",
          "description": "IDs wie 001, 002, bis 999"
        },
        {
          "label": "Variabel lang",
          "description": "IDs wie 1, 2, 10, keine führenden Nullen"
        }
      ],
      "multiple": false
    },
    {
      "header": "Prompt pro",
      "question": "Gilt der Prompt im Dateinamen (nach dem letzten Minus) pro Bild oder pro ID? Also haben alle Bilder derselben ID denselben Prompt, oder kann jede Gruppe einen eigenen Prompt für die ID haben?",
      "options": [
        {
          "label": "Pro ID (alle gleich)",
          "description": "Alle Bilder mit derselben ID haben denselben Prompt"
        },
        {
          "label": "Pro Bild (je Gruppe)",
          "description": "Jede Gruppe kann einen eigenen Prompt für die ID im Bild haben"
        }
      ],
      "multiple": false
    },
    {
      "header": "Bildformate",
      "question": "Welche Bildformate sollen unterstützt werden?",
      "options": [
        {
          "label": "Nur .jpg/.jpeg",
          "description": "Wie im Beispiel angegeben"
        },
        {
          "label": "Alle gängigen Formate",
          "description": "Z. B. .png, .webp, .gif zusätzlich"
        }
      ],
      "multiple": false
    },
    {
      "header": "Upload Zeitpunkt",
      "question": "Können Bilder nur einmal zu Beginn der Auswertung hochgeladen werden, oder auch später noch hinzugefügt?",
      "options": [
        {
          "label": "Nur zu Beginn",
          "description": "Einmaliger Upload vor der Auswertung"
        },
        {
          "label": "Auch später möglich",
          "description": "Upload jederzeit während der Auswertung möglich"
        }
      ],
      "multiple": false
    },
    {
      "header": "ID Verarbeitung",
      "question": "Sollen nur IDs verarbeitet werden, zu denen es mindestens ein Bild gibt, oder alle IDs von der kleinsten bis zur größten ID im Datensatz (auch wenn keine Bilder vorhanden sind)?",
      "options": [
        {
          "label": "Nur IDs mit Bildern",
          "description": "Überspringt IDs ohne Bilder"
        },
        {
          "label": "Alle IDs min bis max",
          "description": "Zeigt auch IDs ohne Bilder an (alle Gruppen fehlen)"
        }
      ],
      "multiple": false
    },
    {
      "header": "Bewertung Speicher",
      "question": "Wo sollen die Bewertungen gespeichert werden?",
      "options": [
        {
          "label": "Nur Arbeitsspeicher",
          "description": "Verloren beim Neuladen der Seite"
        },
        {
          "label": "localStorage",
          "description": "Erhalten nach Neuladen/Seitenschließung"
        }
      ],
      "multiple": false
    },
    {
      "header": "Fehlende Bilder",
      "question": "Gruppen ohne Bild für eine ID werden automatisch rot markiert. Kann dieser Status manuell geändert werden?",
      "options": [
        {
          "label": "Nicht änderbar",
          "description": "Dauerhaft rot, keine manuelle Änderung"
        },
        {
          "label": "Änderbar",
          "description": "Automatisch rot, aber manuell auf grün setzbar"
        }
      ],
      "multiple": false
    },
    {
      "header": "Auto-Buttons",
      "question": "Die Buttons 'Alle Grün' und 'Alle Rot' neben dem 'Weiter' Button: Gelten diese auch für Gruppen ohne Bild für die aktuelle ID?",
      "options": [
        {
          "label": "Ja",
          "description": "Auch fehlende Bilder werden gesetzt"
        },
        {
          "label": "Nein",
          "description": "Nur existierende Bilder werden gesetzt"
        }
      ],
      "multiple": false
    },
    {
      "header": "ID Überschrift",
      "question": "Was soll als Überschrift für den Vergleichsbildschirm einer ID angezeigt werden? (Falls Pro Bild Prompts gewählt wurde)",
      "options": [
        {
          "label": "Prompt des ersten Bildes",
          "description": "Nimmt den Prompt des ersten gefundenen Bildes der ID"
        },
        {
          "label": "Alle Prompts anzeigen",
          "description": "Listet alle unterschiedlichen Prompts der ID auf"
        },
        {
          "label": "Prompt ist pro ID gleich",
          "description": "Alle Bilder haben denselben Prompt, also keine Unterschiede"
        }
      ],
      "multiple": false
    },
    {
      "header": "Gruppen Layout",
      "question": "Wie sollen die Gruppen-Spalten pro ID angeordnet werden?",
      "options": [
        {
          "label": "Horizontal nebeneinander",
          "description": "Scrollbar bei zu vielen Gruppen"
        },
        {
          "label": "Umbruch bei Bedarf",
          "description": "Zeilenumbruch wenn Platz nicht ausreicht"
        }
      ],
      "multiple": false
    },
    {
      "header": "Bildgröße",
      "question": "Wie sollen die Bilder skaliert werden?",
      "options": [
        {
          "label": "Responsiv",
          "description": "Füllt den verfügbaren Platz in der Spalte"
        },
        {
          "label": "Feste Max-Größe",
          "description": "Z. B. 300px Breite, 400px Höhe Max"
        }
      ],
      "multiple": false
    },
    {
      "header": "Punktestand",
      "question": "Der Punktestand unter jedem Bild: Summe welcher Punkte?",
      "options": [
        {
          "label": "Bisher bewertete IDs",
          "description": "Summe aller IDs, die schon bewertet wurden"
        },
        {
          "label": "Alle IDs bis aktuell",
          "description": "Summe aller IDs bis zur aktuellen inklusive"
        }
      ],
      "multiple": false
    },
    {
      "header": "Zurück Button",
      "question": "Wohin navigiert der 'Zurück' Button unten links?",
      "options": [
        {
          "label": "Vorherige ID in Reihenfolge",
          "description": "Geht zur ID vor der aktuellen in der Liste"
        },
        {
          "label": "Vorherige bewertete ID",
          "description": "Falls IDs übersprungen wurden"
        }
      ],
      "multiple": false
    }
  ]
}
```

**Output:**
```
User has answered your questions: "Sind IDs im Dateinamen immer 3-stellig mit führenden Nullen (wie 001, 002) oder variabel lang (z. B. 1, 2, 10)?"="3-stellig mit führenden Nullen", "Gilt der Prompt im Dateinamen (nach dem letzten Minus) pro Bild oder pro ID? Also haben alle Bilder derselben ID denselben Prompt, oder kann jede Gruppe einen eigenen Prompt für die ID haben?"="Pro ID (alle gleich)", "Welche Bildformate sollen unterstützt werden?"="Nur .jpg/.jpeg", "Können Bilder nur einmal zu Beginn der Auswertung hochgeladen werden, oder auch später noch hinzugefügt?"="Nur zu Beginn", "Sollen nur IDs verarbeitet werden, zu denen es mindestens ein Bild gibt, oder alle IDs von der kleinsten bis zur größten ID im Datensatz (auch wenn keine Bilder vorhanden sind)?"="Alle IDs min bis max", "Wo sollen die Bewertungen gespeichert werden?"="localStorage", "Gruppen ohne Bild für eine ID werden automatisch rot markiert. Kann dieser Status manuell geändert werden?"="Änderbar", "Die Buttons 'Alle Grün' und 'Alle Rot' neben dem 'Weiter' Button: Gelten diese auch für Gruppen ohne Bild für die aktuelle ID?"="Wenn alle rot gesetzt werden, dann werden alle Bilder rot gesetzt, auch die nicht vorhandenen. wenn alles grün gesetzt wird, dann nur bei Bildern, die vorhanden sind.", "Was soll als Überschrift für den Vergleichsbildschirm einer ID angezeigt werden? (Falls Pro Bild Prompts gewählt wurde)"="Prompt ist pro ID gleich", "Wie sollen die Gruppen-Spalten pro ID angeordnet werden?"="nebeneinander, mache sie so klein, dass alle nebeneinander passen. mach oben rechts von der gesamten Seite aber auch eine kleine plus-Lupe und minus-Lupe die die Anzahl der Gruppenpro Bild vergrößert oder verringert und dann die Seite scrollbar zur Seite macht für den Fall dass nicht alle Gruppen auf einmal angezeigt werden können", "Wie sollen die Bilder skaliert werden?"="Responsiv", "Der Punktestand unter jedem Bild: Summe welcher Punkte?"="Es sollen jeweils alle bis dahin bewertete IDs pro Gruppe angezeigt werden.", "Wohin navigiert der 'Zurück' Button unten links?"="Vorherige ID in Reihenfolge". You can now continue with the user's answers in mind.
```

_Thinking:_



---

## Assistant (Plan · Big Pickle · 110.0s)

_Thinking:_

Got it, let's start processing all the user's requirements and the answers to the questions. First, I need to make sure I have all the details straight before planning the implementation.

First, let's recap the core requirements:

1. Static web app, all relative paths, can be deployed to any subdirectory on any server. No backend, everything client-side.
2. Image upload: Drag & drop multiple JPGs at the start, no server storage, only in-browser.
3. Image filename format: QuestSnap-XXX-GROUPNAME-PROMPT.jpg (XXX is 3-digit zero-padded ID, same prompt per ID, GROUPNAME is team name, PROMPT is the prompt text after last minus).
4. Processing flow: Parse all uploaded images, extract IDs (3-digit, zero-padded), groups, prompts. Generate all IDs from min to max (including gaps, even if no images exist for some IDs).
5. Evaluation UI: Per ID (in order from 001 to max ID), show:
   - Heading: The prompt for that ID (all same per ID)
   - Columns per unique group in the dataset, each column has:
     - If image exists: show the image, hover shows green (give point) and red (no point) buttons. Clicking sets green (border + point) or red (border + no point). Below image: group name, running total points (sum of all already evaluated IDs for that group).
     - If no image exists: empty column, red border (auto-set, but can be manually changed to green? Wait user said: "Wenn ein Team zu einer ID kein Foto im Datensatz hat, wird automatisch der rote Rahmen gesetzt, so dass ich dies nicht setzen muss." But also answered that missing images' status is "Änderbar". Also, auto-red button applies to missing images, auto-green only to existing ones.
   - Buttons at bottom right: Blue "Weiter" (next ID). Next to it: Green "Alle Grün" (only existing images) and Red "Alle Rot" (all images including missing ones). Bottom left: "Zurück" (previous ID in order).
   - Top right: Plus/Minus magnifying glass to adjust number of groups per row, if too many groups, horizontal scroll enabled.
6. State storage: localStorage to persist ratings across page reloads.
7. No backend, all client-side JS, static files only. So need to use plain HTML/CSS/JS? Or maybe a small framework? Wait, the user said static web app, no build steps? Wait, but the user wants it to be copyable to any subdirectory, all relative paths. So probably vanilla JS, no build tools, because if we use React/Vue we'd need a build step, but maybe the user is okay with that? Wait no, the user said "komplette statische Web App", "alles mit komplett relativen Faden". Wait, but if we use a framework like React with Vite, we can set the base path to relative, but the user said "kein build"? Wait no, the user didn't say no build, but "statische Web App" that can be copied to any subdirectory. So maybe vanilla JS is better to avoid build steps? Or use a framework but configure it for relative paths. Wait, but the user said "Ich möchte eine Web-App bauen" and earlier chose "Web app (React/Vue/etc)" when asked. But let's check: the user said "alles mit komplett relativen Faden" so all links, scripts, styles must be relative, no absolute paths. So if we use a framework, we need to make sure the build output uses relative paths.

Wait but let's think: the user wants it to be static, so after building, the output folder can be copied anywhere. So using Vite with React would work, as we can set base: './' in vite.config.js, which makes all paths relative. That would be easier than vanilla JS for state management, UI components, etc. But let's confirm: the user didn't specify no build tools, just that the final output is static with relative paths. So maybe use Vite + React, since the user initially selected "Web app (React/Vue/etc)".

Wait but let's go back to the user's requirements: "Ich möchte, dass das komplette Projekt eine statische Web App ist, die ich auf jeden beliebigen Server in jeden beliebigen Unterordner kopieren kann, also alles mit komplett relativen Faden." So the built files must have all relative URLs. So Vite's base: './' does that.

Now, let's list all the features again with the answers:

First, image upload:
- Only at the start, drag & drop multiple JPGs.
- Parse filenames: QuestSnap-XXX-GROUP-PROMPT.jpg. Split on '-', but wait: the prompt is after the last minus. So the filename is split into parts by '-', but the first part is 'QuestSnap', second is XXX (3-digit ID), third is GROUP (could have hyphens? Wait no, the user said "nach dem letzten Minus, was hier angegeben wird, wo Prompt steht, kommt ein Satz oder Gruppe an Wörtern". Oh right! So the GROUP name is between the ID and the last minus. Wait wait, let's recheck the filename structure: "QuestSnap-001-name-prompt.jpg". So split on '-', the parts are:
0: QuestSnap
1: 001 (ID)
2: name (GROUP, but if group name has hyphens? Wait the user said "name" is the group name, then the last minus is before the prompt. So actually, the filename is: QuestSnap-{ID}-{GROUP}-{PROMPT}.jpg, where PROMPT is everything after the last hyphen before .jpg. So to parse:
- Remove the .jpg extension first.
- Split the remaining string by '-'.
- The first part is 'QuestSnap' (we can ignore or validate).
- Second part is ID (3-digit, zero-padded, e.g., 001).
- The last part is the PROMPT.
- The parts between second and last are the GROUP name (joined with '-' if they have hyphens? Wait the user's example is "QuestSnap-001-name-prompt.jpg" where GROUP is 'name', PROMPT is 'prompt'. But if GROUP is 'my-team', then filename would be QuestSnap-001-my-team-prompt.jpg, so splitting by '-', parts are ['QuestSnap', '001', 'my', 'team', 'prompt'], so GROUP is parts[2] to parts[-2] joined by '-', PROMPT is parts[-1]. Oh right! That's an important point I missed. So parsing the filename correctly:
  - Strip .jpg (or .jpeg, case-insensitive? The user said only .jpg/.jpeg, so we can check for both, but the example is .jpg).
  - Split the base filename (without extension) by '-'.
  - Find the last '-': the part after that is the PROMPT.
  - The part before the last '-': split that by '-', the second element (after QuestSnap) is the ID, the rest (between ID and last '-') is the GROUP name. Wait no: let's take the example: "QuestSnap-001-name-prompt.jpg" → base is "QuestSnap-001-name-prompt". Last '-' is before 'prompt', so PROMPT is 'prompt'. The part before last '-' is "QuestSnap-001-name". Split that by '-': ["QuestSnap", "001", "name"]. So ID is "001", GROUP is "name". Correct. Another example: "QuestSnap-002-my-cool-team-generate a cat.jpg" → base is "QuestSnap-002-my-cool-team-generate a cat". Last '-' is before 'generate a cat', so PROMPT is 'generate a cat'. Part before last '-' is "QuestSnap-002-my-cool-team". Split by '-': ["QuestSnap", "002", "my", "cool", "team"]. So ID is "002", GROUP is "my-cool-team" (joined from parts[2] to end). Oh right! So GROUP name can contain hyphens, because only the last hyphen separates the PROMPT. That's a crucial parsing detail. So we need to parse the filename by finding the last occurrence of '-' to split PROMPT, then parse ID and GROUP from the remaining part.

Wait the user said: "Questsnap ist immer am Beginn des Dateinams. 001 ist stellvertretend für eine fortlaufende ID, Dann kommt der Person oder Gruppenname hier mit Name gekennzeichnet. Und nach dem letzten Minus, was hier angegeben wird, wo Prompt steht, kommt ein Satz oder Gruppe an Wörtern, die einen Prompt gibt, der im Bild abgebildet ist." So yes: the structure is [QuestSnap]-[ID]-[GROUP NAME]-[PROMPT].jpg, where [GROUP NAME] can have hyphens, because the last hyphen is the separator between GROUP NAME and PROMPT. So parsing steps for a filename:
1. Check if filename starts with 'QuestSnap' (case-sensitive? User wrote "Questsnap" but example is "QuestSnap-001...", so case-sensitive as per example).
2. Remove the .jpg or .jpeg extension (case-insensitive? Probably, but user said only .jpg/.jpeg, so we can check if ends with .jpg or .jpeg, then remove that).
3. Split the remaining string into two parts using the last '-' as separator: leftPart and PROMPT.
   - So: lastHyphenIndex = baseFilename.lastIndexOf('-')
   - PROMPT = baseFilename.substring(lastHyphenIndex + 1)
   - leftPart = baseFilename.substring(0, lastHyphenIndex)
4. Now split leftPart by '-': parts = leftPart.split('-')
5. Check that parts[0] === 'QuestSnap' (optional validation)
6. ID = parts[1] (must be 3-digit zero-padded, e.g., 001, 012, 123)
7. GROUP_NAME = parts.slice(2).join('-') → because parts[0] is QuestSnap, parts[1] is ID, the rest is group name joined with '-'.

That's the correct parsing. Good, that's an important detail.

Next, after uploading all images, we need to:
- Collect all unique IDs (3-digit), find min ID (as number, e.g., 001 is 1) and max ID (e.g., 015 is 15). Then generate all IDs from min to max, formatted as 3-digit zero-padded (so 1 → 001, 10 → 010, etc.)
- Collect all unique group names across all images.
- For each ID in the range min to max:
  - Check which groups have an image for that ID. Store the image data (as data URL or object URL, since we can't store files, so read the file as data URL and save in state/localStorage? Wait, but localStorage has size limits (~5MB). If images are large, data URLs might exceed that. Wait the user said "Die müssen nirgendwo gespeichert werden. Es reicht wenn die lokal in der App verfügbar sind." So when uploaded, we read the files into memory, but if we reload the page, the images are lost? Wait no: the user said localStorage for ratings, but what about images? Wait the user said "Ich werde dir eine ganze Gruppe von Bildern auf einmal per Drag & Drop Interface hochladen. Zu Beginn der Auswertung." So images are only uploaded once at the start, and if you reload the page, you have to upload again? Because the user didn't mention storing images in localStorage, only ratings. Let's check: user said "Die müssen nirgendwo gespeichert werden. Es reicht wenn die lokal in der App verfügbar sind." So "lokal in der App" means in the current page's memory, not persisted. So if you reload, you lose the images and have to upload again. The ratings are stored in localStorage, but ratings are tied to the image set? Wait, what if you upload different images later? But user said "Können Bilder nur einmal zu Beginn der Auswertung hochgeladen werden, oder auch später noch hinzugefügt?" → answer was "Nur zu Beginn". So once uploaded, you can't add more, and reloading requires re-uploading. So images are stored in memory (state) during the session, not persisted. Ratings are persisted in localStorage, but we need to make sure that ratings are tied to the image set? Or maybe ratings are stored per ID per group, but if you upload a different set of images, the ratings might not match. But user didn't mention that, so maybe assume that the same image set is used, or ratings are just stored per ID and group name, which is fine.

So for images: when uploaded, read each file as a data URL (using FileReader) and store in state: { [id]: { [groupName]: { prompt: string, imageDataUrl: string } } }. Also store the list of unique groups, min ID, max ID.

Then, the ID range: from minIdNum (parsed as integer) to maxIdNum, inclusive. Each ID is formatted as 3-digit zero-padded: String(idNum).padStart(3, '0').

For each ID in this range, even if no images exist, we show a slide. For IDs with no images at all: all groups have no image, so all columns are empty, red border (auto-set). But user said "Alle IDs min bis max" including gaps, even if no images.

Now, the UI for each slide (per ID):
- Heading: The prompt for that ID. Since prompt is per ID, all images for the ID have the same prompt, so we can get it from any image for that ID, or if no images, what? Wait user said prompt is pro ID, so if no images for the ID, there is no prompt? But user said "Alle IDs min bis max" including those with no images. So for IDs with no images, what prompt to show? Maybe "Kein Prompt verfügbar" or leave empty? But user said "Prompt ist pro ID gleich", so if no images, no prompt. Maybe show "Kein Bild und kein Prompt für diese ID" as heading? But let's check user's answer: "Was soll als Überschrift für den Vergleichsbildschirm einer ID angezeigt werden?" → "Prompt ist pro ID gleich". So if no images for the ID, there is no prompt, so maybe leave heading empty or show a placeholder. But user didn't specify, so we can handle that case: if no images for the ID, heading is "Kein Prompt verfügbar".

Next, the group columns: all unique groups from the uploaded images, each in a column. For each group:
- If the group has an image for the current ID: show the image (scaled responsively), hover shows green (give point) and red (no point) buttons. Clicking either button sets the rating for that group+ID. The rating is either 'green' (1 point) or 'red' (0 points). The border of the image is green if rated green, red if rated red. If unrated, what? User didn't say, maybe no border until rated? Or default to unrated? Wait user said "Ich möchte, dass es die Möglichkeit gibt, bei jedem Bild zu markieren, ob es einen Punkt gibt oder ob es keinen Punkt gibt." So initially, unrated? But user also said "Wenn ein Team zu einer ID kein Foto im Datensatz hat, wird automatisch der rote Rahmen gesetzt, so dass ich dies nicht setzen muss." So missing images are auto-red. For existing images: unrated until user clicks. But user said "Unter jedem Bild steht auch der Gruppenname und dabei steht der bisherige aufsummierte Punktestand." The accumulated points are the sum of all ratings for that group across all IDs that have been evaluated so far. Wait user said: "Es sollen jeweils alle bis dahin bewertete IDs pro Gruppe angezeigt werden." So "bis dahin bewertete IDs" → all IDs that have already been processed (i.e., the user has clicked "Weiter" on them) are summed. So when on ID 005, the accumulated points for a group are the sum of ratings for IDs 001 to 004 (assuming we go in order). Wait no: "alle bis dahin bewertete IDs pro Gruppe angezeigt werden." So when viewing ID X, the accumulated points are the sum of all IDs that have been evaluated (i.e., the user has completed rating them and moved on) up to X-1? Or including X if rated? Let's clarify: when you are on ID X, you rate the images for X, then click Weiter to go to X+1. So the accumulated points shown under each image are the sum of all ratings for IDs that have been fully processed (i.e., before X). Or including X if you've rated them but not yet clicked Weiter? User said "bis dahin bewertete IDs" → IDs that have already been rated and moved past. So when on ID X, the accumulated points are sum of 001 to X-1. But maybe it's sum of all IDs up to the current one, including if rated. But user said "bisherige aufsummierte Punktestand" under each image, which is the total points the group has so far. So probably, every time you rate an image for the current ID, the accumulated points update immediately? Or only after moving on? User said "alle bis dahin bewertete IDs", so IDs that have been evaluated (i.e., the user has finished with them). Let's go with: when you click "Weiter" to go to the next ID, all ratings for the current ID are saved, and the accumulated points for each group include the current ID's rating. So when on ID X, the accumulated points shown are sum of 001 to X-1. When you rate X's images and click Weiter, X's ratings are added to the total.

But user said "Unter jedem Bild steht auch der Gruppenname und dabei steht der bisherige aufsummierte Punktestand." So "bisherige" is up to the current point in time. So if you rate the current ID's images, the accumulated points should include that? Maybe yes, because you've already rated them, even if you haven't clicked Weiter. But user said "alle bis dahin bewertete IDs", so IDs that have been "bewertet" (rated). So whenever you click a green/red button for an image, that ID's rating is saved, and the accumulated points update. That makes sense.

Now, the localStorage: we need to save the ratings so that when the page reloads, the ratings are still there. But since images are not persisted, if you reload, you have to upload the images again, but the ratings are still in localStorage. Wait, but the ratings are tied to the image set. If you upload a different set of images, the ratings might not match. But user didn't mention that, so we can store ratings as a map: { [id]: { [groupName]: 'green' | 'red' } }, and also store the list of groups and min/max ID? No, because groups and IDs are derived from the uploaded images. So when you reload, upload images again, then load the ratings from localStorage that match the current IDs and groups. So localStorage key could be something like 'questSnapRatings', value is the ratings object. Also, maybe store the image set's hash? But that's complicated. Alternatively, just store the ratings, and when new images are uploaded, load the ratings that match the current IDs and groups. So if a group or ID is not present in the current image set, the rating is ignored. That's acceptable.

Now, the UI elements:

- Top right: Plus and minus buttons (magnifying glass icons) to adjust the number of groups per row. Let's call this 'groupsPerRow'. Default value? Maybe 4. When groupsPerRow is set, the group columns are laid out in a grid with that many columns per row. If the number of groups exceeds groupsPerRow, the container becomes horizontally scrollable. Wait user said: "mache sie so klein, dass alle nebeneinander passen. mach oben rechts von der gesamten Seite aber auch eine kleine plus-Lupe und minus-Lupe die die Anzahl der Gruppenpro Bild vergrößert oder verringert und dann die Seite scrollbar zur Seite macht für den Fall dass nicht alle Gruppen auf einmal angezeigt werden können." Oh, wait: "die Anzahl der Gruppen pro Bild" → groups per view? Or groups per row? User said "vergrößert oder verringert und dann die Seite scrollbar zur Seite macht". So if you increase groups per row, the columns get smaller, more fit, if you decrease, fewer fit, scroll if needed. So groupsPerRow is the number of group columns per row. The grid is grid-template-columns: repeat(groupsPerRow, 1fr), so each column takes equal width. If the number of groups is more than groupsPerRow, the grid will wrap? No, user said "scrollbar zur Seite" → horizontal scroll. So maybe the container of the groups is overflow-x: auto, and the groups are displayed in a flex row with flex-wrap: nowrap, so they are all in a single row, and each group has a min-width based on groupsPerRow? Wait user said "mache sie so klein, dass alle nebeneinander passen" → so if you have 10 groups, and groupsPerRow is 10, they all fit in one row, scaled small. If groupsPerRow is 5, then 5 fit, scroll to see the rest. Oh, maybe groupsPerRow is the number of groups to display in the visible area, and the rest are scrollable. Or groupsPerRow is the number of columns in the grid, and if there are more groups than that, the grid scrolls horizontally. Let's implement it as: the group container is a grid with grid-template-columns: repeat(auto-fit, minmax(calc(100% / groupsPerRow), 1fr))? No, better: the group container has display: grid, grid-template-columns: repeat(groupsPerRow, 1fr), overflow-x: auto. Wait no, grid with repeat(groupsPerRow, 1fr) will make groupsPerRow columns, each taking 1fr. If there are more groups than groupsPerRow, the grid will add more rows? No, grid auto-flow is row by default, so if you have 10 groups and groupsPerRow=3, you get 3 columns, 4 rows. But user wants horizontal scroll, not vertical. Oh right, user said "scrollbar zur Seite" → horizontal. So maybe the groups are in a flex container with flex-direction: row, flex-wrap: nowrap, overflow-x: auto. Each group has a width of calc(100% / groupsPerRow), so if groupsPerRow is 4, each group is 25% width, so 4 fit per "page", scroll to see more. That makes sense. So adjusting groupsPerRow changes the width of each group, so more or fewer fit in the visible area, with horizontal scroll if the total width exceeds the container.

Next, the buttons:

- Bottom right: Blue "Weiter" button → goes to next ID in order. If on the last ID, what? Maybe disable, or show "Fertig"? User didn't say, so disable when on max ID.

- Next to Weiter: Green "Alle Grün" button and Red "Alle Rot" button. User said: "wenn alles grün gesetzt wird, dann nur bei Bildern, die vorhanden sind. wenn alle rot gesetzt werden, dann werden alle Bilder rot gesetzt, auch die nicht vorhandenen." So:
  - "Alle Grün" click: for current ID, set all groups that have an existing image to 'green' rating. Groups without images are not affected (they are already red by default, but user said they are änderbar, so if a group has no image, "Alle Grün" does nothing to them.
  - "Alle Rot" click: for current ID, set all groups (including those without images) to 'red' rating. For groups without images, this sets their rating to red (which they already are by default, but maybe if someone changed them to green earlier, this resets to red).

- Bottom left: "Zurück" button → goes to previous ID in order. Disabled when on first ID (001).

Now, hover over image: when mouse is over an image (that exists), show two buttons: green with checkmark, red with cross. Clicking them sets the rating for that group+ID. For images that don't exist (no image for the group+ID), hover does nothing, since there's no image.

Now, state management: We need to track:
- uploadedImages: { [id]: { [groupName]: { prompt: string, imageDataUrl: string } } }
- uniqueGroups: string[] (sorted alphabetically? Or order of upload? User didn't say, so sort alphabetically.)
- minId: number (e.g., 1 for 001)
- maxId: number (e.g., 15 for 015)
- currentIdIndex: number (index in the array of IDs from min to max, e.g., 0 for 001, 1 for 002, etc.)
- ratings: { [id]: { [groupName]: 'green' | 'red' } } → persisted to localStorage.
- groupsPerRow: number (default 4, persisted to localStorage? Or not, up to you. Maybe persist so user's preference is saved.)

Now, let's plan the file structure if we use Vite + React:

- Project root:
  - index.html
  - vite.config.js (base: './')
  - package.json (dependencies: react, react-dom; devDependencies: vite, @vitejs/plugin-react)
  - src/
    - main.jsx
    - App.jsx
    - components/
      - UploadScreen.jsx (drag & drop upload, shown when no images uploaded yet)
      - EvaluationScreen.jsx (main evaluation UI, shown after upload)
      - GroupColumn.jsx (individual group column for current ID)
      - RatingButton.jsx (hover buttons for image)
      - NavigationButtons.jsx (Zurück, Weiter, Alle Grün, Alle Rot)
      - ZoomControls.jsx (plus/minus magnifying glass)
    - utils/
      - parseFilename.js (function to parse image filenames)
      - storage.js (localStorage helpers for ratings, groupsPerRow)
      - imageLoader.js (read uploaded files)
    - styles/
      - main.css (all styles, responsive)

Wait but the user wants the final output to be static, so after building with Vite, the dist folder can be copied anywhere. Vite's base: './' ensures all paths are relative.

But wait, the user said "Ich möchte eine Web-App bauen" and chose "Web app (React/Vue/etc)" earlier, so React with Vite is acceptable.

Now, let's confirm all the user's requirements are covered:

- Static web app: yes, Vite builds to static files.
- Relative paths: Vite base: './' makes all paths relative.
- Drag & drop upload of JPGs at start: UploadScreen component.
- Parse filenames correctly: parseFilename.js function.
- All IDs from min to max, 3-digit: generate ID list from min to max, pad to 3 digits.
- Per ID slide: EvaluationScreen shows current ID's data.
- Prompt as heading: yes, per ID.
- Group columns: all unique groups, each as GroupColumn.
- Image display with hover buttons: GroupColumn shows image if exists, hover shows RatingButtons.
- Green/red borders: based on rating.
- Auto-red for missing images: yes, if no image, default to red, can change.
- Accumulated points: sum of ratings for the group across all IDs up to current.
- Navigation buttons: Zurück, Weiter, Alle Grün, Alle Rot.
- Zoom controls: plus/minus to adjust groupsPerRow, horizontal scroll if needed.
- localStorage for ratings: yes, storage.js helpers.
- No server storage: all client-side.

Now, what about the initial AGENTS.md? Wait the user's first request was to create AGENTS.md, but then they started describing the app. Wait no, let's check the conversation flow:

1. User asked to create/update AGENTS.md.
2. I investigated, found repo empty, asked what project type, user said Web app (React/Vue/etc).
3. I said repo is empty, skip AGENTS.md until code exists.
4. User then described the app in detail (German), said to ask detailed questions.
5. I asked 14 questions, user answered all.
6. Now, the current task: the user wants to build the app, but first, should we create AGENTS.md? Wait no, the user's last message was the detailed description of the app, then I asked questions, now the user has answered the questions, and now I need to plan the implementation of the app, right? Because the user said "Jetzt fangen wir mal damit an was die App grundsätzlich können soll." So after the questions, the next step is to plan the app implementation, then build it. But also, the initial request was AGENTS.md, but the repo is empty, but now we're building the app, so after building, we can create AGENTS.md. But wait, the user's first message was "Create or update AGENTS.md for this repository." But then they switched to building the app. Wait let's recheck:

First user message: "Create or update `AGENTS.md` for this repository. [...] The goal is a compact instruction file [...] User-provided focus or constraints: [empty]"

Then I investigated, found repo empty, asked project type, user said Web app (React/Vue/etc). I said repo is empty, skip AGENTS.md.

Then user sent a long German message describing the app they want to build, said "Bitte stelle sehr detailliert Fragen zu allem was für dich noch unklar ist."

I asked 14 questions, user answered all.

Now, the current state: the user has described the app, answered all questions, so now I need to plan the implementation of the app, right? Because the user wants to build the app. But also, the initial request was AGENTS.md, but that's for after the app is built, to document the repo. But the user's current focus is building the app. Wait, but the system reminder says "Plan Mode - READ-ONLY phase. STRICTLY FORBIDDEN ANY file edits [...] You may ONLY observe, analyze, and plan."

Ah right! I'm in plan mode, so I can't write any files yet. I need to create a plan for building the app, then after the user approves, implement it.

So let's structure the plan:

## Plan for QuestSnapViewer Static Web App

### 1. Project Setup
- Initialize Vite + React project with JavaScript (no TypeScript, unless user wants, but user didn't specify, so JS is fine).
- Configure Vite base path to './' to ensure all relative paths in built output.
- Install dependencies: react, react-dom, vite, @vitejs/plugin-react.
- Create folder structure as outlined earlier.

### 2. Core Utilities
- `src/utils/parseFilename.js`: Implement filename parsing as discussed, handling hyphens in group names, 3-digit IDs, prompt after last hyphen.
- `src/utils/storage.js`: Helpers to load/save ratings from localStorage, load/save groupsPerRow preference.
- `src/utils/imageLoader.js`: Function to read uploaded File objects into data URLs.

### 3. Upload Screen
- `src/components/UploadScreen.jsx`: Drag & drop area for JPG/JPEG files, handles file input, parses all files, validates filenames start with QuestSnap, extracts IDs, groups, prompts, stores uploaded images, computes min/max IDs, unique groups, then switches to evaluation screen.

### 4. Evaluation Screen
- `src/components/EvaluationScreen.jsx`: Main screen after upload, manages current ID index, calculates current ID, passes data to child components.
- Generates array of all IDs from min to max, formatted as 3-digit strings.
- Tracks current ID index, handles navigation (Zurück/Weiter) to update index.
- Loads ratings from localStorage on mount, saves on change.

### 5. Group Column Component
- `src/components/GroupColumn.jsx`: Renders a single group's column for the current ID.
  - If group has image for current ID: displays image (responsive, object-fit: contain), hover shows rating buttons, border color based on rating (green/red/none).
  - If no image: displays placeholder, auto-red border, no hover buttons.
  - Shows group name below image.
  - Shows accumulated points (sum of ratings for group across all IDs up to current index).

### 6. Rating Buttons
- `src/components/RatingButton.jsx`: Green check and red cross buttons shown on image hover, click handlers to set rating for group+ID.

### 7. Navigation & Controls
- `src/components/NavigationButtons.jsx`: Renders Zurück (bottom left), Weiter (bottom right, blue), Alle Grün (green, next to Weiter), Alle Rot (red, next to Weiter) buttons with correct click handlers.
- `src/components/ZoomControls.jsx`: Plus/minus magnifying glass buttons (top right) to adjust groupsPerRow, persists preference to localStorage.

### 8. Styling
- `src/styles/main.css`: All styles, responsive layout, grid/flex for group columns, hover effects, button styles, red/green borders, scroll behavior.
- Ensure all paths in CSS/JS are relative, no absolute URLs.

### 9. State Management
- Use React useState and useContext, or just prop drilling? Since the app is small, prop drilling is fine, or use a simple context for shared state (uploaded images, ratings, groupsPerRow, etc.)

### 10. Testing
- Manual testing of all features:
  - Upload JPGs with correct filename format.
  - Verify parsing of IDs, groups, prompts (including hyphens in group names).
  - Navigate through IDs, check all buttons work.
  - Verify ratings are saved to localStorage, persist after reload.
  - Check groupsPerRow adjustment, horizontal scroll.
  - Test missing images, auto-red, manual rating change.
  - Test Alle Grün/Alle Rot buttons per rules.

### 11. Build & Output
- Run `vite build` to generate static files in dist/.
- Verify dist/ has relative paths, can be copied to any subdirectory.
- Create AGENTS.md after build, documenting the project setup, commands (dev, build), filename format, architecture, etc.

Wait but the initial request was AGENTS.md, but the user now wants to build the app. But the system says I'm in plan mode, so I need to present this plan to the user, get approval, then implement.

But also, the user's first message was about AGENTS.md, but then they switched to building the app. But the current conversation is about building the app, so the plan should be for the app, then after building, create AGENTS.md.

But let's make sure the plan covers all the user's requirements, including the answers to the questions.

Wait also, the user said "alles mit komplett relativen Faden" → all relative paths. So in Vite, setting base: './' in vite.config.js will make all asset paths relative. Also, in the code, all imports should be relative, no absolute paths.

Another point: the user said "Ich möchte, dass das komplette Projekt eine statische Web App ist", so no server-side rendering, no API calls, all client-side.

Now, let's check if there are any missing details:

- What about image file size? If images are large, data URLs might be slow. But user didn't mention, so we can read them as data URLs, which is fine for client-side only.

- What about the order of groups? User didn't specify, so we'll sort unique groups alphabetically.

- What about the order of IDs? From min to max, 001 to max, in numerical order.

- What about when all images are uploaded, and there are no images? Then min and max ID are undefined, so stay on upload screen.

Now, let's present the plan to the user, ask if it's okay, or if there are any changes.

## Plan: QuestSnapViewer Static Web App

### 1. Project Setup
- Initialize Vite + React project (JavaScript, no TypeScript)
- Configure `vite.config.js` with `base: './'` for fully relative paths in build output
- Install dependencies: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`
- Folder structure:
  ```
  src/
    components/   # UI components
    utils/        # Filename parsing, localStorage, image loading
    styles/       # CSS
  ```

### 2. Core Utilities
- **`parseFilename.js`**: Correctly parse `QuestSnap-XXX-GROUP-PROMPT.jpg`:
  - Split prompt after *last* hyphen (group names can contain hyphens)
  - Extract 3-digit zero-padded ID, group name, prompt
  - Validate file starts with `QuestSnap` and is `.jpg/.jpeg`
- **`storage.js`**: Load/save ratings + `groupsPerRow` to localStorage
- **`imageLoader.js`**: Read uploaded files as data URLs for client-side only use

### 3. Upload Flow
- `UploadScreen` component: Drag & drop area for multiple JPGs
- Validate + parse all files on upload
- Compute: unique groups, min/max 3-digit IDs, full ID range (min → max, including gaps)
- Switch to evaluation view after successful upload

### 4. Evaluation UI
- `EvaluationScreen` manages current ID index, navigates through all IDs in order
- Per ID slide shows:
  - Heading: Prompt (same for all images of the ID, fallback for IDs with no images)
  - Group columns (all unique groups from upload):
    - Existing image: Responsive display, hover shows green/red rating buttons, border color by rating
    - Missing image: Placeholder, auto-red border (manually changeable)
    - Below image: Group name + accumulated points (sum of all evaluated IDs up to current)
- **Navigation**:
  - Bottom left: "Zurück" (previous ID)
  - Bottom right: Blue "Weiter" (next ID)
  - Next to "Weiter": Green "Alle Grün" (only existing images), Red "Alle Rot" (all groups including missing)
- **Top right zoom controls**: Plus/minus to adjust `groupsPerRow`, horizontal scroll when groups exceed visible area

### 5. State & Persistence
- Ratings: `{ [id]: { [group]: 'green' | 'red' } }` saved to localStorage
- Images: Stored in memory only (re-upload required after page reload)
- `groupsPerRow` preference persisted to localStorage

### 6. Styling
- Responsive layout, CSS for red/green borders, hover effects, scroll behavior
- All internal paths relative, no absolute URLs

### 7. Post-Build Step
- Create `AGENTS.md` documenting:
  - Dev command: `npm run dev`
  - Build command: `npm run build` (output in `dist/`, copyable to any subdirectory)
  - Filename format rules
  - Architecture notes (client-side only, localStorage for ratings)
  - Known quirks (images not persisted, re-upload after reload)

---

Shall I proceed with implementing this plan?

_Thinking:_



---

## User

Bevor wir anfangen, mache mir ein kurzes Mockup in ASCII Art, wie du dir das Interface vorstellst.

---

## Assistant (Plan · Big Pickle · 44.1s)

_Thinking:_

Got it, the user wants an ASCII mockup of the interface before we start implementing. First, I need to remember all the requirements we finalized earlier.

First, let's recap the key UI elements:
- Top right: Plus/Minus zoom (groups per row) buttons
- Main heading: Prompt text for the current ID
- Group columns next to each other, responsive, scrollable if too many
- Each group column has:
  - Image (or missing placeholder) with green/red border based on rating
  - On hover: green check and red cross buttons
  - Below: Group name, accumulated points
- Missing images: auto red border, can be changed manually
- Bottom left: "Zurück" (back) button
- Bottom right: Blue "Weiter" (next) button, next to it green "Alle Grün" (only existing images) and red "Alle Rot" (all groups including missing) buttons

Wait, also the ID progression: we go from 001 upwards, each slide is one ID. The prompt is the heading for the slide.

Let me structure the ASCII art. Let's start with the top bar first, then the main content area, then the bottom navigation.

First, top right: zoom controls. Let's represent that as [+] [-] in the top right corner.

Then the main heading: "Prompt: [prompt text here]" centered? Or left-aligned? Probably prominent, since it's the main heading for the ID.

Then the group columns. Let's represent each group as a box. Let's say groups per row is adjustable, so if there are many groups, they scroll horizontally. Let's show 3 groups as an example, some with images, some missing.

Each group box:
- Top: Group name (e.g., "padrack", "Rob", "Team3")
- Middle: Image (or [NO IMAGE] placeholder)
- Border: green if rated green, red if rated red or missing
- Below image: Accumulated points (e.g., "Punkte: 3")
- On hover, but ASCII can't do hover, so maybe note that? Or just show the buttons as small [✓] [✗] next to the image? Wait, the user said on hover the two buttons appear. But ASCII is static, so maybe indicate that hover shows the buttons, or just place them near the image for representation.

Wait, let's make it as static as possible, noting interactions where needed.

Also, bottom navigation: left side "Zurück", right side "Alle Grün" "Alle Rot" "Weiter" (blue).

Let's also note the current ID: maybe top left? Like "ID: 001 / 025" (current ID / total max ID).

Wait, the user didn't mention showing current ID progress, but it's useful. Wait, let's check the requirements again. The user said: "Wir beginnen bei der ID 001 und gehen bis zur höchsten ID", "Überschrift von jedem einzelnen Vergleichsbildschirm pro ID soll es eine Überschrift geben mit der Prompt". No mention of current ID counter, but maybe it's helpful. But let's stick to what's required first.

Wait, let's list all required UI elements again to make sure we include everything:

1. Top right: Plus (zoom in, more groups per row? Wait no: user said "plus-Lupe und minus-Lupe die die Anzahl der Gruppenpro Bild vergrößert oder verringert" — wait, "Anzahl der Gruppenpro Bild" — wait, user's exact words: "mache oben rechts von der gesamten Seite aber auch eine kleine plus-Lupe und minus-Lupe die die Anzahl der Gruppenpro Bild vergrößert oder verringert und dann die Seite scrollbar zur Seite macht für den Fall dass nicht alle Gruppen auf einmal angezeigt werden können". Oh right, so plus increases groups per row? Wait no: "vergrößert oder verringert die Anzahl der Gruppen pro Bild" — wait, "Gruppen pro Bild" probably means groups per row in the view. So plus makes more groups fit per row (smaller groups), minus makes fewer groups per row (larger groups). And if the number of groups exceeds the groups per row, horizontal scroll.

2. Heading per ID slide: Prompt text (since prompt is per ID, all same for the slide).

3. For each group in the current ID's slide:
   a. If image exists: show image, border green/red based on rating. Hover shows green [✓] and red [✗] buttons. Below: group name, accumulated points (sum of all evaluated IDs up to current for that group).
   b. If no image: placeholder, auto red border (can be changed manually). Below: group name, accumulated points.

4. Bottom left: "Zurück" button (previous ID in order).

5. Bottom right: Blue "Weiter" button (next ID). Next to it: Green "Alle Grün" (only existing images for current ID), Red "Alle Rot" (all groups including missing for current ID).

Also, images are uploaded once at start, stored in memory. Ratings saved to localStorage.

Now, ASCII art. Let's make it readable. Let's use standard ASCII characters, no emojis (user said avoid emojis unless asked, didn't ask here).

Wait, user said: "Avoid using emojis in all communication unless asked." So no ✓ or ✗ emojis, use text or ASCII checks.

Let's draft:

First, the top bar:
+---------------------------------------------+
| ID: 001/025          Prompt: A cat on a mat  | [+] [-] (top right)
+---------------------------------------------+

Wait, top right zoom buttons, so align [+] [-] to the right.

Then the main group area, scrollable horizontally if needed. Let's show 3 groups, one with image (green border), one with image (red border), one missing (red border):

+-----------------------------------------------------------------------+
| [ Group: padrack ]  [ Group: Rob ]    [ Group: Team3 (no image) ]     |
| |-------------|    |-------------|    |---------------------|         |
| |   (image)   |    |   (image)   |    |    [NO IMAGE]      |         |
| | (green bord)|    | (red border)|    |   (red border)     |         |
| |-------------|    |-------------|    |---------------------|         |
| | Hover: [Grn]|    | Hover: [Red]|    | (can click to grn) |         |
| |  Punkte: 2  |    |  Punkte: 1  |    |  Punkte: 0        |         |
+-----------------------------------------------------------------------+
(horizontal scroll arrows if more groups → ←)

Then bottom navigation:
+-----------------------------------------------------------------------+
| [Zurück]                              [Alle Grün] [Alle Rot] [Weiter]  |
+-----------------------------------------------------------------------+

Wait, let's make it more accurate. Let's note that the hover buttons only appear when mouse is over the image, so in ASCII we can indicate that with a note, or just show them as small buttons next to the image for representation.

Wait, also, the "Alle Grün" button only affects existing images, "Alle Rot" affects all including missing. Let's note that? Or just include the buttons as per requirements.

Also, the accumulated points are sum of all evaluated IDs up to current. So for ID 001, if it's the first, points are 0 or 1 depending on rating. For ID 002, sum of 001 and 002, etc.

Wait, let's make the ASCII art as clear as possible, then add a brief explanation of each part, especially interactions that can't be shown in static ASCII (like hover, zoom, navigation).

Wait, user said "kurzes Mockup in ASCII Art" — short ASCII mockup. So keep it concise.

Let me structure it properly:

1. First, the overall layout with labels for each section.
2. Then the ASCII art.
3. Then brief notes on interactive elements that aren't obvious from the static art.

Wait, also, the user said "mache oben rechts von der gesamten Seite aber auch eine kleine plus-Lupe und minus-Lupe" — so zoom buttons are top right, small. Let's represent them as [+] and [-] top right.

Let's put it all together:

### ASCII Mockup: QuestSnapViewer Evaluation Screen (ID 001)
```
+-------------------------------------------------------------------------------------------+
|  ID: 001/025                     Prompt: "A cat sitting on a red mat"                     [+] [-] |
+-------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Group: padrack ]       [ Group: Rob ]         [ Group: Team3 ]       [ Group: Team4 ]     |
|  |-------------------|    |-------------------|    |-------------------|    |------------|    |
|  |   (image)         |    |   (image)         |    |  [NO IMAGE]       |    |  (image)   |    |
|  |  (green border)   |    |  (red border)     |    | (auto red border) |    | (green bd) |    |
|  |-------------------|    |-------------------|    |-------------------|    |------------|    |
|  | Hover: [Grn][Red] |    | Hover: [Grn][Red] |    | Click to toggle  |    | Hover: ... |    |
|  | Punkte: 1         |    | Punkte: 0         |    | Punkte: 0        |    | Punkte: 1  |    |
|                                                                                                   |
|<- Horizontal scroll if groups exceed visible width ->                                              |
|                                                                                                   |
+-------------------------------------------------------------------------------------------+
| [Zurück]                                               [Alle Grün] [Alle Rot] [Weiter (blue)] |
+-------------------------------------------------------------------------------------------+
```

### Notes on interactive elements:
- `[+] / [-]` (top right): Adjust groups per row (increase/decrease number of groups visible side-by-side, triggers horizontal scroll if needed)
- Hover over image: Shows small green (award point) and red (deny point) buttons (static here, only appear on hover)
- `[NO IMAGE]`: Auto-red border by default, can be manually toggled to green/red
- `[Alle Grün]`: Sets all *existing* images for current ID to green (ignores missing groups)
- `[Alle Rot]`: Sets *all* groups (including missing) for current ID to red
- `[Zurück]`: Navigates to previous ID in sequential order (001 → 002 → ... → max ID)
- `[Weiter]`: Navigates to next ID in sequential order
- "Punkte" below each group: Running total of points for that group across all *already evaluated* IDs (up to current ID)
- All images are uploaded once at start, stored in browser memory; ratings persist in localStorage

Wait, that's good. Let's make sure it's not too long, as per user's request for a "kurzes Mockup". Also, check that all requirements are covered in the mockup and notes.

Wait, the user said "Gruppen ohne Bild für eine ID werden automatisch rot markiert. Kann dieser Status manuell geändert werden?" → answer was "Änderbar", so the note says that [NO IMAGE] can be toggled, which is correct.

Also, "Alle Grün" only existing images, "Alle Rot" all groups including missing: covered in notes.

Zoom buttons adjust groups per row, horizontal scroll when too many: covered.

Accumulated points are sum of evaluated IDs up to current: covered.

Navigation buttons: covered.

Hover buttons: covered.

Prompt heading per ID: covered.

Yes, that should work. Now, present this to the user, ask if this matches their expectation, or if any adjustments are needed. Wait, the user just asked for the ASCII mockup, so after presenting it, maybe ask if it's correct, or if we can proceed? Wait no, the user's last message was: "Bevor wir anfangen, mache mir ein kurzes Mockup in ASCII Art, wie du dir das Interface vorstellst." So after giving the mockup, maybe ask if this is as intended, or if any changes are needed. But let's follow the instructions: the user is in plan mode? Wait no, the system reminder says plan mode is active, but that's a system reminder, wait let's check: the user's message has a system reminder that says Plan Mode - READ ONLY, no edits. But the user is asking for an ASCII mockup, which is just text, no file edits. Oh right, the system reminder says no file edits, but outputting text to the user is allowed. Because the reminder says "Any modification attempt is a critical violation" — but answering with text is not a modification. Wait, the system reminder says: "You may ONLY observe, analyze, and plan. Any modification attempt is a critical violation." But the user asked for an ASCII mockup, which is part of planning, right? Because we're planning the interface before implementation. So outputting the ASCII art as text is allowed, since it's not modifying any files.

Wait, let's confirm: the system reminder says "STRICTLY FORBIDDEN: ANY file edits, modifications, or system changes. Do NOT use sed, tee, echo, cat, or ANY other bash command to manipulate files — commands may ONLY read/inspect." So outputting text to the user is fine, that's not a file edit. So yes, we can provide the ASCII mockup as text.

So the final answer is the ASCII mockup as above, plus brief notes, and maybe ask if it's correct. Wait, the user said "mache mir ein kurzes Mockup in ASCII Art" — so just provide that, maybe with a short check if it matches their expectation. But keep it concise, as per general instructions: "Answer concisely with fewer than 4 lines (not including tool use or code generation), unless user asks for detail." Wait, but the user asked for a detailed mockup, so that's an exception. The user said "Bitte stelle sehr detailliert Fragen zu allem was für dich noch unklar ist." earlier, but now they asked for a short ASCII mockup. Wait, "kurzes Mockup" — short mockup.

So let's present the ASCII art clearly, then a short question if it's correct.

### ASCII Mockup: Evaluation Screen (ID 001)
```
+-------------------------------------------------------------------------------------------+
|  ID: 001/025                     Prompt: "A cat on a red mat"                               [+] [-] |
+-------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Group: padrack ]       [ Group: Rob ]         [ Group: Team3 ]       [ Group: Team4 ]     |
|  |-------------------|    |-------------------|    |-------------------|    |------------|    |
|  |     (image)       |    |     (image)       |    |   [NO IMAGE]      |    |  (image)   |    |
|  |  (green border)   |    |  (red border)     |    | (auto red border) |    | (green bd) |    |
|  |-------------------|    |-------------------|    |-------------------|    |------------|    |
|  | Hover: [Grn][Red] |    | Hover: [Grn][Red] |    | Click to toggle   |    | Hover: ... |    |
|  | Punkte: 1         |    | Punkte: 0         |    | Punkte: 0         |    | Punkte: 1  |    |
|                                                                                                   |
|<-- Horizontal scroll if groups exceed visible width -->                                           |
|                                                                                                   |
+-------------------------------------------------------------------------------------------+
| [Zurück]                                               [Alle Grün] [Alle Rot] [Weiter (blue)] |
+-------------------------------------------------------------------------------------------+
```

### Key Notes:
- `[+]/[-]` top right: Adjust groups per row, trigger horizontal scroll if needed
- Image hover: Shows green (award point) / red (deny point) buttons (static here)
- `[NO IMAGE]`: Auto-red by default, manually toggleable
- `[Alle Grün]`: Only existing images → green; `[Alle Rot]`: All groups (incl. missing) → red
- "Punkte": Running total for each group across all evaluated IDs up to current
- Ratings persist in localStorage; images stored in memory (re-upload after reload)

Stimmt das Layout so?

_Thinking:_



---

## User

Das Layout stimmt so. Schreibe den Plan in allen Details inklusive der Layout-Skizze in die Datei plan.md

---

## Assistant (Build · Big Pickle)

_Thinking:_

The user wants me to write the detailed plan including the ASCII mockup into a file called `plan.md`. Let me create this file with all the details from my previous plan response plus the ASCII mockup.

I need to:
1. Create a detailed `plan.md` file
2. Include the project setup details
3. Include the core utilities
4. Include the upload flow
5. Include the evaluation UI in detail
6. Include the state & persistence info
7. Include the styling info
8. Include the ASCII mockup
9. Include the post-build step for AGENTS.md

Let me write this comprehensively

**Tool: write**

**Input:**
```json
{}
```

---

