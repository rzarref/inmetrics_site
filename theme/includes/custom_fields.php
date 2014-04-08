<?php

// Fix for symlinks
function inmetrics_fix_acf_dir($file) {
  $base = get_template_directory();
  if(is_link($base)) {
    $base = readlink($base);
    $dir = get_template_directory_uri();
    $dir = str_replace($base, $dir, $file);
    return str_replace('\\' ,'/', $dir);
  }
  else {
    return acf.helpers_get_dir($file);
  }
}

if(!class_exists('Acf')) {
  define('ACF_LITE' , true);
  add_filter('acf/helpers/get_dir', 'inmetrics_fix_acf_dir', 1, 1);
  require_once(trailingslashit(get_template_directory()) . "vendor/advanced-custom-fields/acf.php");
  remove_filter('acf/helpers/get_dir', array(acf, 'helpers_get_dir'), 1, 1);
}

?>