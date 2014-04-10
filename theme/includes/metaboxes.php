<?php

function inmetrics_efficiency_shortcode_slug_metabox($post)
{
  wp_nonce_field('set_shortcode_slug', 'shortcode_slug_nonce');
  $meta = get_post_meta($post->ID);
  ?>
  <div class="acf_postbox">
    <div class="field field_type-text">
      <p class="label">
        <label for="shortcode_slug">
          <?php _e('Efficiency Slug', 'inmetrics') ?>
        </label>
        <?php _e('Used to reference a efficiency in php code', 'inmetrics') ?>
      </p>
      <div class="acf-input-wrap">
        <input type="text" name="shortcode_slug" id="shortcode_slug" class="text"
               value="<?php if(isset($meta['shortcode_slug'])) echo $meta['shortcode_slug'][0]; ?>" />
      </div>
    </div>
  </div>
  <?php
}

function inmetrics_efficiency_shortcode_slug_save($post_id) {
  if(wp_is_post_autosave($post_id)) return;
  if(wp_is_post_revision($post_id)) return;
  if(!isset($_POST['shortcode_slug'])) return;
  if(!wp_verify_nonce($_POST['shortcode_slug_nonce'], 'set_shortcode_slug')) return;

  $value = sanitize_text_field($_POST['shortcode_slug']);
  global $sitepress;
  $trid = $sitepress->get_element_trid($post_id, 'post_efficiency');
  $translations = $sitepress->get_element_translations($trid);
  foreach($translations as $lang => $element) {
    $element_id = $element->element_id;
    update_post_meta($element->element_id, 'shortcode_slug', $value);
  }
}
add_action('save_post', 'inmetrics_efficiency_shortcode_slug_save');

function inmetrics_add_meta_boxes()
{
  add_meta_box('inmetrics_efficiency_shortcode_slug',
               __('Efficiency Slug', 'inmetrics'),
               'inmetrics_efficiency_shortcode_slug_metabox',
               'efficiency',
               'normal', 'default');
}
add_action('add_meta_boxes', 'inmetrics_add_meta_boxes');

?>
