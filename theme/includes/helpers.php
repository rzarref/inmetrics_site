<?php

function t_url($path) {
  echo(trailingslashit(get_template_directory_uri()) . $path);
}

function t_img($field, $post_id = null) {  
  $image = get_field($field, $post_id);
  if(is_array($image)) {
    $title = $image['title'];
    $alt = $image['alt'];
    $url = $image['url'];
    $width = $image['width'];
    $height = $image['height'];
    echo('<img src="'. $url . '" alt="' . $alt .'" title="' . $title . '" width="' . $width . '" height="' . $height . '" />');
  }
}

?>