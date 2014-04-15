<?php

function t_url($path) {
  echo(rel_url($path));
}

function rel_url($path) {
  return trailingslashit(get_template_directory_uri()) . $path;
}

function t_img($field, $post_id = null) {
  echo img_tag($field, $post_id);
}

function img_tag($field, $post_id = null) {
  $image = get_field($field, $post_id);
  if(is_array($image)) {
    $title = $image['title'];
    $alt = $image['alt'];
    $url = $image['url'];
    $width = $image['width'];
    $height = $image['height'];
    return '<img src="'. $url . '" alt="' . $alt .'" title="' . $title . '" width="' . $width . '" height="' . $height . '" />';
  }
}

?>