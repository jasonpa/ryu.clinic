---
layout: default
title: Clinical Services
permalink: /services/
---

<div class="page">

  <header class="subpage-hero">
    <p class="subpage-eyebrow">What we treat</p>
    <h1>Clinical Services</h1>
    <p class="subpage-lede">Acupuncture, herbal medicine, and integrative care — grounded in classical theory and evidence-informed practice.</p>
  </header>

  <section style="margin-bottom:56px;">
    <div class="services-grid">
      {% for service in site.data.services %}
      <div class="service-card">
        <div class="service-icon">
          <i class="{{ service.icon }}"></i>
        </div>
        <div>
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- ICBC Banner -->
  <section style="margin-bottom:56px;">
    <div class="section-head">
      <p class="section-num">Insurance &amp; Billing</p>
      <h2 class="section-title">ICBC direct billing accepted.</h2>
    </div>
    <div class="icbc-banner">
      <div>
        <h3>Motor vehicle accident recovery</h3>
        <p>Ryu Clinic is an ICBC-registered provider. Bring your claim number — we handle the billing directly. Acupuncture is a covered treatment under most ICBC claims.</p>
      </div>
      <a href="/booking/" class="btn-primary" style="flex-shrink:0;">Book via ICBC</a>
    </div>
  </section>

  <!-- Session Fees -->
  <section style="margin-bottom:56px;">
    <div class="section-head">
      <p class="section-num">Session Fees</p>
      <h2 class="section-title">Two session types. No upsell.</h2>
    </div>

    <ol class="features">
      <li>
        <p class="name">Initial Consultation<small>$180 · 90 minutes</small></p>
        <p class="what">Full symptom history, pattern diagnosis, and first treatment in a single 90-minute session. Priced to be long enough to be done properly. Herbal formula consultation included when relevant.</p>
      </li>
      <li>
        <p class="name">Follow-up Treatment<small>$95 · 45 minutes</small></p>
        <p class="what">Acupuncture treatment with brief progress review. Priced to be sustainable over the course of a full treatment plan. Frequency is discussed honestly at your first visit.</p>
      </li>
    </ol>

    <p style="font-family:var(--serif);font-size:13px;color:var(--stone);margin-top:16px;">Payment at time of service · Cash, card, or check · Herbal formulas billed separately · Sliding scale available — ask</p>
  </section>

  <div style="text-align:center;padding:40px 0;border-top:1px solid var(--border-soft);">
    <p style="font-family:var(--serif);font-size:18px;color:var(--dark-warm);margin:0 0 20px;">Ready to start?</p>
    <a href="/booking/" class="btn-primary">Book a Consultation</a>
  </div>

</div>
