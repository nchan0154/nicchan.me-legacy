---
title: Hunters Point Library Exhibition
permalink: /projects/hunters-point-community-library/
date: 2015-05-19
img: featured-exhibition.png
color: f38d90
link: http://www.stevenholl.com/online-exhibition
stack: Design, HTML, CSS, jQuery
technology:
  - HTML
  - CSS
  - Foundation
  - jQuery
  - Git

brief: |
  The Sculpture Center, in collaboration with Steven Holl Architects, was hosting an exhibition chronicling the design process for the new Hunters Point Community Library. As physical exhibition space was limited, the client decided that they wanted an accompanying digital exhibition to supplement the physical exhibition.
solution: |
  Anticipating a higher amount of mobile traffic than usual, I designed a minimalist static site that prioritized performance. The design I came up with was based around the idea of on concrete and glass - two key materials in Steven Holl’s buildings.
---
<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}exhibition-interior.png" alt="Team page for Hunters Point Library Exhibition">
  </div>
  <div class="projects__col--half">
    <img class="projects__image" src="{{ site.imgurl }}slider.png" alt="Slideshow page for Hunters Point Library Exhibition">
  </div>
  <figcaption class="projects__caption">
  Concrete & Glass
  </figcaption>
</figure>

<section class="row row--small">
  <h2>Highlights</h2>
  <h2 class="subheading">Visual Effects</h2>
  <p>CSS3 filters were utilized to achieve the frosted glass effect behind the main text content. The frosted glass effect, popularized by iOS, not only serves as a stunning and contextually relevent visual effect, it also improves legibility.</p>
  <p>The ‘concrete’ element of the design refers to the dark, textured background behind the slideshow. Physical exhibition spaces typically rely on the idea of the ‘white cube’, but screen based media require different treatment. Darker colors reduce eye strain and draw attention to the images better.</p>
</section>

<figure class="projects__image-wrapper row row--full" style="background-color: #{{ page.color }}">
    <div class="projects__col--half">
      <img class="projects__image" src="{{ site.imgurl }}exhibition-mobile-interior2.png" alt="Squarespace backend for Steven Myron Holl Foundation">
    </div>
    <div class="projects__col--half">
      <img class="projects__image" src="{{ site.imgurl }}exhibition-mobile.png" alt="Squarespace backend for Steven Myron Holl Foundation">
    </div>
  <figcaption class="projects__caption">
  Mobile Views
  </figcaption>
</figure>

<section class="row row--small">
  <h3 class="subheading">Mobile Performance</h3>
  <p>Knowing that each slideshow would contain 30+ high resolution images, optimization was incredibly important. First, I optimized all images using smart lossy compression. All high resolution images were then lazy loaded, so that only the thumbnails were loaded on the initial request. The result? The image slideshow page was only 1MB on initial page load - about half the size of an average web page today.</p>
</section>
