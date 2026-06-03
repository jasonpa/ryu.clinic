---
layout: default
title: Blog
permalink: /blog/
---

<div class="page">

  <header class="subpage-hero">
    <p class="subpage-eyebrow">Clinic Insights</p>
    <h1>Blog</h1>
    <p class="subpage-lede">Clinical perspectives, treatment education, and updates from the practice — written for patients who want to understand their health.</p>
  </header>

  <div style="display:flex;flex-direction:column;gap:16px;">
    {% for post in site.posts %}
    <a href="{{ post.url }}" class="content-card" style="flex-direction:row;align-items:stretch;">
      {% if post.header.overlay_image %}
      <div class="content-card-image" style="width:240px;flex-shrink:0;aspect-ratio:unset;border-radius:0;">
        <img src="{{ post.header.overlay_image }}" alt="{{ post.title }}">
      </div>
      {% else %}
      <div class="content-card-image" style="width:120px;flex-shrink:0;aspect-ratio:unset;border-radius:0;">
        <i class="fas fa-newspaper"></i>
      </div>
      {% endif %}
      <div class="content-card-body">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
          {% if post.categories %}
          <span style="font-family:var(--latin-ui);font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--brand);">{{ post.categories | first }}</span>
          {% endif %}
          <time style="font-family:var(--latin-ui);font-size:11px;color:var(--stone);" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        </div>
        <h2 class="content-card-title" style="font-size:19px;">{{ post.title }}</h2>
        <p class="content-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
        <p class="content-card-cta">Read Article <i class="fas fa-arrow-right" style="font-size:10px;margin-left:4px;"></i></p>
      </div>
    </a>
    {% endfor %}
  </div>

</div>
