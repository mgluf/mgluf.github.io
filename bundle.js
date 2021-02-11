(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

!function (d) {
  // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
  var itemClassName = "carousel__photo",
      items = d.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true; // To initialise the carousel we'll want to update the DOM with our own classes

  function setInitialClasses() {
    // Target the last, initial, and next items and give them the relevant class.
    // This assumes there are three or more items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  } // Set click events to navigation buttons


  function setEventListeners() {
    var next = d.getElementsByClassName('carousel__button--next')[0],
        prev = d.getElementsByClassName('carousel__button--prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  } // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)


  function disableInteraction() {
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction(); // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.

      var newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 2,
          oldNext = slide + 2; // Test if carousel has more than three items

      if (totalItems - 1 > 3) {
        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        } // Check if current slide is at the beginning or end and sets slide numbers


        if (slide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        } // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.
        // Based on the current slide, reset to default classes.


        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName; // Add the new classes

        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  } // Next navigation handler


  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0;
      } else {
        slide++;
      } // Move carousel to updated slide


      moveCarouselTo(slide);
    }
  } // Previous navigation handler


  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1;
      } else {
        slide--;
      } // Move carousel to updated slide


      moveCarouselTo(slide);
    }
  } // Initialise carousel


  function initCarousel() {
    setInitialClasses();
    setEventListeners(); // Set moving to false now that the carousel is ready

    moving = false;
  } // make it rain


  initCarousel();
}(document);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBRSxVQUFTLENBQVQsRUFBVztBQUNYO0FBQ0EsTUFBSSxhQUFhLEdBQUcsaUJBQXBCO0FBQUEsTUFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLHNCQUFGLENBQXlCLGFBQXpCLENBRFo7QUFBQSxNQUVJLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFGdkI7QUFBQSxNQUdJLEtBQUssR0FBRyxDQUhaO0FBQUEsTUFJSSxNQUFNLEdBQUcsSUFKYixDQUZXLENBUVg7O0FBQ0EsV0FBUyxpQkFBVCxHQUE2QjtBQUUzQjtBQUNBO0FBQ0EsSUFBQSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQWQsQ0FBTCxDQUFzQixTQUF0QixDQUFnQyxHQUFoQyxDQUFvQyxNQUFwQztBQUNBLElBQUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQSxJQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxTQUFULENBQW1CLEdBQW5CLENBQXVCLE1BQXZCO0FBQ0QsR0FoQlUsQ0FrQlg7OztBQUVBLFdBQVMsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLHNCQUFGLENBQXlCLHdCQUF6QixFQUFtRCxDQUFuRCxDQUFYO0FBQUEsUUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLHNCQUFGLENBQXlCLHdCQUF6QixFQUFtRCxDQUFuRCxDQURYO0FBR0EsSUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0I7QUFDQSxJQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixRQUEvQjtBQUNELEdBMUJVLENBNEJYOzs7QUFDQSxXQUFTLGtCQUFULEdBQThCO0FBQzVCLElBQUEsTUFBTSxHQUFHLElBQVQ7QUFF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ZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiIShmdW5jdGlvbihkKXtcbiAgLy8gVmFyaWFibGVzIHRvIHRhcmdldCBvdXIgYmFzZSBjbGFzcywgIGdldCBjYXJvdXNlbCBpdGVtcywgY291bnQgaG93IG1hbnkgY2Fyb3VzZWwgaXRlbXMgdGhlcmUgYXJlLCBzZXQgdGhlIHNsaWRlIHRvIDAgKHdoaWNoIGlzIHRoZSBudW1iZXIgdGhhdCB0ZWxscyB1cyB0aGUgZnJhbWUgd2UncmUgb24pLCBhbmQgc2V0IG1vdGlvbiB0byB0cnVlIHdoaWNoIGRpc2FibGVzIGludGVyYWN0aXZpdHkuXG4gIHZhciBpdGVtQ2xhc3NOYW1lID0gXCJjYXJvdXNlbF9fcGhvdG9cIixcbiAgICAgIGl0ZW1zID0gZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW1DbGFzc05hbWUpLFxuICAgICAgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgIHNsaWRlID0gMCxcbiAgICAgIG1vdmluZyA9IHRydWU7IFxuXG4gIC8vIFRvIGluaXRpYWxpc2UgdGhlIGNhcm91c2VsIHdlJ2xsIHdhbnQgdG8gdXBkYXRlIHRoZSBET00gd2l0aCBvdXIgb3duIGNsYXNzZXNcbiAgZnVuY3Rpb24gc2V0SW5pdGlhbENsYXNzZXMoKSB7XG5cbiAgICAvLyBUYXJnZXQgdGhlIGxhc3QsIGluaXRpYWwsIGFuZCBuZXh0IGl0ZW1zIGFuZCBnaXZlIHRoZW0gdGhlIHJlbGV2YW50IGNsYXNzLlxuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGVyZSBhcmUgdGhyZWUgb3IgbW9yZSBpdGVtcy5cbiAgICBpdGVtc1t0b3RhbEl0ZW1zIC0gMV0uY2xhc3NMaXN0LmFkZChcInByZXZcIik7XG4gICAgaXRlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBpdGVtc1sxXS5jbGFzc0xpc3QuYWRkKFwibmV4dFwiKTtcbiAgfVxuXG4gIC8vIFNldCBjbGljayBldmVudHMgdG8gbmF2aWdhdGlvbiBidXR0b25zXG5cbiAgZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIG5leHQgPSBkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19idXR0b24tLW5leHQnKVswXSxcbiAgICAgICAgcHJldiA9IGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfX2J1dHRvbi0tcHJldicpWzBdO1xuXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVOZXh0KTtcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVByZXYpO1xuICB9XG5cbiAgLy8gRGlzYWJsZSBpbnRlcmFjdGlvbiBieSBzZXR0aW5nICdtb3ZpbmcnIHRvIHRydWUgZm9yIHRoZSBzYW1lIGR1cmF0aW9uIGFzIG91ciB0cmFuc2l0aW9uICgwLjVzID0gNTAwbXMpXG4gIGZ1bmN0aW9uIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICBtb3ZpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbW92aW5nID0gZmFsc2VcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUNhcm91c2VsVG8oc2xpZGUpIHtcblxuICAgIC8vIENoZWNrIGlmIGNhcm91c2VsIGlzIG1vdmluZywgaWYgbm90LCBhbGxvdyBpbnRlcmFjdGlvblxuICAgIGlmKCFtb3ZpbmcpIHtcblxuICAgICAgLy8gdGVtcG9yYXJpbHkgZGlzYWJsZSBpbnRlcmFjdGl2aXR5XG4gICAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKTtcblxuICAgICAgLy8gUHJlZW1wdGl2ZWx5IHNldCB2YXJpYWJsZXMgZm9yIHRoZSBjdXJyZW50IG5leHQgYW5kIHByZXZpb3VzIHNsaWRlLCBhcyB3ZWxsIGFzIHRoZSBwb3RlbnRpYWwgbmV4dCBvciBwcmV2aW91cyBzbGlkZS5cbiAgICAgIHZhciBuZXdQcmV2aW91cyA9IHNsaWRlIC0gMSxcbiAgICAgICAgICBuZXdOZXh0ID0gc2xpZGUgKyAxLFxuICAgICAgICAgIG9sZFByZXZpb3VzID0gc2xpZGUgLSAyLFxuICAgICAgICAgIG9sZE5leHQgPSBzbGlkZSArIDI7XG5cbiAgICAgIC8vIFRlc3QgaWYgY2Fyb3VzZWwgaGFzIG1vcmUgdGhhbiB0aHJlZSBpdGVtc1xuICAgICAgaWYgKCh0b3RhbEl0ZW1zIC0gMSkgPiAzKSB7XG5cbiAgICAgICAgLy8gQ2hlY2tzIGlmIHRoZSBuZXcgcG90ZW50aWFsIHNsaWRlIGlzIG91dCBvZiBib3VuZHMgYW5kIHNldHMgc2xpZGUgbnVtYmVyc1xuICAgICAgICBpZiAobmV3UHJldmlvdXMgPD0gMCkge1xuICAgICAgICAgIG9sZFByZXZpb3VzID0gKHRvdGFsSXRlbXMgLSAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdOZXh0ID49ICh0b3RhbEl0ZW1zIC0gMSkpe1xuICAgICAgICAgIG9sZE5leHQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBzbGlkZSBpcyBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBhbmQgc2V0cyBzbGlkZSBudW1iZXJzXG4gICAgICAgIGlmIChzbGlkZSA9PT0gMCkge1xuICAgICAgICAgIG5ld1ByZXZpb3VzID0gKHRvdGFsSXRlbXMgLSAxKTtcbiAgICAgICAgICBvbGRQcmV2aW91cyA9ICh0b3RhbEl0ZW1zIC0gMik7XG4gICAgICAgICAgb2xkTmV4dCA9IChzbGlkZSArIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlID09PSAodG90YWxJdGVtcyAtMSkpIHtcbiAgICAgICAgICBuZXdQcmV2aW91cyA9IChzbGlkZSAtIDEpO1xuICAgICAgICAgIG5ld05leHQgPSAwO1xuICAgICAgICAgIG9sZE5leHQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm93IHdlJ3ZlIHdvcmtlZCBvdXQgd2hlcmUgd2UgYXJlIGFuZCB3aGVyZSB3ZSdyZSBnb2luZywgYnkgYWRkaW5nIGFuZCByZW1vdmluZyBjbGFzc2VzLCB3ZSdsbCBiZSB0cmlnZ2VyaW5nIHRoZSBjYXJvdXNlbCdzIHRyYW5zaXRpb25zLlxuXG4gICAgICAgIC8vIEJhc2VkIG9uIHRoZSBjdXJyZW50IHNsaWRlLCByZXNldCB0byBkZWZhdWx0IGNsYXNzZXMuXG4gICAgICAgIGl0ZW1zW29sZFByZXZpb3VzXS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lO1xuICAgICAgICBpdGVtc1tvbGROZXh0XS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IGNsYXNzZXNcbiAgICAgICAgaXRlbXNbbmV3UHJldmlvdXNdLmNsYXNzTmFtZSA9IGl0ZW1DbGFzc05hbWUgKyBcIiBwcmV2XCI7XG4gICAgICAgIGl0ZW1zW3NsaWRlXS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lICsgXCIgYWN0aXZlXCI7XG4gICAgICAgIGl0ZW1zW25ld05leHRdLmNsYXNzTmFtZSA9IGl0ZW1DbGFzc05hbWUgKyBcIiBuZXh0XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTmV4dCBuYXZpZ2F0aW9uIGhhbmRsZXJcbiAgZnVuY3Rpb24gbW92ZU5leHQoKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3ZpbmdcbiAgICBpZiAoIW1vdmluZykge1xuXG4gICAgICAvLyBJZiBpdCdzIHRoZSBsYXN0IHNsaWRlLCByZXNldCB0byAwLCBlbHNlICsxXG4gICAgICBpZiAoc2xpZGUgPT09ICh0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgc2xpZGUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGUrKztcbiAgICAgIH1cblxuICAgICAgLy8gTW92ZSBjYXJvdXNlbCB0byB1cGRhdGVkIHNsaWRlXG4gICAgICBtb3ZlQ2Fyb3VzZWxUbyhzbGlkZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHJldmlvdXMgbmF2aWdhdGlvbiBoYW5kbGVyXG4gIGZ1bmN0aW9uIG1vdmVQcmV2KCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgbW92aW5nXG4gICAgaWYgKCFtb3ZpbmcpIHtcblxuICAgICAgLy8gSWYgaXQncyB0aGUgZmlyc3Qgc2xpZGUsIHNldCBhcyB0aGUgbGFzdCBzbGlkZSwgZWxzZSAtMVxuICAgICAgaWYgKHNsaWRlID09PSAwKSB7XG4gICAgICAgIHNsaWRlID0gKHRvdGFsSXRlbXMgLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlLS07XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgY2Fyb3VzZWwgdG8gdXBkYXRlZCBzbGlkZVxuICAgICAgbW92ZUNhcm91c2VsVG8oc2xpZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluaXRpYWxpc2UgY2Fyb3VzZWxcbiAgZnVuY3Rpb24gaW5pdENhcm91c2VsKCkge1xuICAgIHNldEluaXRpYWxDbGFzc2VzKCk7XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNldCBtb3ZpbmcgdG8gZmFsc2Ugbm93IHRoYXQgdGhlIGNhcm91c2VsIGlzIHJlYWR5XG4gICAgbW92aW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyBtYWtlIGl0IHJhaW5cbiAgaW5pdENhcm91c2VsKCk7XG5cbn0oZG9jdW1lbnQpKTsiXX0=
