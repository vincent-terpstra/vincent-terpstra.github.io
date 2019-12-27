---
layout : archive
permalink: /projects/
title: "My Projects"
author_profile: true
header:
   image: "/images/toronto-skyline.jpg"
---

{% include base_path %}
{% include group-by-array collection=site.posts field='tags' %}

{% for tag in group_names %}
   {% assign posts = group_items[forloop.index0] %}
   <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
   {% for post in post %}
      {% include archive-single.html %}
   {% endfor %}
{% endfor %}
