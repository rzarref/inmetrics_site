<?php
  get_header();
  while (have_posts()) {
    the_post();
    get_template_part("content-$post->post_type", get_the_page_name_in_english());
  }
  get_footer();
?>
