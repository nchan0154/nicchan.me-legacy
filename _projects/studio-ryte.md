---
title: Studio RYTE
permalink: /projects/studio-ryte
date: 2018-05-01
img: featured-studio-ryte.jpg
color: d7aca1
link: https://www.studio-ryte.com/
featured: true
technology:
  - Jekyll
  - Forestry
  - SCSS
  - Javascript

blurb: A local design studio's big rebrand.

brief: |
  Studio RYTE (formerly known as UPSOP) was executing a big redesign. The one problem was that they wanted it to be done before the Milan Design Biennale, a mere three weeks away.
solution: |
  Using a prebuilt theme was not an option for Studio RYTE, who wanted to show off their own design chops with their new portfolio. We had to find other ways to save time in order to make the tight deadline. I ended up using a Jekyll, Forestry and Netlify based-stack to continually build and deploy new parts of the site, while they worked on importing content as they completed the designs. The choice of technologies allowed enough flexibility during the build out to change and extend the site in a short period of time.
---
<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__image projects__image--full" src="{{ site.imgurl }}studio-ryte-case-study.jpg" alt="Menu from Wonderkiln.com">
  </div>
  <div class="projects__col--half">
    <img class="projects__image projects__image--full" src="{{ site.imgurl }}studio-ryte-blog.jpg" alt="Studio Ryte Blog">
  </div>
</figure>

<section class="row row--small">
  <h2>Highlights</h2>
  <h3 class="subheading">Blog and Project Pages</h3>
  <p>The project page was built up out of a modular system of blocks so Studio RYTE could customize each case study as needed. The blog page features an instagram integration to pull all latest posts.</p>
</section>

<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <video class="projects__image" controls width="100%">
    <source src="{{ site.imgurl }}studio-ryte-menu.webm" type="video/webm">
  </video>
  <figcaption class="projects__caption">
    Menu
  </figcaption>
</figure>


<section class="row row--small">
  <h3 class="subheading">Menu</h3>
  <p>The creative nature of Studio RYTE allowed for a little more experimentation when it came to designing the site menu. The animations served to reinforce the RYTE/LEVT brand and offered a way for users to preview projects they were interested in.</p>
</section>
