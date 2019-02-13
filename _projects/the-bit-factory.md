---
title: The Bit Factory
permalink: /projects/the-bit-factory
date: 2017-04-16
img: featured-tbf.jpg
color: 07b3e7
featured: true
technology:
  - ReactJS
  - Meteor
  - SCSS
  - Animation

blurb: A website and portal for a startup incubator.

solution: |
  Under <a href="http://wonderkiln.com">Wonderkiln</a>, I built out the new site for The Bit Factory. The project not only contains a striking public facing site, it also includes a full featured portal for admin users to manage news posts, events, users, and more.
---
<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}tbf-home-s.png" alt="The Bit Factory home page">
  </div>
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}tbf-team-s.png" alt="The Bit Factory team page">
  </div>
  <figcaption class="projects__caption">
    Home and team views
  </figcaption>
</figure>

<section class="row row--small">
  <h2>Highlights</h2>
  <h3 class="subheading">Animations</h3>
  <p>The public site makes heavy use of CSS animations in order to provide visual delight to the users. CSS3 animations are powerful and flexible, and are perfect in cases where jQuery would be overkill.</p>
</section>

<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}tbf-portal-application.png" alt="The Bit Factory portal application page">
  </div>
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}tbf-portal-news.png" alt="The Bit Factory portal news page">
  </div>
  <figcaption class="projects__caption">
    Portal views
  </figcaption>
</figure>

<section class="row row--small">
  <h2 class="subheading">A full featured portal</h2>
  <p>The portal contains views to manage incoming applications to The Bit Factory, as a well as a variety of media types. Each form leverages the power of Meteor's simple schema package with a full set of validation rules.</p>
</section>

<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <img class="projects__image" src="{{ site.imgurl }}tbf-portal-edit.png" alt="The Bit Factory edit form">
  <figcaption class="projects__caption">
    Edit View
  </figcaption>
</figure>
