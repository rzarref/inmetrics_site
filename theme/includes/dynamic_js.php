<?php

function inmetrics_dynamic_home_javascript() {
  if(is_front_page()) {
    $base = trailingslashit(get_template_directory_uri());
    $err_required = esc_attr(__('* Field is required', 'inmetrics'));
    $err_invalid_email = esc_attr(__('* E-mail is invalid', 'inmetrics'));
    $err_email_nomatch = esc_attr(__('* E-mail doesn\'t match', 'inmetrics'));
    echo <<<"JS"
    <script>
    window.config = {
      base: "$base",
      errors: {
        required: "$err_required",
        invalid_email: "$err_invalid_email",
        email_nomatch: "$err_email_nomatch",
      },
    };
    </script>
JS;
  }
}
add_action('wp_head', 'inmetrics_dynamic_home_javascript');

?>