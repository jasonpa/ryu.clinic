---
layout: default
title: R-Lab Projects
permalink: /lab/
---

<div class="page">

  <header class="subpage-hero">
    <p class="subpage-eyebrow">Engineering Health</p>
    <h1>R-Lab</h1>
    <p class="subpage-lede">Where classical East Asian medicine meets modern software engineering. We build tools that bridge clinical intuition with algorithmic precision.</p>
  </header>

  <section style="margin-bottom:56px;">
    <div class="section-head">
      <p class="section-num">Active Projects</p>
      <h2 class="section-title">What we're building.</h2>
    </div>

    <div class="services-grid">
      {% for project in site.data.projects %}
      <div class="service-card" style="flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div class="service-icon">
            <i class="fas fa-microchip"></i>
          </div>
          {% if project.status %}
          <span style="font-family:var(--latin-ui);font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;border:1px solid var(--border-soft);color:{% if project.status == 'Live' %}var(--brand){% else %}var(--stone){% endif %};">{{ project.status }}</span>
          {% endif %}
        </div>
        <div>
          <h3 style="font-family:var(--serif);font-weight:500;font-size:18px;color:var(--near-black);margin:0 0 8px;">{{ project.name }}</h3>
          <p style="font-family:var(--serif);font-size:14px;line-height:1.6;color:var(--olive);margin:0 0 12px;">{{ project.description }}</p>
          {% if project.tech_stack %}
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
            {% for tech in project.tech_stack %}
            <span style="font-family:var(--latin-ui);font-size:11px;color:var(--stone);background:var(--warm-sand);padding:3px 8px;border-radius:3px;">{{ tech }}</span>
            {% endfor %}
          </div>
          {% endif %}
          <div style="display:flex;flex-wrap:wrap;gap:16px;">
            {% if project.demo_url and project.demo_url != "#" %}
            <a href="{{ project.demo_url }}" target="_blank" rel="noopener" style="font-family:var(--latin-ui);font-size:12px;font-weight:600;color:var(--brand);display:inline-flex;align-items:center;gap:6px;">
              <i class="fas fa-arrow-up-right-from-square"></i> View Live
            </a>
            {% endif %}
            {% if project.github_url %}
            <a href="{{ project.github_url }}" style="font-family:var(--latin-ui);font-size:12px;font-weight:600;color:var(--brand);display:inline-flex;align-items:center;gap:6px;">
              <i class="fab fa-github"></i> View Repository
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section style="border-top:1px solid var(--border-soft);padding-top:40px;">
    <div class="section-head">
      <p class="section-num">Collaboration</p>
      <h2 class="section-title">Interested in working together?</h2>
      <p class="section-lede">If you're a clinician, researcher, or developer interested in building tools at the intersection of East Asian medicine and data — reach out.</p>
    </div>
    <a href="mailto:info@ryu.clinic" class="btn-primary">Initiate Collaboration</a>
  </section>

</div>
