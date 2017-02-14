---
title: Steven Holl Architects
permalink: /projects/steven-holl-architects/
date: 2015-12-01
img: featured-sha.png
color: 63a4da
link: http://www.stevenholl.com
stack: Foundation, PHP, Laravel
technology:
  - HTML
  - SCSS
  - Javascript
  - jQuery
  - Foundation 5
  - PHP
  - MySQL
  - Laravel
  - Filemaker Pro 11
  - Google Maps API
  - Vimeo API
  - Gulp
  - Git
  
brief: | 
  Steven Holl Architects were happy with overall look and feel of their website, but the design wasn’t optimized for mobile and had issues on larger screens. The repetitive, procedural PHP backend hurt their search engine rankings and limited their ability to make changes without breaking the site. </p>
solution: |
  I rewrote the site from the ground up, creating responsive mobile and tablet versions while maintaining the existing visual branding. I combed over every single detail, keeping key elements and making UI improvements to maximise legibility, functionality and performance.
  
  I opted for a complete overhaul of the backend with Laravel in order to utilize the full power of a MVC framework with proper routing, secure database queries and a robust templating engine. This not only provided a boost to search engine rankings, it also patched up some major security issues and made it easier for future developers to pick up where I left off.
  
---
<figure class="projects__img-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__img" src="{{ imgurl }}/img/sha-mob.png" alt="project page on Steven Holl website">
  </div>
  <div class="projects__col--half">
    <img class="projects__img" src="{{ imgurl }}/img/sha-mob-2.png" alt="menu and news page on Steven Holl website">
  </div>
  <figcaption class="projects__caption">
  Mobile Views
  </figcaption>
</figure>

<div class="row">
  <section class="text-block">
    <h2>Highlights</h2>
    <h2 class="subheading">Sorting and Filtering</h2>
    <p>I created a complete project chronology section and implemented the jQuery plugin Isotope for project sorting and filtering – because nothing lends confidence to potential clients like seeing an extensive portfolio of built works! This lead to increased discovery of older projects and a higher engagement rate.</p>
  </section>
</div>

<figure class="projects__img-wrapper row row--full" style="background-color: #{{ page.color }}">
    <div class="projects__col--half">
      <img class="projects__img" src="{{ imgurl }}/img/sha-old-12.PNG" alt="Old version of Steven Holl website">
    </div>
    <div class="projects__col--half">
      <img class="projects__img" src="{{ imgurl }}/img/sha-background2.png" alt="New Version of Steven Holl website">
    </div>
  <figcaption class="projects__caption">
  Before and after
  </figcaption>
</figure>

<div class="row">
  <section class="text-block">
    <h2 class="subheading">Design Improvements</h2>
    <p>The site was originally built for 1024 x 768px screens, any smaller or larger than that and the viewer would face major visual and usability issues. On large screens, the backgrounds were cut off awkwardly, and in many cases, parts of the menu were completely invisible against the white backgrounds. I not only properly implemented responsive backgrounds, I also utilized the multiple backgrounds feature of CSS3 to add a grey overlay, guaranteeing that no matter what image was used, the menu would always be visible.</p>
    <p>I also redesigned the actual content of the pages, including the staff page pictured above. Judicious use of whitespace and an emphasis on visuals made the content more approachable and easy to read — no more wall of text!</p>
  </section>
</div>


<figure class="projects__img-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__img" src="{{ imgurl }}/img/sha-old11.png" alt="Old version of Steven Holl map">
  </div>
  <div class="projects__col--half">
    <img class="projects__img" src="{{ imgurl }}/img/sha-map.png" alt="New Version of Steven Holl map">
  </div>
  <figcaption class="projects__caption">
  Before and after
  </figcaption>
</figure>

<div class="row">
  <section class="text-block">
    <h2 class="subheading">Maps</h2>
    <p>The map was another element of the site that didn’t age well with time. On large screens, there was a lot of empty grey space, and on mobile, the tiny tap targets made it impossible to use.  I rewrote the map to utilize the google maps API, which allowed for automatic scaling and zooming for greater interactivity. The result was a 100% increase in the average time spent on the page.</p>
    <h2 class="subheading">SEO Improvements</h2>
    <p>I made use of semantic Schema.org markup and implemented the Open Graph protocol on key content pages - the result was a 200% increase in social traffic.</p>
    <h2 class="subheading">Performance Improvements</h2>
    <p>Countless performance improvements were made over the course of rewriting the site.  The old site loaded 10 random background images on each page load to cut down on future loading times - but I found that our average viewer only looked at 2-3 backgrounds before viewing interior pages without backgrounds - the potential cache benefits weren’t worth the heavy initial load time. I concatenated and minified resources, utilized Laravel's eager loading and optimized all images. The results of this effort can be seen on the home page speed scores - I lowered the page size from 2.7mb to a lean 325kb and reduced the load time from 3 seconds down to an average of 400 milliseconds, all while maintaining support for Internet Explorer 8.
    </p>
    <img src="{{ imgurl }}/img/speedtest4.png" alt="Speed test results for Steven Holl website">
  </section>
</div>
