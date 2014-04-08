<?php

function inmetrics_register_top_menu() {
  register_nav_menu('inmetrics_main_menu_location', __('Top Menu', 'inmetrics'));
}
add_action('init', 'inmetrics_register_top_menu');

?>
