---
layout: default
title: Patient Guides
permalink: /guides/
---

<div class="page">

  <header class="subpage-hero">
    <p class="subpage-eyebrow">Patient Resources</p>
    <h1>Patient Guides</h1>
    <p class="subpage-lede">Expert resources to support your recovery, inform your care decisions, and help you get the most from treatment.</p>
  </header>

  {% comment %} Define Categories {% endcomment %}
  {% assign categories = "ICBC & Car Accident Recovery|10|20,Extended Health Benefits|20|30,Office & Workplace Pain|30|40,Sports & Active Lifestyle|40|50,Chronic Pain & Conditions|50|70,Our Approach & First Visit|70|80,Locations & Booking|80|90" | split: "," %}

  {% for cat in categories %}
    {% assign parts = cat | split: "|" %}
    {% assign cat_title = parts[0] %}
    {% assign start = parts[1] | plus: 0 %}
    {% assign end = parts[2] | plus: 0 %}
    {% assign category_guides = site.guides | where_exp: "g", "g.order >= start" | where_exp: "g", "g.order < end" | sort: "order" %}

    {% if category_guides.size > 0 %}
    <section style="margin-bottom:48px;">
      <div class="section-head">
        <h2 class="section-title" style="font-size:22px;">{{ cat_title }}</h2>
      </div>
      <div class="content-grid">
        {% for guide in category_guides %}
        <a href="{{ guide.url }}" class="content-card">
          <div class="content-card-body">
            <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:8px;">
              <div style="width:32px;height:32px;background:var(--brand-tint);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--brand);font-size:13px;flex-shrink:0;">
                <i class="fas fa-book-medical"></i>
              </div>
              <h3 class="content-card-title">{{ guide.nav_title | default: guide.title }}</h3>
            </div>
            {% if guide.excerpt %}
            <p class="content-card-excerpt">{{ guide.excerpt | strip_html }}</p>
            {% endif %}
            <p class="content-card-cta">Read Guide <i class="fas fa-arrow-right" style="font-size:10px;margin-left:4px;"></i></p>
          </div>
        </a>
        {% endfor %}
      </div>
    </section>
    {% endif %}
  {% endfor %}

  <div style="border-top:1px solid var(--border-soft);padding-top:40px;text-align:center;">
    <p style="font-family:var(--serif);font-size:16px;color:var(--dark-warm);margin:0 0 16px;">Need personal advice for your specific situation?</p>
    <a href="/booking/" class="btn-primary">Book a Consultation</a>
  </div>

</div>
