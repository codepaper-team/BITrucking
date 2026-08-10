(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var images = Array.prototype.slice.call(
      document.querySelectorAll('.gallery .g-item img')
    );

    if (!images.length) {
      return;
    }

    var activeIndex = 0;
    var previousFocus = null;
    var lightbox = document.createElement('div');
    lightbox.className = 'lp-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image preview');
    lightbox.innerHTML =
      '<button class="lp-lightbox__control lp-lightbox__close" type="button" aria-label="Close image preview">X</button>' +
      '<button class="lp-lightbox__control lp-lightbox__prev" type="button" aria-label="Previous image">&lt;</button>' +
      '<figure class="lp-lightbox__figure">' +
      '<img class="lp-lightbox__image" alt="">' +
      '<figcaption class="lp-lightbox__caption"></figcaption>' +
      '</figure>' +
      '<button class="lp-lightbox__control lp-lightbox__next" type="button" aria-label="Next image">&gt;</button>';
    document.body.appendChild(lightbox);

    var previewImage = lightbox.querySelector('.lp-lightbox__image');
    var caption = lightbox.querySelector('.lp-lightbox__caption');
    var closeButton = lightbox.querySelector('.lp-lightbox__close');
    var prevButton = lightbox.querySelector('.lp-lightbox__prev');
    var nextButton = lightbox.querySelector('.lp-lightbox__next');

    function show(index) {
      activeIndex = (index + images.length) % images.length;
      var source = images[activeIndex];
      var alt = source.getAttribute('alt') || 'Gallery image';
      previewImage.src = source.currentSrc || source.src;
      previewImage.alt = alt;
      caption.textContent = alt;
    }

    function open(index) {
      previousFocus = document.activeElement;
      show(index);
      lightbox.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
      closeButton.focus();
    }

    function close() {
      lightbox.classList.remove('is-open');
      document.documentElement.style.overflow = '';
      previewImage.removeAttribute('src');
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    }

    images.forEach(function (image, index) {
      image.setAttribute('tabindex', '0');
      image.setAttribute('role', 'button');
      image.setAttribute(
        'aria-label',
        'Open image preview: ' + (image.getAttribute('alt') || 'Gallery image')
      );
      image.addEventListener('click', function () {
        open(index);
      });
      image.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(index);
        }
      });
    });

    closeButton.addEventListener('click', close);
    prevButton.addEventListener('click', function () {
      show(activeIndex - 1);
    });
    nextButton.addEventListener('click', function () {
      show(activeIndex + 1);
    });
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        close();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (!lightbox.classList.contains('is-open')) {
        return;
      }

      if (event.key === 'Escape') {
        close();
      } else if (event.key === 'ArrowLeft') {
        show(activeIndex - 1);
      } else if (event.key === 'ArrowRight') {
        show(activeIndex + 1);
      }
    });
  });
})();
