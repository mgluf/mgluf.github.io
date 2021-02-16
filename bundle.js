(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

!function (d) {
  // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
  var itemClassName = "carousel__photo";
  var items = d.getElementsByClassName(itemClassName);
  var totalItems = items.length;
  var slide = 0;
  var moving = true; // To initialise the carousel we'll want to update the DOM with our own classes

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBRSxVQUFTLENBQVQsRUFBVztBQUNYO0FBQ0EsTUFBSSxhQUFhLEdBQUcsaUJBQXBCO0FBQ0EsTUFBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLHNCQUFGLENBQXlCLGFBQXpCLENBQWY7QUFDQSxNQUFPLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBMUI7QUFDQSxNQUFPLEtBQUssR0FBRyxDQUFmO0FBQ0EsTUFBTyxNQUFNLEdBQUcsSUFBaEIsQ0FOVyxDQVFYOztBQUNBLFdBQVMsaUJBQVQsR0FBNkI7QUFFM0I7QUFDQTtBQUNBLElBQUEsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFkLENBQUwsQ0FBc0IsU0FBdEIsQ0FBZ0MsR0FBaEMsQ0FBb0MsTUFBcEM7QUFDQSxJQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0EsSUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixNQUF2QjtBQUNELEdBaEJVLENBa0JYOzs7QUFFQSxXQUFTLGlCQUFULEdBQTZCO0FBQzNCLFFBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxzQkFBRixDQUF5Qix3QkFBekIsRUFBbUQsQ0FBbkQsQ0FBWDtBQUFBLFFBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxzQkFBRixDQUF5Qix3QkFBekIsRUFBbUQsQ0FBbkQsQ0FEWDtBQUdBLElBQUEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFFBQS9CO0FBQ0EsSUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0I7QUFDRCxHQTFCVSxDQTRCWDs7O0FBQ0EsV0FBUyxrQkFBVCxHQUE4QjtBQUM1QixJQUFBLE1BQU0sR0FBRyxJQUFUO0FB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bGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiEoZnVuY3Rpb24oZCl7XG4gIC8vIFZhcmlhYmxlcyB0byB0YXJnZXQgb3VyIGJhc2UgY2xhc3MsICBnZXQgY2Fyb3VzZWwgaXRlbXMsIGNvdW50IGhvdyBtYW55IGNhcm91c2VsIGl0ZW1zIHRoZXJlIGFyZSwgc2V0IHRoZSBzbGlkZSB0byAwICh3aGljaCBpcyB0aGUgbnVtYmVyIHRoYXQgdGVsbHMgdXMgdGhlIGZyYW1lIHdlJ3JlIG9uKSwgYW5kIHNldCBtb3Rpb24gdG8gdHJ1ZSB3aGljaCBkaXNhYmxlcyBpbnRlcmFjdGl2aXR5LlxuICB2YXIgaXRlbUNsYXNzTmFtZSA9IFwiY2Fyb3VzZWxfX3Bob3RvXCI7XG4gIHZhciAgICBpdGVtcyA9IGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpdGVtQ2xhc3NOYW1lKTtcbiAgdmFyICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gIHZhciAgICBzbGlkZSA9IDA7XG4gIHZhciAgICBtb3ZpbmcgPSB0cnVlOyBcblxuICAvLyBUbyBpbml0aWFsaXNlIHRoZSBjYXJvdXNlbCB3ZSdsbCB3YW50IHRvIHVwZGF0ZSB0aGUgRE9NIHdpdGggb3VyIG93biBjbGFzc2VzXG4gIGZ1bmN0aW9uIHNldEluaXRpYWxDbGFzc2VzKCkge1xuXG4gICAgLy8gVGFyZ2V0IHRoZSBsYXN0LCBpbml0aWFsLCBhbmQgbmV4dCBpdGVtcyBhbmQgZ2l2ZSB0aGVtIHRoZSByZWxldmFudCBjbGFzcy5cbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhlcmUgYXJlIHRocmVlIG9yIG1vcmUgaXRlbXMuXG4gICAgaXRlbXNbdG90YWxJdGVtcyAtIDFdLmNsYXNzTGlzdC5hZGQoXCJwcmV2XCIpO1xuICAgIGl0ZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgaXRlbXNbMV0uY2xhc3NMaXN0LmFkZChcIm5leHRcIik7XG4gIH1cblxuICAvLyBTZXQgY2xpY2sgZXZlbnRzIHRvIG5hdmlnYXRpb24gYnV0dG9uc1xuXG4gIGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBuZXh0ID0gZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9fYnV0dG9uLS1uZXh0JylbMF0sXG4gICAgICAgIHByZXYgPSBkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX19idXR0b24tLXByZXYnKVswXTtcblxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTmV4dCk7XG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVQcmV2KTtcbiAgfVxuXG4gIC8vIERpc2FibGUgaW50ZXJhY3Rpb24gYnkgc2V0dGluZyAnbW92aW5nJyB0byB0cnVlIGZvciB0aGUgc2FtZSBkdXJhdGlvbiBhcyBvdXIgdHJhbnNpdGlvbiAoMC41cyA9IDUwMG1zKVxuICBmdW5jdGlvbiBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG4gICAgbW92aW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIG1vdmluZyA9IGZhbHNlXG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVDYXJvdXNlbFRvKHNsaWRlKSB7XG5cbiAgICAvLyBDaGVjayBpZiBjYXJvdXNlbCBpcyBtb3ZpbmcsIGlmIG5vdCwgYWxsb3cgaW50ZXJhY3Rpb25cbiAgICBpZighbW92aW5nKSB7XG5cbiAgICAgIC8vIHRlbXBvcmFyaWx5IGRpc2FibGUgaW50ZXJhY3Rpdml0eVxuICAgICAgZGlzYWJsZUludGVyYWN0aW9uKCk7XG5cbiAgICAgIC8vIFByZWVtcHRpdmVseSBzZXQgdmFyaWFibGVzIGZvciB0aGUgY3VycmVudCBuZXh0IGFuZCBwcmV2aW91cyBzbGlkZSwgYXMgd2VsbCBhcyB0aGUgcG90ZW50aWFsIG5leHQgb3IgcHJldmlvdXMgc2xpZGUuXG4gICAgICB2YXIgbmV3UHJldmlvdXMgPSBzbGlkZSAtIDEsXG4gICAgICAgICAgbmV3TmV4dCA9IHNsaWRlICsgMSxcbiAgICAgICAgICBvbGRQcmV2aW91cyA9IHNsaWRlIC0gMixcbiAgICAgICAgICBvbGROZXh0ID0gc2xpZGUgKyAyO1xuXG4gICAgICAvLyBUZXN0IGlmIGNhcm91c2VsIGhhcyBtb3JlIHRoYW4gdGhyZWUgaXRlbXNcbiAgICAgIGlmICgodG90YWxJdGVtcyAtIDEpID4gMykge1xuXG4gICAgICAgIC8vIENoZWNrcyBpZiB0aGUgbmV3IHBvdGVudGlhbCBzbGlkZSBpcyBvdXQgb2YgYm91bmRzIGFuZCBzZXRzIHNsaWRlIG51bWJlcnNcbiAgICAgICAgaWYgKG5ld1ByZXZpb3VzIDw9IDApIHtcbiAgICAgICAgICBvbGRQcmV2aW91cyA9ICh0b3RhbEl0ZW1zIC0gMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3TmV4dCA+PSAodG90YWxJdGVtcyAtIDEpKXtcbiAgICAgICAgICBvbGROZXh0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgc2xpZGUgaXMgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgYW5kIHNldHMgc2xpZGUgbnVtYmVyc1xuICAgICAgICBpZiAoc2xpZGUgPT09IDApIHtcbiAgICAgICAgICBuZXdQcmV2aW91cyA9ICh0b3RhbEl0ZW1zIC0gMSk7XG4gICAgICAgICAgb2xkUHJldmlvdXMgPSAodG90YWxJdGVtcyAtIDIpO1xuICAgICAgICAgIG9sZE5leHQgPSAoc2xpZGUgKyAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZSA9PT0gKHRvdGFsSXRlbXMgLTEpKSB7XG4gICAgICAgICAgbmV3UHJldmlvdXMgPSAoc2xpZGUgLSAxKTtcbiAgICAgICAgICBuZXdOZXh0ID0gMDtcbiAgICAgICAgICBvbGROZXh0ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdyB3ZSd2ZSB3b3JrZWQgb3V0IHdoZXJlIHdlIGFyZSBhbmQgd2hlcmUgd2UncmUgZ29pbmcsIGJ5IGFkZGluZyBhbmQgcmVtb3ZpbmcgY2xhc3Nlcywgd2UnbGwgYmUgdHJpZ2dlcmluZyB0aGUgY2Fyb3VzZWwncyB0cmFuc2l0aW9ucy5cblxuICAgICAgICAvLyBCYXNlZCBvbiB0aGUgY3VycmVudCBzbGlkZSwgcmVzZXQgdG8gZGVmYXVsdCBjbGFzc2VzLlxuICAgICAgICBpdGVtc1tvbGRQcmV2aW91c10uY2xhc3NOYW1lID0gaXRlbUNsYXNzTmFtZTtcbiAgICAgICAgaXRlbXNbb2xkTmV4dF0uY2xhc3NOYW1lID0gaXRlbUNsYXNzTmFtZTtcblxuICAgICAgICAvLyBBZGQgdGhlIG5ldyBjbGFzc2VzXG4gICAgICAgIGl0ZW1zW25ld1ByZXZpb3VzXS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lICsgXCIgcHJldlwiO1xuICAgICAgICBpdGVtc1tzbGlkZV0uY2xhc3NOYW1lID0gaXRlbUNsYXNzTmFtZSArIFwiIGFjdGl2ZVwiO1xuICAgICAgICBpdGVtc1tuZXdOZXh0XS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lICsgXCIgbmV4dFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE5leHQgbmF2aWdhdGlvbiBoYW5kbGVyXG4gIGZ1bmN0aW9uIG1vdmVOZXh0KCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgbW92aW5nXG4gICAgaWYgKCFtb3ZpbmcpIHtcblxuICAgICAgLy8gSWYgaXQncyB0aGUgbGFzdCBzbGlkZSwgcmVzZXQgdG8gMCwgZWxzZSArMVxuICAgICAgaWYgKHNsaWRlID09PSAodG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgIHNsaWRlID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlKys7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgY2Fyb3VzZWwgdG8gdXBkYXRlZCBzbGlkZVxuICAgICAgbW92ZUNhcm91c2VsVG8oc2xpZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFByZXZpb3VzIG5hdmlnYXRpb24gaGFuZGxlclxuICBmdW5jdGlvbiBtb3ZlUHJldigpIHtcblxuICAgIC8vIENoZWNrIGlmIG1vdmluZ1xuICAgIGlmICghbW92aW5nKSB7XG5cbiAgICAgIC8vIElmIGl0J3MgdGhlIGZpcnN0IHNsaWRlLCBzZXQgYXMgdGhlIGxhc3Qgc2xpZGUsIGVsc2UgLTFcbiAgICAgIGlmIChzbGlkZSA9PT0gMCkge1xuICAgICAgICBzbGlkZSA9ICh0b3RhbEl0ZW1zIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZS0tO1xuICAgICAgfVxuXG4gICAgICAvLyBNb3ZlIGNhcm91c2VsIHRvIHVwZGF0ZWQgc2xpZGVcbiAgICAgIG1vdmVDYXJvdXNlbFRvKHNsaWRlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbml0aWFsaXNlIGNhcm91c2VsXG4gIGZ1bmN0aW9uIGluaXRDYXJvdXNlbCgpIHtcbiAgICBzZXRJbml0aWFsQ2xhc3NlcygpO1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAvLyBTZXQgbW92aW5nIHRvIGZhbHNlIG5vdyB0aGF0IHRoZSBjYXJvdXNlbCBpcyByZWFkeVxuICAgIG1vdmluZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gbWFrZSBpdCByYWluXG4gIGluaXRDYXJvdXNlbCgpO1xuXG59KGRvY3VtZW50KSk7Il19
