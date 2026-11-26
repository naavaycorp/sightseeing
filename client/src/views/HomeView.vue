<script setup lang="ts">
import { Camera, Sparkles } from "@lucide/vue";
</script>
<template>
  <h1>
    <span><Camera :size="48" color="red" /></span>This is home view
  </h1>
  <p><Sparkles :size="48" color="green" /></p>

  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title font-semibold">How do I create an account?</div>
    <div class="collapse-content text-sm">
      Click the "Sign Up" button in the top right corner and follow the
      registration process.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      I forgot my password. What should I do?
    </div>
    <div class="collapse-content text-sm">
      Click on "Forgot Password" on the login page and follow the instructions
      sent to your email.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      How do I update my profile information?
    </div>
    <div class="collapse-content text-sm">
      Go to "My Account" settings and select "Edit Profile" to make changes.
    </div>
  </div>

  <!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

  <span class="countdown font-mono text-6xl">
    <span style="--value: 59; --digits: 2" aria-live="polite" aria-label="59"
      >59</span
    >
  </span>

  <div class="fab">
    <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
    <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">
      F
    </div>

    <!-- buttons that show up when FAB is open -->
    <div>Label B <button class="btn btn-lg btn-circle">A</button></div>
    <div>Label C <button class="btn btn-lg btn-circle">B</button></div>
    <div>Label D <button class="btn btn-lg btn-circle">C</button></div>
  </div>
</template>
