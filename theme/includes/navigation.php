<?php

function inmetrics_register_top_menu() {
  register_nav_menu('inmetrics_main_menu_location', __('Top Menu', 'inmetrics'));
}
add_action('init', 'inmetrics_register_top_menu');

function inmetrics_main_menu()
{
  $menu_name = 'inmetrics_main_menu_location';
  if(($locations = get_nav_menu_locations()) && isset($locations[$menu_name]) ) {
    $menu = wp_get_nav_menu_object($locations[$menu_name]);
  }
  if($menu_items = wp_get_nav_menu_items($menu->term_id)) {
    foreach ($menu_items as $key => $menu_item) {
      $title = $menu_item->title;
      $url = $menu_item->url;
      echo '<a href="' . $url . '" title="' . esc_attr($title) . '">' . $title . '</a></li>';
    }
  }
}

// Copied from TwentyFourteen
function inmetrics_wp_title( $title, $sep ) {
  global $paged, $page;
  if ( is_feed() ) return $title;
  $title .= get_bloginfo( 'name' );
  $site_description = get_bloginfo( 'description', 'display' );
  if ( $site_description && ( is_home() || is_front_page() ) )
    $title = "$title $sep $site_description";
  if ( $paged >= 2 || $page >= 2 )
    $title = "$title $sep " . sprintf( __('Page %s', 'inmetrics'), max( $paged, $page ) );
  return $title;
}
add_filter('wp_title', 'inmetrics_wp_title', 10, 2);

?>
