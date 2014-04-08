<?php

function get_the_page_name_in_english()
{
  if(function_exists('icl_object_id')) {
    $id = get_the_ID();
    $original_id = icl_object_id($id, 'page', TRUE, 'en');
    $original_post = get_post($original_id);
    return $original_post->post_name;
  }
  else {
    return get_post()->post_name;
  }
}

?>