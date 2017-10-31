---
title: Civically
permalink: /projects/civically/
date: 2017-10-21
img: featured-civically.png
color: FE542D
link: http://www.civically.us/
featured: true
technology:
  - MeteorJS
  - React
  - Javascript
  - SCSS
  
blurb: A complex web portal with multiple roles.

solution: |
  On behalf of <a href="https://www.wonderkiln.com">WonderKiln</a>, I built out a web portal application to be used in conjunction with the Civically mobile app. Staff members can manage applications for communities and organizations, which can 'join' eachother and create one large feed to keep local communites updated on events and announcements.
---
<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}civically-events.png" alt="Civically events form">
  </div>
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}civically-graphs.png" alt="Civically Graphs">
  </div>
</figure>

<div class="row">
  <section class="text-block">
    <h2>Highlights</h2>
    <h2 class="subheading">Graphs</h2>
    <p>I built out graphs using Recharts, a React and D3 based library in order to track important metrics.</p>
    <h2 class="subheading">Live Updates</h2>
    <p>Meteor's DDP in conjunction with React allows for a completely reactive experience - any changes in the database are immediately reflected in the client.</p>
  </section>
</div>

