/* global window, document, jQuery */
'use strict';

(function( $ ) {

    $( function() {
        var $modalTrigger = $('.js-modal-trigger'),
            $modalClose = $('.js-modal-close'),
            $modalOverlay = $('.js-modal-overlay');
        
        $modalTrigger.on('click', displayModal);
        $modalClose.on('click', displayModal);
        $modalOverlay.on('click', displayModal);

        function displayModal( event ) {
            var $this = $(this),
                $modal = $('.js-modal'),
                $modalAttr = $modal.attr('data-modal'),
                $modalCurrent = $('.js-modal-content[data-modal-id = '+$modalAttr+']');
                console.log($modal);
                event.preventDefault();
                $modalCurrent.toggleClass('is-zoomed');
        }
    });

})( jQuery );
