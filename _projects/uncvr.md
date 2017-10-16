---
title: UNCVR
permalink: /projects/uncvr/
date: 2017-08-01
img: featured-uncvr.png
color: 555
link: https://www.uncvrclothing.com
technology:
  - Shopify
  - Vue
  - jQuery
  - SCSS
  - Liquid
  - Gulp

blurb: Improving the ecommerce experience for storeowner and customers alike.
  
brief: | 
  UNCVR had a strong sense of branding and design already, but many parts of the site weren't well integrated with Shopify's content editing system, which made it near impossible for them to make edits to the site on their own. Furthermore, the site hadn't been coded with a mobile first approach, causing visual bugs on smaller screen sizes.</p>
solution: |
  For this project, we took an incremental, milestone based approach. This allowed us to swap out parts of the site individually over a period of time, rather than launching a single major revamp. By using Gulp to join our SCSS files together <a href="http://www.nicchan.me/blog/ramping-up-with-shopify/">(described here)</a>, I built out several reuseable, modular components that were fully integrated into Shopify's new section feature, as oppopsed to being hardcoded like before. UNCVR could then build out endless fully customized variations of their landing page, based on their current needs. 
---
<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--two-thirds">
    <img class="projects__image" src="{{ site.imgurl }}uncvr-quiz.png" alt="UNCVR quiz built in Vue.JS">
  </div>
  <div class="projects__col--one-third">
    <img class="projects__image" src="{{ site.imgurl }}uncvr-quiz-mobile.png" alt="UNCVR quiz mobile view">
  </div>
</figure>

<div class="row">
  <section class="text-block">
    <h2>Highlights</h2>
    <h2 class="subheading">Quiz</h2>
    <p>I created an interactive signup quiz using Vue.js, which was the perfect tool to drop in to manage interactivity and state, rather than the previous 'jQuery spaghetti' approach. In addition to looking way cooler, the new signup process is more performant, features better validation and works better on all screen sizes.</p>
  </section>
</div>

<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <img class="projects__image" src="{{ site.imgurl }}uncvr-journal-2.jpg" alt="UNCVR Journal">
  <figcaption class="projects__caption">
    Journal
  </figcaption>
</figure>

<div class="row">
  <section class="text-block">
    <h2 class="subheading">Journal</h2>
    <p>Blogs are a critical form of inbound marketing. I helped UNCVR to build out their journal so they could attract new customers through social media.</p>
  </section>
</div>