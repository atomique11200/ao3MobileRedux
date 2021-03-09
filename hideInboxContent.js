//archiveofourown.org/users/yourusername/inbox
(function() {
    'use strict';

    // hides kudos, hits, comments, bookmarks, comments button, and the inbox
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = '.heading{display:none} .kudos{display:none !important;} .hits{display:none !important;} .comments{display:none !important;} .bookmarks{display:none !important;} #show_comments_link{display:none !important;} a[href="/users/yourusername/inbox"]{display:none !important;}';
    document.head.appendChild(style);
})();
