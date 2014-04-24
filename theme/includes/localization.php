<?php

// Hide WPML's "professional translation" boxes
define('ICL_DONT_PROMOTE', TRUE);

function inmetrics_load_theme_textdomain() {
  $lang_dir = get_template_directory() . '/lang';
  load_theme_textdomain('inmetrics', $lang_dir);
}
add_action('after_setup_theme', 'inmetrics_load_theme_textdomain');

function inmetrics_home_url() {
  if(function_exists("icl_get_home_url"))
    return icl_get_home_url();
  else
    return home_url();
}

function inmetrics_get_current_language_code()
{
  global $sitepress;
  $lang = $sitepress->get_current_language();
  return mb_strtoupper(substr($lang, 0, 2));
}

function inmetrics_current_language_code()
{
  echo inmetrics_get_current_language_code();
}

function inmetrics_language_switcher($display_field = 'native_name')
{
  if(function_exists('icl_get_languages')) {
    $languages = icl_get_languages('skip_missing=0');
    if(!empty($languages)){
      $order = array('pt-br', 'en', 'es');
      foreach ($order as $i) {
        if($lang = $languages[$i]) {
          $display = $lang[$display_field];
          if($display_field == 'language_code')
            $display = mb_strtoupper(substr($display, 0, 2));
          $class = $lang['active'] ? 'class="active"' : '';
          $url = $lang['active'] ? '' : 'href="' . $lang['url'] . '"';
          echo "<a $url $class>$display</a>";
        }
      }
    }
  }
}

// Remove Multilingual Content Setup box
function disable_icl_metabox() {
  global $post;  
  remove_meta_box('icl_div_config', $post->post_type, 'normal');
}
add_action('admin_head', 'disable_icl_metabox', 99);

?>