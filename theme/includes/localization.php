<?php

// Hide WPML's "professional translation" boxes
define('ICL_DONT_PROMOTE', TRUE);

function inmetrics_load_theme_textdomain() {
  $lang_dir = get_template_directory() . '/lang';
  load_theme_textdomain('inmetrics', $lang_dir);
}
add_action('after_setup_theme', 'inmetrics_load_theme_textdomain');

?>