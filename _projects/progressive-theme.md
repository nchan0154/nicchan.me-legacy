---
title: Progressive Tumblr Theme
permalink: projects/progressive-theme/
date: 2016-05-30
img: hero-progressive.png
imgSmall: hero-progressive-s.png
color: e4b0af
link: http://www.progressivetheme.tumblr.com
stack: Tumblr, SCSS, Javascript
technology:
    - HTML
    - SCSS
    - Javascript
    - Gulp
    - Git
    
brief: | 
    I was frustrated with many of the existing Tumblr themes out there, most themes had tiny text, a lack of contrast and were not responsive at all. I knew that many people on Tumblr cared about accessibility, but most of the themes in the theme store didn't bother implementing features that considered the wide variety of devices and users that might want to just read a blog.
    
solution: |
    Progressive is a Tumblr theme built with the idea of “progressive enhancement” in mind, a web development concept that promotes the idea that everyone should be able to access basic content and functionality, regardless of what device you are using.  Being a Tumblr theme that focused on accessibility without sacrificing aesthetics or functionality, the Tumblr community responded well to Progressive, and it reached <strong>70 installs</strong> within the first 3 days of launch. Below is a list of base features the theme offers:
    <ul>
    <li>Custom avatar, upload any size and it will crop to fit</li>
    <li>Choice between custom gradient background or custom image background</li>
    <li>Custom colors for everything</li>
    <li>Able to adjust post/header background transparency</li>
    <li>Custom google fonts available</li>
    <li>Google Analytics and Disqus support</li>
    <li>Search (Default tumblr search or Tag search for users concerned with privacy)</li>
    <li>Support for all post types</li>
    <li>Support for localization</li>
    <li>Scroll between pages with the J (previous) and K (next) keys </li>
    </ul>

---
<figure class="projects__img-wrapper row full-width" style="background-color: #{{ page.color }}">
        <div class="projects__half">
            <img class="projects__img" src="{{ imgurl }}/img/progressive-1.png" alt="Alternate color scheme for Progressive theme">
        </div>
        <div class="projects__half">
            <img class="projects__img" src="{{ imgurl }}/img/progressive-3.png" alt="Customizer option for Progressive theme">
        </div>
</figure>

<div class="row">
    <section class="text-block">
        <h2>Highlights</h2>
        <h2 class="subheading">Accessibility Features</h2>
        <ul>
            <li>“Skip to content” link so that users with screen readers can choose to skip the header text to the blog content</li>
            <li>Uses relative font sizing (rem units), which respects the users preference while keeping a legible base-font-size</i>
            <li>100% responsive, will adjust itself to look decent on any screen size</li>
            <li>Focus styles so that keyboard only users can easily find their position on the page</li>
            <li>Semantic HTML5 elements and elements with proper ARIA roles that allow for screen reader users to better navigate the page</li>
            <li>Obvious link styling so that people can easily distinguish links in the body of a post</li>
            <li>Suggested color schemes are WCAG compliant, which means that it meets the color scheme meets the  minimum contrast level to be easily viewed by most users</li>
            <li>Screen reader specific labels such as alt text on icons</li>
            <li>Implementation of the {TagsAsClasses} tag, which means that all post tags show up as CSS classes so that people who might want to block certain tags can easily do so by blocking the class element with an adblocker/some other blocking program.</li>
        </ul>
    </section>
</div>
