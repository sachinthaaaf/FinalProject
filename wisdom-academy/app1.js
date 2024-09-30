//  Sachintha Fernando 
//   BSCP|CS|62|113


import Vue from 'vue';


new Vue({
  el: '#app', 

  mounted() {
    // Use setTimeout to redirect after 5 seconds
    setTimeout(() => {
      this.redirectToHomePage(); // Redirect after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds
  },

  methods: {
    redirectToHomePage() {
      window.location.href = './index.html'; 
    },
  },
});
