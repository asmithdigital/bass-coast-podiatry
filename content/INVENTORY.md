# Content inventory

Pulled on 1 November 2026 from the WordPress feed of https://basscoastpodiatry.com.au.

- Pages: `/wp-json/wp/v2/pages?per_page=100` (8 pages)
- Services: `/wp-json/wp/v2/portfolio?per_page=100` (8 service pages, stored as a "portfolio" post type)
- Blog posts: `/wp-json/wp/v2/posts` returned none.

The text of each page is saved in `content/raw/<slug>.md`. The old site was built with Visual Composer, so the
markdown was converted from its shortcodes. Partner logo blocks are kept as `[PARTNER LOGO: name]` lines and buttons as `[BUTTON: ...]`.
Text in `content/raw/` is the old wording, kept exactly as it was, typos and dashes included, for reference.

## Pages

| Page | Slug | Images used | New site |
| --- | --- | --- | --- |
| Home | `home` (`/`) | Slider: placeholder images and `sliders-jogger.jpg`. Service cards: all service photos. Partner logos. | Rebuilt as the new home page |
| About us | `about-us` | Partner logos only | `/about-us/` |
| Claims & Rebates | `claims-rebates` | Partner logos only | `/claims-rebates/` |
| FAQs | `faqs` | Partner logos only | `/faqs/` |
| Our Services | `our-services` | Service photos (from the services list), partner logos | `/our-services/` |
| Contact | `contact` | Partner logos, Google map | `/contact/` |
| Appointments | `appointments` | One image (ID 1406) that no longer exists | Not rebuilt. Redirects to `/contact/` |
| News | `news` | None (empty page) | Not rebuilt. Redirects to `/` |

## Service pages

| Service | Slug | Image | Saved as |
| --- | --- | --- | --- |
| General Podiatry | `general-podiatry` | `iStock-908794068.jpg` | `podiatrist-treatment.jpg` |
| Laser Treatment For Fungal Nail Infections | `laser-treatment-for-fungal-nail-infections` | `iStock-182688366.jpg` | `fungal-toenail.jpg` |
| Biomechanical Assessment | `biomechanical-assessment` | `iStock_000019373439_Medium.jpg` | `running-shoes.jpg` |
| Paediatric Assessment | `paediatric-assessment` | `iStock_000009030369_Medium.jpg` | `baby-feet.jpg` |
| Nail Surgery | `nail-surgery` | `iStock-450152867.jpg` | `ingrown-toenail.jpg` |
| Prescription Orthotic Therapy | `prescription-orthotic-therapy` | `iStock_000009030369_Medium.jpg` (same baby feet photo as Paediatric) | Old photo not used. New photo supplied by the client (client feedback 2): `prescription-foot-orthoses.webp` |
| Diabetes foot assessment | `diabetes-foot-assessment` | `iStock-1129812327-1.jpg` | `diabetes-sensation-test.jpg` |
| Visiting Pedorthist | `visiting-pedorthist` | `iStock-1075950936.jpg` | `shoe-last.jpg` |

Also used: `iStock_000004340591_Medium.jpg` (footprints on a beach, from the home page) is the new hero photo, saved as `footprints-beach.jpg`.

## Images

Downloaded to `content/images/` with their original file names. Renamed copies are in `src/assets/images/`.

Skipped on purpose:

- Slider placeholders (`revslider/.../dummy.png`) and `sliders-jogger.jpg` (a slider copy of the running shoes photo)
- `pulse-1.gif` (a blank decorative animation)
- The old logo (`bass-coast-podiatry-logo.jpg`)
- Partner logos: `worksafe.jpg`, `tac.jpg`, `sportsmed.jpg`, `medicare.jpg`, `hicaps.jpg`, `gov.jpg`, `apc.jpg`, `ahpra.jpg`, `aapsm.jpg`. Names are written as text instead.

## Partner and membership logos (added in design round 3)

Downloaded from the old site to `content/logos/` (all small JPEGs, 75px tall) and copied to `src/assets/logos/`.
Shown in one muted greyscale row on the home page, About and Claims and rebates. Set in `partners` in `src/data/site.ts`.

| Organisation | Old file | Shown as | Notes |
| --- | --- | --- | --- |
| Medicare | `medicare.jpg` | Text tile | Medicare's name and logo are protected under Commonwealth law. Reported guidance is to use the word Medicare in a sentence, not the logo. |
| DVA | `gov.jpg` | Text tile | DVA says it will not approve its logo on commercial websites. The file also carries the Commonwealth Coat of Arms, which needs permission from PM&C. |
| HICAPS | `hicaps.jpg` | Logo | No public logo download for providers found. |
| TAC | `tac.jpg` | Logo | No public logo download for providers found. |
| WorkSafe | `worksafe.jpg` | Text tile | WorkSafe Victoria's brand guidelines say other organisations may not use the logo without a contract. |
| Sports Medicine Australia | `sportsmed.jpg` | Logo | Membership logo. |
| APC | `apc.jpg` | Logo | This is the old Australasian Podiatry Council logo. The body has since changed its name, so this logo is out of date. |
| AAPSM | `aapsm.jpg` | Logo | Membership logo. |
| AHPRA | `ahpra.jpg` | Not used | AHPRA asks practitioners not to use its logo. Registration is mentioned in text instead. |

**[CHECK WITH CLIENT]** Please confirm the practice is entitled to use each logo shown, and whether it has permission for Medicare, DVA or
WorkSafe. Each of those can be switched to its logo with `showLogo: true` once permission is in writing. Higher quality official files
should be requested from each organisation; none of them offers a public download for providers that I could find.

**[CHECK WITH CLIENT]** New sentence on the site: "Our podiatrists are registered with the Podiatry Board of Australia through AHPRA."
Please confirm it is accurate for every podiatrist.

## Problems found on the current site

### Broken or poor links

1. Home page links point to the old development site: `https://basscoastpodiatry.com.au/dev/our-services/` and `/dev/contact/`. They only work because of a redirect.
2. Visiting Pedorthist: the link text says `www.perfectfitpedorthics.com.au` but it points to `www.happyfeetpedorthics.com.au`, which no longer loads. The new page links to perfectfitpedorthics.com.au, which does load. **[CHECK WITH CLIENT]**
3. Claims page links to `www.medicareaustralia.gov.au`, which now redirects to Services Australia. The new page links to `www.servicesaustralia.gov.au/medicare`.
4. Google Maps links use a `goo.gl` short link. Google has been retiring these. The new site uses a full Google Maps link.
5. Partner logo links: "APC" links to the AHPRA website, not to a podiatry council.
6. Appointments page: shows an image that no longer exists and a Ninja Forms contact form that does not load in the feed.

### Inconsistent details

7. Phone number written two ways: `(03) 5672 2309` and `(03) 56722 309` (home page heading and contact page). The new site uses `(03) 5672 2309` everywhere.
8. Scheme names written several ways: "Work Safe", "WorkCover", "Work Cover". The new site uses "WorkSafe" in headings, badges and the claims page. The About page and the FAQ keep "WorkCover" as the client wrote it. **[CHECK WITH CLIENT]** Should these say WorkSafe too?
9. Staff list: the most recent staff bio on the old site mentions joining in 2020, so the list was last updated around 2020 to 2023 (the About page was last edited October 2023).

### Out of date or questionable content

10. Claims page: "As of November 2017 the difference between our actual standard consult fee and the Medicare rebate is $9.05." Nine years old. **[CHECK WITH CLIENT]**
11. Claims page: Medicare item numbers 721, 723 and 732 (GPMP and TCA). Medicare changed chronic condition care plans on 1 July 2025, so this section is likely out of date. **[CHECK WITH CLIENT]**
12. About: "Jennifer has worked and lived in the Bass Coast region for the last 15 years." The number will be out of date. **[CHECK WITH CLIENT]**
13. Appointments page text is template demo content: "supported by complete radiology and imaging services provided at Kalium". Kalium is the name of the WordPress theme. Not used on the new site.
14. Laser page: "Research shows that the nail laser is 70 to 83% effective" and "This will be a permanent cure". These claims should be checked against the AHPRA advertising guidelines. **[CHECK WITH CLIENT]**
15. Laser page refers to "post procedure information" twice, but it is not on the site. **[CHECK WITH CLIENT]**
16. Laser page: "Up until now, treatments for fungal nail infections are usually hit and miss." Kept, but dated.
17. Visiting Pedorthist page has one line of text and no name, visit days or booking details. **[CHECK WITH CLIENT]**
18. FAQ page has only one question. **[CHECK WITH CLIENT]**
19. Old site showed logos for Sports Medicine Australia, APC, AAPSM and AHPRA. Membership status unknown. **[CHECK WITH CLIENT]**
20. Images are iStock stock photos. **[CHECK WITH CLIENT]** Confirm the licence covers the new site. Real clinic and staff photos would be better.

### Typos and wording

Listed below with the fix made.

## Every change made to the wording

Headings that were bold paragraphs on the old site are now real headings, with the same words.
Dashes used as punctuation were replaced to follow the writing rules ("8:40 am to 5:30 pm", "70 to 83%", colons in lists).

### Home (new page, built from old content)

- Supporting line taken from the old home and About text: "Bass Coast Podiatry is open 5 days per week and is able to meet any special requirements of those needing urgent foot care."
- Hours: "Monday-Friday 8:40 am – 5:30 pm" became "Monday to Friday, 8:40 am to 5:30 pm". "Saturday & Sunday" became "Saturday and Sunday".
- "contct" (old home page) is fixed. The sentence itself is not used.
- Short section intros were written for the home page from existing facts: the team names (About page), and the claims summary (Claims page).
- One sentence per service card was written from each page's own text. These are new sentences. Listed in each file's `summary` field in `src/content/services/`.

### Services

- General Podiatry: "Callous" became "Calluses" (callous is an adjective).
- Laser: "often causes" became "often cause" (the subject is "Fungi"). "self- image" became "self-image". "seperate" became "separate". "anti fungal" became "antifungal". "minimize" became "minimise". "epynichium" became "eponychium". "70 – 83%", "3 – 4 passes" and "1 – 3 minutes" now use "to". "Reinfection – Please read" became "Reinfection: please read". "Benefits:" and "Risks:" headings lost their colons.
- Biomechanical: "Foot mobilization" became "Foot mobilisation". "(see ‘prescription orthotic therapy’)" is now a link to that page.
- Paediatric: "Our Podiatrist’s are" became "Our Podiatrists are". "Apophysitis pathology– Sever’s" became "Apophysitis pathology: Sever’s". "Juvenile hallux valgus – Bunions" became "Juvenile hallux valgus (bunions)".
- Prescription Orthotic Therapy: "lower limeb" became "lower limb". "Shin Splints" became "Shin splints". Added a colon before the Footwork link.
- Diabetes: "Type 1 – Commonly" and "Type 2 – The most" now use colons. "(peripheral vascular disease) – any" and "(peripheral neuropathy) – If" now use colons. "hand held" became "handheld". "QUIT smoking" became "Quit smoking". The Claims and Rebates link now goes to the new page.
- Nail Surgery: no changes.
- Visiting Pedorthist: link fixed as described above.

### Claims & Rebates

- "medicare rebated" became "Medicare rebated".
- "item 721 (or review item 732); AND" and "item 723": the dash before "item" became a comma.
- "calender" became "calendar".
- "Department of veterens affairs" became "Department of Veterans Affairs". "(Usually" became "(usually".
- "Work Safe" became "WorkSafe" (heading and text).
- Links now use https.

### About Us

- "Work Cover" became "WorkCover".
- "Meet our Staff" section now has an anchor (`#team`) so the home page can link to it.
- The old partner logos now appear in a logo row (see "Partner and membership logos" above), replacing the round 1 "Professional memberships" text.

### FAQs

- Heading changed from H2 to H1 (one H1 per page).
- Two new questions added, each with answers copied from other pages: private health rebates (Claims page) and before and after hours appointments (Home page). Both are marked **[CHECK WITH CLIENT]**.

### Contact

- "For all appointments" and "Call us today." were joined: "For all appointments, call us today on (03) 5672 2309."
- New short text for the form: "Fill in the form and our administration team will get back to you. For urgent foot care, please call us." and the field hint "Let us know if you would like an appointment and what times suit you."
- Formspree form ID is a placeholder. **[CHECK WITH CLIENT]** Which email address should get the messages?

### Design round 3 additions

- Home hero: H1 and intro over a lightly faded beach photo. "Visit us" card (hours, address, "Get directions", "Call (03) 5672 2309", "Send us a message") above a smaller "Claims and rebates" card ("Medicare, DVA, HICAPS, TAC and WorkSafe"). **[CHECK WITH CLIENT]** Is Claims and rebates the right thing to feature in the hero, or should it be something else (for example a popular service)?
- Home hero: H1 on its own; intro line and "Call (03) 5672 2309"; bento cards "Visit us" (today's hours, address, "Get directions", "Send us a message") and "Claims and rebates" ("Medicare, DVA, HICAPS, TAC and WorkSafe"), plus a photo tile.
- Home page service cards lead with plain patient words, with the official name underneath: "Ingrown toenails, corns and calluses" (General Podiatry), "Orthotics" (Prescription Orthotic Therapy), "Diabetes foot checks" (Diabetes foot assessment), "Children's feet" (Paediatric Assessment). These replace the four quick link boxes that sat below the hero. **[CHECK WITH CLIENT]** Which four services are most popular? These four are a first guess.
- About: new heading "Our clinic" over the existing clinic text. "Meet our Staff" and "Our Administration team" are now cards.
- Contact panel and Contact page share one form. Field hint and button text unchanged.
- "Photo to come" labels on placeholders.

### Booking box (all service pages, Services, About, Claims, FAQs)

- New short text: "Call us to make an appointment, or send us a message."

## All [CHECK WITH CLIENT] items

These used to show as notes on the preview pages. For the shareable concept they are no longer shown anywhere on the site, so this list
is the only record. Nothing has been removed from it.


1. Home: is the team list still current?
2. About: is the staff list still current? Staff photos?
3. About: Jennifer's "last 15 years".
4. About: professional memberships and their full names.
5. Claims: Medicare rules and item numbers, and the 2017 fee gap of $9.05.
6. Laser: success rates and "permanent cure" against AHPRA rules; where the post procedure information lives.
7. Visiting Pedorthist: which pedorthist, how often, more detail.
8. FAQs: two new questions, and any others patients ask.
9. Contact: Formspree form ID and destination email (Contact page and the contact panel). Until the ID is set, submitting either form
   shows "Thanks. This is a preview, so messages aren't sent yet. Please call us on (03) 5672 2309." and nothing is sent.
10. Logos: entitlement to use each one, and the AHPRA registration sentence.
11. About: staff photos: done, see Team photos (24 November 2026).
    (Prescription Orthotic Therapy now has its photo, see client feedback 2.)
    Also: are the FAQ answers and the two new FAQ questions right, and is the staff and team list (home and About) still current?
12. Home: which four services are most popular, for the plain patient words on the service cards.
13. Home hero: whether Claims and rebates is the right thing to feature beside Visit us, or something else.
14. Not shown on the site: WorkCover or WorkSafe wording, and the stock photo licence.

## Client feedback 1 (16 November 2026)

All done. Rollback point: git tag `before-client-feedback-1`.

1. **Logos removed.** The partner and organisation logo row is gone from the home page, About, Claims and rebates and the style
   guide, with its headings and the AHPRA registration line that sat under it. The `LogoRow` component, the `partners` list and the
   logo files in `src/assets/logos/` and `content/logos/` are deleted. Organisation names stay as plain text (claims badges and
   claims content). The practice's own Bass Coast Podiatry logos are kept.
2. **Team.** The podiatrist who has left is removed from the home page team line, the About staff cards and bio, and the raw old
   site copy in `content/raw/about-us.md`. There were no staff photo files for him.
3. **HICAPS is now Tyro Health** everywhere on the site (hero claims band, home Claims and rebates section, Claims and rebates page
   and its meta description, FAQ answer, claims badges). The hicaps.com.au link is removed and no Tyro link is added.
   `content/raw/` still records the old site as it was.
4. **Medicare (Claims and rebates).** Removed: the lead in "if their GP has provided the following MBS Chronic Disease Management
   services and forms:", both bullet points (GPMP item 721 and TCAs item 723), the sentence "As of November 2017 the difference
   between our actual standard consult fee and the Medicare rebate is $9.05." and the servicesaustralia.gov.au/medicare link.
5. **Visiting pedorthist link** is a full https:// URL that opens in a new tab with `rel="noopener"`.

Follow up: the AHPRA registration line, "Our podiatrists are registered with the Podiatry Board of Australia through AHPRA.", is back
as plain text with no logo or link on the home page (team section), About (above the booking box) and Claims and rebates (end of the page text).

## Client feedback 2 (23 November 2026)

All done. Rollback point: git tag `before-client-feedback-2`.

1. **Alison's surname** is now Baker: the About page staff card, the home page team line, `content/raw/about-us.md` and
   `content/CLIENT-CHANGES-1.md`. The old surname appears nowhere in the project.
2. **Prescription Orthotic Therapy photo.** The client's cut-out of a pair of foot orthoses ("No cover multiples samples.png"),
   cropped and placed on plain white, saved as `src/assets/images/prescription-foot-orthoses.webp` (1600 x 800). It is the main image
   on the service page, where there was a placeholder. It is not used on any service card: the card
   keeps its icon.
   Alt text: "A pair of custom prescription foot orthoses".

## Team photos (24 November 2026)

Rollback point: git tag `before-team-photos`.

1. **Photos supplied by the client** for Luke Zoanetti, Jennifer Lewis, Alison Baker and Angie Burgess, plus one photo of Brooke and Kim
   together. Saved in `src/assets/images/` as `team-*.webp`. The originals are not in the project.
2. **Individual photos** are 1000 x 750 (4:3, the shape of the original placeholder), cropped so heads are the same size, eyes are at
   close to the same height and there is a little space above the head. Alt text is each person's full name.
   Jennifer's photo was taken too close to fit this shape, so the timber wall and shirt edge are extended about 8% at each side by
   copying the neighbouring part of the same photo. The face is not changed.
3. **Brooke and Kim** is 1200 x 900 (4:3), one photo, captioned "Brooke and Kim". Alt text: "Brooke and Kim, admin team". Cropped tighter the same day, so the space
   above their heads matches the other photos. Their heads stay smaller, as both people have to fit.
4. **Home:** no team photos (a photo row was added, then removed the same day).
5. **About, "Meet our Staff"**: the original card layout, with the photos in place of the person icon placeholders. The administration
   team card keeps its place, with the photo at the top above the blue box.
