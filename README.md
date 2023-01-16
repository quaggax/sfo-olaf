## WIP olaf.one Update
This is a Work in Progress draft of an updated olaf.one website.

---

### To-do Liste
- [x] Merge new CSS to stylesheet (index_old.html will probably break)
- [x] Set transition easing to parameters defined by Material Design (for menu collapse)
- [x] Turn logo and site name into a link (to home page)
- [x] New structure for landing page
    - [x] Place heading over the image (aligned to bottom)
    - [x] short & precise text about oLaF as introduction below the picture
    - [x] Design 'Cards' for Events (include link to page & possibility for images; text should be primary focus)
    - [x] Seperate Future Events and Past Events in a subtle way (shouldn't use too much space)
    - [ ] Add featured projects above events
- [x] Pay attention to notch-area on iPhone (horizontal)
    (not necessary because body is solid color and no images expand to viewport edges)
- [ ] Start working on About, Projekte, Förderverein & Event pages
    - [ ] Add Breadcrumb in the top middle above the horizontal line (except home page and Events; effectively instead of the alerts) (grey bg with slanted corners; orange text)
- [ ] Check how to format websites for PDF when opening the print dialogue (it is possible to show, hide and reformat elements)
    - [ ] Allows for export of Event pages -> easily print them as flyers (!! Corporate Design)
- [x] Add meta tag theme-color
- [x] Add favicons etc.
- [ ] Add Open Graph meta tags
- [x] Add robots meta tag for development
- [ ] Set CSS variables for dark mode (+ 'Terminal Mode')
    - [ ] Add toggle buttons above the extra links


#### Mobile
- [x] Navigation as horizontal navbar to save precious vertical screen space
- [x] Make nav-items wider
- [x] Differentiate footer from nav-link (maybe using hr or border)


#### Additional Resources
- [ ] Make background images for various devices

---
### Documentation
- The .card elements can't contain any links because the are links themselves. (The .card-text paragraph will be populated with the sites description field which does not allow for links anyway.)