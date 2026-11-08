---
layout: default
title: "진료 서비스"
permalink: /ko/services/
lang: ko
lang_alt: /services/
---

<div class="page">

  <header class="subpage-hero">
    <p class="subpage-eyebrow">진료 분야</p>
    <h1>진료 서비스</h1>
    <p class="subpage-lede">침구, 한약 처방, 통합 치료 — 한의학 고전 이론과 근거 중심 진료를 바탕으로 합니다.</p>
  </header>

  <section style="margin-bottom:56px;">
    <div class="services-grid">
      {% for service in site.data.services_ko %}
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
      <p class="section-num">보험 및 청구</p>
      <h2 class="section-title">ICBC 다이렉트 빌링 가능.</h2>
    </div>
    <div class="icbc-banner">
      <div>
        <h3>교통사고 회복 치료</h3>
        <p>Ryu Clinic은 ICBC 등록 치료기관입니다. 클레임 번호만 알려주시면 청구는 저희가 직접 처리합니다. 침구 치료는 대부분의 ICBC 클레임에서 보장됩니다.</p>
      </div>
      <a href="/icbc-acupuncture-coquitlam/" class="btn-primary" style="flex-shrink:0;">ICBC로 예약하기</a>
    </div>
  </section>

  <!-- Session Fees -->
  <section style="margin-bottom:56px;">
    <div class="section-head">
      <p class="section-num">진료비</p>
      <h2 class="section-title">두 가지 진료 유형. 불필요한 권유 없음.</h2>
    </div>

    <ol class="features">
      <li>
        <p class="name">초진 상담<small>$140 · 60분</small></p>
        <p class="what">증상 병력 청취, 변증(辨證) 진단, 첫 치료까지 60분 한 세션에 진행합니다. 제대로 진료할 수 있도록 충분한 시간으로 책정했습니다. 필요한 경우 한약 처방 상담도 포함됩니다.</p>
      </li>
      <li>
        <p class="name">재진 치료<small>$120 · 45분</small></p>
        <p class="what">경과를 간단히 확인한 뒤 침구 치료를 진행합니다. 전체 치료 과정 동안 부담 없이 지속할 수 있도록 책정된 가격입니다. 치료 빈도는 첫 방문 시 솔직하게 상의합니다.</p>
      </li>
    </ol>

    <p style="font-family:var(--serif);font-size:13px;color:var(--stone);margin-top:16px;">진료 당일 결제 · 현금/카드/체크 가능 · 한약 처방은 별도 청구 · 슬라이딩 스케일(소득 기준 할인) 가능 — 문의해 주세요</p>
  </section>

  <div style="text-align:center;padding:40px 0;border-top:1px solid var(--border-soft);">
    <p style="font-family:var(--serif);font-size:18px;color:var(--dark-warm);margin:0 0 20px;">지금 시작해 보세요</p>
    <a href="/ko/booking/" class="btn-primary">진료 예약하기</a>
  </div>

</div>
