console.log('running Honest Marketer extension...');

var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span"); // TODO: support 'div'

var negativeWords = ['!', '#1', 'instant', 'best', 'superior', 'the future', 'easiest', 'fastest', 'most popular', 'most powerful'];
var neutralWords = ['everything you need', 'absolute', 'easy', 'fast', 'love', 'better', 'limited time', 'new way', 'powerful', 'popular'];
var positiveWords = [' rate', 'first', 'patent', 'trademark', 'reviews', 'refund', 'free'];

var exitIntentKeywords = ['exit intent', 'exit-intent']; // what else?

var negativeHighlights = neutralHighlights = positiveHighlights = 0;

var notificationSpacer = 20; // pixels
var toolCheckDelay = 1500; // milliseconds
