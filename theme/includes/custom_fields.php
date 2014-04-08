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

function inmetrics_acf_home_page() {
  global $sitepress;
  $home = get_page_by_path("home");
  $trid = $sitepress->get_element_trid($home->ID, 'post_page');
  $translations = $sitepress->get_element_translations($trid);
  $rules = array();
  $i = 0;
  foreach($translations as $translation) {
    $i++;
    $rules[] = array(array (
      'param' => 'post_type',
      'operator' => '==',
      'value' => 'page',
      'order_no' => 0,
      'group_no' => $i,
    ), array (
      'param' => 'page',
      'operator' => '==',
      'value' => $translation->element_id,
      'order_no' => 1,
      'group_no' => $i,
    ));
  }
  $hide_all = array (
    'position' => 'normal',
    'layout' => 'default',
    'hide_on_screen' => array (
      0 => 'permalink',
      1 => 'the_content',
      2 => 'excerpt',
      3 => 'custom_fields',
      4 => 'discussion',
      5 => 'comments',
      6 => 'revisions',
      7 => 'slug',
      8 => 'author',
      9 => 'format',
      10 => 'featured_image',
      11 => 'categories',
      12 => 'tags',
      13 => 'send-trackbacks',
  ));
  $default = array('position' => 'normal','layout' => 'default', 'hide_on_screen' => array());

  register_field_group(array(
    'id' => 'acf_home_page_images',
    'title' => 'Home Page Images',
    'fields' => array(
      array(
        'key' => 'field_header_image',
        'label' => 'Header',
        'name' => 'header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_sub_header_image',
        'label' => 'Sub Header',
        'name' => 'sub_header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_mobile_header_image',
        'label' => 'Mobile Header',
        'name' => 'mobile_header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
    ),
    'location' => $rules,
    'options' => $hide_all,
    'menu_order' => 0,
  ));

}
add_action('init', 'inmetrics_acf_home_page');

?>