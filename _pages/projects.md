---
layout : archive
permalink: /projects/
title: "My Projects"
author_profile: true
header:
   image: "/images/toronto-skyline.jpg"
---

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
