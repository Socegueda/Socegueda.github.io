// JavaScript Document

$(document).ready(function() {
      $('a[href^="#portfolio"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
      });
  });

$(document).ready(function() {
      $('a[href^="#contact"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
      });
  });

$(document).ready(function() {
      $('a[href^="#shop"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
      });
  });

$(document).ready(function() {
      $('a[href^="#top"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
      });
  });
