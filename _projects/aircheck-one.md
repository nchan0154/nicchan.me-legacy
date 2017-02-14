---
title: Aircheck One
permalink: /projects/aircheck-one/
date: 2016-08-01
img: featured-aircheck.png
color: 41c38a
link: https://aircheckone.com/
stack: Laravel, PHP, SCSS
featured: true
technology:
  - HTML
  - SCSS
  - Laravel
  - AngularJS
  - Stripe API
  - Gulp

blurb: A shopping cart solution for a leading Texan air quality company.

brief: | 
  Aircheck One's existing site was primarily informational, serving as a brochure to attract clients, who would then place an order by calling them up on a phone. There was great potential to transform the website into an integrated e-commerce and reporting experience.
  
solution: |
  Router Chowder's revamp for the site included a complete redesign of the front end site. The site now has a quiz to help customers decide on the type of inspection needed and a seamless transition into a Stripe powered checkout. Once an inspection is purchased, an account is automatically created for the customer to log into the reporting back end, where the inspector can upload CSV files that are then translated into human readable results for the customer to view. My contribution to the project included building out the public facing site using Laravel, working on the AngularJS quiz, creating an AJAX based shopping cart and integrating the Stripe API for payments.

---
<figure class="projects__img-wrapper row row--full" style="background-color: #{{ page.color }}">
  <img class="projects__img" src="{{ imgurl }}/img/aircheck-checkout.png" alt="Checkout Modal on Aircheck Website">
</figure>
